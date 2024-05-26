const env = {
    SUPABASE_URL = "https://eiiwianhwueuvagrjpdw.supabase.co", 
    SUPABASE_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpaXdpYW5od3VldXZhZ3JqcGR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTU2ODY1MDMsImV4cCI6MjAzMTI2MjUwM30.XZSsdtcWsdMSG2FRGq7c1qn4xviMUkGn2P84-uP1Vzo"
}
import { createBrowserClient, isBrowser, parse} from "@supabase/ssr";
import type { LayoutLoad} from "./$types";

export const ssr = false;
export const load: LayoutLoad = async({fetch, data, depends}: any ) => {
    depends('supabase:auth');

    const supabase_client = createBrowserClient(env.SUPABASE_URL, env.SUPABASE_ANON, {
        global : {fetch},
        cookies: {
            get(key){
                //Server
                if(!isBrowser()){
                    return JSON.stringify(data.session);
                }
                
                //Browser
                const cookies = parse(document.cookie);
                return cookies[key];
            }
        }
    });

    const {data: {session}} = await supabase.auth.getSession();

    return { supabase, session}
}