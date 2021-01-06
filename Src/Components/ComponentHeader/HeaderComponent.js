import React from 'react'

import {ContainerMain,Title,ProfileSettingsContainer,ProfileButton,ContainerItems,BackButton} from '../../Styles/StyleComponentsHeader/S.HeaderComponent'
import UserIcon from '../../Assets/userico.svg'
import ArrowBack from '../../Assets/arrow-back.svg'
import {useNavigation} from '@react-navigation/native'

const HeaderComponent = ({title,backButton})=>{
    const Navigation = useNavigation()

    function handleButtonProfile(){
        Navigation.navigate('SettingsPage')
    }


    return(
        <ContainerMain>
            <ContainerItems>
                {backButton &&(
                    <BackButton onPress={()=>{Navigation.navigate('HomePage')}}>
                        <ArrowBack width={40} height={40} color='#000'/>
                    </BackButton>
                )}
                <Title>{title}</Title>
                <ProfileSettingsContainer>
                    
                
                    <ProfileButton onPress={handleButtonProfile}>
                        <UserIcon  width={55} height={55} color='white'/>
                    </ProfileButton>

                </ProfileSettingsContainer>
            </ContainerItems>
        </ContainerMain>
    )
}


export {
    HeaderComponent
}