import React, { FunctionComponent, useState } from 'react';
import { connect } from 'react-redux';
import { actionPostMessage } from '../../../../actions';
import {ScoutRecommendation} from '../../../../interfaces/scout-recommendation.interface';

interface Props {
  postData: (message: ScoutRecommendation) => () => void
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
    postData: (message: ScoutRecommendation) => dispatch(actionPostMessage(message))
  };
};

export default connect(null, mapDispatchToProps)(RecommendationForm);
