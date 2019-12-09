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
    creditCard: '0987',
  },
  {
    id: 2,
    name: 'Jonas Kahnwald',
    email: 'jonas@netflix.com',
    password: 'jonasflix',
    picture: jonasProfile,
    plan: 'Premium Ultra HD',
    creditCard: '1234',
  },
];

export default {
  getUsers() {
    return users;
  },
};
