### GraphQL Frontend

This is a very basic GraphQL frontned that can be used to test certain GraphQL API patterns before we implement them in our Massdriver Org

Note: This frontend is hard coded to communicate with a local backend running on port `4000` with a `/graphql` route for queries/mutations and a `/subscriptions` route for subscriptions. If you would like to change this, do so in `apollo/client.js`

What it includes:

- [NextJS](https://nextjs.org/) for the framework
- [Apollo Client](https://www.apollographql.com/docs/react) for frontend state management
- [graphql-ws](https://www.npmjs.com/package/graphql-ws/v/5.6.0) for subscriptions

## Setup

Follow these steps to run the server locally:

1. Clone the repo

2. Run this to install dependencies

```
yarn install
```

3. Run this to start the server

```
yarn start
```

Everything should now be set up properly and running!
