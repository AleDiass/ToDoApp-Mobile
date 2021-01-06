import React from 'react'
import {AsyncStorage} from 'react-native'
import ApiControl from '../Services/Apis'

const Api = new ApiControl();

const UserContext = React.createContext({})


const ContextProvider = ({children})=>{

    
    
    const [authentication,setAuthentication] = React.useState(null)
    const [todos,setTodos] = React.useState([])
    const [deletedTodo,setDeletedTodo] = React.useState(false)
    const [createTodo,setCreateTodo] = React.useState(false)
    
    const [userform,setUserForm] = React.useState(false)

    React.useEffect(()=>{

        (async()=>{

            if(deletedTodo || createTodo){
                const token = await AsyncStorage.getItem('_token')
                const ApiGetTodos = await Api.getTodo(token)
                if(ApiGetTodos){
                    setTodos(ApiGetTodos)
                    setDeletedTodo(false)
                    setCreateTodo(false)
                }
            }


        })()


    },[deletedTodo,createTodo])


    React.useEffect(()=>{
       
        
        (async()=>{

            const token = await AsyncStorage.getItem('_token')
            if(token && !(authentication)){
                const ApiAutoAuth = await Api.AutoAuth(token)


                if(ApiAutoAuth){
                    
                   
                    setAuthentication(true)
                    
                    const apiGetTodos = await Api.getTodo(token)
                    setTodos(apiGetTodos)
                    


                }else{
                    await AsyncStorage.removeItem('_token')
                    setAuthentication(false)
                }



            }else{
                setAuthentication(false)
            }

        })()
        



           


    },[userform]) 

   return(
       <UserContext.Provider value={{setUserForm,setCreateTodo,authentication,setAuthentication,setTodos,todos,deletedTodo,setDeletedTodo}}>
           {children}
        </UserContext.Provider>
   )

}

export{
    ContextProvider,
    UserContext,
}
