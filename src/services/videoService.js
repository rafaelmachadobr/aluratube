import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://barvzwxszmefwmcpexdj.supabase.co";
const PUBLIC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhcnZ6d3hzem1lZndtY3BleGRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzE4MDk2MDMsImV4cCI6MTk4NzM4NTYwM30.ylVIxjukWzZ3E4MyP0pAiz0mXXEfto_TBIdhtuB0rro";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
  return {
    getAllVideos() {
      return supabase.from("video").select("*");
    },
  };
}
