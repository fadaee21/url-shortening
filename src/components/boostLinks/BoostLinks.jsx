import React from 'react'
import { Button, Typography } from '@mui/material'
import { BgBoostBox } from '../../styles/bgBoost'

const BoostLinks = () => {
    return (
        <BgBoostBox component={'section'} textAlign={'center'} sx={{ py: 8 }} >
            <Typography variant='h5' letterSpacing={0} fontWeight={700} color='#fff' >
                Boost your links today
            </Typography>
            <Button variant='cyan' sx={{ mt: '1rem' }} >Get Started</Button>

        </BgBoostBox>
    )
}

export default BoostLinks