import React, { Component } from 'react'
import { View, Text } from 'react-native'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class DealsScreen extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  render() {
    return (
      <View>
        <Text> Ofertas del dia </Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(DealsScreen)
