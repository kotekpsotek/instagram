import { writable } from 'svelte/store';

export const newPost = writable<Post | undefined>()
