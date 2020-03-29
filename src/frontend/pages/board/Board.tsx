import React, {FunctionComponent} from "react";
import ScoutRecommendationTile from '../../ui-basic/components/scout-recommendation-tile/scout-recommendation-tile';
import scoutRecommendationsList from './components/scout-recomendation-list/scout-recommendations-list'
import { ScoutRecommendation } from "../../ui-basic/interfaces/scout-recommendation";
import ScoutRecommendationsList from "./components/scout-recomendation-list/scout-recommendations-list";

interface Props{
  scoutRecommendationsList: ScoutRecommendation[]
}
const Board: FunctionComponent<Props> = ({
  scoutRecommendationsList
}) => {
  return (
    <div>
      <h1>Board</h1>
      <ScoutRecommendationsList scoutRecommendationsList={scoutRecommendationsList} />
    </div>
  );
};

export default Board;
