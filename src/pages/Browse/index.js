import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Header from '@/components/Header';
import MediaDetails from '@/components/MediaDetails';
import MediaSlider from '@/components/MediaSlider';
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
      let medias = [];
      currentStored.forEach((media, index) => {
        medias[index] = media.mediaId;
      });

      //get the mediaId`s data from allMedias
      const keepWatching = mediaService.getWatchingMedias(medias);

      //put the Continue Watching list in the first data index
      mediasData.unshift(keepWatching);
    }

    setData(mediasData);
  }, []);

  return (
    <div>
      <Header size="small" />
      <MediaDetails />
      {data &&
        data.map(medias => <MediaSlider key={medias.metric} medias={medias} />)}
    </div>
  );
}
