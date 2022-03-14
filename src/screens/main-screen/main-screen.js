import React from 'react';
import { View, StyleSheet } from 'react-native';
import AddTodo from '../../components/addTodo';
import TodoList from '../../components/todo-list';

const MainScreen = (props) => {
    const { addTodo, todos, setTodos, removeTodo, openTodo } = props;
    return (
        <View style={{flex: 1}}>
            <AddTodo addTodo={addTodo} />
            <TodoList 
            todos={todos} 
            setTodos={setTodos}
            removeTodo={removeTodo}
            openTodo={openTodo} />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default MainScreen;