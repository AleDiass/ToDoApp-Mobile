import React from 'react';
import {NavigationContainer} from '@react-navigation/native'

import {ContextProvider} from '../Context/ContextProvider'

import {Stack} from './Stack'


import AcessControlPage from '../Pages/AcessControlPage'
import LoginPage from '../Pages/LoginPage'
import RegisterPage from '../Pages/RegisterPage'
import HomePage from '../Pages/HomePage'
import TodoViewPage from '../Pages/TodoViewPage'
import TodoCreatePage from '../Pages/TodoCreatePage'
import SettingsPage from '../Pages/SettingsPage'



import {HeaderComponent} from '../Components/ComponentHeader/HeaderComponent'
import {HeaderLoginRegister} from '../Components/ComponentHeader/HeaderLoginRegister'





export default Router = ()=>{
  return(
   
    <NavigationContainer>
       <ContextProvider>
         <Stack.Navigator>

                <Stack.Screen 
                  name="AcessControlPage" 
                  component={AcessControlPage}  
                  options=
                  {
                    {
                    title:null,
                    headerShown:false,

                    }
                  } 
                />

                <Stack.Screen 
                  name="LoginPage"
                  component={LoginPage}
                  options={
                    {
                      header:(props)=> <HeaderLoginRegister/>
                    }
                  }
                />

                <Stack.Screen 
                  name="RegisterPage"
                  component={RegisterPage}
                  options={
                    {
                      header:(props)=> <HeaderLoginRegister/>
                    }
                  }
                />

                <Stack.Screen 
                  name="HomePage"
                  component={HomePage}
                  options={
                    {
                      header:(props)=> <HeaderComponent title='Home'/>
                    }
                  }
                />

                <Stack.Screen 
                  name="TodoViewPage"
                  component={TodoViewPage}
                  options={
                    {
                      header:(props)=> <HeaderComponent title='' backButton={true}/>
                    }
                  }
                />

                <Stack.Screen 
                  name="TodoCreatePage"
                  component={TodoCreatePage}
                  options={
                    {
                      header:(props)=> <HeaderComponent title='' backButton={true}/>
                    }
                  }
                />

                <Stack.Screen
                  name="SettingsPage"
                  component={SettingsPage}
                  options=
                  {
                    {
                      header:(props)=> <HeaderComponent title='Settings' backButton={true}/>
                    }
                  }
                />




       
      
      
            </Stack.Navigator>
        </ContextProvider>
    </NavigationContainer>
   
   
  )
}

