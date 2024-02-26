<script lang="ts">
  interface Props {
    class?: HTMLHtmlElement["className"];
    name?: string;
    id?: string;
  }

  const { class: className = "" } = $$props as Props;
</script>

<p class={`text-base text-grey-200 font-medium ${className}`}>
  <slot />
</p>
