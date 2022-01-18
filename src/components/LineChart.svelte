<script>
  import { range } from "d3";
  import Dot from "$components/Dot.svelte";

  const test = range(10);
  console.log({ test });

  let data = [
    { contest: 757, rank: 2064, entries: 22757, date: "May 24, 2021" },
    { contest: 758, rank: 957, entries: 4514, date: "May 31, 2021" },
    { contest: 761, rank: 1740, entries: 10712, date: "June 21, 2021" },
    { contest: 762, rank: 184, entries: 7076, date: "June 28, 2021" },
    { contest: 763, rank: 4545, entries: 9007, date: "July 5, 2021" },
    { contest: 764, rank: 3932, entries: 6311, date: "July 19, 2021" },
    { contest: 765, rank: 1829, entries: 6933, date: "July 26, 2021" },
    { contest: 768, rank: 6213, entries: 6526, date: "August 16, 2021" },
    { contest: 769, rank: 2985, entries: 8039, date: "August 23, 2021" },
    { contest: 771, rank: 1934, entries: 6862, date: "September 8, 2021" }
  ];
</script>

<p>OUR RANKING IN 10 ATTEMPTS</p>
{#each data as item}
  <div class="row">
    <!-- <Dot data={item} maxEntries={22757} /> -->
  </div>
{/each}

<style>
  .row {
    display: flex;
  }
</style>
