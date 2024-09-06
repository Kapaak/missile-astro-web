<script lang="ts">
  import Button from "@styles/svelte/Button.svelte";
  import Text from "@styles/svelte/Text.svelte";

  export let price: number;
  export let lecturesNumber: number;
  export let descriptions: string[];

  import { formatLocalePrice } from "@utils/format";

  // $: totalPrice = formatLocalePrice(price);

  $: title =
    lecturesNumber < 5 ? `${lecturesNumber} lekce` : `${lecturesNumber} lekcí`;

  $: pricePerLecture = Math.floor(price / lecturesNumber);
</script>

<div
  class="flex flex-col flex-1 gap-5 border border-grey-200 px-[2.4rem] py-[2.6rem] lg:min-h-[40rem] xl:min-h-[45rem]"
>
  <p class=" text-secondary text-3xl">{title}</p>
  <div>
    <Text class="text-3xl">{pricePerLecture} Kč / lekci</Text>
  </div>

  <ul class="ml-6">
    {#each descriptions as description}
      <li class="list-image-[url(/public/completed.png)]">
        <Text class="ml-1">{description}</Text>
      </li>
    {/each}
  </ul>

  <a href="/contact" class="mt-auto">
    <Button
      class="w-full text-base font-medium text-grey-200 bg-tetriary border-tetriary hover:bg-tetriary-hover hover:border-tetriary-hover py-[1.2rem]"
    >
      Mám zájem
    </Button></a
  >
</div>
