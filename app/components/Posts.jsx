import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";

const Posts = () => {
  // const posts = [
  //   {
  //     id: "123",
  //     username: "hersheyg0105",
  //     userImg:
  //       "https://media.licdn.com/dms/image/D4E35AQGFH3hmH9FOYw/profile-framedphoto-shrink_200_200/0/1692929048181?e=1708297200&v=beta&t=2eXSOACshQdKkug_yxKneHrdVAncquh3PpIuujivY44",
  //     img: "https://media.licdn.com/dms/image/D4E35AQGFH3hmH9FOYw/profile-framedphoto-shrink_200_200/0/1692929048181?e=1708297200&v=beta&t=2eXSOACshQdKkug_yxKneHrdVAncquh3PpIuujivY44",
  //     caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON",
  //   },
  //   {
  //     id: "123",
  //     username: "hersheyg0105",
  //     userImg:
  //       "https://media.licdn.com/dms/image/D4E35AQGFH3hmH9FOYw/profile-framedphoto-shrink_200_200/0/1692929048181?e=1708297200&v=beta&t=2eXSOACshQdKkug_yxKneHrdVAncquh3PpIuujivY44",
  //     img: "https://media.licdn.com/dms/image/D4E35AQGFH3hmH9FOYw/profile-framedphoto-shrink_200_200/0/1692929048181?e=1708297200&v=beta&t=2eXSOACshQdKkug_yxKneHrdVAncquh3PpIuujivY44",
  //     caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON",
  //   },
  // ];

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );

    return unsubscribe;
  }, [db]);

  console.log(posts);

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        ></Post>
      ))}

      {/* Posts */}
      {/* Posts */}
      {/* Posts */}
      {/* Posts */}
      {/* Posts */}
      {/* Posts */}
    </div>
  );
};

export default Posts;
