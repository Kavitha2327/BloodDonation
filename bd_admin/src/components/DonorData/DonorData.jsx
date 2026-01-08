import React, { useEffect, useState } from "react";
import axios from "axios";
import { data, useParams } from "react-router-dom";
import { MDBDataTable } from "mdbreact";
import { Row, Col, Card, CardBody, CardTitle, Button, Form } from "reactstrap";
import "./DonorData.css";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import moment from "moment";

const DataTableComponent = () => {
    // const port = import.meta.env.REACT_APP_SERVER_PORT;
    var { date, eventName } = useParams();
    // date = date.split("-").reverse().join("-");
  const [tableData, setTableData] = useState({
    columns: [
      { label: "S.No", field: "sno", sort: "asc", width: 50 },
      { label: "Name", field: "name", sort: "asc", width: 150 },
      { label: "Roll Number", field: "rollno", sort: "asc", width: 120 },
      { label: "Mobile", field: "mobile", sort: "asc", width: 100 },
      { label: "College", field: "college", sort: "asc", width: 200 },
      { label: "Branch", field: "branch", sort: "asc", width: 150 },
      { label: "Event Date", field: "eventDate", sort: "asc", width: 120 },
      { label: "Donated", field: "donated", sort: "asc", width: 80 },
    ],
    rows: [],
  });
  const port = import.meta.env.VITE_BACKEND_PORT;

  useEffect(() => {
    axios
      .get(port + "get-registered-data")
      .then((response) => {
        const data = response.data;
        const filteredData = date
          ? data.filter((student) => student.EventDate === date)
          : data;

        const rows = filteredData.map((student, index) => ({
          sno: index + 1,
          name: student.studentname,
          rollno: student.rollno,
          mobile: student.mobilenumber,
          college: student.college,
          branch: student.branch,
          eventDate: moment(student.EventDate).format("DD-MM-YYYY"),
          donated: student.donated ? "YES" : "NO",
        }));

        setTableData((prevData) => ({
          ...prevData,
          rows,
        }));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [date]);

    const downloadExcel = async () => {
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Donors Details');

        // Add headers with styling
        worksheet.columns = [
            { header: 'S.No', key: 'sno', width: 10 },
            { header: 'Name', key: 'name', width: 20 },
            { header: 'Roll Number', key: 'rollno', width: 20 },
            { header: 'Mobile', key: 'mobile', width: 15 },
            { header: 'College', key: 'college', width: 20 },
            { header: 'Branch', key: 'branch', width: 20 },
            { header: 'Event Date', key: 'eventDate', width: 15 },
            { header: 'Donated', key: 'donated', width: 10 },
        ];

        // Add rows from tableData
        tableData.rows.map((row, index) => {
            const rowValues = {
                sno: index + 1,
                name: row.name,
                rollno: row.rollno,
                mobile: row.mobile,
                college: row.college,
                branch: row.branch,
                eventDate: row.eventDate,
                donated: row.donated,
            };

            const excelRow = worksheet.addRow(rowValues);

            // Apply conditional formatting for "Donated" column
            const donatedCell = excelRow.getCell('donated');
            if (row.donated === 'NO') {
                donatedCell.fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: { argb: 'FFFF0000' }, // Red color
                };
            } else if (row.donated === 'YES') {
                donatedCell.fill = {
                    type: 'pattern',
                    pattern: 'solid',
                    fgColor: { argb: 'FF00FF00' }, // Green color
                };
            }
        });

        // Apply header styling
        worksheet.getRow(1).eachCell((cell) => {
            cell.font = { bold: true };
            cell.alignment = { vertical: 'middle', horizontal: 'center' };
            cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFD9E1F2' }, // Light blue
            };
        });

        // Generate the Excel file and trigger download
        const buffer = await workbook.xlsx.writeBuffer();
        const blob = new Blob([buffer], { type: 'application/octet-stream' });
        saveAs(blob, 'Donors_Details.xlsx');
    };

    const downloadCSV = () => {
        const csvData = tableData.rows.map((row, index) => ({
            SNo: index + 1,
            Name: row.name,
            RollNumber: row.rollno,
            Mobile: row.mobile,
            College: row.college,
            Branch: row.branch,
            EventDate: row.eventDate,
            Donated: row.donated,
        }));

        const csvRows = [
            ['S.No', 'Name', 'Roll Number', 'Mobile', 'College', 'Branch', 'Event Date', 'Donated'],
            ...csvData.map((row) => [
                row.SNo,
                row.Name,
                row.RollNumber,
                row.Mobile,
                row.College,
                row.Branch,
                row.EventDate,
                row.Donated,
            ]),
        ]
            .map((e) => e.join(',')) // Convert each row into a CSV string
            .join('\n'); // Combine rows with newline characters

        const blob = new Blob([csvRows], { type: 'text/csv;charset=utf-8;' });
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', 'Donors_Details.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <div className='main-title' style={{display:"flex", flexDirection: "column", cursor: "pointer"}}>
                <h3 style={{ marginBottom: "20px", fontFamily: "Poppins" }} className="heading1">Registration details</h3>
                <p style={{marginTop:"-10px", marginLeft:"5px", fontSize:'13px'}}> <span style={{fontWeight:"bold"}} className="heading2">HOME {'>'} </span>{eventName.toUpperCase()}</p>
            </div>
            <Row>
                <Col className="col-12">
                    <Card
                        style={{
                            backgroundColor: '#fff',
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            borderRadius: '8px',
                        }}
                    >
                        <CardTitle
                            className="h1"
                            style={{
                                textAlign: 'center',
                                fontSize: '25px',
                                marginTop: '20px',
                                marginBottom: '-40px',
                                fontWeight: 'bolder',
                            }}
                        >
                            Registered Students
                        </CardTitle>
                        <CardBody>
                            <div className="d-flex justify-content-end align-items-center">
                                <div>
                                    <Button
                                        type="button"
                                        style={{
                                            margin: 10,
                                            fontSize: '0.825rem',
                                            fontWeight: 600,
                                            color: 'white',
                                            backgroundColor: '#7A6FBE',
                                        }}
                                        onClick={downloadExcel}
                                    >
                                        EXCEL
                                    </Button>
                                    <Button
                                        type="button"
                                        style={{
                                            margin: 10,
                                            fontSize: '0.825rem',

                                            color: 'white',
                                            fontWeight: 600,
                                            backgroundColor: '#7A6FBE',
                                        }}
                                        onClick={downloadCSV}
                                    >
                                        CSV
                                    </Button>
                                </div>
                            </div>
                            <MDBDataTable
                                striped
                                bordered
                                small
                                data={tableData}
                                responsive
                                pagesAmount={3}
                                noBottomColumns
                                paginationLabel={['Prev', 'Next']}
                                hover
                                className="custom-table"
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default DataTableComponent;
