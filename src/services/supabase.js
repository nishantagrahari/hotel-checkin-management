import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://toogwpsvplpjdllktovg.supabase.co";
const supabaseKey =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvb2d3cHN2cGxwamRsbGt0b3ZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2NzEzMDAsImV4cCI6MjA2NTI0NzMwMH0.RECx4cpLVg_dbZQNmxnZwH-hdNXxTk0yiVEeNlDJW50";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
