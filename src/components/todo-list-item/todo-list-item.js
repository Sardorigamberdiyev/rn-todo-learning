import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TodoListItem = (props) => {
    const { todo: { id, title }, removeTodo, openTodo } = props;
    return (
        <TouchableOpacity 
        activeOpacity={0.5}
        onPress={() => openTodo(id)}
        onLongPress={() => removeTodo(id)}>
            <View style={styles.todo}>
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 10,
        marginBottom: 8,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5
    }
})

export default TodoListItem;