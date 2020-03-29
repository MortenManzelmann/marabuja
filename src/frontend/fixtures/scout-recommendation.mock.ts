import { ScoutRecommendation } from "../ui-basic/interfaces/scout-recommendation"
import { ScoutRecommendationList } from "../pages/board/interfaces/scout-recommendation-list"

const tile1: ScoutRecommendation = {
  id: 1,
  title: 'Title',
  description: 'Description',
  author: 'Author',
  created: 'today',
}

const tile2: ScoutRecommendation = {
  id: 2,
  title: 'something',
  description: 'Description',
  author: 'Author',
  created: 'today',
}

const tile3: ScoutRecommendation = {
  id: 3,
  title: 'Title',
  description: 'Description',
  author: 'Author',
  created: 'today',
}

const scoutRecommendationsMock = [tile1, tile2, tile3]; 

export default scoutRecommendationsMock