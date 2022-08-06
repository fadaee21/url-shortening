import React from 'react'
import { Box, Container } from '@mui/system'
import bgShorten from '../assets/all/bg-shorten-desktop.svg'
import bgShortenM from '../assets/all/bg-shorten-mobile.svg'
import { Colors } from '../styles/theme/styles'
import { InputButton, ShortenTextField } from '../styles/inputShorten'
import LinkShorted from './LinkShorted'
const InputShorten = () => {



    return (
        <Box sx={{
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
                    autoComplete="off"
                    sx={{
                        position: 'relative',
                        zIndex: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: { xs: 'column', md: 'row' },
                        '& > :not(style)': { m: 1 },
                        borderRadius: '10px',
                        padding: 3,
                        backgroundImage: { xs: `url(${bgShortenM})`, md: `url(${bgShorten})` },
                        backgroundColor: Colors.DarkViolet,
                        backgroundSize: '78rem',
                        backgroundPosition: { xs: '0 300px', md: '0 0' }
                    }}
                >
                    <ShortenTextField
                        hiddenLabel
                        id="demo-helper-text-aligned"
                        placeholder='Shorten a link here...'
                    />
                    <InputButton variant="contained" >Shorten it!</InputButton>
                </Box>
                <LinkShorted />
                <LinkShorted />

            </Container>

        </Box>
    )
}

export default InputShorten