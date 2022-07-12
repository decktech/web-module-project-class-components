import React from 'react'

export default class Form extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.handleAdd()
  }
  render() {
    return (
      <form>
          <input/>
          <button onClick={this.handleSubmit}>Add</button>
          <button onClick={this.props.handleClear}>Clear</button>
        </form>
    )
  }
}
