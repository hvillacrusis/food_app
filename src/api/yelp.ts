import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer XUPlbLbk-WhWiWK3GtndTuKJOFH3o1PzmmtI2fAch0DSynnTOXVxX4xOwYNSyPrW_j2hU8GjYiWQkXa651-3qNpVKFQCvsz8hKDhDZubwziLmqMrp5A9jAGhcr7zX3Yx',
  },
});
