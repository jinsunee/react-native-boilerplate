import {
    StackNavigationProp,
    createStackNavigator,
  } from '@react-navigation/stack';
  import {StatusBar} from 'react-native';
  import {NavigationContainer} from '@react-navigation/native';
  
  import React from 'react';
  import Main from '../screen/Main';
  import AddVoca from '../screen/AddVoca';
  import VocaList from '../screen/VocaList';
  
  export type StackParamList = {
    Main: undefined;
    AddVoca: undefined;
    VocaList: undefined;
  };
  
  export type RootStackNavigationProps<
    T extends keyof StackParamList = 'Main'
  > = StackNavigationProp<StackParamList, T>;
  
  const Stack = createStackNavigator<StackParamList>();
  
  function __StackNavigator(): React.ReactElement {
    return (
      <NavigationContainer>
        <StatusBar
          // barStyle={theme === ThemeType.LIGHT ? 'dark-content' : 'light-content'}
          barStyle={'dark-content'}
          backgroundColor={'transparent'}
          translucent={true}
        />
        <Stack.Navigator
          screenOptions={
            {
              headerShown: false,
              // headerStyle: {
              //   backgroundColor: theme.background,
              // },
              // headerTitleStyle: { color: theme.fontColor },
              // headerTintColor: theme.tintColor,
            }
          }
        >
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="AddVoca" component={AddVoca} />
          <Stack.Screen name="VocaList" component={VocaList} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default __StackNavigator;
  