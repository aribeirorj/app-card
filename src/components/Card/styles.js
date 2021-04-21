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
  display: flex;
  flex-direction: column;
  border-radius: 45px !important;
  align-items: center;
  background-color: #fff;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  /* width: 300px; */
  min-width: 280px;
  max-width: 300px;
  height: 440px;
  padding: 30px;
  -webkit-box-shadow: 33px 40px 47px -23px rgba(173, 173, 173, 0.75);
  -moz-box-shadow: 33px 40px 47px -23px rgba(173, 173, 173, 0.75);
  box-shadow: 33px 40px 47px -23px rgba(173, 173, 173, 0.75);
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 20pt;
  width: 100%;

  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 0px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: end; */
  height: 100vh;
  justify-content: flex-end;

  div {
    margin: 5pt;
  }
`;

export const Description = styled.div`
  display: flex;
  justify-content: space-around;

  p {
    white-space: wrap;
    overflow: auto;
    text-overflow: ellipsis;
    max-width: 100%;
    max-height: 100px;
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
