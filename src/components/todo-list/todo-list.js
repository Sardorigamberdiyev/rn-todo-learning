import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Image, Dimensions } from 'react-native';
import { THEME } from '../../theme';
import TodoListItem from '../todo-list-item';

const TodoList = ({ todos, setTodos, removeTodo, openTodo }) => {
    const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2);
    
    useEffect(() => {
        console.log('componentDidMount()');
        const update = () => {
            console.log('update width');
            const width = Dimensions.get('window').width - THEME.PADDING_HORIZONTAL * 2;
            setDeviceWidth(width)
        }

        Dimensions.addEventListener('change', update);

        return () => {
            console.log('componentWillUnmount()')
            Dimensions.removeEventListener('change', update);
        }
    }, [])

    let content = (
        <View style={{ width: deviceWidth }}>
            <FlatList 
            keyExtractor={(item) => item.id.toString()}
            data={todos}
            refreshing={false}
            onRefresh={() => setTodos([])}
            renderItem={({item}) => <TodoListItem todo={item} openTodo={openTodo} removeTodo={removeTodo} />} />
        </View>
    );

    if (todos.length === 0) {
        content = (
            <View style={styles.imgWrap}>
                <Image 
                style={styles.image} 
                source={require('../../../assets/no-items.png')} />
                {/* <Image 
                style={styles.image} 
                source={{uri: 'https://miro.medium.com/max/1200/1*xDi2csEAWxu95IEkaNdFUQ.png'}} /> */}
            </View>
        )
    }

    return (
        <View style={styles.todoList}>
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    todoList: {
        flex: 1,
        paddingTop: 10
    },
    imgWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 300
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})

export default TodoList;