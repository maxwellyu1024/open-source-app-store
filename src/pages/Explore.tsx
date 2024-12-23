import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { App } from '../types/App';

const Explore: React.FC = () => {
  const [apps, setApps] = useState<App[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [filteredApps, setFilteredApps] = useState<App[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState<string>(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [minRating, setMinRating] = useState<number>(0);

  useEffect(() => {
    // 模拟从 API 加载数据
    fetch('/apps.json')
      .then((res) => res.json())
      .then((data: App[]) => {
        setApps(data);
        setCategories([...new Set(data.map((app) => app.category))]);
      });
  }, []);

  useEffect(() => {
    // 搜索和过滤逻辑
    const filtered = apps.filter(
      (app) =>
        app.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (!selectedCategory || app.category === selectedCategory) &&
        app.rating >= minRating
    );
    setFilteredApps(filtered);
  }, [apps, searchQuery, selectedCategory, minRating]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ search: searchQuery });
  };

  const toggleFavorite = (id: number) => {
    setApps((prevApps) =>
      prevApps.map((app) =>
        app.id === id ? { ...app, isFavorite: !app.isFavorite } : app
      )
    );
  };

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
          min={0}
          max={5}
          step={0.1}
          value={minRating}
          onChange={(e) => setMinRating(parseFloat(e.target.value))}
          className="w-full"
        />
        <p className="text-sm text-gray-700 mt-2">Min Rating: {minRating}</p>
      </aside>

      {/* 主内容区域 */}
      <main className="w-3/4 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Explore Apps</h2>
          <form onSubmit={handleSearch} className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search for apps..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 border border-gray-300 rounded"
            />
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
              Search
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredApps.length ? (
            filteredApps.map((app) => (
              <div key={app.id} className="p-4 border border-gray-300 rounded shadow">
                <h3 className="text-lg font-bold">{app.name}</h3>
                <p className="text-sm text-gray-600">{app.category}</p>
                <p className="text-sm text-gray-500">{app.description}</p>
                <p className="text-sm text-yellow-500">Rating: {app.rating}</p>
                <p className="text-sm text-gray-500">Downloads: {app.downloads}</p>
                <button
                  onClick={() => toggleFavorite(app.id)}
                  className={`mt-2 px-4 py-2 rounded ${app.isFavorite ? 'bg-red-500 text-white' : 'bg-gray-300 text-gray-700'}`}
                >
                  {app.isFavorite ? 'Unfavorite' : 'Favorite'}
                </button>
                <Link
                  to={`/app/${app.id}`}
                  className="block mt-2 text-blue-500 hover:underline"
                >
                  View Details
                </Link>
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
