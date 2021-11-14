import React from "react";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import "./singlePost.css";
import { ExternalLink } from "react-external-link";


export default function SinglePost({ post }) {


  console.log(post);
  function truncateString(string, limit) {
    if (string.length > limit) {
      return string.substring(0, limit) + ".....";
    } else {
      return string;
    }
  }
  return (
    <div className="postContainer" data-aos="fade-up">
      <div className="postHeader">
        <div className="posturl">
          <span className="urlBase">|</span>
          <div className="url">
            <ExternalLink className="url" href={post.url}>
              {truncateString(post.url, 38)}
            </ExternalLink>
          </div>
        </div>

        <div className="bookmarkIcon">
          <span className="bookmarkTally">2</span>
          <BookmarkBorderIcon className="bmark-icon" />
        </div>
      </div>

      <img src={post.photo} alt="" className="postImg" />
    </div>
  );
}
