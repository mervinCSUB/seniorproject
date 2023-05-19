import { useState } from 'react';
import { useRouter } from 'expo-router';
import { COLORS, icons } from '../constants';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from './login';
import Welcome from './welcome';
import SignUp from './signUp';
import Home from './home';
import Profile from '../components/profile/header/Profile';
import Messages from '../components/messages/header/Messages';
import TestPage from './testpage';
import ScreenHeader from '../components/common/header/ScreenHeaderRightBtn';
import EditProfile from '../components/profile/header/EditProfile/EditProfile';
import { Image } from 'react-native';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const router = useRouter();
  return (

    <Stack.Navigator>
      <Stack.Screen name="welcome" component={Welcome} 
      options={{headerTitle: () => (<Image 
        source={icons.header}  style={{width: 200, height: 40}}/>), 
      headerShadowVisible: false,
      }}/>
      <Stack.Screen name="login" component={Login} options={{headerTitle: () => (<Image 
        source={icons.header}  style={{width: 200, height: 40}}/>), 
      headerShadowVisible: false}} />
      <Stack.Screen name="signUp" component={SignUp} options={{headerTitle: () => (<Image 
        source={icons.header}  style={{width: 200, height: 40}}/>), 
      headerShadowVisible: false}} />
      <Stack.Screen name="Home" component={Home} options={{headerTitle: () => (<Image 
        source={icons.header}  style={{width: 200, height: 40}}/>), 
      headerShadowVisible: false}} />
      <Stack.Screen name="Profile" component={Profile} options={{headerTitle: () => (<Image 
        source={icons.header}  style={{width: 200, height: 40}}/>), 
      headerShadowVisible: false}} />
       <Stack.Screen name="EditProfile" component={EditProfile} options={{headerTitle: () => (<Image 
        source={icons.header}  style={{width: 200, height: 40}}/>), 
      headerShadowVisible: false}} />
      <Stack.Screen name="Messages" component={Messages} options={{headerTitle: () => (<Image 
        source={icons.header}  style={{width: 200, height: 40}}/>), 
      headerShadowVisible: false}} />

    </Stack.Navigator>
  );
}

export default MainStack;