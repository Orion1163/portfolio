import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub, BsPen } from "react-icons/bs";

function BlogsCard(props) {
  const showSource = Boolean(props.ghLink);
  const showDemo = !props.isBlog && Boolean(props.demoLink);
  const showActions = showSource || showDemo;

  return (
    <Card className="project-card-view d-flex flex-column h-100">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body className="d-flex flex-column flex-grow-1">
        <Card.Title className="purple" style={{marginBottom: "15px"}}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{props.description}</Card.Text>
        {showActions && (
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-auto pt-3">
            {showSource && (
              <Button variant="primary" href={props.ghLink} target="_blank" rel="noreferrer">
                {props.isBlog ? <BsPen /> : <BsGithub />} &nbsp;
                {props.isBlog ? "Blog" : "GitHub"}
              </Button>
            )}
            {showDemo && (
              <Button variant="primary" href={props.demoLink} target="_blank" rel="noreferrer">
                <CgWebsite /> &nbsp;
                Demo
              </Button>
            )}
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
export default BlogsCard;
