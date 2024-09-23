# Cloudflare Workers 로 Basic Auth가 포함된 서버리스 RSS 배포하기

## 0. 설치 환경

- Node.js: 20.12.0
- npm: 10.9.0
- wrangler: 3.78.7

## 1. wrangler 설치

```bash
npm install -g wrangler
```

## wrangler로 프로젝트 생성

```bash
wrangler init basic-auth-rss
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

## 환경 변수 사용

### Wrangler로 Secrets 설정

먼저, Wrangler CLI를 사용하여 username과 password를 secrets으로 설정한다.  
아래 명령어를 차례로 입력하면 된다.

```bash
wrangler secret put USERNAME
wrangler secret put PASSWORD
```


```bash
wrangler secret put USERNAME

 ⛅️ wrangler 3.78.4 (update available 3.78.7)
-------------------------------------------------------

▲ [WARNING] Processing wrangler.toml configuration:

    - 😶 Ignored: "type":
      Most common features now work out of the box with wrangler, including modules, jsx,
  typescript, etc. If you need anything more, use a custom build.


Attempting to login via OAuth...
Opening a link in your default browser: https://dash.cloudflare.com/oauth2/auth?
Successfully logged in.
✔ Enter a secret value: … *******
🌀 Creating the secret for the Worker "basic-auth-rss" 
✨ Success! Uploaded secret USERNAME

```


## 7. 배포

모든 작업이 완료되면 다음 명령어로 Cloudflare Workers에 배포한다.

```bash
wrangler deploy
```
