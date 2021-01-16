import React, { useState } from 'react'
import styled from 'styled-components';
import './../components/radiobutton.css' 
import Idcom from './id';




const RadioButton=((props) => {
    
    const { time, ids } = props
    return (
        <div >
            <span>
                
                <div className="form_radio_btn" >
                    <input id={ids} type="radio" name="radio" value="1"/>
                    <label for={ids}>{time}</label>
                </div>

            </span>
        </div>
    )


})

export default RadioButton;