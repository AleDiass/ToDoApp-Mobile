
import React from 'react'
import {useFocusEffect,useNavigation} from '@react-navigation/native'
import {AsyncStorage,BackHandler} from 'react-native'


import {InputForm} from '../Components/InputForm'
import {ButtonForm} from '../Components/ButtonForm'
import {ErrorText} from '../Components/ErrorText'

import {ContainerMain,InputContainer,Title,ButtonContainer,ChangeScreenFormContainer} from '../Styles/StylePages/S.LoginRegisterPage'



import UserIcon from '../Assets/user.svg'
import PassIcon from '../Assets/lock.svg'

import BasicValidation from '../Services/FormValidation'
import ApiControl from '../Services/Apis'

import {UserContext} from '../Context/ContextProvider'


const api = new ApiControl()
const validation = new BasicValidation();


const LoginPage = ()=>{
    const Navigation = useNavigation();
    const {setUserForm} = React.useContext(UserContext)

    useFocusEffect(()=>{
        BackHandler.addEventListener('hardwareBackPress',()=>{
            BackHandler.exitApp()
        })
    },[])



    const [usernameField,setUsernameField] = React.useState('')
    const [passwordField,setPasswordField] = React.useState('')
    const [screenErrorsMsg,setScreenErrorsMsg] = React.useState('') 
    const [apiLoading,setApiLoading] = React.useState(false)

    async function HandleLogin(){
        const LoginValidation  = validation.validationLogin(usernameField,passwordField)
        
       
        if(LoginValidation.error){
             setScreenErrorsMsg(LoginValidation.msg)
            setTimeout(()=>{
                setScreenErrorsMsg('')
            },2000) 
                   
                 
           


        }else{
            setApiLoading(true)
          const ApiLogin = await api.Login(usernameField,passwordField)
            
           if(ApiLogin.Auth && ApiLogin.Token){
            const tokensave = await AsyncStorage.setItem('_token',ApiLogin.Token)

            setUsernameField('')
            setPasswordField('')
            setUserForm(true)
            Navigation.navigate('HomePage')
           


           }else{
               setScreenErrorsMsg('Invalid Credencials')
               setTimeout(()=>{
                setScreenErrorsMsg('')
               },2000) 
               
           }

           setApiLoading(false)
        }


          
        

    }



    return(
        <ContainerMain>
            
            <Title>Todo App</Title>
            <ErrorText  text={screenErrorsMsg}/>
            <InputContainer>
                <InputForm
                     
                    Svg={UserIcon} 
                    placeholder="Username" 
                    setValue={t => setUsernameField(t)}
                    value={usernameField}
                />
            </InputContainer>

            <InputContainer>
                <InputForm 
                    
                    Svg={PassIcon} 
                    placeholder="Password" 
                    setValue={t => setPasswordField(t)}
                    password={true}
                    value={passwordField}
                />
            </InputContainer>

            <ButtonContainer>

                <ButtonForm 
                    border={true}
                    height={70} 
                    color="#f1f1f1" 
                    onPress={HandleLogin}
                    textColor="black"
                    fontSize={25}
                    disabled={apiLoading}
                    style={{
                        fontWeight:'bold'
                    }}
                >

                Login

                </ButtonForm>

            </ButtonContainer>

            <ChangeScreenFormContainer>
                <ButtonForm
                    border={false}
                    height={70}
                    style={{fontWeight:"bold"}}
                    color='#f1f1f1'
                    textColor="#736e6e"
                    fontSize={20}
                    onPress={()=>{Navigation.navigate('RegisterPage')}}
                >   
                or Create Our Account
                </ButtonForm>
            </ChangeScreenFormContainer>


            

           
            

        </ContainerMain>
    )
}


export default LoginPage