import { Button, Grid, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import illustration from '../assets/all/illustration-working.svg'


const Banner = () => {

    return (
        <Box sx={{ overflowX: 'clip' }}>
            <Container maxWidth='lg'  >
                <Grid container sx={{
                    position: 'relative',
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                }} >

                    <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'left' }, px: { xs: '2rem', md: 0 } }}>
                        <Typography variant='h2' sx={{
                            fontWeight: 700,
                            color: 'text.primary',
                        }} >
                            More than just shorter links
                        </Typography  >
                        <Typography variant='body1' sx={{
                            color: 'text.secondary', my: 1
                        }} >
                            Build your brand’s recognition and get detailed insights on how your links are performing.
                        </Typography>
                        <Button variant='cyan' sx={{
                            mt: 5, fontSize: '1.2rem'
                        }}>
                            get started
                        </Button>
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ height: 500, width: 100, order: { xs: -2, md: 2 } }} >
                        <Box component={'img'} src={illustration}
                            sx={{ position: 'absolute', right: -270, top: 0, transform: { xs: ' scale(0.7)', sm: ' scale(1)' }, }} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Banner


