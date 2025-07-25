import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { isMobile } from "react-device-detect";
import { Button } from "@/components/ui/button"
import { HomeButton } from "@/components/ui/button"
import { Card, CardTitle, CardContent, CardHeader } from './components/ui/card'
import { TimeBar } from './components/time/TimeBar'
import PdfViewer from './components/pdf/PdfViewer'

const version = "1.1"

const Home = () => (
  <div className="min-h-screen bg-apple-beige font-apple-system">
    
    <div className="flex flex-row justify-between px-2 py-2">
      <div className="flex flex-col text-apple-cream text-sm font-bold">
        <span className="mr-8">🍎 Version {version}</span>
        <span className="font-bold text-sm">Welcome - Sungjoon's Website</span>
      </div>

      <div className="flex flex-row gap-2 justify-center">
              <Button size='superSmallCircle' className='text-sm'>
                <Link to="https://www.github.com/sungjoon0710">
                  <img src="/gh_white.png" alt="Github" className='w-5 h-5' />
                </Link>
              </Button>
              <Button size='superSmallCircle' className='text-sm'>
                <Link to="https://www.linkedin.com/in/the-sungjoon-park/">
                  <img src="/in_white.png" alt="LinkedIn" className='w-5 h-5' />
                </Link>
              </Button>
              <Button size='superSmallCircle' className='text-sm'>
                <Link to="https://www.instagram.com/spark_0710/">
                  <img src="/ig_white.png" alt="IG" className='w-5 h-5' />
                </Link>
              </Button>
      </div>
    </div>
    
    <div className="container mx-auto px-8 py-4">
      
      <div className="mac-window p-8 mx-auto max-w-4xl">
        
        <Card round={!isMobile} className="text-center w-full aspect-square flex flex-col justify-center items-center border-0 bg-gradient-to-br from-white via-gray-100 to-gray-300">
          <CardTitle className="text-4xl md:text-5xl">
            SUNGJOON PARK
          </CardTitle>
          <CardContent className="pixel-border bg-apple-cream p-6 ">
            <p className="text-lg font-mono">
              REACT, TYPESCRIPT, NEXT.JS, ML/AI<br/>
              4TH YEAR CS @ COLUMBIA UNIVERSITY<br/>
              SEOUL, S. KOREA / W. HARLEM, NYC
            </p>
          </CardContent>
          
          <div className="flex flex-row sm:flex-row gap-4 justify-center items-center">
            <Button size='largeCircle'>
              <Link to="/about">ABOUT</Link>
            </Button>
            <Button size='largeCircle'>
              <Link to="/research">RESEARCH</Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
    
    <div className="fixed bottom-0 left-0 right-0 bg-white text-black px-2 py-2 text-xs">
      <div className="flex justify-between flex-col">
        <span>{new Date().toLocaleTimeString()}</span>
        <span>{new Date().toLocaleDateString()}</span>
        {!isMobile && <TimeBar currentTime={new Date().toISOString()} />}
      </div>
    </div>
  </div>
)

const About = () => (
  <div className="min-h-screen bg-apple-beige font-apple-system">
    <div className="flex flex-row justify-between px-2 py-2">
      <div className="flex flex-col text-apple-cream text-sm font-bold">
        <span className="mr-8">🍎 Version {version}</span>
        <span className="font-bold text-sm">About.txt</span>
      </div>

      <div className="flex flex-row gap-2 justify-center">
              <Button size='superSmallCircle' className='text-sm'>
                <Link to="https://www.github.com/sungjoon0710">
                  <img src="/gh_white.png" alt="Github" className='w-5 h-5' />
                </Link>
              </Button>
              <Button size='superSmallCircle' className='text-sm'>
                <Link to="https://www.linkedin.com/in/the-sungjoon-park/">
                  <img src="/in_white.png" alt="LinkedIn" className='w-5 h-5' />
                </Link>
              </Button>
              <Button size='superSmallCircle' className='text-sm'>
                <Link to="https://www.instagram.com/spark_0710/">
                  <img src="/ig_white.png" alt="IG" className='w-5 h-5' />
                </Link>
              </Button>
      </div>
    </div>
    
    <div className="container mx-auto px-8 py-8">
      <div className="mac-window p-8 mx-auto">
        <HomeButton />
        
        <div className="grid md:grid-cols-2 gap-8 mt-4">
          <Card className="pixel-border">
            <div className="flex flex-row justify-between">
              <CardHeader className="retro-title text-2xl text-apple-dark">BIO</CardHeader>
              <CardContent className="overflow-hidden w-50">
                <img src="/sungjoonProfile.jpg" alt="Sungjoon Park" />
              </CardContent>
            </div>
            <CardContent className="text-md flex flex-col gap-2">
              <div> NAME: SUNGJOON PARK</div>
              <div> EDUCATION: 🦁 COLUMBIA UNIVERSITY (B.A. COMPUTER SCIENCE)</div>
              <div> LOCATION: 🗽 NEW YORK, NY</div>
              <div> FOCUS: 🌐 FULL-STACK DEVELOPMENT & 🤖 AI/ML</div>
              <div> EXPERIENCE: 👨🏻‍💻 API DESIGN, 🛠️ DATA PIPELINES, 🔐 AUTH FLOW</div>
              <div> INTERESTS: 🏕️ CAMPING/HIKING, 🌍 EARTH SCIENCE, 🚴‍♂️ BIKING, 🦒 ENVIRONMENTAL BIO </div>
              <div> LANGUAGES: 🇰🇷 한국어, 🇺🇸 ENGLISH, 🇨🇳 中文</div>
            </CardContent>
          </Card>
          
          <Card className="pixel-border">
            <CardHeader className="retro-title text-2xl text-apple-dark">EXPERIENCE</CardHeader>
            <CardContent className="text-md flex flex-col">
              <div className="flex flex-row justify-between">
                <div className="font-bold text-md">FOUNDING ENGINEER - Plii</div>
                <div className="text-right text-sm text-[#666]">MAR 25' - PRESENT</div>
              </div>
              <div>├── Built Next.js committee management tool</div>
              <div>├── Engineered Firebase + JWT auth system</div>
              <div>├── Developed real-time notifications (iOS/Android) </div>
              <div>└── Bootstrapped Next.js from scratch </div>
              
              <div className="flex flex-row justify-between mt-2">
                <div className="font-bold text-md">DATA & COMPUTE INTERN - LEAP-STC</div>
                <div className="text-right text-sm text-[#666]">MAY 25' - PRESENT</div>
              </div>
              <div>├── Streamlined JupyterHub documentation for 120+ researchers</div>
              <div>└── Documentation revisions for major categories</div>

              <div className="flex flex-row justify-between mt-2">
                <div className="font-bold text-md">TEACHING ASSISTANT - COLUMBIA CS DEPT.</div>
                <div className="text-right text-sm text-[#666]">JAN - MAY 25'</div>
              </div>
              <div>├── CS 3203 Discrete Math with Prof. Tony Dear</div>
              <div>└── Gave recitation sessions and hosted office hours</div>
            
              <div className="flex flex-row justify-between mt-2">
                <div className="font-bold text-md">BACKEND ENGINEER - MDSalesNavi</div>
                <div className="text-right text-sm text-[#666]">JUL - AUG 24'</div>
              </div>
              <div>├── Built voice memo medical transcription system</div>
              <div>└── Fine-tuned BERT classifier for medical data</div>

              <div className="flex flex-row justify-between mt-2">
                <div className="font-bold text-md">RESEARCH INTERN - LAMONT-DOHERTY EARTH OBSERVATORY</div>
                <div className="text-right text-sm text-[#666]">MAR - DEC 24'</div>
              </div>
              <div>├── Analyzed seasonal bias trends in NMME hindcast Niño 3.4 SSTs</div>
              <div>└── Poster Presentation at American Geophysical Union 2024</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
)

const Research = () => (
  <div className="min-h-screen bg-apple-beige font-apple-system">
    <div className="flex flex-row justify-between px-2 py-2">
      <div className="flex flex-col text-apple-cream text-sm font-bold">
        <span className="mr-8">🍎 Version {version}</span>
        <span className="font-bold text-sm">Research.txt</span>
      </div>

      <div className="flex flex-row gap-2 justify-center">
              <Button size='superSmallCircle' className='text-sm'>
                <Link to="https://www.github.com/sungjoon0710">
                  <img src="/gh_white.png" alt="Github" className='w-5 h-5' />
                </Link>
              </Button>
              <Button size='superSmallCircle' className='text-sm'>
                <Link to="https://www.linkedin.com/in/the-sungjoon-park/">
                  <img src="/in_white.png" alt="LinkedIn" className='w-5 h-5' />
                </Link>
              </Button>
              <Button size='superSmallCircle' className='text-sm'>
                <Link to="https://www.instagram.com/spark_0710/">
                  <img src="/ig_white.png" alt="IG" className='w-5 h-5' />
                </Link>
              </Button>
      </div>
    </div>
    
    <div className="container mx-auto px-8 py-12">
      <div className="mac-window p-8 mx-auto max-w-6xl">
        <HomeButton />
        
        <div className="grid md:grid-cols-2 gap-8 mt-4">
          <Card className="pixel-border">
            <div className="flex flex-row justify-between">
              <CardHeader className="retro-title text-2xl text-apple-dark">
                <Link to="/research/LDEO_PAPER.pdf">
                  LDEO PAPER
                </Link>
              </CardHeader>
              <div className="flex flex-row gap-2">
                <Button size='smallCircle' className='text-sm text-[#fff]'>
                  <Link to="/research/LDEO_PAPER.pdf">
                    PAPER
                  </Link>
                </Button>
                <Button size='smallCircle' className='text-sm text-[#fff] mr-6'>
                  <Link to="/research/LDEO_POSTER.pdf">
                    POSTER
                  </Link>
                </Button>
              </div>
            </div>
            <CardContent className="text-md flex flex-col gap-2">
              <div> TITLE: Evaluating Three Decades of NMME Hindcasts to Assess Model Performance in Predicting ENSO Onset</div>
              <div> STUDY PERIOD: Apr – Dec 2024</div>
              <div> FOCUS AREA: Climatology Analysis, El Niño/La Niña Onset</div>
              <div> TECHNOLOGIES: Python, Matplotlib, NumPy, Pandas</div>
              <div> AFFILIATION: Summer Research Internship at Lamont-Doherty Earth Observatory</div>
              <div> COLLABORATOR: Sheen Zutshi, Barnard College</div>
              <div> ADVISOR: Dr. Muhammad Azhar Ehsan, Center for Climate Systems Research</div>
            </CardContent>
          </Card>

          <Card className="pixel-border">
            <div className="flex flex-row justify-between">
              <CardHeader className="retro-title text-2xl text-apple-dark">
                <Link to="/research/KAN_PAPER.pdf">
                  KAN PAPER
                </Link>
              </CardHeader>
              <Button size='smallCircle' className='text-sm text-[#fff] mr-6'>
                <Link to="/research/KAN_PAPER.pdf">
                  PAPER
                </Link>
              </Button>
            </div>
            <CardContent className="text-md flex flex-col gap-2">
              <div> TITLE: Kolmogorov-Arnold Networks for Compact Speech Signal Disentanglement</div>
              <div> STUDY PERIOD: Apr – May 2025</div>
              <div> FOCUS AREA: Novel model architectures, Speech-signal disentanglement</div>
              <div> TECHNOLOGIES: PyTorch, Python, Convolutional Neural Networks</div>
              <div> AFFILIATION: Final Project for COMS 4995 Neural Networks & Deep Learning, Columbia University</div>
              <div> COLLABORATOR: Abhishek Chaudhary, Columbia Engineering</div>
              <div> ADVISOR: Arjun Mani, Columbia Engineering</div>
            </CardContent>
          </Card>
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
        <Route path="/research" element={<Research />} />
        <Route path="/research/KAN_PAPER.pdf" element={<PdfViewer fileName="KAN_PAPER.pdf" />} />
        <Route path="/research/LDEO_PAPER.pdf" element={<PdfViewer fileName="LDEO_PAPER.pdf" />} />
        <Route path="/research/LDEO_POSTER.pdf" element={<PdfViewer fileName="LDEO_POSTER.pdf" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
