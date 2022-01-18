<script>
    
    import { onMount } from 'svelte';
    import { scaleLinear, range, format } from "d3";
    export let data;
    export let maxEntries;

    const comma = format(",");

    function ordinal_suffix_of(i) {
        var j = i % 10,
            k = i % 100;
        if (j == 1 && k != 11) {
            return "st";
        }
        if (j == 2 && k != 12) {
            return "nd";
        }
        if (j == 3 && k != 13) {
            return "rd";
        }
        return "th";
    }

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
    <div class="dot-container" style="left:{JSON.stringify(dotScale(data.rank)).concat('%')};">
        <div class="dot"></div>
        <p class="dot-label" style="transform:translate({data.rank/data.entries < .5 ? '30px,-50%' : 'calc(-100% - 5px),-50%'});">
            {comma(data.rank).concat(ordinal_suffix_of(data.rank))}
        </p>
    </div>
</div>

<p class="entries">{comma(data.entries)} entries</p>

<style>
    .entries {
        font-size: 14px;
        color: rgba(0,0,0,.8);
        text-align: left;
        min-width: 100px;
        text-transform: capitalize;
        align-self: center;
        flex-grow: 0;
        margin-left: 15px;
    }

    .date {
        font-size: 15px;
        font-weight: 600;
        color: rgba(0,0,0,.5);
        text-align: right;
        min-width: 150px;
        margin-right: 10px;
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
        top: 50%;
        transform: translate(0,-50%);
    }
    .dot-label {
        position: absolute;
        top: 50%;
        transform: translate(20px,-50%);
        font-size: 16px;
        font-weight: 600;
        margin: 0;
        text-shadow: -3px -3px 1px rgba(244,246,239,.4), -3px -2px 1px rgba(244,246,239,.4), -3px -1px 1px rgba(244,246,239,.4), -3px 0px 1px rgba(244,246,239,.4), -3px 1px 1px rgba(244,246,239,.4), -3px 2px 1px rgba(244,246,239,.4), -3px 3px 1px rgba(244,246,239,.4), -2px -3px 1px rgba(244,246,239,.4), -2px -2px 1px rgba(244,246,239,.4), -2px -1px 1px rgba(244,246,239,.4), -2px 0px 1px rgba(244,246,239,.4), -2px 1px 1px rgba(244,246,239,.4), -2px 2px 1px rgba(244,246,239,.4), -2px 3px 1px rgba(244,246,239,.4), -1px -3px 1px rgba(244,246,239,.4), -1px -2px 1px rgba(244,246,239,.4), -1px -1px 1px rgba(244,246,239,.4), -1px 0px 1px rgba(244,246,239,.4), -1px 1px 1px rgba(244,246,239,.4), -1px 2px 1px rgba(244,246,239,.4), -1px 3px 1px rgba(244,246,239,.4), 0px -3px 1px rgba(244,246,239,.4), 0px -2px 1px rgba(244,246,239,.4), 0px -1px 1px rgba(244,246,239,.4), 0px 1px 1px rgba(244,246,239,.4), 0px 2px 1px rgba(244,246,239,.4), 0px 3px 1px rgba(244,246,239,.4), 1px -3px 1px rgba(244,246,239,.4), 1px -2px 1px rgba(244,246,239,.4), 1px -1px 1px rgba(244,246,239,.4), 1px 0px 1px rgba(244,246,239,.4), 1px 1px 1px rgba(244,246,239,.4), 1px 2px 1px rgba(244,246,239,.4), 1px 3px 1px rgba(244,246,239,.4), 2px -3px 1px rgba(244,246,239,.4), 2px -2px 1px rgba(244,246,239,.4), 2px -1px 1px rgba(244,246,239,.4), 2px 0px 1px rgba(244,246,239,.4), 2px 1px 1px rgba(244,246,239,.4), 2px 2px 1px rgba(244,246,239,.4), 2px 3px 1px rgba(244,246,239,.4), 3px -3px 1px rgba(244,246,239,.4), 3px -2px 1px rgba(244,246,239,.4), 3px -1px 1px rgba(244,246,239,.4), 3px 0px 1px rgba(244,246,239,.4), 3px 1px 1px rgba(244,246,239,.4), 3px 2px 1px rgba(244,246,239,.4), 3px 3px 1px rgba(244,246,239,.4);
    }
    .dot {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: black;
        position: absolute;
        top: 50%;
        transform: translate(0,-50%);

    }
</style>