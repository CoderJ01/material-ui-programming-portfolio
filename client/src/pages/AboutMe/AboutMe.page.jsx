import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import image from './images/01_avatar.png'
import { Typography } from '@mui/material'
import { GET_ALL_PARAGRAPHS } from '../../graphql/queries/Paragraph.query';
import { GET_ALL_AVATARS } from '../../graphql/queries/Avatar.query';
import { useQuery } from '@apollo/client';

const AboutMe = () => {

    const { loading, error, data } = useQuery(GET_ALL_PARAGRAPHS);
    const { data: avatarData } = useQuery(GET_ALL_AVATARS);

    return (
        <>
        {
            !loading && !error && 
            (
                <React.Fragment>
                    <CssBaseline />
                    <Container maxWidth="md">
                        <Box sx={{ minHeight: '155vh', textAlign: 'center', marginTop: '6%', backgroundColor: 'rgb(255, 253, 208)'}}>
                        <Typography variant="h3" gutterBottom sx={{ color: 'rgb(0, 4, 55)' }}>About Me</Typography>
                        <div style={{ display: 'flex', justifyContent:'center'}}>
                            <Avatar
                                alt="Remy Sharp"
                                src={avatarData.avatars[0].picture}
                                sx={{ width: 150, height: 150, border: '5px solid rgb(0, 4, 55)' }}
                            />
                        </div>
                        <Container maxWidth="sm" sx={{marginTop: '5%', border: '2px solid rgb(0, 4, 55)', background: 'white', borderRadius: '10px' }}>
                            <Box sx={{ minHeight: '100vh' }}>
                                {
                                    Array.apply(0, Array(data.paragraphs.length)).map(function(x, i) {
                                        return (
                                            <Typography variant="body1" gutterBottom sx={{ color: 'rgb(0, 4, 55)' }} key={i}>{data.paragraphs[i].text}</Typography>
                                        );
                                    })
                                }
                            </Box>
                        </Container>
                        </Box>
                    </Container>
                </React.Fragment>
            )
        }
        </>
    );
}

export default AboutMe;