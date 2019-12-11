import React, { useState, useEffect, useMemo, useRef } from 'react';
import Plyr from 'Plyr';
import { useSelector, useDispatch } from 'react-redux';
import queryString from 'query-string';

import { updateMedia } from '@/store/modules/media/actions';

import history from '@/services/history';

import video from '@/assets/videos/sonic.mp4';

import { Container, Header, ArrowBack, PlyrPlayer } from './styles';
import mediaService from '@/services/mediaService';

export default function Player({ location }) {
  const playerRef = useRef(null);
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const mediaData = useSelector(state => state.media.data);
  const values = queryString.parse(location.search);
  const mediaId = parseInt(values.mediaId, 10);

  useEffect(() => {
    const player = new Plyr('#player', {
      controls: [
        'play-large',
        'restart',
        'rewind',
        'play',
        'fast-forward',
        'progress',
        'current-time',
        'mute',
        'volume',
        'fullscreen',
      ],
    });

    //update the progress while the media is playing
    player.on('timeupdate', () => {
      handleProgress(player.currentTime);
    });

    //set the progress to 0 when media was ended
    player.on('ended', () => {
      handleProgress(0);
    });

    //set the media start point
    player.on('play', () => {
      updateCurrentTime();
    });
    const media = mediaService.getMedia(mediaId);
    let data = [...mediaData];

    let userData = data.find(data => data.user === user.id);

    if (!userData) {
      const newMedia = {
        mediaId,
        progress: 0,
        title: media.title,
      };

      userData = {
        user: user.id,
        medias: [newMedia],
      };

      data.push(userData);
    } else {
      const { medias } = userData;

      let storedMedia = medias.find(media => media.mediaId === mediaId);

      if (!storedMedia) {
        storedMedia = {
          mediaId,
          progress: 0,
          title: media.title,
        };

        medias.unshift(storedMedia);
      } else {
        player.currentTime = storedMedia.progress;
      }
    }

    dispatch(updateMedia(data));

    return () => {
      player.destroy();
    };
  }, []);

  function handleProgress(progress) {
    let data = [...mediaData];

    let userData = data.find(data => data.user === user.id);

    const { medias } = userData;

    let storedMedia = medias.find(media => media.mediaId === mediaId);
    storedMedia.progress = progress;

    dispatch(updateMedia(data));
  }

  function updateCurrentTime() {
    let data = [...mediaData];

    let userData = data.find(data => data.user === user.id);

    const { medias } = userData;

    let storedMedia = medias.find(media => media.mediaId === mediaId);
    player.currentTime = storedMedia.progress;
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
      <PlyrPlayer
        id="player"
        src={video}
        type="video"
        ref={playerRef}
        seekTime={15}
      />
    </Container>
  );
}
