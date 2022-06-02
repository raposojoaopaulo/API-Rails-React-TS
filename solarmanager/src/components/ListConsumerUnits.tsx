import React from 'react'
import styles from './ListConsumerUnits.module.css'

type ConsumerUnitsProps = {
  id: number;
  nickname: string;
  local: string;
  brand: string;
  model: string;
}

function ListConsumerUnits({ consumerUnits }: { consumerUnits: ConsumerUnitsProps[] }) {
  return (
    <>
      <table className={styles.listTable}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nickname</th>
            <th>Local</th>
            <th>Brand</th>
            <th>Model</th>
          </tr>          
        </thead>
        <tbody>
          {consumerUnits.map(consumerUnit => (
            <tr key={consumerUnit.id}>
              <td>{consumerUnit.id}</td>
              <td>{consumerUnit.nickname}</td>
              <td>{consumerUnit.local}</td>
              <td>{consumerUnit.brand}</td>
              <td>{consumerUnit.model}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default ListConsumerUnits