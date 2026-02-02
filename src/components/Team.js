import React from "react";
import "../App.css";

const Team = () => {
    return (
        <div className="page-container">
            <h2 className="page-title">Our Team</h2>

            <table className="team-table">
                <thead>
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
                            <a
                                href="https://www.linkedin.com/in/isba-patel/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                View Profile
                            </a>
                        </td>
                    </tr>

                    <tr>
                        <td>Aryan Hiremath</td>
                        <td>SDE II</td>
                        <td>
                            <a
                                href="https://www.linkedin.com/in/aryan-hiremath"
                                target="_blank"
                                rel="noreferrer"
                            >
                                View Profile
                            </a>
                        </td>
                    </tr>

                    <tr>
                        <td>Lalit Mahajan</td>
                        <td>SDE II</td>
                        <td>
                            <a
                                href="https://www.linkedin.com/in/lalit-mahajan-a83550252/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                View Profile
                            </a>
                        </td>
                    </tr>

                    <tr>
                        <td>Hetavi Shah</td>
                        <td>PM II </td>
                        <td>
                            <a
                                href="https://www.linkedin.com/in/hetavi-shah-545588374"
                                target="_blank"
                                rel="noreferrer"
                            >
                                View Profile
                            </a>
                        </td>
                    </tr>

                    <tr>
                        <td>Mudit Verma</td>
                        <td>PM II</td>
                        <td>
                            <a
                                href="https://www.linkedin.com/in/muditverma18/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                View Profile
                            </a>
                        </td>
                    </tr>

                    <tr>
                        <td>Abhishek Gupta</td>
                        <td>PM I</td>
                        <td>
                            <a
                                href="https://www.linkedin.com/in/abhishek-gupta-7ba030206?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                target="_blank"
                                rel="noreferrer"
                            >
                                View Profile
                            </a>
                        </td>
                    </tr>

                    <tr>
                        <td>Vedanti Ingle</td>
                        <td>PM I</td>
                        <td>
                            <a
                                href="https://www.linkedin.com/in/vedanti-ingle-a0b746223?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                target="_blank"
                                rel="noreferrer"
                            >
                                View Profile
                            </a>
                        </td>
                    </tr>

                    <tr>
                        <td>Gunjan Deore</td>
                        <td>PM I</td>
                        <td>
                            <a
                                href="https://www.linkedin.com/in/gunjan-deore-0a3a97393?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                target="_blank"
                                rel="noreferrer"
                            >
                                View Profile
                            </a>
                        </td>
                    </tr>




                </tbody>
            </table>
        </div>
    );
};

export default Team;
