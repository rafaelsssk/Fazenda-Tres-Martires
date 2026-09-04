import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cmomybzgjwyvujtytnvc.supabase.co'
const supabaseKey = 'sb_publishable_mCfyY2K8Oy_AhlkWSGV2fA__vNauO8Z'

export const supabase = createClient(supabaseUrl, supabaseKey)