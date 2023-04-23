import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { getClientID } from '../api/service'
import Form from '../../components/form'



export default function Client() {

    const [data, setData] = useState([])
    const {query} = useRouter()
   

    async function getClient(id) {
        setData(await getClientID(id))
    }

    useEffect(() => {
        if (query.id) {
            getClient(query?.id)
        }
    }, [])

    return (
        <>
            {
                data? <Form data={data}/> : <></>
            }
        </>
    )
}