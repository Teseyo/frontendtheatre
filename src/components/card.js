import React from 'react'
import styled from 'styled-components';
import Radiobutton from '../components/radiobutton.js'
import Img from '../img/img.svg'
import './card.css'


const Box = styled.div`
    max-width: 80%;
    margin: 0 auto;
    background-color: #26314E;
    border-radius: 29px;

    /* max-width: 1100px; */

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;

    padding-top: 3em;
    padding-bottom: 5em;
    padding-left: 3em;
    padding-right: 3em;
    @media screen and (max-device-width: 1200px) {
        flex-direction: column;
    }
`



const Content = styled.div`
    /* width: 100%; */
    margin: 0 auto;
    /* max-width: 561px; */

    /* background-color: green; */
`

const Subtitle = styled.div`
    font-family: Jost;
    font-weight: 1;
    font-size: 18px;
    line-height: 26px;
    color: #DBDBDB;

    margin-bottom: 1em;
`

const Title = styled.div`
    font-family: Jost;
    font-weight: 1;
    font-size: 36px;
    line-height: 52px;
    color: #359EFF;
`

const timedata=[
    {
        ids:"1",
        time:"04.01 17:00",
    },
    {
        ids:"2",
        time:"05.01 17:00",
    },
    
]

const Name = styled.div`
    font-family: Jost;
    font-weight: 1;
    font-size: 18px;
    line-height: 26px;
    color: #A3D3FF;
`

const Description = styled.div`
    font-family: Jost;
    font-weight: 1;
    font-size: 18px;
    line-height: 26px;
    color: #FFFFFF;

    margin-bottom: 1.9em;

    
`

const Button = styled.button`
    background: #359EFF;
    border-radius: 22.5px;
    padding: 15px 30px;
    border: none;
    outline: none;
    &:hover {
        cursor: pointer;
    }
`

const ContentBox = styled.div`
    max-width: 561px;
`

const Card=((props) => {

    const { subtitle, title, name, description, id, time } = props
    return (
        <Content>
            
            <Box>
                
                
                <ContentBox> 
                    <Subtitle>{subtitle}</Subtitle>
                    <Title>{title}</Title>
                    {/* <img className='boxImg1' src={Img} alt=""/> */}
                    <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>{timedata.map((item) => { return( <Radiobutton id={id} time={item.time}/> ) })}</div>
                    <Name><p>{name}</p></Name>
                    <Description><p>{description}</p></Description>
                    <Button>Смотреть</Button>
                </ContentBox>
                {/* <img className='boxImg2' src={Img} alt=""/> */}
                
            </Box>
        </Content>
        
        
    )
})

export default Card;