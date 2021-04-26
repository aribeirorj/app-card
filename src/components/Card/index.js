import React from 'react';

import {
  Container,
  Head,
  Body,
  Description,
  Main,
  CardContainer,
  Front,
  Back,
} from './styles';

function Card(props = []) {
  const { dataAnime = [] } = props;

  const listCard = dataAnime.map((item, index) => (
    <Container key={index}>
      <CardContainer>
        <Front
          img={
            item.attributes?.coverImage?.large &&
            item.attributes?.coverImage?.large
          }
          alt="Imagem do anime"
        >
          <Body>
            <Head>{item.attributes.slug}</Head>
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
