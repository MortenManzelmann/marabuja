import React, {FunctionComponent} from "react";
import {ScoutRecommendation} from '../../../interfaces/scout-recommendation.interface';
import style from './style.less';
import { connect } from 'react-redux';
import axios from "axios";
import {actionFetchRecommendations} from '../../../actions'


interface Props {
scoutRecommendation: ScoutRecommendation;
loadData: () => () => void;
}

const ScoutRecommendationTile: FunctionComponent<Props> = ({scoutRecommendation,loadData}) => {
  const handleClick = () => axios.delete('http://127.0.0.1/api/scout-recommendation/get', {params: scoutRecommendation}).then(
    loadData()
  )

  return (
    <div className={style.component}>
      <button onClick={handleClick}>X</button>
      <h3>{scoutRecommendation.title}</h3>
      <p>{scoutRecommendation.description}</p> 
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    loadData: () => dispatch(actionFetchRecommendations)
  };
};

export default connect(null, mapDispatchToProps)(ScoutRecommendationTile);
