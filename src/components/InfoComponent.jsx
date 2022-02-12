import React, { Component } from 'react'
import styled from 'styled-components'

const DivInfoStyled = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:space-around;
    @media screen and (max-width:767px){
        margin-top: 45px;
        padding-bottom: 15px;
        border-bottom: solid 1px hsl(180, 8%, 52%);
    }
`

const DivNombre = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:flex-start;
`

const SpanNombre = styled.span`
    font-weight: 700;
    font-size: 13px;
    color: hsl(180, 29%, 50%);
`

const SpanOtrosNew = styled.span`
    background-color: hsl(180, 29%, 50%);
    color:hsl(180, 31%, 95%);
    font-size: 11px;
    padding: 5px 3px;
    margin: 0 10px;
    border-radius: 10px;
`
const SpanOtrosFeat = styled.span`
    background-color: hsl(180, 14%, 20%);
    color: hsl(180, 31%, 95%);
    font-size: 11px;
    padding: 5px 3px;
    border-radius: 10px;
`

const HCargo = styled.h3`
    color:hsl(180, 14%, 20%);
    &:hover{
        color: hsl(180, 29%, 50%);
    }
    @media screen and (max-width:767px){
        margin: 10px 0;
    }
`
const DivDetalles = styled.div`
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content: flex-start;
`
const HDetalle = styled.h5`
    color:hsl(180, 8%, 52%);
    font-size: 13px;
    align-self: center;
    &:first-child::after, &:nth-child(2):after{
        content: "-";
        font-size: 1px;
        background-color:hsl(180, 8%, 52%);
        border-radius: 100px;
        margin: 0 10px;
        padding: 1px;
    }
`

export default class InfoComponent extends Component {

    render() {

        const {empresa, cargo, fecha, tiempo, lugar, otros } = this.props.informacion;
        let claseNew = "";
        let claseFeat = "";

        if(otros[0]===undefined){
            claseNew = "d-none"
        } if(otros[1]===undefined){
            claseFeat = "d-none"
        }
    
        return (
            <DivInfoStyled>
                <DivNombre>
                    <SpanNombre>{empresa}</SpanNombre>
                    <SpanOtrosNew className={claseNew}>{otros[0]}</SpanOtrosNew>
                    <SpanOtrosFeat className={claseFeat}>{otros[1]}</SpanOtrosFeat>
                </DivNombre>
                <HCargo>{cargo}</HCargo>
                <DivDetalles>
                    <HDetalle>{fecha}</HDetalle>
                    <HDetalle>{tiempo}</HDetalle>
                    <HDetalle>{lugar}</HDetalle>
                </DivDetalles>
            </DivInfoStyled>
        )
    }
}


