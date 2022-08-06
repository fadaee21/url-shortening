import { Avatar, styled } from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../theme/styles";


export const CardBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
}))
export const HorizontalLine = styled(Box)({
    width: '50%',
    height: '0.5rem',
    backgroundColor: Colors.Cyan,
    position: 'absolute',
    top: '28rem',
    zIndex: 2
})
export const VerticalLine = styled(Box)({
    backgroundColor: Colors.Cyan,
    position: 'absolute',
    width: '0.5rem',
    height: '35rem',
    zIndex: 2,
    top: '25rem'
})
export const StatisticsBackground = styled(Box)({
    backgroundColor: Colors.Gray,
    width: '100%',
    position: 'relative',
})




export const StatisticsBox = styled(Box)(({ theme }) => ({
    backgroundColor: '#fff',
    paddingBottom: '1rem',
    borderRadius: '8px',
    position: "relative",
    zIndex: 5,
    width: '30%',
    [theme.breakpoints.down("md")]: {
        minWidth: '30rem',
        textAlign: 'center',
    },
    [theme.breakpoints.down("sm")]: {
        minWidth: '20rem',
        textAlign: 'center',
    }
}))

export const StatisticsAvatarBadge = styled(Avatar)(({ theme }) => ({
    position: 'absolute',
    top: -30,
    left: '20px',
    backgroundColor: Colors.DarkViolet,
    padding: '1rem',
    [theme.breakpoints.down("md")]: {
        left: '204px'
    },
    [theme.breakpoints.down("sm")]: {
        left: '124px'
    }
}))