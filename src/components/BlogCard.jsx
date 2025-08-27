export default function BlogCard({ post }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-40 object-cover" 
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{post.title}</h2>
        <p className="text-sm text-gray-500">{post.date}</p>
        <p className="mt-2 text-gray-700">{post.description}</p>
        <span className="inline-block mt-3 px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs">
          {post.category}
        </span>
      </div>
    </div>
  );
}
