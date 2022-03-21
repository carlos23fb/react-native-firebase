import React, { useState, useEffect } from 'react'
import { View, Text, Button, TextInput, ScrollView, StyleSheet } from 'react-native'
import firebase from '../database/firebase'
import { collection, addDoc, doc, getDocs } from 'firebase/firestore'
import { async } from '@firebase/util'
import SectionedMultiSelect from 'react-native-sectioned-multi-select'
import Icon from 'react-native-vector-icons/MaterialIcons'


export const CreateMovie = () => {

    const db = firebase.db;

    const lista_generos = [];

    const [state, setState] = useState({
        name: '',
        selectedItems: []
    })

    const onSelectedItemsChange = (selectedItems) => {
        setState({ ...state,  selectedItems: selectedItems});
    };

    const printGeneros = () =>{
        console.log(state.selectedItems)

    }

    useEffect(() => {
        cargarGeneros();
    }, []);

    const cargarGeneros = async () => {
        const generos = await getDocs(collection(db, "genero"));
        generos.forEach((doc) => {
            lista_generos.push({ id: doc.id, name: doc.data().name })
        })
        console.log(lista_generos)

    }


    const handleChangeText = (name, value) => {
        setState({ ...state, [name]: value })
    }

    const crearPelicula = async () => {
        try {
            const docRef = await addDoc(collection(db, "pelicula"), {
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
                <TextInput placeholder='Nombre de la Pelicula' onChangeText={(value) => handleChangeText('name', value)} />
            </View>


            <View>
                <SectionedMultiSelect
                    items={lista_generos}
                    IconRenderer={Icon}
                    uniqueKey="id"
                    subKey="children"
                    selectText="Choose some things..."
                    showDropDowns={true}
                    readOnlyHeadings={true}
                    onSelectedItemsChange={onSelectedItemsChange}
                    selectedItems={state.selectedItems}
                />
            </View>


            <View style={styles.inputGroup}>
                <Button title='Guardar Pelicula' onPress={() => crearPelicula()} />
            </View>
            <View style={styles.inputGroup}>
                <Button title='Imprimir Generos' onPress={() => printGeneros()} />
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