import React from 'react';

import {
  Container,
  Head,
  Body,
  Description,
  Footer,
  Details,
  Main,
} from './styles';

import tiny from '../../assets/img/tiny.jpg';

function Card(props = []) {
  const { dataAnime = [] } = props;

  const listCard = dataAnime.map((item, index) => (
    <Container
      key={index}
      img={
        item.attributes?.coverImage?.large
          ? item.attributes?.coverImage?.tiny
          : tiny
      }
      alt="Imagem do anime"
    >
      <Body>
        <Head>{item.attributes.slug}</Head>
        <Description>
          <p>{item.attributes.description}</p>
        </Description>
        <Footer>
          <Details>Status: {item.attributes.status}</Details>
        </Footer>
      </Body>
    </Container>
  ));

  return <Main>{listCard}</Main>;
}

export default Card;
