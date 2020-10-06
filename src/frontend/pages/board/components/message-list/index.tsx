import React, { FunctionComponent } from 'react';
import MessageTile from '../../../../ui-basic/components/message-tile';
import {MessageList} from '../../../../interfaces/message-list.interface';
import style from './style.less';
import MessageForm from '../recommendation-form';
import { connect } from 'react-redux';
import { AppState } from 'reducers';



interface Props {
  messageList?: MessageList
}

const MessageList: FunctionComponent<Props> = ({ messageList: messageList }) => {
  return (
    <div className={style.component}>
      <ul>
        {
          messageList.messageList.map(message => (
            <li key={message.created} >
              <MessageTile message={message} />
            </li >
          ))
        }
        <li>
          <MessageForm />
        </li>
      </ul>
    </div>
  )
}
const mapStateToProps = (state: AppState, ownProps: Props) => {
  return {
    message: state.list.messageList,
  };
};

export default connect<ReturnType<typeof mapStateToProps>, undefined, Props, AppState>(mapStateToProps)(MessageList);

