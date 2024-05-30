// src/routes/[slug]/+page.ts
import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ params, fetch, parent }) => {
    // Get the Supabase client from the context
    const { supabase, session} = await parent();

    // Fetch data from Supabase
    const { data, error } = await supabase
        .from('anime')
        .select('*')

    if (error) {
        console.error(error);
        return { error };
    }

    return { animes : data };
};
