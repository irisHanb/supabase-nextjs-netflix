"use server";

import { createServerSupabaseClient } from "utils/supabase/server";

function handleError(error) {
  if (error) {
    console.log(error);
    throw error;
  }
}

export async function searchMovies(search = "") {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from("movie")
    .select("*")
    .like("title", `%${search}%`);
  handleError(error);
  return data;
}

export async function getMovie(id) {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase
    .from("movie")
    .select("*")
    .eq("id", id)
    .maybeSingle(); // null 일수도 있다.
  handleError(error);
  return data;
}
