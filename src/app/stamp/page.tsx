'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Border from '@/components/Border';
import FirstDateLogo from '@public/stamp/logo.svg';
import Slide from '@public/stamp/slide.svg';
import StampCheckBox from '@/components/stamp/StampCheckBox';
import StampContainer from '@/components/stamp/StampContainer';
import StampHeading from '@/components/stamp/StampHeading';
import EndJourneyButton from '@/components/stamp/EndJourneyButton';
import OrganizationStamp from '@public/stamp/organization-stamp.svg';
import ExchangeOptionStamp from '@public/stamp/exchange-option.svg';
import BraceletStamp from '@public/stamp/bracelet.svg';
import DiffuserStamp from '@public/stamp/diffuser.svg';
import DrawingStamp from '@public/stamp/drawing.svg';
import Landmark1Stamp from '@public/stamp/landmark-1.svg';
import Landmark2Stamp from '@public/stamp/landmark-2.svg';
import Landmark3Stamp from '@public/stamp/landmark-3.svg';
import Landmark4Stamp from '@public/stamp/landmark-4.svg';
import ClubOutsideStamp from '@public/stamp/outside-sgcu.svg';
import ClubInsideStamp from '@public/stamp/inside-sgcu.svg';
import OTPModal from '@/components/stamp/modal/OTPModal';
import FavoriteClubModal from '@/components/stamp/modal/FavoriteClubModal';
import OpinionModal from '@/components/stamp/modal/OpinionModal';

const StampPage = () => {
  const [isOTPModalOpen, setOTPModalOpen] = useState(false);
  const [isFavoriteClubModalOpen, setFavoriteClubModalOpen] = useState(false);
  const [isOpinionModalOpen, setOpinionModalOpen] = useState(false);

  const handleStampClick = () => {
    setOTPModalOpen(true);
  };

  const handleModalClose = () => {
    setOTPModalOpen(false);
    setFavoriteClubModalOpen(false);
    setOpinionModalOpen(false);
  };

  const handleFavoriteClubModalOpen = () => {
    setFavoriteClubModalOpen(true);
  };

  const handleOpinionModalOpen = () => {
    setOpinionModalOpen(true);
  };

  return (
    <main className="w-full flex justify-center items-center flex-col">
      <Border
        variant="light-pink"
        className="space-y-2.5 pt-10"
      >
        <Image
          src={FirstDateLogo}
          alt="First Date Logo"
          width={150}
        />
        <StampHeading>Your Journey</StampHeading>
        <Image
          src={Slide}
          alt="Slide"
        />
        <StampHeading>Workshop</StampHeading>
        <StampContainer>
          <StampCheckBox
            text="Workshop x Wonder"
            stampImage={OrganizationStamp}
            collected={true}
            onClick={handleStampClick}
          />
          <StampCheckBox
            text="Giving and Taking"
            stampImage={ExchangeOptionStamp}
            collected={true}
            onClick={handleStampClick}
          />
          <StampCheckBox
            text="The jewel"
            stampImage={BraceletStamp}
            collected={true}
            onClick={handleStampClick}
          />
        </StampContainer>
        <StampContainer>
          <StampCheckBox
            text="Your pleasing scent"
            stampImage={DiffuserStamp}
            collected={true}
            onClick={handleStampClick}
          />
          <StampCheckBox
            text="Object d'art"
            stampImage={DrawingStamp}
            collected={true}
            onClick={handleStampClick}
          />
        </StampContainer>
        <StampHeading>Landmark</StampHeading>
        <StampContainer>
          <StampCheckBox
            text="Landmark 1"
            stampImage={Landmark1Stamp}
            collected={true}
            onClick={handleStampClick}
          />
          <StampCheckBox
            text="Landmark 2"
            stampImage={Landmark2Stamp}
            collected={true}
            onClick={handleStampClick}
          />
          <StampCheckBox
            text="Landmark 3"
            stampImage={Landmark3Stamp}
            collected={true}
            onClick={handleStampClick}
          />
          <StampCheckBox
            text="Landmark 4"
            stampImage={Landmark4Stamp}
            collected={true}
            onClick={handleStampClick}
          />
        </StampContainer>
        <StampHeading>Club</StampHeading>
        <StampContainer>
          <StampCheckBox
            text="ภายนอกอบจ."
            stampImage={ClubOutsideStamp}
            collected={true}
            onClick={handleFavoriteClubModalOpen}
          />
          <StampCheckBox
            text="ภายใต้อบจ."
            stampImage={ClubInsideStamp}
            collected={true}
            onClick={handleOpinionModalOpen}
          />
        </StampContainer>
        <EndJourneyButton />
      </Border>
      {isOTPModalOpen && <OTPModal onClose={handleModalClose} />}
      {isFavoriteClubModalOpen && (
        <FavoriteClubModal onClose={handleModalClose} />
      )}
      {isOpinionModalOpen && <OpinionModal onClose={handleModalClose} />}
    </main>
  );
};

export default StampPage;
