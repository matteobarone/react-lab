import React from 'react';

export default class TodosForm extends React.Component {
  onAddItem = () => {
    this.props.onAddItem(this.inputText.value);
    this.inputText.value = '';
  };

  render() {
    return (
      <div className="todosForm">
        <input type="text" placeholder="add something.." ref={(input) => this.inputText = input} />
        <button onClick={this.onAddItem}>Add</button>
        <button onClick={this.props.onClear}>Clear</button>
      </div>
    );
  }
}