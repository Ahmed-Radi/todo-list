import React, { Component } from 'react'
import styled from 'styled-components'

export default class Items extends Component {
    render() {
        return (
            <Ul>
                {this.props.items}
            </Ul>
        )
    }
}
const Ul = styled.ul`
    li{
        background: #033;
        color: #fff;
        list-style: none;
        padding: 10px;
        margin: 5px auto;
        width: 80%;
        border: none;
        border-radius: 10px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            span{
                font-size: 18px;
                width: 75%;
                display: inline-block;
                margin-left: 15px;
            }
            button{
                margin-left: 50px;
                border: none;
                border-radius: 28px;
                background-color: #6a6aff;
                padding: 8px;
                width: 123px;
                color: #fff;
                font-size: 17px;
            }
    }

`;