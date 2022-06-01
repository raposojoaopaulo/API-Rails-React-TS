import { useCallback, useState } from 'react';
import { IConsumerUnits } from '../interfaces';
import { ConsumerUnitsServices } from '../services';
 
export const useConsumerUnits = () => {
  const [consumerUnits, setConsumerUnits] = useState<IConsumerUnits[]>([]);
  
  const getAll = useCallback(async () => {
    const { status, data } = await ConsumerUnitsServices.getAll();

    if (status !== 200) throw new Error();

    setConsumerUnits(data);
  }, []);
  
  return {
    consumerUnits,
    getAll,
  }
}

