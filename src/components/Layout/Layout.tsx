import React, { ReactNode } from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

// Интерфейс для пропсов компонента Layout
interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

// Стилизованный компонент для основного контента
// Высота рассчитывается с учетом высоты хедера и футера
const Main = styled.main`
    min-height: calc(100vh - 64px - 80px);
    display: flex;
    flex-direction: column;
`;


const Layout: React.FC<LayoutProps> = ({
                                         children,
                                         title = 'Some Company - Professional Services',
                                         description = 'Professional services offered by Some Company to help your business grow.'
                                       }) => {
  return (
    <>
      <Head>
        {/* Основные мета-теги */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* Мета-теги Open Graph для красивых превью в соцсетях */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://somecompany.com" />
        <meta property="og:image" content="https://somecompany.com/og-image.jpg" />

        {/* Мета-теги для Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="https://somecompany.com/twitter-image.jpg" />
      </Head>

      {/* Шапка сайта */}
      <Header />

      {/* Основной контент страницы */}
      <Main>
        {children}
      </Main>

      {/* Подвал сайта */}
      <Footer />
    </>
  );
};

export default Layout;