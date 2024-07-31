import React from 'react';
import MainContainer from '@/components/MainContainer/MainContainer';
import Header from '@/components/Header/Header';
import EmptyPropertyList from '@/components/EmptyPropertyList/EmptyPropertyList';

export default function Home() {
  return (
    <MainContainer >
      <Header />
      <EmptyPropertyList />
    </MainContainer>
  );
}
