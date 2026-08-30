const SUPABASE_URL = 'https://nmycrlkzunqhknjsnnrd.supabase.co'
const SUPABASE_ANON_KEY = 'sb_publishable_stM5nGMVAfh8BkUh2wft8w_2jpixnRk'

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true, 
    autoRefreshToken: true,
    storage: localStorage 
  }
})

window.supabase = supabase