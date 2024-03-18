<script>
  import SectionWrapper from "./SectionWrapper.svelte";
  let productFeatures = [];
</script>

<SectionWrapper id="product">
  <div
    class="flex flex-col gap-10 sm:gap-14 md:gap-24 flex-1 items-center justify-center pb-10 mb:pb-14"
  >
    <div class="flex flex-col gap-2">
      <p class="opacity-60 text-base sm:text-lg md:text-xl text-center">
        Start your lifetime <span class="text-indigo-400">gym streak</span> today
      </p>
      <h3 class="text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center">Features for Everyone</h3>
    </div>
      {#each productFeatures as productFeature}

      {/each}
  </div>
</SectionWrapper>
