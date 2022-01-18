<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import Newsletter from "$components/Newsletter.svelte";
  export let slug;
  export let prompt = "";
  export let maxlength = 1000;

  const firebaseConfig = {
    apiKey: "AIzaSyBGOC8CbEAvm6WUSKfvj4_VPFa4zUuYy6k",
    authDomain: "new-yorker-da6db.firebaseapp.com",
    projectId: "new-yorker-da6db",
    databaseURL: "https://new-yorker-da6db-default-rtdb.firebaseio.com"
  };

  let firebase;
  let app;
  let db;
  let textareaValue;
  let submitted = false;

  const onSubmit = (e) => {
    e.preventDefault();
    submitted = true;
    db.ref(`${slug}/descriptions`)
      .push({ value: textareaValue })
      .then(() => {
        textareaValue = "";
      })
      .catch(console.log);
  };

  onMount(async () => {
    const module = await import("firebase/app");
    firebase = module.default;
    await import("@firebase/database");

    app = firebase.initializeApp(firebaseConfig);
    db = app.database();
  });
</script>

<div class="wrapper col">
  {#if submitted}
    <div class="thanks" in:fade>
      <h3>Thanks for submitting!</h3>
      <p class="sm">Stay updated: get notified when we have generated the caption.</p>
      <Newsletter />
    </div>
  {:else}
    <form>
      <div class="inner">
        <p>{prompt}</p>
        <textarea bind:value={textareaValue} rows="4" />
        <div class="below">
          <input {maxlength} type="submit" on:click={onSubmit} value="Submit" />
          <p class="max sm">{maxlength} character limit</p>
        </div>
      </div>
    </form>
  {/if}
</div>

<style>
  .wrapper {
    text-align: left;
    padding: 0;
    margin: 1em 0;
  }

  .inner > * {
    display: block;
  }

  textarea {
    width: 100%;
    resize: none;
    line-height: 1.4;
  }

  input {
    background-color: var(--base-off-black);
    color: var(--base-white);
    margin: 1em 0;
  }

  .below {
    display: flex;
    justify-content: space-between;
  }
</style>
