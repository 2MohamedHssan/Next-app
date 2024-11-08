async function postDetals({ params }) {
    const { postid } = await params;
    const text = await fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`);
    const post = await text.json();
    
    return (
        <div>
            User Post 
            <div className="bg-white text-black my-4 mx-auto w-[80%] rounded-md p-2">
                <h2 className="font-bold">{post.title}</h2>
                <hr/>
                <p>{post.body}</p>
            </div>
        </div>
    );
}

export default postDetals;
