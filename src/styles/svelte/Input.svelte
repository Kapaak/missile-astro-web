<script lang="ts">
  type HTMLInputTypeAttribute =
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";

  interface Props {
    class?: HTMLHtmlElement["className"];
    type?: HTMLInputTypeAttribute;
    name?: string;
    id?: string;
  }

  const { class: className = "", type = "text", ...rest } = $$props as Props;
</script>

<input
  class={`py-3 px-2 bg-tetriary text-grey-200 ${className}`}
  {type}
  {...rest}
/>
