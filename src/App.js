import React ,{ Component } from 'react';
import './App.css';
import Header from './Components/Header';
import ListItems from './Components/ListItems';
import AddItems from './Components/AddItems';

export default class App extends Component {
    state ={
        todo : [],
        item: '',
    }
    handelChange = (event) =>{
        this.setState({
            item: event.target.value,
        })
    }
    submitIem = (event) =>{
        event.preventDefault();
        if (this.state.item === '') {
            alert("Please enter a task");
            return false;
        }else{
                let todo = [...this.state.todo, {
                id: Math.random(),
                name: this.state.item
            }];
            this.setState({
                todo: todo,
                item: '',
            })
        }
    };
    deleteItem = (id)=>{
        let todoItems = [...this.state.todo];
        let newItems = todoItems.filter(item => item.id !== id);
        this.setState({
            todo: newItems,
        })
    }
    render(){
        console.log(this.state.todo)
        return (
        <div className="App">
            <Header />
            <ListItems
                todos={this.state.todo}
                deleteItem={this.deleteItem}
                submit={this.handelSubmit}
            />
            <AddItems
                handelChange= {this.handelChange}
                sendData= {this.submitIem}
                item= {this.state.item}
            />
        </div>
        );
    }
}