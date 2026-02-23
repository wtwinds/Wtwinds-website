import { useNavigate } from "react-router-dom";

export default function JoinTeam() {
    const navigate = useNavigate();

    return (
        <div className="container py-5 text-center">
            <h2 className="fw-bold mb-5">Join Our Team</h2>

            <div className="row justify-content-center g-4">

                {/* Tech */}
                <div className="col-md-4">
                    <div
                        className="card shadow-lg border-0 p-4 cursor-pointer"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/tech")}
                    >
                        <i className="bi bi-code-slash text-primary" style={{ fontSize: 60 }}></i>
                        <h4 className="mt-3">Tech</h4>
                    </div>
                </div>

                {/* Non Tech */}
                <div className="col-md-4">
                    <div
                        className="card shadow-lg border-0 p-4"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/non-tech")}
                    >
                        <i className="bi bi-clipboard-check text-warning" style={{ fontSize: 60 }}></i>
                        <h4 className="mt-3">Non Tech</h4>
                    </div>
                </div>

            </div>
        </div>
    );
}