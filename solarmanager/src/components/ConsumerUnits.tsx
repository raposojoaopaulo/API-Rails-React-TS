import React from 'react'
import { useConsumerUnits } from '../hooks'
import { useEffect } from 'react';
import ListConsumerUnits from './ListConsumerUnits';

function Consumer_Units() {

  const { consumerUnits, getAll } = useConsumerUnits();

  useEffect(() => {
    getAll()
  }, [getAll])

  return (
    <div>
      <h1>Consumer Units</h1>
      <ListConsumerUnits consumerUnits={consumerUnits} />
    </div>
  )
}

export default Consumer_Units