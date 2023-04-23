import { getAllClientes, deleteClient } from './api/service'
import { use, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import TableClient from '../components/TableClient'

export default function Home() {

  const [data, setData] = useState([])
  const router = useRouter()

  const allClientes = async () => {
    setData(await getAllClientes())
  }

  const removeClient = async (id) => {
    setData(await deleteClient(id))
  }

  const updatedClient = async (id) => {
    router.push(`/cliente/${id}`)
  }

  useEffect(() => {
    allClientes()
  }, [])


  return (
    <div className={styles.main}>
      <button className={styles.button} onClick={e => allClientes()}>Refresh</button>
      <div>
        <button className={styles.button} onClick={e => router.push('/cliente/newClient')}>Cadastrar</button>
      </div>
      <TableClient data={data} remove={id => removeClient(id)} updated={id => updatedClient(id)} />
    </div>
    
  )
}
