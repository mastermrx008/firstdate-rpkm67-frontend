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

const StampPage = () => {
  return (
    <main className="w-full h-screen flex justify-center items-center flex-col">
      <Border
        variant="light-pink"
        className="space-y-3"
      >
        <Image
          src={FirstDateLogo}
          alt="First Date Logo"
          width={150}
        />
        <StampHeading>Workshop</StampHeading>
        <Image
          src={Slide}
          alt="Slide"
        />
        <StampHeading>Stamp</StampHeading>
        <StampContainer>
          <StampCheckBox
            text="text"
            stampImage={OrganizationStamp}
          />
          <StampCheckBox text="text" />
          <StampCheckBox text="text" />
        </StampContainer>
        <StampContainer>
          <StampCheckBox text="text" />
          <StampCheckBox text="text" />
        </StampContainer>
        <StampHeading>Lankmark</StampHeading>
        <StampContainer>
          <StampCheckBox text="text" />
          <StampCheckBox text="text" />
          <StampCheckBox text="text" />
          <StampCheckBox text="text" />
        </StampContainer>
        <StampHeading>Club</StampHeading>
        <StampContainer>
          <StampCheckBox text="text" />
          <StampCheckBox text="text" />
        </StampContainer>
        <EndJourneyButton />
      </Border>
    </main>
  );
};

export default StampPage;
