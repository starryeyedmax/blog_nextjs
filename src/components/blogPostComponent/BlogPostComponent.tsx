import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ButtonReadMore from "./buttonReadMore/ButtonReadMore";

const BlogPostComponent = ({ blogPost }: any) => {
  return (
    <>
      <div>
        <p>-----------------</p>
        <p>
          {formatDistanceToNow(new Date(blogPost.updatedAt), {
            addSuffix: true,
          })}
        </p>

        <p>{blogPost.title}</p>
        <p>{blogPost.description}</p>
        <p>button component</p>
        <p>-----------------</p>
      </div>

      <ButtonReadMore postId={blogPost._id} />
    </>
  );
};

export default BlogPostComponent;
