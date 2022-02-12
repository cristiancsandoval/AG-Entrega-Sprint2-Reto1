import React, { Component } from 'react'
import styled from 'styled-components'

const HeaderCompStyled = styled.header`

    width: 100%;
    height: 156px;
    margin: 0;
    background-image: url("./images/bg-header-desktop.svg");
    background-color: hsl(180, 29%, 50%);
    /**Media Query**/
    @media screen and (max-width:767px){
        background-image: url("./images/bg-header-mobile.svg");
    }

`

export default class HeaderComponent extends Component {
  
    render() {
    return (
      <HeaderCompStyled></HeaderCompStyled>
    )
  }

}
