import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Card from '../components/card.js'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Container = styled.div`
    max-width: 100%;
    background-color: #383E4B;
    margin: 0 auto;
`

const data = [
    {
        id:'1',
        time:"04.01 17:00",
        subtitle:'Оперетта / Сильва',
        title:'Ойуур оскуолата',
        name:'Театр оперы и балета им. Суорун Омоллоона',
        description:'По словам самого маэстро Кальмана, главная героиня Сильва Вареску стала его любимицей. Оперетта о романтической истории любви актрисы кабаре Сильвы Вареску и князя Эдвина ставится на российских сценах уже девяносто девять лет и до сих пор вызывает неподдельный интерес у зрителя.',
    },
    {
        id:'2',
        time:"04.01 17:00",
        subtitle:'Оперетта / Сильва',
        title:'Ойуур оскуолата',
        name:'Театр оперы и балета им. Суорун Омоллоона',
        description:'По словам самого маэстро Кальмана, главная героиня Сильва Вареску стала его любимицей. Оперетта о романтической истории любви актрисы кабаре Сильвы Вареску и князя Эдвина ставится на российских сценах уже девяносто девять лет и до сих пор вызывает неподдельный интерес у зрителя.',
    },
   
]

const SliderDiv = styled.div`
    max-width: 90%;
    margin: 0 auto;
`



export default React.memo(() => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      
    return (
        
        <Container>
            <SliderDiv>
                <Slider {...settings}>
                    {data.map((item) => { return( <Card id={item.id} subtitle={item.subtitle} title={item.title} name={item.name} description={item.description} time={item.time} /> ) })} 
                </Slider>
            </SliderDiv>

        </Container>
    )
})
