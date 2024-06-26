const env = {
    SUPABASE_URL : "https://eiiwianhwueuvagrjpdw.supabase.co", 
    SUPABASE_ANON : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpaXdpYW5od3VldXZhZ3JqcGR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2ODY1MDMsImV4cCI6MjAzMTI2MjUwM30.XZSsdtcWsdMSG2FRGq7c1qn4xviMUkGn2P84-uP1Vzo"
}

import { createBrowserClient, isBrowser, parse } from "@supabase/ssr"
import { getAnimes, getWatchlist, resolveAnimeID, resolveStudioIDs} from '$lib/db_fetch';  

export const ssr = false;

export const load = async ({ fetch, data, depends }: any) => {
    depends('supabase:auth')

    const supabase = createBrowserClient(env.SUPABASE_URL,  env.SUPABASE_ANON, {
        global: {
            fetch
        },
        db : {
            schema : "myanimelist"
        },
        cookies: {
            get(key) {
                // if server, something else
                if(!isBrowser()) {
                    return JSON.stringify(data.session)
                }

                // is we are on the browser, do something
                const cookie = parse(document.cookie)
                return cookie[key]
            }
        }
    });

    const {
        data: { session } 
    } = await supabase.auth.getSession();


    let animes = await getAnimes(supabase)


    // console.log({supabase, session, app: returnObject})
    return { supabase, session, app: { animes }}
}