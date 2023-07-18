import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
items:[
  {
    name:"Iphone 7 Plus",price:500.0
  },
  {
    name:"Iphone 8 Plus",price:1400.0
  },
  {
    name:"Iphone 10",price:1600.0
  },
  {
    name:"Iphone 10 Pro",price:1700.0
  }
],
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        index:0,
        name:"",
        price:0,
        action:"ADD ITEM",//default ADD ITEM
        items:[
          {
            name:"Iphone 7 Plus",price:500.0
          },
          {
            name:"Iphone 8 Plus",price:1400.0
          },
          {
            name:"Iphone 10",price:1600.0
          },
          {
            name:"Iphone 10 Pro",price:1700.0
          }
        ]
    }
    this.changeName = this.changeName.bind(this);
    this.changePrice = this.changePrice.bind(this);
   
  }
  changeName = (e)=>{
      this.setState({
         name:e.target.value
      })
  }
  changePrice = (e)=>{
      this.setState({
        price:e.target.value
      })
  }
 
  addItem =()=>{
      if(!this.state.items.find(item=>item.name===this.state.name)){
        this.setState({
          items:[
            ...this.state.items,
            { name:this.state.name,price:this.state.price}
          ],
          name:"",
          price:""
        })
      }
  }
  Edit = (item,index)=>{
    this.setState({
      action:'UPDATE ITEM',
      name:item.name,
      price:item.price,
      index:index
    });
  }
  updateItem = ()=>{
    let data = this.state.items;
    data.map((item,index)=>{
              if(this.state.index===index){
                item.name = this.state.name;
                item.price = parseInt(this.state.price);
              }
    })
    //set update items
    this.setState({
       items:data,
       name:"",
       price:"",
       action:'ADD_ITEM'
    })
     
  }
 
  deleteItem=(name)=>this.setState({
    items:this.state.items.filter(item=>item.name!=name)
  });



// const root = ReactDOM.createRoot(document.getElementById('root'));
render(){
  return (
    <div className="container">
        <div className="row">
          <div className="col-md-4">
              <h1>{this.state.action}</h1>
              <div className="form-group">
                  <label>Name</label>
                  <input type="text" name="" className="form-control" onChange={this.changeName} value={this.state.name}/>
              </div>
              <div className="form-group">
                  <label>Price</label>
                  <input type="text" name=""  className="form-control" onChange={this.changePrice} value={this.state.price}/>
              </div>
              <div className="form-group">      
                 <button type="button" className="btn btn-primary"  onClick={this.state.action=='ADD ITEM'?this.addItem:this.updateItem}>Add</button>
              </div>
          </div>
           
          <div className="col-md-8">
              <h1>List Products</h1>
              <table className="table">
                 <thead>
                    <tr>
                         <th>SDT</th>
                         <th>Name</th>
                         <th>Price</th>
                         <th>Modify</th>
                         <th>Remove</th>
                    </tr>
                 </thead>
                 <tbody>
                    {
                      this.state.items.map((item,index)=>(
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{item.name}</td>
                            <td>{item.price} $</td>
                            <td><label className="badge badge-warning" onClick={()=>this.Edit(item,index)}>modify</label></td>
                            <td><label className="badge badge-danger" onClick={()=>this.deleteItem(item.name)}>remove</label></td>
                        </tr>
                      ))
                    }
                 </tbody>
              </table>
          </div>
        </div>
    </div>
  );
}
}

export default App;
addItem =()=>{
  if(!this.state.items.find(item=>item.name===this.state.name)){
    this.setState({
      items:[
        ...this.state.items,
        { name:this.state.name,price:this.state.price}
      ],
      name:"",
      price:""
    })
  }
}
updateItem = ()=>{
  let data = this.state.items;
  data.map((item,index)=>{
            if(this.state.index===index){
              item.name = this.state.name;
              item.price = parseInt(this.state.price);
            }
  })
  //set update items
  this.setState({
     items:data,
     name:"",
     price:"",
     action:'ADD_ITEM'
  })
   
}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
