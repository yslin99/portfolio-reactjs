import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>AI Apprentice @ AI Singapore<span>    Mar 2019 - Dec 2019</span></h2>
                        <ul>
                          <li>Structured coursework involving programming, modelling and deployment</li>
                          <li>Project assignment for the development of minimum viable product supporting 100 Experiments programme</li>
                          <li>Applying machine learning and natural language processing to develop an AI-based model to enhance search query understanding and resolution for travel industry</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Business Analyst @ Infineon Technologies<span>    Mar 2017 - Feb 2019</span></h2>
                        <ul>
                          <li>Analyse operation performance and define new metric to measure overall productivity</li>
                          <li>Develop performance dashboards for descriptive and diagnostic of manufacturing data</li>
                          <li>Drive operation efficiency aligning to corporate overall target</li>
                          <li>Explore, strategize and implement analytical use cases with business segments</li>
                          <li>Develop customized automation scripts for dashboard maintenance and various source synchronization</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Development Engineer @ Infineon Technologies<span>    Jan 2005 - Feb 2017</span></h2>
                        <ul>
                          <li>Material landscape, roadmap strategy and direction setting across various package platforms</li>
                          <li>Expert review on critical projects, harmonization tasks across platforms, material change / disaster management for In-house and consultation to SubCon Development</li>
                          <li>Define technical specification for development of new material and released material</li>
                          <li>Characterisation, development and qualification of pioneer release on Pd-coated Cu wire</li>
                          <li>Collaboration work with Institute of Material Research and Engineering @ Singapore, Fraunhofer Institute @ Germany for testing and developing new characterisation methods</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
