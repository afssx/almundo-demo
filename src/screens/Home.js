import React, { Component } from 'react'
import { ScrollView, StyleSheet, Image, ListView, ActivityIndicator, View } from 'react-native'
import { Container, Header, Content,Card, CardItem, Body, Text, Left, Right, Title, Button, Icon, Thumbnail } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      highlights: ds
    }
  }

  componentDidMount(){
    return fetch('https://almundo.com.co/experts/api/experts/highlights')
      .then((response) => response.json())
      .then((responseJson) => {
        // let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          highlights: ds.cloneWithRows(responseJson),
        }, function() {

        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <Container>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Content>
            <Grid>
              <Row style={{ height: 250 }}>
                <Col>
                  <Row>
                    <Card>
                      <CardItem>
                        <Body>
                          <Text>
                            Loading...
                          </Text>
                        </Body>
                      </CardItem>
                    </Card>
                  </Row>
                  <Row>
                    <Card>
                    <CardItem style={{height:24, paddingBottom:2, paddingTop:0, paddingLeft:8}}>
                        <Body>
                          <Text style={{color:'#999'}}>Paquetes</Text>
                        </Body>
                    </CardItem>
                    <CardItem cardBody style={styles.container}>
                      
                        <Image
                        source={{uri: 'https://images.almundo.com/205/image/fetch/fl_progressive,q_auto,c_fill,g_auto,w_304,h_264/http%3A%2F%2Fam-frontend.s3.amazonaws.com%2Fwp-content%2Fuploads%2F2018%2F02%2F23193430%2Fvidriera_home_superfinde1.png'}} 
                        style={[styles.image]}/>
                        <Text style={[styles.paragraph,{ color:'#fff'}]} >San Andres</Text>
                    </CardItem>
                  </Card>
                  </Row>
                </Col>
                <Col>
                  <Card>
                    <CardItem>
                      <Body>
                        <Text>
                          Loading...
                        </Text>
                      </Body>
                    </CardItem>
                  </Card>
                </Col>
              </Row>
              <Row style={{ height: 200 }}>
                <Col>
                  <Card>
                    <CardItem>
                      <Body>
                        <Text>
                          Loading ...
                        </Text>
                      </Body>
                    </CardItem>
                  </Card>
                </Col>
              </Row>
              <Row style={{ height: 200 }}>
              {renderIf(this.state.isLoading, 
                    <ActivityIndicator />
                )}
                
                {renderIf(!this.state.isLoading,
                    <ListView horizontal={true}     style={{flex:1}}

                    dataSource={this.state.highlights}
                    renderRow={(rowData) => 
                      <View>
                        <Card>
                          <CardItem>
                          <Body style={styles.center}>
                            <Thumbnail large source={{uri: rowData.profile.profile_image }} />
                            <Text>{rowData.name}</Text>
                            <Text>Vive en {rowData.residence.description}</Text> 
                          </Body>
                        </CardItem>
                      </Card>
                      </View>}
                  />
                )}
              
              </Row>
            </Grid>
          </Content>
        </ScrollView>
      </Container>
    )
  }
}
const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  image: {
    flexGrow:1,
    height:null,
    width:null,
    alignItems: 'center',
    justifyContent:'center',
  },
  paragraph: {
    position: 'absolute',
    top: 4,
    left:8,
    textAlign: 'center',
  }, 
  center:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
});


const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}
function renderIf(condition, content) {
  if (condition) {
      return content;
  } else {
      return null;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
