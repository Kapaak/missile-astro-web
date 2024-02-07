<script lang="ts">
  import { clsx } from "clsx";

  import { lectureLength } from "../global/stores.ts";

  const updatelectureTime = (value: string) => {
    $lectureLength = value;
  };

  $: isSelected = (type: string) => {
    return $lectureLength === type
      ? "text-secondary border-secondary z-10 "
      : "text-white border-[#3F529E]";
  };
</script>

<div class="flex">
  <button
    on:click={() => updatelectureTime("60")}
    class={clsx("border-2 py-[.6rem] px-[.9rem] flex-1", isSelected("60"))}
    >60 min</button
  >
  <button
    on:click={() => updatelectureTime("90")}
    class={clsx(
      "border-2 mx-[-.2rem] py-[.6rem] px-[.9rem] flex-1",
      isSelected("90")
    )}>90 min</button
  >
</div>
