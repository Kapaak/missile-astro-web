import type { APIRoute } from "astro";

import emailjs from "@emailjs/nodejs";

export const prerender = false;
export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request?.formData();

    const templateParams = {
      to_name: "walach.english@gmail.com",
      from_name: formData.get("email"),
      subject: `Přihláška na kurz Angličtiny od ${formData.get(
        "firstName"
      )} ${formData.get("lastName")}`,
      message: formData.get("text"),
    };
    emailjs.init({
      publicKey: import.meta.env.EMAILJS_API_PUBLIC_KEY,
      privateKey: import.meta.env.EMAILJS_API_PRIVATE_KEY,
    });

    await emailjs
      .send(
        import.meta.env.EMAILJS_SERVICE_ID,
        import.meta.env.EMAILJS_TEMPLATE_ID,
        templateParams
      )
      .then(
        function () {
          return new Response(null, { status: 200 });
        },
        function (error) {
          console.log(error);
          return new Response(error.message, { status: 404 });
        }
      );
  } catch (e) {
    return new Response("Failed to get form data", {
      status: 400,
      statusText: "Bad Request",
    });
  }

  return new Response(null, {
    status: 200,
  });
};

export const GET: APIRoute = async ({ request }) => {
  return new Response("HEEEy", {
    status: 200,
  });
};
