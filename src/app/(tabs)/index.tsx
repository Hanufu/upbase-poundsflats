import React, { useEffect, useState } from 'react';
import MainContainer from '@/src/components/MainContainer/MainContainer';
import EmptyPropertyList from '@/src/components/EmptyPropertyList/EmptyPropertyList';
import Header from '@/src/components/Header/Header';
import PropertyItem from '@/src/components/EmptyPropertyList/PropertyItem/PropertyItem';
import { ScrollView, StyleSheet } from 'react-native';
import { usePropertyDatabase, PropertyDatabase } from '@/src/database/usePropertyDatabase'; // Ajuste o caminho conforme necessário

export default function Home() {
  const [properties, setProperties] = useState<PropertyDatabase[]>([]);
  const { listAll } = usePropertyDatabase();

  useEffect(() => {
    async function fetchProperties() {
      try {
        const data = await listAll();
        setProperties(data);
      } catch (error) {
        console.error("Failed to fetch properties:", error);
      }
    }

    fetchProperties();
  }, [listAll]);

  return (
    <MainContainer>
      <Header 
        message="Bem-vindo, Raphael!" 
        messageStyle={styles.headerMessage} 
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {properties.length === 0 ? (
          <EmptyPropertyList />
        ) : (
          properties.map(property => (
            <PropertyItem
              key={property.id}
              nome_imovel={property.nome_imovel}
              localizacao={`${property.endereco}, ${property.cidade}`}
              preco={property.preco ?? 98} 
            />
          ))
        )}
      </ScrollView>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 24,
  },
  headerMessage: {
    fontSize: 24,
    fontFamily: 'Jura_700Bold',
    lineHeight: 28,
    color: "#10002B",
  },
});
