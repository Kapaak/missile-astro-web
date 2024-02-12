<script lang="ts">
  import LectureTypes from "./LectureTypes.svelte";
  import LectureLength from "./LectureLength.svelte";
  import LecturePackage from "./LecturePackage.svelte";

  export let pricingOptions: any[];
  console.log("🚀 ~ pricingOptions22:", pricingOptions);
</script>

<div class="flex flex-col gap-5">
  <p class="text-base text-grey-200 font-medium">
    Vyberte si preferovaný balíček a délku lekce:
  </p>

  <LectureTypes />
  <LectureLength />

  {#each pricingOptions as pricingOption}
    <LecturePackage
      lecturesNumber={1}
      price={1000}
      descriptions={[
        pricingOption?.name,
        "online",
        "seznam zdrojů a aplikací pro samostudium",
      ]}
    />{/each}
</div>
