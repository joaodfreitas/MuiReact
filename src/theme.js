import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light', // ou 'dark'
        primary: {
            main: '#1976d2', // azul
        },
        secondary: {
            main: '#9c27b0', // roxo
        },
        background: {
            default: '#f4f6f8',
        },
    },
    shape: {
        borderRadius: 12,
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    transition: '0.3s',
                    '&:hover': {
                        boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                        transform: 'translateY(-2px)',
                    },
                },
            },
        },
    },
});

export default theme;
