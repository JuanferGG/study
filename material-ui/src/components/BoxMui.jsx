import { Box, Container } from '@mui/material'
import React from 'react'

export const BoxMui = () => {
    return (
        <Container maxWidth="lg" sx={{ bgColor: 'whitesmoke', borderRadius: '10px', boxShadow: '0 0 8px  grey' }}>
            <Box display="flex" gap="2em" alignItems="center" justifyContent="center" flexWrap="wrap" >
                <Box component="section" width={300} height={200} sx={{ p: 2, border: '1px dashed grey' }}>
                    This Box renders as an HTML section element.
                </Box>
                <Box
                    height={200}
                    width={200}
                    my={4}
                    display="flex"
                    alignItems="center"
                    gap={4}
                    p={2}
                    sx={{ border: '2px solid grey' }}
                >
                    This Box uses MUI System props for quick customization.
                </Box>
            </Box>
        </Container>
    )
}
