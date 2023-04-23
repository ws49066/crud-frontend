interface client {
    map(arg0: (row: any, index: any) => JSX.Element): import("react").ReactNode
    id?: string 
    name : string
    email: string
}

interface propsTableClient {
    updated(id: any): void
    remove(id: any): void
    data : client
    
}


export type {client, propsTableClient}