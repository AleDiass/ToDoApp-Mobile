import styled from 'styled-components'


const ContainerMain = styled.View`
    width:100%;
    height:110px;
    background:white;
`


const ContainerItems = styled.View`
    flex:1;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    margin-top:40px;
`

const Buttons = styled.TouchableOpacity`
    flex:1;
    height:100%;
    align-items:center;
    justify-content:center;
` 

const ButtonTitle = styled.Text`
    font-size:20px;
    font-weight:bold;
    letter-spacing:2px;
`


export{
    ContainerMain,
    ContainerItems,
    ButtonTitle,
    Buttons,
}

