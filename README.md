# Email Provider Project

## 🎯 Project Overview

This project aims to create a complete email provider system similar to Gmail, built from scratch as a learning experience. The goal is to understand email infrastructure, protocols, and system architecture through hands-on implementation.

**⚠️ Important Note:** All keys, credentials, and sensitive information will be published in this repository. This project is for educational purposes only. **DO NOT use this email provider for any crucial or sensitive communications.**

## 🏗️ Project Architecture

Based on the provided architecture diagram, our email system follows the standard email flow:

### Email Sending Process (Left to Right)

```
Client (MUA) → SMTP Client (MSA) → SMTP Server (MTA & MDA)
```

1. **Client (MUA)** - Mail User Agent (email client)
2. **SMTP Client (MSA)** - Mail Submission Agent
3. **SMTP Server (MTA & MDA)** - Mail Transfer Agent & Mail Delivery Agent

### Email Receiving Process (Right Section)

```
Incoming Email → SMTP Server (MTA) → MDA → Client (via IMAP/POP3)
```

1. **SMTP Server** receives incoming emails
2. **MTA** (Mail Transfer Agent) processes the email
3. **MDA** (Mail Delivery Agent) stores the email
4. **Client** retrieves emails via IMAP or POP3 protocols

## 📚 How Email Works

### Key Components & Protocols

```
| Acronym  | Full Name                        | Purpose                                              |
| -------- | -------------------------------- | ---------------------------------------------------- |
| **MUA**  | Mail User Agent                  | Email client (Outlook, Thunderbird, web interface)   |
| **MSA**  | Mail Submission Agent            | Accepts emails from clients for submission           |
| **MTA**  | Mail Transfer Agent              | Routes emails between servers                        |
| **MDA**  | Mail Delivery Agent              | Stores emails in user mailboxes                      |
| **SMTP** | Simple Mail Transfer Protocol    | Protocol for sending emails                          |
| **LMTP** | Local Mail Transfer Protocol     | Protocol for local mail delivery                     |
| **IMAP** | Internet Message Access Protocol | Protocol for retrieving emails (keeps on server)     |
| **POP3** | Post Office Protocol Version 3   | Protocol for retrieving emails (downloads to client) |
```

[🔗 View Full Diagram on Boardmix](https://boardmix.com/app/editor/rPsYFIDdSR5Hl6RFpHbk1g?inviteCode=Xode1)

### Technology Stack

- **SMTP (MTA, MSA)**: Postfix
- **LMTP (MDA), IMAP, POP3**: Dovecot
- **Frontend (MUA)**: React
- **Backend**: Java (Spring)
- **Infrastructure**: VPS, Docker

## 🚀 Project Goals

### Learning Objectives

- Understand email protocols and infrastructure
- Implement DNS setup for email reputation
- Configure SMTP server with authentication
- Set up IMAP and POP3 support
- Build a complete email ecosystem

### Skills Development

- System administration
- Network protocols
- Security implementation
- Docker containerization
- DNS management

## 🎓 Target Audience

This project is designed for:

- **Harisenin Bootcamp Students**: Primary contributors and learners
- **Anyone interested in email infrastructure**: Open to all contributors
- **Portfolio builders**: Contributors can showcase their work on their portfolio

## 📋 Implementation Phases

### Phase 1: Infrastructure Setup

- [x] VPS provisioning
- [x] Docker environment setup
- [x] DNS configuration
- [x] SSL certificate setup

---

### Phase 2: SMTP Server Implementation

- [x] Postfix installation and configuration
- [x] DKIM signing setup
- [ ] SPF record configuration
- [ ] DMARC policy implementation

---

### Phase 3: Email Retrieval Setup

- [x] Dovecot installation
- [x] IMAP configuration
- [x] POP3 configuration
- [x] Mailbox structure setup

---

### Phase 4: Frontend Development

- [ ] Email client interface
- [ ] User authentication
- [ ] Email composition
- [ ] Email management features

---

### Phase 5: Backend Development

- [ ] User management API
- [ ] Email processing logic
- [ ] Security implementations
- [ ] Monitoring and logging

## ⚠️ Security Disclaimer

**CRITICAL**: This project is for educational purposes only. All credentials, keys, and sensitive information will be publicly available in this repository.

**DO NOT:**

- Use this email provider for sensitive communications
- Store personal or confidential information
- Use for production or business purposes
- Rely on this system for important emails

## 📖 Learning Resources

- [RFC 5321 - SMTP Protocol](https://tools.ietf.org/html/rfc5321)
- [RFC 3501 - IMAP Protocol](https://tools.ietf.org/html/rfc3501)
- [RFC 1939 - POP3 Protocol](https://tools.ietf.org/html/rfc1939)
- [Postfix Documentation](http://www.postfix.org/documentation.html)
- [Dovecot Documentation](https://doc.dovecot.org/)

### Join Discord Space

[🔗 Discord](https://discord.gg/fQrKDuYEQh)
All contributors Are Welcome!
