import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Alert, Keyboard } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { THEME } from '../../theme';

const AddTodo = ({ addTodo }) => {
    const [value, setValue] = useState('');

    const pressHandler = () => {
        const valueTrim = value.trim();
        if (valueTrim) {
            addTodo(valueTrim);
            setValue('');
            Keyboard.dismiss();
        } else {
            Alert.alert('Название дела не может быть пустым');
        }
    }

    return (
        <View style={styles.block}>
            <TextInput 
            style={styles.input}
            placeholder="Введите название дела..."
            onChangeText={(text) => setValue(text)}
            value={value}
            autoCorrect={false}
            autoCapitalize="none" />
            <AntDesign.Button 
            onPress={pressHandler} 
            name="pluscircleo">Добавить</AntDesign.Button>
            {/* <Button 
            title="Добавить"
            style={styles.btn}
            onPress={pressHandler} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '60%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR
    },
    btn: {
        // width: '20%'
    }
})

export default AddTodo;