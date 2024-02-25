Sharp error fixed: yarn add sharp --ignore-engines
Sanity error with SRR fixed: sanityIntegration() in astro.config.mjs instead of sanity()

in order to add new package need to delete node_modules - this is due to sharp

Due to page transitions I need to listen to astro:page-load event, so that on page redirects
the eventListeners are newly setup

# EmailJS

- library for sending emails on client-side

There are 3 ways to send an email

1. client-side with `import emailjs from "@emailjs/browser"`

- this is the main selling point of this library, can send email directly from client

2. server-side with `import emailjs from "@emailjs/nodejs"`

- alternative for server-side email sending
- needs to be allowed in account -> security -> API Settings

3. REST https://api.emailjs.com/api/v1.0/email/send

- good way of sending email without any dependency
