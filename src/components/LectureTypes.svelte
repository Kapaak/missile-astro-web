<script lang="ts">
  import { clsx } from "clsx";

  import { lectureOptionId } from "@global/stores";

  const updateLectureType = (value: number) => {
    $lectureOptionId = value;
  };

  $: isSelected = (type: number) => {
    return $lectureOptionId === type
      ? "border-secondary z-0"
      : "border-[#3F529E]";
  };
</script>

<div class="flex">
  <button
    on:click={() => updateLectureType(0)}
    class={clsx(
      "border-2 text-white py-[.6rem] px-[.9rem] flex-1 lg:w-[15rem]",
      isSelected(0)
    )}>individuální</button
  >
  <button
    on:click={() => updateLectureType(1)}
    class={clsx(
      "border-2 text-white mx-[-.2rem] py-[.6rem] px-[.9rem] flex-1 lg:w-[15rem]",
      isSelected(1)
    )}>skupinové</button
  >
  <button
    on:click={() => updateLectureType(2)}
    class={clsx(
      "border-2 text-white  py-[.6rem] px-[.9rem] flex-1 lg:w-[15rem]",
      isSelected(2)
    )}>firemní</button
  >
</div>
