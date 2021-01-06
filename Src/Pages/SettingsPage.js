import React from 'react'
import {AsyncStorage,BackHandler} from 'react-native'
import {useNavigation,useFocusEffect} from '@react-navigation/native'

import {ContainerMain,ButtonContainer} from '../Styles/StylePages/S.SettingsPage'
import {ButtonForm} from '../Components/ButtonForm'
import {ErrorText} from '../Components/ErrorText'



import {UserContext} from '../Context/ContextProvider'





import ApiControl from '../Services/Apis'

const Api = new ApiControl() 

const SettingsPage = ()=>{
    const {setAuthentication,setTodos,setUserForm} = React.useContext(UserContext)

    const [screenErrors,setScreenErrors] = React.useState('')
    
    const Navigation = useNavigation()

    useFocusEffect(()=>{
        BackHandler.addEventListener('hardwareBackPress',()=>{
            Navigation.navigate('HomePage')

        })
    },[])


    function defaultHandles(){
        setAuthentication(null)
        setTodos([])
        setUserForm(false)
        Navigation.navigate('LoginPage')
    }

    async function handleLogout(){
        await AsyncStorage.removeItem('_token')
       
        defaultHandles()

    }

    async function handleDeleteAccount(){
        const token = await AsyncStorage.getItem('_token')
        if(token){
            const ApiDeleteAccount = await Api.DeleteAccount(token)

            if(ApiDeleteAccount){
                alert('aki')
                defaultHandles()
            }else{
                setScreenErrors('Internal Error Try Again Later')
                setTimeout(()=>{
                    setScreenErrors('')
                },5000)
            }

        }else{
            setScreenErrors('Internal Error Try Again Later')
            setTimeout(()=>{
                setScreenErrors('')
            },5000)
        }
        
    }


    return(
        <ContainerMain>

            <ErrorText>{screenErrors}</ErrorText>

            <ButtonContainer>
                <ButtonForm onPress={handleLogout} border={true} height={70} style={{fontWeight:'bold'}} color='white' fontSize={23} textColor='black'>    
                    Logout
                </ButtonForm>
            </ButtonContainer>

            <ButtonContainer>
                <ButtonForm onPress={handleDeleteAccount} border={true} height={70} style={{fontWeight:'bold'}} color='tomato' fontSize={23} textColor='white'>    
                    Delete Account
                </ButtonForm>
            </ButtonContainer>
        </ContainerMain>


    )
}

export default SettingsPage