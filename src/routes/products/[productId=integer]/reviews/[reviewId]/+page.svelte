<script>
  import { page } from "$app/stores";

  const { productId, reviewId } = $page.params;
</script>

<h1>Review id: {reviewId} for product ID: {productId}</h1>
