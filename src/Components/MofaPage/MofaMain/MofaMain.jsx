import React from "react";
import "./MofaMain.css";
import MofaCard1 from "./MofaCard1";
import MofaCard2 from "./MofaCard2";
import mofaUae from "./../../../vid_img/MofaImgs/MofaUae.jpg";
import mofaQatar from "./../../../vid_img/MofaImgs/MofaQatar.jpg";
import mofaSaudi from "./../../../vid_img/MofaImgs/MofaSaudi.jpg";
import mofaBahrain from "./../../../vid_img/MofaImgs/MofaBahrain.jpg";
import mofaKuwait from "./../../../vid_img/MofaImgs/MofaKuwait.jpg";

const MofaMain = () => {
  return (
    <div className="mofaMainContainer">
      <MofaCard1
        img={mofaUae}
        alt="mofaUae"
        head="MOFA OF UAE"
        para="We also do Ministry of Foreign Affairs of UAE (MOFA of UAE)* After Attesting from country from which the documents are issued it has to be Attested from MOFA Ministry of Foreign Affairs of the Country where you are going for emploment. *Additional charge can apply for MOFA and takes 8 working days for MOFA attestation from UAE."
      />
      <MofaCard2
        img={mofaQatar}
        alt="mofaQatar"
        head="MOFA OF QATAR"
        para="We also do Ministry of Foreign Affairs of Qatar (MOFA of Qatar)* After Attesting from country from which the documents are issued it has to be Attested from MOFA Ministry of Foreign Affairs of the Country where you are going for emploment. *Additional charge can apply for MOFA and takes 8 working days for MOFA attestation from Qatar."
      />
      <MofaCard1
        img={mofaSaudi}
        alt="mofaSaudi"
        head="MOFA OF SAUDI"
        para="We also do Ministry of Foreign Affairs of Saudi Arabia (MOFA of Saudi) After Attesting from country from which the documents are issued it has to be Attested from MOFA Ministry of Foreign Affairs of the Country where you are going for emploment. *Additional charge can apply for MOFA and takes minimum 40 working days & upto 6 month for MOFA attestation from Saudi Arabia."
      />
      <MofaCard2
        img={mofaBahrain}
        alt="mofaBahrain"
        head="MOFA OF BAHRAIN"
        para="We also do Ministry of Foreign Affairs of Bahrain (MOFA of Bahrain) After Attesting from country from which the documents are issued it has to be Attested from MOFA Ministry of Foreign Affairs of the Country where you are going for emploment. *Additional charge can apply for MOFA and takes addtional time/days for MOFA attestation from Bahrain."
      />
      <MofaCard1
        img={mofaKuwait}
        alt="mofaKuwait"
        head="MOFA OF KUWAIT"
        para="We also do Ministry of Foreign Affairs of Kuwait (MOFA of Kuwait)* After Attesting from country from which the documents are issued it has to be Attested from MOFA Ministry of Foreign Affairs of the Country where you are going for emploment."
      />
    </div>
  );
};

export default MofaMain;
