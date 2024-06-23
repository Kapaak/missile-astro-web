<script lang="ts">
  import toast, { Toaster } from "svelte-french-toast";
  import axios from "axios";

  import Label from "@styles/svelte/Label.svelte";
  import Input from "@styles/svelte/Input.svelte";
  import TextArea from "@styles/svelte/TextArea.svelte";
  import Button from "@styles/svelte/Button.svelte";

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

<Toaster position="bottom-right" />
<form
  class="flex flex-col gap-[2rem] lg:flex-[1_1_60%] lg:max-w-[70rem]"
  on:submit|preventDefault={submit}
>
  <div class="flex flex-col gap-[1rem]">
    <Label for="firstName" class="text-grey-400 ml-2">Jméno</Label>
    <Input type="text" required name="firstName" />
    <Label for="lastName" class="text-grey-400 ml-2">Příjmení</Label>
    <Input type="text" required name="lastName" />
    <Label for="email" class="text-grey-400 ml-2">E-mail</Label>
    <Input type="email" required name="email" />
    <Label for="text" class="text-grey-400 ml-2">Text</Label>
    <TextArea name="text" id="text" cols="30" rows="7" minlength="6" required />
  </div>
  <Button type="submit" class="lg:self-end"
    >{responseMessage ?? "Odeslat dotaz"}</Button
  >
</form>
