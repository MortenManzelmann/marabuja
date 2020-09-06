import React, { FunctionComponent } from 'react';
import ScoutRecommendationTile from '../../../../ui-basic/components/scout-recommendation-tile/scout-recommendation-tile';
import ScoutRecommendationList from '../../../../interfaces/scout-recommendation-list.interface';
import style from './style.less';
import RecommendationForm from '../recommendation-form/recommendation-form';
import { connect } from 'react-redux';
import { AppState } from 'reducers';



interface Props {
  scoutRecommendations?: ScoutRecommendationList
}

const ScoutRecommendationsList: FunctionComponent<Props> = ({ scoutRecommendations }) => {
  return (
    <div className={style.component}>
      <ul>
        {
          scoutRecommendations.scoutRecommendationsList.map(scoutRecommendation => (
            <li key={scoutRecommendation.created} >
              <ScoutRecommendationTile scoutRecommendation={scoutRecommendation} />
            </li >
          ))
        }
        <li>
          <RecommendationForm />
        </li>
      </ul>
    </div>
  )
}
const mapStateToProps = (state: AppState, ownProps: Props) => {
  return {
    scoutRecommendations: state.list.scoutRecommendations,
  };
};

export default connect<ReturnType<typeof mapStateToProps>, undefined, Props, AppState>(mapStateToProps)(ScoutRecommendationsList);