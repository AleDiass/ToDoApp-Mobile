import axios from 'axios'

const BASE_URL = 'https://todo-server-api-2020.herokuapp.com'



const DefaultHeaders = {
    "Content-Type":"application/json",
}


class ApiControl{

   

    async Login(username,password){
        try{
            const ApiLogin = await axios.post(BASE_URL + '/api/login',{username,password},{
                headers:DefaultHeaders
            })

            return ApiLogin.data
    
        }catch(e){
            return false
        }



    }

   async Register(username,password,passverify){
        try{
            const ApiRegister = await axios.post(BASE_URL + '/api/register',{username,password,passverify},{
                headers: DefaultHeaders
              })

              return ApiRegister.data 
        }catch(e){
            return false
        }
      
       
    }
 
    async DeleteAccount(token){
        try{
            const ApiDelete = await axios.get(BASE_URL + '/api/deleteAccount',{
                headers:{
                    Authorization:"Bearer" + token
                }
            })
            
            return true

        }catch(e){
            return false
        }

       
    }

    async AutoAuth(token){
        try{
            const ApiAutoAuth = await axios.get(BASE_URL + '/api/verifyAuth',{
                headers:{
                    Authorization:"Bearer" + token,
                }
            })

            const {User,_id} = ApiAutoAuth.data

            return {User,_id}

        }catch(e){
            return false
        }

    }



    async getTodo(token){
            try{
                const ApiGetTodo = await axios.get(BASE_URL +'/api/todo/get',{
                    headers:{
                        Authorization:"Bearer"+token
                    }
                })

                return ApiGetTodo.data
            }catch(e){
                return false
            }
    }

   async CreateTodo(description,title,token){
        
       
        try{
            
            const ApiCreateTodo = await axios.post(BASE_URL + '/api/todo/create',{description,title},{
                headers:{
                    "Content-Type":"application/json",
                    Authorization:"Bearer" + token
                }
            })

            
            return true

        }catch(e){
        
            return false
        }
    }

    async DeleteTodo(todoid){
        try{
            const ApiDeleteTodo = await axios.get(BASE_URL + '/api/todo/delete' ,{
                headers:{
                    todoid:todoid
                }
            })
            return true
        }catch(e){
            return false
        }
    }
 



}



export default ApiControl
