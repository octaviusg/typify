import React from "react";
import "./feed.css";
import SinglePost from "../singlePost/SinglePost";
import Masonry from "react-masonry-css";

export default function Feed({ posts }) {
  const breakpoints = {
    default: 4,
    1200: 3,
    900: 2,
    700: 1,
  };

  return (
    <div className="feedContainer">
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {posts.map((p) => (
          <SinglePost key={p} post={p} />
        ))}
      </Masonry>
    </div>
  );
}
