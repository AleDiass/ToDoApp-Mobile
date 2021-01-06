import styled from 'styled-components'

const ContainerMain = styled.View`
    background:white;
    width:100%;
    
    height:110px;
    box-shadow:0 0 1px black;
    
    padding:20px 40px;
    align-items:center;

    justify-content:center;
    
`

const ContainerItems = styled.View`
    flex-direction:row;
    justify-content:space-between;
    width:100%;
    padding:10px;
    margin-top:25px;
    align-items:center;
`


const Title = styled.Text`
    font-size:30px;
    font-weight:bold;
`



const ProfileSettingsContainer = styled.View`
    
`


const ProfileButton = styled.TouchableOpacity`
    width:55px;
    height:55px;
    border-radius:50;
    overflow:hidden;
    justify-content:center;
    align-items:center;
`

const BackButton = styled.TouchableOpacity`
    width:55px;
    height:55px;
    position:relative;
    transform:scale(-1);
    justify-content:center;
    align-items:center;
    top:10px;

`




export {
    ContainerMain,
    Title,
    ProfileSettingsContainer,
    ProfileButton,
    ContainerItems,
    BackButton,

}