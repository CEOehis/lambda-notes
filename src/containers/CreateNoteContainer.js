import React, { Component } from 'react';
import Input from 'Input';
import TextArea from 'TextArea';
import { Button } from 'reactstrap';
// temporarily use mock notes
import { notes } from '../mocks/notes'

class CreateNoteContainer extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      content: '',
      notes: notes
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
    const { title, content, notes } = this.state;
    const note = {
      title,
      body: content,
      id: notes.length + 1
    }
    notes.push(note);
    console.log(note);
    this.setState({
      notes: notes
    })
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