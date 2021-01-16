import React, { useEffect }  from 'react'
import { useState } from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Logo from '../img/logo.svg'
import Search from '../img/search.svg'
import Profile from '../img/profile.svg'

import { useHistory } from 'react-router';
import { AUTH_TOKEN } from '../utils/constants';

import { createApolloFetch } from 'apollo-fetch'
import { useMutation, ClientContext } from 'graphql-hooks';
import { useQuery } from '@apollo/client'
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';


const Container = styled.div`
    width: 100%;
    height: 73px;
    background-color: #383E4B;

`

const HeaderItems = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items:center;
    height: 100%;
`

const DASHBOARD_QUERY = gql`
  query UserDashboard {
    dashboard {
        id
        email
        login
        role
    }
  }
`;


function UserGreeting(props) {
    return( <a style={{height:'47x'}} href="/profile" ><img src={Profile} ></img></a> )
};

function GuestGreeting(props){
    return( <a style={{height:'47x'}} href="/login" ><img src={Profile} ></img></a> )
};

function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />
    }
    return (<GuestGreeting />)
}

export default React.memo(() => {

    // const history = useHistory();
    // const authToken = localStorage.getItem(AUTH_TOKEN);

    // console.log(localStorage.getItem(AUTH_TOKEN));

    // const { createApolloFetch } = require('apollo-fetch');

    // const fetch = createApolloFetch({
    //     uri: 'http://192.168.0.83:4000/graphql',
    //   });
    //   const { client, loading, data} = useQuery(
    //     DASHBOARD_QUERY,
    //     { fetchPolicy: "cache-and-network" }
        
    //   );
    //   console.log(data.dashboard)

    // const [data, setData ] = useState(0);
    
    //   fetch({
    //     query: `mutation{
    //        registerUser(data:{
    //            login: "leha"
    //            email: "leha@gmail.com"
    //            password: "13371337"
    //        }){
    //            token
    //        }
    //     }
          
    //   `})

    const [ ar, setAr ] = useState(null);

    useEffect(() => {
        if (localStorage.getItem(AUTH_TOKEN) == null ) {
            setAr(false)       
        } else {
            setAr(true)
        }
    });

    // console.log(ar)

    return (
        <Container>
            <HeaderItems>
                <a  href="/"><img src={Logo} ></img></a>
                <img src={Search}></img>
                <Greeting isLoggedIn={ar} />
                {/* <a style={{height:'47x'}} href="/login" ><img src={Profile} ></img></a> */}
            </HeaderItems>
        </Container>
    )
})
