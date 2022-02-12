import React, { Component } from 'react'
import styled from 'styled-components'
import CntrOfertasComponent from './CntrOfertasComponent'
import {endpoint} from '../helpers/url'

const MainCompStyled = styled.main`
    background-color: hsl(180, 52%, 96%);
    width: 100%;
    display: flex;
    flex-direction: center;
    align-items: center;
`

export default class MainComponent extends Component {

  constructor() {
    super();
    this.state = {
        ofertas: []
    }
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
      const resp = await fetch(endpoint);
      const data = await resp.json();
      this.setState({ofertas:data})
  }

  render() {
    return (
      <MainCompStyled>
        <CntrOfertasComponent datos={this.state.ofertas} />
      </MainCompStyled>
    )
  }
  
}
