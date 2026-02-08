import React from "react";

const Team = () => {
    return (
        <div className="container mt-5 mb-5">
            <h2 className="text-center fw-bold mb-4">Our Team</h2>

            <div className="table-responsive">
                <table className="table table-bordered table-hover align-middle">
                    <thead className="table-light">
                        <tr>
                            <th>Name</th>
                            <th>Role</th>
                            <th>LinkedIn</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Isba Patel</td>
                            <td>SDE II</td>
                            <td>
                                <a href="https://www.linkedin.com/in/isba-patel/" target="_blank" rel="noreferrer" className="btn btn-outline-primary btn-sm">
                                    View Profile
                                </a>
                            </td>
                        </tr>

                        <tr>
                            <td>Aryan Hiremath</td>
                            <td>SDE II</td>
                            <td>
                                <a href="https://www.linkedin.com/in/aryan-hiremath" target="_blank" rel="noreferrer" className="btn btn-outline-primary btn-sm">
                                    View Profile
                                </a>
                            </td>
                        </tr>

                        <tr>
                            <td>Lalit Mahajan</td>
                            <td>SDE II</td>
                            <td>
                                <a href="https://www.linkedin.com/in/lalit-mahajan-a83550252/" target="_blank" rel="noreferrer" className="btn btn-outline-primary btn-sm">
                                    View Profile
                                </a>
                            </td>
                        </tr>

                        <tr>
                            <td>Hetavi Shah</td>
                            <td>PM II</td>
                            <td>
                                <a href="https://www.linkedin.com/in/hetavi-shah-545588374" target="_blank" rel="noreferrer" className="btn btn-outline-primary btn-sm">
                                    View Profile
                                </a>
                            </td>
                        </tr>

                        <tr>
                            <td>Mudit Verma</td>
                            <td>PM II</td>
                            <td>
                                <a href="https://www.linkedin.com/in/muditverma18/" target="_blank" rel="noreferrer" className="btn btn-outline-primary btn-sm">
                                    View Profile
                                </a>
                            </td>
                        </tr>

                        <tr>
                            <td>Abhishek Gupta</td>
                            <td>PM I</td>
                            <td>
                                <a href="https://www.linkedin.com/in/abhishek-gupta-7ba030206" target="_blank" rel="noreferrer" className="btn btn-outline-primary btn-sm">
                                    View Profile
                                </a>
                            </td>
                        </tr>

                        <tr>
                            <td>Vedanti Ingle</td>
                            <td>PM I</td>
                            <td>
                                <a href="https://www.linkedin.com/in/vedanti-ingle-a0b746223" target="_blank" rel="noreferrer" className="btn btn-outline-primary btn-sm">
                                    View Profile
                                </a>
                            </td>
                        </tr>

                        <tr>
                            <td>Gunjan Deore</td>
                            <td>PM I</td>
                            <td>
                                <a href="https://www.linkedin.com/in/gunjan-deore-0a3a97393" target="_blank" rel="noreferrer" className="btn btn-outline-primary btn-sm">
                                    View Profile
                                </a>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Team;
