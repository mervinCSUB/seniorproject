import { useState } from 'react';
import { useRouter } from 'expo-router';
import { COLORS } from '../constants';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from './login';
import Welcome from './welcome';
import SignUp from './signUp';
import Home from './home';
import Profile from '../components/profile/header/Profile';
import Messages from '../components/messages/header/Messages';
import TestPage from './testpage';


const Stack = createNativeStackNavigator();

const MainStack = () => {
  const router = useRouter();
  return (

    <Stack.Navigator>
      <Stack.Screen name="welcome" component={Welcome} options={{headerTitle: "", headerShadowVisible: false}} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signUp" component={SignUp} />
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="Profile" component={Profile}/>
      <Stack.Screen name="Messages" component={Messages}/>

    </Stack.Navigator>
  );
}

export default MainStack;