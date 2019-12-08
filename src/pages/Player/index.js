import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import { useSelector } from 'react-redux';
import queryString from 'query-string';

import video from '@/assets/videos/sonic.mp4';

// import { Container } from './styles';

export default function Player({ location }) {
  const videoRef = useRef(null);
  const user = useSelector(state => state.auth.user);
  const values = queryString.parse(location.search);
  const mediaId = parseInt(values.mediaId, 10);

  useEffect(() => {
    let currentStored = JSON.parse(
      localStorage.getItem(`@netflix:${user.email}`)
    );

    let storedMedia;

    if (currentStored) {
      storedMedia = currentStored.filter(item => {
        return item.mediaId === mediaId;
      });
    } else {
      storedMedia = [];
      currentStored = [];
    }

    if (!storedMedia.length) {
      const newMedia = {
        mediaId,
        progress: 0,
      };

      storedMedia[0] = newMedia;
      currentStored.push(newMedia);

      localStorage.setItem(
        `@netflix:${user.email}`,
        JSON.stringify(currentStored)
      );
    }

    videoRef.current.seekTo(storedMedia[0].progress, 'seconds');
  }, []);

  function handleProgress(e) {
    const progress = e.playedSeconds;

    let currentStored = JSON.parse(
      localStorage.getItem(`@netflix:${user.email}`)
    );

    let storedMedia = currentStored.filter(item => {
      return item.mediaId === mediaId;
    });

    storedMedia[0].progress = progress;

    localStorage.setItem(
      `@netflix:${user.email}`,
      JSON.stringify(currentStored)
    );
  }

  return (
    <div>
      <ReactPlayer
        url={video}
        playing={true}
        controls
        width="100%"
        height="100%"
        onProgress={handleProgress}
        ref={videoRef}
      />
    </div>
  );
}
