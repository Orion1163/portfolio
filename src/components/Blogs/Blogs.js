import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogsCard from "./BlogsCard";
import Particle from "../Particle";
import blog1 from "../../Assets/blogs/blog1.png";
import blog2 from "../../Assets/blogs/blog2.png";
import blog3 from "../../Assets/blogs/blog3.png";
import blog4 from "../../Assets/blogs/blog4.png";
import blog5 from "../../Assets/blogs/blog5.png";
import blog6 from "../../Assets/blogs/blog6.png";
import blog7 from "../../Assets/blogs/blog7.png";
import blog8 from "../../Assets/blogs/blog8.png";
function Blogs() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blogs </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few blogs I've written recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <BlogsCard
              imgPath={blog1}
              isBlog={true}
              title="How to Get a List of the Fields in a Django Model"
              description="Implemented dynamic retrieval of model fields in Django using the _meta API. Leveraged _meta.get_fields() to access all model fields, including relationships, and _meta.get_field() to fetch specific field details. This approach eliminates hardcoded field definitions, enabling flexible model handling, improved scalability, and cleaner code—particularly useful for dynamic form generation, data serialization, and backend automation."
              ghLink="https://www.geeksforgeeks.org/python/how-to-get-a-list-of-the-fields-in-a-django-model/"
            />
          </Col>

          <Col md={4} className="project-card">
            <BlogsCard
              imgPath={blog2}
              isBlog={true}
              title="How to Filter ForeignKey Choices in a Django ModelForm"
              description="Implemented dynamic filtering of ForeignKey fields in Django ModelForms by customizing the field’s queryset within the __init__ method. Applied conditional filtering based on specific criteria (e.g., attribute-based filtering and user-specific data using authenticated sessions). This approach improves data relevance, enhances user experience, and enforces access control by restricting selectable options in form dropdowns, making applications more secure, scalable, and user-friendly."
              ghLink="https://www.geeksforgeeks.org/python/how-to-filter-foreignkey-choices-in-a-django-modelform/"
            />
          </Col>

          <Col md={4} className="project-card">
            <BlogsCard
              imgPath={blog3}
              isBlog={true}
              title="How to Disable Logging While Running Unit Tests in Python Django"
              description="Implemented strategies to suppress logging output during Django unit test execution to improve readability and focus on test results. Configured conditional logging using sys.argv to disable loggers during test runs and developed a custom test runner to programmatically control logging levels. This approach ensures cleaner test outputs, reduces noise in the console, and enhances debugging efficiency in development workflows."
              ghLink="https://www.geeksforgeeks.org/python/how-to-disable-logging-while-running-unit-tests-in-python-django/"
            />
            
          </Col>

          <Col md={4} className="project-card">
            <BlogsCard
              imgPath={blog4}
              isBlog={true}
              title="Logging Server Errors in Django"
              description="Configured robust logging in Django using Python’s built-in logging framework to capture and monitor server-side errors. Designed custom LOGGING settings with file and console handlers to record error-level and debug-level events, enabling efficient error tracking, debugging, and performance monitoring. Implemented multiple log levels (DEBUG, INFO, WARNING, ERROR, CRITICAL) and tested error handling through custom views, ensuring reliable diagnostics and improved application maintainability."
              ghLink="https://www.geeksforgeeks.org/python/logging-server-errors-in-django/"
            />
          </Col>

          <Col md={4} className="project-card">
            <BlogsCard
              imgPath={blog5}
              isBlog={true}
              title="Deploy an ASGI Django Application"
              description="Deployed a Django application using ASGI (Asynchronous Server Gateway Interface) to enable efficient handling of concurrent requests and real-time communication. Configured the asgi.py interface and utilized an ASGI server (Daphne) to serve the application, improving scalability and performance. This implementation supports asynchronous operations such as WebSockets and high-traffic handling, making the application more responsive and production-ready."
              ghLink="https://www.geeksforgeeks.org/python/deploy-an-asgi-django-application/"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <BlogsCard
              imgPath={blog6}
              isBlog={true}
              title="Anonymous Feedback System using Django"
              description="Developed a Django-based anonymous feedback system enabling users to submit reviews and ratings without authentication. Designed a ModelForm-driven architecture to handle user input, with backend models for storing feedback messages, ratings, and timestamps. Implemented dynamic UI features such as a star-based rating system using JavaScript, along with secure form handling and redirection workflows. This solution improves user engagement while ensuring simplicity, anonymity, and efficient data collection."
              ghLink="https://www.geeksforgeeks.org/python/anonymous-feedback-system-using-django/"
            />
          </Col>

          <Col md={4} className="project-card">
            <BlogsCard
              imgPath={blog7}
              isBlog={true}
              title="Django Google Calender Integration in Python"
              description="Integrated Google Calendar API into a Django application using OAuth2 authentication to securely access user calendar data. Implemented token-based authentication flow, fetched real-time calendar events via Google APIs, and stored them in the database for further processing. Designed views and templates to display upcoming events, enabling seamless synchronization between external calendar services and the Django backend, enhancing functionality and user experience."
              ghLink="https://www.geeksforgeeks.org/python/django-google-calender-integration-in-python/"
            />
          </Col>
          <Col md={4} className="project-card">
            <BlogsCard
              imgPath={blog8}
              isBlog={true}
              title="Handle Multiple Forms on a Single Page in Django"
              description="Implemented a multi-form handling system in Django to manage multiple independent forms within a single view. Utilized form prefixes and conditional request handling to distinguish and process each form submission efficiently. Integrated server-side validation and dynamic data rendering, ensuring seamless user interaction without conflicts between forms. This approach enhances user experience, reduces navigation overhead, and demonstrates effective form management in complex Django applications."
              ghLink="https://www.geeksforgeeks.org/python/handle-multiple-forms-on-a-single-page-in-django/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Blogs;
