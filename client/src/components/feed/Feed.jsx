import React from "react";
import "./feed.css";
import SinglePost from "../singlePost/SinglePost";
import Masonry from "react-masonry-css";
import { Posts } from "../../dummyData";

export default function Feed() {
  const breakpoints = {
    default: 4,
    1200: 3,
    900: 2,
    700: 1,
  };
  window.addEventListener("load", Masonry.refresh);
  return (
    <div className="feedContainer">
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {Posts.map((p) => (
          <SinglePost key={p.id} post={p} />
        ))}
      </Masonry>
    </div>
  );
}
