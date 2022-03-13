import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TodoListItem = (props) => {
    const { todo: { id, title }, removeTodo } = props;
    return (
        <TouchableOpacity 
        activeOpacity={0.5}
        onPress={() => console.log(`Press todo in id ${id}`)}
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