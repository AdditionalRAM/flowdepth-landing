import { MarketingLayout } from '#components/layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'flowdepth Landing',
  description: 'Manage your productive time with pomodoro and accountability',
}

export default function Layout(props: { children: React.ReactNode }) {
  return <MarketingLayout>{props.children}</MarketingLayout>
}
