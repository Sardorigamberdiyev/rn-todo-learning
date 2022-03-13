import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import TodoListItem from '../todo-list-item';

const TodoList = (props) => {
    const { todos, setTodos, removeTodo } = props;
    return (
        <View style={styles.todoList}>
            <FlatList 
            keyExtractor={(item) => item.id.toString()}
            data={todos}
            refreshing={false}
            onRefresh={() => setTodos([])}
            renderItem={({item}) => <TodoListItem todo={item} removeTodo={removeTodo} />} />
        </View>
    )
}

const styles = StyleSheet.create({
    todoList: {
        flex: 1,
        paddingTop: 10
    }
})

export default TodoList;