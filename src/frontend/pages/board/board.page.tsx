import React, { FunctionComponent } from "react";
import { Helmet } from 'react-helmet';
import ScoutRecommendationApi from './api/scout-recommendation.api';
import { ScoutRecommendationList } from "../../interfaces/scout-recommendation-list.interface";
import ScoutRecommendationsList from "./components/scout-recomendation-list/scout-recommendations-list";
import PageInterface from '../../interfaces/page.interface';



interface Props {
  page: PageInterface;
  scoutRecommendationsList: ScoutRecommendationList;
}

const Board: FunctionComponent<Props> = ({
  page, scoutRecommendationsList
}) => {
  const scoutRecommendation: ScoutRecommendationApi = new ScoutRecommendationApi();
  return (
    <section>
      <Helmet>
        <title>
          Board
        </title>
      </Helmet>
      <h1>Board</h1>
      <ScoutRecommendationsList scoutRecommendations={scoutRecommendation.getAll()} />
    </section>
  );
};

export default Board;
