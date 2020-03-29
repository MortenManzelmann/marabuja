import React, {FunctionComponent} from "react";
import {ScoutRecommendation} from '../../interfaces/scout-recommendation';
import style from './style.less';

interface Props {
scoutRecommendation: ScoutRecommendation;
}

const ScoutRecommendationTile: FunctionComponent<Props> = ({scoutRecommendation}) => {
  return (
    <div className={style.component}>
      <h3>{scoutRecommendation.title}</h3>
      <p>{scoutRecommendation.description}</p>
    </div>
  );
};

export default ScoutRecommendationTile;
