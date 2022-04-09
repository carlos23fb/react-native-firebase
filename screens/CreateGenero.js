import React, {useState} from 'react'
import { View, Text, Button, TextInput, ScrollView, StyleSheet } from 'react-native'
import firebase from '../database/firebase'
import { collection, addDoc, doc, getDocs } from 'firebase/firestore'
import { async } from '@firebase/util'

const db = firebase.db;

export const CreateGenero = () => {

    const [state, setState] = useState({
        name: '',
        generos: []
    })

    const handleChangeText = (name, value) =>{
        setState({[name]: value})
    }


    const listaGeneros = async () =>{
        const generos = await getDocs(collection(db, "genero"));
        generos.forEach((doc) => {
            state.generos.push(doc.data().name)
        })
        console.log(state.generos)
    }

    const crearGenero = async () =>{
        try {
            const docRef =  await addDoc(collection(firebase.db, "genero"), {
                name: state.name,
                
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }


    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput placeholder='Nombre Genero' onChangeText={(value) =>  handleChangeText('name',value)}></TextInput>
            </View>
            <View style={styles.inputGroup}>
                <Button title='Guardar Genero' onPress={() => crearGenero()}/>
            </View>
            <View style={styles.inputGroup}>
                <Button title='Imprimir Generos' onPress={() => listaGeneros()} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 35 

    },
    inputGroup:{
        flex: 1,
        padding:0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc"
    }
})