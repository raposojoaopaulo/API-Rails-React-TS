import react from 'react'
import styles from './ConsumerUnitForm.module.css'

function ConsumerUnitForm() {
  return (
    <div className={styles.consumerUnitForm}>
      <h3>New Consumer Unit</h3>
      <form>
        <div>
          <label htmlFor="nickname">
            <strong>Nickname: </strong> 
            <input type="text" 
            id="nickname" 
            name='nickname' />
          </label>
        </div>
        <div>
          <label htmlFor="local">
          <strong>local: </strong> 
            <input type="text" 
            id="local" 
            name='local' />
          </label>
        </div>
        <div>
          <label htmlFor="brand">
          <strong>brand: </strong> 
            <input type="text" 
            id="brand" 
            name='brand' />
          </label>
        </div>
        <div>
          <label htmlFor="model">
          <strong>model: </strong> 
            <input type="text" 
            id="model" 
            name='model' />
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