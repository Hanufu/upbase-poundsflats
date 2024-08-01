import React from 'react'
import MainContainer from '@/components/MainContainer/MainContainer'
import EmptyPropertyList from '@/components/EmptyPropertyList/EmptyPropertyList'
import Header from '@/components/Header/Header'

export default function Home() {
  return (
    <MainContainer >
        <Header />
        <EmptyPropertyList />
    </MainContainer>
  )
}