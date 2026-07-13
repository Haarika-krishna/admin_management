import "./brandingreview.css";
import { useNavigate } from "react-router-dom";

const BrandingReview = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="success-main-container">

                <div className="success-icon">

                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.75 31.9L33.6 17.05L29.45 12.85L18.75 23.55L13.65 18.45L9.5 22.65L18.75 31.9ZM21.7 43.4C18.6667 43.4 15.8335 42.8319 13.2006 41.6958C10.5677 40.5597 8.27744 39.0178 6.32981 37.0702C4.38218 35.1226 2.8403 32.8323 1.70418 30.1994C0.56806 27.5665 0 24.7333 0 21.7C0 18.6667 0.56806 15.8335 1.70418 13.2006C2.8403 10.5677 4.38218 8.27744 6.32981 6.32981C8.27744 4.38218 10.5677 2.8403 13.2006 1.70418C15.8335 0.56806 18.6667 0 21.7 0C24.7333 0 27.5665 0.56806 30.1994 1.70418C32.8323 2.8403 35.1226 4.38218 37.0702 6.32981C39.0178 8.27744 40.5597 10.5677 41.6958 13.2006C42.8319 15.8335 43.4 18.6667 43.4 21.7C43.4 24.7333 42.8319 27.5665 41.6958 30.1994C40.5597 32.8323 39.0178 35.1226 37.0702 37.0702C35.1226 39.0178 32.8323 40.5597 30.1994 41.6958C27.5665 42.8319 24.7333 43.4 21.7 43.4Z" fill="#16A34A"/>
                    </svg>

                </div>


                <div className="success-heading">

                    <h2>
                        Business Profile Created Successfully!
                    </h2>

                    <p>
                        Your business is now ready to manage smart digital queues with Tokenz.
                    </p>

                </div>


                <div className="business-card">

                    <div className="business-card-top">

                        <div className="hsptl-name">

                            <h3>
                                Sri Krishna Hospital
                            </h3>

                            <span className="business-type">
                                HEALTHCARE
                            </span>

                        </div>

                        <div className="active-badge">

                            ● Active

                        </div>

                    </div>

                    <div className="business-details">

                        <div className="detail-item">

                            <h5>Location</h5>

                            <p><svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M4.66667 5.83333C4.9875 5.83333 5.26215 5.7191 5.49062 5.49062C5.7191 5.26215 5.83333 4.9875 5.83333 4.66667C5.83333 4.34583 5.7191 4.07118 5.49062 3.84271C5.26215 3.61424 4.9875 3.5 4.66667 3.5C4.34583 3.5 4.07118 3.61424 3.84271 3.84271C3.61424 4.07118 3.5 4.34583 3.5 4.66667C3.5 4.9875 3.61424 5.26215 3.84271 5.49062C4.07118 5.7191 4.34583 5.83333 4.66667 5.83333ZM4.66667 10.1208C5.85278 9.03194 6.73264 8.04271 7.30625 7.15312C7.87986 6.26354 8.16667 5.47361 8.16667 4.78333C8.16667 3.72361 7.82882 2.8559 7.15312 2.18021C6.47743 1.50451 5.64861 1.16667 4.66667 1.16667C3.68472 1.16667 2.8559 1.50451 2.18021 2.18021C1.50451 2.8559 1.16667 3.72361 1.16667 4.78333C1.16667 5.47361 1.45347 6.26354 2.02708 7.15312C2.60069 8.04271 3.48056 9.03194 4.66667 10.1208ZM4.66667 11.6667C3.10139 10.3347 1.93229 9.09757 1.15937 7.95521C0.386458 6.81285 0 5.75556 0 4.78333C0 3.325 0.469097 2.16319 1.40729 1.29792C2.34549 0.432639 3.43194 0 4.66667 0C5.90139 0 6.98785 0.432639 7.92604 1.29792C8.86424 2.16319 9.33333 3.325 9.33333 4.78333C9.33333 5.75556 8.94688 6.81285 8.17396 7.95521C7.40104 9.09757 6.23194 10.3347 4.66667 11.6667Z" fill="#181C1F"/>
                                </svg>
                              Hyderabad, TS</p>

                        </div>

                        <div className="detail-item">

                            <h5>Business Hours</h5>

                            <p><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M7.75833 8.575L8.575 7.75833L6.41667 5.6V2.91667H5.25V6.06667L7.75833 8.575ZM5.83333 11.6667C5.02639 11.6667 4.26806 11.5135 3.55833 11.2073C2.84861 10.901 2.23125 10.4854 1.70625 9.96042C1.18125 9.43542 0.765625 8.81806 0.459375 8.10833C0.153125 7.39861 0 6.64028 0 5.83333C0 5.02639 0.153125 4.26806 0.459375 3.55833C0.765625 2.84861 1.18125 2.23125 1.70625 1.70625C2.23125 1.18125 2.84861 0.765625 3.55833 0.459375C4.26806 0.153125 5.02639 0 5.83333 0C6.64028 0 7.39861 0.153125 8.10833 0.459375C8.81806 0.765625 9.43542 1.18125 9.96042 1.70625C10.4854 2.23125 10.901 2.84861 11.2073 3.55833C11.5135 4.26806 11.6667 5.02639 11.6667 5.83333C11.6667 6.64028 11.5135 7.39861 11.2073 8.10833C10.901 8.81806 10.4854 9.43542 9.96042 9.96042C9.43542 10.4854 8.81806 10.901 8.10833 11.2073C7.39861 11.5135 6.64028 11.6667 5.83333 11.6667ZM5.83333 10.5C7.12639 10.5 8.22743 10.0455 9.13646 9.13646C10.0455 8.22743 10.5 7.12639 10.5 5.83333C10.5 4.54028 10.0455 3.43924 9.13646 2.53021C8.22743 1.62118 7.12639 1.16667 5.83333 1.16667C4.54028 1.16667 3.43924 1.62118 2.53021 2.53021C1.62118 3.43924 1.16667 4.54028 1.16667 5.83333C1.16667 7.12639 1.62118 8.22743 2.53021 9.13646C3.43924 10.0455 4.54028 10.5 5.83333 10.5Z" fill="#181C1F"/>
                                </svg>
                              09:00 AM - 08:00 PM</p>

                        </div>

                        <div className="detail-item">

                            <h5>Configuration</h5>

                            <p><svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M5.83333 10.5V9.33333H7V10.5H5.83333ZM4.66667 9.33333V6.41667H5.83333V9.33333H4.66667ZM9.33333 7.58333V5.25H10.5V7.58333H9.33333ZM8.16667 5.25V4.08333H9.33333V5.25H8.16667ZM1.16667 6.41667V5.25H2.33333V6.41667H1.16667ZM0 5.25V4.08333H1.16667V5.25H0ZM5.25 1.16667V0H6.41667V1.16667H5.25ZM0.875 2.625H2.625V0.875H0.875V2.625ZM0 3.5V0H3.5V3.5H0ZM0.875 9.625H2.625V7.875H0.875V9.625ZM0 10.5V7H3.5V10.5H0ZM7.875 2.625H9.625V0.875H7.875V2.625ZM7 3.5V0H10.5V3.5H7ZM8.16667 10.5V8.75H7V7.58333H9.33333V9.33333H10.5V10.5H8.16667ZM5.83333 6.41667V5.25H8.16667V6.41667H5.83333ZM3.5 6.41667V5.25H2.33333V4.08333H5.83333V5.25H4.66667V6.41667H3.5ZM4.08333 3.5V1.16667H5.25V2.33333H6.41667V3.5H4.08333ZM1.3125 2.1875V1.3125H2.1875V2.1875H1.3125ZM1.3125 9.1875V8.3125H2.1875V9.1875H1.3125ZM8.3125 2.1875V1.3125H9.1875V2.1875H8.3125Z" fill="#181C1F"/>
                               </svg>
                             QR Ready</p>

                        </div>

                    </div>

                </div>

                <div className="status-container">

                    <div className="status-card">

                        <div className="status-icon">
                            <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3.79167 7.9625L0 4.17083L1.3125 2.85833L3.79167 5.3375L9.12917 0L10.4417 1.3125L3.79167 7.9625Z" fill="#16A34A"/>
                            </svg>

                        </div>

                        <p>
                            Business
                        </p>

                        <p>
                            Registered
                        </p>

                    </div>

                    <div className="status-card">

                        <div className="status-icon">
                            <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3.79167 7.9625L0 4.17083L1.3125 2.85833L3.79167 5.3375L9.12917 0L10.4417 1.3125L3.79167 7.9625Z" fill="#16A34A"/>
                            </svg>

                        </div>

                        <p>
                            Location Verified
                        </p>

                    </div>

                    <div className="status-card">

                        <div className="status-icon">
                            <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M3.79167 7.9625L0 4.17083L1.3125 2.85833L3.79167 5.3375L9.12917 0L10.4417 1.3125L3.79167 7.9625Z" fill="#16A34A"/>
                            </svg>

                        </div>

                        <p>
                            Queue
                        </p>

                        <p>
                            Configured
                        </p>

                    </div>

                    <div className="status-card">

                        <div className="status-icon">
                            <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3.79167 7.9625L0 4.17083L1.3125 2.85833L3.79167 5.3375L9.12917 0L10.4417 1.3125L3.79167 7.9625Z" fill="#16A34A"/>
                            </svg>

                        </div>

                        <p>
                            Notifications
                        </p>

                        <p>
                            Enabled
                        </p>

                    </div>

                </div>

                <button
                    className="dashboard-btn"
                    onClick={() => navigate("/dashboard")}
                >
                    Go To Dashboard
                    <span> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="white"/>
                           </svg>
                    </span>
                </button>

                <div className="success-footer">

                    <p>
                        You can now start generating tokens,
                        managing queues, and serving customers efficiently.
                    </p>

                </div>

            </div>

        </>
    );
}

export default BrandingReview;