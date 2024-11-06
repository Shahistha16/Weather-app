import React from 'react'
import DrawerNav from '../../drawerNav'
import Box from '@mui/material/Box';


export default function Favourite() {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <DrawerNav />
                <Box component={'main'} sx={{ flexGrow: 1, p: 3 }}>
                    <h1>Favourite</h1>
                </Box>
            </Box>
        </>
    )
}
