import React,{ Component } from 'react';
import styled  from 'styled-components';

export default class AddItems extends Component{
    render(){
        return (
            <div>
                <Form onSubmit={this.props.sendData}>
                    <input type="text" onChange={this.props.handelChange} value={this.props.item}/>
                    <button>submit</button>
                </Form>
            </div>
        )
    }
}

const Form = styled.form`
    text-align: center;
    input{
        font-size: 1em;
        margin: 1em;
        padding: 0.8em 1em;
        border-radius: 25px;
        border: 1px solid black;
        width: 437px;
            &:focus{
                border: 1px solid #bdf9ff;
                outline: none;
                background-color: #bdf9ff;
                color: #2e1b1b;
            }
    }
    button {
        border: none;
        border-radius: 28px;
        background-color: #6a6aff;
        padding: 8px;
        width: 123px;
        color: #fff;
        font-size: 17px;
    }
`;