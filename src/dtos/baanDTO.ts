import {
  BaanSelection,
  GetBaanSelectionByGroupIdResponse,
  DeleteBaanResponse,
} from '@/types/BaanSelection';

export type BaanSelectionDTO = {
  baan_id: string;
  ground_id: string;
  order: number;
};

export type GetBaanSelectionByGroupIdResponseDTO = {
  selection: BaanSelectionDTO[];
};

export type DeleteBaanResponseDTO = {
  baan_id: string;
  groun_id: string;
};

export const convertBaanSelectionDTOToBaanSelection = (
  baanSelectionDTO: BaanSelectionDTO
): BaanSelection => {
  return {
    baanId: baanSelectionDTO.baan_id,
    groundId: baanSelectionDTO.ground_id,
    order: baanSelectionDTO.order,
  };
};

export const convertGetBaanSelectionByGroupIdResponseDTOToResponse = (
  responseDTO: GetBaanSelectionByGroupIdResponseDTO
): GetBaanSelectionByGroupIdResponse => {
  return {
    baanSelections: responseDTO.selection.map(
      convertBaanSelectionDTOToBaanSelection
    ),
  };
};

export const convertDeleteBaanResponseDTOToResponse = (
  responseDTO: DeleteBaanResponseDTO
): DeleteBaanResponse => {
  return {
    baanId: responseDTO.baan_id,
    grounId: responseDTO.groun_id,
  };
};
