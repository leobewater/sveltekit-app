<script>
  export let index;
  export let productFeature;
</script>

<div
  class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-20 relative text-base"
>
  <div class="flex flex-col gap-8 md:gap-10">
    <h4
      class="text-2xl sm:text-3xl md:text-4xl max-w-[1000px] w-full font-medium relative pr-10 after:absolute after:top-full after:left-0 after:w-1/5 after:h-1.5 after:mt-1 after:bg-slate-900"
    >
      <slot />
    </h4>
    <p>{productFeature.description}</p>
    <div class="flex flex-col gap-3">
      {#each productFeature.featureList as listItem}
      
    </div>
  </div>
</div>
