import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { AppState } from 'reducers';
import {actionFetchRecommendations} from '../../actions'

import Page from '../../ui-basic/container/page/page.container';
import MessageList from "./components/scout-recomendation-list/message-list";

import ScoutRecommendationList from "../../interfaces/scout-recommendation-list.interface";
import PageInterface from '../../interfaces/page.interface';

interface BoardProps {
  loadData: () => () => void,
  // page: PageInterface,
  scoutRecommendations: ScoutRecommendationList,
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
        {this.renderRecommendations()}
      </section>
      </Page>
    );
  }

  renderRecommendations() {
    if (this.props.state === 'LOADING') {
      return (<p>Loading ...</p>);
    } else if (this.props.state === 'ERROR') {
      return (<p>Error: {this.props.errorMessage}</p>);
    } else if (this.props.state === 'LOADED') {
      return (<MessageList />);
    } else {
      return 'Init State';
    }
  }
};

const mapStateToProps = (state: AppState, ownProps: BoardProps) => {
  return {
    scoutRecommendations: state.list.scoutRecommendations,
    state: state.list.state,
    errorMessage: ''
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    loadData: () => dispatch(actionFetchRecommendations())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
