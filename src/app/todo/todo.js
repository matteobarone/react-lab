import React from 'react';
import TodosForm from './todo-form/todo-form';
import TodosList from './todo-list/todo-list';

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', items: []};
  }

  onAddItem = (value) => {
    if (value) {
      this.setState({items: [...this.state.items, {value, checked: false}]});
      this.setState({value: ''});
    }
  };

  onClear = () => {
    this.setState({items: []});
  };

  onCheck = (isChecked, id) => {
    const newItems = this.state.items;
    newItems[id].checked = isChecked;
    this.setState({items: newItems});
  };

  render() {
    return (
      <div className="todos">
        <h1>TODOS</h1>
        <TodosForm
          onClear={this.onClear}
          onAddItem={this.onAddItem}/>
        <TodosList items={this.state.items} onCheck={this.onCheck}/>
      </div>
    );
  }
}