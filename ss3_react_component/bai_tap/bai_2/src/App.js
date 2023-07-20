
import './App.css';
import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      item: ''
    } 
  }
  handelchange = (event) => {
    this.setState({ item: event.target.value });
  };
  handleAddItem = () => {
    const { item } = this.state
    if (item === '') {
      return;
    }
    this.setState({
      list: [],
      item: ''
    })
    this.state.list.push(item)
    const newObj = {
      list: this.state.list
    }
    this.setState(newObj)
  };
  render() {
    return (
      <div>
        <input type="text" value={this.state.item} onChange={this.handelchange} />
        <button onClick={this.handleAddItem}>Add</button>
        <ul>
          {this.state.list.map((items,index )=> {
            return <li key={index}>{items}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
