import {
  StackNavigationProp,
  createStackNavigator,
} from '@react-navigation/stack';

import React from 'react';

// import { useThemeContext } from '../../providers/ThemeProvider';

export type StackParamList = {
  default: undefined;
};

export type StackNavigationProps<
  T extends keyof StackParamList = 'default'
> = StackNavigationProp<StackParamList, T>;

const Stack = createStackNavigator<StackParamList>();

function __StackNavigator(): React.ReactElement {
  // const { theme } = useThemeContext();
  return (
    <Stack.Navigator
      screenOptions={
        {
          // headerStyle: {
          //   backgroundColor: theme.background,
          // },
          // headerTitleStyle: { color: theme.fontColor },
          // headerTintColor: theme.tintColor,
        }
      }
    >
      {/* <Stack.Screen name="Screen" component={Screen} /> */}
    </Stack.Navigator>
  );
}

export default __StackNavigator;
