import { IConsumerUnits } from "../interfaces"
import { Api } from "../providers"

const getAll = () => Api.get<IConsumerUnits[]>('/v1/consumer_units')

export const ConsumerUnitsServices = {
  getAll,
}