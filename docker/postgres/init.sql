CREATE TYPE news_status AS ENUM (
    'True',
    'False',
    'Unverified'
);

CREATE TABLE IF NOT EXISTS news (
    id SERIAL PRIMARY KEY,
    url TEXT NOT NULL,
    status news_status NOT NULL DEFAULT 'Unverified'
);