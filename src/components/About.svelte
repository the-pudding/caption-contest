<script>
  export let tldr;
  export let full;
  export let credits;
</script>

<section>
  <div class="col">
    <h3>Why are we doing this?</h3>
    <p class="sm"><strong>TLDR:</strong> {tldr}</p>
    <details class="sm">
      <summary>And if you want, here’s the long version.</summary>
      <span>
        {#each full as { value }}
          <p>{@html value}</p>
        {/each}
      </span>
    </details>

    <div class="credits">
      <p class="sm">{@html credits}</p>
      <p class="sm">
        Want to see another experiment with GPT-3? Check out <a
          href="https://pudding.cool/2021/03/love-and-ai/">Nothing Breaks Like A.I. Heart</a
        >.
      </p>
    </div>
  </div>
</section>

<style>
  section {
    padding-bottom: 2em;
  }

  .credits {
    margin-top: 4rem;
    border-top: 1px solid var(--base-black-transparent);
  }

  h3 {
    margin-bottom: 1.5rem;
  }
</style>
