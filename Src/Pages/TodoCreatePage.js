import React from 'react'
import {useNavigation,useFocusEffect} from '@react-navigation/native' 
import {AsyncStorage,BackHandler} from 'react-native'

import {ContainerMain,ContainerButton,InputContainer,Title} from '../Styles/StylePages/S.TodoCreatePage'
import {InputForm} from '../Components/InputForm'
import {ButtonForm} from '../Components/ButtonForm'
import {ErrorText} from '../Components/ErrorText'
import ApiControl from '../Services/Apis'
import BasicValidation from '../Services/FormValidation'
import { UserContext } from '../Context/ContextProvider'



const Validation = new BasicValidation();
const Api = new ApiControl();

const TodoCreatePage = ()=>{
    const Navigation = useNavigation()

    
    useFocusEffect(()=>{
        BackHandler.addEventListener('hardwareBackPress',()=>{
            Navigation.navigate('HomePage')
        })

    
    },[])




    const {setCreateTodo} = React.useContext(UserContext)
 
    const [titleField,setTitleField] = React.useState('')
    const [descField,setDescField] = React.useState('')
    const [screenErrors,setScreenErrors] = React.useState('')
    const [apiLoading,setApiLoading] = React.useState(false)


    async function handleTodoCreate(){
        const FormValidation = Validation.validationTodoCreator(descField,titleField)
        const token = await AsyncStorage.getItem('_token')
       

        if(!(FormValidation.error) && token){
            const ApiCreateTodo = await Api.CreateTodo(descField,titleField,token)
            if(ApiCreateTodo){
                setCreateTodo(true)
                Navigation.navigate('HomePage')
            }else{
                setScreenErrors('Error in ToDo Creating or Limit Reached')
                setTimeout(()=>{
                    setScreenErrors('')
                },3000)
            }

            

        }else{
            setScreenErrors(FormValidation.msg)
            setTimeout(()=>{
                setScreenErrors('')
            },3000)
        }

    }



    return(
        <ContainerMain>
            <Title>Create Your Todo</Title>
            <ErrorText text={screenErrors}/>
            <InputContainer>
                <InputForm Svg={false} placeholder='ToDo Title' setValue={setTitleField} value={titleField}/>
            </InputContainer>

            <InputContainer>
                <InputForm multiline numberOfLines={5} maxLength={100} Svg={false} placeholder='Description' setValue={setDescField} value={descField}/>
            </InputContainer>
           
            <ContainerButton>

                <ButtonForm disabled={apiLoading ? true : false}
                border={false} height={70} color='#42d469' onPress={handleTodoCreate} textColor='white'
                style={{fontWeight:'bold'}}
                fontSize={30} style={{fontWeight:'bold'}} 
                >
                    Create Todo

                </ButtonForm>
            </ContainerButton>


        </ContainerMain>

    )
}


export default TodoCreatePage