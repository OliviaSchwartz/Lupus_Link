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
            Very Well's Guide to Lupus
          </a>
          <img
            className="education-pictures"
            src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="lupus-guide"
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
            Lupus Foundation's Lupus Facts and Statistics
          </a>
          <img
            className="education-pictures"
            src="https://images.pexels.com/photos/891059/pexels-photo-891059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="lupus-foundation"
          />
          <h4 className="Description">
            Learn more about lupus with some quick statistics and facts
          </h4>
        </div>
        <div className="link-box">
          <a
            className="Title"
            href="https://www.rheumatology.org/I-Am-A/Patient-Caregiver/Diseases-Conditions/Lupus"
          >
            American College of Rheumatology Lupus Information
          </a>
          <img
            className="education-pictures"
            src="https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="rheumatology"
          />
          <h4 className="Description">
            {' '}
            Listings of rheumatologists and a lupus fact sheet.
          </h4>
        </div>
      </div>

      <div className="education-section">
        <h2 className="section-heading">Treating Lupus</h2>
        <div className="link-box">
          <a
            className="Title"
            href="https://www.verywellhealth.com/lupus-management-diet-4842153"
          >
            Very Well's Lupus Diet Recommendations{' '}
          </a>
          <img
            className="education-pictures"
            src="https://images.pexels.com/photos/1660030/pexels-photo-1660030.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="diet"
          />
          <h4 className="Description">
            While there is no set diet for lupus, focusing on healthy eating
            habits can help immensely with overall disease management.
          </h4>
        </div>
        <div className="link-box">
          <a
            className="Title"
            href="https://www.lupus.org/resources/medications-used-to-treat-lupus"
          >
            Lupus Foundation's Medicine Used to Treat Lupus
          </a>
          <img
            className="education-pictures"
            src="https://images.pexels.com/photos/576831/pexels-photo-576831.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="medicine"
          />
          <h4 className="Description">
            Because lupus can cause a lot of different health problems, there
            are many different kinds of medicines that can treat it. You and
            your doctors can work together to find the right combination of
            medicines for you.{' '}
          </h4>
        </div>
        <div className="link-box">
          <a
            className="Title"
            href="https://www.mayoclinic.org/diseases-conditions/lupus/diagnosis-treatment/drc-20365790"
            alt="treatment"
          >
            Mayo Clinic's Guide to Treating Lupus
          </a>
          <img
            className="education-pictures"
            src="https://images.pexels.com/photos/5407212/pexels-photo-5407212.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="treating"
          />
          <h4 className="Description">
            A thorough guide on the treatment of Lupus
          </h4>
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
            alt="needy"
          />
          <h4 className="Description">Find help with the cost of medicine </h4>
        </div>
        <div className="link-box">
          <a className="Title" href="https://tafcares.org/">
            The Assistance Fund
          </a>
          <img
            className="education-picture"
            src="https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="assistance"
          />
          <h4 className="Description">
            Provides financial support for co-payments, deductibles, and
            premiums to patients who are critically or chronically ill and
            already have insurance. You must be being treated for a covered
            illness in the United States and have insurance coverage for
            prescribed medications. Income and other eligibility requirements
            apply.
          </h4>
        </div>
        <div className="link-box">
          <a className="Title" href="https://www.patientadvocate.org/">
            Patient Advocate Foundation
          </a>
          <img
            className="education-pictures"
            src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="patient"
          />

          <h4 className="Description">
            Provides help with arbitration and negotiations related to medical
            debt or job retention issues related to their illness, and has
            financial resource directories for uninsured and underinsured
            patients.
          </h4>
        </div>
      </div>
    </div>
  )
}

export default Education
