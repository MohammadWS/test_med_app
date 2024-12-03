import React, { useState, useEffect } from "react";

const ReportsLayout = () => {
    const [reports, setReports] = useState([]);
    const sampleReports = [
        {
            "id": "1",
            "doctorName": "Dr. John Doe",
            "doctorSpecialty": "Cardiology",
            "reportUrl": "http://example.com/report1.pdf"
        },
        {
            "id": "2",
            "doctorName": "Dr. Jane Smith",
            "doctorSpecialty": "Neurology",
            "reportUrl": "http://example.com/report2.pdf"
        }
    ]


    useEffect(() => {
        // For the sake of this example, assuming reports data comes from localStorage.
        // const storedReports = JSON.parse(localStorage.getItem('reports')) || [];
        // setReports(storedReports);
        setReports(sampleReports);
    }, []);

    // Function to handle downloading report (assuming report has a URL)
    const handleDownloadReport = (reportUrl) => {
        const link = document.createElement('a');
        link.href = reportUrl;
        link.download = reportUrl.split('/').pop(); // Get the file name from the URL
        link.click();
    };

    // Function to handle viewing report (open in new tab or modal)
    const handleViewReport = (reportUrl) => {
        window.open(reportUrl, '_blank');
    };

    return (
        <div className="main-content">
            <section className="mx-10 px-4">
                <div className="mx-auto">
                    <div data-aos="fade-up" className="flex flex-col space-y-4 flex-report">
                        <span className="text-3xl font-semibold text-center text-gray-700">Reports</span>

                        {/* Table Structure */}
                        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
                            <table className="table-auto w-full text-left text-gray-600">
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2 font-bold">Serial Number</th>
                                        <th className="px-4 py-2 font-bold">Doctor Name</th>
                                        <th className="px-4 py-2 font-bold">Doctor Specialty</th>
                                        <th className="px-4 py-2 font-bold">View Report</th>
                                        <th className="px-4 py-2 font-bold">Download Report</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {reports.map((report) => (
                                        <tr key={report.id} className="hover:bg-gray-100">
                                            <td className="px-4 py-2">{report.id}</td>
                                            <td className="px-4 py-2">{report.doctorName}</td>
                                            <td className="px-4 py-2">{report.doctorSpecialty}</td>
                                            <td className="px-4 py-2">
                                                <button
                                                    onClick={() => handleViewReport(report.reportUrl)}
                                                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none transition duration-150 ease-in-out"
                                                >
                                                    View Report
                                                </button>
                                            </td>
                                            <td className="px-4 py-2">
                                                <button
                                                    onClick={() => handleDownloadReport(report.reportUrl)}
                                                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none transition duration-150 ease-in-out"
                                                >
                                                    Download Report
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ReportsLayout;
