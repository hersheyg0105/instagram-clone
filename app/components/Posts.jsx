import React from "react";
import Post from "../components/Post";

const Posts = () => {
  const posts = [
    {
      id: "123",
      username: "hersheyg0105",
      userImg:
        "https://media.licdn.com/dms/image/D4E35AQGFH3hmH9FOYw/profile-framedphoto-shrink_200_200/0/1692929048181?e=1708297200&v=beta&t=2eXSOACshQdKkug_yxKneHrdVAncquh3PpIuujivY44",
      img: "https://media.licdn.com/dms/image/D4E35AQGFH3hmH9FOYw/profile-framedphoto-shrink_200_200/0/1692929048181?e=1708297200&v=beta&t=2eXSOACshQdKkug_yxKneHrdVAncquh3PpIuujivY44",
      caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON",
    },
    {
      id: "123",
      username: "hersheyg0105",
      userImg:
        "https://media.licdn.com/dms/image/D4E35AQGFH3hmH9FOYw/profile-framedphoto-shrink_200_200/0/1692929048181?e=1708297200&v=beta&t=2eXSOACshQdKkug_yxKneHrdVAncquh3PpIuujivY44",
      img: "https://media.licdn.com/dms/image/D4E35AQGFH3hmH9FOYw/profile-framedphoto-shrink_200_200/0/1692929048181?e=1708297200&v=beta&t=2eXSOACshQdKkug_yxKneHrdVAncquh3PpIuujivY44",
      caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON",
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
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
