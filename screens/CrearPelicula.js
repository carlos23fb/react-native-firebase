import React, { useState, useEffect } from 'react'
import { View, Text, Button, TextInput, ScrollView, StyleSheet } from 'react-native'
import firebase from '../database/firebase'
import { collection, addDoc, getDocs } from 'firebase/firestore'
import MultiSelect from 'react-native-multiple-select';




const db = firebase.db;


export const CrearPelicula = () => {

    useEffect(() => {
        cargarGeneros();
    }, []);
    

    const [generos_state, setGeneros] = useState({
        generos_list: []
    })

    const [form_values, setForm] = useState({
        name: ''
    })


    const handle_form = async () =>{
        try {
            const docRef = await addDoc(collection(db, "pelicula"), {
                name: form_values.name,
                genero: selectedItems

            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const handle_text = (value)=>{
        setForm({...form_values, name:value})
    }
    
    const cargarGeneros = async () => {
        const lista = []
        const generos = await getDocs(collection(db, "genero"));
        generos.forEach((doc) => {
            lista.push({ id: doc.id, name: doc.data().name })
            setGeneros({...generos_state, generos_list: lista })
        })
        console.log(generos_state.generos_list)

    }

    const [selectedItems, setSelectedItems] = useState([])


    const onSelectedItemsChange = (selectedItems) => {
        setSelectedItems(selectedItems)
        console.warn("Selected items: ", selectedItems)
        
    };

    return (
        
            <ScrollView style={styles.container}>
            <View style={styles.LabelGroup}>
                <Text>Crear Pelicula</Text>
            </View>

            <View>
                <TextInput placeholder='Nombre' style={styles.inputGroup} onChangeText={(value) => handle_text(value)}/>
            </View>
        
            <View style={styles.multi_container}>
                <View style={styles.multiSelectContainer}>
                    <MultiSelect
                        items={generos_state.generos_list}
                        uniqueKey='id'
                        onSelectedItemsChange={onSelectedItemsChange}
                        selectedItems={selectedItems}
                        selectText='Selecciona los Generos'
                        searchInputPlaceholderText='Search Items...'
                        onChangeInput={(text) => console.warn(text)}
                        tagRemoveIconColor='#CCC'
                        tagBorderColor='#CCC'
                        tagTextColor='#CCC'
                        selectedItemTextColor='#CCC'
                        selectedItemIconColor='#CCC'
                        itemTextColor='#000'
                        displayKey='name'
                        searchInputStyle={{ color: '#CCC' }}
                        submitButtonColor='#CCC'
                        submitButtonText='Submit'
                        
                    />
                </View>
            </View>
            <View>
                <Button title='Guardar' onPress={(name) => handle_form()}/>
            </View>
            </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35

    },
    multi_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc"
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 30,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    multiSelectContainer: {
        height: 400,
        width: '80%'
    }
});