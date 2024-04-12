import Post from "./Post";

function Posts() {
    return (
        <div className="posts">
            <h1>Posts</h1>
                <Post />
                <Post />
                <Post />
        </div>
    );
}

export default Posts;

/*
 <div className="post">
            <h2>{props.title}</h2>
            <p>{props.content}</p>
        </div>




*/