import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Explore = () => {
  const [apps, setApps] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredApps, setFilteredApps] = useState([]);
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [minRating, setMinRating] = useState(0);

  useEffect(() => {
    // 模拟从 API 加载数据
    fetch('/apps.json')
      .then((res) => res.json())
      .then((data) => {
        setApps(data);
        setCategories([...new Set(data.map((app) => app.category))]);
      });
  }, []);

  useEffect(() => {
    // 搜索和过滤逻辑
    const searchQuery = searchParams.get('search') || '';
    const filtered = apps.filter(
      (app) =>
        app.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (!selectedCategory || app.category === selectedCategory) &&
        app.rating >= minRating
    );
    setFilteredApps(filtered);
  }, [apps, searchParams, selectedCategory, minRating]);

  return (
    <div className="flex">
      {/* 左侧分类筛选 */}
      <aside className="w-1/4 p-4 bg-gray-100">
        <h3 className="text-lg font-bold mb-4">Filter by Category</h3>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => setSelectedCategory('')}
              className={`block w-full text-left p-2 ${!selectedCategory ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              All Categories
            </button>
          </li>
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => setSelectedCategory(category)}
                className={`block w-full text-left p-2 ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        <h3 className="text-lg font-bold mt-6 mb-4">Filter by Rating</h3>
        <input
          type="range"
          min="0"
          max="5"
          step="0.1"
          value={minRating}
          onChange={(e) => setMinRating(parseFloat(e.target.value))}
          className="w-full"
        />
        <p className="text-sm text-gray-700 mt-2">Min Rating: {minRating}</p>
      </aside>

      {/* 主内容区域 */}
      <main className="w-3/4 p-4">
        <h2 className="text-xl font-bold mb-4">Explore Apps</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredApps.length ? (
            filteredApps.map((app) => (
              <div key={app.id} className="p-4 border border-gray-300 rounded shadow">
                <h3 className="text-lg font-bold">{app.name}</h3>
                <p className="text-sm text-gray-600">{app.category}</p>
                <p className="text-sm text-gray-500">{app.description}</p>
                <p className="text-sm text-yellow-500">Rating: {app.rating}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No apps found.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Explore;
