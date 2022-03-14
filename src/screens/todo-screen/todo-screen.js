import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { THEME } from '../../theme';
import AppCard from '../../components/ui/app-card';

const TodoScreen = ({ goBack, removeTodo, todo: { title, id } }) => {
    return (
        <View>
            <AppCard style={styles.card}>
                <Text style={styles.title}>{title}</Text>
                <Button title="Редактировать" />
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button 
                    title="Назад" 
                    color={THEME.DANGER_COLOR}
                    onPress={goBack} />
                </View>
                <View style={styles.button}>
                    <Button 
                    title="Удалить" 
                    color={THEME.GREY_COLOR}
                    onPress={() => removeTodo(id)} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    card: {
        marginBottom: 20,
        padding: 15
    },
    button: {
        width: '40%'
    },
    title: {
        fontSize: 20
    }
})

export default TodoScreen;