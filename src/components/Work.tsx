import { useState, useCallback, useEffect } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";

interface ProjectItem {
  title: string;
  category: string;
  tools: string;
  image: string;
  link: string;
}

const staticProjects: ProjectItem[] = [
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
  const [projectsList, setProjectsList] = useState<ProjectItem[]>(staticProjects);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/iammsp-star/repos?sort=updated&per_page=100")
      .then((res) => res.json())
      .then((repos) => {
        if (Array.isArray(repos) && repos.length > 0) {
          const staticMap = new Map<string, ProjectItem>(
            staticProjects.map((p) => [p.link.toLowerCase(), p])
          );

          const fetchedList: ProjectItem[] = repos
            .filter((repo: any) => !repo.fork && repo.name !== "iammsp-star")
            .map((repo: any) => {
              const url = repo.html_url.toLowerCase();
              if (staticMap.has(url)) {
                return staticMap.get(url)!;
              }
              const formattedTitle = repo.name
                .split(/[-_]/)
                .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");

              return {
                title: formattedTitle,
                category: repo.description || `${repo.language || "Software"} Project`,
                tools: [repo.language, ...(repo.topics || [])].filter(Boolean).join(", ") || "GitHub Repository",
                image: `${import.meta.env.BASE_URL}images/placeholder.webp`,
                link: repo.html_url,
              };
            });

          if (fetchedList.length > 0) {
            setProjectsList(fetchedList);
          }
        }
      })
      .catch(() => {
        // Fallback to staticProjects on API error
      });
  }, []);

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
      currentIndex === 0 ? projectsList.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, projectsList.length, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projectsList.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, projectsList.length, goToSlide]);

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
              {projectsList.map((project, index) => (
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
            {projectsList.map((_, index) => (
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

        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <a
            href="https://github.com/iammsp-star?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="contact-social"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.95rem",
              letterSpacing: "1px",
              color: "#dfdfdf",
              textDecoration: "none",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              padding: "10px 20px",
              borderRadius: "25px",
              backdropFilter: "blur(10px)",
              background: "rgba(255, 255, 255, 0.03)"
            }}
          >
            VIEW ALL REPOSITORIES ON GITHUB <MdArrowOutward />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
