import React, { FC } from 'react';

import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import flt from './Filter.module.scss';
const Filter: FC = () => {
  const { setFilter } = useActions();
  const { sort } = useTypedSelector((state) => state.sort);
  const isActive = (active: string) => (active === sort ? ` ${flt.filter__active}` : '');

  return (
    <div className={flt.filter}>
      <button className={flt.filter__btn + isActive('price')} onClick={() => setFilter('price')}>
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button className={flt.filter__btn + isActive('fast')} onClick={() => setFilter('fast')}>
        САМЫЙ БЫСТРЫЙ
      </button>
      <button className={flt.filter__btn + isActive('optimal')} onClick={() => setFilter('optimal')}>
        ОПТИМАЛЬНЫЙ
      </button>
    </div>
  );
};

export default Filter;
