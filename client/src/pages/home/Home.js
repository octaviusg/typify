import { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import "./home.css";
import Footer from "../../components/footer/Footer";
import MobileNav from "../../components/mobileNav/MobileNav";
import MobileProfileBtn from "../../components/mobileProfileBtn/MobileProfileBtn";
import axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");

      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="homeContainer">
      <Sidebar />
      <MobileNav />
      <Feed posts={posts} />
      <MobileProfileBtn />
      <Footer />
    </div>
  );
}
