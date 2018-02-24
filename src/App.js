/**
 * @flow
 */

import React, { Component } from 'react';
import {Platform, StyleSheet, View, StatusBar} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Button, Text, Footer, FooterTab, Icon, StyleProvider } from "native-base";
import getTheme from './native-base-theme/components';
import Intro from './screens/Intro'
import Main from './screens/Main'
import Home from './screens/Home'
import Deals from './screens/Deals'
import Trips from './screens/Trips'
import Account from './screens/Account'

const Tabs = TabNavigator(
  {
    Home: { screen: Home},
    Deals: { screen: Deals},
    Trips: { screen: Trips},
    Account: { screen:Account }
  },
  {
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab >
            <Button
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("Home")}>
              <Icon name="home" />
            </Button>
            <Button
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("Deals")}>
              <Icon name="md-bonfire" />
            </Button>
            <Button
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("Account")}>
              <Icon name="md-person" />
            </Button>
          </FooterTab>
        </Footer>
      );
    },
    tabBarPosition: 'bottom'
  }
);

const RootStack = StackNavigator(
  {
    Intro: {
      screen: Intro,
    },
    Main: {
      screen: Tabs
    }
  }, 
  { 
    initialRouteName:'Main', 
    headerMode:'none',
    mode: Platform.OS === 'ios' ? 'modal' : 'card'
});

export default () => <StyleProvider  style={getTheme()}><RootStack /></StyleProvider>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  shadow:{
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.8,
    shadowRadius: 2
  }
});
