# Models

## User

```sql
User {
  id: string
  name: string
  email: string (unique)
  password: string

  role: "APPLICANT" | "INSTITUTION_MANAGER" | "PLATFORM_ADMIN"

  createdAt: Date
  updatedAt: Date
}
```

## University

```sql
University {
  id: string
  name: string
  bio: string

  location: string
  address: string

  images: string[]   // URLs
  benefits: string[] // facilities, perks

  status: "PENDING" | "APPROVED" | "REJECTED"

  createdBy: string // User (Institution Manager)

  createdAt: Date
  updatedAt: Date
}
```

## Program

```sql
Program {
  id: string
  title: string
  description: string

  duration: string
  degree: string // e.g. BS, MS

  universityId: string

  createdAt: Date
  updatedAt: Date
}
```

## Scholarship

```sql
Scholarship {
  id: string
  title: string
  description: string

  amount?: string
  eligibility?: string

  universityId: string

  createdAt: Date
}
```

## Application

```sql
Application {
  id: string

  applicantId: string
  programId: string
  universityId: string

  status:
    "DRAFT" |
    "REVIEWED" |
    "APPROVED" |
    "REJECTED" |
    "WAITLISTED" |
    "WITHHELD"

  // --- Form Data (denormalized for MVP simplicity) ---
  personalInfo: JSON
  academicInfo: JSON

  submittedAt?: Date

  createdAt: Date
  updatedAt: Date
}
```

## Document (Optional but useful)

```sql
Document {
  id: string

  applicationId: string

  name: string
  fileUrl: string
  fileType: string

  createdAt: Date
}
```

## Application Log (for Timeline UI)

```sql
ApplicationLog {
  id: string

  applicationId: string
  status: string

  note?: string

  createdBy: string // User (usually Institution Manager)
  createdAt: Date
}
```

# Relationships (Mental Model)
- User (1) → (many) Universities
- University (1) → (many) Programs
- University (1) → (many) Scholarships
- Program (1) → (many) Applications
- User (Applicant) (1) → (many) Applications
- Application (1) → (many) Documents
- Application (1) → (many) Logs