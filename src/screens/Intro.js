import React, { Component } from 'react';
import { View, StyleSheet  } from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';

import AppIntro from 'react-native-app-intro';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    padding: 15,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

class IntroScreen extends Component {
  onSkipBtnHandle = (index) => {
    // Alert.alert('Skip');
    console.log(index);
  }
  doneBtnHandle = () => {
    // Alert.alert('Done');
    console.log('done')
  }
  render() {
    return (
       <AppIntro showSkipButton={false} showDoneButton={false} onDoneBtnClick={this.doneBtnHandle} onSkipBtnClick={this.onSkipBtnHandle}>
        <View style={[styles.slide,{ backgroundColor: '#fa931d' }]}>
          <Text level={10}> Welcome </Text>
        </View>
        <View style={[styles.slide, { backgroundColor: '#a4b602' }]}>
           <Text level={15}> Welcome2 </Text>
            <Button rounded>
              <Text>Comenzar</Text>
            </Button>
         </View>
       </AppIntro>
    );
  }
}

export default IntroScreen;
