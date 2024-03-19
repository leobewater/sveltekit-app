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

export const PATCH: RequestHandler = async (requestEvent) => {
  const { params, request } = requestEvent;
  const { commentId } = params;
  const { text } = await request.json();
  const comment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );
  if (comment) {
    comment.text = text;
    return json(comment);
  }
  return json(null);
};

export const DELETE: RequestHandler = async (requestEvent) => {
  const { params } = requestEvent;
  const { commentId } = params;
  const deletedComment = comments.find(
    (comment) => comment.id === parseInt(commentId)
  );
  const index = comments.findIndex(
    (comment) => comment.id === parseInt(commentId)
  );
  comments.splice(index, 1);
  return json(deletedComment);
};
