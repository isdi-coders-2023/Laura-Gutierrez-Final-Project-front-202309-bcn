export interface PlantsStructure {
  _id: string;
  name: string;
  scientific_name: string;
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
