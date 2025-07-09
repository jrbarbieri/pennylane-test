FROM ruby:3.2

ENV RAILS_ENV=development \
    BUNDLE_JOBS=4 \
    BUNDLE_RETRY=3

RUN apt-get update -qq && \
    apt-get install -y nodejs npm postgresql-client && \
    npm install -g yarn esbuild

WORKDIR /app

COPY package.json ./

RUN npm install -g yarn && \
    yarn install --check-files

COPY Gemfile Gemfile.lock ./

RUN bundle install

COPY . .

ENV PATH="/app/node_modules/.bin:${PATH}"

EXPOSE 3000

CMD ["bin/dev"]
