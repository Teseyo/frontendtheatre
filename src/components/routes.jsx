import React from 'react'
import styled from 'styled-components';
import Radiobutton from './radiobutton.js'
import Img from '../img/img.svg'
import { Link } from 'react-router-dom'
import View from './../pages/view'
import {Switch, Route} from 'react-router-dom';

const Routes=((props) => {

    const { Vi } = props

    const Ve = '/'
    const Vl = Ve+Vi


    console.log(Vl)
    return(
    <Route path={Vl} exact component={View} />
    )
    
})

export default Routes;