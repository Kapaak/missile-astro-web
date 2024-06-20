import { writable } from "svelte/store";

export let lectureLengthId = writable(0);
export let selectedTime = writable("");

export let selectedCourseSlug = writable("");
