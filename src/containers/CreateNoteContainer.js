import React, { Component } from 'react';
import Input from 'Input';
import TextArea from 'TextArea';
import { Button } from 'reactstrap';

class CreateNoteContainer extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      content: '',
    }

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.saveNote = this.saveNote.bind(this);
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value
    });
  }

  handleContentChange(event) {
    this.setState({
      content: event.target.value
    })
  }

  saveNote() {
    const { title, content } = this.state;
    this.setState({
      title: '',
      content: ''
    });
    this.props.history.push('/');
    this.props.onSaveNote(title, content);
  }

  render() {
    const { title, content } = this.state;
    return (
      <div className="container">
        <h2>Create New Note:</h2>
        <Input
          type="text"
          label="note-title"
          text="Note Title"
          value={title}
          handleChange={this.handleTitleChange}
        />
        <TextArea
          type="textarea"
          label="note-content"
          text="Note Content"
          value={content}
          handleChange={this.handleContentChange}
          rows='10'
        />
        <Button onClick={this.saveNote} color="success">Save</Button>
      </div>
    )
  }
}

export default CreateNoteContainer;