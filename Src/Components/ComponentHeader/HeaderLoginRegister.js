import React from 'react'
import {ContainerItems,ContainerMain,ButtonTitle,Buttons} from '../../Styles/StyleComponentsHeader/S.HeaderLoginRegister'
import {useNavigation,useRoute,useFocusEffect} from '@react-navigation/native'

const HeaderLoginRegister = ()=>{
    const Routes = useRoute()
    const Navigation = useNavigation()

    const [r,setR] = React.useState(true)

    useFocusEffect(()=>{
       Routes.name === 'LoginPage' ? setR(true) : setR(false)
        
       
    },[])
    
    
    const ActiveColor ='#f1f1f1'

    return(
        <ContainerMain>
            <ContainerItems>
                <Buttons style={{backgroundColor: r ? ActiveColor : "transparent"}} 
                    onPress={()=>Navigation.navigate('LoginPage')}
                
                >
                    <ButtonTitle>
                        Login
                    </ButtonTitle>
                </Buttons>
                <Buttons style={{backgroundColor: r ? "Trasparent": ActiveColor}}
                    onPress={()=>Navigation.navigate('RegisterPage')}
                >
                    <ButtonTitle>
                        Register
                    </ButtonTitle>
                </Buttons>
            </ContainerItems>
        </ContainerMain>


    )
}

export {
    HeaderLoginRegister
}