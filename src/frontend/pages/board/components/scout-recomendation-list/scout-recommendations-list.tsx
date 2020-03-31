import React, { FunctionComponent } from 'react';
import ScoutRecommendationTile from '../../../../ui-basic/components/scout-recommendation-tile/scout-recommendation-tile';
import ScoutRecommendationList  from '../../../../interfaces/scout-recommendation-list.interface';
import style from './style.less';

interface Props {
  scoutRecommendations: ScoutRecommendationList
}

const ScoutRecommendationsList: FunctionComponent<Props> = ({ scoutRecommendations }) => {
  return (
    <div className={style.component}>
      <ul>
        {
          scoutRecommendations.scoutRecommendationsList.map(scoutRecommendation => (
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