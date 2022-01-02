import React, { useState, useEffect } from 'react';
import database from '../../config/firebaseConfig';

import styles from './style';
import { FontAwesome } from '@expo/vector-icons';
import {View, Text, TouchableOpacity, FlatList } from 'react-native'


const Task = ({ navigation }) => {
    const [ task, setTask ] = useState([])

    function deleteTask(id) {
        database.collection("Task").doc(id)
    }

    useEffect(() => {
        database.collection('Tasks').onSnapshot((query) => {
            const list = []

            query.forEach((doc) => {
                list.push({...doc.data(), id: doc.id })
            })
            setTask(list)

        })
    })

    return (
        <View style={styles.container}>
            <FlatList />
        </View>
    )
}

export default Task;
