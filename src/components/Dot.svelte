<script>
    
    import { onMount } from 'svelte';

    export let data;
    export let maxEntries;

    let lineScale = scaleLinear()
        .domain([0, maxEntries])
        .range([0,100]);

    let dotScale = scaleLinear()
        .domain([0, data.entries])
        .range([0,100]);

</script>

<p class="date">{data.date}</p>
<div class="line" style="width:{lineScale(data.entries)}%;">
    <div class="line-container">
    </div>
    <div class="dot-container" style="left:{dotScale(data.rank)}%;">
        <div class="dot"></div>
        <div class="dot-label">{data.rank}</div>
    </div>
</div>
<p class="entries">{data.entries}</p>

<style>
    .entries {
        font-size: 16px;
        color: rgba(0,0,0,.5);
        text-align: left;
        width: 150px;
        text-transform: capitalize;
    }

    .date {
        font-size: 16px;
        font-weight: 600;
        color: rgba(0,0,0,.5);
        text-align: right;
        width: 150px;
    }
    .line {
        position: relative;
    }
    .line-container {
        position: absolute;
        top: 50%;
        height:1px;
        border-top: 1px dashed #000;
        width: 100%;
    }
    .dot-container {
        position: absolute;
    }
</style>