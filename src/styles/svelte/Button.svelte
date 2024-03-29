<script lang="ts">
  import type { HTMLAttributes } from "astro/types";
  import { cva, type VariantProps } from "class-variance-authority";

  interface Props
    extends HTMLAttributes<"button">,
      VariantProps<typeof button> {
    class?: HTMLHtmlElement["className"];
  }

  /**
   * For Astro components, we recommend setting your defaultVariants within
   * Astro.props (which are `undefined` by default)
   */

  const button = cva(["font-medium transition-all duration-200"], {
    variants: {
      intent: {
        primary: [
          "bg-secondary",
          "border-2",
          "border-secondary",
          "text-white",
          "hover:bg-secondary-hover",
          "hover:border-secondary-hover",
        ],
        secondary: [
          "bg-white",
          "text-gray-800",
          "border-gray-400",
          "hover:bg-gray-100",
        ],
      },
      variant: {
        plain: [],
        bordered: [],
        filled: [],
      },
      size: {
        small: ["text-sm", "py-1", "px-2"],
        medium: ["text-base", "py-[1.2rem]", "px-[4.3rem]"],
      },
    },
    compoundVariants: [
      // { intent: "primary", size: "medium", class: "uppercase" },
      {
        intent: "primary",
        variant: "bordered",
        class:
          "text-grey-200 bg-transparent border-2 border-secondary hover:border-secondary hover:bg-secondary",
      },
    ],
  });
  const {
    class: className = "",
    intent = "primary",
    size = "medium",
    variant = "filled",
    type = "submit",
  } = $$props as Props & typeof button;
</script>

<button class={button({ intent, size, variant, className })} {type}>
  <slot />
</button>
