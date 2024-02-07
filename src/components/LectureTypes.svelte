<script lang="ts">
  import { clsx } from "clsx";

  import { lectureType } from "../global/stores.ts";

  const updateLectureType = (value: string) => {
    $lectureType = value;
  };

  $: isSelected = (type: string) => {
    return $lectureType === type
      ? "text-secondary border-secondary z-10 "
      : "text-white border-[#3F529E]";
  };
</script>

<div class="flex">
  <button
    on:click={() => updateLectureType("individual")}
    class={clsx(
      "border-2 py-[.6rem] px-[.9rem] flex-1",
      isSelected("individual")
    )}>individuální</button
  >
  <button
    on:click={() => updateLectureType("group")}
    class={clsx(
      "border-2 mx-[-.2rem] py-[.6rem] px-[.9rem] flex-1",
      isSelected("group")
    )}>skupinové</button
  >
  <button
    on:click={() => updateLectureType("firm")}
    class={clsx("border-2 py-[.6rem] px-[.9rem] flex-1", isSelected("firm"))}
    >firemní</button
  >
</div>
