'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { Br, Field, Form, FormLayout, Link, SubmitButton } from '@saas-ui/react'
import type { Metadata, NextPage } from 'next'
import Image from 'next/image'
import {
  FiArrowRight,
  FiClock,
  FiFastForward,
  FiFlag,
  FiUsers,
} from 'react-icons/fi'

import * as React from 'react'
import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { ChakraLogo, NextjsLogo } from '#components/logos'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'
import { Section } from '#components/section'
import { useState } from 'react'

export const meta: Metadata = {
  title: 'Saas UI Landingspage',
  description: 'Free SaaS landingspage starter kit',
}

const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />

      <HighlightsSection />

      <FeaturesSection />

      <TestimonialsSection />

      <PricingSection />

      <FormSection />

      <FaqSection />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden" id="features">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Manage your
                <Br /> productive time
              </FallInPlace>
            }
            description={
              <>
              <FallInPlace delay={0.4} fontWeight="medium">
                <Em>flowdepth</Em> tracks your productive hours and lets you share your progress with friends for extra accountability. <Br />
                Stay on top of your goals together!
              </FallInPlace>
              <FallInPlace delay={0.6} fontWeight="medium">
                <Br />
                Join the <Em>waitlist</Em> to get flowdepth early <Br />
                and get a <Em>free</Em> upgrade to Abyss.
              </FallInPlace>
              </>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8">

              </HStack>

              <ButtonGroup spacing={4} alignItems="center">
                {/* <ButtonLink colorScheme="primary" size="lg" href="#waitlist">
                  Sign Up
                </ButtonLink> */}
                <ButtonLink
                  size="lg"
                  href="#waitlist"
                  variant="outline"
                  colorScheme='primary'
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                >
                  Join the waitlist
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/flowdepth-mockup.png"
                  width={600}
                  height={850}
                  alt="Prototype Screenshot of flowdepth"
                  quality="75"
                  style={{objectFit: "contain"}}
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={8}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: 'Pomodoro',
            icon: FiClock,
            description: 'Stay focused with an automated Pomodoro timer.',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'Kickstart',
            icon: FiFastForward,
            description:
              'Quick-start timer to break procrastination and get to work.',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'Track your progress',
            icon: FiFlag,
            description:
              'Set goals, track stats, and stay motivated.',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'Accountability',
            icon: FiUsers,
            description:
              'Share your progress with others to stay accountable.',
            iconPosition: 'left',
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  )
}

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('yarn add @saas-ui/react')

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Deep work">
          <Text color="muted" fontSize="xl">
            Our app&apos;s core philosophy is simple: <Em>deep work</Em>.
            <Br />
            We believe that deep work is the key to success, and we&apos;ve
            built something that helps you achieve it.
          </Text>
      </HighlightsItem>
      <HighlightsItem title="Two steps ahead">
        <Text color="muted" fontSize="lg">
        Gain an edge with focus and accountability. flowdepth keeps you sharp, motivated, and ahead of the competition.
        </Text>
      </HighlightsItem>
      <HighlightsItem
        colSpan={[1, null, 1]}
        title="Cross platform"
      >
        <Text color="muted" fontSize="xl">
          Track your progress across multiple devices and seamlessly sync your data.
        </Text>
      </HighlightsItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Solid foundations"
      >
        <Text color="muted" fontSize="xl">
          Why reinvent the wheel? 
          flowdepth utilizes the proven <Em>Pomodoro Technique</Em> to keep you in a state of flow. <Br />
          Maximize productivity while maintaining your mental sharpness.
        </Text>
      </HighlightsItem>
    </Highlights>
  )
}

const FeaturesSection = () => {
  // return (
  //   <Features
  //     id="features"
  //     title={
  //       <Heading
  //         lineHeight="short"
  //         fontSize={['2xl', null, '4xl']}
  //         textAlign="left"
  //         as="p"
  //       >
  //         Not your standard
  //         <Br /> dashboard template.
  //       </Heading>
  //     }
  //     description={
  //       <>
  //         Saas UI Pro includes everything you need to build modern frontends.
  //         <Br />
  //         Use it as a template for your next product or foundation for your
  //         design system.
  //       </>
  //     }
  //     align="left"
  //     columns={[1, 2, 3]}
  //     iconSize={4}
  //     features={[
  //       {
  //         title: '#components.',
  //         icon: FiBox,
  //         description:
  //           'All premium components are available on a private NPM registery, no more copy pasting and always up-to-date.',
  //         variant: 'inline',
  //       },
  //       {
  //         title: 'Starterkits.',
  //         icon: FiLock,
  //         description:
  //           'Example apps in Next.JS, Electron. Including authentication, billing, example pages, everything you need to get started FAST.',
  //         variant: 'inline',
  //       },
  //       {
  //         title: 'Documentation.',
  //         icon: FiSearch,
  //         description:
  //           'Extensively documented, including storybooks, best practices, use-cases and examples.',
  //         variant: 'inline',
  //       },
  //       {
  //         title: 'Onboarding.',
  //         icon: FiUserPlus,
  //         description:
  //           'Add user onboarding flows, like tours, hints and inline documentation without breaking a sweat.',
  //         variant: 'inline',
  //       },
  //       {
  //         title: 'Feature flags.',
  //         icon: FiFlag,
  //         description:
  //           "Implement feature toggles for your billing plans with easy to use hooks. Connect Flagsmith, or other remote config services once you're ready.",
  //         variant: 'inline',
  //       },
  //       {
  //         title: 'Upselling.',
  //         icon: FiTrendingUp,
  //         description:
  //           '#components and hooks for upgrade flows designed to make upgrading inside your app frictionless.',
  //         variant: 'inline',
  //       },
  //       {
  //         title: 'Themes.',
  //         icon: FiToggleLeft,
  //         description:
  //           'Includes multiple themes with darkmode support, always have the perfect starting point for your next project.',
  //         variant: 'inline',
  //       },
  //       {
  //         title: 'Generators.',
  //         icon: FiTerminal,
  //         description:
  //           'Extend your design system while maintaininig code quality and consistency with built-in generators.',
  //         variant: 'inline',
  //       },
  //       {
  //         title: 'Monorepo.',
  //         icon: FiCode,
  //         description: (
  //           <>
  //             All code is available as packages in a high-performance{' '}
  //             <Link href="https://turborepo.com">Turborepo</Link>, you have full
  //             control to modify and adjust it to your workflow.
  //           </>
  //         ),
  //         variant: 'inline',
  //       },
  //     ]}
  //   />
  // )
  return (<></>);
}

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []],
    )
  }, [])

  // return (
  //   <Testimonials
  //     title={testimonials.title}
  //     columns={[1, 2, 3]}
  //     innerWidth="container.xl"
  //   >
  //     <>
  //       {columns.map((column, i) => (
  //         <Stack key={i} spacing="8">
  //           {column.map((t, i) => (
  //             <Testimonial key={i} {...t} />
  //           ))}
  //         </Stack>
  //       ))}
  //     </>
  //   </Testimonials>
  // )
  
  return <></>;
  // testimonials temporarily disabled
}

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        
      </Text>
    </Pricing>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export const FormSection: React.FC = () => {
  const FORMSPARK_URL = 'https://submit-form.com/JUgGh098D';
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (values: { email: string }) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(FORMSPARK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json', // Important to include
        },
        body: JSON.stringify({
          message: "New submission", // Customize this message if needed
          email: values.email, // Pass email from the form
          _email: {
            from: values.email, // Set the from field if needed
            subject: "A new user has joined the waitlist", // Customize subject as necessary
          },
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="waitlist" pos="relative">
      <Box zIndex="2" pos="relative">
        <VStack align="center" spacing={6}>
          {/* Section Title */}
          <Heading as="h2" size="xl" fontWeight="bold">
            Join the flowdepth Waitlist
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Be the first to know when we launch. Get updates, feature testing invites, and a free upgrade to Abyss!
          </Text>

          {/* Form */}
          <div>
            {!submitted ? (
              <Form defaultValues={{ email: '' }} onSubmit={handleSubmit}>
                <FormLayout>
                  <Field
                    name="email"
                    label="Email"
                    type="email"
                    help="We'll send you updates about the app and the free upgrade to Abyss. No spam ever."
                    rules={{ required: true }} // Assuming you have a way to validate this
                  />
                  <SubmitButton isLoading={isSubmitting} disableIfUntouched disableIfInvalid>
                    Join the waitlist
                  </SubmitButton>
                </FormLayout>
              </Form>
            ) : (
              <Text fontSize="lg" color="green.500">
                Thank you for joining the waitlist!
              </Text>
            )}

            {/* GDPR Notice */}
            <Text fontSize="sm" color="gray.500" mt={4}>
              By joining the waitlist, you agree to receive emails from flowdepth. You can unsubscribe anytime. See our{' '}
              <a href="/legal#privacy" style={{ textDecoration: 'underline' }}>
                Privacy Policy
              </a>
              . No spam.
            </Text>
          </div>
        </VStack>
      </Box>
    </Section>
  );
}

export default Home
