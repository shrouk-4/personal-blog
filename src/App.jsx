import { useState } from "react";
import Header from "./components/Header";
import Filters from "./components/Filters";
import BlogCard from "./components/BlogCard";
import Pagination from "./components/Pagination";
import CategoriesSlider from "./components/CategoriesSlider";
const postsData = [
  {
    id: 1,
    title: "Exploring JavaScript ES2025 Features",
    image: "/java-script.jpg",
    description: "A deep dive into the newest ECMAScript features.",
    category: "Tech",
    date: "2025-08-01",
  },
  {
    id: 2,
    title: "My Trip to the Swiss Alps",
    image: "/travel2.jpg",
    description: "A breathtaking journey through snowy mountains.",
    category: "Travel",
    date: "2025-07-20",
  },
  {
    id: 3,
    title: "Best Homemade Pizza Recipe",
    image: "/public/pizza.jpg",
    description: "A step-by-step guide to making pizza from scratch.",
    category: "Food",
    date: "2025-06-15",
  },
  {
    id: 4,
    title: "React Performance Optimization Tips",
    image: "/react-js.jpg",
    description: "Speed up your React app with these strategies.",
    category: "Tech",
    date: "2025-08-10",
  },
  {
    id: 5,
    title: "Hiking in Patagonia",
    image: "/travel.jpg",
    description: "Experience the wild beauty of South America.",
    category: "Travel",
    date: "2025-05-10",
  },
  // 🌿 Nature (3 more)
  {
    id: 6,
    title: "The Beauty of Rainforests",
    image: "/nature1.jpg",
    description: "Discover the wonders of the Amazon rainforest.",
    category: "Nature",
    date: "2025-04-18",
  },
  {
    id: 7,
    title: "Wildlife Photography Tips",
    image: "/nature2.jpg",
    description: "Capture amazing shots of animals in their habitat.",
    category: "Nature",
    date: "2025-03-05",
  },
  {
    id: 8,
    title: "National Parks You Must Visit",
    image: "/nature3.jpg",
    description: "Top destinations for nature lovers around the world.",
    category: "Nature",
    date: "2025-02-22",
  },

  // 💻 Tech (2 more)
  {
    id: 9,
    title: "AI Trends in 2025",
    image: "/ai.jpg",
    description: "Exploring how AI is shaping the future.",
    category: "Tech",
    date: "2025-07-05",
  },
  {
    id: 10,
    title: "Web3 and Blockchain Explained",
    image: "/blockchain.jpg",
    description: "A beginner-friendly guide to Web3 technologies.",
    category: "Tech",
    date: "2025-06-30",
  },

  // ✈️ Travel (3 more)
  {
    id: 11,
    title: "Discovering Japan",
    image: "/japan.jpg",
    description: "From Tokyo to Kyoto, a cultural journey.",
    category: "Travel",
    date: "2025-04-11",
  },
  {
    id: 12,
    title: "Road Trip Across the USA",
    image: "/usa-roadtrip.jpg",
    description: "Adventure awaits on the open road.",
    category: "Travel",
    date: "2025-03-15",
  },
  {
    id: 13,
    title: "Exploring Egypt’s Ancient History",
    image: "/egypt.jpg",
    description: "A walk through the land of pharaohs.",
    category: "Travel",
    date: "2025-02-10",
  },

  // 🍔 Food (2 more)
  {
    id: 14,
    title: "Delicious Vegan Recipes",
    image: "/vegan.jpg",
    description: "Healthy and tasty meals for everyone.",
    category: "Food",
    date: "2025-05-25",
  },
  {
    id: 15,
    title: "Top 5 Desserts to Try",
    image: "/desserts.jpg",
    description: "Sweet treats that you can’t resist.",
    category: "Food",
    date: "2025-07-12",
  },

  // 🌸 Lifestyle (3)
  {
    id: 16,
    title: "Morning Routines for Productivity",
    image: "/morning.jpg",
    description: "Start your day with positive energy.",
    category: "Lifestyle",
    date: "2025-06-08",
  },
  {
    id: 17,
    title: "Minimalist Living Tips",
    image: "/minimalist.jpg",
    description: "Declutter your life and mind.",
    category: "Lifestyle",
    date: "2025-03-28",
  },
  {
    id: 18,
    title: "Balancing Work and Life",
    image: "/balance.jpg",
    description: "Strategies for a healthier lifestyle.",
    category: "Lifestyle",
    date: "2025-08-05",
  },

  // 👗 Fashion (3)
  {
    id: 19,
    title: "Summer Fashion Trends 2025",
    image: "/fashion1.jpg",
    description: "What’s hot this summer in fashion.",
    category: "Fashion",
    date: "2025-06-18",
  },
  {
    id: 20,
    title: "Sustainable Fashion Brands",
    image: "/fashion2.jpg",
    description: "Eco-friendly brands you should know.",
    category: "Fashion",
    date: "2025-04-09",
  },
  {
    id: 21,
    title: "Streetwear Culture",
    image: "/fashion3.jpg",
    description: "The rise of streetwear around the globe.",
    category: "Fashion",
    date: "2025-05-22",
  },
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  const filteredPosts = postsData.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === "All" || post.category === category;
    return matchesSearch && matchesCategory;
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    
    <div className="min-h-screen bg-gray-50 p-6">
      <Header>
        <Filters
          searchTerm={searchTerm}
          setSearchTerm={(value) => {
            setSearchTerm(value);
            setCurrentPage(1);
          }}
          category={category}
          setCategory={(value) => {
            setCategory(value);
            setCurrentPage(1);
          }}
        />
      </Header>

      <CategoriesSlider onSelectCategory={setCategory} />

      {currentPosts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-6">
          No posts found. Try a different search or category.
        </p>
      )}

      {filteredPosts.length > postsPerPage && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
</div>
  );
}
