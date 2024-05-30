// src/routes/[slug]/+page.ts
import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ params, fetch, parent }) => {
    // Get the Supabase client from the context
    const { supabase, session} = await parent();

    // get animes
    const { data, error } = await supabase
        .from('animes')
        .select('*')

    if (error) {
        console.error(error);
        return { error };
    }

    let responseData = {
        animes: data
    }

    console.log(responseData)

    responseData.animes.forEach(async (anime) => {
            const response = await supabase.from("studios").select("*").eq("id", anime.studio);

            anime.studio = response.data[0]
    
            if(error){
                console.error(error);
            }
    });

    return { animes : data };
};
