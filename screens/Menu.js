import React from 'react'
import { View, Text, Button, TextInput, ScrollView, StyleSheet } from 'react-native'

export const Menu = (props) => {
    return (
        <ScrollView style={styles.container}>
            
            <View style={styles.inputGroup}>
                <Button title='Crear Genero' onPress={()=>{
                    props.navigation.navigate("Crear Genero");
                }}/>
            </View>
            <View style={styles.inputGroup}>
                <Button title='Nueva Pelicula' onPress={() => {
                    props.navigation.navigate("Crear Pelicula");
                }} />
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35

    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
    }
})