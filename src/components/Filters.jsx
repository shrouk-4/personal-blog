export default function Filters({ searchTerm, setSearchTerm, category, setCategory }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border rounded-lg px-4 py-2 w-full md:w-64 focus:outline-none focus:ring focus:border-blue-300"
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
      >
        <option value="nature">Nature</option>
        <option value="Tech">Tech</option>
        <option value="Travel">Travel</option>
        <option value="Food">Food</option>
      </select>
    </div>
  );
}
