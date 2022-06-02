import { IConsumerUnits } from "../interfaces"
import { Api } from "../providers"

const getAllConsumerUnits = () => Api.get<IConsumerUnits[]>('/v1/consumer_units')

const createConsumerUnit = (consumerUnit: Pick<IConsumerUnits, 'nickname' | 'local' | 'brand' | 'model'>) => Api.post<IConsumerUnits>('/v1/consumer_units', consumerUnit)

export const ConsumerUnitsServices = {
  getAllConsumerUnits,
  createConsumerUnit
}