// VK Digitals — Blog Utilities
// Shared data layer for blog.html, blog-post.html, and admin panel.
// When DEMO_MODE=true (Firebase not configured), sample posts are shown.

'use strict';

// ── Demo Posts (shown when Firebase is not yet configured) ──────────────────
const DEMO_POSTS = [
  {
    id: 'demo-1',
    title: 'Why Every Brand Needs a Structured Digital Strategy',
    excerpt: 'Most businesses jump into digital marketing without a plan. Here is why structure always beats speed — and how to build a strategy that scales.',
    content: '<h2>The Problem with Unstructured Marketing</h2><p>In today\'s landscape, it\'s tempting to run ads the moment you open a business. But without structure, you\'re spending money on visibility without building equity. Brand equity comes from systematic, intentional communication — not viral luck.</p><h2>The Three Pillars</h2><p>At VK Digitals, we recommend every brand build on three pillars: <strong>Identity</strong>, <strong>Presence</strong>, and <strong>Conversion</strong>. Without all three, the funnel leaks.</p><h2>Getting Started</h2><p>Start with your brand identity. Who are you? What do you stand for? Once that\'s clear, every piece of content and every ad becomes easier — and more effective.</p>',
    tags: ['digital-marketing', 'branding', 'strategy'],
    status: 'published',
    author: 'VK Digitals Team',
    views: 142,
    coverImage: '',
    createdAt: { seconds: 1741900000 },
    updatedAt: { seconds: 1741900000 },
  },
  {
    id: 'demo-2',
    title: 'Financial Planning for Small Businesses in India: A Practical Guide',
    excerpt: 'Managing cash flow, planning for taxes, and structuring capital — a practical framework for small business owners navigating the Indian financial landscape.',
    content: '<h2>Cash Flow is King</h2><p>Many businesses that are profitable on paper run out of cash. Understanding the difference between profit and cash flow is the single most important lesson in business finance.</p><h2>Tax Planning vs Tax Filing</h2><p>Most business owners only think about taxes when the deadline is near. Strategic tax planning throughout the year can save you significantly — both legally and without stress.</p><h2>When to Raise Capital</h2><p>Raising capital before you need it is the golden rule. Explore working capital limits, business loans, and equity funding based on your growth stage.</p>',
    tags: ['financial', 'business', 'advisory'],
    status: 'published',
    author: 'VK Digitals Team',
    views: 98,
    coverImage: '',
    createdAt: { seconds: 1741800000 },
    updatedAt: { seconds: 1741800000 },
  },
  {
    id: 'demo-3',
    title: 'The Power of Video: Why Reels Still Rule in 2026',
    excerpt: 'Video content continues to outperform every other format. Here\'s how to use short-form video strategically — not just for views, but for actual conversion.',
    content: '<h2>Reels vs. Long-Form Video</h2><p>Both have their place. Reels are for discovery; long-form is for depth. Use reels to bring people in and longer content to build trust and convert.</p><h2>Storytelling Over Selling</h2><p>The brands winning on video aren\'t running ads — they\'re telling stories. Your customer\'s journey, your process, your principles: these convert better than product demos alone.</p><h2>Production Doesn\'t Have to Be Expensive</h2><p>At VK Digitals, we have seen brands with simple, well-scripted mobile videos outperform those with expensive productions. Script first; shoot second.</p>',
    tags: ['creative', 'digital-marketing', 'video'],
    status: 'published',
    author: 'VK Digitals Team',
    views: 221,
    coverImage: '',
    createdAt: { seconds: 1741700000 },
    updatedAt: { seconds: 1741700000 },
  },
];

// ── Helpers ─────────────────────────────────────────────────────────────────
function calcReadTime(content) {
  const words = content.replace(/<[^>]*>/g, '').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function formatDate(ts) {
  const d = ts && ts.seconds ? new Date(ts.seconds * 1000) : new Date(ts);
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
}

function tagLabel(tag) {
  const MAP = {
    'digital-marketing': 'Digital Marketing',
    financial: 'Financial Advisory',
    creative: 'Creative',
    branding: 'Branding',
    business: 'Business',
    strategy: 'Strategy',
    video: 'Video',
    advisory: 'Advisory',
  };
  return MAP[tag] || tag;
}

function makeBlogCard(post) {
  const readTime = calcReadTime(post.content || '');
  const tagsHTML = (post.tags || []).slice(0, 3).map(t =>
    `<span class="blog-pill">${tagLabel(t)}</span>`).join('');
  return `
    <article class="blog-card reveal">
      ${post.coverImage ? `<a href="blog-post.html?id=${post.id}"><img class="blog-card__cover" src="${post.coverImage}" alt="${post.title}" loading="lazy" /></a>` : ''}
      <div class="blog-card__body">
        <div class="blog-card__tags">${tagsHTML}</div>
        <h2 class="blog-card__title">
          <a href="blog-post.html?id=${post.id}">${post.title}</a>
        </h2>
        <p class="blog-card__excerpt">${post.excerpt}</p>
        <div class="blog-card__footer">
          <div class="blog-card__meta">
            <div class="author-avatar" style="width:32px;height:32px;font-size:0.75rem;">${(post.author || 'V')[0]}</div>
            <span style="font-size:0.8rem;color:var(--white-dim);">${post.author || 'VK Digitals Team'} · ${formatDate(post.createdAt)}</span>
          </div>
          <div style="display:flex;align-items:center;gap:1rem;">
            <span class="blog-read-time">⏱ ${readTime} min read</span>
            <a href="blog-post.html?id=${post.id}" class="blog-card__link">Read →</a>
          </div>
        </div>
      </div>
    </article>`;
}

// ── Blog Grid (blog.html & home.html) ──────────────────────────────────────
export async function renderBlogGrid(opts = {}) {
  const grid    = opts.container || document.getElementById('blog-grid');
  const limit   = opts.limit || 0;
  const loading = document.getElementById('blog-loading');
  const empty   = document.getElementById('blog-empty');
  const search  = document.getElementById('blog-search');
  const tagBtns = document.querySelectorAll('.blog-tag-btn');

  let allPosts = [];
  let activeTag = 'all';
  let searchQuery = '';

  // Load posts from MongoDB API
  try {
    const response = await fetch('/.netlify/functions/blogs');
    allPosts = await response.json();
  } catch (e) {
    console.warn('API fetch failed, using demo posts:', e);
    allPosts = DEMO_POSTS;
  }

  loading.style.display = 'none';

  function render() {
    let filtered = allPosts.filter(p => {
      const matchTag = activeTag === 'all' || (p.tags || []).includes(activeTag);
      const q = searchQuery.toLowerCase();
      const matchSearch = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q);
      return matchTag && matchSearch;
    });
    
    if (limit > 0) filtered = filtered.slice(0, limit);
    grid.querySelectorAll('.blog-card').forEach(el => el.remove());
    if (filtered.length === 0) {
      empty.style.display = 'block';
    } else {
      empty.style.display = 'none';
      filtered.forEach(post => {
        grid.insertAdjacentHTML('beforeend', makeBlogCard(post));
      });
      grid.querySelectorAll('.reveal').forEach(el => {
        el.classList.remove('visible');
        if (window._revealObserver) window._revealObserver.observe(el);
        else el.classList.add('visible');
      });
    }
  }

  render();

  tagBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tagBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeTag = btn.dataset.tag;
      render();
    });
  });

  let searchTimer;
  search.addEventListener('input', e => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      searchQuery = e.target.value.trim();
      render();
    }, 300);
  });
}

// ── Blog Post (blog-post.html) ──────────────────────────────────────────────
export async function loadBlogPost() {
  const id = new URLSearchParams(window.location.search).get('id');
  const loadingEl  = document.getElementById('post-loading');
  const articleEl  = document.getElementById('post-article');
  const notFoundEl = document.getElementById('post-not-found');
  const commentsSection = document.getElementById('comments-section');

  let post = null;

  try {
    // Load Post
    const pResp = await fetch(`/.netlify/functions/blogs?id=${id}`);
    post = await pResp.json();
    if (!post || post.status !== 'published') throw new Error('Post not found');

    // Load Comments
    const cResp = await fetch(`/.netlify/functions/comments?blogId=${id}`);
    const comments = await cResp.json();
    renderComments(comments);

    // Comment Submission
    const form = document.getElementById('comment-form');
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const hp = document.getElementById('hp-comment');
      if (hp && hp.value !== '') return;
      const name    = document.getElementById('c-name').value.trim();
      const email   = document.getElementById('c-email').value.trim();
      const message = document.getElementById('c-message').value.trim();
      if (!name || !email || message.length < 10) return;
      try {
        await fetch('/.netlify/functions/comments', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ blogId: id, blogTitle: post.title, name, email, message })
        });
        document.getElementById('comment-success').style.display = 'block';
        form.reset();
      } catch (err) { console.error('Comment error:', err); }
    });

  } catch (e) {
    console.warn('API fetch failed:', e);
    loadingEl.style.display = 'none';
    notFoundEl.style.display = 'flex';
    return;
  }

  if (!post) { loadingEl.style.display = 'none'; notFoundEl.style.display = 'flex'; return; }

  // Render post
  document.getElementById('page-title').textContent = post.title + ' | VK Digitals';
  document.getElementById('page-desc').setAttribute('content', post.excerpt || '');
  document.getElementById('post-title').textContent = post.title;
  document.getElementById('post-author').textContent = post.author || 'VK Digitals Team';
  document.getElementById('post-author-avatar').textContent = (post.author || 'V')[0].toUpperCase();
  document.getElementById('post-date').textContent = formatDate(post.createdAt);
  document.getElementById('post-read-time').textContent = '⏱ ' + calcReadTime(post.content || '') + ' min read';
  document.getElementById('post-content').innerHTML = post.content || '';

  const tagsHeroEl   = document.getElementById('post-tags-hero');
  const tagsSideEl   = document.getElementById('post-tags-sidebar');
  const tagsHTML = (post.tags || []).map(t => `<span class="blog-pill">${tagLabel(t)}</span>`).join('');
  tagsHeroEl.innerHTML = tagsHTML;
  tagsSideEl.innerHTML = tagsHTML;

  if (post.coverImage) {
    document.getElementById('post-cover').src = post.coverImage;
    document.getElementById('post-cover-wrap').style.display = 'block';
  }

  // Share links
  const url = encodeURIComponent(window.location.href);
  const title = encodeURIComponent(post.title);
  document.getElementById('share-whatsapp').href = `https://wa.me/?text=${title}%20${url}`;
  document.getElementById('share-linkedin').href = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
  document.getElementById('share-twitter').href  = `https://twitter.com/intent/tweet?text=${title}&url=${url}`;

  loadingEl.style.display  = 'none';
  articleEl.style.display  = 'block';
  commentsSection.style.display = 'block';

  if (DEMO_MODE) {
    renderComments([]);
    document.getElementById('comment-form').addEventListener('submit', e => {
      e.preventDefault();
      document.getElementById('comment-success').style.display = 'block';
      e.target.reset();
    });
  }
}

function renderComments(comments) {
  const list = document.getElementById('comments-list');
  const countEl = document.getElementById('comment-count');
  if (countEl) countEl.textContent = comments.length ? `(${comments.length})` : '';
  if (!comments.length) {
    list.innerHTML = '<p style="color:var(--white-dim);font-size:0.9rem;">No comments yet — be the first!</p>';
    return;
  }
  list.innerHTML = comments.map(c => `
    <div class="comment-item">
      <div class="comment-avatar">${c.name[0].toUpperCase()}</div>
      <div class="comment-body">
        <div class="comment-header">
          <strong class="comment-name">${c.name}</strong>
          <span class="comment-date">${formatDate(c.createdAt)}</span>
        </div>
        <p class="comment-text">${c.message}</p>
      </div>
    </div>`).join('');
}
