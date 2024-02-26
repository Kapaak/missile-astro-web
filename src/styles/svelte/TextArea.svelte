<script lang="ts">
  interface Props {
    class?: HTMLHtmlElement["className"];
    name?: string;
    id?: string;
    cols?: number | null;
    rows?: number | null;
  }

  const { class: className = "", ...rest } = $$props as Props;
</script>

<textarea class={`py-3 px-2 bg-tetriary text-grey-200 ${className}`} {...rest}
></textarea>
