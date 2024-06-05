import { invalidate, goto, invalidateAll } from "$app/navigation";
import { supabase } from "@supabase/auth-ui-shared";
import papa from "papaparse";

export const getAnimes = async (supabase: any, selector = "*") => {

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
    responseData.animes.forEach(async (anime: any) => {
        anime.studio = await resolveStudioIDs(supabase, anime.studio);
    });

    return responseData.animes;
}

export const getAnimeByName = async (supabase: any, SearchName: String) => {
    return await supabase.from("animes").select("*").like("Titel", SearchName);
}

export const resolveStudioIDs = async (supabase: any, studioID: String) => {
    const response = await supabase.from("studios").select("*").eq("id", studioID);
    if (response.error) {
        console.error(response.error);
        return response.error;
    }
    return response.data[0]
}

export const getWatchlist = async (supabase: any, userid: String) => {

    //select everything from the Watchlisttable that matches the userid
    let { data, error } = await supabase
        .from("watchlist_entries")
        .select("animeid, watched")
        .eq("userid", userid);

    if (error) {
        console.error(error);
        return error;
    }

    return {
        watchlist: data
    }
}

// export const resolveWatchlistEntries = async (supabase: any, session: String) => {

//     let entries  = await supabase
//         .from("watchlist_entries")
//         .select("animeid, watched")
//         .eq("userid", session.user.id);
//         if(entries.error){
//             console.error(entries.error);
//             return entries.error;
//         }

//         // {data, error}
//         entries.data.forEach(async (anime : Object)=> {
//             let response = await resolveAnimeID(supabase, anime.animeid);
//             anime.anime = response.data[0]
//         })
//         return entries.data
// }

export const resolveAnimeID = async (supabase: any, animeid: String) => {
    return await supabase.from("animes").select("*").eq("id", animeid);
}


export const addToWatchlist = async (supabase: any, animeid: String, userid: String) => {
    console.log(`added: ${animeid}`)
    const responseData = await supabase.from("watchlist_entries").insert([{ animeid, userid, watched: false }]);
    console.log(responseData)
    invalidateAll();
}

export const removeFromWatchlist = async (supabase: any, animeid: String, userid: String) => {
    console.log(`added: ${animeid}`)
    const responseData = await supabase.from("watchlist_entries").delete().eq("animeid", animeid).eq("userid", userid);
    console.log(responseData)
    // invalidateAll();
}


export const ImportAnimeFromCSV = async (supabase, csv) => {

    const parsedData = papa.parse(csv, {
        header: true,
        skipEmptyLines: true
    });

    const { data, error } = await supabase
        .from('animes')
        .insert(parsedData.data);

    return {
        data,
        error
    }
}

export const getUserRatingsHighToLow = async (supabase) => {
    const { data, error } = await supabase.rpc('ratingshighlowavg');

    console.log(data);
    await data.forEach(async (rating) => {
        rating.anime = await resolveAnimeID(supabase, rating.animeid);
        rating.anime.studio = await(resolveStudioIDs(supabase, rating.anime.studioID))
    })

    return data | error;
}