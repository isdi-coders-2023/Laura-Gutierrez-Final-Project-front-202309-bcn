export interface PlantsStructure {
  _id: string;
  name: string;
  scientific_name: string;
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

export interface UiStructure {
  isLoading?: boolean;
  isError?: boolean;
}
