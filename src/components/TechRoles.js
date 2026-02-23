const FORM = "https://forms.gle/dPRKidnEQq9LuxoG6";

export default function TechRoles() {
    const roles = [
        { name: "User Experience", icon: "bi-person-badge" },
        { name: "GitHub Manager", icon: "bi-github" },
        { name: "Python Developer", icon: "bi-filetype-py" },
        { name: "Backend Developer", icon: "bi-hdd-network" },
        { name: "Full Stack Trainer", icon: "bi-laptop" },
    ];

    return (
        <div className="container py-5 text-center">
            <h2 className="fw-bold mb-5">Tech Roles</h2>

            <div className="row g-4 justify-content-center">
                {roles.map((role, i) => (
                    <div className="col-md-3 col-sm-6" key={i}>
                        <a href={FORM} target="_blank" className="text-decoration-none">
                            <div className="card shadow-sm border-0 p-4 h-100">
                                <i className={`bi ${role.icon} text-primary`} style={{ fontSize: 50 }}></i>
                                <h6 className="mt-3 fw-semibold">{role.name}</h6>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}