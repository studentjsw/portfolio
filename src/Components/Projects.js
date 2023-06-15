import React from 'react'
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';

import "../Styles/Projects.css";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import project4 from "../images/project4.png";

function Projects() {
  return (
    <>
      <div class="box">
        <div class="container">
          <div class="row">
            <h1 className="project">Projects</h1>
            <div className="cred">
              {/* <h2>Credentials:</h2>
              <p>UserId:demo@gmail.com PassWord:demo@123</p>
              <p>UserId:admin@gmail.com PassWord:admin@123</p> */}
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4">
              <div class="insidebox text-center">
                <img className="img" src={project1} alt={project1} />
                <h5>Crm App</h5>
                <div className="card-description">
                  crm app is used for maintaining all commercials
                </div>
                <div className="card-footer">
                  <p>
                    <span style={{ color: "black" }}>TECH USED : </span>
                    REACT, NODE, EXPRESS, MONGODB,Socket.io
                  </p>
                </div>
                <div className="git">
                  <Button
                    target="_blank"
                    href="https://github.com/studentjsw/crm-frontend.git"
                    rel="noreferrer"
                    variant="contained"
                    className="live-btn"
                  >
                    <GitHubIcon />
                    FE
                  </Button>
                  <Button
                    target="_blank"
                    href="https://github.com/studentjsw/web2-bk.git"
                    rel="noreferrer"
                    variant="contained"
                    className="live-btn"
                  >
                    <GitHubIcon />
                    BE
                  </Button>
                  <Button
                    target="_blank"
                    href="https://crm-front-ttw5.onrender.com/"
                    rel="noreferrer"
                    variant="contained"
                    className="live-btn"
                  >
                    LIVE
                  </Button>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-4">
              <div class="insidebox text-center">
                <img className="img" src={project2} alt={project2} />
                <h5>url shortner</h5>
                <div className="card-description">
                An URL shortener ensures that you get the right messages out to 
                your audience 
                </div>
                <div className="card-footer">
                  <p>
                    <span style={{ color: "black" }}>TECH USED : </span>
                    REACT, NODE, EXPRESS, MONGODB
                  </p>
                </div>
                <div className="git">
                  <Button
                    target="_blank"
                    href="https://github.com/studentjsw/url-front"
                    rel="noreferrer"
                    variant="contained"
                  >
                    <GitHubIcon /> FE
                  </Button>
                  <Button
                    target="_blank"
                    href="https://github.com/studentjsw/url-bk"
                    rel="noreferrer"
                    variant="contained"
                    className="live-btn"
                  >
                    <GitHubIcon />
                    BE
                  </Button>
                  <Button
                    target="_blank"
                    href="https://main--ornate-marzipan-2d6e32.netlify.app/"
                    rel="noreferrer"
                    variant="contained"
                  >
                    LIVE
                  </Button>
                </div>
              </div>
            </div> 
            <div class="col-lg-4 col-md-4 col-sm-4">
              <div class="insidebox text-center">
                <img className="img" src={project3} alt={project3} />
                <h5>Pizza App</h5>
                <div className="card-description">
                  Online pizza app is designed for to order pizza  
                </div>
                <div className="card-footer">
                  <p>
                    <span style={{ color: "black" }}>TECH USED : </span>
                    REACT, NODE, EXPRESS, MONGODB,STRIPE
                  </p>
                </div>
                <div className="git">
                  <Button
                    target="_blank"
                    href="https://github.com/studentjsw/pizza-front.git"
                    rel="noreferrer"
                    variant="contained"
                  >
                    <GitHubIcon />
                    FE
                  </Button>
                  <Button
                    target="_blank"
                    href="https://github.com/studentjsw/pizza-backend.git"
                    rel="noreferrer"
                    variant="contained"
                  >
                    <GitHubIcon />
                    BE
                  </Button>
                  <Button
                    target="_blank"
                    href="https://candid-florentine-b6b5e8.netlify.app"
                    rel="noreferrer"
                    variant="contained"
                  >
                    Live
                  </Button>
                </div>
              </div>
            </div>
               <div class="col-lg-4 col-md-4 col-sm-4">
              <div class="insidebox text-center">
                <img className="img" src={project4} alt={project4} />
                <h5>Travel app</h5>
                <div className="card-description">
                  simple road travel login from
                </div>
                <div className="card-footer">
                  <p>
                    <span style={{ color: "black" }}>TECH USED : </span>
                    REACT, NODE,MONGO DB,EXPRESS
                  </p> 
                 </div>

                <div className="git">
                  <Button
                    target="_blank"
                    href="https://github.com/studentjsw/road-front.git"
                    rel="noreferrer"
                    variant="contained"
                  >
                    <GitHubIcon />
                    FE
                  </Button>
                  <Button
                    target="_blank"
                    href="https://github.com/studentjsw/road-backend.git"
                    rel="noreferrer"
                    variant="contained"
                  >
                    <GitHubIcon />
                    BE
                  </Button>
                  <Button
                    target="_blank"
                    href="https://6489b7100d4c4b21246ec22a--creative-fudge-6529a9.netlify.app/"
                    rel="noreferrer"
                    variant="contained"
                  >
                    LIVE
                  </Button> 
                </div>  
               </div> 
             </div> 
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects