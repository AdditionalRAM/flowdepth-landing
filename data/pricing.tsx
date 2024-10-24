import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Pricing',
  description: 'Join the waitlist to get Abyss for free!',
  plans: [
    {
      id: 'free',
      title: 'Deep',
      description: 'Dive deep into your productivity.',
      price: 'Free',
      features: [
        { title: 'Productivity timer' },
        { title: 'Kickstart timer' },
        { title: 'Daily goals' },
        { title: '3 Categories' },
        { title: 'Cross-platform sync' },
        { title: 'Accountability with friends' },
        { title: 'And much more...' },
      ],
      action: {
        href: '#waitlist',
      },
    },
    {
      id: 'premium',
      title: 'Abyss',
      description: 'Enhance your focus and productivity tracking.',
      price: (
        <HStack>
          <Text textDecoration="line-through" fontSize="sm" color="gray.400">
            €8.99/month
          </Text>
          <Text>FREE (waitlist)</Text>
        </HStack>
      ),
      isRecommended: true,
      features: [
        { title: 'Everything in Deep' },
        { title: 'Customizable goals' },
        { title: 'Unlimited categories' },
        { title: 'Flow Together' },
        { title: 'Exclusive cosmetics' },
        { title: 'Profile badge' },
        { title: 'Advanced accountability' },
      ],
      action: {
        href: '#waitlist',
      },
    },
    {
      id: 'enterprise',
      title: 'Enterprise',
      description: "Manage your team's productivity and flow.",
      price: 'Custom',
      features: [
        { title: 'Everything in Abyss' },
        { title: 'Team management' },
        { title: 'Collaborative flow' },
        { title: 'External app usage tracking' },
        { title: 'Analytics and reports' },
      ],
      action: {
        href: '#waitlist',
      },
    },
  ],
}
