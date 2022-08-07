import { Button, styled, TextField } from "@mui/material";
import { Colors } from "../theme";


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


export const ShortenTextField = styled(TextField, {
    //when we have prop we should say this
    shouldForwardProp: (prop) => prop !== 'errorHandling'
})(({ theme, errorHandling }) => ({

    flexGrow: 1,
    backgroundColor: '#fff',
    borderRadius: '8px',
    //conditional border color
    ...(errorHandling && { border: `3px solid ${theme.palette.error.main}` }),

    '& .MuiOutlinedInput-root': {
        fontSize: '1rem',
        padding: '0 1rem',
        '& fieldset': {
            borderRadius: '8px',
            color: 'green'
        },
        '&:hover fieldset': {
            border: 'none',
        },
        '&.Mui-focused fieldset': {
            borderRadius: '8px',
            border: 'none',
        },
        // change the color of placeholder
        input: {
            "&::placeholder": {
                ...(errorHandling && { color: theme.palette.error.light }),
            },
        },
    },
    [theme.breakpoints.down("md")]: {
        width: '90%',
    }
}))

export const ButtonCopy = styled(Button, {
    //when we have prop we should say this
    shouldForwardProp: (prop) => prop !== 'copyState'
})(({ theme, copyState }) => ({
    backgroundColor: Colors.Cyan,
    ...(copyState && { backgroundColor: theme.palette.primary.main }),
    color: '#fff',
    borderRadius: '8px',
    fontSize: "1rem !important",
    padding: '0.5rem 2rem',
    "&:hover": {
        backgroundColor: Colors.lightCyan,
        ...(copyState && { backgroundColor: theme.palette.primary.light }),
        color: '#fff',
    },
    [theme.breakpoints.down("md")]: {
        width: '95%',
    }
}))
