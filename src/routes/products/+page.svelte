<script>
  // Props
  export let productId = 100;
</script>

<h1>Product List</h1>
<h2>Product 1</h2>
<h2>Product 2</h2>
<h2><a href="/products/3">Product 3</a></h2>
<h2><a href={`/products/${productId}`}>Product 100</a></h2>
