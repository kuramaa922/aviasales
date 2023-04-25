import React, { FC } from 'react';
import { Checkbox } from 'antd';

import './Transfers.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];
const Transfers: FC = () => {
  const { onCheckAllChange, onChange } = useActions();
  const { indeterminate, checkedList, checkAll } = useTypedSelector((state) => state.transfersReducer);
  return (
    <div className="transfers">
      <span className="transfers__name">Количество пересадок</span>
      <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll} value={1}>
        Все
      </Checkbox>
      <div className="transfers__low">
        <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
      </div>
    </div>
  );
};

export default Transfers;
