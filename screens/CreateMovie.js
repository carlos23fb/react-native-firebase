import React, { useState } from 'react'
import { View, Text, Button, TextInput, ScrollView, StyleSheet } from 'react-native'
import firebase from '../database/firebase'
import { collection, addDoc, doc, getDocs } from 'firebase/firestore'

export const CreateMovie = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput placeholder='Nombre de la Pelicula'/>
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
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc"
    }
})