<script>
  import "../app.css";
  import Header from './header.svelte';
  import Footer from './footer.svelte';
  import { goto, beforeNavigate, afterNavigate } from "$app/navigation";

  const handleClick = () => {
    console.log("Placing your order");
    // Replace the current history state instead of adding a new state
    // goto("/products", { replaceState: true });
    goto("/products");
  };

  // good to show and hide loading spinner
  beforeNavigate((navigation) => {
    console.log({ before: navigation });
  });
  afterNavigate((navigation) => {
    console.log({ after: navigation });
  });
</script>

<nav class="p-3 bg-green-400 mb-2 space-x-4 font-semibold">
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/profile">Profile</a>
  <a href="/blog">Blog</a>
  <a href="/products">Products</a>
  <a href="/products/1/reviews/200">Products Review</a>
  <a href="/docs">Docs</a>
  <a href="/docs/feature1/concept1/example1">Docs with ...slug</a>
  <a href="/marketing/">Marketing(optional param)</a>
  <a href="/marketing/fr">Marketing(Fr)</a>
</nav>
<button on:click={handleClick}>Place Order</button>

<Header />
<slot />
<Footer />

