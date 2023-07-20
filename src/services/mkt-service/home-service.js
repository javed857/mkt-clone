import ax from '../index';

const homeService = {
  getHotelsList: () => ax.get(`63b85bcf735f93791e09caf4/hotels`),

  getTrainsList: () => ax.get(`63b85e152cabb8fdea2673ee/trains`),

  getFlightsList: () => ax.get(`63b85b1209f0a79e89e17e3a/flights`),

};

export const { getHotelsList, getTrainsList, getFlightsList } = homeService;
