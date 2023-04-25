import React, { FC } from 'react';

import Tickets from '../Tickets/Tickets';
import { FilteredDataType } from '../../types/tickets';

const TicketsList: FC<FilteredDataType> = ({ filterTicketsData }) => {
  return (
    <div>
      {filterTicketsData.map((data) => {
        return (
          <Tickets
            key={
              data.price +
              data.segments[0].date +
              data.segments[0].duration +
              data.segments[1].date +
              data.segments[1].duration
            }
            price={data.price}
            carrier={data.carrier}
            segments={data.segments}
          />
        );
      })}
    </div>
  );
};

export default TicketsList;
