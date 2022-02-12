import { Component } from 'react';
import styled from 'styled-components'
import OfertaComponent from './OfertaComponent';

const CntrOfertas = styled.div`
  width: 950px;
  margin: auto;
  @media screen and (max-width:950px){
    width: 95%;
  }
`

export default class CntrOfertasComponent extends Component {

  render() {

    const data = this.props.datos;
    
    return (
        <CntrOfertas>
          {
            data.map((dat, index)=>(
              <OfertaComponent data={dat} key={index}/>
            ))
          }
        </CntrOfertas>
    )

  }
}
