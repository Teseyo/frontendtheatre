import React, {useState} from 'react'
import {useEffect} from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";

import Cards from 'react-credit-cards';

import { useHistory } from "react-router";
import { AUTH_TOKEN } from "../utils/constants";

import { createApolloFetch } from "apollo-fetch";
import { useQuery } from "@apollo/client";
import { useMutation, ClientContext } from "graphql-hooks";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
// import './style.scss'
import 'react-credit-cards/es/styles-compiled.css';

const Dust2 = styled.a`
    display: flex;
    width:100%;
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

const Button = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px 12px;
    flex:1;
height: 35px;
left: calc(50% - 78px/2 - 212px);
top: calc(50% - 30px/2 - 1353.5px);

margin:0 auto;
margin-top:20px;

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

const Container = styled.div`
  width: 100%;
  height: 88.5vh;
`


//   function useQ() {
//     const [ login, setLogin ] = useState(null);
//     const { client, loading, data} = useQuery(
//         DASHBOARD_QUERY,
//         { fetchPolicy: "cache-and-network" }
//       )
//     //   setLogin(data.dashboard.login)
//       console.log((data.dashboard.login))
//     //   console.log(login)
//   }

  export default class PaymentForm extends React.Component {
    state = {
      cvc: '',
      expiry: '',
      focus: '',
      name: '',
      number: '',
    };
  
    handleInputFocus = (e) => {
      this.setState({ focus: e.target.name });
    }
    
    handleInputChange = (e) => {
      const { name, value } = e.target;
      
      this.setState({ [name]: value });
    }
    
    render() {
      return (
        <Container>
        <div id="PaymentForm" style={{marginTop:'40px'}}>
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
          />
          <form>
            <div style={{display:'flex',flexDirection:'column', width:'300px', margin:'0 auto', marginTop:'20px'}}>
              <input style={{outline:'none',marginTop:'10px', background: '#FFFFFF', border: '2px solid #359EFF', borderRadius: '3px', height: '25px', fontFamily: 'Jost', padding:'5px'}}
              type="tel"
              name="number"
              placeholder="Card Number"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
             <input style={{outline:'none',marginTop:'10px', background: '#FFFFFF', border: '2px solid #359EFF', borderRadius: '3px', height: '25px', fontFamily: 'Jost', padding:'5px' }}
              type="tel"
              name="name"
              placeholder="name"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          
            <input style={{outline:'none',marginTop:'10px', background: '#FFFFFF', border: '2px solid #359EFF', borderRadius: '3px', height: '25px', fontFamily: 'Jost', padding:'5px'}}
              type="number"
              max="9999"
              size="4"
              data-max="4"
              maxlength="4"
              name="expiry"
              placeholder="expiry"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
              <input style={{outline:'none',marginTop:'10px', background: '#FFFFFF', border: '2px solid #359EFF', borderRadius: '3px', height: '25px', fontFamily: 'Jost', padding:'5px'}}
              type="tel"
              name="cvc"
              placeholder="cvc"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            </div>
            <Button>Подтвердить</Button>
          </form>
        </div>
        </Container>
      );
    }
  }
