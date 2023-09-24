// Global form state
export enum Ethnicity {
  "African" = "ETHNICITY_AFRICAN",
  "Asian" = "ETHNICITY_ASIAN",
  "European" = "ETHNICITY_EURO",
  "Mediterranean" = "ETHNICITY_MEDIT",
  "South American" = "ETHNICITY_SOUTHAM",
}

export interface CivOverview {
  name?: string;
  description?: string;
  adjective?: string;
  ethnicity?: Ethnicity;
}

export interface CivFeatures {
  mountains?: string[];
  rivers?: string[];
  lakes?: string[];
  seas?: string[];
  deserts?: string[];
  volcanoes?: string[];
}

export interface CivForm {
  overview: CivOverview;
  features: CivFeatures;
}
