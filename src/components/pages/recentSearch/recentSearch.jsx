import React from 'react'
import DrawerNav from '../../drawerNav'
import Box from '@mui/material/Box';


export default function RecentSearch() {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <DrawerNav />
                <Box component={'main'} sx={{ flexGrow: 1, p: 3 }}>
                    <h1>Recent Search</h1>
                </Box>
            </Box>
        </>
    )
}
