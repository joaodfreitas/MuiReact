import { useEffect, useState } from 'react';
import UserCard from '../components/UserCard';
import { Container, Typography, CircularProgress, Grid, Box, useTheme } from '@mui/material';
import { getUsers } from '../api/users';

export default function Home() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const theme = useTheme(); // Hook para acessar o tema

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await getUsers();
                setUsers(response.data.results);
                localStorage.setItem('users', JSON.stringify(response.data.results));
                setLoading(false);
            } catch (error) {
                console.error("Erro ao carregar usuários", error);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return (
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100vh"
            >
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box sx={{ minWidth: '100vw', display: 'flex', flexDirection: 'column' }}>
            <Box
                sx={{
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    color: theme.palette.primary.contrastText,
                    py: 4,
                    textAlign: 'center',
                }}
            >
                <Typography variant="h3" component="h1" fontWeight="bold">
                    Bem-vindo à Lista de Usuários
                </Typography>
                <Typography variant="subtitle1" mt={1}>
                    Explore os detalhes dos usuários cadastrados
                </Typography>
            </Box>
            <Container maxWidth="lg" sx={{ flex: 1, mt: 4 }}>
                <Grid container spacing={3}>
                    {users.map((user) => (
                        <Grid item xs={12} sm={6} md={4} key={user.email}>
                            <UserCard user={user} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}