import React from 'react'
import {UserContext} from '../Context/ContextProvider'
import {AsyncStorage,BackHandler} from 'react-native'
import {ContainerMain,ButtonContainer,TitleTodo,DescTodo,PageTitle} from '../Styles/StylePages/S.TodoViewPage'
import {ButtonForm} from '../Components/ButtonForm' 
import ApiControl from '../Services/Apis'
import {useNavigation,useFocusEffect} from '@react-navigation/native'

const Api = new ApiControl()

const TodoViewPage =()=>{  
     const Navigation = useNavigation()

    useFocusEffect(()=>{
        BackHandler.addEventListener('hardwareBackPress',()=>{
            Navigation.navigate('HomePage')
        })
    },[])




     const {todos,setDeletedTodo} = React.useContext(UserContext)
     const [visiblyTodo,setVisiblyTodo] = React.useState('')
     const [apiLoading,setApiLoading] = React.useState(false)
     const [screenErrors,setScreenErrors] = React.useState('')


     React.useEffect(()=>{
        setVisiblyTodo('')
     },[])


     React.useEffect(()=>{
         (async()=>{

            const todoID = await AsyncStorage.getItem('_todoID')
           

            if(todoID){
                 const Filtered = todos.filter((td)=>{
                    return td._id === todoID
                })
                setVisiblyTodo(Filtered)
               
            }


         })()
     },[])

     async function handleTodoDelete(){
         const todoID = await AsyncStorage.getItem('_todoID')

        const ApiDeleteTodo = await Api.DeleteTodo(todoID)
        
        if(ApiDeleteTodo){
            setDeletedTodo(true)
            Navigation.navigate('HomePage')
            
        }else{
            setScreenErrors('Error in ToDo Delete')
            setTimeout(()=>{
                setScreenErrors('')
            },4000)
        }
     }


   

    return(
        <ContainerMain>
            <PageTitle>
                View Your Todo
            </PageTitle>


           <TitleTodo>{visiblyTodo && visiblyTodo[0].Title}</TitleTodo>
           <DescTodo>{visiblyTodo && visiblyTodo[0].Description}</DescTodo>
           <ButtonContainer>
               <ButtonForm onPress={handleTodoDelete} disabled={apiLoading} color='tomato' fontSize={23} textColor='white' 
               height={70} style={{fontWeight:'bold'}} border={false}> 
                   Delete ToDo
               </ButtonForm>
           </ButtonContainer>
        </ContainerMain>
        
    )
}

export default TodoViewPage