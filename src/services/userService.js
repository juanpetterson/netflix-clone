import peterProfile from '@/assets/images/profile/peter_profile.jpg';
import jonasProfile from '@/assets/images/profile/jonas_profile.jpg';

const users = [
  {
    id: 1,
    name: 'Peter Parker',
    email: 'peter@netflix.com',
    password: 'peterflix',
    picture: peterProfile,
    plan: 'Padrão HD',
    creditcard: '0987',
    lastMovies: '',
  },
  {
    id: 2,
    name: 'Jonas Kahnwald',
    email: 'jonas@netflix.com',
    password: 'jonasflix',
    picture: jonasProfile,
    plan: 'Premium Ultra HD',
    creditcard: '1234',
    lastMovies: '',
  },
];

export default {
  getUsers() {
    return users;
  },
};
