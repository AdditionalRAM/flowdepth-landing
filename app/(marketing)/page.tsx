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
import { Br, Field, Form, FormLayout, Link, SubmitButton, useSnackbar } from '@saas-ui/react'
import type { Metadata, NextPage } from 'next'
import Image from 'next/image'
import {
  FiArrowRight,
  FiBarChart,
  FiBox,
  FiClock,
  FiCloud,
  FiCode,
  FiCrosshair,
  FiFastForward,
  FiFlag,
  FiFolder,
  FiLock,
  FiPlay,
  FiSearch,
  FiStar,
  FiTerminal,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
  FiUsers,
} from 'react-icons/fi'
import { LuFastForward, LuGamepad2, LuLineChart } from 'react-icons/lu'

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

const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />

      <IntrigueSection />

      <FeaturesSection />

      <HighlightsSection />

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
      <Container maxW="container.xl" pt={{ base: 20, lg: 40 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Step up your
                <Br /> productivity
              </FallInPlace>
            }
            description={
              <>
              <FallInPlace delay={0.4} fontWeight="medium">
              For students who are <Em>tired of procrastination</Em>. <Br /> <Em>flowdepth</Em> helps you track your progress and keep you motivated and accountable via social pressure.
              </FallInPlace>
              <FallInPlace delay={0.6} fontWeight="medium">
                <Br />
                Join the <Em>waitlist</Em> to get flowdepth early <Br />
                and get a <Em>free</Em> upgrade to Abyss. <Br />
                We won't share your email with anyone.
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
                  Secure my free upgrade
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
            title: 'Stay focused, effortlessly',
            icon: FiCrosshair,
            description: 'Automated Pomodoro timer keeps you on task with timed work and breaks, boosting productivity.',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'Instantly beat procrastination',
            icon: LuFastForward,
            description:
              'The Kickstart timer helps you dive into work quickly with short bursts to overcome procrastination.',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'Track progress, achieve more',
            icon: LuLineChart,
            description:
              "Set goals, track progress, and see how far you've come to stay motivated and focused.",
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'Accountability made social',
            icon: FiUsers,
            description:
              'Share progress with friends for an extra push, keeping you accountable to reach your goals.',
            iconPosition: 'left',
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  )
}

const IntrigueSection = () => {
  return (
    <Section id="intrigue" py="20">
      <Stack spacing="8">
        <Heading as="h2" size="xl" textAlign="left">
          How do they do it?
        </Heading>
        <Text fontSize="xl" color="gray.400" textAlign="left">
          Some students seem to do it all, don&apos;t they? <Br />
          Discover the strategy the “smart kids” use to meet every deadline and have free time left. <Br />
          And yes, you can do it too. <Br />
        </Text>
      </Stack>
      <Stack spacing="8" py="20" pb="0">
        <Heading as="h2" size="xl" textAlign="left">
          Your #1 issue.
        </Heading>
        <Text fontSize="xl" color="gray.400" textAlign="left">
          Let&apos;s be real - procrastination is holding you back. <Br />
          You have time and want to study, but you just can&apos;t get yourself to do it. <Br />
          Instead you put off work, scrolling through social media, or getting distracted by your phone while “working”. <Br />
        </Text>
      </Stack>
    </Section>
  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          Unlock your
          <Br /> full potential.
        </Heading>
      }
      description={
        <>
          flowdepth is no simple pomodoro timer.
          <Br />
          It&apos;s a productivity system designed to help students tackle procrastination, stay organized and improve focus. Make more time for the things you love while getting better grades.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
            title: 'Cross-Platform Sync.',
            icon: FiCloud,
            description:
                'Access Flowdepth on any device - laptop, tablet, or phone. Whether typing, writing notes, or using pen and paper, Flowdepth keeps everything connected.',
            variant: 'inline',
        },
        {
            title: 'Simple & Ready to Use.',
            icon: FiPlay,
            description:
                'No setup required, no learning curve - just dive in. The intuitive UI ensures you stay focused on your tasks while Flowdepth handles the rest.',
            variant: 'inline',
        },
        {
            title: 'Progress Tracker.',
            icon: FiTrendingUp,
            description:
                "Set daily goals and visualize your achievements. Look back and see how far you've come as you build lasting habits.",
            variant: 'inline',
        },
        {
            title: 'Custom Categories.',
            icon: FiFolder,
            description:
                'Organize your tasks by preset categories or personalize them by subjects like math, science, or history. Your workspace, your rules.',
            variant: 'inline',
        },
        {
            title: 'Kickstart Timer.',
            icon: FiFastForward,
            description:
                'Beat procrastination with a simple timer. Set a quick, manageable start time to get going - it\'s simple to continue once you\'ve begun.',
            variant: 'inline',
        },
        {
            title: 'Social Accountability.',
            icon: FiUsers,
            description:
                'Connect with friends, share your progress, and keep each other accountable. Stay motivated by knowing your friends are watching.',
            variant: 'inline',
        },
        {
            title: 'Study Gamification.',
            icon: LuGamepad2,
            description:
                'Turn studying into a game. Unlock achievements, collect rewards, and maintain streaks to stay motivated and make productivity fun.',
            variant: 'inline',
        },
        {
            title: 'Pomodoro Focus.',
            icon: FiClock,
            description:
                'Utilize the proven Pomodoro technique to stay focused. Start a timer, work in bursts, and let Flowdepth handle your session breaks.',
            variant: 'inline',
        },
    ]}
    
    />
  )
  // return (<></>);
}

const HighlightsSection = () => {

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Flow in deep work">
          <Text color="muted" fontSize="xl">
            Deep work is the core principle of flowdepth - the “depth” in flowdepth stands for deep work. <Br />
            It&apos;s about immersing yourself in focused tasks, eliminating distractions and embracing the flow state. <Br />
            This allows you to grasp complex concepts, solve problems, and produce quality work in less time. <Br />
            With flowdepth, you will get things done and enjoy it too, improving your grades while freeing up time for other activities. 
          </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Onat"
        description="Computer engineering student"
        avatar="/static/images/testimonials/onat.jpg"
        gradient={['green.600', 'primary.800']}
      >
        “As an engineering student, I've always timed my study sessions manually to keep track of my progress. With flowdepth, I can track my progress automatically and it doesn't feel like a chore anymore! It also has a social feature that lets you share your progress with friends, I don't have friends though.”
      </HighlightsTestimonialItem>
      <HighlightsItem title="Two steps ahead">
        <Text color="muted" fontSize="lg">
        Gain an edge with focus and accountability. flowdepth keeps you sharp, motivated, and ahead of the competition.
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

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
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

const FormSection = () => {
  const FORMSPARK_URL = 'https://submit-form.com/JUgGh098D';
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const snackbar = useSnackbar();

  const showSnackbar = () => snackbar.success({
    title: 'Free upgrade secured.',
    description: 'Thank you for joining the waitlist! You will be hearing from us soon.',
    status: 'success',
    duration: 9000,
    isClosable: true,
  })

  const handleSubmit = async (values: { email: string }) => {
    setIsSubmitting(true);
    try {
      const response = await fetch(FORMSPARK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          message: "New submission",
          email: values.email,
          _email: {
            from: values.email,
            subject: "A new user has joined the waitlist",
          },
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        showSnackbar();
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
          <Text fontSize="lg" color="gray.600" textAlign="center">
            Be the first to know when we launch. Get updates, feature testing invites, and a free upgrade to Abyss! <Br /> Spots are limited.
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
                    help="We'll send you updates about the app and the free upgrade to Abyss. Your email won't be shared and you won't receive any spam."
                    rules={{ required: true }} // Assuming you have a way to validate this
                  />
                  <SubmitButton isLoading={isSubmitting} disableIfUntouched disableIfInvalid>
                    Secure my free upgrade
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
              By joining the waitlist, you agree to receive emails from flowdepth. You can unsubscribe anytime. <Link style={{ textDecoration: 'underline' }} href='/legal/#terms'>Terms</Link> apply. See our{' '}
              <Link href="/legal#privacy" style={{ textDecoration: 'underline' }}>
                Privacy Policy
              </Link>.
            </Text>
          </div>
        </VStack>
      </Box>
    </Section>
  );
}

export default Home
