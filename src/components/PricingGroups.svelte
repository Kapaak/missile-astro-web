<script lang="ts">
  import LectureTypes from "./LectureTypes.svelte";
  import AvailableLectureTimes from "./AvailableLectureTimes.svelte";
  import LecturePackage from "./LecturePackage.svelte";
  import { selectedCourseSlug, selectedTime } from "@global/stores";

  import type { SanityCourse, SanityLecture } from "@sanity/types";
  import Text from "@styles/svelte/Text.svelte";

  export let lectures: SanityLecture[];
  export let courses: SanityCourse[];

  $: selectedCourse = getSelectedLectureTime(
    $selectedTime,
    $selectedCourseSlug
  );

  function getSelectedLectureTime(time: string, course: string) {
    return lectures
      ?.filter(
        (lecture) => lecture.time === time && lecture.courseSlug === course
      )
      ?.sort((a, b) => (a.courseOrder ?? 0) - (b.courseOrder ?? 0));
  }
</script>

<div class="flex flex-col gap-[3.2rem]">
  <Text>Vyberte si preferovaný balíček a délku lekce:</Text>

  <div class="flex flex-col gap-5 lg:flex-row lg:gap-[3.2rem]">
    <LectureTypes {courses} />
    <AvailableLectureTimes times={["60", "90"]} />
  </div>

  <div class="flex flex-col gap-[3.2rem] lg:flex-row xl:gap-10">
    {#each selectedCourse as lecture}
      <LecturePackage
        lecturesNumber={lecture.count ?? 0}
        price={lecture.price ?? 0}
        descriptions={lecture.description ?? []}
      />
    {/each}
  </div>
</div>
