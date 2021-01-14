import React from 'react';
import {Switch, Route} from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/header'
import Content from './pages/content.jsx'

const Container = styled.div`
  width:100%;
  height: 100%;
`

function App() {
  return (
    <Container>
      <Header/>
      <Switch>
        <Route path='/' exact component={Content}/>
      </Switch>
    </Container>
  );
}

export default App;
