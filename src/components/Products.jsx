export default function Products() {
  return (
    <div className="container mt-5">
      <h2 className="fw-bold text-center mb-4">Our Products</h2>

      <div className="row justify-content-center">
        <div className="col-md-8">

          {/* ===== WTWinds App (TOP PRODUCT) ===== */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h4 className="card-title fw-bold">
                WTWinds App
              </h4>

              <p className="card-text mt-2">
                A modern web application with a
                <strong> clean and intuitive UI</strong>, designed to provide
                seamless access to <strong>WTWinds formal programs</strong>.
                The platform includes secure authentication and smooth user
                flows for enrollment and user management.
              </p>

              <ul className="mb-3">
                <li>Elegant and responsive user interface</li>
                <li>Secure login & authentication system</li>
                <li>User enrollment for WTWinds formal programs</li>
                <li>Optimized user experience with smooth navigation</li>
              </ul>

              <p className="card-text">
                Built with scalability and performance in mind,
                ensuring a reliable experience for all users.
              </p>

              <a
                href="https://drive.google.com/file/d/10sajk4OdQekv3Vo2h9x6XtJSgynSDY1q/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Live Product
              </a>

              <hr />

              <p className="text-muted mb-0">
                Developed by <strong>Isba Patel and Aryan Hiremath</strong><br />
                Managed by <strong>Soumya Darshini Kar</strong>
              </p>
            </div>
          </div>
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h4 className="card-title fw-bold">
                HR Performance Appraisal System
              </h4>

              <p className="card-text mt-2">
                A modern HR appraisal platform designed to streamline
                <strong> employee performance evaluation</strong> using
                <strong> React, Node.js</strong> and
                <strong> role-based workflows</strong>.
              </p>

              <ul className="mb-3">
                <li>Role-based appraisal forms (Employee, Manager, HR)</li>
                <li>Goal setting & KPI-based evaluations</li>
                <li>Self-review and manager feedback flow</li>
                <li>Performance ratings & appraisal history</li>
              </ul>

              <p className="card-text">
                Built with a scalable architecture and secure authentication,
                suitable for real-world HR operations.
              </p>

              <a
                href="#"
                className="btn btn-primary"
              >
                View Project
              </a>

              <hr />

              <p className="text-muted mb-0">
                Developed by <strong>Isba Patel & Aryan Hiremath</strong><br />
                Managed by <strong>Hetavi Shah</strong>
              </p>
            </div>
          </div>

          {/* ===== Tambola Product ===== */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h4 className="card-title fw-bold">
                Real-Time Multiplayer Tambola Game
              </h4>

              <p className="card-text mt-2">
                A real-time multiplayer Tambola platform built using
                <strong> HTML, CSS, JavaScript</strong> and
                <strong> Python WebSockets</strong>.
              </p>

              <ul className="mb-3">
                <li>Live multiplayer rooms</li>
                <li>Auto ticket marking & claim validation</li>
                <li>Host-controlled number draw</li>
                <li>Real-time leaderboard</li>
              </ul>

              <p className="card-text">
                Fully deployed on <strong>Render</strong> with secure
                WebSocket communication.
              </p>

              <a
                href="https://tambola-wtwinds.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Live Product
              </a>

              <hr />

              <p className="text-muted mb-0">
                Developed by <strong>Isba Patel & Aryan Hiremath</strong>
              </p>
            </div>
          </div>

          {/* ===== Tic-Tac-Toe Product ===== */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h4 className="card-title fw-bold">
                Real-Time Multiplayer Tic-Tac-Toe
              </h4>

              <p className="card-text mt-2">
                A web-based Tic-Tac-Toe game built using
                <strong> HTML, CSS, JavaScript</strong> and
                <strong> Python (Flask)</strong>.
              </p>

              <ul className="mb-3">
                <li>Single-player & multiplayer modes</li>
                <li>Host & join live rooms</li>
                <li>Turn-based real-time gameplay</li>
                <li>Win & draw validation</li>
              </ul>

              <p className="card-text">
                Hosted on <strong>Render</strong> for easy access and demos.
              </p>

              <a
                href="https://tictactoe-bw7q.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Live Product
              </a>

              <hr />

              <p className="text-muted mb-0">
                Developed by <strong>Isba Patel</strong><br />
                Managed by <strong>Rudra Deshpande</strong>
              </p>
            </div>
          </div>

          {/* ===== Banking App Product ===== */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h4 className="card-title fw-bold">
                Banking & Stock Management App
              </h4>

              <p className="card-text mt-2">
                A full-stack banking simulation platform for managing
                accounts and transactions.
              </p>

              <ul className="mb-3">
                <li>User authentication & account management</li>
                <li>Send & receive money</li>
                <li>Transaction history tracking</li>
                <li>Database-driven backend</li>
              </ul>

              <p className="card-text">
                Deployed on <strong>Render</strong> with real-time updates.
              </p>

              <a
                href="https://bank-stock-app.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Live Product
              </a>

              <hr />

              <p className="text-muted mb-0">
                Developed by <strong>Lalit Mahajan</strong><br />
                Managed by <strong>Hetavi Shah & Mudit Verma</strong>
              </p>
            </div>
          </div>

          {/* ===== Flight Search Product (LAST) ===== */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h4 className="card-title fw-bold">
                Flight Search Web Application
              </h4>

              <p className="card-text mt-2">
                A modern flight search web app built using
                <strong> React</strong> with a clean glassmorphism UI.
              </p>

              <ul className="mb-3">
                <li>Search by flight number or route</li>
                <li>Multiple results with auto-fade transitions</li>
                <li>Pause-on-hover result cards</li>
                <li>Responsive & user-friendly design</li>
              </ul>

              <p className="card-text">
                Deployed as a static site on <strong>Render</strong>.
              </p>

              <a
                href="https://flight-search-wt.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Live Product
              </a>

              <hr />

              <p className="text-muted mb-0">
                Developed by <strong>Aryan Hiremath & Isba Patel</strong><br />
                Managed by <strong>Abhishek Gupta & Hetavi Shah & Mansi Patil</strong>
              </p>
            </div>
          </div>
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h4 className="card-title fw-bold">
                Real-Time Weather Forecast Application
              </h4>

              <p className="card-text mt-2">
                A modern weather application built using
                <strong> Flutter</strong> with
                <strong> BLoC state management</strong> and
                <strong> OpenWeather API</strong>.
              </p>

              <ul className="mb-3">
                <li>Real-time weather updates</li>
                <li>Search weather by city name</li>
                <li>Temperature, humidity & wind details</li>
                <li>Clean UI with responsive design</li>
                <li>Error handling for invalid locations</li>
              </ul>

              <p className="card-text">
                Uses <strong>REST APIs</strong> and follows
                <strong> clean architecture principles</strong>.
              </p>

              <a
                href="https://drive.google.com/file/d/1qAfFLN9a7tPl9JE8rj4ccfRGxGNf2oEC/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary "
              >
                View Live Product
              </a>

              <hr />

              <p className="text-muted mb-0">
                Developed by <strong>Isba Patel</strong><br />
                Managed by <strong>Gunjan Deore & Devyani Mali & Hetavi Shah</strong>
              </p>
            </div>
          </div>

          {/* ===== InShot Product ===== */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h4 className="card-title fw-bold">
                InShot – News Aggregation Web Application
              </h4>

              <p className="card-text mt-2">
                A modern news aggregation web application built using
                <strong> React</strong> and
                <strong> REST APIs</strong>, providing users with
                real-time news updates in a clean and responsive interface.
              </p>

              <ul className="mb-3">
                <li>Real-time news fetching from APIs</li>
                <li>Category-based news filtering</li>
                <li>Responsive and user-friendly UI</li>
                <li>Fast loading and optimized performance</li>
              </ul>

              <p className="card-text">
                Designed to deliver a smooth reading experience with
                a focus on simplicity and usability.
              </p>

              <a
                href="https://inshots.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Live Product
              </a>

              <hr />

              <p className="text-muted mb-0">
                Developed by <strong>Lalit Mahajan</strong><br />
                Designed by <strong>Vedanti Ingle</strong>
              </p>
            </div>
          </div>

          {/* ===== Fitness Mall Product ===== */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h4 className="card-title fw-bold">
                Fitness Mall – E-Commerce Web Application
              </h4>

              <p className="card-text mt-2">
                A full-stack e-commerce web application focused on
                <strong> fitness products</strong>, built using
                <strong> React</strong> with a clean and scalable UI.
              </p>

              <ul className="mb-3">
                <li>Browse and explore fitness products</li>
                <li>Product details with pricing information</li>
                <li>Responsive layout for all devices</li>
                <li>User-friendly shopping experience</li>
              </ul>

              <p className="card-text">
                Designed with performance and usability in mind,
                suitable for real-world online shopping platforms.
              </p>

              <a
                href="https://fitness-mall-4h2n.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Live Product
              </a>

              <hr />

              <p className="text-muted mb-0">
                Developed by <strong>Lalit Mahajan</strong><br />
                Designed by <strong>Gunjan Devore</strong>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
