import React from 'react'
import styles from './ListConsumerUnits.module.css'
import { Link } from 'react-router-dom'

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
      <div className={styles.buttonContainer}>
        <Link to="/consumerunits/new">
          <button>Add new consumer unit</button>
        </Link>
      </div>
    </>
  )
}

export default ListConsumerUnits