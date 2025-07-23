import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

// Components
const Home = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Welcome to My Website
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          This is a modern, responsive website built with React, TypeScript, and Tailwind CSS.
          Deployed seamlessly on GitHub Pages with clean URLs.
        </p>
        <div className="space-x-4">
          <Link
            to="/about"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            About Me
          </Link>
          <Link
            to="/projects"
            className="inline-block bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
          >
            Projects
          </Link>
        </div>
      </div>
    </div>
  </div>
)

const About = () => (
  <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-block mb-8 text-blue-600 hover:text-blue-800 font-semibold">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg text-gray-700 mb-4">
            Hello! I'm a developer passionate about creating modern web experiences.
            This website showcases my work and serves as a portfolio of my projects.
          </p>
          <p className="text-lg text-gray-700">
            Feel free to explore the site and check out my projects. This site is built with
            cutting-edge technologies including React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  </div>
)

const Projects = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-block mb-8 text-blue-600 hover:text-blue-800 font-semibold">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">My Projects</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Project One</h3>
            <p className="text-gray-600 mb-4">
              A description of your first project. This could be a web application,
              mobile app, or any other interesting work you've done.
            </p>
            <div className="flex space-x-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">React</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Node.js</span>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Project Two</h3>
            <p className="text-gray-600 mb-4">
              Another exciting project showcasing different skills and technologies.
              Add your own projects here to personalize your portfolio.
            </p>
            <div className="flex space-x-2">
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">TypeScript</span>
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Python</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const NotFound = () => (
  <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-100 flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page not found</p>
      <Link
        to="/"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Go Home
      </Link>
    </div>
  </div>
)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
