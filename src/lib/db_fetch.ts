import { en } from "@supabase/auth-ui-shared";

export const getAnimes = async (supabase : any, selector = "*") => {

    //select everything from the anime table
    const { data, error } = await supabase
        .from('animes')
        .select(selector);
    if (error) {
        console.error(error);
        return { error };
    }

    let responseData = {
        animes: data // Array
    }

    //resolve the Studio Id for each anime
    responseData.animes.forEach(async (anime : any) => {
            const response = await supabase.from("studios").select("*").eq("id", anime.studio);
            if(error){
                console.error(error);
                return error;
            }
            anime.studio = response.data[0]
    });

    return responseData;
}


export const getUsersWatchlists = async (supabase : any, userid : String) => {

    //select everything from the Watchlisttable that matches the userid
    let {data, error} = await supabase
        .from("watchlists")
        .select("*")
        .eq("userid", userid);

    if(error) {
        console.error(error);
        return error;
    }

    let responseData = {
        watchlists : data // Array
    }

    //resolve each entrie from each list.
    responseData.watchlists.forEach( async (watchlist : any) => {
        let entries  = await supabase
        .from("watchlist_entries")
        .select("animeid")
        .eq("watchlistid", watchlist.id);
        if(entries.error){
            console.error(error);
            return error;
        }
        watchlist.entries = entries.data;
        // let animeids = entries.data
    })
    
    
    return {
        watchlists : data
    }
}