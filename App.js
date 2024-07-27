import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import GettingStarted from './GettingStarted';
import SignUp from './SignUp';
import Login from './Login';
import HomeTabs from './HomeTabs';
import { GlobalProvider } from './GlobalContext';
import CustomDrawerContent from './CustomDrawerContent';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <GlobalProvider>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="GettingStarted"
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen name="GettingStarted" component={GettingStarted} />
          <Drawer.Screen name="SignUp" component={SignUp} />
          <Drawer.Screen name="Login" component={Login} />
          <Drawer.Screen name="HomeTabs" component={HomeTabs} />
        </Drawer.Navigator>
      </NavigationContainer>
    </GlobalProvider>
  );
};

export default App;