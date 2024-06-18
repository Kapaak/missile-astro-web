# Image processing in Sharp

Sharp error fixed: yarn add sharp --ignore-engines
Tried higher version but didnt work so stick with `"sharp": "^0.32.1"` for the moment.

in order to add new package need to delete node_modules - this is due to sharp

Due to page transitions I need to listen to astro:page-load event, so that on page redirects
the eventListeners are newly setup

# Auto Deploy

We are using Sanity headless CMS on every page for very little things but this made the page quite slow. To fix this I created "deploy hook" in
Vercel and pasted the URL into Sanity -> API -> Webhooks. This way I dont need to use SSR, everytime I publish change the hook makes a new build.
https://www.lauraricher.co.uk/blog/deploy-sanity-studio-changes-with-vercel/

# Astro REST API

- dont forget to prefix the API file with `export const prerender = false`, else it would throw error 405

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
