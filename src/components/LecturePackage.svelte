<script lang="ts">
  export let price: number;
  export let lecturesNumber: number;
  export let descriptions: string[];

  import { formatLocalePrice } from "@utils/format";

  const totalPrice = formatLocalePrice(price);

  const title =
    lecturesNumber < 3 ? `${lecturesNumber} lekce` : `${lecturesNumber} lekcí`;

  const pricePerLecture = formatLocalePrice(price / lecturesNumber);
</script>

<div class="flex flex-col gap-5 border border-grey-200 px-[2.4rem] py-[2.6rem]">
  <p class="text-base text-grey-200 font-medium">balíček</p>
  <p class=" text-secondary text-3xl">{title}</p>
  <div>
    <p class="text-grey-200 font-medium text-3xl">{totalPrice}</p>
    <p class="text-grey-200 font-medium">{pricePerLecture} / lekci</p>
  </div>

  <ul class="ml-6">
    {#each descriptions as description}
      <li class="list-image-[url(src/assets/completed.png)]">
        <p class="text-base text-grey-200 font-medium ml-1">{description}</p>
      </li>
    {/each}
  </ul>

  <button class="text-base font-medium text-grey-200 bg-tetriary py-[1.2rem]"
    >Mám zájem</button
  >
</div>
