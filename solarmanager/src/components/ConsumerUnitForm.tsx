import react, { useCallback, useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { success } from "../helpers/Notifications";
import styles from './ConsumerUnitForm.module.css'
import { IConsumerUnits } from '../interfaces'
import { useConsumerUnits } from '../hooks/useConsumerUnits'

function ConsumerUnitForm() {

  const navigate = useNavigate()

  const { createConsumerUnit } = useConsumerUnits();
  const [id, setId] = useState<number>(0);
  const [nickname, setNickname] = useState<string>('');
  const [local, setLocal] = useState<string>('');
  const [brand, setBrand] = useState<string>('');
  const [model, setModel] = useState<string>('');

  const addConsumerUnit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createConsumerUnit({ nickname, local, brand, model });
    success('Consumer Unit added');
    navigate('/consumerunits');
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'nickname') {
      setNickname(event.target.value);
    } else if (event.target.name === 'local') {
      setLocal(event.target.value);
    } else if (event.target.name === 'brand') {
      setBrand(event.target.value);
    } else if (event.target.name === 'model') {
      setModel(event.target.value);
    }
  }

  return (
    <div className={styles.consumerUnitForm}>
      <h3>New Consumer Unit</h3>
      <form onSubmit={addConsumerUnit}>
        <div>
          <label htmlFor="nickname">
            <strong>Nickname: </strong> 
            <input type="text" 
            id="nickname" 
            name='nickname'
            onChange={handleChange} />
          </label>
        </div>
        <div>
          <label htmlFor="local">
          <strong>local: </strong> 
            <input type="text" 
            id="local" 
            name='local' 
            onChange={handleChange} />
          </label>
        </div>
        <div>
          <label htmlFor="brand">
          <strong>brand: </strong> 
            <input type="text" 
            id="brand" 
            name='brand' 
            onChange={handleChange} />
          </label>
        </div>
        <div>
          <label htmlFor="model">
          <strong>model: </strong> 
            <input type="text" 
            id="model" 
            name='model' 
            onChange={handleChange} />
          </label>
        </div>
        <div>
          <button type="submit">Create Consumer Unit</button>
        </div>
      </form>
    </div>
  )
}

export default ConsumerUnitForm