import Link from "next/link";

async function page() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();

    return (
        <div>
            <h1>User Page</h1>
            {posts.map((post) => {
                return (
                    <Link href={`user/${post.id}`} key={post.id}>
                        <div className="bg-white text-black my-4 cursor-pointer mx-auto w-[80%] rounded-md p-2">
                            <h2 className="text-2xl font-bold">- {post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default page;
