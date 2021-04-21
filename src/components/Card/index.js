import React from 'react';

import {
  Container,
  Head,
  Body,
  Description,
  Footer,
  Details,
  Main,
  CardContainer,
  Front,
  Back,
} from './styles';

import tiny from '../../assets/img/tiny.jpg';

function Card(props = []) {
  const { dataAnime = [] } = props;

  const listCard = dataAnime.map((item, index) => (
    <Container key={index}>
      <CardContainer>
        <Front
          img={
            item.attributes?.coverImage?.large
              ? item.attributes?.coverImage?.tiny
              : tiny
          }
          alt="Imagem do anime"
        >
          <Body>
            <Head>{item.attributes.slug}</Head>
            <Footer>
              <Details>Status: {item.attributes.status}</Details>
            </Footer>
          </Body>
        </Front>
        <Back>
          <Description>
            <h3>Descrição</h3>
            <p>{item.attributes.description}</p>
          </Description>
        </Back>
      </CardContainer>
    </Container>
  ));

  return <Main>{listCard}</Main>;
}

export default Card;
