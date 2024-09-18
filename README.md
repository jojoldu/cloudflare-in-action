# Cloudflare Workers 로 Basic Auth가 포함된 서버리스 RSS 배포하기

## wrangler 설치

```bash
npm install -g wrangler
```

## wrangler로 프로젝트 생성

```bash
wrangler generate basic-auth-rss
```

```bash
✨ Created basic-auth-rss/wrangler.toml
✔ Would you like to use git to manage this Worker? … yes
✨ Initialized git repository at basic-auth-rss
✔ No package.json found. Would you like to create one? … yes
✨ Created basic-auth-rss/package.json
✔ Would you like to use TypeScript? … yes
✨ Created basic-auth-rss/tsconfig.json
✔ Would you like to create a Worker at basic-auth-rss/src/index.ts? › Fetch handler
✨ Created basic-auth-rss/src/index.ts
✔ Would you like us to write your first test with Vitest? … yes
✨ Created basic-auth-rss/src/index.test.ts
```
