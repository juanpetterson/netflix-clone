import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import { useSelector, useDispatch } from 'react-redux';
import queryString from 'query-string';

import { updateUser } from '@/store/modules/auth/actions';

import history from '@/services/history';

import video from '@/assets/videos/sonic.mp4';

import { Container, Header, ArrowBack } from './styles';
import mediaService from '@/services/mediaService';

export default function Player({ location }) {
  const videoRef = useRef(null);
  const dispatch = useDispatch();
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
      const media = mediaService.getMedia(mediaId);
      console.log(media);
      const newMedia = {
        mediaId,
        progress: 0,
        title: media.title,
      };

      storedMedia[0] = newMedia;
      currentStored.unshift(newMedia);

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

  function handleEnded() {
    let currentStored = JSON.parse(
      localStorage.getItem(`@netflix:${user.email}`)
    );

    let storedMedia = currentStored.filter(item => {
      return item.mediaId === mediaId;
    });

    storedMedia[0].progress = 0;

    localStorage.setItem(
      `@netflix:${user.email}`,
      JSON.stringify(currentStored)
    );
  }

  function handleBack() {
    history.push('/browse');
  }

  return (
    <Container>
      <Header>
        <ArrowBack
          onClick={handleBack}
          className="fas fa-arrow-left"
        ></ArrowBack>
      </Header>
      <ReactPlayer
        url={video}
        playing={true}
        controls
        width="100%"
        height="100%"
        onProgress={handleProgress}
        onEnded={handleEnded}
        ref={videoRef}
        config={{
          file: {
            attributes: {
              controlsList: 'nodownload',
              onContextMenu: e => e.preventDefault(),
              disablePictureInPicture: true,
            },
          },
        }}
      />
    </Container>
  );
}
