export type PinDTO = {
  activity_id: string;
  code: string | null;
};

export type AllPinDTO = {
  pins: PinDTO[];
};
