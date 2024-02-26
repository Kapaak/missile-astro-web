<script lang="ts">
  interface Props {
    for?: string;
    class?: HTMLHtmlElement["className"];
  }

  export let { for: inputFor, class: className = "" } = $$props as Props;
</script>

<label class={` text-grey-200 text-sm ${className}`} for={inputFor}>
  <slot />
</label>
