import "./businessinfo.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const BusinessInfo = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    businessName: "",
    domain: "",
    contactPerson: "",
    mobileNumber: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.businessName.trim()) {
      newErrors.businessName = "This field is required";
    }
    if (!formData.domain.trim()) {
      newErrors.domain = "This field is required";
    }
    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = "This field is required";
    }
    if (!formData.mobileNumber.trim()) {
      newErrors.mobileNumber = "This field is required";
    } else if (!/^[+\d][\d\s-]{7,14}$/.test(formData.mobileNumber.trim())) {
      newErrors.mobileNumber = "Enter a valid mobile number";
    }
    if (!formData.email.trim()) {
      newErrors.email = "This field is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      navigate("/business-location");
    }
  };

  return (
    <>
      <div className="business-information-main-container">

        <div className="business-information-container">

          <div className="business-information-heading">
            <h2>Business Information</h2>
            <p>
              Provide the official details of your enterprise to set up your
              primary profile.
            </p>
          </div>

          <div className="business-information-form">

            <div className="form-group">
              <label>Business Name</label>
              <input
                type="text"
                placeholder="Sri Krishna Hospital"
                value={formData.businessName}
                onChange={handleChange("businessName")}
              />
              {errors.businessName && (
                <span className="field-error">{errors.businessName}</span>
              )}
            </div>

            <div className="form-group">
              <label>Domain</label>

              <select
                value={formData.domain}
                onChange={handleChange("domain")}
              >
                <option value="">Select domain</option>
                <option>Healthcare</option>
                <option>Banking</option>
                <option>Dining</option>
                <option>Services</option>
                <option>Beauty</option>
                <option>Diagnostic</option>
                <option>Others</option>
              </select>
              {errors.domain && (
                <span className="field-error">{errors.domain}</span>
              )}
            </div>

            <div className="form-group">
              <label>Contact Person</label>
              <input
                type="text"
                placeholder="Ravi Teja"
                value={formData.contactPerson}
                onChange={handleChange("contactPerson")}
              />
              {errors.contactPerson && (
                <span className="field-error">{errors.contactPerson}</span>
              )}
            </div>

            <div className="form-group">
              <label>Mobile Number</label>
              <input
                type="text"
                placeholder="+91 9876543210"
                value={formData.mobileNumber}
                onChange={handleChange("mobileNumber")}
              />
              {errors.mobileNumber && (
                <span className="field-error">{errors.mobileNumber}</span>
              )}
            </div>

            <div className="form-group full-width">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="contact@srikrishnahospital.com"
                value={formData.email}
                onChange={handleChange("email")}
              />
              {errors.email && (
                <span className="field-error">{errors.email}</span>
              )}
            </div>

          </div>

        </div>

        <div className="business-information-footer">

          <button className="back-btn"
                onClick={() => navigate(-1)}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.86875 6.75L7.06875 10.95L6 12L0 6L6 0L7.06875 1.05L2.86875 5.25H12V6.75H2.86875Z" fill="#181C1F"/>
            </svg>
               Back
          </button>

          <div className="progress">
            <span className="inactive"></span>
            <span className="active"></span>
            <span className="inactive"></span>
            <span className="inactive"></span>
            <span className="inactive"></span>
          </div>

          <button className="next-btn"
          onClick={handleNext}>
            Next <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="white"/>
                           </svg>
 
          </button>

        </div>

      </div>
    </>
  );
};

export default BusinessInfo;