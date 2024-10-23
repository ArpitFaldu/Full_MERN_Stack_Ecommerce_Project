// import React from "react";
// import BreadCrumb from "../components/BreadCrumb";
// import Meta from "../components/Meta";
// import Container from "../components/Container";

// const PrivacyPolicy = () => {
//   return (
//     <>
//       <Meta title={"Privacy Policy"} />
//       <BreadCrumb title="Privacy Policy" />
//       <Container class1="policy-wrapper py-5 home-wrapper-2">
//         <div className="row">
//           <div className="col-12">
//             <div className="policy">HEY THERE!!
              
//             </div>
//           </div>
//         </div>
//       </Container>
//     </>
//   );
// };

// export default PrivacyPolicy;
import React from "react";
import { useNavigate } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const PrivacyPolicy = () => {
  const navigate = useNavigate(); // Hook to navigate

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <>
      <Meta title={"Privacy Policy"} />
      <BreadCrumb title="Privacy Policy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              <h2>HEY THERE!!</h2>
              <p>This is our Privacy Policy content.</p>
              <h2>1. Information We Collect</h2>
    <ul>
        <li><strong>Personal Information:</strong> We may collect personal information that you provide to us, such as your name, email address, and contact details.</li>
        <li><strong>Usage Data:</strong> We collect information about how you use our website, including your IP address, browser type, and pages visited.</li>
    </ul>

    <h2>2. How We Use Your Information</h2>
    <p>We use the information we collect to:</p>
    <ul>
        <li>Improve our website and services.</li>
        <li>Communicate with you about updates and promotions.</li>
        <li>Analyze usage patterns to enhance user experience.</li>
    </ul>

    <h2>3. Sharing Your Information</h2>
    <p>We do not sell or share your personal information with third parties, except as required by law or to protect our rights.</p>

    <h2>4. Data Security</h2>
    <p>We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet is 100% secure.</p>

    <h2>5. Changes to This Privacy Policy</h2>
    <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>

    <h2>6. Contact Us</h2>
    <p>If you have any questions about this Privacy Policy, please contact us at:</p>
    <ul>
        <li>Email: [Your Email Address]</li>
        <li>Phone: [Your Phone Number]</li>
    </ul>
              <button onClick={handleGoBack} className="btn btn-primary">
                Go Back
              </button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PrivacyPolicy;
