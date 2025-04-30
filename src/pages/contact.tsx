import React, { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import ContactForm from '@/components/ContactForm';
import ThankYouMessage from '@/components/ThankYouMessage';
import { Container } from '@mui/material';
import styled from 'styled-components';
import Head from 'next/head';

const SectionContainer = styled.section`
    padding: 4rem 0;
    background-color: #f5f5f5;
    min-height: calc(100vh - 64px - 80px);
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 768px) {
        padding: 2rem 0;
    }
`;

const PageTitle = styled.h1`
    text-align: center;
    margin-bottom: 2rem;
    font-weight: 700;
    font-size: 2.5rem;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

const ContactPage = () => {
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  const handleFormSuccess = (message: string) => {
    setSubmitMessage(message);
  };

  return (
    <Layout
      title="Contact Us - Some Company"
      description="Get in touch with Some Company for professional services and inquiries."
    >
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>

      <SectionContainer>
        <Container maxWidth="lg">
          {submitMessage ? (
            <ThankYouMessage message={submitMessage} />
          ) : (
            <>
              <PageTitle>
                Only CTA on the page
              </PageTitle>
              <ContactForm onSuccess={handleFormSuccess} />
            </>
          )}
        </Container>
      </SectionContainer>
    </Layout>
  );
};

export default ContactPage;