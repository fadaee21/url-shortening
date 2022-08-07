import { Box } from '@mui/system'
import { Colors } from '../theme'
import bgBoostDesktop from '../../assets/all/bg-boost-desktop.svg'
import bgBoostMobile from '../../assets/all/bg-boost-mobile.svg'
import { styled } from '@mui/material'

export const BgBoostBox = styled(Box)(({ theme }) => ({
    backgroundImage: `url(${bgBoostMobile})`,
    backgroundColor: Colors.DarkViolet,
    backgroundSize: '34rem',
    backgroundPosition: '0 -35px',

    [theme.breakpoints.up('sm')]: {
        backgroundImage: `url(${bgBoostDesktop})`,
        backgroundSize: '100rem',
        backgroundPosition: 0,

    }
}))