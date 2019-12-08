import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Header from '@/components/Header';
import MediaSlider from '@/components/MediaSlider';

import headerLogo from '@/assets/images/logo.svg';

import mediaService from '@/services/mediaService';
// import { Container } from './styles';

export default function Browse() {
  const [data, setData] = useState([]);
  const user = useSelector(state => state.auth.user);

  useEffect(() => {
    const mediasData = mediaService.getMedias();

    //get the data from localStorage
    let currentStored = JSON.parse(
      localStorage.getItem(`@netflix:${user.email}`)
    );

    if (currentStored) {
      //reduce the data to get only the mediaId
      const keepWatchingData = currentStored.reduce((medias, stored) => {
        const { mediaId } = stored;
        medias[mediaId] = mediaId;

        return medias;
      }, {});

      //get the mediaId`s data from allMedias
      const keepWatching = mediaService.getWatchingMedias(keepWatchingData);

      //put the Continue Watching list in the first data index
      mediasData.unshift(keepWatching);
    }

    setData(mediasData);
  }, []);

  return (
    <div>
      <Header logo={headerLogo} size="small" />
      {data &&
        data.map(medias => <MediaSlider key={medias.metric} medias={medias} />)}
    </div>
  );
}
