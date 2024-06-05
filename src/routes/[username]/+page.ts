import { getWatchlist, resolveAnimeID, resolveStudioIDs } from "$lib/db_fetch";

export const load = async ({ fetch, parent }) => {
    let data = await parent();
    console.log(data);
    data.app = await getWatchlist(data.supabase, data.session.user.id)

    await data.app.watchlist.forEach(async (anime) => {
        let response = await resolveAnimeID(data.supabase, anime.animeid)
        anime.anime = response.data[0];
        anime.anime.studio = await resolveStudioIDs(data.supabase, anime.anime.studio);
        // console.log(anime)
        delete anime.animeid;
    })

    return data;
}