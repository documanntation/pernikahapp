# Security Specification (security_spec.md)

This document outlines the security invariants, payload rules, and database specifications for the PernikahApp Firestore configuration.

## 1. Data Invariants

- **Resources**:
  - Readable by anyone (publicly accessible).
  - Mutable only by systems or administrators. For this app, public creation of resources is restricted, but public "likes" (incrementing the like field) is allowed.
  
- **User Submissions (Requests & Recommendations)**:
  - Readable by anyone so users can see existing suggestions and vote/add likes.
  - Creatable by anyone (including anonymous guests) so visitors don’t have to register to contribute.
  - Updatable by anyone ONLY for specific fields like incrementing `likes` or modifying fields of their own submissions if they want to edit them.

## 2. The "Dirty Dozen" Payloads

The following payloads attempt to violate security boundaries and must be blocked:

1. **Self-Appointed Role / Privilege Escalation**: Attempting to write a resource without admin permission.
2. **Resource Poisoning (Junk Field)**: Injected field `ghost_secret_key` with high storage size.
3. **Invalid URI Payload**: Creating a resource with an invalid URL.
4. **Negative Likes Counter**: Writing a negative number of likes.
5. **Too Long Title**: Title size of 2000 characters.
6. **No Description**: Missing required description field in submission.
7. **Identity Spoofing**: Setting `submittedBy` to a protected username like `admin_official`.
8. **Malicious ID injection**: Attempting to write with ID containing non-alphanumeric characters.
9. **Status Shortcutting**: Writing directly to "approved" or other non-permitted states if status field is added.
10. **Type Mismatch in likes**: Sending `likes: "one hundred"` (string) instead of number.
11. **Immutability Breach**: Attempting to alter the `createdAt` timestamp of a submission on update.
12. **Missing Category**: Creating a submission with an empty space or no category field.

## 3. Security Rules Outline (firestore.rules)

Our rules will enforce that only valid fields are sent, character size is bounded, and resource changes are restricted correctly.
