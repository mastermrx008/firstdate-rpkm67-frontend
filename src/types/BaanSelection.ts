export type BaanSelection = {
  baanId: string;
  groundId: string;
  order: number;
};

export type GetBaanSelectionByGroupIdResponse = {
  baanSelections: BaanSelection[];
};

export type DeleteBaanResponse = {
  baanId: string;
  grounId: string;
};
