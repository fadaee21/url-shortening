import { Button, Grid, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import illustration from '../../assets/all/illustration-working.svg'
import { GridContainerBanner, GridItemBanner, Illustration } from '../../styles/navbar/navbar'

const Banner = () => {

    return (
        <Box
            component={'section'}
            sx={{ overflowX: 'clip' }}>
            <Container maxWidth='lg'  >
                <GridContainerBanner container  >

                    <GridItemBanner item xs={12} md={6} >
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
                    </GridItemBanner>

                    <Grid item xs={12} md={6} sx={{ height: 500, width: 100, order: { xs: -2, md: 2 } }} >
                        <Illustration component={'img'} src={illustration} />
                    </Grid>
                </GridContainerBanner>
            </Container>
        </Box>
    )
}

export default Banner


