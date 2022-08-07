import { Box, Grid } from "@mui/material";
import { styled } from "@mui/system";

export const GridContainerBanner = styled(Grid)({
    position: 'relative',
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
})

export const GridItemBanner = styled(Grid)(({ theme }) => ({
    textAlign: 'center',
    padding: "0 2rem",
    [theme.breakpoints.up("md")]: {
        textAlign: 'left',
        padding: 0
    }
}))

export const Illustration = styled(Box)(({ theme }) => ({
    position: 'absolute',
    right: -270,
    top: 0,
    transform: 'scale(0.7)',
    [theme.breakpoints.up('sm')]: {
        transform: 'scale(1)'
    }
}))
