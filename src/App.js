import React, { useEffect, useState } from 'react';
import {Switch, Route} from 'react-router-dom';
import styled from 'styled-components';

import Routes from './components/routes'

import Header from './components/header'
import Content from './pages/content.jsx'
import Login from './pages/login.jsx'
import Registration from './pages/registration.jsx'
import CreditCard from './pages/CreditCard.jsx'
import View from './pages/view.jsx'

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import { AUTH_TOKEN } from './utils/constants'

import { createApolloFetch } from "apollo-fetch";
import { useQuery } from "@apollo/client";
import { useMutation, ClientContext } from "graphql-hooks";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import {
  AxiosProvider,
  Request,
  Get,
  Delete,
  Head,
  Post,
  Put,
  Patch,
  withAxios,
} from "react-axios";


const Container = styled.div`
  width:100%;
  height: 99%;
  background-color: #121829;
`
// const client = new ApolloClient({
//   uri: 'http://192.168.0.83:4000/graphql'
// });

const CardSe = gql`
query {
  sessions {
    id
    title
    description
    category
    date
    theatre {
      name
    }
  }
}
`;


// function Zap() {
//   const { client, loading, data} = useQuery(
//     CardSe,
//     { fetchPolicy: "cache-and-network" }
//   );
// }


function App() {

  const { client, loading, data} = useQuery(
    CardSe,
    { fetchPolicy: "cache-and-network" }
  );
  
  if(!loading){
  console.log(data?.sessions)
}

  const [idhr, setIdhr] = useState(null);

  useEffect(()=>{
 
    data?.sessions?.map((item) => setIdhr(item.id))
    // console.log(idhr)
  })

  // const Vi = '/View/'+idhr;
  
  return (

    

    <Container>
      <Header/>
      <Switch>
        <Route path='/' exact component={Content}/>

        <Route path='/Login' exact component={Login}/>
        <Route path='/Registration' exact component={Registration}/>

        <Route path='/CreditCard' exact component={CreditCard}/>

        <Route path="/View/:id" exact component={View} />
        {data?.sessions?.map((item) => {return (<Routes Vi={item.id} />)})}
      </Switch>
    </Container>
  );
}

export default App;
