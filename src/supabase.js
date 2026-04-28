import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://cjzerhfgtbtadefckhke.supabase.co"
const supabaseKey = "sb_publishable__EKtCSexYdHWmwYxSB3G9Q_WD_0KcYf"

export const supabase = createClient(supabaseUrl, supabaseKey)
 