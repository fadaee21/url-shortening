import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { CardBox, HorizontalLine, StatisticsBackground, VerticalLine } from '../styles/statistics'
import { BrandRecognition, DetailRecords, FullyCustomizable } from './StatisticsPaper'

const Statistics = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up("md"))
    return (
        <StatisticsBackground sx={{ py: 5 }}>
            <Container
                maxWidth='lg'
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    overflow: 'hidden'
                }}>
                <Stack
                    spacing={1}
                    sx={{ width: { xs: '85%', sm: '50%', md: '40%' }, py: '2rem' }}>
                    <Typography variant='h5' fontWeight={700} textAlign={'center'} color='text.primary' >
                        Advanced Statistics
                    </Typography>
                    <Typography variant='caption' textAlign={'center'} color='text.secondary'>
                        Track how your links are performing across the web with our advanced statistics dashboard.
                    </Typography>
                </Stack>
                <CardBox>
                    <BrandRecognition />
                    <DetailRecords />
                    <FullyCustomizable />
                </CardBox>
                {matches ? <HorizontalLine /> : <VerticalLine />}
            </Container>

        </StatisticsBackground>
    )
}

export default Statistics