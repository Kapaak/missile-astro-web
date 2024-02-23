<script lang="ts">
  import LectureTypes from "./LectureTypes.svelte";
  import LectureLength from "./LectureLength.svelte";
  import LecturePackage from "./LecturePackage.svelte";
  import { lectureOptionId, lectureLengthId } from "@global/stores";
  import type { SanityPricingOption } from "@sanity/types";

  export let pricingOptions: SanityPricingOption[];
  $: selectedOption = pricingOptions[$lectureOptionId];
</script>

<div class="flex flex-col gap-[3.2rem]">
  <p class="text-base text-grey-200 font-medium">
    Vyberte si preferovaný balíček a délku lekce:
  </p>

  <div class="flex flex-col gap-5 lg:flex-row lg:gap-[3.2rem]">
    <LectureTypes />
    <LectureLength lengthOptions={selectedOption?.pricingLengths} />
  </div>

  <div class="flex flex-col gap-[3.2rem] lg:flex-row xl:gap-10">
    <LecturePackage
      lecturesNumber={selectedOption?.pricingLengths?.[$lectureLengthId]
        ?.firstPackage?.lectureCount}
      price={selectedOption?.pricingLengths?.[$lectureLengthId]?.firstPackage
        ?.price}
      descriptions={selectedOption?.pricingLengths?.[$lectureLengthId]
        ?.firstPackage?.description}
    />
    <LecturePackage
      lecturesNumber={selectedOption?.pricingLengths?.[$lectureLengthId]
        ?.secondPackage?.lectureCount}
      price={selectedOption?.pricingLengths?.[$lectureLengthId]?.secondPackage
        ?.price}
      descriptions={selectedOption?.pricingLengths?.[$lectureLengthId]
        ?.secondPackage?.description}
    />
    <LecturePackage
      lecturesNumber={selectedOption?.pricingLengths?.[$lectureLengthId]
        ?.thirdPackage?.lectureCount}
      price={selectedOption?.pricingLengths?.[$lectureLengthId]?.thirdPackage
        ?.price}
      descriptions={selectedOption?.pricingLengths?.[$lectureLengthId]
        ?.thirdPackage?.description}
    />
  </div>
</div>
