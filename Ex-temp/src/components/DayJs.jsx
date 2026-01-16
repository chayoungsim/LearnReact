import React from 'react'
import dayjs from 'dayjs'
import 'dayjs/locale/ko';

dayjs.locale('ko');


const DayJs = () => {

    const now = dayjs();
    console.log(now.format('YYYY-MM-DD HH:mm'));

  return (
    <div>DayJs</div>
    
  )
}

export default DayJs