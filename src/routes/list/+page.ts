// src/routes/[slug]/+page.ts
import type { Load } from '@sveltejs/kit';
import { getAnimes, getUsersWatchlists} from '$lib/db_fetch';

export const load: Load = async ({ params, fetch, parent }) => {
    // Get the Supabase client from the context
    const { supabase, session} = await parent();    
    let returnObject = {
        userData : {},
        animes : await getAnimes(supabase)
    };

    if(session != null){
        const {watchlists} = await getUsersWatchlists(supabase, session.user.id)
        returnObject.userData = {
            watchlists
        }
    }
     
    return returnObject;
};
