import axios from "axios"




const http = axios.create({
    baseURL: 'http://10.0.2.15:3001'
})


async function getAllClientes() {
    try{
        const result = await http.get('clientes').then(response => response.data)
        return result?.allClientes
    }
    catch(erro){
        alert('ERRO')
        return []
    }
}

async function getClientID(id) {
    try{
        
        const result = await http.get(`/cliente/${id}`).then(response => response.data)

        if(result?.client[0]){
            return result.client[0]
        }
        alert('Client ID not found')
    }
    catch(erro){
        alert('ERRO')
    }

    return []
}

async function AddClient(params){
    try{
        const result = await http.post(`/clientes/`, {...params}).then(response => response.data)

        if (result.status == 200){
            alert('Usuario Cadastrado com sucesso')
            return true
        }

        return false
    }catch(erro){
        alert(erro)
    }
}

async function updateClient(id, params){
    try{
        
        const result = await http.put(`/cliente/${id}`, {...params}).then(response => response.data)

        if (result?.cliente?.status == 200){
            alert('Usuario Atualizado com sucesso')
            return true
        }

        return false
        
    }catch(erro){
        alert(erro)
    }
}

async function deleteClient(id){
    try{
        const result = await http.delete(`/cliente/${id}`).then(response => response.data)

        if (result.status == 200){
            alert('Usuario removido com sucesso')
            return await getAllClientes()
        }
    }catch(erro){
        alert(erro)
    }
}

export {getAllClientes, deleteClient, getClientID, updateClient, AddClient}