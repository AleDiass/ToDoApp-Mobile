import styled from 'styled-components'



const ContainerMain = styled.View`
    flex:1;
    

`

const TitleHome = styled.Text`
    font-size:25px;
    letter-spacing:3px;
    text-align:center;
    padding:20px;
    color:#5e5b5b;

`
const ContainerAllTodos = styled.View`
    align-items:center;
    margin-top:30px;
`

const ButtonContainer = styled.View`
    position:absolute;
    bottom:20px;
    left:0;
    right:0;
    width:100%;
    align-items:center;
`

export {
    ContainerMain,
    TitleHome,
    ContainerAllTodos,
    ButtonContainer,
}