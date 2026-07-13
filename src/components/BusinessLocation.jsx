import "./businesslocation.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const BusinessLocation = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        address: "",
        country: "",
        state: "",
        city: "",
        pincode: "",
        mapsLink: "",
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

        if (!formData.address.trim()) {
            newErrors.address = "This field is required";
        }
        if (!formData.country) {
            newErrors.country = "This field is required";
        }
        if (!formData.state) {
            newErrors.state = "This field is required";
        }
        if (!formData.city.trim()) {
            newErrors.city = "This field is required";
        }
        if (!formData.pincode.trim()) {
            newErrors.pincode = "This field is required";
        } else if (!/^\d{4,10}$/.test(formData.pincode.trim())) {
            newErrors.pincode = "Enter a valid pincode";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validate()) {
            navigate("/queue-configuration");
        }
    };

    return (
        <>
            <div className="business-location-main-container">

                <div className="business-location-container">

                    <div className="business-location-heading">
                        <h2>Business Location</h2>

                        <p>
                            Configure your primary business operating address.
                            This information will be displayed to customers on
                            the app and used for automated distance calculations.
                        </p>
                    </div>

                    <div className="business-location-form">

                        {/* Address */}

                        <div className="form-group full-width">
                            <label>Address</label>

                            <textarea
                                rows="4"
                                placeholder="Plot No. 27, Tech Park Avenue, Madhapur"
                                value={formData.address}
                                onChange={handleChange("address")}
                            ></textarea>
                            {errors.address && (
                                <span className="field-error">{errors.address}</span>
                            )}
                        </div>

                        {/* Country & State */}

                        <div className="form-row">

                            <div className="form-group">
                                <label>Country</label>

                                <select value={formData.country} onChange={handleChange("country")}>
                                    <option value="">Select country</option>
                                    <option>India</option>
                                    <option>USA</option>
                                    <option>UK</option>
                                </select>
                                {errors.country && (
                                    <span className="field-error">{errors.country}</span>
                                )}
                            </div>

                            <div className="form-group">
                                <label>State</label>

                                <select value={formData.state} onChange={handleChange("state")}>
                                    <option value="">Select State</option>
                                    <option>Telangana</option>
                                    <option>Andhra Pradesh</option>
                                    <option>Karnataka</option>
                                </select>
                                {errors.state && (
                                    <span className="field-error">{errors.state}</span>
                                )}
                            </div>

                        </div>

                        {/* City & Pincode */}

                        <div className="form-row">

                            <div className="form-group">
                                <label>City</label>

                                <input
                                    type="text"
                                    placeholder="Hyderabad"
                                    value={formData.city}
                                    onChange={handleChange("city")}
                                />
                                {errors.city && (
                                    <span className="field-error">{errors.city}</span>
                                )}
                            </div>

                            <div className="form-group">
                                <label>Pincode</label>

                                <input
                                    type="text"
                                    placeholder="500081"
                                    value={formData.pincode}
                                    onChange={handleChange("pincode")}
                                />
                                {errors.pincode && (
                                    <span className="field-error">{errors.pincode}</span>
                                )}
                            </div>

                        </div>

                        {/* Google Maps */}

                        <div className="form-group full-width">
                            <label>Google Maps Link</label>

                            <input
                                type="text"
                                placeholder="https://maps.google.com/..."
                                value={formData.mapsLink}
                                onChange={handleChange("mapsLink")}
                            />
                        </div>

                    </div>

                </div>

                <div className="business-location-footer">

                    <button
                        className="back-btn"
                        onClick={() => navigate(-1)}
                    >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.86875 6.75L7.06875 10.95L6 12L0 6L6 0L7.06875 1.05L2.86875 5.25H12V6.75H2.86875Z" fill="#181C1F"/>
                        </svg>
                      Back
                    </button>

                    <div className="progress">
                        <span></span>
                        <span></span>
                        <span className="active"></span>
                        <span></span>
                        <span></span>
                    </div>

                    <button
                        className="next-btn"
                        onClick={handleNext}
                    >
                        Next <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="white"/>
                           </svg>

                    </button>

                </div>

            </div>
        </>
    );
};

export default BusinessLocation;