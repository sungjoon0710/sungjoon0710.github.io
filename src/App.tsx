import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { HomeButton } from "@/components/ui/button"
import { Card } from './components/ui/card'

// Components
const Home = () => (
  <div className="min-h-screen bg-apple-beige font-apple-system">
    <div className="bg-apple-dark text-apple-cream px-4 py-1 text-sm font-bold">
      <span className="mr-8">🍎 Version 1.0</span>
    </div>
    
    <div className="container mx-auto px-8 py-12">
      <div className="mac-window p-8 mx-auto max-w-4xl">
        <div className="bg-apple-dark text-apple-cream px-4 py-2 -m-8 mb-8 flex justify-between items-center">
          <span className="font-bold text-sm">Welcome - Sungjoon's Portfolio</span>
          <div className="flex space-x-1">
            <div className="w-4 h-4 bg-apple-cream border border-apple-dark"></div>
          </div>
        </div>
        
        <div className="terminal p-4 mb-8 font-apple text-sm">
        </div>
        
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl mb-6">
            SUNGJOON PARK
          </h1>
          <div className="pixel-border bg-apple-cream p-6 mb-8">
            <p className="text-lg font-mono">
              SPECIALIZING IN: REACT, TYPESCRIPT, NEXT.JS<br/>
              STATUS: BUILDING THE FUTURE, ONE PIXEL AT A TIME<br/>
              LOCATION: WEST HARLEM, NYC
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild variant="outline">
              <Link to="/about">ABOUT</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/projects">PROJECTS</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
    
          <div className="fixed bottom-0 left-0 right-0 bg-black text-white px-4 py-1 text-xs">
      <div className="flex justify-between">
        <span>{new Date().toLocaleTimeString()}</span>
      </div>
    </div>
  </div>
)

const About = () => (
  <div className="min-h-screen bg-apple-beige font-apple-system">
    <div className="bg-apple-dark text-apple-cream px-4 py-1 text-sm font-bold">
      <span className="mr-8">🍎 Version 1.0</span>
    </div>
    
    <div className="container mx-auto px-8 py-12">
      <div className="mac-window p-8 mx-auto max-w-4xl">
        <div className="bg-apple-dark text-apple-cream px-4 py-2 -m-8 mb-8 flex justify-between items-center">
          <span className="font-bold text-sm">About.txt</span>
          <HomeButton />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="pixel-border p-6">
            <h2 className="retro-title text-2xl mb-4 text-apple-dark">ABOUT</h2>
            <Card className="text-sm bg-[#f5f5f5]">
              <div> NAME: SUNGJOON PARK</div>
              <div> EDUCATION: COLUMBIA UNIVERSITY (B.A. COMPUTER SCIENCE)</div>
              <div> LOCATION: NEW YORK, NY</div>
              <div> FOCUS: FULL-STACK DEVELOPMENT & AI/ML</div>
              <div> EXPERIENCE: SOFTWARE ENGINEERING</div>
              <div> INTERESTS: HIKING, EARTH SCIENCE, MOTORCYCLES</div>
            </Card>
          </div>
          
          <div className="terminal p-4 text-sm">
            <div>
              <div>RECENT_ROLES:</div>
              <div>├── FOUNDING ENGINEER - NURY, INC (MAR 2024 - PRESENT)</div>
              <div>├── Built Next.js committee management tool</div>
              <div>├── DATA & COMPUTE INTERN - LEAP-STC (MAY 2024 - PRESENT)</div>
              <div>└── BACKEND ENGINEER - MDSALESNAVI (JUL - AUG 2024)</div>
              <div>KEY_HIGHLIGHTS:</div>
              <div>├── Built Next.js committee management tool</div>
              <div>├── Engineered Firebase + JWT auth system</div>
              <div>├── Developed real-time notifications (iOS/web)</div>
              <div>├── Streamlined JupyterLab server for 120+ researchers</div>
              <div>├── Built voice memo medical transcription system</div>
              <div>└── Fine-tuned BERT classifier for medical data</div>
              <div>TECHNOLOGIES:</div>
              <div>├── Next.js, React, Firebase, GraphQL, OpenAI</div>
              <div>├── Python, PyTorch, BERT, JupyterLab</div>
              <div>└── Docker, Capacitor, JWT, ChromaDB</div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="pixel-border bg-apple-cream p-4 font-mono text-apple-dark">
            "The best way to predict the future is to invent it." - Alan Kay, Apple Fellow
          </div>
        </div>
      </div>
    </div>
  </div>
)

const Projects = () => (
  <div className="min-h-screen bg-apple-beige font-apple-system">
    <div className="bg-apple-dark text-apple-cream px-4 py-1 text-sm font-bold">
      <span className="mr-8">🍎 Version 1.0</span>
    </div>
    
    <div className="container mx-auto px-8 py-12">
      <div className="mac-window p-8 mx-auto max-w-6xl">
        <div className="bg-apple-dark text-apple-cream px-4 py-2 -m-8 mb-8 flex justify-between items-center">
          <span className="font-bold text-sm">Projects Folder - Finder</span>
          <HomeButton />
        </div>
        
        <h1 className="retro-title text-3xl mb-8 text-apple-dark text-center">PROJECT_DIRECTORY</h1>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Project 1 */}
          <h2 className="pixel-border bg-apple-cream p-6">
            Project 1
          </h2>
          
          {/* Project 2 */}
          <h2 className="pixel-border bg-apple-cream p-6">
            Project 2
          </h2>

        </div>
      </div>
    </div>
  </div>
)

const NotFound = () => (
  <div className="min-h-screen bg-apple-beige font-apple-system flex items-center justify-center">
    <div className="mac-window p-8 max-w-md mx-4">
      <div className="bg-apple-dark text-apple-cream px-4 py-2 -m-8 mb-8 text-center">
        <span className="font-bold text-sm">System Error</span>
      </div>
      
      <div className="text-center">
        <div className="terminal p-6 mb-6 font-apple">
          <div className="text-red-400 text-4xl mb-4">ERROR 404</div>
          <div className="text-terminal-green text-sm">
            FILE_NOT_FOUND.SYS<br/>
            The requested resource does not exist in this directory.
          </div>
        </div>
        
        <p className="text-apple-dark font-mono mb-6 text-sm">
          The file or application you are looking for<br/>
          has been moved to the Trash or does not exist.
        </p>
        
        <HomeButton />
      </div>
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
