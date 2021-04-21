import styled from 'styled-components';

export const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 2fr));
  grid-row-gap: 4rem;
  width: 100%;
  justify-items: center;
  align-items: center;
`;

export const Container = styled.div`
  position: relative;
  min-width: 280px;
  max-width: 20rem;
  height: 30rem;
`;

export const CardContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.5s ease;
  border-radius: 45px;

  -webkit-box-shadow: 33px 40px 47px -23px rgba(173, 173, 173, 0.75);
  -moz-box-shadow: 33px 40px 47px -23px rgba(173, 173, 173, 0.75);
  box-shadow: 33px 40px 47px -23px rgba(173, 173, 173, 0.75);

  &:hover {
    transform: rotateY(180deg);
  }
`;

export const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  display: flex;
  flex-direction: column;
  border-radius: 45px;
  align-items: center;
  background-color: #fff;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
`;

export const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 95%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  color: #fff

  display: flex;
  flex-direction: column;
  border-radius: 45px;
  align-items: center;
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 1.5em;
  width: 100%;

  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-end;

  div {
    margin: 5pt;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1em;
  height: inherit;

  p {
    height: inherit;
    overflow: hidden;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

export const Details = styled.div`
  flex-direction: column;
  span {
    display: flex;
    font-size: 50px;
    justify-content: center;
  }

  div {
    display: flex;
    justify-content: center;
  }
`;
