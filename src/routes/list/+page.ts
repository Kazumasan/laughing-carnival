// src/routes/[slug]/+page.ts
import type { Load } from '@sveltejs/kit';
import { getAnimes, getUsersWatchlists} from '$lib/db_fetch';

export const load: Load = async ({ params, fetch, parent }) => {
    // Get the Supabase client from the context
    const { supabase, session} = await parent();    

    const {animes} = await getAnimes(supabase);
    const {watchlists} = await getUsersWatchlists(supabase, session.user.id)
    return { animes, watchlists };
};
