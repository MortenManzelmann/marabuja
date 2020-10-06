import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { AppState } from 'reducers';
import { actionFetchMessage} from '../../actions'

import Page from '../../ui-basic/container/page/page.container';
import MessageListComponent from "./components/message-list";

import {MessageList as MessageListInterface } from "../../interfaces/message-list.interface";

interface BoardProps {
  loadData: () => () => void,
  // page: PageInterface,
  messageList: MessageListInterface,
  state: string,
  errorMessage?: string,
}

interface State {
}

class Board extends Component<BoardProps, State> {

  constructor(props: BoardProps, state: State) {
    super(props, state);
  }

  componentDidMount() {
    if (this.props.state === 'INIT') {
      this.props.loadData();
    }
  }

  render() {
    return (
      <Page>
      <section>
        <Helmet>
          <title>
            Board
          </title>
        </Helmet>
        <h1>Board</h1>
        {this.renderMessageList()}
      </section>
      </Page>
    );
  }

  renderMessageList() {
    if (this.props.state === 'LOADING') {
      return (<p>Loading ...</p>);
    } else if (this.props.state === 'ERROR') {
      return (<p>Error: {this.props.errorMessage}</p>);
    } else if (this.props.state === 'LOADED') {
      return (<MessageListComponent />);
    } else {
      return 'Init State';
    }
  }
};

const mapStateToProps = (state: AppState, ownProps: BoardProps) => {
  return {
    messageList: state.list.messageList,
    state: state.list.state,
    errorMessage: ''
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    loadData: () => dispatch(actionFetchMessage())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
