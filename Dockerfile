FROM node:21-alpine3.18 AS base

RUN npm i -g pnpm 

WORKDIR /app

ARG APP_ENV
ENV APP_ENV=${APP_ENV}

ARG API_BASE_URL
ENV API_BASE_URL=${API_BASE_URL}

ARG FIRST_DATE_DATE
ENV FIRST_DATE_DATE=${FIRST_DATE_DATE}

ARG RUP_PEUN_DATE
ENV RUP_PEUN_DATE=${RUP_PEUN_DATE}

COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . .

RUN pnpm build

FROM node:21-alpine3.18 AS production

WORKDIR /app

COPY --from=base /app/.next/standalone .
COPY --from=base /app/.next/static ./.next/static
COPY --from=base /app/public ./public

EXPOSE 3000

CMD ["node", "server.js"]
