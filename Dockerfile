FROM ruby:3.2

ENV RAILS_ENV=development \
    BUNDLE_JOBS=4 \
    BUNDLE_RETRY=3

RUN apt-get update -qq && \
    apt-get install -y nodejs npm postgresql-client && \
    npm install -g yarn

WORKDIR /app

COPY Gemfile Gemfile.lock ./
RUN bundle install

COPY . .

RUN yarn install --check-files || true

EXPOSE 3000

CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]
