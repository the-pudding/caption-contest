<script>
  import IsThisFunny from "$components/IsThisFunny.svelte";
  import Submit from "$components/Submit.svelte";
  export let slug;
  export let date;
  export let hed;
  export let dek;
  export let image;
  export let author;
  export let submission;
  export let explanation;
  export let widgetName;
  export let widgetData;
  export let widgetMax;
</script>

<section id="contest">
  <div class="col">
    <div class="info">
      <p>{@html hed}</p>
      <p class="sm">{@html dek}</p>
      <details class="sm">
        <summary>
          <span>For the tech-nerds, here is how it works.</span>
        </summary>
        <span
          >{#each explanation as { type, value }}
            <p>{@html value.replace("\\:", ":")}</p>
          {/each}</span
        >
      </details>
    </div>

    <div class="prompt">
      {#if widgetName === "IsThisFunny"}
        <h2>Help the computer submit its best caption to this week’s contest.</h2>
      {:else}
        <!-- <h2>Help the computer understand what is in this week’s image.</h2> -->
        <h2>Here is this week’s image.</h2>
      {/if}
      <figure>
        <figcaption class="sm">
          <a href="https://www.newyorker.com/cartoons/contest">#{slug}</a>: Here is the cartoon for
          {date} by {author}
        </figcaption>
        <img src={image} alt="captionless cartoon by {author}" />
      </figure>
      {#if widgetName === "IsThisFunny"}
        <IsThisFunny {slug} data={widgetData} />
      {:else if widgetName === "Submit"}
        <Submit {slug} prompt={widgetData} maxlength={widgetMax} />
      {:else}
        <p style="margin-top: 1em;">Our Submission: <strong>{submission}</strong></p>
      {/if}
    </div>
  </div>
</section>

<style>
  section {
    padding: 1em 0;
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .prompt {
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
</style>
