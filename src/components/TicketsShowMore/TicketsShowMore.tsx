import React, { FC } from 'react';

import sm from './TicketsShowMore.module.scss';

const TicketsShowMore: FC<props> = ({ setCount }) => {
  // const dispatch = useDispatch();
  const addListTickets = (): void => {
      setCount()
    // dispatch({ type: 'ADD_COUNT', payload: 5 });
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

interface props {
    setCount: () => void
}