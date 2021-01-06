import styled from 'styled-components'



const ContainerMain = styled.View`
    flex:1;
    align-items:center;
    justify-content:center;
    position:relative;
    top:-100px;
    
   
    

`

const InputContainer= styled.View`
    border:2px #ccc solid;
    width: 90%;
    border-radius:7px;
    margin:5px 0;
    padding:10px;


`



const ContainerButton = styled.View`
    width:100%;
    margin-top:200px;
    align-items:center;
    position:absolute;
    bottom:50px;
`

const Title = styled.Text`
    font-size:30px;
    font-weight:bold;
    margin-bottom:50px;
`

export {
    ContainerMain,
    ContainerButton,
    InputContainer,
    Title,
} 