import React, { useState } from "react";
import { Suspense } from "react";
import setState from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Card from "../components/card.js";

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

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Container = styled.div`
  max-width: 100%;
  background-color: #121829;
  margin: 0 auto;
  min-height: 84.4vh;
`;

const data1 = [
  {
    id: "1",
    time: "04.01 17:00",
    subtitle: "Оперетта / Сильва",
    title: "Ойуур оскуолата",
    name: "Театр оперы и балета им. Суорун Омоллоона",
    description:
      "По словам самого маэстро Кальмана, главная героиня Сильва Вареску стала его любимицей. Оперетта о романтической истории любви актрисы кабаре Сильвы Вареску и князя Эдвина ставится на российских сценах уже девяносто девять лет и до сих пор вызывает неподдельный интерес у зрителя.",
  },
  {
    id: "2",
    time: "04.01 17:00",
    subtitle: "Оперетта / Сильва",
    title: "Ойуур оскуолата",
    name: "Театр оперы и балета им. Суорун Омоллоона",
    description:
      "По словам самого маэстро Кальмана, главная героиня Сильва Вареску стала его любимицей. Оперетта о романтической истории любви актрисы кабаре Сильвы Вареску и князя Эдвина ставится на российских сценах уже девяносто девять лет и до сих пор вызывает неподдельный интерес у зрителя.",
  },
];

const SliderDiv = styled.div`
  max-width: 90%;
  margin: 0 auto;
  margin-top: 80px;
`;

// const { query, mutate } = createTestClient(server);

// query({
//     query: GET_USER,
//     variables: { id: 1 }
//   });

// const CardS = gql`
// query{
//     sessions {
//       id
//       title
//       description
//       category
//       theatre{
//         name
//       }
//     }
//   }
// `;

// Querrry(()=> {
//     const { client, loading, data} = useQuery(
//         CardS,
//         { fetchPolicy: "cache-and-network" }

//       );
// })

// function Llodi(){
//     Querrry().then(()=> { return( data.sessions.map((item) => { return ( <Card id={item.id} subtitle={item.category} title={item.title} name={item.theatre.name} description={item.description} time={'17:04'} /> )} ) );
//        });
//     };

//   function Loadg(props){
//       const Loads = props.Loads;
//       if (Loads) {
//           return <Llodi />
//       }
//   }


const CardS = gql`
query {
  sessions {
    id
    title
    description
    category
    date
    theatre {
      name
    }
  }
}
`;


const Content = (props) => {
  const [ar, setAr] = useState(null);



  const { client, loading, data } = useQuery(CardS, { fetchPolicy: "cache-and-network" });

//  console.log(data?.sessions);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  //   setTimeout(Loads );



    return (
        <Container>
          <Suspense fallback={<div>Загрузка...</div>}>
            <SliderDiv>
              <Slider {...settings}>
                {/* {F()} */}
                {/* <Loadg Loads={ar} /> */}
                {data?.sessions?.map((item) => { return( <Card id={item.id} subtitle={item.category} title={item.title} name={item.theatre.name} description={item.description} time={item.date} Linku={item.id} /> ) })} 
              </Slider>
            </SliderDiv>
          </Suspense>
        </Container>
          
  

          
      );
  
        


    // if (loading==true)
    // return (
    //     <Container>
    //       <Suspense fallback={<div>Загрузка...</div>}>
    //         <SliderDiv>
    //           <Slider {...settings}>
    //             {/* {F()} */}
    //             {/* <Loadg Loads={ar} /> */}
    //             {/* {data.sessions.map((item) => { return( <Card id={item.id} subtitle={item.category} title={item.title} name={item.theatre.name} description={item.description} time={'17:04'} /> ) })}  */}
    //           </Slider>
    //         </SliderDiv>
    //       </Suspense>
    //     </Container>
    //   );
      console.log(loading)



  
};

export default Content;
