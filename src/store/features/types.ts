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

export interface PlantStructureWithoutId {
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

export interface UiStructure {
  isLoading?: boolean;
  isError?: boolean;
}
