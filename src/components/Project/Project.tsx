import { Container } from './styles';
// import githubIcon from '../../assets/github.svg';
// import DownloadApp from '../../assets/download.webp'
import externalLink from '../../assets/external-link.svg';
import ScrollAnimation from 'react-animate-on-scroll';
import Almabetter from '../../assets/almabetter.png';
import TravelHangouts from '../../assets/travel-hangouts.png';
import Agrifi from '../../assets/agrifi.webp';
import ObenEV from '../../assets/obenev.png';
import Begig from '../../assets/begig.png';
import Eduvy from '../../assets/eduvy.png';

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {/* 1 */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <img src={Almabetter} width={50} height={50} alt="almabetter" />
              <div className="project-links">
                <a
                  href="https://www.almabetter.com/ "
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Almabetter</h3>
              <p style={{ color: '#23ce6b' }}>
                Almabetter is an online technical education platform that offers
                various courses to the students along with the certificate,
                placement guarantee.
              </p>
              <p>
                Developed backend systems and implemented multiple workflows,
                including a referral system and student leaderboard.
                Additionally, designed and deployed Lambda functions and
                scheduled tasks using cron jobs.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Express.js</li>
                <li>AWS Lambda</li>
                <li>Serverless</li>
                <li>DynamoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* 2 */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <img
                src={TravelHangouts}
                width={200}
                height={50}
                style={{ objectFit: 'contain' }}
                alt="travel-hangouts"
              />
              <div className="project-links">
                <a
                  href="https://travelhangouts.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Travel Hangouts</h3>
              <p style={{ color: '#23ce6b' }}>
                Travel hangouts is a travel agency website which offers their
                users to explore and book their vacation among a variety of
                travel packages.
              </p>
              <p>
                Designed and developed the Admin panel using React and built
                APIs to manage blogs, stories, tour packages, and user
                inquiries, ensuring seamless content management and efficient
                user interaction.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Express.js</li>
                <li>React.js</li>
                <li>MongoDB</li>
                <li>Nodemailer</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* 3 */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <img src={Agrifi} width={55} height={55} alt="agrifi" />
              <div className="project-links">
                <a
                  href="https://play.google.com/store/apps/details?id=com.agriapp.agrifi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Agrifi</h3>
              <p style={{ color: '#23ce6b' }}>
                Agrifi is a fintech application that offers credit to farmers
                and businesses through Buy Now Pay Later (BNPL) model, enabling
                users to purchase Agriapp products on a credit basis.
              </p>
              <p>
                Developed B2B and B2C backend applications for user KYC,
                onboarding, payments, and dashboards. Integrated third-party
                credit providers (Payopt, Rupifi) and monitored AWS logs to
                ensure seamless performance.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Express.js</li>
                <li>MySQL</li>
                <li>Third party APIs</li>
                <li>AWS (S3)</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* 4 */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <img src={ObenEV} width={80} height={80} alt="obenev" />
              <div className="project-links">
                <a
                  href="https://obenelectric.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>ObenEV</h3>
              <p style={{ color: '#23ce6b' }}>
                ObenEV is an electric vehicle startup that offers users test
                rides and access to their range of electric bikes through a
                user-friendly website.
              </p>
              <p>
                Developed the backend for test ride management, slot booking,
                vehicle booking, and integrated Razorpay for seamless payment
                processing. Also added the crons for booking reminders to the
                users.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>Razorpay</li>
                <li>Cron Jobs</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* 5 */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <img src={Begig} width={75} height={75} alt="obenev" />
              <div className="project-links">
                <a
                  href="https://www.begig.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Begig</h3>
              <p style={{ color: '#23ce6b' }}>
                Begig is a online platform that connects the skilled freelancers
                and recruiters, offering a seamless way to collaborate on a
                variety of freelancing tasks.
              </p>
              <p>
                Developed two separate backends for freelancers and recruiters,
                incorporating authentication, user KYC, gig posting, and payment
                gateway for the smooth flow between them.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Express.js</li>
                <li>PostgreSQL</li>
                <li>Razorpay</li>
                <li>Third party APIs</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* 6 */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <img
                src={Eduvy}
                width={60}
                height={60}
                alt="eduvy"
                style={{ objectFit: 'cover', marginTop: '10px' }}
              />
              <div className="project-links">
                <a
                  href="https://www.begig.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Eduvy</h3>
              <p style={{ color: '#23ce6b' }}>
                Eduvy is an application that helps students in finding the right
                college and taking admission . Moreover, it also offer
                institutions to manage the college data at one place.
              </p>
              <p>
                Designed and developed the whole backend structure for mobile
                app and the ERP dashboards. Also, hosted and deployed the
                applications on AWS lightsail and EC2.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>AWS</li>
                <li>Third party APIs</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/CodeVinayak/AI-Chatbot-Assistant"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a
                  href="https://ai-chatbot-t8fn.onrender.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Travel Hangouts</h3>
              <p>
                Developed an interactive chatbot application using Streamlit,
                OpenAI's GPT-3.5-turbo language model, and PyPDF2 for PDF text
                extraction, enabling users to ask context-based questions on
                uploaded PDFs and general queries.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Streamlit</li>
                <li>PyPDF2</li>
                <li>LangChain</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/CodeVinayak/Jupyter-Notebook/tree/main/Credit%20Risk%20Analysis"
                  target="\_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a
                  href="https://github.com/CodeVinayak/Jupyter-Notebook/blob/main/Credit%20Risk%20Analysis/Credit_Risk_Analysis.ipynb"
                  target="\_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Agrifi</h3>
              <p>
                Developed a highly accurate credit risk classification model
                using XGBoost, achieving 100% precision, recall, and F1-scores
                for predicting loan defaults.Implemented rigorous data
                preprocessing, feature engineering, and hyperparameter tuning on
                imbalanced credit risk data, employing ensemble methods,
                cross-validation, and model interpretation techniques.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>XGBoost</li>
                <li>Pandas</li>
                <li>Matplotlib</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/CodeVinayak/MediBook-Medical-Appointment-Scheduler-with-Health-History"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a
                  href="https://medibook.vinayaksingh.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Eduvy</h3>
              <p>
                Developed a secure medical appointment management platform with
                CRUD functionality, utilizing role-based access control,
                encryption techniques, and a robust MySQL database with
                normalized schema design and stored procedures for efficient
                scheduling, data privacy, and reliable retrieval of patient
                records.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>PHP</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>MySQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/CodeVinayak/Real-Time-Hand-Gesture-Driven-3D-Object-Manipulation"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a
                  href="https://youtu.be/NOm-3MynPLE"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>ObenEV</h3>
              <p>
                Developed a real-time hand gesture recognition system for
                intuitive 3D object manipulation. Leveraged a multimodal
                approach integrating OpenCV for video processing, MediaPipe for
                hand detection/landmark extraction, and scikit-learn for machine
                learning model training. Achieved 95.2% accuracy in hand gesture
                classification with efficient real-time performance.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>OpenCV</li>
                <li>MediaPipe</li>
                <li>scikit-learn</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://velocityai.vinayaksingh.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Begig</h3>
              <p>
                VelocityAI is a website that allows users to get instant answers
                to any question and generate stunning AI pictures using OpenAI's
                GPT-3 and DALL-E model.With VelocityAI, users can type in
                text-based prompts and receive a corresponding response.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>Html</li>
                <li>css</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://justmedicalbooks.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>MedicalBooks - Book Selling Site</h3>
              <p>
                This website sells medical books online and is popular with medical students. Medical students use it to buy books and acquire knowledge. The site has all kinds of medical books in one place.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
                <li>Woocommerce</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://drrohitdamor.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Dr.Rohit Damor - Online Appointment Booking Site</h3>
              <p>
                This website allows people to easily book appointments with you online. It takes just a minute to schedule a meeting. This kind of site is helpful for booking appointments and not missing any potential clients. You should try this website to see how convenient and efficient it is.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://mitulindustries.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mitul Industries - Manufacturing Industries Site</h3>
              <p>
              This manufacturing industry website shows off products and helps the business get more customers and information online. Making products is important but making money from them is the goal. This site can help the business make more profit.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* 
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://mayatmaj.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mayatmaj - Film Production Site</h3>
              <p>
                This agency website promotes post production, virtual production, and video marketing services. It shows previous client work and reviews to get more business. If you need help with production, this website can give you information and connect you with the right people.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://www.smartcornersproperties.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>SmartCorners - Real Estate Properties Site</h3>
              <p>
              This real estate site displays land properties and helps buyers and sellers. Buyers can see lots of pictures, videos, and details about properties before visiting in person. It makes it easier for buyers to find what they want and helps sellers get more attention.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>               
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://madewithluv.in/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>MadeWithLuv - HomeDecor Site</h3>
              <p>
                This website sells home decor products and helps people decorate their homes. It is easy to find what you need, whether it's furniture or decorations. The site is useful for people who want to make their homes look nice and need some help.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
                <li>Woocommerce</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}
      </div>
    </Container>
  );
}
