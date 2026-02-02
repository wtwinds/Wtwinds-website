export default function Contact() {
    return (
        <div className="container mt-5">
            <h2><i className="bi bi-envelope-at"></i> Contact Us</h2>
            <hr />

            <div className="card p-4 shadow-sm">
                <p className="mb-2">
                    For any queries or support, please contact us via email:
                </p>

                <h5>
                    <a
                        href="mailto:suryanshchoudhary.wtwinds@gmail.com"
                        className="link-primary text-decoration-none"
                    >
                        <i className="bi bi-envelope-fill"></i>{" "}
                        suryanshchoudhary.wtwinds@gmail.com
                    </a>
                </h5>

                {/* click wali line yahan */}
                <p className="mt-2 text-muted">
                    Click on the email address to send us your query directly.
                </p>

                <hr className="my-4" />

                <h5>
                    <i className="bi bi-geo-alt-fill"></i> Office Address
                </h5>
                <p className="mb-0">
                    <strong>WT Winds Consultancy OPC Pvt. Ltd.</strong><br />
                    Sector 22A, Udyog Vihar,<br />
                    Gurgaon, Haryana – 122015
                </p>
            </div>
        </div>
    );
}
