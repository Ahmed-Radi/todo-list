import React, { Component } from 'react'
import styled from 'styled-components'
export default class Header extends Component {
    render(){
        return (
            <HeaderStyled>
                Todo List
            </HeaderStyled>
        )
    }
}

const HeaderStyled = styled.h2`
    text-align: center;
    background-color: #033;
    color: #fff;
    text-transform: uppercase;
    padding: 20px;
    margin-top: 0;
`;