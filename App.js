import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import { THEME } from './src/theme';
import Navbar from './src/components/navbar';
import MainScreen from './src/screens/main-screen';
import TodoScreen from './src/screens/todo-screen';

const customFonts = {
  'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
  'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
}

export default function App() {
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([]);

  const [fontsLoaded] = useFonts(customFonts);

  if (!fontsLoaded) {
    return <AppLoading  />
  }

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title: title
    };

    setTodos((prevTodos) => [...prevTodos, newTodo])
  }

  const removeTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id);
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


  const updateTodo = (id, title) => {
    setTodos((prevTodos) => prevTodos.map((todo) => {
      if (todo.id === id) todo.title = title;
      return todo;
    }))
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
    content = (
      <TodoScreen 
      goBack={() => setTodoId(null)}
      todo={selectTodo} 
      removeTodo={removeTodo} 
      onSave={updateTodo} />
    )
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
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 20
  }
});
