import React from 'react'
import MainContainer from '@/src/components/MainContainer/MainContainer'
import Header from '@/src/components/Header/Header'

export default function RegistrationDetail() {
  return (
    <MainContainer>
      <Header message="Agora é hora de dar mais detalhes" messageStyle={{
        fontSize: 24,
        fontFamily: 'Jura_400Regular',
        lineHeight: 28,
        color: "#10002B",
        }}/>
    </MainContainer>
  )
}