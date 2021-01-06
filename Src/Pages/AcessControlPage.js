import React from 'react'

import {ContainerMain,Title,ContainerAnim,TextAnim} from '../Styles/StylePages/S.AcessControlPage'
import {UserContext} from '../Context/ContextProvider'
import {useNavigation,useFocusEffect} from '@react-navigation/native'




const AcessControlPage = ()=>{
    const Navigation = useNavigation()
    const [textAnim,setTextAnim] = React.useState('')
   
    const {authentication} = React.useContext(UserContext) 

    function TextAnimControl(){
        
        if(textAnim.length >= 10){
            setTextAnim('')
        }else{
            setTextAnim(textAnim + ' .')
        }
    }

    useFocusEffect(()=>{
        
        const addText = setInterval(TextAnimControl,250)

        return ()=>{
            
            clearInterval(addText)
        }
    },[])


    if(authentication){
        Navigation.navigate('HomePage')
    }

    if(authentication === false){
        Navigation.navigate('LoginPage')
    }
 
    

    
    return(
        <ContainerMain>
            <Title>Todo App</Title>
            <ContainerAnim >
                <TextAnim>
                    {textAnim}
                </TextAnim>
            </ContainerAnim>
        </ContainerMain>
    )
}


export default AcessControlPage