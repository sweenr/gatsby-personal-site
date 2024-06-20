import React from 'react'
import Layout from '../components/layout'
import { Seo } from '../components/Seo'

import pic11 from '../assets/images/pic11.jpg'

const About = (props) => (
  <Layout>
    <div id="main" className="alt">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>About Me</h1>
          </header>
          <span className="image main">
            <img src={pic11} alt="" />
          </span>
          <p>
            Hi, my name is Richard! I'm an engineering leader and software
            developer based in the Jackson, MS metro area. I've been leading
            teams for over five years and developing software professionally for
            over 15 years, starting as a summer intern writing a web crawler in
            Java to search for and index web services. I married the love of my
            life{' '}
            <a
              href="https://kaylasween.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kayla
            </a>{' '}
            in 2016 and we have two Jack Russell terriers, Captain and Piper.
          </p>
          <p>
            Currently, I am Head of Engineering at{' '}
            <a
              href="http://hourwork.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              HourWork
            </a>
            , a B2B SaaS company that helps hourly employers, primarily in the
            quick-service restaurant industry, recruit and retain employees. Our
            biggest project there by far was a complete system rebuild,
            replacing the existing tech debt-ladened backend and no-code Bubble
            frontend with a new full stack Javascript system running an Express
            API and Lambdas on the backend and React on the frontend. We
            finished the project in nine months and released it with no major
            customer-facing issues.
          </p>
          <p>
            Before that, I was as an Engineering Manager and software engineer
            at Kopis Mobile, a small company based in Mississippi building apps
            and hardware for the military and first responders. In my time
            there, I worked a number of projects, including adding features to a
            rugged video sharing and streaming platform. I also led the
            technical implmentation of a web platform to store, organize, and
            share safety and security best practices for sports and
            entertainment venues.
          </p>
          <p>
            Previously, I worked on software developement at the{' '}
            <a
              href="http://cavs.msstate.edu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Center for Advanced Vehicular Systems
            </a>{' '}
            in the Human Factors group. My role was developing software tools to
            assist researchers at the Center, including a few projects in VR
            using Unity and the HTC Vive. I also spend a few summers working at
            the{' '}
            <a
              href="http://www.nrlssc.navy.mil/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Naval Research Lab
            </a>{' '}
            at Stennis Space Center, mostly doing Java development.
          </p>
          <p>
            I received my Master's degree in Computer Science in December 2012,
            from Mississippi State, with a focus on Software Engineering. I did
            my undergraduate work in Computer Science and Software Engineering,
            obtaining dual Bachelor's degrees from Mississippi State in May,
            2011.
          </p>
          <p>
            In my free time, I like to tinker with home automation using{' '}
            <a
              href="http://home-assistant.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Home Assistant
            </a>
            , play video games, and travel with Kayla. I also enjoy learning new
            things and working on side projects, like{' '}
            <a
              href="http://richardsween.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              developing
            </a>{' '}
            <a
              href="http://sweentobe.richardsween.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              web
            </a>{' '}
            <a
              href="http://gpsvolume.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              sites
            </a>{' '}
            or{' '}
            <a
              href="https://play.google.com/store/apps/details?id=com.richardsween.gpsvolume"
              target="_blank"
              rel="noopener noreferrer"
            >
              Android apps
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default About

export const Head = () => (
  <Seo title="About" description={'About Richard Sween'} />
)
