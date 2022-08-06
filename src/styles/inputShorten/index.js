import { Button, styled, TextField } from "@mui/material";
import { Colors } from "../theme/styles";


export const InputButton = styled(Button)(({ theme }) => ({
    backgroundColor: Colors.Cyan,
    color: '#fff',
    borderRadius: '8px',
    padding: '0.75rem 2rem',
    "&:hover": {
        backgroundColor: Colors.lightCyan,
        color: '#fff',
    },
    [theme.breakpoints.down("md")]: {
        width: '90%',

    }
}))


export const ShortenTextField = styled(TextField)(({ theme }) => ({
    flexGrow: 1,
    backgroundColor: '#fff',
    borderRadius: '8px',
    '& .MuiOutlinedInput-root': {
        fontSize: '1rem',
        padding: '0 1rem',
        '& fieldset': {
            borderRadius: '8px',
        },
        '&:hover fieldset': {
            border: 'none',
        },
        '&.Mui-focused fieldset': {
            borderRadius: '8px',
            border: '2px solid #111',
        },
    },
    [theme.breakpoints.down("md")]: {
        width: '90%',

    }
}))

export const ButtonCopy = styled(Button)(({ theme }) => ({
    backgroundColor: Colors.Cyan,
    color: '#fff',
    borderRadius: '8px',
    fontSize: "1rem !important",
    padding: '0.5rem 2rem',
    "&:hover": {
        backgroundColor: Colors.lightCyan,
        color: '#fff',
    },
    [theme.breakpoints.down("md")]: {
        width: '95%',
    }
}))
