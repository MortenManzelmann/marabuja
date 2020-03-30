import React, { FunctionComponent } from 'react';
import ScoutRecommendationTile from '../../../../ui-basic/components/scout-recommendation-tile/scout-recommendation-tile';
import { ScoutRecommendation } from '../../../../interfaces/scout-recommendation.interface';
import style from './style.less';

interface Props {
  scoutRecommendationsList: ScoutRecommendation[];
}

const ScoutRecommendationsList: FunctionComponent<Props> = ({ scoutRecommendationsList }) => {
  return (
    <div className={style.component}>
      <ul>
        {
          scoutRecommendationsList.map(scoutRecommendation => (
            <li key={scoutRecommendation.id} >
              <ScoutRecommendationTile scoutRecommendation={scoutRecommendation} />
            </li >
          ))
        }
      </ul>
    </div>
  )
}

export default ScoutRecommendationsList;