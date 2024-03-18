<script lang="ts">
  import { page } from "$app/stores";

  const greetings = {
    en: "Hello!",
    es: "Holda!",
    fr: "Bonjour!",
  };

  // Assign default lang 
  const { lang = 'en' } = $page.params;
  const greeting: string = greetings[lang];
</script>

<h1>{greeting}</h1>
