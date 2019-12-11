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
  const storedData = useSelector(state => state.media.data);

  useEffect(() => {
    const mediasData = mediaService.getMedias();

    let data = [...storedData];

    let userData = data.find(data => data.user === user.id);

    //check if user has saved data
    if (userData) {
      const { medias } = userData;

      //check if user has watched some media
      if (medias) {
        //loop to get the medias title
        let userMedias = [];
        medias.forEach((media, index) => {
          userMedias[index] = media.mediaId;
        });

        //get the mediaId`s data from allMedias
        const keepWatching = mediaService.getWatchingMedias(userMedias);

        //put the Continue Watching list in the first data index
        mediasData.unshift(keepWatching);
      }
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
