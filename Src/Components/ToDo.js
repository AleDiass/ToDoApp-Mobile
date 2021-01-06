import React from 'react'
import {TodoContainer,TodoTitle} from '../Styles/StyleComponents/S.Todo'
import {useNavigation} from '@react-navigation/native'
import {AsyncStorage} from 'react-native'


const Todo = ({title,id})=>{
    
    const Navigation = useNavigation()
   

    async function handleClick(){

        const save = await AsyncStorage.setItem('_todoID',id)
        Navigation.navigate('TodoViewPage')
       

        
        
    }

    return(
        <TodoContainer onPress={handleClick}>
            <TodoTitle>{title}</TodoTitle>
        </TodoContainer>
    )
}

export {
    Todo
}
