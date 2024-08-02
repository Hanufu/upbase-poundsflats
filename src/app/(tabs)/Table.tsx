import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MainContainer from '@/src/components/MainContainer/MainContainer';
import Header from '@/src/components/Header/Header';
import PropertyItem from '@/src/components/EmptyPropertyList/PropertyItem/PropertyItem';
import { usePropertyDatabase, PropertyDatabase } from '@/src/database/usePropertyDatabase';

export default function Table() {
  const [properties, setProperties] = useState<PropertyDatabase[]>([]);
  const { listAll, update, deleteProperty } = usePropertyDatabase();

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

  const handleUpdate = (property: PropertyDatabase) => {
    // Navigate to /register with property data
    // Assuming navigation setup is already configured
    // navigation.navigate('Register', { property });
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteProperty(id);
      setProperties(prevProperties => prevProperties.filter(property => property.id !== id));
    } catch (error) {
      console.error("Failed to delete property:", error);
    }
  };

  return (
    <MainContainer>
      <Header 
        message={properties.length === 0 ? "Não tem imóveis cadastrados" : "Seus Imóveis Cadastrados"} 
        messageStyle={styles.headerMessage} 
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {properties.length > 0 && properties.map(property => (
          <View key={property.id} style={styles.propertyContainer}>
            <PropertyItem
              nome_imovel={property.nome_imovel}
              localizacao={`${property.endereco}, ${property.cidade}`}
              preco={property.preco ?? 98} 
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity 
                style={[styles.button, styles.updateButton]} 
                onPress={() => handleUpdate(property)}
              >
                <Text style={styles.buttonText}>Atualizar Imóvel</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.button, styles.deleteButton]} 
                onPress={() => handleDelete(property.id!)}
              >
                <Text style={styles.buttonText}>Apagar Imóvel</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
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
  propertyContainer: {
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  updateButton: {
    backgroundColor: '#7B2CBF',
  },
  deleteButton: {
    backgroundColor: '#E63946', 
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Jura_300Light',
  },
});
