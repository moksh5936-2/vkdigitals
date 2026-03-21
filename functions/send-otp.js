const https = require('https');

const AUTHORIZED_PHONES = ['+918571041192', '+918950369353', '+919034432401'];

exports.handler = async (event) => {
  console.log('Send OTP Request:', { method: event.httpMethod, path: event.path });

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

    const { phone } = JSON.parse(event.body);
    console.log('Sending OTP to:', phone);

    const normalizedPhone = phone.replace(/\s/g, '');

    if (!AUTHORIZED_PHONES.includes(normalizedPhone)) {
      console.warn('Unauthorized phone attempt:', normalizedPhone);
      return {
        statusCode: 403,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Access Denied: This phone number is not authorized." })
      };
    }

    const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_VERIFY_SERVICE_SID } = process.env;

    if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_VERIFY_SERVICE_SID) {
      console.error('Twilio environment variables missing');
      return {
        statusCode: 500,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Twilio credentials not configured." })
      };
    }

    // Call Twilio Verify API using native https
    const auth = Buffer.from(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`).toString('base64');
    const postData = new URLSearchParams();
    postData.append('To', normalizedPhone);
    postData.append('Channel', 'sms');
    const postDataString = postData.toString();

    const options = {
      hostname: 'verify.twilio.com',
      port: 443,
      path: `/v2/Services/${TWILIO_VERIFY_SERVICE_SID}/Verifications`,
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
        body: JSON.stringify({ error: twilioResponse.body.message || 'Twilio API error' })
      };
    }

    console.log('OTP Sent Successfully:', twilioResponse.body.sid);
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ success: true, sid: twilioResponse.body.sid })
    };

  } catch (error) {
    console.error('Send OTP Handler Error:', error);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Internal Server Error: " + error.message })
    };
  }
};
