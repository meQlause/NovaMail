export type TagColor = 'blue' | 'green' | 'amber' | 'red'

export interface EmailTag {
  label: string
  color: TagColor
}

export interface Email {
  id: string
  sender: string
  senderInitials: string
  senderAvatarGradient: string
  senderEmail: string
  subject: string
  preview: string
  time: string
  isUnread: boolean
  isStarred: boolean
  tags: EmailTag[]
  body?: string
  attachments?: Attachment[]
}

export interface Attachment {
  id: string
  name: string
  size: string
  type: 'figma' | 'pdf' | 'zip' | 'img' | 'doc'
}

export interface NavItem {
  id: string
  label: string
  count?: number
  isActive?: boolean
}

export const MOCK_EMAILS: Email[] = [
  {
    id: '1',
    sender: 'Sarah Chen',
    senderInitials: 'SC',
    senderAvatarGradient: 'linear-gradient(135deg, #9bb5ff, #63b3ed)',
    senderEmail: 'sarah.chen@designstudio.co',
    subject: 'Q4 Design System Review — Final Assets & Export Bundle',
    preview: 'Hey Alex, hope you\'re having a great Thursday! I\'m finally wrapping up the Q4 design system review...',
    time: '10:42 AM',
    isUnread: true,
    isStarred: false,
    tags: [{ label: 'Design', color: 'blue' }, { label: 'Urgent', color: 'red' }],
    body: `<p>Hey Alex,</p>
<p>Hope you're having a great Thursday! I'm finally wrapping up the Q4 design system review and wanted to get the final exports to you before our sync tomorrow morning.</p>
<p>I've attached the full <strong>Figma component library export</strong> (v4.2.0) along with the zipped asset bundle containing all icon sets, illustrations, and the updated typography specimens. Everything has been tested across the documented breakpoints and the new dark-mode tokens are now fully aligned with the engineering spec Tomasz shared last week.</p>
<p>A few things worth noting before you dive in:</p>
<p><strong>1. Button variants</strong> — We added a new <code>ghost-danger</code> variant after the review flagged missing destructive action states. It's documented on page 14 of the Figma file under "Interactive Components → Buttons."</p>
<p><strong>2. Color tokens</strong> — Three legacy tokens have been deprecated and replaced. The mapping table is included in the PDF, and the engineering ticket (#DEV-2041) has been updated with migration notes.</p>
<p><strong>3. Iconography</strong> — We sourced 24 new icons for the data visualization module. All new icons follow the 24×24 grid with 1.5px stroke weight, consistent with the existing library.</p>
<p>Let me know if anything looks off or if you need alternate export formats. I'll be online until around 7 PM CET today. Otherwise, see you tomorrow at 10!</p>
<p>Cheers,<br /><strong>Sarah Chen</strong><br />Lead Product Designer · DesignStudio.co</p>`,
    attachments: [
      { id: 'a1', name: 'DS_v4.2.0_Export.fig', size: '18.4 MB', type: 'figma' },
      { id: 'a2', name: 'Q4_Review_Changelog.pdf', size: '2.1 MB', type: 'pdf' },
      { id: 'a3', name: 'Assets_Bundle_Q4.zip', size: '64.8 MB', type: 'zip' },
    ],
  },
  {
    id: '2',
    sender: 'Marcus Webb',
    senderInitials: 'MW',
    senderAvatarGradient: 'linear-gradient(135deg, #f6ad55, #ed8936)',
    senderEmail: 'marcus@techventures.io',
    subject: 'Re: Partnership Proposal — NovaMail Integration',
    preview: 'Thanks for the detailed write-up. We reviewed the scope internally and have a few questions about the API rate limits...',
    time: '9:15 AM',
    isUnread: true,
    isStarred: true,
    tags: [{ label: 'Business', color: 'amber' }],
  },
  {
    id: '3',
    sender: 'Lena Kovač',
    senderInitials: 'LK',
    senderAvatarGradient: 'linear-gradient(135deg, #68d391, #48bb78)',
    senderEmail: 'lena.kovac@product.io',
    subject: 'Sprint 42 Retrospective Notes',
    preview: 'Hey team, attaching the retrospective notes from today\'s session. Great work everyone on hitting the milestone...',
    time: 'Yesterday',
    isUnread: false,
    isStarred: false,
    tags: [{ label: 'Work', color: 'blue' }, { label: 'Team', color: 'green' }],
  },
  {
    id: '4',
    sender: 'NovaMail Team',
    senderInitials: 'NM',
    senderAvatarGradient: 'linear-gradient(135deg, #63b3ed, #3a7bd5)',
    senderEmail: 'hello@novamail.io',
    subject: 'Your NovaMail Pro trial is active',
    preview: 'Welcome to NovaMail Pro! Your 30-day trial started today. Here\'s everything you unlock...',
    time: 'Yesterday',
    isUnread: false,
    isStarred: false,
    tags: [{ label: 'NovaMail', color: 'blue' }],
  },
  {
    id: '5',
    sender: 'Tomasz Wierzbicki',
    senderInitials: 'TW',
    senderAvatarGradient: 'linear-gradient(135deg, #b794f4, #9f7aea)',
    senderEmail: 'tomasz@engineering.co',
    subject: 'DEV-2041 — Token migration complete, staging up',
    preview: 'Hey, just pushed the token migration to staging. Loom walkthrough linked below. Let me know if you spot regressions...',
    time: 'Nov 14',
    isUnread: false,
    isStarred: false,
    tags: [{ label: 'Engineering', color: 'green' }],
  },
  {
    id: '6',
    sender: 'Mia Tanaka',
    senderInitials: 'MT',
    senderAvatarGradient: 'linear-gradient(135deg, #fc8181, #f56565)',
    senderEmail: 'mia.tanaka@ux.studio',
    subject: 'UX Review Notes — Onboarding Flow v3',
    preview: 'Hi, here are my notes from yesterday\'s review session. Overall the flow feels cleaner, but there are a few friction points...',
    time: 'Nov 13',
    isUnread: false,
    isStarred: false,
    tags: [{ label: 'Work', color: 'blue' }],
  },
]

export const SIDEBAR_MAIN_NAV: NavItem[] = [
  { id: 'inbox', label: 'Inbox', count: 3, isActive: true },
  { id: 'starred', label: 'Starred', count: 1 },
  { id: 'sent', label: 'Sent' },
  { id: 'drafts', label: 'Drafts', count: 2 },
  { id: 'scheduled', label: 'Scheduled' },
  { id: 'spam', label: 'Spam' },
  { id: 'trash', label: 'Trash' },
]

export const SIDEBAR_LABELS: NavItem[] = [
  { id: 'work', label: 'Work' },
  { id: 'design', label: 'Design' },
  { id: 'engineering', label: 'Engineering' },
  { id: 'business', label: 'Business' },
]
