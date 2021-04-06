import React, { useEffect, useCallback, useState } from 'react';
import { Container } from './styles';
import { Card, Search, Loading } from '../../components';
import { loadDataAnime } from '../../useCase';

function Dashboard() {
  const [dataAnime, setDataAnime] = useState('');

  const loadDataSearch = useCallback(async (params) => {
    let infoDataSearch = await loadDataAnime(params);
    !!infoDataSearch && setDataAnime(infoDataSearch.data);
  }, []);

  const loadDataInitial = useCallback(async () => {
    let infoData = await loadDataAnime();
    infoData && setDataAnime(infoData.data);
  }, []);

  useEffect(() => {
    loadDataInitial();
  }, [loadDataInitial]);

  return (
    <Container>
      <Search loadDataSearch={loadDataSearch} />
      {!!dataAnime ? <Card dataAnime={dataAnime.data} /> : <Loading />}
    </Container>
  );
}

export default Dashboard;
