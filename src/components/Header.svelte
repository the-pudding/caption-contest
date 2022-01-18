<script>
  import wordmark from "$svg/wordmark.svg";
</script>

<header>
  <div class="col">
    <div class="wordmark">
      <a href="https://pudding.cool" aria-label="The Pudding">{@html wordmark}</a>
    </div>
  </div>
</header>

<style>
  header {
    background-color: var(--base-off-black);
  }

  p {
    font-size: 1.2rem;
  }

  .wordmark {
    max-width: 8em;
    padding: 0;
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

  .wordmark a {
    border: none;
    color: var(--base-gray-medium);
  }

  .wordmark a:hover {
    background-color: transparent;
  }

  :global(.wordmark svg path) {
    fill: currentColor;
  }
</style>
