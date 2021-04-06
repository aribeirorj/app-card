import React from 'react';
import { useForm } from 'react-hook-form';

import { Container, Title, Input } from './styles';

function Search(props) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    props.loadDataSearch(data);
  };

  return (
    <Container>
      <Title>Animes List</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          name="character"
          placeholder="Qual seu anime favorito?"
          autoComplete="off"
          {...register('character')}
        />
      </form>
    </Container>
  );
}

export default Search;
