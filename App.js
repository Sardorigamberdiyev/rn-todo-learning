import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import Navbar from './src/components/navbar';
import MainScreen from './src/screens/main-screen';
import TodoScreen from './src/screens/todo-screen';

export default function App() {
  const [todoId, setTodoId] = useState(null)
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title: title
    };

    setTodos((prevTodos) => [...prevTodos, newTodo])
  }

  const removeTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    console.log(todo);
    Alert.alert(
      "Удаление элемента",
      `Вы уверены, что хотите удалить "${todo.title}"?`,
      [
        {
          text: "Отмена",
          style: "negative"
        },
        { 
          text: "Удалить", 
          style: 'positive',
          onPress: () => {
            setTodoId(null);
            setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
          } 
        }
      ],
      { cancelable: false }
    );
  }

  let content = (
    <MainScreen 
      addTodo={addTodo}
      todos={todos}
      setTodos={setTodos}
      removeTodo={removeTodo}
      openTodo={setTodoId} />
  );

  if (todoId) {
    const selectTodo = todos.find((todo) => todo.id === todoId);
    content = <TodoScreen goBack={() => setTodoId(null)} todo={selectTodo} removeTodo={removeTodo} />
  }

  return (
    <View style={{flex: 1}}>
      <Navbar title="Todo app" />
      <View style={styles.container}>
        {content}
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
