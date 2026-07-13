import "./queueconfig.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const QueueConfig = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        tokenPrefix: "",
        serviceTime: "",
        maxTokens: "",
        notifyBefore: "",
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

        if (!formData.tokenPrefix.trim()) {
            newErrors.tokenPrefix = "This field is required";
        }
        if (!formData.serviceTime) {
            newErrors.serviceTime = "This field is required";
        }
        if (!formData.maxTokens.toString().trim()) {
            newErrors.maxTokens = "This field is required";
        } else if (Number(formData.maxTokens) <= 0) {
            newErrors.maxTokens = "Enter a valid number";
        }
        if (!formData.notifyBefore) {
            newErrors.notifyBefore = "This field is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validate()) {
            navigate("/visual-identity");
        }
    };

    return (
        <>
            <div className="queue-main-container">

                <div className="queue-container">

                    <div className="queue-heading">

                        <h2>Queue Configuration</h2>

                        <p>
                            Define how your customers interact with your queueing
                            system.
                        </p>

                    </div>

                    <div className="queue-form">

                        {/* First Row */}

                        <div className="form-row">

                            <div className="form-group">

                                <label>Token Prefix</label>

                                <input
                                    type="text"
                                    placeholder="H"
                                    value={formData.tokenPrefix}
                                    onChange={handleChange("tokenPrefix")}
                                />

                                <small>
                                    This prefix will appear before every ticket number.
                                </small>
                                {errors.tokenPrefix && (
                                    <span className="field-error">{errors.tokenPrefix}</span>
                                )}

                            </div>

                            <div className="form-group">

                                <label>Average Service Time</label>

                                <select
                                    value={formData.serviceTime}
                                    onChange={handleChange("serviceTime")}
                                >
                                    <option value="">Select duration</option>
                                    <option>15 Minutes</option>
                                    <option>20 Minutes</option>
                                    <option>30 Minutes</option>
                                    <option>45 Minutes</option>
                                </select>
                                {errors.serviceTime && (
                                    <span className="field-error">{errors.serviceTime}</span>
                                )}

                            </div>

                        </div>

                        {/* Maximum Tokens */}

                        <div className="form-group full-width">

                            <label>Maximum Daily Tokens</label>

                            <input
                                type="number"
                                placeholder="500"
                                value={formData.maxTokens}
                                onChange={handleChange("maxTokens")}
                            />

                            <small>
                                Limit the number of tokens issued per day to prevent overbooking.
                            </small>
                            {errors.maxTokens && (
                                <span className="field-error">{errors.maxTokens}</span>
                            )}

                        </div>

                        {/* Notification */}

                        <div className="form-group full-width">

                            <label>Notification Before Turn</label>

                            <select
                                value={formData.notifyBefore}
                                onChange={handleChange("notifyBefore")}
                            >
                                <option value="">Select duration</option>
                                <option>10 Minutes</option>
                                <option>15 Minutes</option>
                                <option>20 Minutes</option>
                                <option>30 Minutes</option>
                            </select>
                            {errors.notifyBefore && (
                                <span className="field-error">{errors.notifyBefore}</span>
                            )}

                        </div>

                        {/* Info Box */}

                        <div className="queue-info-box">

                            <div className="info-icon">
                                i
                            </div>

                            <p>
                                Customers will receive an SMS alert when they are
                                within this time threshold of their expected turn.
                            </p>

                        </div>

                    </div>

                </div>

                {/* Footer */}

                <div className="queue-footer">

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
                        <span></span>
                        <span className="active"></span>
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

export default QueueConfig;