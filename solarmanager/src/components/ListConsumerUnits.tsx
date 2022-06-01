import React from 'react'

type ConsumerUnitsProps = {
  id: number;
  nickname: string;
  local: string;
  brand: string;
  model: string;
}

function ListConsumerUnits({ consumerUnits }: { consumerUnits: ConsumerUnitsProps[] }) {
  return (
    <div>
      <ul>
        {consumerUnits.map(consumerUnit => (
          <li key={consumerUnit.id}>
            {consumerUnit.id} - {consumerUnit.nickname}
            {consumerUnit.local}
            {consumerUnit.brand}
            {consumerUnit.model}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListConsumerUnits