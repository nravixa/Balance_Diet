# Security Policy

## Supported Versions

We actively support and release security fixes for the current production release.

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |
| < 0.1.0 | :x:                |

---

## Reporting a Vulnerability

We take the security of **Balance Diet Pune** and our users' data very seriously. If you discover a security vulnerability, please report it responsibly:

1. **Do not disclose the vulnerability publicly** (e.g., via GitHub Issues, public social media, or public forums).
2. **Email the security team directly**:
   - Primary: `security@balancedietpune.com` (or the repository maintainer)
   - Subject line: `[SECURITY] Potential vulnerability in Balance Diet Pune`
3. **Include the following information in your report**:
   - Type of vulnerability (e.g., XSS, CSRF, sensitive data exposure, injection)
   - Step-by-step reproduction instructions or a minimal Proof of Concept (PoC)
   - Affected URLs, routes, or components
   - Impact assessment
   - Any suggested mitigations or patches

### Response Timeline
- **Acknowledgement**: Within 48 hours of receipt.
- **Triage & Status Update**: Within 5 business days.
- **Remediation & Patch**: Timeline agreed upon based on severity (typically 7–14 days for critical issues).
- **Public Disclosure**: Coordinated after the fix has been deployed to production.

---

## Security Best Practices for Contributors & Developers

1. **Never Commit Secrets**:
   - Environment variables containing secrets (`.env`, `.env.local`, API keys, private keys, database credentials) must never be committed.
   - Use `.env.example` as a template with sanitized placeholder values.
2. **Input Validation & Sanitization**:
   - Always validate and sanitize user inputs on the server using schema validation libraries (e.g., Zod).
   - Never trust client-supplied input alone.
3. **Dependency Auditing**:
   - Run `npm audit` regularly to detect vulnerabilities in dependencies.
   - Keep Next.js, React, and third-party packages updated to patched versions.
4. **Content Security & HTTP Headers**:
   - Maintain strict HTTP security headers in `next.config.ts` (HSTS, CSP, X-Frame-Options, X-Content-Type-Options).
   - Ensure external scripts and assets originate from trusted origins only.
5. **Data Protection & Privacy**:
   - Adhere to data privacy regulations (e.g., DPDP Act India) regarding patient or client health data, contact information, and dietary questionnaires.

