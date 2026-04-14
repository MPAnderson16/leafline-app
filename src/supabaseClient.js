import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kyigugqvhbptgjratpyc.supabase.co'
const supabaseKey = 'sb_publishable_Ecp7mOmdUqXaQLoyF7jJEg_xN79CQU0'

export const supabase = createClient(supabaseUrl, supabaseKey)