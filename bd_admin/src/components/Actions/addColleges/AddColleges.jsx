import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Card,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "reactstrap";
import { MDBDataTable } from "mdbreact";
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import './AddColleges.css';

const AddColleges = () => {
    const port = import.meta.env.VITE_BACKEND_PORT;
    
    const [colleges, setColleges] = useState([]);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        collegeName: '',
        collegeCode: ''
    });
    const [editMode, setEditMode] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [errors, setErrors] = useState({});

    // Fetch all colleges
    const fetchColleges = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${port}colleges`);
            if (response.data.success) {
                setColleges(response.data.data);
            } else {
                toast.error('Failed to fetch colleges');
            }
        } catch (error) {
            console.error('Error fetching colleges:', error);
            toast.error('Error fetching colleges');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchColleges();
    }, []);

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    // Validation
    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.collegeName.trim()) {
            newErrors.collegeName = "College name is required";
        } else if (formData.collegeName.trim().length < 3) {
            newErrors.collegeName = "College name must be at least 3 characters";
        }
        
        if (!formData.collegeCode.trim()) {
            newErrors.collegeCode = "College code is required";
        } else if (formData.collegeCode.trim().length < 2) {
            newErrors.collegeCode = "College code must be at least 2 characters";
        } else if (formData.collegeCode.trim().length > 10) {
            newErrors.collegeCode = "College code must be at most 10 characters";
        }
        
        return newErrors;
    };

    // Handle form submission
    const handleSave = async () => {
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        try {
            setLoading(true);
            let response;
            
            if (editMode) {
                response = await axios.put(`${port}colleges/${editingId}`, formData);
            } else {
                response = await axios.post(`${port}colleges`, formData);
            }
            
            if (response.data.success) {
                toast.success(response.data.message);
                clearForm();
                setModalOpen(false);
                fetchColleges();
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            console.error('Error saving college:', error);
            toast.error(error.response?.data?.message || 'Error saving college');
        } finally {
            setLoading(false);
        }
    };

    // Handle edit
    const handleEdit = (college) => {
        setFormData({
            collegeName: college.collegeName,
            collegeCode: college.collegeCode
        });
        setEditMode(true);
        setEditingId(college._id);
        setModalOpen(true);
    };

    // Handle delete
    const handleDelete = async (id, collegeName) => {
        if (window.confirm(`Are you sure you want to delete "${collegeName}"?`)) {
            try {
                setLoading(true);
                const response = await axios.delete(`${port}colleges/${id}`);
                
                if (response.data.success) {
                    toast.success('College deleted successfully');
                    fetchColleges();
                } else {
                    toast.error('Failed to delete college');
                }
            } catch (error) {
                console.error('Error deleting college:', error);
                toast.error('Error deleting college');
            } finally {
                setLoading(false);
            }
        }
    };

    // Clear form
    const clearForm = () => {
        setFormData({ collegeName: '', collegeCode: '' });
        setEditMode(false);
        setEditingId(null);
        setErrors({});
    };

    // Toggle modal
    const toggleModal = () => {
        if (modalOpen) {
            clearForm();
        }
        setModalOpen(!modalOpen);
    };

    // Input styles for validation
    const inputStyles = (hasError) => ({
        borderColor: hasError ? '#dc3545' : '#ced4da',
        boxShadow: hasError ? '0 0 0 0.2rem rgba(220, 53, 69, 0.25)' : 'none',
    });

    const invalidFeedbackStyle = {
        color: '#dc3545',
        fontSize: '0.875rem',
        marginTop: '0.25rem'
    };

    // Prepare data for MDBDataTable
    const tableData = {
        columns: [
            {
                label: 'S.no',
                field: 'serial',
                sort: 'asc',
                width: 80
            },
            {
                label: 'College Name',
                field: 'collegeName',
                sort: 'asc',
                width: 500
            },
            {
                label: 'College Code',
                field: 'collegeCode',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Actions',
                field: 'actions',
                sort: 'disabled',
                width: 120
            }
        ],
        rows: colleges.map((college, index) => ({
            serial: index + 1,
            collegeName: college.collegeName,
            collegeCode: college.collegeCode,
            actions: (
                <div>
                    <Button
                        style={{ backgroundColor: '#7A6FBE', borderColor: '#7A6FBE' }}
                        size="sm"
                        className="me-2"
                        onClick={() => handleEdit(college)}
                        disabled={loading}
                    >
                        Edit
                    </Button>
                    <Button
                        color="danger"
                        size="sm"
                        onClick={() => handleDelete(college._id, college.collegeName)}
                        disabled={loading}
                    >
                        Delete
                    </Button>
                </div>
            )
        }))
    };

    return (
        <>
            <Toaster position="top-right" />
            <Row>
                <Col md={12}>
                    <Card>
                        <CardBody>
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h4 className="card-title mb-0">Manage Colleges</h4>
                                <Button 
                                    style={{ backgroundColor: '#7A6FBE', borderColor: '#7A6FBE' }}
                                    onClick={() => setModalOpen(true)}
                                    disabled={loading}
                                >
                                    Add College
                                </Button>
                            </div>
                            
                            {loading && colleges.length === 0 ? (
                                <div className="text-center py-4">
                                    <div className="spinner-border" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            ) : (
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
                            )}
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            {/* Add/Edit Modal */}
            <Modal isOpen={modalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>
                    {editMode ? 'Edit College' : 'Add New College'}
                </ModalHeader>
                <ModalBody>
                    <Row className="details_group">
                        <div className="mb-3 col-lg-12">
                            <span>College Name: <span style={{ color: 'red' }}>*</span></span>
                            <Input
                                type="text"
                                name="collegeName"
                                value={formData.collegeName}
                                placeholder={errors.collegeName ? errors.collegeName : "Ex: Aditya University"}
                                onChange={handleInputChange}
                                style={inputStyles(errors.collegeName)}
                            />
                            {errors.collegeName && (
                                <div style={invalidFeedbackStyle}>{errors.collegeName}</div>
                            )}
                        </div>
                    </Row>
                    <Row className="details_group">
                        <div className="mb-3 col-lg-12">
                            <span>College Short Code: <span style={{ color: 'red' }}>*</span></span>
                            <Input
                                type="text"
                                name="collegeCode"
                                value={formData.collegeCode}
                                placeholder={errors.collegeCode ? errors.collegeCode : "Ex: AUS"}
                                onChange={handleInputChange}
                                style={{ 
                                    ...inputStyles(errors.collegeCode),
                                    textTransform: 'uppercase'
                                }}
                                maxLength="10"
                            />
                            {errors.collegeCode && (
                                <div style={invalidFeedbackStyle}>{errors.collegeCode}</div>
                            )}
                        </div>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button 
                        style={{ backgroundColor: '#7A6FBE', borderColor: '#7A6FBE' }}
                        onClick={handleSave}    
                        disabled={loading}
                    >
                        {loading ? 'Saving...' : (editMode ? 'Update' : 'Save')}
                    </Button>
                    <Button className="btn-outline-warning" onClick={toggleModal}>
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
};

export default AddColleges;
