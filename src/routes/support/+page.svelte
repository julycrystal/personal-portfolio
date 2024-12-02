<script lang="ts">
  import { fade, blur } from "svelte/transition"
  import { currentSection } from "$lib/stores"
  import { onMount } from "svelte"

  onMount(() => {
    currentSection.update(() => -1)
  })
</script>

<section
  in:fade
  out:blur
  class="flex justify-center items-center h-screen mx-10 md:mx-20 text-center"
>
  <div class="flex flex-col gap-2 mx-[10%]">
    <h1 class="text-3xl lg:text-4xl">💖 Support Me 💖</h1>
    <p class="text-left md:text-center">
      Thanks for stopping by. Your support helps keep my projects running and, yes, it even pays my
      server bills (and maybe a coffee or two)! Every little bit counts.
    </p>
  </div>
</section>

<style lang="scss">
  a:hover {
    text-decoration-line: underline;
  }
</style>
