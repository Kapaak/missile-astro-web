import { writable } from "svelte/store";

export let lectureType = writable("individual");
export let lectureLength = writable("60");
