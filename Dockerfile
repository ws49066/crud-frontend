FROM node:16.10.0 AS base
WORKDIR /base
COPY package*.json ./
RUN npm install
COPY . .

WORKDIR /build
COPY --from=base /base ./
RUN npm -v
RUN npm run build

WORKDIR /app
RUN ls
# COPY .env ./
COPY --from=build /build/next.config.js ./
COPY --from=build /build/tsconfig.json ./
COPY --from=build /build/package*.json ./
COPY --from=build /build/.next/ ./.next
COPY --from=build /build/public ./public

RUN ls
RUN npm install next

EXPOSE 3000
CMD npm run start