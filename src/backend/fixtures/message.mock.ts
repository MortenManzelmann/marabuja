import { ScoutRecommendation } from "../interfaces/scout-recommendation.interface"
import { ScoutRecommendationList } from "../interfaces/scout-recommendation-list.interface"

const tile1: ScoutRecommendation = {
  _id: '1',
  title: 'Title',
  description: 'I\'m from the backend',
  author: 'Author',
  created: 'today',
}

const tile2: ScoutRecommendation = {
  _id: '2',
  title: 'something',
  description: 'Description',
  author: 'Author',
  created: 'today',
}

const tile3: ScoutRecommendation = {
  _id: '3',
  title: 'Title',
  description: 'Description',
  author: 'Author',
  created: 'today',
}

const scoutRecommendationsMock: ScoutRecommendationList = { scoutRecommendationsList : [tile1, tile2, tile3]}; 

export default scoutRecommendationsMock