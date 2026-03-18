import { useState, useMemo } from 'react'
import { Sidebar } from '../components/Sidebar'
import { Navbar } from '../components/Navbar'
import { EmailList } from '../components/EmailList'
import { EmailContent } from '../components/EmailContent'
import { MOCK_EMAILS } from '../types/email'

export function DashboardPage() {
  const [activeNav, setActiveNav] = useState('inbox')
  const [selectedEmailId, setSelectedEmailId] = useState<string | null>(MOCK_EMAILS[0]?.id ?? null)
  const [searchValue, setSearchValue] = useState('')

  const filteredEmails = useMemo(() => {
    const q = searchValue.toLowerCase().trim()
    if (!q) return MOCK_EMAILS
    return MOCK_EMAILS.filter(
      (e) =>
        e.subject.toLowerCase().includes(q) ||
        e.sender.toLowerCase().includes(q) ||
        e.preview.toLowerCase().includes(q),
    )
  }, [searchValue])

  const selectedEmail = MOCK_EMAILS.find((e) => e.id === selectedEmailId) ?? null

  return (
    <div
      className="h-screen overflow-hidden"
      style={{
        display: 'grid',
        gridTemplateRows: '58px 1fr',
        gridTemplateColumns: '220px 320px 1fr',
        gridTemplateAreas: `
          "sidebar  navbar  navbar"
          "sidebar  list    content"
        `,
      }}
    >
      {/* Sidebar */}
      <div style={{ gridArea: 'sidebar', gridRow: '1 / 3' }}>
        <Sidebar activeNav={activeNav} onNavChange={setActiveNav} />
      </div>

      {/* Navbar */}
      <div style={{ gridArea: 'navbar' }}>
        <Navbar searchValue={searchValue} onSearchChange={setSearchValue} />
      </div>

      {/* Email list */}
      <div style={{ gridArea: 'list' }} className="overflow-hidden">
        <EmailList
          emails={filteredEmails}
          selectedId={selectedEmailId}
          onSelect={setSelectedEmailId}
          activeNav={activeNav}
        />
      </div>

      {/* Email content */}
      <div style={{ gridArea: 'content' }} className="overflow-hidden">
        <EmailContent email={selectedEmail} />
      </div>
    </div>
  )
}
