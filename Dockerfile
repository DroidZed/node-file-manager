
ARG NODE_VERSION=20.11.0

FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV production

WORKDIR /usr/src/app

VOLUME [ "/usr/src/app/public" ]

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=yarn.lock,target=yarn.lock \
    --mount=type=cache,target=/root/.yarn \
    yarn install --production --frozen-lockfile

# Create a non-privileged user that the app will run under.
# See https://docs.docker.com/go/dockerfile-user-best-practices/
ARG UID=10001

RUN adduser \
    --disabled-password \
    --gecos "" \
    --home "/fileManagerusr" \
    --shell "/sbin/nologin" \
    --no-create-home \
    --uid "${UID}" \
    fileManagerusr

USER fileManagerusr

COPY . .

EXPOSE 7000

CMD yarn start
