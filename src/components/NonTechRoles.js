const FORM = "https://forms.gle/dPRKidnEQq9LuxoG6";

export default function NonTechRoles() {
    const roles = [
        { name: "APM 1", icon: "bi-clipboard-data" },
        { name: "Program Manager", icon: "bi-person-workspace" },
    ];

    return (
        <div className="container py-5 text-center">
            <h2 className="fw-bold mb-5">Non-Tech Roles</h2>

            <div className="row g-4 justify-content-center">
                {roles.map((role, i) => (
                    <div className="col-md-4" key={i}>
                        <a href={FORM} target="_blank" className="text-decoration-none">
                            <div className="card shadow-sm border-0 p-4">
                                <i className={`bi ${role.icon} text-warning`} style={{ fontSize: 50 }}></i>
                                <h5 className="mt-3">{role.name}</h5>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}