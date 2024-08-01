import React from 'react'
import MainContainer from '@/components/MainContainer/MainContainer'
import EmptyPropertyList from '@/components/EmptyPropertyList/EmptyPropertyList'
import Header from '@/components/Header/Header'

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