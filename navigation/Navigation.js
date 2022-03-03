import React from 'react';
import {Text} from 'react-native';

import { createStackNavigator} from 'react-navigation-stack'; //stack
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation'; //이거 이케 해줘야되네 따로

import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/colors';

// import { Platform } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import Colors from '../constants/colors';

//메인 스크린(Card)
import FolderScreen from '../screens/folder';
import MainScreen from '../screens/main';
import TestScreen from '../screens/test';


//메인탭(카드)의 스택 네비게이션
const MainStack = createStackNavigator({ 
    folder: FolderScreen,
    Main: MainScreen,
});

const testStack = createStackNavigator({ 
    Test: TestScreen,
});

const Drawer = createDrawerNavigator({
    Main: MainStack,
    Test: testStack,
},
{
    contentOptions: {
        activeTintColor: Colors.primaryColor
    }
});

export default createAppContainer(Drawer);