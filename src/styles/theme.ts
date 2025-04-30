import { createTheme } from '@mui/material/styles';

/**
 * Пользовательская тема для Material UI
 * Определяет основные цвета, типографику и стили компонентов
 */
const theme = createTheme({
  palette: {
    primary: {
      main: '#333333', // Основной цвет
    },
    secondary: {
      main: '#f5f5f5', // Вторичный цвет
    },
    background: {
      default: '#ffffff', // Фон по умолчанию
      paper: '#f5f5f5',   // Фон для карточек и прочих paper-элементов
    },
  },
  typography: {
    fontFamily: '"Segoe UI", Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      marginBottom: '1.5rem',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      marginBottom: '1.25rem',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      marginBottom: '1rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  components: {
    // Переопределение стилей кнопок
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          textTransform: 'none', // Отключаем трансформацию в верхний регистр
          fontWeight: 600,
          padding: '0.5rem 1.5rem',
        },
        containedPrimary: {
          backgroundColor: '#333333',
          '&:hover': {
            backgroundColor: '#222222',
          },
        },
      },
    },
    // Переопределение стилей текстовых полей
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '1rem',
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: '#333333',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#333333',
              borderWidth: 2,
            },
          },
        },
      },
    },
  },
});

export default theme;