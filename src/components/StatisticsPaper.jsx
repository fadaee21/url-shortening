import React from 'react'
import { StatisticsAvatarBadge, StatisticsBox } from '../styles/statistics'
import { Box, Typography } from '@mui/material'
import iconBrand from '../assets/all/icon-brand-recognition.svg'
import detailRecord from '../assets/all/icon-detailed-records.svg'
import fullyCustomizable from '../assets/all/icon-fully-customizable.svg'


export const BrandRecognition = () => {
    return (
        <StatisticsBox sx={{ mt: { xs: '3rem', md: 0 } }} >
            <StatisticsAvatarBadge src={iconBrand} />
            <Box sx={{ m: '60px 16px 8px' }}>
                <Typography variant='h6' fontWeight={700} color='text.primary' >
                    Brand Recognition
                </Typography>
                <Typography variant='caption' color='text.secondary' >
                    Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</Typography>
            </Box>
        </StatisticsBox>
    )
}

export const DetailRecords = () => {
    return (
        <StatisticsBox sx={{ mt: { xs: '5rem', md: '5rem' } }} >
            <StatisticsAvatarBadge src={detailRecord} />
            <Box sx={{ m: '60px 16px 8px' }}>
                <Typography variant='h6' fontWeight={700} color='text.primary' >
                    Detailed Records                 </Typography>
                <Typography variant='caption' color='text.secondary' >
                    Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
                </Typography>
            </Box>
        </StatisticsBox>
    )
}

export const FullyCustomizable = () => {
    return (
        <StatisticsBox sx={{ mt: { xs: '5rem', md: '10rem' } }} >
            <StatisticsAvatarBadge src={fullyCustomizable} />
            <Box sx={{ m: '60px 16px 8px' }}>
                <Typography variant='h6' fontWeight={700} color='text.primary' >
                    Fully Customizable
                </Typography>
                <Typography variant='caption' color='text.secondary' >
                    improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
                </Typography>
            </Box>
        </StatisticsBox>
    )
}


