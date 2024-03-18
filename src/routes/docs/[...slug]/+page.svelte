<script>
  import { page } from "$app/stores";

  // console.log($page.params.slug);
  const slugArr = $page.params.slug.split("/");
</script>

<div class="mb-10">
  Docs home page using [...slug] to catch all nested routes
</div>
{#if slugArr.length === 1}
  <h1>Viewing docs for feature {slugArr[0]}</h1>
{:else if slugArr.length === 2}
  <h1>Viewing docs for feature: {slugArr[0]} and concept: {slugArr[1]}</h1>
{:else if slugArr.length === 3}
  <h1>
    Viewing docs for feature: {slugArr[0]}, concept: {slugArr[1]}, example:{slugArr[2]}
  </h1>
{/if}
