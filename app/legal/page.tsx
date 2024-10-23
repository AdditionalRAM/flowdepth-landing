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
import Link from 'next/link'

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
              Email: sener@flowdepth.com
              <br />
              Registration: District Court Charlottenburg HRB 249792B
              <br />
              VAT ID: DE 36 0 36 10 40
            </Text>
          </Section>

          <Divider />

          <Section id="terms">
            <Heading as="h2" size="lg" mb={4}>
              Waitlist Terms
            </Heading>
            <Text fontSize="md">
              By signing up for our waitlist, you agree to the following terms:
              <br /><br />
              - You will receive updates and relevant information regarding our application, such as development updates, testing opportunities and launch information. You will not receive any additional marketing emails, or spam.
              <br /><br />
              - If we do send any emails before launch, you can use the link at the bottom of the email to unsubscribe from the waitlist.
              <br /><br />
              - If you want to unsubscribe but have not received any emails yet, please contact us at sener@flowdepth.com to unsubscribe.
              <br /><br />
              - Given you do not unsubscribe, you will receive an email when the application is ready to test.
              <br /><br />
              - Once you create an account on the application, you will automatically receive a free upgrade to the Abyss tier.
              <br /><br />
              - The name of the Abyss tier, features included, and the prices are subject to change.
              <br /><br />
              - As a waitlist member, you will receive Abyss tier features for free for the first 3-6 months after launch.
              <br /><br />
              - After the free period, you will receive a discount on the Abyss tier if you choose to keep it. If not, your account will be downgraded to the free tier.
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
              <br />
              - We will retain this information until either you withdraw consent, the app is launched, or the project gets canceled. 
              <br />
              - In the case of a cancellation, we will delete all personal data. You will be informed about this via email.
              <br /><br />
              <strong>3. Data Sharing</strong>
              <br />
              The email form is managed by Formspark. Their <Link style={{color: '#197EE6'}} href="https://formspark.io/legal/privacy-policy/">Privacy Policy</Link> applies.
              <br />
              Once emails are ready to be sent out, we may use third-party email services to send them, such as SendGrid.
              <br />
              We do not share your personal data with any additional third parties, except where required by law.
              <br /><br />
              <strong>4. Data Security</strong>
              <br />
              We take appropriate security measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. This includes regular security reviews, encryption, and secure backups, as well as multi factor authentication for all authorized personnel. The third party services we may use are also GDPR compliant and have a reputation for proper security.
              <br /><br />
              <strong>5. Your Rights</strong>
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
              Email: sener@flowdepth.com
            </Text>
          </Section>
        </VStack>
      </Container>
    </Box>
  )
}

export default LegalPage
