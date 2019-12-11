import Types from './types';

export function updateMedia(data) {
  // let userData = data.find(d => d.user === user.id);

  // if (!userData) {
  //   userData = {
  //     user: user.id,
  //     medias: [media],
  //   };
  // } else {
  //   let { medias } = userData;
  //   const storedMedia = medias.find(m => m === media.id);

  //   if (!storedMedia) {
  //     medias.unshift(media);
  //   } else {
  //     storedMedia.progress = media.progress;
  //   }
  // }
  return {
    type: Types.UPDATE_MEDIA,
    payload: {
      data,
    },
  };
}
