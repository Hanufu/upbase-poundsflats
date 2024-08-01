import React from 'react'
import MainContainer from '@/src/components/MainContainer/MainContainer'
import EmptyPropertyList from '@/src/components/EmptyPropertyList/EmptyPropertyList'
import Header from '@/src/components/Header/Header'

export default function Home() {
  return (
    <MainContainer >
        <Header message="Bem-vindo, Raphael!" messageStyle={{
          fontSize: 24,
          fontFamily: 'Jura_700Bold',
          lineHeight: 28,
          color: "#10002B",}} />
        <EmptyPropertyList />
    </MainContainer>
  )
}