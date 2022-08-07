import React, { useEffect, useState } from 'react'
import { Box, Container } from '@mui/system'
import bgShorten from '../../assets/all/bg-shorten-desktop.svg'
import bgShortenM from '../../assets/all/bg-shorten-mobile.svg'
import { Colors } from '../../styles/theme'
import { InputButton, ShortenTextField } from '../../styles/inputShorten'
import LinkShorted from './LinkShorted'
import { Typography } from '@mui/material'
import useFetch from '../../hook/useFetch'
const InputShorten = () => {
    const [textInput, setTextInput] = useState("")
    //custom hook
    const [fetchApi, errorHandling, storedValue, setErrorHandling] = useFetch(textInput, setTextInput)

    const handleSubmit = (e) => {
        e.preventDefault()
        //Receive an error message if the input field is empty
        if (textInput) {
            fetchApi()
        } else {
            setErrorHandling("Please add a link")
        }
    }

    //clear error state after typing in the text field
    useEffect(() => {
        setErrorHandling("")
        // eslint-disable-next-line
    }, [textInput])


    return (
        <Box
            component={'main'}
            sx={{
                backgroundColor: Colors.Gray,
                position: 'relative',
                mt: 5
            }}>
            <Box
                sx={{
                    backgroundColor: '#fff',
                    position: 'absolute',
                    top: 0,
                    zIndex: 2,
                    height: { xs: '92.25px', sm: '96px', md: '60px' },
                    width: '100%',
                }}></Box>
            <Container maxWidth='lg'  >
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    autoComplete="off"
                    sx={{
                        position: 'relative',
                        zIndex: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        borderRadius: '10px',
                        padding: 3,
                        backgroundImage: { xs: `url(${bgShortenM})`, md: `url(${bgShorten})` },
                        backgroundColor: Colors.DarkViolet,
                        backgroundSize: '78rem',
                        backgroundPosition: { xs: '0 300px', md: '0 0' }
                    }}
                >
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: { xs: 'column', md: 'row' },
                        '& > :not(style)': { m: 1 },
                        width: '100%'

                    }}>
                        <ShortenTextField
                            type='text'
                            hiddenLabel
                            id="demo-helper-text-aligned"
                            onChange={(e) => setTextInput(e.target.value)}
                            value={textInput}
                            placeholder='Shorten a link here...'
                            errorHandling={errorHandling}
                        />
                        <InputButton variant="contained" type='submit' >Shorten it!</InputButton>
                    </Box>
                    {errorHandling &&
                        <Typography
                            component={'span'}
                            variant='caption'
                            color={'error'}
                            sx={{ ml: { md: '0.5rem', sm: '2.2rem', xs: '1.2rem' } }}
                        >
                            {errorHandling}
                        </Typography>}
                </Box>
                {/* See a list of their shortened links, even after refreshing the browser */}
                {storedValue.map((item) => {
                    return <LinkShorted key={item.receive} item={item} />
                })}
            </Container>

        </Box>
    )
}

export default InputShorten