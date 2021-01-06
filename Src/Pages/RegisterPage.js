
import React from 'react'
import {useNavigation} from '@react-navigation/native'
import {AsyncStorage} from 'react-native'

import {InputForm} from '../Components/InputForm.js'
import {ButtonForm} from '../Components/ButtonForm.js'
import {ErrorText} from '../Components/ErrorText'

import {ContainerMain,InputContainer,Title,ButtonContainer,ChangeScreenFormContainer} from '../Styles/StylePages/S.LoginRegisterPage'

import ApiControl from '../Services/Apis'

import BasicValidation from '../Services/FormValidation'


import UserIcon from '../Assets/user.svg'
import PassIcon from '../Assets/lock.svg'


const Validation = new BasicValidation();
const Api = new ApiControl();


const RegisterPage = ()=>{
    const Navigation = useNavigation();

    

    const [usernameField,setUsernameField] = React.useState('')
    const [passwordField,setPasswordField] = React.useState('')
    const [passwordVerifyField,setPasswordVerifyField] = React.useState('')
    const [screenErrorsMsg,setScreenErrorsMsg] = React.useState('')
    const [apiLoading,setApiLoading] = React.useState(false)
    

    async function handleRegister(){
        
       
        
        const Valid = Validation.ValidationRegister(usernameField,passwordField,passwordVerifyField)
        if(Valid.error){
            setScreenErrorsMsg(Valid.msg)
            setTimeout(()=>{
                setScreenErrorsMsg('')
            },2000)
        }else{
            setApiLoading(true)
            const Register = await Api.Register(usernameField,passwordField,passwordVerifyField)
        
            if(Register.Token){
                
                const tokensave = await AsyncStorage.setItem('_token',Register.Token)

                
                Navigation.navigate('HomePage')
                setUsernameField('')
                setPasswordField('')
                setPasswordVerifyField('')



            }else{
                setScreenErrorsMsg('User Already Exists')
                setTimeout(()=>{
                    setScreenErrorsMsg('')
                },2000)

                setUsernameField('')
                setPasswordField('')
                setPasswordVerifyField('')
                

               
            }

            setApiLoading(false)
           

            

        }
    }

    





    return(

        <ContainerMain>
            <Title>Todo App</Title>
            <ErrorText text={screenErrorsMsg}/>
            <InputContainer>
                <InputForm value={usernameField} setValue={setUsernameField} Svg={UserIcon} placeholder="Username"/>
            </InputContainer>
            
            <InputContainer >
                <InputForm password={true} value={passwordField} setValue={setPasswordField} Svg={PassIcon} placeholder="Password"/>
            </InputContainer>
           
           
            <InputContainer>
                <InputForm  password={true} value={passwordVerifyField} setValue={setPasswordVerifyField} Svg={PassIcon} placeholder="Password Verify"/>
            </InputContainer>
           
            <ButtonContainer>
                <ButtonForm  
                    onPress={handleRegister} 
                    border={true} height={70} 
                    color="#f1f1f1" 
                    textColor="black" 
                    fontSize={25} 
                    disabled={apiLoading}
                    style={{
                        fontWeight:'bold'
                    }}
                    >

                    Register
                </ButtonForm>
             </ButtonContainer>

            <ChangeScreenFormContainer>
                 <ButtonForm style={{fontWeight:"bold"}} border={false} textColor='#736e6e' fontSize={20}
                    onPress={()=>{Navigation.navigate('LoginPage')}}
                    disabled={!!apiLoading}
                 >
                     or Login
                </ButtonForm>
            </ChangeScreenFormContainer>
            
           

        </ContainerMain>
        
    )
}


export default RegisterPage;