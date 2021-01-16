import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
  split
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';

import { AUTH_TOKEN } from './utils/constants'


const link = createHttpLink({
  uri: 'http://192.168.0.83:4000/graphql',
  credentials: 'same-origin'
});

const httpLink = createHttpLink({
  uri: 'http://192.168.0.83:4000/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem(AUTH_TOKEN); 
  // console.log(token)
  // alert(token)
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      "Authorization": `${token}`,
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  }
});



const app = <ApolloProvider client={client}>
<BrowserRouter>
  <App />
</BrowserRouter>
</ApolloProvider>


ReactDOM.render(
  app,
  document.getElementById('root')
);
