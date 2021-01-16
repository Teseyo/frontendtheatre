import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { useHistory } from "react-router";
import { AUTH_TOKEN } from "../utils/constants";

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

const Dust2 = styled.div`
  display: flex;
  background-color: #121829;
  width: 100%;
  height: 1080px;
  justify-content: center;
`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 12px;
  width: 90px;
  height: 35px;
  left: calc(50% - 78px / 2 - 212px);
  top: calc(50% - 30px / 2 - 1353.5px);

  font-family: Jost;
  font-style: normal;
  font-weight: 50;
  font-size: 18px;
  line-height: 35px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;

  background: none;
  border-radius: 10px;
  border: none;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;

const ButtonR = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 12px;
  width: 125px;
  height: 35px;
  left: calc(50% - 78px / 2 - 212px);
  top: calc(50% - 30px / 2 - 1353.5px);

  font-family: Jost;
  font-style: normal;
  font-weight: 50;
  font-size: 18px;
  line-height: 35px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;

  background: #359eff;
  border-radius: 10px;
  border: none;
  outline: none;
  &:hover {
    cursor: pointer;
  }
`;

const Buttonwrow = styled.div`
  display: flex;
  flex-direction: row;
  width: 30vw;
  justify-content: space-between;
`;

const Reg = styled.div`
  margin-top: 50px;
`;

const Inputs = styled.input`
  background: #ffffff;
  border: 2px solid #359eff;
  box-sizing: border-box;
  border-radius: 3px;
  outline: none;
  flex: 1;
  padding: 7px;

  font-family: Jost;
  font-style: normal;
  font-weight: 1;
  font-size: 18px;
  line-height: 26px;
  margin-top: 25px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: Column;
`;

const Input = styled.button`
  display: flex;
  justify-content: center;
  background: #359eff;
  color: #fff;
  cursor: pointer;

  font-family: Jost;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 35px;

  color: #ffffff;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 10px 10px;
  margin-bottom: 0;
  text-transform: uppercase;
  flex: 1;
  border-radius: 22.5px;
  height: 45px;
  border-color: transparent;
  box-shadow: 0px;
  outline: none;
  transition: 0.15s;
  text-align: center;
  &:active {
    background-color: #ffffff;
  }
`;

// const REGISTER_MUTATION = gql`
// mutation {
//   registerUser(
//     data: { login: "${login}", email: "${mail}", password: "${password}" }
//   ) {
//     token
//   }
// }
// `;

// function Registration() {
//     const { client, loading, data } = useMutation(
//         REGISTER_MUTATION,
//       { fetchPolicy: "cache-and-network-only" });
//       console.log(data) }

export default React.memo(() => {

    const { createApolloFetch } = require('apollo-fetch');

    const fetch = createApolloFetch({
      uri: 'http://192.168.0.83:4000/graphql',
    });

  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);
  const [mail, setMail] = useState(null);

  const onClicke = () => {
    fetch({
        query: `mutation {
            registerUser( data: { login: "${login}", email: "${mail}", password: "${password}" }
            ){
              token
            }
          }`}) .then((data) => {
                console.log(data)
                localStorage.setItem(AUTH_TOKEN, data.data.registerUser.token);
                // history.push('/');
            })
  };

  return (
    <Dust2>
      <Reg>
        <div>
          <Buttonwrow>
            <Link to="/Login" style={{ textDecoration: "none" }}>
              <Button>Вход</Button>
            </Link>
            <ButtonR>Регистрация</ButtonR>
          </Buttonwrow>
          <form>
          <Column>
            <Inputs
              onChange={(e) => setLogin(e.target.value)}
              placeholder="Логин"
              type="Login"
            ></Inputs>
            <Inputs
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Пароль"
              type="Password"
            ></Inputs>
            <Inputs
              onChange={(e) => setMail(e.target.value)}
              placeholder="Почта"
              type="email"
            ></Inputs>
          </Column>
          <Link to="/" style={{textDecoration:'none'}}>
          <Input
            style={{ margin: "0 auto", marginTop: "35px" }}
            type="submit"
            value="Зарегистрироваться"
            onClick={onClicke}
          >
            Зарегистрироваться
          </Input>
          </Link>
          </form>
        </div>
      </Reg>
    </Dust2>
  );
});
