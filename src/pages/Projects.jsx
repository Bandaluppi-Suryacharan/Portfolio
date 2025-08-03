import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import sgpa from "../assets/projects/sgpa.png";
import agro from "../assets/projects/agro.png";
import newsapp from "../assets/projects/newsapp.png";
import notesapp from "../assets/projects/notesapp.png";
import buybuddy from "../assets/projects/buybuddy.png";
import employ from "../assets/projects/employee.png";
import netfix from "../assets/projects/netfix.png";
import twitter from "../assets/projects/twitter.png";
import chatapp from "../assets/projects/chatapp.png";
import project from "../assets/projects/project.jpeg";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatapp}
              isBlog={false}
              title="ChatWave-RealTime Chat Application"
              description="This project is a real-time chat application built using the MERN stack — React, Node.js, Express.js, and MongoDB. It features secure user authentication with JWT and bcrypt, enabling protected routes and session management. Real-time 1-to-1 messaging is implemented using Socket.IO, allowing users to chat instantly. The frontend, styled with TailwindCSS and DaisyUI, is fully responsive and mobile-friendly. State is managed efficiently using Zustand, and  is enhanced with React Hot Toast alerts."
              ghLink="https://github.com/Bandaluppi-Suryacharan/PRODIGY_FS_4"
              demoLink="https://chatwave-backend-or28.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={buybuddy}
              isBlog={false}
              title="BuyBuddy-Ecommerce Website"
              description="This project is a secure user authentication system built using the MERN stack — React, Node.js, Express.js, and MongoDB. It features user registration and login functionality with secure password hashing using bcrypt and token-based authentication using JWT. The backend handles route protection, ensuring only authenticated users can access specific resources.This project demonstrates a strong foundation in full-stack development with a focus on security and user experience."
              ghLink="https://github.com/Bandaluppi-Suryacharan/PRODIGY_FS_3"
              demoLink="https://buy-buddy-bsc.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={employ}
              isBlog={false}
              title="Employee Management System"
              description="This is a full-stack web application developed using React, Node.js, Express.js, and MongoDB. It allows administrators to manage Employee details efficiently by adding, updating, and viewing student records. The application ensures structured data flow between frontend and backend with secure operations. It is a comprehensive solution for managing employee data in a user-friendly manner.Tailwind CSS is used to design a responsive and modern UI, enhancing the user experience."
              ghLink="https://github.com/Bandaluppi-Suryacharan/PRODIGY_FS_2"
              demoLink="https://employ-management-bsc.onrender.com/"
            />
          </Col>
          
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sgpa}
              isBlog={false}
              title="Semester SGPA Calculator"
              description="This is a simple and responsive web app built using HTML, CSS, and JavaScript to help students calculate their CGPA or SGPA based on semester grades. It provides a clean interface where users can input grades and instantly get results. The tool is useful for academic planning and progress tracking in a user-friendly way."
              ghLink="https://github.com/Bandaluppi-Suryacharan/SemesterGradepointsCalculator"
              demoLink="https://sgpc-bsc.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agro}
              isBlog={false}
              title="Agro Asserts"
              description="An agriculture-focused responsive website built with HTML, CSS, and JavaScript that showcases organic food products and promotes sustainable farming. It includes sections for product listings, blogs, customer reviews, and categories. The layout is optimized for both desktop and mobile, offering a smooth browsing experience for users interested in agri-products and organic living."
              ghLink="https://github.com/Bandaluppi-Suryacharan/Agriculture_Website"
              demoLink="https://agroasserts-bsc.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notesapp}
              isBlog={false}
              title="iNoteBook - Notes App"
              description="iNotebook is a personal note-taking application built using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to securely create, edit, and delete their notes, with all data stored securely in the backend. JWT is used for authentication, and bcrypt ensures password security.The intuitive frontend built with React and Bootstrap offers a smooth and responsive user experience."
              ghLink="https://github.com/Bandaluppi-Suryacharan/iNotebook-Mern-"
              // demoLink="https://github.com/Bandaluppi-Suryacharan/iNotebook-Mern-"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newsapp}
              isBlog={false}
              title="News App using React"
              description="A dynamic React application that fetches real-time news articles using the News API. It provides categorized news updates with features like infinite scroll and search functionality. The UI is built with Bootstrap for a clean, responsive layout, offering users a seamless way to stay updated with the latest headlines across various topics and regions."
              ghLink="https://github.com/Bandaluppi-Suryacharan/NewsApp"
              // demoLink="https://newsapp-bsc.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netfix}
              isBlog={false}
              title="Netflix Clone"
              description="A frontend clone of Netflix built using React and styled-components. The application replicates the layout and design of the original Netflix homepage, including banner sections, movie cards, and a responsive grid. This project showcases frontend design skills and a good grasp of React component structuring and styling techniques."
              ghLink="https://github.com/Bandaluppi-Suryacharan/Netflix_Clone"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Spotify Clone"
              description="A frontend clone of Netflix built using React and styled-components. The application replicates the layout and design of the original Netflix homepage, including banner sections, movie cards, and a responsive grid. This project showcases frontend design skills and a good grasp of React component structuring and styling techniques."
              ghLink="https://github.com/Bandaluppi-Suryacharan/Spotify_Clone"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twitter}
              isBlog={false}
              title="Twitter Clone"
              description="A UI-focused clone of Twitter built using React. It mimics the core layout of Twitter including navigation, tweet feed, and sidebar trends. This project highlights frontend development skills and provides a foundation for integrating backend features like user authentication and real-time updates in the future."
              ghLink="https://github.com/Bandaluppi-Suryacharan/Twitter_Clone"
            />
          </Col>
          
          

          

        </Row>
      </Container>
    </Container>
  )
}

export default Projects