import React, { useEffect, useState } from 'react';
import { getHotelsList } from '../../services/mkt-service/home-service';

const Hotels = () => {
    const [hotelList, setHotelList] = useState()

  useEffect(() => {
    getHotelsList().then((res) => {
      setHotelList(res);
    });
  }, []);

  console.log("hotelList",hotelList);
  return (
    <div>Hotels</div>
  )
}

export default Hotels


