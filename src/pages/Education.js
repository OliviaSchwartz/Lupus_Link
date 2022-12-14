const Education = () => {
  return (
    <div className="education-container">
      <h1 className="education-header">Educational Resources</h1>

      <div className="education-section">
        <h2 className="section-heading">Understanding Lupus</h2>
        <div className="link=-container"></div>
        <div className="link-box">
          <a
            className="Title"
            href="https://www.verywellhealth.com/lupus-4014693"
          >
            Very Wells Guide to Lupus
          </a>
          <img
            className="education-pictures"
            src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <h4 className="Description">
            Lupus information and links in an easy-to-read format
          </h4>
        </div>
        <div className="link-box">
          <a
            className="Title"
            href="https://www.lupus.org/resources/lupus-facts-and-statistics"
          >
            Lupus Foundations Lupus Facts and Statistics
          </a>
          <img
            className="education-pictures"
            src="https://images.pexels.com/photos/891059/pexels-photo-891059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <h4 className="Description">
            Learn more about lupus with some quick statistics and facts
          </h4>
        </div>
        <div className="link-box">
          <h3 className="Title"></h3>
          <h4 className="Description"></h4>
        </div>
      </div>

      <div className="education-section">
        <h2 className="section-heading">Treating Lupus</h2>
        <div className="link-box">
          <h3 className="Title"></h3>
          <h4 className="Description"></h4>
        </div>
        <div className="link-box">
          <h3 className="Title"></h3>
          <h4 className="Description"></h4>
        </div>
        <div className="link-box">
          <h3 className="Title"></h3>
          <h4 className="Description"></h4>
        </div>
      </div>

      <div className="education-section">
        <h2 className="section-heading">Financial Resources</h2>
        <div className="link-box">
          <a className="Title" href="https://www.needymeds.org/">
            Needy Meds
          </a>
          <img
            className="education-pictures"
            src="https://images.pexels.com/photos/3683042/pexels-photo-3683042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <h4 className="Description">Find help with the cost of medicine </h4>
        </div>
        <div className="link-box">
          <a className="Title" href="https://tafcares.org/">
            The Assistance Fund
          </a>
          <h4 className="Description"></h4>
        </div>
        <div className="link-box">
          <h3 className="Title"></h3>
          <h4 className="Description"></h4>
        </div>
      </div>
    </div>
  )
}

export default Education
