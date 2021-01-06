import React from 'react'



import {ErrorText as ErrorTextS} from '../Styles/StyleComponents/S.ErrorText'


const ErrorText = ({text})=>{
    return(
        <ErrorTextS>
            {text}
        </ErrorTextS>
    )
}

export {
    ErrorText,
}

