import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Navbar from './src/components/navbar';
import AddTodo from './src/components/addTodo/addTodo';
import TodoList from './src/components/todo-list';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title: title
    };

    setTodos((prevTodos) => [...prevTodos, newTodo])
  }

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  return (
    <View style={{flex: 1}}>
      <Navbar title="Todo app" />
      <View style={styles.container}>
        <AddTodo addTodo={addTodo} />
        <TodoList 
        todos={todos} 
        setTodos={setTodos}
        removeTodo={removeTodo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
