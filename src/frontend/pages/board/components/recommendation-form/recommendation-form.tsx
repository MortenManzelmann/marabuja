import React, { FunctionComponent, useState } from 'react';
import { connect } from 'react-redux';
import { actionPostMessage } from '../../../../actions';
import {Message} from '../../../../interfaces/message.interface';

interface Props {
  postData: (message: Message) => () => void
}

const RecommendationForm: FunctionComponent<Props> = ({postData}) => {
  const [message, setMessage] = useState('');
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) :void => {
    postData({
      title: 'title',
      description: message,
      author: 'me',
      created: 'now',
    })
    event.preventDefault();
  }
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) :void => { setMessage(event.currentTarget.value); }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Message: 
        <input type="text" value={message} onChange={handleChange}/>
      </label>
      <input type="submit" value="Submit"/>
    </form>
  )
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    postData: (message: Message) => dispatch(actionPostMessage(message))
  };
};

export default connect(null, mapDispatchToProps)(RecommendationForm);
