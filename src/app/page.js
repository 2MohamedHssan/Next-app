import Link from "next/link";
export default function Home() {
  return (
    <div className="grid grid-col-3 items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
         <section className="hero bg-gradient-to-br from-blue-600 to-purple-700 text-center py-20 px-4">
                <h1 className="text-5xl font-bold mb-4">Welcome to CodeHub</h1>
                <p className="text-xl mb-8">Your Ultimate Resource for Programming and Web Development</p>
                <Link href="/user">
                    <p className="bg-white text-gray-900 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-gray-200 transition">
                        Explore Projects
                    </p>
                </Link>
            </section>
            <section className="features py-16 px-6 bg-gray-800">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="feature-card p-6 bg-gray-700 rounded-lg shadow-md text-center">
                        <h2 className="text-2xl font-semibold mb-3">Learn Coding</h2>
                        <p>Find tutorials and guides on various programming languages and tools to boost your skills.</p>
                    </div>
                    <div className="feature-card p-6 bg-gray-700 rounded-lg shadow-md text-center">
                        <h2 className="text-2xl font-semibold mb-3">Build Projects</h2>
                        <p>Get inspired by projects and challenges that put your skills to the test.</p>
                    </div>
                    <div className="feature-card p-6 bg-gray-700 rounded-lg shadow-md text-center">
                        <h2 className="text-2xl font-semibold mb-3">Join Community</h2>
                        <p>Connect with fellow developers, ask questions, and share your knowledge.</p>
                    </div>
                </div>
            </section>

            <section className="recent-posts py-16 px-6">
                <h2 className="text-4xl font-bold text-center mb-10">Latest Posts</h2>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((post) => (
                        <div key={post} className="post-card bg-gray-800 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold mb-2">Post Title {post}</h3>
                            <p className="text-gray-400 mb-4">A brief description of the post goes here, It is engaging and gives a preview of the content</p>
                            <Link href={`/user`}>
                                <p className="text-blue-400 hover:underline">Read More →</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            <section className="cta bg-purple-700 text-center py-16">
                <h2 className="text-4xl font-bold mb-4">Ready to Start Coding?</h2>
                <p className="text-xl mb-8">Join CodeHub and dive into programming with our resources and community.</p>
                <Link href="/user">
                    <p className="bg-white text-gray-900 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-gray-200 transition">
                        Join Now
                    </p>
                </Link>
            </section>
    </div>
  );
}
