import React from "react";
import TodoPut from "./components/TodoPut";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

class App extends React.Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false
  };
  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
if(this.state.item !==""){
    const newItem = {
      id: this.state.id,
      title: this.state.item
    };

  
    const updateItems = [...this.state.items, newItem];
    this.setState({
      items: updateItems,
      item: "",
      id: uuid(),
      editItem: false
    });
    // this.target.value="";
  }
  };
  clearList = () => {
    this.setState({
      items: []
    });
  };
  handleDelete= id =>{
    const filterItems = this.state.items.filter(item =>
      
        item.id !==id);
        this.setState({
          items:filterItems
        })
      
  }
  handleEdit = id =>{
    const filterItems = this.state.items.filter(item =>
      
      item.id !==id);
      const selectedItem = this.state.items.find(item =>item.id===id);
  
      this.setState({
        items:filterItems,
        item:selectedItem.title,
        editItem:true,
        id:id
      })
    
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-10 mx-auto col-md-8 mt-4">
              <h1 className="text-captilize text-center">To-do List</h1>
              <TodoPut
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />
              <TodoList items={this.state.items} clearList={this.clearList} 
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
             />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;


