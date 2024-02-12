<script lang="ts">
  import type { CustomBlockComponentProps } from "@portabletext/svelte";
  import clsx from "clsx";

  export let portableText: CustomBlockComponentProps<{ bold?: boolean }>;
</script>

<p
  class={clsx(
    "text-base text-grey-200",
    portableText?.value?.bold ? "font-semibold" : "font-normal"
  )}
>
  <slot />
</p>
