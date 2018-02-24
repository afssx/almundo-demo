import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import { Container, Content, Header, Left, Right, Body, Title, Text, Button, Card, CardItem } from 'native-base';


export class MainScreen extends Component {
  render() {
    return (
        <Container>
            <Header>
                <Left />
                <Body>
                    <Title>Welcome</Title>
                </Body>
                <Right />
            </Header>
            <Content contentContainerStyle= {{justifyContent: 'center', alignItems: 'center', paddingTop: 40, paddingHorizontal: 10}}>
            <Card>
                    <CardItem>
                        <Text>
                            Welcome to Candy Land Folks ;)
                        </Text>
                    </CardItem>
                    <CardItem>
                        <Text>
                            Press Button to fetch Github Repos
                        </Text>
                    </CardItem>
                </Card>
            {/* <Button dark block onPress= {() =>{ Actions.RepoList();}} style= {{marginTop: 40}}>
                  <Text> Fetch Github Repos </Text>
                </Button> */}
            </Content>
            {/* <StatusBar barStyle="light-content" /> */}
        </Container>
    );
}
}

export default MainScreen