import React from 'react'
import {Button,ButtonText} from '../Styles/StyleComponents/S.ButtonForm'


const ButtonForm = ({children,border,disabled=false,height,color,onPress,textColor,fontSize,style})=>{
    return (
        <Button disabled={disabled} style={{backgroundColor: color , height:height}} onPress={onPress} border={border} >
        
            <ButtonText style={{color:textColor,fontSize:fontSize,...style}}>{children}</ButtonText>

        </Button>
    )
}

export {
    ButtonForm,
}