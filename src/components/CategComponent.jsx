import React, { Component } from 'react';
import styled from 'styled-components';

const CntnrCategStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content:flex-end;
    flex-wrap: wrap;
    flex-grow:1;
    @media screen and (max-width:767px){
        margin-top: 15px;
        justify-content: flex-start;
    }
`

const Categoria = styled.button`
    font-size: 13px;
    margin-left: 15px;
    padding: 10px;
    color: hsl(180, 29%, 50%);
    background-color: hsl(180, 31%, 95%);
    border: none;
    &:hover{
        background-color: hsl(180, 29%, 50%);
        color: hsl(180, 31%, 95%);
    }
    @media screen and (max-width:767px){
        margin: 10px 15px 0 0;
    }
`

export default class CategComponent extends Component {

    render() {

        const {categorias} = this.props.informacion;

        return (
        <CntnrCategStyled>
            {
                categorias.map((categ, index) =>(
                    <Categoria key={index} >{categ}</Categoria>
                ))
            }
        </CntnrCategStyled>
        )
    }
}