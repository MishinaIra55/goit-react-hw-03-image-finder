import styles from './Button.module.css';

export  function Button ({load}) {
  return(
    <button className={styles.Button} type='button' onClick={() => load()}>Load more</button>
  )
}
