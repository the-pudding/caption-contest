<script context="module">
  import copy from "$data/doc.json";

  export const hydrate = false;

  export async function load({ params, fetch, session, context }) {
    const contests = copy.contest.map((d, i) => ({
      ...d,
      attempt: copy.contest.length - i
    }));
    const contest = contests.find((d) => d.slug === params.slug);

    if (contest) {
      return {
        props: {
          ...contest
        }
      };
    }

    return {
      status: 404,
      error: new Error(`Could not load ${url}`)
    };
  }
</script>

<script>
  import { base } from "$app/paths";
  import Header from "$components/Header.svelte";
  import Meta from "$components/Meta.svelte";
  export let slug;
  export let date;
  export let title;
  export let dek;
  export let image;
  export let attempt;
  export let author;
  export let explanation;
  export let submission;
  export let widgetData;
  export let widgetName;
  export let widgetResult;

  const themeCount = 4;
</script>

<Header />
<Meta
  title={`Attempt #${attempt}: ${title}`}
  url="https://pudding.cool/projects/caption-contest"
  description="Help a Computer Win the New Yorker Cartoon Caption Contest"
/>

<section style="--theme: var(--theme-{+attempt % themeCount});">
  <div class="info">
    <div class="col">
      <h1>Attempt #{attempt}: {title}</h1>
      <time>{date}</time>
      <p>{@html dek}</p>
      <a href="{base}/">Back to Project</a>
    </div>
  </div>

  <div class="col">
    <figure>
      <figcaption class="sm">
        <a href="https://www.newyorker.com/cartoons/contest">#{slug}</a>: Here is the cartoon for
        {date} by {author}
      </figcaption>
      <img src={image} alt="captionless cartoon by {author}" />
    </figure>

    <div class="submission">
      <p><strong>Our submission:</strong> {submission}</p>
      {#if widgetName === "IsThisFunny"}
        <details class="sm">
          <summary>
            <span>Check out all three generated captions.</span>
          </summary>
          <span>
            {#each widgetData as caption, i}
              <p><strong>{caption}</strong></p>
              <p class="result">{widgetResult[i]} of readers thought it was funny.</p>
            {/each}
          </span>
        </details>
      {/if}
    </div>

    <div class="explanation sm">
      <h2>About this approach</h2>
      {#each explanation as { value }}
        <p>{@html value.replace("\\:", ":")}</p>
      {/each}
      <p><a href="{base}/">Back to Project</a></p>
    </div>
  </div>
</section>

<style>
  section {
    background-color: var(--theme);
    padding-bottom: 2em;
  }

  .info {
    background-color: var(--base-off-black);
    color: var(--base-off-white);
    padding-bottom: 2em;
  }

  h1 {
    margin-top: 0;
  }

  h2 {
    margin-top: 2em;
  }

  figure {
    margin-top: 3em;
  }

  figure,
  img {
    width: 100%;
    display: block;
  }

  figcaption {
    line-height: 1.4;
    margin-bottom: 1em;
  }

  a {
    color: currentColor;
  }

  details p {
    margin: 0.5em 0;
  }

  .result {
    margin-bottom: 2em;
  }
</style>
