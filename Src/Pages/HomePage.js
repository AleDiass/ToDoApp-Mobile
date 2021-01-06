import React from 'react'
import {AsyncStorage,BackHandler} from 'react-native' 

import {useNavigation,useFocusEffect} from '@react-navigation/native' 
import {TitleHome,ContainerMain,ContainerAllTodos,ButtonContainer} from '../Styles/StylePages/S.HomePage'
import {Todo} from '../Components/ToDo'
import {ButtonForm} from '../Components/ButtonForm'
import {ErrorText} from '../Components/ErrorText'

import ApiControl from '../Services/Apis'
import {UserContext} from '../Context/ContextProvider'




const Api = new ApiControl();


const HomePage = ()=>{ 
    const Navigation = useNavigation();
    const {todos,deletedTodo,setTodos} = React.useContext(UserContext) 
    const [screenErrors,setScreenErrors] = React.useState('')
    
    useFocusEffect(()=>{
        BackHandler.addEventListener('hardwareBackPress',()=>{
            return true
        })

    
    },[]) 
    


    function handleTodoCreatePageChange(){
         Navigation.navigate('TodoCreatePage') 
    }


return(
     <ContainerMain>
                    
         <TitleHome>Your ToDos</TitleHome>
         <ErrorText>{screenErrors}</ErrorText>
         <ContainerAllTodos>

            {
               todos && todos.map((td)=>{
                return (
           
                 <Todo key={td._id} id={td._id} title={td.Title}/>
                            
                    )
                })
            }

        </ContainerAllTodos>

        <ButtonContainer>
            <ButtonForm border={false} onPress={handleTodoCreatePageChange} style={{fontWeight:"bold"}} height={70} color="#42d469" textColor="white" fontSize={30}>

                Create new ToDo

            </ButtonForm>

         </ButtonContainer>

    </ContainerMain>
            
        )
    
        
    
}


export default HomePage