import { useEffect, useState } from 'react'
import { client } from '../model'
import {useRouter} from 'next/router'
import {updateClient, AddClient} from '../pages/api/service'

interface clientProps {
    data: client
}

export default function Form(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const router = useRouter()

    const createClient = async e => {
        e.preventDefault()

        const data: any = {
            'name' : name,
            'email' : email
        }

        const result = await AddClient(data)

        if (result){
            router.push('/')
        }

    }


    const updated = async (e) => {
        e.preventDefault()
        
        const data: any = {
            'name' : name,
            'email' : email
        }
        const result = await updateClient(props.data.id, data)

        if (result){
            router.push('/')
        }
    }

    useEffect(() => {
        if(props?.data){
            setName(props.data.name)
            setEmail(props.data.email)
        }
    }, [props.data])


    return (
        <>
            <form>
                <div>
                    <label htmlFor="">Name : </label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Email : </label>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <button onClick={e => router.push('/')}>Cancelar</button>
                {
                    props?.data?.id 
                    ? <button onClick={e => updated(e)}>Atualizar</button>
                    : <button onClick={e => createClient(e)}>Cadastrar Cliente</button>
                }
                
            </form>
        </>
    )
}