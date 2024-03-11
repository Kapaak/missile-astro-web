<script lang="ts">
  let { for: inputFor, class: className = "" } = $$props;

  export { className as class, inputFor as for };
</script>

<label class={` text-grey-200 text-sm ${className}`} for={inputFor}>
  <slot />
</label>
