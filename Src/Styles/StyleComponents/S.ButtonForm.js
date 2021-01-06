import styled from 'styled-components'


const Button = styled.TouchableOpacity`

    width: 90%;
    border:${props => props.border ? "1px black solid":"1px transparent solid" };
    border-radius:15px;
    justify-content:center;
    align-items:center;

    opacity: ${props => props.disabled ? 0.6 : 1}

    
    


`

const ButtonText = styled.Text`
    font-size:10px;
    color:black;
    font-weight:900;
`


export {
    Button,
    ButtonText,
}