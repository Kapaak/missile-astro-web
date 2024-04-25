<script lang="ts">
  import { clsx } from "clsx";

  import type { SanityPricingLength } from "@sanity/types";

  import { lectureLengthId } from "@global/stores";

  const updatelectureTime = (value: number) => {
    $lectureLengthId = value;
  };

  export let lengthOptions: SanityPricingLength[];

  $: selectedLength = lengthOptions[$lectureLengthId]?.title;

  $: isSelected = (lectureLength: number) => {
    return selectedLength === lectureLength
      ? "border-secondary z-0"
      : "border-[#3F529E]";
  };
</script>

<div class="flex">
  {#each lengthOptions as option, index}
    <button
      on:click={() => updatelectureTime(index)}
      class={clsx(
        "border-2 py-[.6rem] px-[.9rem] flex-1 lg:w-[15rem] mx-[-.1rem] text-white",
        isSelected(option?.title)
      )}>{option?.title} min</button
    >
  {/each}
</div>
