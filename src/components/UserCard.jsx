import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';

export default function UserCard({ user }) {
    return (
        <Card >
           <CardContent>
                 <Box textAlign="center">
                    <Avatar
  src={user.picture.medium}
  alt={`${user.name.first} ${user.name.last}`}
  style={{ width: 80, height: 80, margin: '0 auto' }}
/>

                    <Typography 
                     variant='h6'
                     component='div'
                     sx = {{mt: 5}} >
                        {user.name.firts} {user.name.last}
                    </Typography>

                 </Box>
            </CardContent>

        </Card>
    )
}
