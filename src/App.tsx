import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { HomeButton } from "@/components/ui/button"

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
          <h1 className="retro-title text-4xl md:text-6xl mb-6 tracking-wider">
            SUNGJOON PARK
          </h1>
          <div className="pixel-border bg-apple-cream p-6 mb-8">
            <p className="text-lg text-apple-dark font-mono leading-relaxed">
              SPECIALIZING IN: REACT, TYPESCRIPT, NEXT.JS<br/>
              STATUS: BUILDING THE FUTURE, ONE PIXEL AT A TIME<br/>
              LOCATION: WEST HARLEM, NYC
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              variant="outline"
              className="px-8 py-3 font-mono text-white border-white hover:bg-white hover:text-black"
            >
              <Link to="/about">
                ABOUT
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline"
              className="px-8 py-3 font-mono text-white border-white hover:bg-white hover:text-black"
            >
              <Link to="/projects">
                PROJECTS
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
    
    <div className="fixed bottom-0 left-0 right-0 bg-apple-dark text-apple-cream px-4 py-1 text-xs font-mono">
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
          <div className="pixel-border bg-apple-cream p-6">
            <h2 className="retro-title text-2xl mb-4 text-apple-dark">ABOUT</h2>
            <div className="font-apple text-sm text-apple-dark leading-relaxed space-y-2">
              <div> NAME: SUNGJOON PARK</div>
              <div> PROFESSION: SOFTWARE_DEVELOPER</div>
              <div> EXPERTISE: FULL_STACK_DEVELOPMENT</div>
              <div> PASSION: BUILDING_DIGITAL_EXPERIENCES</div>
              <div> MISSION: BRIDGING_CREATIVITY_AND_CODE</div>
            </div>
          </div>
          
          <div className="terminal p-4 text-sm">
            <div className="space-y-1 text-terminal-green">
              <div>PROGRAMMING_LANGUAGES:</div>
              <div className="ml-4">├── JavaScript/TypeScript</div>
              <div className="ml-4">├── Python</div>
              <div className="ml-4">└── Java</div>
              <div className="mt-2">FRAMEWORKS:</div>
              <div className="ml-4">├── React.js</div>
              <div className="ml-4">├── Node.js</div>
              <div className="ml-4">└── Next.js</div>
              <div className="mt-2">TOOLS:</div>
              <div className="ml-4">├── Git</div>
              <div className="ml-4">├── Docker</div>
              <div className="ml-4">└── AWS</div>
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
          <div className="pixel-border bg-apple-cream p-6">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-apple-blue mr-3 pixel-border flex items-center justify-center">
                <span className="text-white text-xs font-bold">APP</span>
              </div>
              <h3 className="retro-title text-lg text-apple-dark">PORTFOLIO.APP</h3>
            </div>
            <div className="font-apple text-sm text-apple-dark space-y-2 mb-4">
              <div> TYPE: WEB_APPLICATION</div>
              <div> STATUS: ACTIVE</div>
              <div> TECH_STACK: REACT + TYPESCRIPT</div>
              <div> DESCRIPTION: MODERN_PORTFOLIO_SITE</div>
              <div> FEATURES: SPA_ROUTING, RESPONSIVE_DESIGN</div>
            </div>
            <div className="flex gap-2">
              <div className="pixel-border bg-apple-amber px-2 py-1 text-xs font-bold text-apple-dark">REACT</div>
              <div className="pixel-border bg-apple-green px-2 py-1 text-xs font-bold text-apple-dark">TYPESCRIPT</div>
            </div>
          </div>
          
          {/* Project 2 */}
          <div className="pixel-border bg-apple-cream p-6">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-apple-green mr-3 pixel-border flex items-center justify-center">
                <span className="text-white text-xs font-bold">SYS</span>
              </div>
              <h3 className="retro-title text-lg text-apple-dark">ECOMMERCE.SYS</h3>
            </div>
            <div className="font-apple text-sm text-apple-dark space-y-2 mb-4">
              <div> TYPE: FULL_STACK_SYSTEM</div>
              <div> STATUS: DEVELOPMENT</div>
              <div> TECH_STACK: NEXT.JS + NODE.JS</div>
              <div> DESCRIPTION: COMPLETE_SHOP_SOLUTION</div>
              <div> FEATURES: AUTH, PAYMENTS, ADMIN_PANEL</div>
            </div>
            <div className="flex gap-2">
              <div className="pixel-border bg-apple-blue px-2 py-1 text-xs font-bold text-white">NEXT.JS</div>
              <div className="pixel-border bg-apple-amber px-2 py-1 text-xs font-bold text-apple-dark">NODE.JS</div>
            </div>
          </div>
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
