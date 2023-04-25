import React, { useEffect, useMemo } from 'react';
import { Spin } from 'antd';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import Filter from '../Filter/Filter';
import Header from '../Header/Header';
import TicketsList from '../TicketsList/TicketsList';
import Transfers from '../Transfers/Transfers';
import AviaSalesApi from '../../service/api/aviaSalesApi';
import TicketsShowMore from '../TicketsShowMore/TicketsShowMore';
import { useActions } from '../../hooks/useActions';
import { getFiltredTickets, transfersSort } from '../../Utils/ticketsfilter';

import app from './App.module.scss';

const api = new AviaSalesApi();

function App() {
  const { ticketsData, loading, error } = useTypedSelector((state) => state.ticketsData);
  const { checkedList } = useTypedSelector((state) => state.transfersReducer);
  const { count } = useTypedSelector((state) => state.count);
  const { sort } = useTypedSelector((state) => state.sort);
  const { asyncSetTickets } = useActions();

  const transfers = transfersSort(checkedList);

  useEffect(() => {
    api.getSearchId().then((data) => {
      asyncSetTickets(data.searchId);
    });
  }, []);

  const filterTicketsDataOne = useMemo(() => getFiltredTickets(ticketsData, transfers, sort), [transfers.length, sort]);

  const filterTicketsData = filterTicketsDataOne.slice(0, count);
  return (
    <div className={app.wrapper}>
      <Header />
      <div className={app.wrapper__content}>
        <Transfers />
        <div className={app.warapper__right}>
          <Filter />
          {!error ? (
            <>
              {loading && filterTicketsData.length ? <Spin className={app.spin} size="large" /> : null}
              {!filterTicketsData.length && !error ? (
                <span className={app.nosearch}>БИЛЕТОВ С ДАННЫМ ЗАПРОСОМ НЕ НАЙДЕНО</span>
              ) : null}
              <TicketsList filterTicketsData={filterTicketsData} />
              {filterTicketsData.length ? <TicketsShowMore /> : null}
            </>
          ) : (
            <span className={app.nosearch}>ПРОИЗОШЛА ОШИБКА</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
