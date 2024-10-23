import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { FiCheck, FiClock, FiFastForward, FiFlag, FiUsers } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'flowdepth',
    description: 'Get productive and stay accountable with flowdepth.',
  } as NextSeoProps,
  termsUrl: '/legal',
  privacyUrl: '/legal',
  header: {
    links: [
      {
        id: 'features',
        label: 'Features',
      },
      {
        id: 'pricing',
        label: 'Pricing',
      },
      {
        label: 'Waitlist',
        id: 'waitlist',
      },
      {
        id: 'faq',
        label: 'FAQ',
      },
      {
        label: 'Sign Up',
        id: 'waitlist',
        variant: 'primary',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        Built by{' '}
        <Link href="https://github.com/AdditionalRAM">AdditionalRAM</Link>
      </>
    ),
    links: [
      {
        href: '/#waitlist',
        label: 'Waitlist',
      },
      {
        href: '/legal#imprint',
        label: 'Imprint',
      },
      {
        href: '/legal#privacy',
        label: 'Privacy',
      },
      {
        href: '/legal#terms',
        label: 'Terms',
      },
      {
        href: '/legal#contact',
        label: 'Contact',
      },
      // {
      //   href: 'https://twitter.com/saas_js',
      //   label: <FaTwitter size="14" />,
      // },
      // {
      //   href: 'https://github.com/saas-js/saas-ui',
      //   label: <FaGithub size="14" />,
      // },
    ],
  },
  signup: {
    title: 'Get productive and stay accountable with flowdepth.',
    features: [
      {
        icon: FiClock,
        title: 'Pomodoro',
        description: 'Stay focused with an automated Pomodoro timer.',
      },
      {
        icon: FiFastForward,
        title: 'Kickstart',
        description:
          'Quick-start timer to break procrastination and get to work.',
      },
      {
        icon: FiFlag,
        title: 'Progress',
        description:
          'Set goals, track stats, and stay motivated.',
      },
      {
        icon: FiUsers,
        title: 'Accountability',
        description:
          'Share your progress with others to stay accountable.',
      },
    ],
  },
}

export default siteConfig
