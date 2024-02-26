<script lang="ts">
  import type { CustomBlockComponentProps } from "@portabletext/svelte";
  import Text from "@styles/svelte/Text.svelte";

  export let portableText: CustomBlockComponentProps<{ bold?: boolean }>;
</script>

<Text class={portableText?.value?.bold ? "font-semibold" : "font-normal"}>
  <slot />
</Text>
