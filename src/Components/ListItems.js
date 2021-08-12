import React, { Component } from 'react'
import Items from './Items';
import styled from 'styled-components';
import image from './../images/image.svg'

export default class ListItems extends Component {
    render(){
        const items = this.props.todos.map(item =>
                <li key={item.id}>
                    <span>{item.name}</span>
                    {/*  لى اى كمبوننت تانيه id في نفس الكومبونتت فبكده هبعت ال id بس الحل ده الى هو في الكومنت ده هيكون احسن لو مفيش طريقه اعمل بيها اكسيز على ال props ك id في حل تانى انى ابعت ال  */}
                    <button onClick={() => this.props.deleteItem(item.id)}>Delete</button>
                </li>)
            // const x = "dsadsadad"
        return (
            <Div>
                <div>
                    {/* {const x = <img src={image} alt="asdasd" />} */}
                    {/* {this.props.todos.length === 0 ? 'NO CONTENT' : <Items items={items}/>} */}
                    <span>{this.props.todos.length === 0 && <img src={image} alt="logo" />}</span>
                    <span  className="no-content">{this.props.todos.length === 0 && 'NO CONTENT'}</span>
                </div>
                <Items items={items} id={this.props.id}/>
            </Div>
        )
    }
}
const Div = styled.div`
    min-height: 300px;
    /* background-color: red; */
div{
    text-align: center;
    span.no-content{
        font-weight: bolder;
        font-size: 25px;
        color: red;
        display: block;
        margin-top: 40px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    img{
        display: inline-block;
        height: 200px;
        width: 200px;
    }
}
`;
