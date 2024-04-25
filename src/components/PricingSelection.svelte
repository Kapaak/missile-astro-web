<script lang="ts">
  import LectureTypes from "./LectureTypes.svelte";
  import LectureLength from "./LectureLength.svelte";
  import LecturePackage from "./LecturePackage.svelte";
  import { lectureOptionId, lectureLengthId } from "@global/stores";
  import type { SanityPricingOption } from "@sanity/types";
  import Text from "@styles/svelte/Text.svelte";

  export let pricingOptions: SanityPricingOption[];
  $: selectedOption = pricingOptions[$lectureOptionId]?.pricingLengths;
</script>

<div class="flex flex-col gap-[3.2rem]">
  <Text>Vyberte si preferovaný balíček a délku lekce:</Text>

  <div class="flex flex-col gap-5 lg:flex-row lg:gap-[3.2rem]">
    <LectureTypes />
    <LectureLength lengthOptions={selectedOption} />
  </div>

  <div class="flex flex-col gap-[3.2rem] lg:flex-row xl:gap-10">
    <LecturePackage
      lecturesNumber={selectedOption?.[$lectureLengthId]?.firstPackage
        ?.lectureCount}
      price={selectedOption?.[$lectureLengthId]?.firstPackage?.price}
      descriptions={selectedOption?.[$lectureLengthId]?.firstPackage
        ?.description}
    />
    <LecturePackage
      lecturesNumber={selectedOption?.[$lectureLengthId]?.secondPackage
        ?.lectureCount}
      price={selectedOption?.[$lectureLengthId]?.secondPackage?.price}
      descriptions={selectedOption?.[$lectureLengthId]?.secondPackage
        ?.description}
    />
    <LecturePackage
      lecturesNumber={selectedOption?.[$lectureLengthId]?.thirdPackage
        ?.lectureCount}
      price={selectedOption?.[$lectureLengthId]?.thirdPackage?.price}
      descriptions={selectedOption?.[$lectureLengthId]?.thirdPackage
        ?.description}
    />
  </div>
</div>
