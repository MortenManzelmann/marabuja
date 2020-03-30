import React, { FunctionComponent } from "react";
import { Helmet } from 'react-helmet';
import ScoutRecommendationTile from '../../ui-basic/components/scout-recommendation-tile/scout-recommendation-tile';
import scoutRecommendationsList from './components/scout-recomendation-list/scout-recommendations-list'
import { ScoutRecommendationList } from "../../interfaces/scout-recommendation-list.interface";
import ScoutRecommendationsList from "./components/scout-recomendation-list/scout-recommendations-list";
import PageInterface from '../../interfaces/page.interface'; 
import style from './style.less';
import { ScoutRecommendation } from "../../interfaces/scout-recommendation.interface";

interface Props {
  page: PageInterface;
  scoutRecommendationsList: ScoutRecommendationList;
}

const Board: FunctionComponent<Props> = ({
  page, scoutRecommendationsList
}) => {
  return (
    <section>
      <Helmet>
        <title>
          Board
        </title>
      </Helmet>
      <h1>Board</h1>
      <ScoutRecommendationsList scoutRecommendationsList={scoutRecommendationsList.scoutRecommendationsList} />
    </section>
  );
};

export default Board;
