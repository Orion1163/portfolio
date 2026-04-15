import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import {
  MdOpenInNew,
  MdOutlineLaptopMac,
  MdOutlineVerified,
  MdOutlineSchool,
  MdWorkspacePremium,
  MdWorkOutline,
} from "react-icons/md";

const experiences = [
  {
    id: "sunshine",
    kind: "full-time",
    title: "Software & Embedded Developer",
    org: "Sunshine Powertronics Pvt. Ltd.",
    location: "Pune, India (On-site)",
    period: "Mar 2025 - Present",
    summary:
      "Developing an in-house testing infrastructure combining software and embedded system expertise. Responsiblefor server deployment, automation scripts, and embedded device integration to enable efficient testing, datalogging, and system validation.",
    tags: ["Embedded C++", "React.js", "Node.js", "Python", "Django", "React Native", "Git", "AWS", "Devops"],
  },
  {
    id: "sunshine",
    kind: "internship",
    title: "Software & Embedded Developer Intern",
    org: "Sunshine Powertronics Pvt. Ltd.",
    location: "Pune, India (On-site)",
    period: "Sep 2024 - Mar 2025",
    summary:
      "As an intern, contributing to real-time embedded systems projects and developed a React-based HR management panel to streamline employee data and attendance tracking.",
    tags: ["Embedded C++", "React.js", "Node.js", "MongoDB"],
  },
  {
    id: "intern-embedded",
    kind: "internship",
    title: "Student Intern",
    org: "upSkill Campus",
    location: "Remote",
    period: "Apr 2024 - Jun 2024",
    summary:
      "I focused on developing machine learning algorithms for crop and weed detection, a pivotal aspect of precision agriculture. I successfully completed a project where I applied these algorithms to distinguish between crops and weeds, contributing to advancements in agricultural technology. This experience refined my skills in data preprocessing, model development, and collaborative problem-solving in real-world applications.",
    tags: ["Data Science", "Machine Learning", "Python"],
  },
  {
    id: "intern",
    kind: "internship",
    title: "Full Stack Web Developer Intern",
    org: "Edunet Foundation",
    location: "Remote",
    period: "Feb 2024 - Apr 2024",
    summary:
      "Successfully completed the 6 weeks of the EY Global Delivery Services led internship in collaboration with AICTE from 28 February 2024 to 25 April 2024 on Full Stack Web Development under the Next Gen Employability Program.",
    tags: ["Python", "Django", "HTML", "CSS", "JavaScript"],
  },
  {
    id: "null",
    kind: "internship",
    title: "Full Stack Developer Intern",
    org: "NullClass",
    location: "Remote",
    period: "Dec 2023 — Jan 2024",
    summary:
      "In the YouTube clone's MERN-based development, the focus on React.js yielded a sleek video player. With features mirroring YouTube, it offers seamless playback, real-time collaboration, and optimized streaming for an immersive user experience.",
    tags: ["Express.js", "MongoDB", "React.js", "Node.js"],
  },
  {
    id: "null",
    kind: "education",
    title: "Bachelor of Engineering in Artificial Intelligence and Data Science",
    org: "AISSMS Institute of Information Technology, Pune",
    location: "Pune, India",
    period: "2022 — 2025",
    summary:
      "Completed Bachelor of Engineering in Artificial Intelligence and Data Science from AISSMS Institute of Information Technology, Pune.",
    tags:[]
  },
  {
    id: "null",
    kind: "education",
    title: "Diploma in Computer Engineering",
    org: "Cusrow Wadia Institute of Technology",
    location: "Pune, India",
    period: "2019 — 2022",
    summary:
      "Completed Diploma in Computer Engineering from Cusrow Wadia Institute of Technology, Pune.",
    tags:[]
  },
];

const certifications = [
  {
    id: "aws-cloud-foundations",
    title: "AI For India 2.0",
    issuer: "HCL Guvi",
    issued: "Aug 2023",
    credentialUrl: "https://www.guvi.in/verify-certificate?id=c1255pBK501612hbZ9&course=ai_for_in_en",
    skills: ["AI", "Machine Learning", "Deep Learning"],
  },
  {
    id: "python-data-science",
    title: "Java Fundamentals",
    issuer: "Oracle Academy",
    issued: "May 2023",
    credentialUrl: "#",
    skills: ["Java"],
  },
  {
    id: "python-data-science",
    title: "Learning Python",
    issuer: "LinkedIn Learning",
    issued: "Feb 2022",
    credentialUrl: "#",
    skills: ["Python"],
  },
  {
    id: "fullstack-ey-edunet",
    title: "Ethical Hacking",
    issuer: "Internshala",
    issued: "Sep 2021",
    credentialUrl: "https://trainings.internshala.com/verify-certificate/?certificate_number=B5F382D9-3D6B-BECD-11B4-45C582D14A54",
    skills: ["Ethical Hacking", "Network Security", "Penetration Testing"],
  },
  {
    id: "fullstack-ey-edunet",
    title: "Internship and Training Program",
    issuer: "Internshala",
    issued: "Feb 2022",
    credentialUrl: "https://trainings.internshala.com/verify-certificate/?certificate_number=6E8C663F-3E33-98B4-F6EF-CEFF7E626743",
    skills: ["Communication Skills", "Teamwork", "Leadership"],
  },
];

function Experience() {
  return (
    <section>
      <Particle />
      <Container fluid className="experience-section" id="experience">
        <Container className="experience-inner">
          <Row className="experience-hero">
            <Col lg={10} className="mx-auto text-center">
              <p className="experience-kicker">Career path</p>
              <h1 className="experience-title">
                Work &amp; <strong className="purple">Experience</strong>
              </h1>
            </Col>
          </Row>

          <div className="experience-vt" role="list">
            {experiences.map((item, index) => {
              const cardRight = index % 2 === 0;
              const Icon =
                item.kind === "internship"
                  ? MdOutlineLaptopMac
                  : item.kind === "education"
                    ? MdOutlineSchool
                    : MdWorkOutline;
              const card = (
                <div className="experience-vt-card-wrap">
                  <div className="experience-card-frame">
                    <article className="experience-card">
                      <div
                        className="experience-card-glow"
                        aria-hidden="true"
                      />
                      <div className="experience-card-top">
                        <span className="experience-badge">
                          {item.kind === "internship"
                            ? "Internship"
                            : item.kind === "education"
                              ? "Education"
                              : "Full-time"}
                        </span>
                        <span className="experience-card-period">
                          {item.period}
                        </span>
                      </div>
                      <header className="experience-card-head">
                        <span className="experience-icon" aria-hidden="true">
                          <Icon />
                        </span>
                        <div className="experience-card-titles">
                          <h2 className="experience-card-title">
                            {item.title}
                          </h2>
                          <p className="experience-card-org">{item.org}</p>
                        </div>
                      </header>
                      <p className="experience-card-location">
                        {item.location}
                      </p>
                      <div
                        className="experience-card-divider"
                        aria-hidden="true"
                      />
                      <p className="experience-card-summary">{item.summary}</p>
                      <ul className="experience-tags">
                        {item.tags.map((tag) => (
                          <li key={tag}>{tag}</li>
                        ))}
                      </ul>
                    </article>
                  </div>
                </div>
              );
              const spine = (
                <div className="experience-vt-bridge-spine">
                  <span
                    className={`experience-vt-dot ${index === 0 ? "experience-vt-dot--latest" : ""}`}
                    aria-hidden="true"
                  />
                </div>
              );
              const arm = (
                <div className="experience-vt-bridge-arm" aria-hidden="true">
                  <span className="experience-vt-bridge-arm-glow" />
                </div>
              );
              return (
                <div
                  key={item.id}
                  className={`experience-vt-row ${cardRight ? "experience-vt-row--right" : "experience-vt-row--left"}`}
                  style={{ "--exp-i": index }}
                  role="listitem"
                >
                  {cardRight ? (
                    <>
                      <div
                        className="experience-vt-spacer"
                        aria-hidden="true"
                      />
                      <div className="experience-vt-bridge experience-vt-bridge--right">
                        {spine}
                        {arm}
                        {card}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="experience-vt-bridge experience-vt-bridge--left">
                        {card}
                        {arm}
                        {spine}
                      </div>
                      <div
                        className="experience-vt-spacer"
                        aria-hidden="true"
                      />
                    </>
                  )}
                </div>
              );
            })}
          </div>

          <div className="experience-certs">
            <div className="experience-certs-head text-center">
              <p className="experience-kicker">Credentials</p>
              <h2 className="experience-certs-title">
                Certifications &amp; <span className="purple">achievements</span>
              </h2>
              <p className="experience-certs-subtitle">
                Industry-recognized programs that strengthened practical skills
                across software, cloud, and engineering workflows.
              </p>
            </div>

            <Row className="g-4">
              {certifications.map((cert, index) => (
                <Col md={6} lg={4} key={cert.id}>
                  <article
                    className="experience-cert-card"
                    style={{ "--cert-i": index }}
                  >
                    <div className="experience-cert-top">
                      <span className="experience-cert-icon" aria-hidden="true">
                        <MdWorkspacePremium />
                      </span>
                      <span className="experience-cert-issued">
                        <MdOutlineVerified aria-hidden="true" />
                        {cert.issued}
                      </span>
                    </div>
                    <h3 className="experience-cert-title">{cert.title}</h3>
                    <p className="experience-cert-issuer">{cert.issuer}</p>
                    <ul className="experience-cert-skills">
                      {cert.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="experience-cert-link"
                    >
                      View credential
                      <MdOpenInNew aria-hidden="true" />
                    </a>
                  </article>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </Container>
    </section>
  );
}

export default Experience;
