import React, {FunctionComponent} from "react";
import Message from '../../../interfaces/message.interface';
import style from './style.less';
import { connect } from 'react-redux';
import axios from "axios";
import {actionFetchRecommendations} from '../../../actions'


interface Props {
message: Message;
loadData: () => () => void;
}

const MessageTile: FunctionComponent<Props> = ({message: message,loadData}) => {
  const handleClick = () => axios.delete('http://127.0.0.1/api/scout-recommendation/get', {params: message}).then(
    loadData()
  )

  return (
    <div className={style.component}>
      <button onClick={handleClick}>X</button>
      <h3>{message.title}</h3>
      <p>{message.description}</p> 
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    loadData: () => dispatch(actionFetchRecommendations)
  };
};

export default connect(null, mapDispatchToProps)(MessageTile);
