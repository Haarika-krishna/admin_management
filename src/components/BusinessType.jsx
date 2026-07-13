import './businesstype.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const businessTypes = [
    {
        id: "healthcare",
        label: "Health Care",
        icon: (
            <svg width="39" height="35" viewBox="0 0 39 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.3332 8.3335V15.6668M22.9998 34.0002V28.5002C22.9998 27.5277 22.6135 26.5951 21.9259 25.9074C21.2383 25.2198 20.3056 24.8335 19.3332 24.8335C18.3607 24.8335 17.4281 25.2198 16.7404 25.9074C16.0528 26.5951 15.6665 27.5277 15.6665 28.5002V34.0002M22.9998 12.0002H15.6665" stroke="#CE1C69" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M30.3333 15.6665H34C34.9725 15.6665 35.9051 16.0528 36.5927 16.7404C37.2804 17.4281 37.6667 18.3607 37.6667 19.3332V30.3332C37.6667 31.3056 37.2804 32.2383 36.5927 32.9259C35.9051 33.6135 34.9725 33.9998 34 33.9998H4.66667C3.69421 33.9998 2.76158 33.6135 2.07394 32.9259C1.38631 32.2383 1 31.3056 1 30.3332V13.8332C1 12.8607 1.38631 11.9281 2.07394 11.2404C2.76158 10.5528 3.69421 10.1665 4.66667 10.1665H8.33333" stroke="#CE1C69" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M30.3335 34V4.66667C30.3335 3.69421 29.9472 2.76158 29.2596 2.07394C28.5719 1.38631 27.6393 1 26.6668 1H12.0002C11.0277 1 10.0951 1.38631 9.40744 2.07394C8.7198 2.76158 8.3335 3.69421 8.3335 4.66667V34" stroke="#CE1C69" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
    },
    {
        id: "banking",
        label: "Banking",
        icon: (
            <svg width="35" height="39" viewBox="0 0 35 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.8333 30.3324V17.4991M21.1667 30.3324V17.4991M28.5 30.3324V17.4991M1 37.6657H34M6.5 30.3324V17.4991M15.8848 1.37491C16.3875 1.12825 16.9401 1 17.5 1C18.06 1 18.6125 1.12825 19.1152 1.37491L33.4885 8.42591C33.6747 8.51711 33.8244 8.66872 33.9133 8.85598C34.0022 9.04324 34.025 9.2551 33.978 9.45698C33.9309 9.65887 33.8169 9.83886 33.6544 9.96758C33.4919 10.0963 33.2906 10.1662 33.0833 10.1657H1.91667C1.70954 10.1657 1.50852 10.0956 1.34636 9.96672C1.1842 9.83786 1.07046 9.65787 1.02368 9.45609C0.976905 9.25431 0.999845 9.04264 1.08876 8.85556C1.17768 8.66849 1.32734 8.51704 1.51334 8.42591L15.8848 1.37491Z" stroke="#DA8D0C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
    },
    {
        id: "dining",
        label: "Dining",
        icon: (
            <svg width="35" height="39" viewBox="0 0 35 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1V13.8333C1 15.85 2.65 17.5 4.66667 17.5H12C12.9725 17.5 13.9051 17.1137 14.5927 16.4261C15.2804 15.7384 15.6667 14.8058 15.6667 13.8333V1M8.33333 1V37.6667M34 24.8333V1C31.5688 1 29.2373 1.96577 27.5182 3.68485C25.7991 5.40394 24.8333 7.73552 24.8333 10.1667V21.1667C24.8333 23.1833 26.4833 24.8333 28.5 24.8333H34ZM34 24.8333V37.6667" stroke="#EA3838" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
    },
    {
        id: "food-delivery",
        label: "Dining",
        icon: (
            <svg width="34" height="39" viewBox="0 0 34 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.333 37.6667H28.4997C29.4721 37.6667 30.4048 37.2804 31.0924 36.5927C31.78 35.9051 32.1663 34.9725 32.1663 34V12C32.1678 11.419 32.0541 10.8436 31.832 10.3067C31.6098 9.76992 31.2836 9.28241 30.872 8.87235L24.294 2.29435C23.8839 1.8828 23.3964 1.55654 22.8596 1.33438C22.3228 1.11223 21.7473 0.998588 21.1663 1.00001H6.49967C5.52721 1.00001 4.59458 1.38632 3.90695 2.07395C3.21932 2.76159 2.83301 3.69422 2.83301 4.66668V10.7167" stroke="#2F50E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21.167 1V10.1667C21.167 10.6529 21.3602 11.1192 21.704 11.463C22.0478 11.8068 22.5141 12 23.0003 12H32.167M9.59868 27.5448L11.9637 36.4915C12.0138 36.6619 12.0134 36.8432 11.9625 37.0133C11.9115 37.1835 11.8122 37.3352 11.6767 37.4499C11.5411 37.5647 11.3751 37.6376 11.1989 37.6598C11.0227 37.682 10.8438 37.6526 10.684 37.575L7.30518 36.0185C7.05417 35.896 6.7785 35.8325 6.49922 35.8329C6.21993 35.8332 5.94441 35.8973 5.69368 36.0203L2.30934 37.5787C2.14962 37.6535 1.97172 37.6806 1.79696 37.6568C1.6222 37.633 1.45802 37.5593 1.3241 37.4446C1.19018 37.3298 1.0922 37.1789 1.04193 37.0098C0.991661 36.8408 0.991226 36.6608 1.04068 36.4915L3.40568 27.5448" stroke="#2F50E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.5 28.5C9.53757 28.5 12 26.0376 12 23C12 19.9624 9.53757 17.5 6.5 17.5C3.46243 17.5 1 19.9624 1 23C1 26.0376 3.46243 28.5 6.5 28.5Z" stroke="#2F50E0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
    },
    {
        id: "services",
        label: "Services",
        icon: (
            <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24.2842 8.8901C23.9483 9.2328 23.7601 9.69355 23.7601 10.1734C23.7601 10.6533 23.9483 11.1141 24.2842 11.4568L27.2175 14.3901C27.5602 14.726 28.021 14.9142 28.5009 14.9142C28.9807 14.9142 29.4415 14.726 29.7842 14.3901L35.4785 8.6976C36.0652 8.10727 37.0607 8.29427 37.2807 9.09727C37.8346 11.1119 37.8033 13.2426 37.1904 15.24C36.5776 17.2375 35.4085 19.0191 33.8201 20.3764C32.2316 21.7337 30.2894 22.6105 28.2208 22.9042C26.1522 23.198 24.0427 22.8965 22.1392 22.0351L7.63752 36.5368C6.90818 37.2659 5.91907 37.6754 4.88779 37.6752C3.85651 37.675 2.86754 37.2652 2.13844 36.5358C1.40934 35.8065 0.999828 34.8174 1 33.7861C1.00017 32.7548 1.41001 31.7659 2.13936 31.0368L16.641 16.5351C15.7796 14.6316 15.4782 12.5221 15.7719 10.4535C16.0657 8.38486 16.9425 6.44269 18.2998 4.85423C19.657 3.26576 21.4386 2.0967 23.4361 1.48385C25.4336 0.870993 27.5643 0.839689 29.5789 1.3936C30.3819 1.6136 30.5689 2.60727 29.9804 3.1976L24.2842 8.8901Z" stroke="#0EA372" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
    },
    {
        id: "beauty",
        label: "Beauty",
        icon: (
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 16.5C14.0376 16.5 16.5 14.0376 16.5 11C16.5 7.96243 14.0376 5.5 11 5.5C7.96243 5.5 5.5 7.96243 5.5 11C5.5 14.0376 7.96243 16.5 11 16.5Z" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M14.8867 14.8868L22.0001 22.0002M36.6667 7.3335L14.8867 29.1135" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11 38.5C14.0376 38.5 16.5 36.0376 16.5 33C16.5 29.9624 14.0376 27.5 11 27.5C7.96243 27.5 5.5 29.9624 5.5 33C5.5 36.0376 7.96243 38.5 11 38.5Z" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M27.1338 27.1333L36.6671 36.6666" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
    },
    {
        id: "diagnostic",
        label: "Diagnostic",
        icon: (
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.6662 3.6665V14.6665C25.666 15.2816 25.8204 15.8868 26.1154 16.4265L36.217 34.9065C36.5226 35.465 36.6775 36.0933 36.6665 36.7298C36.6555 37.3663 36.479 37.9889 36.1544 38.5365C35.8297 39.0841 35.3681 39.5377 34.8149 39.8527C34.2618 40.1677 33.6361 40.3333 32.9995 40.3332H10.9995C10.363 40.3333 9.73732 40.1677 9.18416 39.8527C8.631 39.5377 8.16938 39.0841 7.84473 38.5365C7.52007 37.9889 7.34357 37.3663 7.33258 36.7298C7.32159 36.0933 7.47649 35.465 7.78205 34.9065L17.8837 16.4265C18.1787 15.8868 18.3331 15.2816 18.3329 14.6665V3.6665M11.83 27.4998H32.169M15.5829 3.6665H28.4162" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
    },
    {
        id: "others",
        label: "Others",
        icon: (
            <svg width="39" height="28" viewBox="0 0 39 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.1667 1V4.66667M21.1667 23V26.6667M21.1667 12V15.6667M1 8.33333C2.45869 8.33333 3.85764 8.91279 4.88909 9.94424C5.92054 10.9757 6.5 12.3746 6.5 13.8333C6.5 15.292 5.92054 16.691 4.88909 17.7224C3.85764 18.7539 2.45869 19.3333 1 19.3333V23C1 23.9725 1.38631 24.9051 2.07394 25.5927C2.76158 26.2804 3.69421 26.6667 4.66667 26.6667H34C34.9725 26.6667 35.9051 26.2804 36.5927 25.5927C37.2804 24.9051 37.6667 23.9725 37.6667 23V19.3333C36.208 19.3333 34.809 18.7539 33.7776 17.7224C32.7461 16.691 32.1667 15.292 32.1667 13.8333C32.1667 12.3746 32.7461 10.9757 33.7776 9.94424C34.809 8.91279 36.208 8.33333 37.6667 8.33333V4.66667C37.6667 3.69421 37.2804 2.76157 36.5927 2.07394C35.9051 1.38631 34.9725 1 34 1H4.66667C3.69421 1 2.76158 1.38631 2.07394 2.07394C1.38631 2.76157 1 3.69421 1 4.66667V8.33333Z" stroke="#0192D3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        ),
    },
];

const BusinessType = () => {
    const navigate = useNavigate();
    const [selectedType, setSelectedType] = useState(null);
    const [businessTypeTouched, setBusinessTypeTouched] = useState(false);

    const handleNext = () => {
        if (!selectedType) {
            setBusinessTypeTouched(true);
            return;
        }
        navigate("/business-info");
    };

    return(
        <>
        <div className="business-main-container">
        <div className="business-type-heading">
           <h2>Choose Your Business Type</h2>
           <p>Select the category that best describes your business to help us tailor your dashboard experience.</p>
        </div>
        <div className="business-domains-section">
             {businessTypes.map((type) => (
                <div
                    key={type.id}
                    className={selectedType === type.id ? "active" : ""}
                    onClick={() => setSelectedType(type.id)}
                >
                    <span>{type.icon}</span>
                    <p>{type.label}</p>
                </div>
             ))}
        </div>
        {!selectedType && businessTypeTouched && (
            <p className="business-type-error">Please select a business type to continue.</p>
        )}

        <div className="businessType-footer">

                    <button className="back-btn"
                            onClick={() => navigate(-1)}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M2.86875 6.75L7.06875 10.95L6 12L0 6L6 0L7.06875 1.05L2.86875 5.25H12V6.75H2.86875Z" fill="#181C1F"/>
                        </svg>
                     Back
                    </button>

                    <div className="progress">
                        <span className="active"></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <button
                        className="next-btn"
                        onClick={handleNext}
                    >
                        Next<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z" fill="white"/>
                           </svg>

                    </button>

                </div>

        </div>
        </>
    )
}
export default BusinessType