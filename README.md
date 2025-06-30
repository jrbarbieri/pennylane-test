## Project Overview

This project was created to make it easier to find recipes based on the ingredients I have available (or by recipe title as well). I developed the application with a focus on making it simple and fast to discover new meal ideas. The frontend is built with React to provide a dynamic experience, while the backend uses Rails to manage data and integrate with a PostgreSQL database. The project also explores the integration between Rails and modern JavaScript tools, such as asset bundling and dependency management.

## User Stories

1. **As a user, I want to browse a list of recipes, so that I can discover new dishes to prepare.**
2. **As a user, I want to search for recipes by ingredients, so that I can find meals based on what I have available.**
3. **As a user, I want to find recipes based on categories, so that I can easily discover dishes that match my preferences.**

## Dependencies

- Ruby (version 3.3.0)
- Rails
- PostgreSQL
- Node.js (for JavaScript asset building)
- React (frontend)
- esbuild (JavaScript bundler)
- remount (React integration for Rails)

## Getting Started

### 1. Install System Dependencies

- Ruby 3.3.0
- Node.js (recommended: latest LTS)
- PostgreSQL

### 2. Install Ruby Gems

```sh
bundle install
```

### 3. Install JavaScript Dependencies

```sh
yarn install
```

### 4. Set Up the Database

```sh
rails db:setup
```

### 5. Start the Application

```sh
bin/dev
```
