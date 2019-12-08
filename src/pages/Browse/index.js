import React, { useState, useEffect } from 'react';

import Header from '@/components/Header';
import MediaSlider from '@/components/MediaSlider';

import headerLogo from '@/assets/images/logo.svg';

import mediaService from '@/services/mediaService';
// import { Container } from './styles';

export default function Browse() {
  const [medias, setMedias] = useState([]);

  useEffect(() => {
    const mediasData = mediaService.getMedias();

    setMedias(mediasData);
  }, []);

  return (
    <div>
      <Header logo={headerLogo} size="small" />
      <MediaSlider medias={medias} />
      <MediaSlider medias={medias} />
      <MediaSlider medias={medias} />
      <MediaSlider medias={medias} />
      <MediaSlider medias={medias} />
      <MediaSlider medias={medias} />
    </div>
  );
}
