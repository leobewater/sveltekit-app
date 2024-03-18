<script lang="ts">
  import { page } from "$app/stores";

  const productId: string = $page.params.productId;
</script>

<h1>Details about product with ID: {productId}</h1>
