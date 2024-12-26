import { Container } from './styles';
import htmlIcon from '../../assets/html-icon.svg';
import cssIcon from '../../assets/css-icon.svg';
import jsIcon from '../../assets/js-icon.svg';
import nodeIcon from '../../assets/node-icon.svg';
import reactIcon from '../../assets/react-icon.svg';
import mongoDBIcon from '../../assets/mongoDB.png';
import AWSIcon from '../../assets/aws.png';
import mySQLIcon from '../../assets/mySQL.png';
import bootStrapIcon from '../../assets/bootstrap-icon.svg';
import ScrollAnimation from 'react-animate-on-scroll';
import KadamJain from '../../assets/Kadam-Jain.webp';

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Kadam, a passionate software developer specializing in
            creating innovative and efficient web and backend solutions. With
            expertise in HTML, CSS, JavaScript, React, Node.js, and Express, I
            build seamless, responsive applications tailored to meet client
            needs. My experience with databases like MongoDB and SQL ensures
            smooth data management and robust application performance.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.2 * 1000}
          style={{ marginTop: '2rem', marginBottom: '2rem' }}
        >
          <p>
            Additionally, I have hands-on expertise with cloud services such as
            AWS (S3, Lightsail, EC2), enabling me to deploy scalable and secure
            applications effortlessly. I'm open to freelance or contractual
            projects and committed to delivering high-quality software solutions
            that empower businesses in the digital era. Let's bring your project
            ideas to life!
          </p>
        </ScrollAnimation>
        {/* <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            I'm always open to taking on freelance or contractual projects,
            delivering high-quality software solutions that help businesses
            thrive in today's digital landscape. Let's collaborate and turn your
            project ideas into reality!
          </p>
        </ScrollAnimation> */}
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>My primary skills include, but are not limited to:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" title="HTML" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" title="CSS" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={bootStrapIcon} alt="Bootstrap" title="Bootstrap " />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" title="Javascript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" title="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={nodeIcon} alt="Node" title="Node" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={mySQLIcon} alt="mySQL" title="mySQL" />
            </ScrollAnimation>
          </div>

          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img
                src={mongoDBIcon}
                alt="mongoDB"
                title="mongoDB"
                style={{ width: '80px' }}
              />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={AWSIcon} alt="AWS" title="AWS" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <img
            src={KadamJain}
            alt="Kadam Jain"
            style={{
              width: '60%',
              borderRadius: '100%',
              aspectRatio: '1',
              objectFit: 'cover',
            }}
          />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
