-- Initial Schema for VK Digitals (Neon/Postgres)

CREATE TABLE IF NOT EXISTS blogs (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT,
    author TEXT,
    image TEXT,
    excerpt TEXT,
    status TEXT DEFAULT 'draft',
    "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    views INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS comments (
    id SERIAL PRIMARY KEY,
    "blogId" TEXT REFERENCES blogs(id) ON DELETE CASCADE,
    author TEXT,
    content TEXT,
    status TEXT DEFAULT 'pending',
    "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS settings (
    type TEXT PRIMARY KEY,
    data JSONB,
    "updatedAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Initial site settings
INSERT INTO settings (type, data) VALUES ('site', '{}') ON CONFLICT DO NOTHING;
