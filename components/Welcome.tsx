import { Text } from "react-native";
import { StyleSheet } from "react-native";

export default function Welcome(){
    return(
        <Text style={styles.text}>
            Bem-vindo, Raphael!
        </Text>
    )

}

const styles = StyleSheet.create({
    text:{
        fontSize:24,
        fontFamily: 'Jura_700Bold',
        lineHeight: 28,
        
    }    
})

