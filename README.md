# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

## Configuring the Contact Form

The contact form on the website is powered by a Next.js Server Action, which handles data submission and validation securely on the server.

### How it Works

1.  **Component**: The form is located at `src/components/contact.tsx`.
2.  **Validation**: The form fields are validated using Zod in `src/app/schemas.ts`.
3.  **Server Action**: The logic for handling the submission is in the `submitContactForm` function inside `src/app/actions.ts`.

### Making it Send Emails

Currently, the `submitContactForm` function only validates the data and logs it to the server console. To make it send real emails, you need to integrate an email delivery service.

Open the `src/app/actions.ts` file. You will find a commented-out section with an example of how to use a service like **Resend**.

**Example using Resend:**

```javascript
// src/app/actions.ts

// import { Resend } from 'resend';
// const resend = new Resend(process.env.RESEND_API_KEY);

// await resend.emails.send({
//   from: 'onboarding@resend.dev',
//   to: 'your-email@yourdomain.com',
//   subject: `New message from ${name}`,
//   html: `<p>You received a new contact message:</p>
//          <p><strong>Name:</strong> ${name}</p>
//          <p><strong>Email:</strong> ${email}</p>
//          <p><strong>Company:</strong> ${company || 'Not informed'}</p>
//          <p><strong>Message:</strong></p>
//          <p>${message}</p>`
// });
```

To enable it:

1.  Choose an email service (like [Resend](https://resend.com/), [SendGrid](https://sendgrid.com/), or [Nodemailer](https://nodemailer.com/)).
2.  Install their SDK (e.g., `npm install resend`).
3.  Uncomment and adapt the code in `src/app/actions.ts` to use your chosen service.
4.  Make sure to add any required API keys (like `RESEND_API_KEY`) to your environment variables.
