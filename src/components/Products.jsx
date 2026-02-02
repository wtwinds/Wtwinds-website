export default function Products() {
  return (
    <div className="container mt-5">
      <h2 className="fw-bold text-center mb-4">Our Products</h2>

      <div className="row justify-content-center">
        <div className="col-md-8">

          {/* ===== WTWinds App (TOP PRODUCT) ===== */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h4 className="card-title fw-bold">WTWinds App</h4>

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

          {/* ===== HR Performance Appraisal ===== */}
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

              {/* 🔴 FIXED: was href="#" */}
              <button className="btn btn-primary" disabled>
                View Project
              </button>

              <hr />

              <p className="text-muted mb-0">
                Developed by <strong>Isba Patel & Aryan Hiremath</strong><br />
                Managed by <strong>Hetavi Shah</strong>
              </p>
            </div>
          </div>

          {/* ===== Tambola ===== */}
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

          {/* ===== Tic Tac Toe ===== */}
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

          {/* ===== Banking App ===== */}
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

          {/* ===== InShot ===== */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h4 className="card-title fw-bold">
                InShot – News Aggregation Web Application
              </h4>

              <p className="card-text mt-2">
                A modern news aggregation web application built using
                <strong> React</strong> and
                <strong> REST APIs</strong>.
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

          {/* ===== Fitness Mall ===== */}
          <div className="card shadow-sm mb-4">
            <div className="card-body">
              <h4 className="card-title fw-bold">
                Fitness Mall – E-Commerce Web Application
              </h4>

              <p className="card-text mt-2">
                A full-stack e-commerce web application focused on
                <strong> fitness products</strong>, built using
                <strong> React</strong>.
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
