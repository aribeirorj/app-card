import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2.5em;
  font-weight: 800;
  margin-bottom: 0, 3rem;
  line-height: initial;
`;

export const Input = styled.input`
  font-size: 0.9em;
  margin: 2.1rem;
  padding: 0.5rem;
  max-width: 100%;
  border: 0.1rem solid #ced4da;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border-radius: 3rem;
  min-width: 10em;
  width: 14em;

  ::placeholder {
    color: #6c757d;
  }
  &:focus {
    border-color: #80bdff;
  }
`;
