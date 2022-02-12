import React, { Component } from 'react'
import HeaderComponent from '../components/HeaderComponent'
import MainComponent from '../components/MainComponent'

export default class app extends Component {
  render() {
    return (
      <React.Fragment>
          <HeaderComponent/>
          <MainComponent/>
      </React.Fragment>
    )
  }
}