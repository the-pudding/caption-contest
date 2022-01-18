<script>
  import { setContext } from "svelte";
  import Intro from "$components/Intro.svelte";
  import Archive from "$components/Archive.svelte";
  import About from "$components/About.svelte";
  import Reflection from "$components/Reflection.svelte";

  import Footer from "$components/Footer.svelte";
  import copy from "$data/doc.json";

  const themeCount = 4;

  setContext("app", { themeCount });

  const contests = copy.contest.map((d, i) => ({
    ...d,
    attempt: copy.contest.length - i
  }));

  const archiveData = contests.slice(1).map((d) => ({
    attempt: d.attempt,
    slug: d.slug,
    title: d.title,
    date: d.date
  }));

  const latest = contests[0];
  const theme = +latest.attempt % themeCount;
</script>

<Intro />
<Reflection />

<div class="c" style="--theme: var(--theme-{theme});">
  <Archive data={archiveData} />
  <About tldr={copy.aboutTldr} full={copy.about} credits={copy.credits} />
  <Footer />
</div>

<style>
  .c {
    background-color: var(--base-black);
    color: var(--base-white);
  }

  :global(.c p a) {
    color: currentColor;
  }

  :global(.c summary) {
    color: var(--base-black);
  }
</style>
