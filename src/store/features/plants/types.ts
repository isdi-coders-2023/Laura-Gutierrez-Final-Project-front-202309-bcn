export interface PlantsStructure {
  _id: string;
  name: string;
  scientificName: string;
  use: string;
  properties: string;
  howToUse: string;
  imageUrl: string;
  isPoisonous: boolean;
  habitat: string;
}

export interface PlantsStateStructure {
  plants: PlantsStructure[];
}
