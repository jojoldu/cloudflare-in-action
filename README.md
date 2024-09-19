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

## 환경 변수 사용

### Wrangler로 Secrets 설정

먼저, Wrangler CLI를 사용하여 username과 password를 secrets으로 설정한다.

1.1 Secrets 추가
Wrangler를 통해 username과 password를 비밀로 저장하려면, 아래 명령어를 사용합니다.

bash
코드 복사
wrangler secret put USERNAME
이 명령어를 실행하면, 터미널에서 username 값을 입력하라는 메시지가 나타납니다. 이때, 원하는 username을 입력합니다.
bash
코드 복사
wrangler secret put PASSWORD
같은 방식으로 password 값을 입력합니다.
