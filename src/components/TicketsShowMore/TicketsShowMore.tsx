import React, { FC } from 'react';
import { useDispatch } from 'react-redux';

import sm from './TicketsShowMore.module.scss';

const TicketsShowMore: FC = () => {
  const dispatch = useDispatch();
  const addListTickets = (): void => {
    dispatch({ type: 'ADD_COUNT', payload: 5 });
  };
  return (
    <div className={sm.ticketsshowmore} onClick={addListTickets}>
      <button className={sm.ticketsshowmore__btn}>
        <span>ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!</span>
      </button>
    </div>
  );
};

export default TicketsShowMore;
