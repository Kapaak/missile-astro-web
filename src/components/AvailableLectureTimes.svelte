<script lang="ts">
  import { onMount } from "svelte";
  import { lectureLengthId, selectedTime } from "@global/stores";

  const updatelectureTime = (value: string, index: number) => {
    lectureLengthId.set(index);
    selectedTime.set(value);
  };

  export let times: string[];

  onMount(() => {
    if (!$selectedTime && times.length > 0) {
      selectedTime.set(times[0]);
    }
  });

  let selectedLength: string;
  selectedTime.subscribe((value) => {
    selectedLength = times[$lectureLengthId];
  });

  $: isSelected = (lectureLength: string) => {
    return selectedLength === lectureLength
      ? "border-secondary z-0"
      : "border-[#3F529E]";
  };
</script>

<div class="flex">
  {#each times as option, index}
    <button
      on:click={() => updatelectureTime(option, index)}
      class={`border-2 py-[.6rem] px-[.9rem] flex-1 lg:w-[15rem] mx-[-.1rem] text-white ${isSelected(option)}`}
    >
      {option} min
    </button>
  {/each}
</div>
