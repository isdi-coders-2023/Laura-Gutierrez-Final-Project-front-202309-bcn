export interface PlantsStructure {
  _id: string;
  name: string;
  scientificName: string;
  use: string;
  properties: string;
  howToUse: string;
  image_url: string;
  isPoisonous: boolean;
  habitat: string;
}

export interface PlantsStateStructure {
  plants: PlantsStructure[];
}
