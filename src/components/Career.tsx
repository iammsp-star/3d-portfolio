import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance</h4>
                <h5>Independent</h5>
              </div>
              <h3>2025 – Present</h3>
            </div>
            <p>
              Designed and deployed a full-stack business website to manage community engagement, membership, and training programs.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Sc. in Data Science</h4>
                <h5>SDBI (Mumbai University)</h5>
              </div>
              <h3>2025 – 2028</h3>
            </div>
            <p>
              Pursuing foundational knowledge in statistics, Python programming, and data structures to build a career in intelligent systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
