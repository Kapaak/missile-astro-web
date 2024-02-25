<script lang="ts">
  import toast from "svelte-french-toast";
  import axios from "axios";

  let responseMessage: string | null;

  async function submit(e: SubmitEvent) {
    responseMessage = "Odesílám...";
    let formElement = e.currentTarget as HTMLFormElement;

    const formData = new FormData(formElement);

    try {
      const response = axios.postForm("/api/mail.json", formData);

      if ((await response).status !== 200) {
        throw new Error("Něco se pokazilo!");
      }

      toast.success("Odesláno!", {
        duration: 3000,
      });

      formElement.reset();
    } catch (error) {
      toast.error("Něco se pokazilo!", {
        duration: 3000,
      });
    } finally {
      responseMessage = null;
    }
  }
</script>

<form
  class="flex flex-col gap-[2rem] lg:flex-[1_1_60%] lg:max-w-[70rem]"
  on:submit|preventDefault={submit}
>
  <div class="flex flex-col gap-[1rem]">
    <label for="firstName" class="text-grey-400 text-sm ml-2">Jméno</label>
    <input
      type="text"
      required
      name="firstName"
      class="py-3 px-2 bg-tetriary text-grey-200"
    />
    <label for="lastName" class="text-grey-400 text-sm ml-2">Příjmení</label>
    <input
      type="text"
      required
      name="lastName"
      class="py-3 px-2 bg-tetriary text-grey-200"
    />
    <label for="email" class="text-grey-400 text-sm ml-2">E-mail</label>
    <input
      type="email"
      required
      name="email"
      class="py-3 px-2 bg-tetriary text-grey-200"
    />
    <label for="text" class="text-grey-400 text-sm ml-2">Text</label>
    <textarea
      name="text"
      id="text"
      cols="30"
      rows="10"
      class="py-3 px-2 bg-tetriary text-grey-200"
    />
  </div>
  <button
    type="submit"
    class="font-medium py-[1.2rem] px-[4.3rem] transition-all duration-200 bg-secondary border-2 border-secondary text-white hover:bg-secondary-hover hover:border-secondary-hover lg:self-end"
    >{responseMessage ?? "Odeslat dotaz"}</button
  >
</form>
