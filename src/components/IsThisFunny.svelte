<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import shuffle from "$utils/shuffle.js";
  import ButtonSet from "$components/helpers/ButtonSet.svelte";
  import Newsletter from "$components/Newsletter.svelte";
  export let slug;
  export let data;

  let selected;
  let docMap = ["unfunny", "neutral", "funny"];
  let current = 0;

  const captions = data.map((text, id) => ({ text, id }));

  $: shuffle(captions);

  const firebaseConfig = {
    apiKey: "AIzaSyBGOC8CbEAvm6WUSKfvj4_VPFa4zUuYy6k",
    authDomain: "new-yorker-da6db.firebaseapp.com",
    projectId: "new-yorker-da6db"
  };

  let firebase;
  let app;
  let db;
  let ratingData = {};
  let status = "waiting";

  const fetchRatings = async () => {
    try {
      // this does once
      // await db
      //   .collection("ratings")
      //   .get()
      //   .then((snapshot) => {
      // this does realtime
      await db.collection(slug).onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          ratingData[doc.id] = doc.data();
        });
      });
      ratingData = ratingData;
    } catch (err) {
      console.log(err);
    }
  };

  const setDoc = (d) => {
    return new Promise((resolve, reject) => {
      db.collection(slug)
        .doc(`${d.id}`)
        .set({
          unfunny: 0,
          neutral: 0,
          funny: 0
        })
        .then(resolve)
        .catch(reject);
    });
  };

  const reset = async () => {
    status = "pending";
    for (let d of captions) {
      try {
        await setDoc(d);
      } catch (err) {
        console.log(err);
      }
    }
    status = "complete";
  };

  const onVote = () => {
    const { id } = captions[current];
    const doc = db.collection(slug).doc(`${id}`);
    const value = docMap[selected];
    doc.update({ [[value]]: firebase.firestore.FieldValue.increment(1) });
    selected = undefined;
    current += 1;
  };

  onMount(async () => {
    const module = await import("firebase/app");
    firebase = module.default;
    await import("firebase/firestore");

    if (!firebase.apps.length) {
      app = firebase.initializeApp(firebaseConfig);
      db = firebase.firestore(app);
      // fetchRatings();
    }
  });

  $: if (typeof selected === "number") onVote();
</script>

<div class="wrapper">
  {#if current < captions.length}
    <p class="counter sm">Caption {current + 1} of {captions.length}</p>
    {#key current}
      <div in:fade>
        <!-- <button class="btn" on:click={reset}>RESET</button> -->
        <p class="caption">{captions[current].text}</p>
        <p class="prompt sm">Is this AI-generated caption funny?</p>
        <div class="vote">
          <ButtonSet
            bind:value={selected}
            options={[
              { value: 0, label: "It stinks!", emoji: "😴" },
              { value: 1, label: "It’s okay...", emoji: "😐" },
              { value: 2, label: "It works!", emoji: "😂" }
            ]}
          />
        </div>
      </div>
    {/key}
  {:else}
    <div class="thanks" in:fade>
      <h3>Thanks for voting!</h3>
      <p class="sm">
        Stay updated: get notified when we have a new approach and captions to rate (weekly-ish).
      </p>
      <Newsletter />
    </div>
  {/if}
  <div class="submit sm">
    <p>
      We’ll submit the funniest caption. Your votes will also inform next week’s approach to
      generating captions; our version of a comedian testing out new material in comedy clubs.
    </p>
    <p>
      Come back next week to vote on captions for a new cartoon and see how our approach evolves.
    </p>
  </div>
</div>

<style>
  .wrapper {
    min-height: 280px;
  }

  .vote {
    margin: 0 auto;
    padding-bottom: 2em;
  }

  .counter {
    text-align: center;
  }

  .prompt {
    text-align: center;
  }

  .caption {
    font-family: var(--serif);
    text-align: center;
  }

  .thanks {
    margin-top: 2em;
    text-align: center;
  }

  .thanks h3 {
    font-family: var(--serif);
  }

  @media only screen and (min-width: 600px) {
    .caption {
      font-size: 1.25em;
    }
  }
</style>
