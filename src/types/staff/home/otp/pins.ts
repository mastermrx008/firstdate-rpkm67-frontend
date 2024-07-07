import { PinDTO } from '@/dtos/pinDTO';

export type OtpPinReset = {
  otp: PinDTO;
  index: number;
  handleClick(ind: number): void;
};
