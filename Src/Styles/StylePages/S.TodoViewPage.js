import styled from 'styled-components'


const ContainerMain = styled.View`
    flex:1;
    justify-content:center;
    align-items:center;
    

`


const TitleTodo = styled.Text`
    font-weight:bold;
    font-size:25px;
    padding:10px;
    letter-spacing:3px;
    text-transform:uppercase;
`


const DescTodo = styled.Text`
    font-size:25px;
    width:90%;
    padding:20px;
    margin:10px 0;
    min-height:200px;
    border:2px #ccc solid;
`


const ButtonContainer = styled.View`
    width:100%;
    align-items:center;
    margin-top:50px;
    
    
`



const PageTitle = styled.Text`
    font-size:30px;
    position:relative;
    top:-100px;
    color:#ccc;
`

export {
    ContainerMain,
    TitleTodo,
    DescTodo,
    ButtonContainer,
    PageTitle,
}