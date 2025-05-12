import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';

export default function UserCard({ user }) {
    return (
        <Card sx={{ maxWidth: 345, minWidth: 345, marginBottom: 2 }}>
            <CardContent>
                <Box textAlign="center">
                    <Avatar
                        alt={`${user.name.first} ${user.name.last}`}
                        src={user.picture.medium}
                        sx={{ width: 80, height: 80, margin: '0 auto' }}
                    />
                    <Typography variant="h6" component="div" sx={{ mt: 2 }}>
                        {user.name.first} {user.name.last}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                        {user.email}
                    </Typography>
                    <Link
                        to={`/details/${user.email}`}
                        style={{ textDecoration: 'none', marginTop: '10px', display: 'inline-block' }}
                    >
                        <Typography variant="body2" color="primary">
                            Ver Detalhes
                        </Typography>
                    </Link>
                </Box>
            </CardContent>
        </Card>
    );
}
