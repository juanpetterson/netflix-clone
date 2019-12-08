/* eslint-disable global-require */
const medias = [
  {
    id: 1,
    title: '13 Reasons Why',
    thumbnail: require('@/assets/images/medias/13reasonswhy.jpg').default,
    classification: 'terror',
    metric: 'Most viewed in Brazil',
  },
  {
    id: 2,
    title: 'Black Mirror',
    thumbnail: require('@/assets/images/medias/blackmirror.jpg').default,
    classification: 'terror',
    metric: 'Most viewed in Brazil',
  },
  {
    id: 3,
    title: 'The Crown',
    thumbnail: require('@/assets/images/medias/thecrown.jpg').default,
    classification: 'terror',
    metric: 'Most viewed in Brazil',
  },
  {
    id: 4,
    title: 'The Good Place',
    thumbnail: require('@/assets/images/medias/thegoodplace.jpg').default,
    classification: 'terror',
    metric: 'Most viewed in Brazil',
  },
  {
    id: 5,
    title: 'Travelers',
    thumbnail: require('@/assets/images/medias/travelers.jpg').default,
    classification: 'terror',
    metric: 'Most viewed in Brazil',
  },
  {
    id: 6,
    title: 'The Irishman',
    thumbnail: require('@/assets/images/medias/theirishman.jpg').default,
    classification: 'terror',
    metric: 'Most viewed in Brazil',
  },
  {
    id: 7,
    title: 'Vis a Vis',
    thumbnail: require('@/assets/images/medias/visavis.jpg').default,
    classification: 'terror',
    metric: 'Most viewed in Brazil',
  },
  {
    id: 8,
    title: 'El Camino',
    thumbnail: require('@/assets/images/medias/elcamino.jpg').default,
    classification: 'terror',
    metric: 'Most viewed in Brazil',
  },
];

export default {
  getMedias() {
    return medias;
  },
};
