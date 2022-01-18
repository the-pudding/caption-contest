<script context="module">
  export const prerender = true;
</script>

<script>
  import Meta from "$components/Meta.svelte";
  import App from "$components/App.svelte";
  import copy from "$data/doc.json";
</script>

<Meta title={copy.hed} description={copy.dek} url="https://pudding.cool/projects/caption-contest" />
<App />
