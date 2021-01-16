import React, {useState} from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";

import { useHistory } from 'react-router';
import { AUTH_TOKEN } from '../utils/constants';

import { createApolloFetch } from 'apollo-fetch'
import { useQuery } from '@apollo/client'
import { useMutation, ClientContext } from 'graphql-hooks';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios';

const Dust2 = styled.div`
    display: flex;
    background-color: #121829;
    width:100%;
    height: 92.59vh;
    justify-content:center;
`

const Button = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 12px;
    width: 90px;
height: 35px;
left: calc(50% - 78px/2 - 212px);
top: calc(50% - 30px/2 - 1353.5px);

font-family: Jost;
font-style: normal;
font-weight: 50;
font-size: 18px;
line-height: 35px;
display: flex;
align-items: center;
text-align: center;

color: #FFFFFF;

background: #359EFF;
border-radius: 10px;
border: none;
outline: none;
    &:hover {
        cursor: pointer;
    }
`

const ButtonR = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;


font-family: Jost;
font-style: normal;
font-weight: 50;
font-size: 18px;
line-height: 35px;
display: flex;
align-items: center;
text-align: center;

color: #FFFFFF;

background: none;

border: none; outline: none; 
    &:hover {
        cursor: pointer;
    }
`

const Buttonwrow = styled.div`
    display:flex;
    flex-direction:row;
    width: 30vw;
    justify-content:space-between;
    
`

const Reg = styled.div`
    margin-top: 50px;
`

const Inputs = styled.input`
    background: #FFFFFF;
    border: 2px solid #359EFF;
    box-sizing: border-box;
    border-radius: 3px;
    outline: none;
    flex:1;
    padding:7px;
    

    font-family: Jost;
font-style: normal;
font-weight: 1;
font-size: 18px;
line-height: 26px;
margin-top:25px;
`

const Column = styled.div`
    display:flex;
    flex-direction:Column;
    
`

const Input = styled.button`
    display:flex;
    justify-content:center;
    background:#359EFF;
    color: #fff;
    cursor: pointer;

    font-family: Jost;
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 35px;

color: #FFFFFF;


/* flex: none; */
/* order: 0; */
/* flex-grow: 0; */
margin: 10px 10px;
    margin-bottom: 0;
    text-transform: uppercase;
    width: 123px;
    border-radius: 22.5px;
    height: 45px;
    border-color: transparent;
    box-shadow: 0px;
    outline: none;
    border:none;
    transition: 0.15s;
    text-align: center;
    &:active {
      background-color: #FFFFFF;
    }
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


export default React.memo(() => {

    const history = useHistory();

    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);

    const onClicke = () => {
        console.log(login)
        console.log(password)

    const { createApolloFetch } = require('apollo-fetch');

    const fetch = createApolloFetch({
        uri: 'http://192.168.0.83:4000/graphql',
      });


        fetch({
            query: `mutation{
                authUser(data:{
                login: "leha"
                password: "13371337"
                }){
            token
          }
        }
       
              
          `})
          .then((data) => {
              console.log(data.data.authUser.token)
              localStorage.setItem(AUTH_TOKEN, data.data.authUser.token);
            // login(data.data.authUser.token)
          }, 2000
         
          
          )
        //   .then((data) => {
        //     console.log(data.data.authUser.token)
        //     // localStorage.setItem(AUTH_TOKEN, data.data.authUser.token);
        //     // history.push('/');
        // })
        
    }

    const onClickiii = () => { 
        // localStorage.setItem(AUTH_TOKEN, null);
    }

    return (
        
        <Dust2><Reg>
            
            <div>
            <Buttonwrow>
            <Button>Вход</Button>
            <Link to="/Registration" style={{textDecoration:'none'}}><ButtonR>Регистрация</ButtonR></Link>
            </Buttonwrow>
            <form method="post">
            <Column><Inputs onChange={(e) => setLogin(e.target.value)} placeholder="Логин" type="Login"></Inputs>
            <Inputs onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" type="Password"></Inputs></Column>

            <Link to="/" style={{textDecoration:'none'}}>
                <Input style={{margin:'0 auto', marginTop:'35px'}} type="submit" value="Войти" onClick={onClicke}>Войти</Input>

                <Input style={{margin:'0 auto', marginTop:'35px'}} type="submit" value="проверка" onClick={onClickiii}>Проверка</Input>
            </Link>
            </form>
            </div>
            
        </Reg></Dust2>
    )

})
