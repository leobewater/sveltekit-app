import { comments } from "$lib/comments";
import type { RequestHandler } from "./$types";
import { json } from "@sveltejs/kit";

export const GET: RequestHandler = async (requestEvent) => {
  const { params } = requestEvent;
  const { commentId } = params;
  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );
  
  return json(comment);
};
