<script context="module">
  export const prerender = true;
</script>

<script>
  import Meta from "$components/Meta.svelte";
  import App from "$components/App.svelte";
  import copy from "$data/doc.json";
</script>

<Meta title={"Using an A.I. program to win the New Yorker cartoon caption contest"} description={"This is how close we got to getting the New Yorker to accept an AI-generated caption."} url="https://pudding.cool/projects/caption-contest" />
<App />
