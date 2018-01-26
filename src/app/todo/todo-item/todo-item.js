import React from 'react';

export default class TodosItem extends React.Component {
  constructor() {
    super();
    this.handleChanges = this.handleChanges.bind(this);
  }

  handleChanges(event) {
    this.props.onCheck(event.target.checked, this.props.id);
  }
  
  render() {
    return (
      <div>
        <input type="checkbox" onChange={this.handleChanges}/>
        {this.props.value}
      </div>
    );
  }
}