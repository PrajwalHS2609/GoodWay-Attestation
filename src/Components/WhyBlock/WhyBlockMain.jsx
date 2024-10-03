import "./WhyBlock.css";
import WhyBlockCard from "./WhyBlockCard";
import exp from "./../../vid_img/exp.png";
import doc from "./../../vid_img/docProcessed.png";
import govt from "./../../vid_img/govtAp.png";
import customer from "./../../vid_img/customer.png";

const WhyBlockMain = () => {
  return (
    <div className="whyBlockMainContainer">
      <WhyBlockCard img={exp} alt="exp" txt="16 YEARS OF EXPERIENCE" />
      <WhyBlockCard
        img={doc}
        alt="doc"
        txt="MORE THAN 4LAKH+ DOCUMENTS PROCESSED"
      />
      <WhyBlockCard
        img={govt}
        alt="govt"
        txt="GOVT APPROVED AND ISO CERTIFIED"
      />
      <WhyBlockCard
        img={customer}
        alt="customer"
        txt="TRUSTED BY MORE THAN 25000+ CUSTOMERS"
      />
    </div>
  );
};

export default WhyBlockMain;
