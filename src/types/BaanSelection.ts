export type BaanSelection = {
  baanId: string;
  groupId: string;
  order: number;
};

export type GetBaanSelectionByGroupIdResponse = {
  baanSelections: BaanSelection[];
};

export type DeleteBaanResponse = {
  baanId: string;
  grounpId: string;
};
