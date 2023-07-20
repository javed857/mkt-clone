import React, { useEffect, useState } from 'react';
import { getTrainsList } from '../../services/mkt-service/home-service';

const Trains = () => {
    const [hotelList, setHotelList] = useState()

  useEffect(() => {
    getTrainsList().then((res) => {
      setHotelList(res);
    });
  }, []);

  console.log("hotelList",hotelList);
  return (
    <div>Trains</div>
  )
}

export default Trains