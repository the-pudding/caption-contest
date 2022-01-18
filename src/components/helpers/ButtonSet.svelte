<script>
  export let options = [];
  export let legend = "";
  export let legendPosition = "top";
  export let labelClass = "";
  export let disabled = false;
  export let value = "";

  const id = `legend-${Math.floor(Math.random() * 1000000)}`;
  const makeSlug = (str = "") => `${str}`.toLowerCase().replace(/\W/g, "");

  $: optionsWithSlug = options.map((d) => ({ ...d, val: d.value, slug: makeSlug(d.value) }));
  $: isTop = legendPosition === "top";
</script>

<div class="button-set">
  <div
    id={`group-${id}`}
    class="group"
    class:is-top={isTop}
    role="radiogroup"
    aria-labelledby={`label-${id}`}
  >
    {#if legend}<div class="legend" id="groupd-{id}">{legend}</div>{/if}
    <div class="options">
      {#each optionsWithSlug as option}
        <div class="option">
          <input
            type="radio"
            id={`${id}-${option.slug}`}
            name="name-{id}"
            class="sr-only"
            value={option.value}
            {disabled}
            bind:group={value}
          />
          <label
            class="sm option {labelClass}"
            for={`${id}-${option.slug}`}
            data-emoji={option.emoji}
          >
            {option.label || option.value}
          </label>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .button-set {
    margin-bottom: 4px;
    width: 100%;
  }

  .group {
    display: flex;
    align-items: center;
  }

  .group.is-top {
    flex-direction: column;
  }

  .is-top .legend {
    padding-bottom: 0.5em;
    padding-right: 0;
  }

  .legend {
    padding-right: 0.5em;
    font-size: 1em;
  }

  .options {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  label {
    position: relative;
    appearance: none;
    user-select: none;
    line-height: 1.2;
    padding: 0.5em;
    border-radius: var(--radius);
    box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25);
    outline: none;
    cursor: pointer;
    font-family: inherit;
    display: block;
    width: 6em;
    margin-bottom: 2em;
  }

  label::after {
    content: attr(data-emoji);
    display: block;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 110%);
    font-size: 2em;
  }

  .option {
    text-align: center;
  }

  .option + .option label {
  }

  input[type="radio"] + label {
    background: var(--base-white-transparent);
    border: 1px solid var(--base-black-transparent);
    color: var(--base-off-black);
  }

  input[type="radio"]:checked + label,
  input[type="radio"]:checked:hover + label {
    background: var(--base-white-transparent);
    color: var(--base-white);
  }

  input[type="radio"]:hover + label {
    background: var(--base-off-black);
    color: var(--base-white);
  }

  input[type="radio"]:focus + label {
    box-shadow: 0 0 4px 0 var(--color-focus);
  }

  input[type="radio"]:disabled + label {
    color: var(--base-gray-dark);
    background: var(--base-gray-medium);
    cursor: not-allowed;
  }
</style>
