import React from 'react'
import { useConsumerUnits } from '../hooks'
import { useEffect } from 'react';
import ListConsumerUnits from './ListConsumerUnits';

function Consumer_Units() {

  const { consumerUnits, getAllConsumerUnits } = useConsumerUnits();

  useEffect(() => {
    getAllConsumerUnits()
  }, [getAllConsumerUnits])

  return (
    <div>
      <h2>Consumer Units</h2>
      <ListConsumerUnits consumerUnits={consumerUnits} />
    </div>
  )
}

export default Consumer_Units