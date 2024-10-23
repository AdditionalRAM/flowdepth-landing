'use client'

import { Section } from '#components/section'
import {
  Box,
  Container,
  Divider,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Metadata, NextPage } from 'next'

const LegalPage: NextPage = () => {
  return (
    <Box>
      <Container maxW="container.xl" py={10}>
        <Heading as="h1" mb={6} textAlign="center" mt={10}>
          Legal Information
        </Heading>

        <VStack spacing={8} align="stretch">
          <Section id="imprint">
            <Heading as="h2" size="lg" mb={4}>
              Imprint
            </Heading>
            <Text fontSize="md">
              Responsible for the content:
              <br />
              Sener Engineering GmbH
              <br />
              c/o Next Level Offices, Franklinstraße 11, 10587 Berlin
              <br />
              Managing Director: BSc (Ing.) Semih SENER
              <br />
              Email: semih@sener.ai
              <br />
              Registration: District Court Charlottenburg HRB 249792B
              <br />
              VAT ID: DE 36 0 36 10 40
            </Text>
          </Section>

          <Divider />

          <Section id="privacy">
            <Heading as="h2" size="lg" mb={4}>
              Privacy Policy
            </Heading>
            <Text fontSize="md">
              This Privacy Policy describes how we collect, use, and protect your personal information when you visit our website and use our services.
              <br /><br />
              <strong>1. Information We Collect</strong>
              <br />
              We may collect the following types of personal data:
              <br />
              - Contact Information: When you sign up for our waitlist, we collect your email address.
              <br /><br />
              <strong>2. Purpose of Data Collection</strong>
              <br />
              We use your personal information for the following purposes:
              <br />
              - To manage the waitlist for our SaaS application.
              <br />
              - To communicate with you about updates and relevant information regarding our application, such as testing opportunities and launch information.
              <br /><br />
              <strong>3. Data Sharing</strong>
              <br />
              We do not share your personal data with third parties, except where required by law.
              <br /><br />
              <strong>4. Your Rights</strong>
              <br />
              Under the General Data Protection Regulation (GDPR), you have the following rights regarding your personal data:
              <br />
              - The right to access your personal data.
              <br />
              - The right to request rectification of your personal data.
              <br />
              - The right to request erasure of your personal data.
              <br />
              - The right to restrict processing of your personal data.
              <br />
              - The right to data portability.
              <br />
              - The right to withdraw consent at any time where we are relying on consent to process your personal data.
              <br /><br />
              If you have any questions or requests regarding your personal data, please contact us at semih@sener.ai.
            </Text>
          </Section>

          <Divider />

          <Section id="contact">
            <Heading as="h2" size="lg" mb={4}>
              Contact Us
            </Heading>
            <Text fontSize="md">
              If you have any questions regarding this Privacy Policy or our practices, please contact us at:
              <br /><br />
              Email: semih@sener.ai
            </Text>
          </Section>
        </VStack>
      </Container>
    </Box>
  )
}

export default LegalPage
