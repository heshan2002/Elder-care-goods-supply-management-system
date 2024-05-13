import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

const SuppliersTable = ({ rows, selectedUser, deleteUser }) => {
    return (
    <TableContainer component={Paper}>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Item</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Contact Number</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    rows.length > 0 ? rows.map(row => (
                        <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th' : {border: 0}}}>
                            <TableCell component='th' scope="row">{row.id}</TableCell>
                            <TableCell component='th' scope="row">{row.name}</TableCell>
                            <TableCell component='th' scope="row">{row.item}</TableCell>
                            <TableCell component='th' scope="row">{row.email}</TableCell>
                            <TableCell component='th' scope="row">{row.cnumber}</TableCell>
                            <TableCell component='th' scope="row">{row.address}</TableCell>
                            <TableCell>
                                <Button
                                    sx={{ margin: '0px 10px' }}
                                    onClick={ () => selectedUser({ id: row.id, name: row.name, item: row.item, email: row.email, cnumber: row.cnumber, address: row.address})}
                                >
                                    Update
                                </Button>
                                <Button
                                    sx={{ margin: '0px 10px' }}
                                    onClick={ () => deleteUser({ name: row.name }) }
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    )) : (
                        <TableRow sx={{ '&:last-child td, &:last-child th' : {border: 0}}}>
                            <TableCell component='th' scope="row">No Data</TableCell>
                        </TableRow>
                    )
                }
            </TableBody>
        </Table>
    </TableContainer>
    );
}

export default SuppliersTable;