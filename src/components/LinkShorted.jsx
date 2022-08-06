import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Divider, Link, Stack, useMediaQuery, useTheme } from '@mui/material';
import { ButtonCopy } from '../styles/inputShorten';
import { Colors } from '../styles/theme/styles';

export default function LinkShorted() {
    //* find media is mobile or desktop
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down("md"))
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
                    <Typography variant='body2' sx={{ p: 1.5 }}>www.google.com</Typography>
                    <Divider variant='fullWidth' sx={{ width: { xs: '100%', md: 0 } }} />
                    <Typography variant='body2' sx={{ color: Colors.Cyan, p: 1.5 }}>
                        <Link href="#" color="inherit" underline="none">
                            www.g2f88q2ef29gg.com
                        </Link>
                    </Typography>
                </Stack>
            </CardContent>
            <CardActions sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-start' },
                alignItems: 'center',
            }}>
                <ButtonCopy variant='contained' fontSize="" >Copy</ButtonCopy>
            </CardActions>
        </Card>

    );
}
