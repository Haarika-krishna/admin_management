import "./visualidentity.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VisualIdentity = () => {

    const navigate = useNavigate();

    const [logo, setLogo] = useState(null);
    const [cover, setCover] = useState(null);

    const logoUpload = (e) => {
        if (e.target.files[0]) {
            setLogo(URL.createObjectURL(e.target.files[0]));
        }
    };

    const coverUpload = (e) => {
        if (e.target.files[0]) {
            setCover(URL.createObjectURL(e.target.files[0]));
        }
    };

    return (
        <>
            <div className="visual-main-container">

                <div className="visual-container">

                    <div className="visual-heading">

                        <h2>Visual Identity</h2>

                        <p>
                            Smarter waiting, better service.
                        </p>

                    </div>


                    <div className="upload-section">

                        {/* Logo */}

                        <div className="upload-column">

                            <label className="upload-title">
                                Business Logo
                            </label>

                            <label className="upload-box">

                                <input
                                    type="file"
                                    accept="image/*"
                                    hidden
                                    onChange={logoUpload}
                                />

                                <div className="upload-icon">
                                    <span><svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M6.875 20C4.97917 20 3.35938 19.3438 2.01562 18.0312C0.671875 16.7188 0 15.1146 0 13.2188C0 11.5938 0.489583 10.1458 1.46875 8.875C2.44792 7.60417 3.72917 6.79167 5.3125 6.4375C5.83333 4.52083 6.875 2.96875 8.4375 1.78125C10 0.59375 11.7708 0 13.75 0C16.1875 0 18.2552 0.848958 19.9531 2.54688C21.651 4.24479 22.5 6.3125 22.5 8.75C23.9375 8.91667 25.1302 9.53646 26.0781 10.6094C27.026 11.6823 27.5 12.9375 27.5 14.375C27.5 15.9375 26.9531 17.2656 25.8594 18.3594C24.7656 19.4531 23.4375 20 21.875 20H15C14.3125 20 13.724 19.7552 13.2344 19.2656C12.7448 18.776 12.5 18.1875 12.5 17.5V11.0625L10.5 13L8.75 11.25L13.75 6.25L18.75 11.25L17 13L15 11.0625V17.5H21.875C22.75 17.5 23.4896 17.1979 24.0938 16.5938C24.6979 15.9896 25 15.25 25 14.375C25 13.5 24.6979 12.7604 24.0938 12.1562C23.4896 11.5521 22.75 11.25 21.875 11.25H20V8.75C20 7.02083 19.3906 5.54688 18.1719 4.32812C16.9531 3.10938 15.4792 2.5 13.75 2.5C12.0208 2.5 10.5469 3.10938 9.32812 4.32812C8.10938 5.54688 7.5 7.02083 7.5 8.75H6.875C5.66667 8.75 4.63542 9.17708 3.78125 10.0312C2.92708 10.8854 2.5 11.9167 2.5 13.125C2.5 14.3333 2.92708 15.3646 3.78125 16.2188C4.63542 17.0729 5.66667 17.5 6.875 17.5H10V20H6.875Z" fill="#1089D3"/>
                                      </svg>
                                    </span>
                                </div>

                                <div>

                                    <h4>
                                        Drag & drop business logo
                                    </h4>

                                    <p>
                                        PNG, JPG up to 1 MB
                                    </p>

                                </div>

                            </label>


                            {
                                logo &&

                                <div className="preview-card">

                                    <button
                                        className="remove-btn"
                                        onClick={() => setLogo(null)}
                                    >
                                        ×
                                    </button>

                                    <img
                                        src={logo}
                                        alt="logo"
                                    />

                                </div>
                            }

                        </div>

                        {/* Cover Image */}

                        <div className="upload-column">

                            <label className="upload-title">
                                Business Cover Image
                            </label>

                            <label className="upload-box">

                                <input
                                    type="file"
                                    accept="image/*"
                                    hidden
                                    onChange={coverUpload}
                                />

                                <div className="upload-icon">
                                    <span>
                                        <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                           <path d="M6.875 20C4.97917 20 3.35938 19.3438 2.01562 18.0312C0.671875 16.7188 0 15.1146 0 13.2188C0 11.5938 0.489583 10.1458 1.46875 8.875C2.44792 7.60417 3.72917 6.79167 5.3125 6.4375C5.83333 4.52083 6.875 2.96875 8.4375 1.78125C10 0.59375 11.7708 0 13.75 0C16.1875 0 18.2552 0.848958 19.9531 2.54688C21.651 4.24479 22.5 6.3125 22.5 8.75C23.9375 8.91667 25.1302 9.53646 26.0781 10.6094C27.026 11.6823 27.5 12.9375 27.5 14.375C27.5 15.9375 26.9531 17.2656 25.8594 18.3594C24.7656 19.4531 23.4375 20 21.875 20H15C14.3125 20 13.724 19.7552 13.2344 19.2656C12.7448 18.776 12.5 18.1875 12.5 17.5V11.0625L10.5 13L8.75 11.25L13.75 6.25L18.75 11.25L17 13L15 11.0625V17.5H21.875C22.75 17.5 23.4896 17.1979 24.0938 16.5938C24.6979 15.9896 25 15.25 25 14.375C25 13.5 24.6979 12.7604 24.0938 12.1562C23.4896 11.5521 22.75 11.25 21.875 11.25H20V8.75C20 7.02083 19.3906 5.54688 18.1719 4.32812C16.9531 3.10938 15.4792 2.5 13.75 2.5C12.0208 2.5 10.5469 3.10938 9.32812 4.32812C8.10938 5.54688 7.5 7.02083 7.5 8.75H6.875C5.66667 8.75 4.63542 9.17708 3.78125 10.0312C2.92708 10.8854 2.5 11.9167 2.5 13.125C2.5 14.3333 2.92708 15.3646 3.78125 16.2188C4.63542 17.0729 5.66667 17.5 6.875 17.5H10V20H6.875Z" fill="#1089D3"/>
                                        </svg>

                                    </span>
                                </div>

                                <div>

                                    <h4>
                                        Drag & drop business logo
                                    </h4>

                                    <p>
                                        PNG, JPG up to 1 MB
                                    </p>

                                </div>

                            </label>


                            {
                                cover &&

                                <div className="preview-cover">

                                    <button
                                        className="remove-btn"
                                        onClick={() => setCover(null)}
                                    >
                                        ×
                                    </button>

                                    <img
                                        src={cover}
                                        alt="cover"
                                    />

                                </div>

                            }

                        </div>

                    </div>

                </div>


                <div className="visual-footer">

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
                        <span></span>
                        <span className="active"></span>

                    </div>


                    <button
                        className="finish-btn"
                        onClick={() => navigate("/branding-review")}
                    >
                        Finish <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="white"/>
                           </svg>

                    </button>

                </div>

            </div>
        </>
    );
}

export default VisualIdentity;