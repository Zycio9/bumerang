import React, { useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { useTheme } from '@mui/material/styles';
import './ParametersTable.scss'
export default function ParametersTable({ data }) {
    const theme = [useTheme()];
    useEffect(() => {
        console.log(data);

        return () => {

        }
    }, [data])

    return (
        <TableContainer >
            <Table /*sx={{ minWidth: 650 }}*/ aria-label="Tabela parametrów">
                <TableHead >
                    <TableRow style={{ background: theme[0].palette.primary.main }}>
                        <TableCell className={'table-header'}>Parametr</TableCell>
                        <TableCell className={'table-header'}>Wartość</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.keys(data).map((row) => (
                        <TableRow
                            key={row}
                            sx={{
                                '&:last-child td, &:last-child th': { border: 0 }
                            }}
                        >
                            <TableCell component="th" scope="row" style={{ width: '30%' }}>
                                {row}
                            </TableCell>
                            <TableCell>{data[row]}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
