const https = require('https');

exports.handler = async (event) => {
  console.log('Verify OTP Request:', { method: event.httpMethod, path: event.path });
  
  if (event.httpMethod !== "POST") {
    return { 
      statusCode: 405, 
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Method Not Allowed" }) 
    };
  }

  try {
    if (!event.body) {
      return { 
        statusCode: 400, 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Empty request body" }) 
      };
    }

    const { phone, code } = JSON.parse(event.body);
    const normalizedPhone = phone.replace(/\s/g, '');
    console.log('Verifying code for:', normalizedPhone);

    const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_VERIFY_SERVICE_SID } = process.env;

    if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_VERIFY_SERVICE_SID) {
      console.error('Twilio environment variables missing');
      return {
        statusCode: 500,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Twilio credentials not configured." })
      };
    }

    // Call Twilio VerificationCheck API using native https
    const auth = Buffer.from(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`).toString('base64');
    const postData = new URLSearchParams();
    postData.append('To', normalizedPhone);
    postData.append('Code', code);
    const postDataString = postData.toString();

    const options = {
      hostname: 'verify.twilio.com',
      port: 443,
      path: `/v2/Services/${TWILIO_VERIFY_SERVICE_SID}/VerificationCheck`,
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postDataString)
      }
    };

    const twilioResponse = await new Promise((resolve, reject) => {
      const req = https.request(options, (res) => {
        let body = '';
        res.on('data', (chunk) => body += chunk);
        res.on('end', () => resolve({
          statusCode: res.statusCode,
          body: JSON.parse(body)
        }));
      });
      req.on('error', (e) => reject(e));
      req.write(postDataString);
      req.end();
    });

    if (twilioResponse.statusCode < 200 || twilioResponse.statusCode >= 300) {
      console.error('Twilio API Error Response:', twilioResponse.body);
      return {
        statusCode: twilioResponse.statusCode,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: twilioResponse.body.message || 'Verification failed' })
      };
    }

    if (twilioResponse.body.status === 'approved') {
      console.log('OTP Verified Successfully for:', normalizedPhone);
      const adminToken = process.env.ADMIN_TOKEN || 'secure-temp-token';
      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ success: true, status: twilioResponse.body.status, token: adminToken })
      };
    } else {
      console.warn('Invalid code attempt for:', normalizedPhone, 'Status:', twilioResponse.body.status);
      return {
        statusCode: 401,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Invalid verification code." })
      };
    }

  } catch (error) {
    console.error('Verify OTP Handler Error:', error);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Internal Server Error: " + error.message })
    };
  }
};
