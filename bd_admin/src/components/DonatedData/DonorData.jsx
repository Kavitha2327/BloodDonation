import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { MDBDataTable } from "mdbreact";
import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import "./DonorData.css";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import moment from "moment";

const DataTableComponent = () => {
  const { date, eventName } = useParams();
  const [tableData, setTableData] = useState({
    columns: [
      { label: "S.No", field: "sno", sort: "asc", width: 50 },
      { label: "Name", field: "name", sort: "asc", width: 150 },
      { label: "Type", field: "type", sort: "asc", width: 100 },
      { label: "ID", field: "id", sort: "asc", width: 100 },
      { label: "Mobile", field: "mobileNumber", sort: "asc", width: 120 },
      { label: "College", field: "college", sort: "asc", width: 150 },
      { label: "Department", field: "department", sort: "asc", width: 150 },
      { label: "Venue", field: "venue", sort: "asc", width: 150 },
      { label: "Event Date", field: "eventDate", sort: "asc", width: 280 },
    ],
    rows: [],
  });

  const port = import.meta.env.VITE_BACKEND_PORT;

  useEffect(() => {
    axios
      .get(port + "get-donated-data", {
        params: { eventDate: date },
      })
      .then((response) => {
        const data = response.data;

        const rows = data.map((item, index) => ({
          sno: index + 1,
          name: item.Name || "-",
          id: item.Id || "-",
          type: item.Type || "-",
          mobileNumber: item.MobileNumber || "-",
          college: item.College || "-",
          department: item.Department || "-",
          venue: item.Venue || "-",
          eventDate: moment(date).format("DD-MM-YYYY") || "-", // Use date passed as parameter
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
    const worksheet = workbook.addWorksheet("Donors Details");

    worksheet.columns = [
      { header: "S.No", key: "sno", width: 10 },
      { header: "Name", key: "name", width: 20 },
      { header: "ID", key: "id", width: 15 },
      { header: "Type", key: "type", width: 15 },
      { header: "Mobile", key: "mobileNumber", width: 15 },
      { header: "College", key: "college", width: 25 },
      { header: "Department", key: "department", width: 25 },
      { header: "Venue", key: "venue", width: 20 },
      { header: "Event Date", key: "eventDate", width: 15 },
    ];

    tableData.rows.forEach((row, index) => {
      worksheet.addRow({
        sno: index + 1,
        name: row.name,
        id: row.id,
        type: row.type,
        mobileNumber: row.mobileNumber,
        college: row.college,
        department: row.department,
        venue: row.venue,
        eventDate: row.eventDate,
      });
    });

    worksheet.getRow(1).eachCell((cell) => {
      cell.font = { bold: true };
      cell.alignment = { vertical: "middle", horizontal: "center" };
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FFD9E1F2" }, // Light blue
      };
    });

    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: "application/octet-stream" });
    saveAs(blob, "Donors_Details.xlsx");
  };

  const downloadCSV = () => {
    const csvData = tableData.rows.map((row, index) => ({
      SNo: index + 1,
      Name: row.name,
      ID: row.id,
      Type: row.type,
      Mobile: row.mobileNumber,
      College: row.college,
      Department: row.department,
      Venue: row.venue,
      EventDate: row.eventDate,
    }));

    const csvRows = [
      ["S.No", "Name", "ID", "Type", "Mobile", "College", "Department", "Venue", "Event Date"],
      ...csvData.map((row) => [
        row.SNo,
        row.Name,
        row.ID,
        row.Type,
        row.Mobile,
        row.College,
        row.Department,
        row.Venue,
        row.EventDate,
      ]),
    ]
      .map((e) => e.join(",")) // Convert each row into a CSV string
      .join("\n"); // Combine rows with newline characters

    const blob = new Blob([csvRows], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "Donors_Details.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="main-title" style={{ display: "flex", flexDirection: "column", cursor: "pointer" }}>
        <h3 style={{ marginBottom: "20px", fontFamily: "Poppins" }} className="heading1">
          Donor details
        </h3>
        <p style={{ marginTop: "-10px", marginLeft: "5px", fontSize: "13px" }}>
          <span style={{ fontWeight: "bold" }} className="heading2">
            HOME {" > "}{" "}
          </span>
          {eventName.toUpperCase()}
        </p>
      </div>
      <Row>
        <Col className="col-12">
          <Card
            style={{
              backgroundColor: "#fff",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
            }}
          >
            <CardTitle
              className="h1"
              style={{
                textAlign: "center",
                fontSize: "25px",
                marginTop: "20px",
                marginBottom: "-40px",
                fontWeight: "bolder",
              }}
            >
              Donors List
            </CardTitle>
            <CardBody>
              <div className="d-flex justify-content-end align-items-center">
                <div>
                  <Button
                    type="button"
                    style={{
                      margin: 10,
                      fontSize: "0.825rem",
                      fontWeight: 600,
                      color: "white",
                      backgroundColor: "#7A6FBE",
                    }}
                    onClick={downloadExcel}
                  >
                    EXCEL
                  </Button>
                  <Button
                    type="button"
                    style={{
                      margin: 10,
                      fontSize: "0.825rem",
                      color: "white",
                      fontWeight: 600,
                      backgroundColor: "#7A6FBE",
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
                paginationLabel={["Prev", "Next"]}
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
