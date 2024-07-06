export interface OtpPin {
  activity_id: string;
  code: string;
}

export interface OtpPinWithIndex {
  otp: OtpPin;
  index: number;
  handleClick(): void;
}
