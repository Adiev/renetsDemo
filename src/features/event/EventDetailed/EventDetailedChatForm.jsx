import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { reduxForm, Field } from 'redux-form';
import TextArea from '../../../app/common/form/TextArea';

class EventDetailedChatForm extends Component {
  handleCommentSubmit = values => {
    const { addEventComment, reset, eventId, closeForm, parentId } = this.props;
    addEventComment(eventId, values, parentId);
    reset();
    if (parentId !== 0) {
      closeForm();
    }
  };

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit(this.handleCommentSubmit)}>
        <Field name='comment' type='text' component={TextArea} rows={2} />
        <Button content='Kirim Komentar' labelPosition='left' icon='edit' primary />
      </Form>
    );
  }
}

export default reduxForm({ Fields: 'comment' })(EventDetailedChatForm);