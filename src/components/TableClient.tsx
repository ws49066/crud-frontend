import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { propsTableClient } from '../model'


export default function TableClient(props: propsTableClient) {


    return (
        props.data ?
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {/* <TableCell>ID</TableCell> */}
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Ações</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            props.data.map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >

                                    {/* <TableCell>{row.id}</TableCell> */}
                                    <TableCell>{row.name}</TableCell>
                                    <TableCell>{row.email}</TableCell>
                                    <TableCell>
                                        <button onClick={e => props.remove(row.id)}>Remove</button>
                                        <button onClick={e => props.updated(row.id)}>Updated</button>
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>

            :
            <>
            </>
    )
}