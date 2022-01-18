<script>
  import { getContext } from "svelte";
  import { base } from "$app/paths";

  export let data;

  const { themeCount } = getContext("app");
</script>

{#if data.length}
  <section id="archive">
    <div class="col">
      <h2>The Experiments</h2>
      <ul>
        {#each data as { slug, title, attempt, date }}
          <li style="--theme: var(--theme-{attempt % themeCount});">
            <a href="{base}/contest/{slug}">#{attempt}: {title} <span class="sm">{date}</span></a>
          </li>
        {/each}
      </ul>
    </div>
  </section>
{/if}

<style>
  section {
    margin-bottom: 2em;
    padding-top: 2rem;
  }

  li {
    list-style-type: none;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin: 0.25em 0;
  }

  li a {
    display: flex;
    background-color: var(--theme);
    text-decoration: none;
    padding: 1em;
    justify-content: space-between;
    align-items: center;
  }

  @media only screen and (max-width: 400px) {
    li a {
      font-size: 14px;
    }

    li span.sm {
      font-size: 14px;
    }
  }
</style>
