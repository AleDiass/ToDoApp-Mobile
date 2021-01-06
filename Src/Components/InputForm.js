import React from 'react'
import {Input} from '../Styles/StyleComponents/S.InputForm'

const InputForm = ({Svg,placeholder,setValue,value,password,...props})=>{

   


    return(
        <>

        {Svg && <Svg uri={Svg} width={35} height={50} color="#000"/>}
        <Input 
            value={value}
            placeholder={placeholder} 
             {...props}
             secureTextEntry={password}
            onChangeText={setValue}
        />
        
        </>
    )
}

export {
    InputForm
}