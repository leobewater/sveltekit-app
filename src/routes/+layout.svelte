<script>
  import "../app.css";
  import Footer from '../components/Footer.svelte';
</script>
<nav class="p-3 bg-green-400 mb-2 space-x-4 font-semibold">
  <a href="/">Home</a>
  <a href="/about">About</a>
</nav>
<slot />
<Footer />



<!-- header
hero
product description
user reviews
faq
conversion-
footer -->
