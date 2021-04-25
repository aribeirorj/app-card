import styled from 'styled-components';

export const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 2fr));
  grid-column-gap: 0rem;
  grid-row-gap: 2rem;
  width: 100%;
  justify-items: center;
  align-items: center;
  margin-bottom: 4.5rem;
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

  /* border-radius: 10px; */

  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

  &:hover {
    transform: rotateY(180deg);
    cursor: pointer;
  }
`;

export const Front = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  border-radius: 10px;
  align-items: center;
  background-color: #fff;

  background: url(${(props) => props.img}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

export const Back = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;

  background-color: #fff;
  border-radius: 10px;

  width: 100%;
  height: 100%;

  backface-visibility: hidden;
  transform: rotateY(180deg);
`;

export const Head = styled.div`
  font-size: 2em;
  text-align: center;

  color: #fff;
  line-height: 1em;
  padding: 0.9em;
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

  font-size: 1.2em;
  color: #fff;
  /* justify-content: space-around; */
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
