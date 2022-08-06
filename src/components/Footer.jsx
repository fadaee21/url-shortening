
import { Grid, List, ListItem, ListItemText } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import { Instagram, Pintrest, ShortlyIcon, Twitter, Youtube } from '../assets/svg'
import { ButtonFooterIcon, ListItemButtonStyled, ListItemCenter } from '../styles/footer'
import { Colors } from '../styles/theme/styles'

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: Colors.VeryDarkViolet, color: '#fff', py: 8 }} >
            <Container>
                <Grid container>
                    <Grid item md={3}   sm={12}  xs={12}>
                        <ShortlyIcon sx={{ width: '100%', height: '7rem', mt: -3 }} />
                    </Grid>
                    <Grid item md={2}  sm={4} xs={12} >
                        <List>
                            <ListItem disablePadding >
                                <ListItemButtonStyled   >
                                    <ListItemText primaryTypographyProps={{ variant: 'caption' }} primary="Features" />
                                </ListItemButtonStyled>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButtonStyled component="a" href="#simple-list">
                                    <ListItemText secondaryTypographyProps={{ variant: 'caption' }} secondary="Link Shortening" />
                                </ListItemButtonStyled>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButtonStyled component="a" href="#simple-list">
                                    <ListItemText secondaryTypographyProps={{ variant: 'caption' }} secondary="Branded Links" />
                                </ListItemButtonStyled>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButtonStyled component="a" href="#simple-list">
                                    <ListItemText secondaryTypographyProps={{ variant: 'caption' }} secondary="Analytics" />
                                </ListItemButtonStyled>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item md={2} sm={4} xs={12} >
                        <List>
                            <ListItem disablePadding >
                                <ListItemButtonStyled >
                                    <ListItemText primaryTypographyProps={{ variant: 'caption' }} primary="Resources" />
                                </ListItemButtonStyled>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButtonStyled component="a" href="#simple-list">
                                    <ListItemText secondaryTypographyProps={{ variant: 'caption' }} secondary=" Blog" />
                                </ListItemButtonStyled>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButtonStyled component="a" href="#simple-list">
                                    <ListItemText secondaryTypographyProps={{ variant: 'caption' }} secondary="Developers" />
                                </ListItemButtonStyled>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButtonStyled component="a" href="#simple-list">
                                    <ListItemText secondaryTypographyProps={{ variant: 'caption' }} secondary="Support" />
                                </ListItemButtonStyled>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item md={2} sm={4} xs={12} >
                        <List>
                            <ListItem disablePadding >
                                <ListItemButtonStyled >
                                    <ListItemText primaryTypographyProps={{ variant: 'caption' }} primary="Company" />
                                </ListItemButtonStyled>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButtonStyled component="a" href="#simple-list">
                                    <ListItemText secondaryTypographyProps={{ variant: 'caption' }} secondary="About" />
                                </ListItemButtonStyled>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButtonStyled component="a" href="#simple-list">
                                    <ListItemText secondaryTypographyProps={{ variant: 'caption' }} secondary="Our Team" />
                                </ListItemButtonStyled>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButtonStyled component="a" href="#simple-list">
                                    <ListItemText secondaryTypographyProps={{ variant: 'caption' }} secondary="Careers " />
                                </ListItemButtonStyled>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButtonStyled component="a" href="#simple-list">
                                    <ListItemText secondaryTypographyProps={{ variant: 'caption' }} secondary="Contact" />
                                </ListItemButtonStyled>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item md={3} sm={12} xs={12} >
                        <ListItemCenter   >
                            <ButtonFooterIcon><Instagram /></ButtonFooterIcon>
                            <ButtonFooterIcon><Twitter /></ButtonFooterIcon>
                            <ButtonFooterIcon><Youtube /></ButtonFooterIcon>
                            <ButtonFooterIcon><Pintrest /></ButtonFooterIcon>
                        </ListItemCenter>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Footer


// Features Link Shortening Branded Links Analytics Resources Blog Developers Support Company About Our Team Careers Contact
