export interface PlantsStructure {
  _id: string;
  name: string;
  scientificName: string;
  use: string;
  properties: string;
  howToUse: string;
  imageUrl: string;
  isPoisonous: string;
  habitat: string;
}

export interface PlantsStateStructure {
  plants: PlantsStructure[];
  selectedPlant: PlantsStructure;
}
