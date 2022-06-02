import { useCallback, useState } from 'react';
import { IConsumerUnits } from '../interfaces';
import { ConsumerUnitsServices } from '../services';
 
export const useConsumerUnits = () => {
  const [consumerUnits, setConsumerUnits] = useState<IConsumerUnits[]>([]);
  
  const getAllConsumerUnits = useCallback(async () => {
    const { status, data } = await ConsumerUnitsServices.getAllConsumerUnits();

    if (status !== 200) throw new Error();

    setConsumerUnits(data);
  }, []);

  const createConsumerUnit = useCallback(async (consumerUnit: Pick<IConsumerUnits, 'nickname' | 'local' | 'brand' | 'model'>) => {
    const { status } = await ConsumerUnitsServices.createConsumerUnit(consumerUnit);

    if (status !== 201) throw new Error();
  }, []);
  
  return {
    consumerUnits,
    getAllConsumerUnits,
    createConsumerUnit,
  }
}

