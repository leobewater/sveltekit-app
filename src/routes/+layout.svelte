<script>
  import "../app.css";
  import Footer from '../components/Footer.svelte';
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
</nav>
<slot />
<Footer />
