import React, { Component } from 'react'
import styled from 'styled-components'
import CategComponent from './CategComponent'
import InfoComponent from './InfoComponent'

const DivStyled = styled.div`
    display:flex;
    flex-direction:row;
    width:100%;
    margin: 50px 0;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 0px 20px -1px rgba(123,142,142,0.97);
    @media screen and (max-width:767px){
        flex-direction: column;
        justify-content: flex-end;
        position: relative;
    }
`
const ImgStyled = styled.img`
    margin: 0 15px;
    @media screen and (max-width:767px){
        width: 80px;
        position: absolute;
        top: -40px;
    }
`

export default class OfertaComponent extends Component {
    
    render() {

        const datos = this.props.data;
        const imagen = datos.logo;
        const rutaImg = "images/"+imagen;
        const categFeat = datos.otros[1];
        let claseSeleccion = "";

        if(categFeat!==undefined){
            claseSeleccion="borde-select";
        }

        return (
            <DivStyled className={claseSeleccion}>
                <ImgStyled src={rutaImg} alt="logo" />
                <InfoComponent informacion={datos}/>
                <CategComponent informacion={datos}/>
            </DivStyled>
        )
    }
}
//