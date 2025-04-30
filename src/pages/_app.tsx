import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '@/utils/createEmotionCache';
import theme from '@/styles/theme';
import '@/styles/globals.css';
import Head from 'next/head';

const clientSideEmotionCache = createEmotionCache();

// Добавляем экспорт для использования в _document.tsx
export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

// Экспортируем тип для App компонента, чтобы использовать его в _document.tsx
export type MyAppType = React.ComponentType<MyAppProps>;

export default function App({
                              Component,
                              pageProps,
                              emotionCache = clientSideEmotionCache
                            }: MyAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}