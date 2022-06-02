import React from 'react'
import { useConsumerUnits } from '../hooks'
import { useEffect } from 'react';
import ListConsumerUnits from './ListConsumerUnits';
import ConsumerUnitForm from './ConsumerUnitForm';

function Consumer_Units() {

  const { consumerUnits, getAllConsumerUnits } = useConsumerUnits();

  useEffect(() => {
    getAllConsumerUnits()
  }, [getAllConsumerUnits])

  return (
    <div>
      <h1>Consumer Units</h1>
      <ListConsumerUnits consumerUnits={consumerUnits} />
      <ConsumerUnitForm />
    </div>
  )
}

export default Consumer_Units