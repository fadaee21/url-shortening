import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Divider, Link, Stack, useMediaQuery, useTheme } from '@mui/material';
import { ButtonCopy } from '../../styles/inputShorten';
import { Colors } from '../../styles/theme';

export default function LinkShorted({ item }) {
    const [copyState, setCopyState] = React.useState(false)

    //* find media is mobile or desktop
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down("md"))

    const handleCopy = () => {
        //Copy the shortened link to their clipboard in a single click
        navigator.clipboard.writeText(item.receive)
        setCopyState(true)
    }

    return (
        <Card
            elevation={0}
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                mt: 2
            }}
        >
            <CardContent sx={{ flexGrow: 1, p: 0 }} >
                <Stack
                    direction={matches ? 'column' : 'row'}
                    justifyContent="space-between"
                    alignItems={matches ? 'flex-start' : 'center'}
                    height='100%'
                >
                    <Typography variant='body2' sx={{ p: 1.5 }}>{item.send}</Typography>
                    <Divider variant='fullWidth' sx={{ width: { xs: '100%', md: 0 } }} />
                    <Typography variant='body2' sx={{ color: Colors.Cyan, p: 1.5 }}>
                        <Link
                            //TODO in development mode it doesn't work properly
                            href={item.receive}
                            color="inherit"
                            underline="none"
                            target={"_blank"}
                            rel="noreferrer" >
                            {item.receive}
                        </Link>
                    </Typography>
                </Stack>
            </CardContent>
            <CardActions sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-start' },
                alignItems: 'center',
            }}>
                <ButtonCopy variant='contained' fontSize="" onClick={handleCopy} copyState={copyState} >{copyState ? "Copied!" : "Copy"}</ButtonCopy>
            </CardActions>
        </Card>

    );
}
