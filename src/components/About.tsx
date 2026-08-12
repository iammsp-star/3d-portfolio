import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Aspiring Data Scientist with a focus on statistics, machine learning algorithms, and intelligent software design. Building a strong foundation to solve complex data challenges and create impactful AI solutions.
        </p>
        <div className="about-stats">
          <div className="about-stat-item">
            <span className="stat-num">2025–28</span>
            <span className="stat-label">B.Sc. Data Science</span>
          </div>
          <div className="about-stat-item">
            <span className="stat-num">ML & AI</span>
            <span className="stat-label">Core Focus</span>
          </div>
          <div className="about-stat-item">
            <span className="stat-num">Stats & Python</span>
            <span className="stat-label">Tech Foundation</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
