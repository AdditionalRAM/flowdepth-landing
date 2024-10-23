import { MarketingLayout } from '#components/layout'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legal Information',
  description: 'Imprint and Privacy Policy for GDPR Compliance',
}

export default function Layout(props: { children: React.ReactNode }) {
  return <MarketingLayout>{props.children}</MarketingLayout>
}
