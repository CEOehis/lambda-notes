import React, { Component } from 'react';
import Input from 'Input';
import TextArea from 'TextArea';
import { Button } from 'reactstrap';

class EditNoteContainer extends Component {
  constructor(props) {
    super(props);

    const note = this.props.match.url.includes('edit') ? this.props.notes[this.props.match.params.id - 1] : null;
    this.state = {
      title: note ? note.title : '',
      content: note ? note.body : '',
    }

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.editNote = this.editNote.bind(this);
    this.goBack = this.goBack.bind(this);
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

  editNote() {
    const { title, content } = this.state;
    this.setState({
      title: '',
      content: ''
    });
    const note = {
      title,
      body: content,
      id: +this.props.match.params.id
    }
    this.props.history.push('/');
    this.props.onEditNote(note);
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    const { title, content } = this.state;
    return (
      <div className="container">
        <h2>Edit Note:</h2>
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
        <Button onClick={this.editNote} color="success">Save</Button>
        <Button onClick={this.goBack} color="secondary">Back</Button>
      </div>
    )
  }
}

export default EditNoteContainer;