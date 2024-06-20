<script lang="ts">
  import { clsx } from "clsx";

  import { selectedCourseSlug } from "@global/stores";
  import type { SanityCourse } from "@sanity/types";
  import { onMount } from "svelte";

  export let courses: SanityCourse[];

  const updateLectureType = (value?: string) => {
    if (!value) return;

    $selectedCourseSlug = value;
  };

  $: isSelected = (courseSlug?: string) => {
    return $selectedCourseSlug === courseSlug
      ? "border-secondary z-0"
      : "border-[#3F529E]";
  };

  onMount(() => {
    if (!$selectedCourseSlug && courses.length > 0) {
      $selectedCourseSlug = courses[0]?.slug ?? "";
    }
  });
</script>

<div class="flex">
  {#each courses as course}
    <button
      on:click={() => updateLectureType(course?.slug)}
      class={clsx(
        "border-2 text-white py-[.6rem] px-[.9rem] flex-1 lg:w-[15rem]",
        isSelected(course?.slug)
      )}>{course?.name}</button
    >
  {/each}
</div>
