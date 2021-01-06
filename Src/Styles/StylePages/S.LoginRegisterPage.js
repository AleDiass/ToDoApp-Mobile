import styled,{css} from 'styled-components'




 const ContainerMain = styled.View`
    flex:1;
    background:#f1f1f1;
    
    align-items:center;
    justify-content:center;




`

const InputContainer = styled.View`
    width:90%;
    padding:10px;
    flex-direction:row;
    border-radius:15px;
    background:#ebebeb;
    margin:10px 0;
    
    border:2px #ccc solid;
    
`


const Title = styled.Text`
    font-size:30px;
    margin-bottom:50px;
    font-weight:bold;
    letter-spacing:3px;
`


const ButtonContainer = styled.View`
    width:100%;
    
    margin-top:50px;
    align-items:center;

`;

const ChangeScreenFormContainer = styled.View`
    width:100%;
    margin-top:30px;
    justify-content:center;
    align-items:center;
`


export {
    ContainerMain,
    InputContainer,
    Title,
    ButtonContainer,
    ChangeScreenFormContainer,
   
}


