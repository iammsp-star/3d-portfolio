import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Pocket Parliament",
    category: "Political Simulation Game",
    tools: "Next.js, Zustand, React Three Fiber, TypeScript",
    image: `${import.meta.env.BASE_URL}images/pocket_parliament.png`,
    link: "https://github.com/iammsp-star/pocket-parliament",
  },
  {
    title: "Mental Health RAG",
    category: "AI & Retrieval-Augmented Generation",
    tools: "Python, LangChain, Vector DB, LLM",
    image: `${import.meta.env.BASE_URL}images/preview1.png`,
    link: "https://github.com/iammsp-star/Mental-Health-RAG",
  },
  {
    title: "Second Brain OS",
    category: "Productivity & Workspace Dashboard",
    tools: "Next.js, Tailwind CSS, TypeScript, Cyber UI",
    image: `${import.meta.env.BASE_URL}images/broki.png`,
    link: "https://github.com/iammsp-star/second-brain-os",
  },
  {
    title: "Comfy Cakes Game",
    category: "Browser Bakery Game",
    tools: "React, TypeScript, Vite, CSS Animations",
    image: `${import.meta.env.BASE_URL}images/callhq.png`,
    link: "https://github.com/iammsp-star/Comfy-Cakes-Game",
  },
  {
    title: "Movie Recommendation System",
    category: "Machine Learning & Data Science",
    tools: "Python, Scikit-Learn, Pandas, Collaborative Filtering",
    image: `${import.meta.env.BASE_URL}images/orrdr.png`,
    link: "https://github.com/iammsp-star/Technical-Assignment-Movie-Recommendation-System",
  },
  {
    title: "PDF to Handwritten",
    category: "Utility Tool & Document Engine",
    tools: "Python, OpenCV, Image Processing, ReportLab",
    image: `${import.meta.env.BASE_URL}images/pdf_to_handwritten.png`,
    link: "https://github.com/iammsp-star/pdf-to-handwritten",
  },
  {
    title: "AI Meeting Assistant",
    category: "AI Audio & Transcription Assistant",
    tools: "TypeScript, Speech-to-Text, LLM Summarizer",
    image: `${import.meta.env.BASE_URL}images/bond.png`,
    link: "https://github.com/iammsp-star/ai-meeting-assistant",
  },
  {
    title: "Weightless Data Visualizer",
    category: "3D Physics & Canvas Visualization",
    tools: "JavaScript, HTML5 Canvas, WebGL, Particle Physics",
    image: `${import.meta.env.BASE_URL}images/radix.png`,
    link: "https://github.com/iammsp-star/weightless-data-visualizer",
  },
  {
    title: "Calisthenics India Web",
    category: "Full-Stack Web Application",
    tools: "HTML5, CSS3, JavaScript, Event Platform",
    image: `${import.meta.env.BASE_URL}images/Maxlife.png`,
    link: "https://github.com/iammsp-star/calisthenics-india-website",
  },
  {
    title: "Retro Movie Shop",
    category: "E-Commerce Digital Storefront",
    tools: "JavaScript, Node.js, Express, HTML/CSS",
    image: `${import.meta.env.BASE_URL}images/sapphire.png`,
    link: "https://github.com/iammsp-star/retro-movie-shop",
  },
  {
    title: "Control Center Guide",
    category: "Interactive Gaming Guide",
    tools: "HTML5, CSS, Custom UI Controls",
    image: `${import.meta.env.BASE_URL}images/Solidx.png`,
    link: "https://github.com/iammsp-star/Control-Center-Guide",
  },
  {
    title: "Unspool Cinema App",
    category: "Mobile Application",
    tools: "Flutter, Dart, Movie Database REST API",
    image: `${import.meta.env.BASE_URL}images/placeholder.webp`,
    link: "https://github.com/iammsp-star/Unspool",
  },
  {
    title: "Cooked Culinary App",
    category: "Web Application",
    tools: "TypeScript, React, Smart Meal Planner",
    image: `${import.meta.env.BASE_URL}images/placeholder.webp`,
    link: "https://github.com/iammsp-star/cooked-app",
  },
  {
    title: "2D Physics Arcade Game",
    category: "Game Development",
    tools: "JavaScript, HTML5 Canvas, Collision Physics",
    image: `${import.meta.env.BASE_URL}images/placeholder.webp`,
    link: "https://github.com/iammsp-star/2d-game",
  },
  {
    title: "Terminal Portfolio OS",
    category: "Personal Developer Portfolio",
    tools: "TypeScript, React, Tailwind CSS",
    image: `${import.meta.env.BASE_URL}images/placeholder.webp`,
    link: "https://github.com/iammsp-star/portfolio-website",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Projects</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>{index + 1 < 10 ? `0${index + 1}` : index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
