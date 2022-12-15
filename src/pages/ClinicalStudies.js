import axios from 'axios'
import { useState, useEffect } from 'react'

const ClinicalStudies = () => {
  return (
    <div>
      <h1 className="page-name">Clinical Trials Actively Recruiting</h1>
      <div className="clinical-studies-cards">
        <div className="clinical-study">
          <a
            className="study-name"
            href="https://beta.clinicaltrials.gov/study/NCT03543839?locStr=United%20States&country=United%20States&cond=lupus&aggFilters=status:rec&rank=3"
          >
            Trial of Belimumab in Early Lupus
          </a>
          <h4 className="study-description">
            This two year study will evaluate the effects of giving belimumab
            (Benlysta) to patients with Early Lupus. Early lupus is a diagnosis
            of lupus within 2 years. Subjects will be randomized to receive
            belimumab or placebo during the first year. During the second year,
            subjects who were randomized to belimumab will be rerandomized to
            continue to receive belimumab or to receive placebo. The study will
            look at clinical effects as well as effects on the immune system.
          </h4>
          <h4 className="study-eligibility">
            {' '}
            <em>Study Eligibility: </em> Lupus Diagnosis. Must be over 18.
          </h4>
        </div>

        <div className="clinical-study">
          <a
            className="study-name"
            href="https://beta.clinicaltrials.gov/study/NCT04868838?locStr=United%20States&country=United%20States&cond=lupus&aggFilters=status:rec&page=1&rank=8"
          >
            Daratumumab to Treat Active Lupus Nephritis
          </a>
          <h4 className="study-description">
            The purpose of this research is to study the safety and efficacy of
            daratumumab in inducing complete or partial remission in patients
            with active lupus nephritis.
          </h4>
          <h4 className="study-eligibility">
            <em>Study Eligibility: </em> Lupus Diagnosis. Must be over 18.
          </h4>
        </div>

        <div className="clinical-study">
          <a
            className="study-name"
            href="https://beta.clinicaltrials.gov/study/NCT03288324?locStr=United%20States&country=United%20States&cond=lupus&aggFilters=status:rec&page=2&rank=14"
          >
            Open-label Study of Tofacitinib for Moderate to Severe Skin
            Involvement in Young Adults With Lupus
          </a>
          <h4 className="study-description">
            This 76-week, 3-part Phase 1b/2 study is intended to evaluate the
            pharmacological properties (pharmacokinetics and pharmacodynamics),
            safety, tolerability and preliminary effectiveness of TOFA
            administrated to young adults (18-45 years) with moderately to
            severely active SLE-CL. Subjects will be studied at the Cincinnati
            Children's Hospital Medical Center (CCHMC) and in Cleveland at
            MetroHealth Medical Center.
          </h4>
          <h4 className="study-eligibility">
            <em>Study Eligibility: </em> Lupus Diagnosis. Must be between the
            ages of 18-45.
          </h4>
        </div>
      </div>
    </div>
  )
}

export default ClinicalStudies
