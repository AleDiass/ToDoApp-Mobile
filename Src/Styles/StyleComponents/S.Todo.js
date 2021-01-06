import styled from 'styled-components'


const TodoContainer = styled.TouchableOpacity`
    width: 90%;
    border:1px #ccc solid;
    background:white;
    
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    border-bottom-right-radius:5px;
    border-bottom-left-radius: 5px;
    margin:15px 0;


`


const TodoTitle = styled.Text`
    font-size:24px;
    text-align:center;
    padding:20px;
    letter-spacing:2px;

`


export {
    TodoContainer,
    TodoTitle,
}