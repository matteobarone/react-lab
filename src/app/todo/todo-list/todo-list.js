import React from 'react';
import TodosItem from '../todo-item/todo-item';

export default class TodosList extends React.Component {
  constructor() {
    super();
    this.onCheck = this.onCheck.bind(this);
  }

  onCheck(isChecked, id) {
    this.props.onCheck(isChecked, id);
  }

  render() {
    const items = this.props.items.map((item, index) => {
      return (
        <li key={index}>
          <TodosItem onCheck={this.onCheck} value={item.value} id={index}/>
        </li>
      );
    });
    return <ul>{items}</ul>;
  }
}