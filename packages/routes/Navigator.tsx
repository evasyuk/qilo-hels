import React, { useContext, useEffect } from 'react';
import { BackHandler } from 'react-native';
import { NavigationContainer, NavigationState } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DefaultTheme, ThemeContext } from 'styled-components/native';
import {
  getActiveRouteName,
  navigationRef,
  setStatusBar,
} from '@asdfq/utils/navigation';
import {WelcomeScreen} from '@asdfq/wizard-flow/WelcomeScreen';
import {WizardScreen} from '@asdfq/wizard-flow/WizardScreen/WizardScreen';
import {SummaryScreen} from '@asdfq/wizard-flow/SummaryScreen';

import { ROUTES } from './RouteNames';

const disabledAndroidBackScreens: string[] = [
  ROUTES.Welcome,
  ROUTES.Summary,
];

let currentRouteName = 'unknown';
let previousRouteName = 'unknown';

export const getCurrentRouteName = () => currentRouteName;
export const getPreviousRouteName = () => previousRouteName;

const Navigator = () => {
  const theme = useContext(ThemeContext);

  const onMount = () => {
    BackHandler.addEventListener('hardwareBackPress', onAndroidBack);
    return () => onUnmount();
  };

  const onUnmount = () => {
    BackHandler.removeEventListener('hardwareBackPress', onAndroidBack);
  };

  useEffect(onMount, []);

  const onAndroidBack = () => {
    const scene = currentRouteName;
    const enableBack = disabledAndroidBackScreens.indexOf(scene) !== -1;
    return enableBack;
  };

  const onRouteChange = (state: NavigationState, theme: DefaultTheme) => {
    previousRouteName = currentRouteName;
    currentRouteName = getActiveRouteName(state) as string;

    if (currentRouteName !== previousRouteName) {
      setStatusBar(currentRouteName, theme);
    }
  };

  const Stack = createStackNavigator();

  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={(state: NavigationState) => onRouteChange(state, theme)}
    >
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="welcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="wizardScreen" component={WizardScreen} />
        <Stack.Screen name="summaryScreen" component={SummaryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
