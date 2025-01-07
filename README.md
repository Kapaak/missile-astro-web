# Petr Walach - Portfolio
Website for english teacher Petr Walach.

This website consists of frontend created in ```Astro.js```, ```Svelte``` and headless CMS in ```Sanity.io```.

> Repository for the CMS is located [here](https://github.com/Kapaak/missile-sanity)

## 🚀 Project Structure

```text
├── public
├── src/
│   ├── assets
│   ├── components
│   ├── global
│   ├── layouts
│   ├── pages
│   ├── sanity
│   ├── styles
│   ├── ui/
│       └── astro
│       └── svelte
│   ├── utils
└── package.json
```

## 👾 Styling
All styling is done with ```Tailwindjs```. There are some default styles written in .css -> ```src/styles/base.css``` for initial setup. This .css file is imported in ```Layout.astro```.

## 🥗 Components
There are 2 types of components, first of them are without logic (located in ```src/styles/...```) and the rest are some reusable components with logic (located in ```src/components/...```).

Some components are made in Svelte (The reason is that in ```Svelte``` files you cant use Astro components).

## ☄️ Auto Deploy
>[Sanity vercel webhooks](https://www.lauraricher.co.uk/blog/deploy-sanity-studio-changes-with-vercel/)

We are using Sanity headless CMS on every page for very little things but this made the page quite slow. To fix this I created "deploy hook" in
Vercel and pasted the URL into Sanity -> API -> Webhooks. This way I dont need to use SSR, everytime I publish change the hook makes a new build.

## 📩 Sending emails
We use ```EmailJS``` library for sending emails on client-side.

There are 3 ways to send an email

1. client-side with `import emailjs from "@emailjs/browser"`

- this is the main selling point of this library, can send email directly from client

2. server-side with `import emailjs from "@emailjs/nodejs"`

- alternative for server-side email sending
- needs to be allowed in account -> security -> API Settings

3. REST https://api.emailjs.com/api/v1.0/email/send

- good way of sending email without any dependency


## 💡 Start the development
- Use yarn package manager.
- Development is in port 4321 and start it by typing ```yarn dev```.

## ❗️ Things to keep in mind
- Sharp error fixed: yarn add sharp --ignore-engines. I tried higher version but didnt work so stick with `"sharp": "^0.32.1"` for the moment.
- To add new a package we need to delete node_modules - this is due to sharp problem mentioned above.
- Due to page transitions I need to listen to astro:page-load event, so that on page redirects the eventListeners are newly setup.
- Dont forget to prefix the API file with `export const prerender = false`, else it would throw error 405 (Astro REST API).
