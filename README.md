# online-admissions-system

## Key Flow
- Institution Manager → creates university + programs
- Platform Admin → approves listing
- Applicant → browses → applies to program
- Institution Manager → reviews → updates status
- Applicant → tracks status

## Pages

### Required

### Public / Applicant

- Landing
- Login / Register
- University Listing (browse)
- University Detail (with programs)
- Application Form (stepper)
- Application Status
- Simple search/filter (universities)
- Scholarship display on university page
- Timeline UI for status

### Institution Manager

- Dashboard (basic stats optional)
- University Setup (onboarding)
- Program Management
- Applications List
- Application Detail

### Platform Admin

- University Approval List
- Basic Dashboard

## Features
### Applicant
- Register / Login
- Browse universities
- View university + programs
- Apply (multi-step form)
- Save draft
- Submit application
- View status timeline

### Institution Manager
- Create university listing
- Create programs
- Add scholarships (basic: title, description)
- View applications
- Update status: `DRAFT → REVIEWED → APPROVED / REJECTED / WAITLISTED / WITHHELD`
- Add internal notes

### Platform Admin
- Approve/reject university listings
- View all universities
- Basic moderation

## Data Models
- User
- University
- Program
- Scholarship
- Application
- Document (optional relation)
