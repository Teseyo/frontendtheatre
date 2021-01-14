import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Logo from '../img/logo.svg'
import Search from '../img/search.svg'
import Profile from '../img/profile.svg'

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

export default React.memo(() => {
    return (
        <Container>
            <HeaderItems>
                <img src={Logo}></img>
                <img src={Search}></img>
                <img src={Profile}></img>
            </HeaderItems>
        </Container>
    )
})
