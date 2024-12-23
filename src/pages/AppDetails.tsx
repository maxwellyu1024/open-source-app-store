import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { App } from '../types/App'

const AppDetails: React.FC = () => {
  const { appId } = useParams<{ appId: string }>()
  const [app, setApp] = useState<App | null>(null)

  useEffect(() => {
    // 模拟从 API 加载数据
    fetch('/apps.json')
      .then((res) => res.json())
      .then((data: App[]) => {
        const foundApp = data.find(
          (app) => app.id === parseInt(appId || '', 10),
        )
        setApp(foundApp || null)
      })
  }, [appId])

  if (!app) {
    return <p className="text-center text-gray-500">Loading...</p>
  }

  const handleDownload = () => {
    alert(`Downloading ${app.name}`)
    // 模拟下载逻辑
  }
  const handleInstallApp = () => {
    alert(`Installing ${app.name}`)
    // 模拟安装逻辑
  }
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{app.name}</h1>
      <p className="text-lg text-gray-600 mb-2">
        <strong>Category:</strong> {app.category}
      </p>
      <p className="text-lg text-gray-600 mb-2">
        <strong>Description:</strong> {app.description}
      </p>
      <p className="text-lg text-yellow-500 mb-4">
        <strong>Rating:</strong> {app.rating}
      </p>
      <p className="text-lg text-gray-600 mb-4">
        <strong>Downloads:</strong> {app.downloads}
      </p>
      <button
        onClick={handleDownload}
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition mr-4"
      >
        Download
      </button>
      <button
        onClick={handleInstallApp}
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
      >
        Install App
      </button>
      <Link to="/explore" className="block mt-4 text-blue-500 hover:underline">
        Back to Explore
      </Link>
    </div>
  )
}

export default AppDetails
