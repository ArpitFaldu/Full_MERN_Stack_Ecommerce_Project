// import React from "react";
// import BreadCrumb from "../components/BreadCrumb";
// import Meta from "../components/Meta";
// import Container from "../components/Container";

// const RefundPloicy = () => {
//   return (
//     <>
//       <Meta title={"Refund Policy"} />
//       <BreadCrumb title="Refund Policy" />
//       <Container class1="policy-wrapper py-5 home-wrapper-2">
//         <div className="row">
//           <div className="col-12">
//             <div className="policy"></div>
//           </div>
//         </div>
//       </Container>
//     </>
//   );
// };

// export default RefundPloicy;

import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const RefundPolicy = () => {
  return (
    <>
      <Meta title={"Refund Policy"} />
      <BreadCrumb title="Refund Policy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy">
              <h2>Refund Policy</h2>
              <p>Thank you for shopping with us! We hope you are happy with your purchase. However, if you are not completely satisfied, we are here to help.</p>

              <h3>1. Returns</h3>
              <p>You have [number of days, e.g., 30 days] to return an item from the date you received it. To be eligible for a return, your item must be unused and in the same condition that you received it. It must also be in the original packaging.</p>

              <h3>2. Refunds</h3>
              <p>Once we receive your return, we will inspect it and notify you of the status of your refund. If your return is approved, we will initiate a refund to your original payment method.</p>

              <h3>3. Late or Missing Refunds</h3>
              <p>If you haven’t received a refund yet, first check your bank account again. Then contact your credit card company, as it may take some time before your refund is officially posted. If you’ve done all of this and you still have not received your refund, please contact us at [your contact email].</p>

              <h3>4. Exchanges</h3>
              <p>We only replace items if they are defective or damaged. If you need to exchange it for the same item, send us an email at [your contact email] and send your item to [your return address].</p>

              <h3>5. Shipping</h3>
              <p>You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable.</p>

              <h3>6. Changes to This Policy</h3>
              <p>We may update our Refund Policy from time to time. We will notify you of any changes by posting the new Refund Policy on this page.</p>

              <h3>7. Contact Us</h3>
              <p>If you have any questions about this Refund Policy, please contact us:</p>
              <ul>
                <li>Email: [Your Email Address]</li>
                <li>Phone: [Your Phone Number]</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default RefundPolicy;
