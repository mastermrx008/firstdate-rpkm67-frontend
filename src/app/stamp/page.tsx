import React from 'react';
import Border from '@/components/Border';
import FirstDateLogo from '@public/stamp/logo.svg';

import Image from 'next/image';
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

const StampPage = () => {
  return (
    <main className="w-full h-screen flex justify-center items-center flex-col">
      <Border
        variant="light-pink"
        className="space-y-2.5"
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
            text="Together with the Organization"
            stampImage={OrganizationStamp}
            collected={false}
          />
          <StampCheckBox
            text="Exchange Opinions"
            stampImage={ExchangeOptionStamp}
            collected={true}
          />
          <StampCheckBox
            text="Bracelet"
            stampImage={BraceletStamp}
            collected={true}
          />
        </StampContainer>
        <StampContainer>
          <StampCheckBox
            text="Diffuser"
            stampImage={DiffuserStamp}
            collected={true}
          />
          <StampCheckBox
            text="Drawing"
            stampImage={DrawingStamp}
            collected={true}
          />
        </StampContainer>
        <StampHeading>Lankmark</StampHeading>
        <StampContainer>
          <StampCheckBox
            text="Landmark 1"
            stampImage={Landmark1Stamp}
            collected={true}
          />
          <StampCheckBox
            text="Landmark 2"
            stampImage={Landmark2Stamp}
            collected={true}
          />
          <StampCheckBox
            text="Landmark 3"
            stampImage={Landmark3Stamp}
            collected={true}
          />
          <StampCheckBox
            text="Landmark 4"
            stampImage={Landmark4Stamp}
            collected={true}
          />
        </StampContainer>
        <StampHeading>Club</StampHeading>
        <StampContainer>
          <StampCheckBox
            text="ภายนอกอบจ."
            stampImage={ClubOutsideStamp}
            collected={true}
          />
          <StampCheckBox
            text="ภายใต้อบจ."
            stampImage={ClubInsideStamp}
            collected={true}
          />
        </StampContainer>
        <EndJourneyButton />
      </Border>
    </main>
  );
};

export default StampPage;
