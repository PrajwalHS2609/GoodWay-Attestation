import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./Global.css";
import ScrollTo from "./Components/ScrollTo/ScrollTo";
import UpperNav from "./Components/UpperNav/UpperNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";
import UaeAttestationPage from "./Components/AttestationCountries/UaeAttestation/UaeAttestationPage";
import QatarAttestation from "./Components/AttestationCountries/QatarAttestation/QatarAttestation";
import BahrainAttestation from "./Components/AttestationCountries/BahrainAttestation/BahrainAttestation";
import SaudiAttestation from "./Components/AttestationCountries/SaudiAttestation/SaudiAttestation";
import KuwaitAttestation from "./Components/AttestationCountries/Kuwait/KuwaitAttestation";
import EgyptAttestation from "./Components/AttestationCountries/EgyptAttestation/EgyptAttestation";
import ChinaAttestation from "./Components/AttestationCountries/ChinaAttestation/ChinaAttestation";
import VietnamAttestation from "./Components/AttestationCountries/VietnamAttestation/VietnamAttestation";
import TaiwanAttestation from "./Components/AttestationCountries/TaiwanAttestation/TaiwanAttestation";
import NigeriaAttestation from "./Components/AttestationCountries/NigeriaAttestation/NigeriaAttestation";
import MalaysiaAttestation from "./Components/AttestationCountries/MalaysiaAttestation/MalaysiaAttestation";
import PhilippinesAttestation from "./Components/AttestationCountries/PhilippinesAttestation/PhilippinesAttestation";
import AttestationPage from "./Components/AttestationPage/AttestationPage";
import ApostillePages from "./Components/ApostillePages/ApostillePages";
import ContactUs from "./Components/ContactUs/ContactUs";
import MofaPage from "./Components/MofaPage/MofaPage";
import HrdPage from "./Components/HrdPage/HrdPage";
import MeaPage from "./Components/MeaPage/MeaPage";
import BirthCertAttestation from "./Components/AttestationPage/BirthCertAttestation/BirthCertAttestation";
import MarriageCertAttestation from "./Components/AttestationPage/MarriageCertAttestation/MarriageCertAttestation";
import CommercialDocsAttestation from "./Components/AttestationPage/CommercialDocsAttestation/CommercialDocsAttestation";
import DegreeCertApostille from "./Components/ApostillePages/DegreeCertApostille/DegreeCertApostille";
import BirthCertApostille from "./Components/ApostillePages/BirthCertApostille/BirthCertApostille";
import MarriageCertApostille from "./Components/ApostillePages/MarriageCertApostille/MarriageCertApostille";
import DegreeCertAttestation from "./Components/AttestationPage/DegreeCertAttestation/DegreeCertAttestation";
import WesPage from "./Components/WesPage/WesPage";
import TranslationPage from "./Components/TranslationPage/TranslationPage";
import PccPage from "./Components/PccPage/PccPage";
import OmanPccPage from "./Components/PccPage/OmanPcc/OmanPccPage";
import KuwaitPccPage from "./Components/PccPage/KuwaitPcc/KuwaitPccPage";
import SaudiPccPage from "./Components/PccPage/SaudiPcc/SaudiPccPage";
import UaePccPage from "./Components/PccPage/UaePcc/UaePccPage";
import QatarPccPage from "./Components/PccPage/QatarPcc/QatarPccPage";
import KaranatakaHrdPage from "./Components/HrdPage/KaranatakaHrd/KaranatakaHrdPage";
import AndhraHrdPage from "./Components/HrdPage/AndhraHrd/AndhraHrdPage";
import TamilNaduHrdPage from "./Components/HrdPage/TamilNaduHrd/TamilNaduHrdPage";
import MaharastraHrdPage from "./Components/HrdPage/MaharastraHrd/MaharastraHrdPage";
import KeralaHrdPage from "./Components/HrdPage/KeralaHrd/KeralaHrdPage";
import TelanganaHrdPage from "./Components/HrdPage/TelanganaHrd/TelanganaHrdPage";
import OmanApostille from "./Components/AttestationCountries/OmanApostille/OmanApostille";
import ItalyApostille from "./Components/AttestationCountries/ItalyApostille/ItalyApostille";
import GermanyApostille from "./Components/AttestationCountries/GermanyApostille/GermanyApostille";
import AustraliaApostille from "./Components/AttestationCountries/Australia/AustraliaApostille";
import AustriaApostille from "./Components/AttestationCountries/AustriaApostille/AustriaApostille";
import FranceApostille from "./Components/AttestationCountries/FranceApostille/FranceApostille";
import LithuaniaApostille from "./Components/AttestationCountries/LithuaniaApostille/LithuaniaApostille";
import MexicoApostille from "./Components/AttestationCountries/MexicoApostille/MexicoApostille";
import NetherlandApostille from "./Components/AttestationCountries/NetherlandApostille/NetherlandApostille";
import UkApostille from "./Components/AttestationCountries/UkApostille/UkApostille";
import UsaApostille from "./Components/AttestationCountries/UsaApostille/UsaApostille";
import TrackStatus from "./Components/TrackStatus/TrackStatus";

const App = () => {
  const NotFound = () => (
    <div
      style={{
        fontSize: "100px",
        width: "100%",
        textAlign: "center",
        backgroundColor: "white",
        height: "100vh",
      }}
    >
      Page Not Found
    </div>
  );

  return (
    <div>
      <BrowserRouter>
        <ScrollTo />
        <UpperNav />
        <NavBar />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<HomePage />} />
          <Route
            path="/certificate-attestation-bangalore"
            element={<AttestationPage />}
          />
          <Route
            path="/certificate-apostille-bangalore"
            element={<ApostillePages />}
          />
          <Route
            path="/uae-embassy-attestation-bangalore"
            element={<UaeAttestationPage />}
          />
          <Route
            path="/qatar-embassy-attestation-bangalore"
            element={<QatarAttestation />}
          />
          <Route
            path="/bahrain-embassy-attestation-bangalore"
            element={<BahrainAttestation />}
          />
          <Route
            path="/saudi-embassy-attestation-bangalore"
            element={<SaudiAttestation />}
          />
          <Route
            path="/kuwait-embassy-attestation-bangalore"
            element={<KuwaitAttestation />}
          />
          <Route
            path="/egypt-embassy-attestation-bangalore"
            element={<EgyptAttestation />}
          />
          <Route
            path="/china-embassy-attestation-bangalore"
            element={<ChinaAttestation />}
          />
          <Route
            path="/vietnam-embassy-attestation-bangalore"
            element={<VietnamAttestation />}
          />
          <Route
            path="/taiwan-embassy-attestation-bangalore"
            element={<TaiwanAttestation />}
          />
          <Route
            path="/nigeria-embassy-attestation-bangalore"
            element={<NigeriaAttestation />}
          />
          <Route
            path="/malaysia-embassy-attestation-bangalore"
            element={<MalaysiaAttestation />}
          />
          <Route
            path="/philippines-embassy-attestation-bangalore"
            element={<PhilippinesAttestation />}
          />
          <Route
            path="/australia-apostille-services-bangalore"
            element={<AustraliaApostille />}
          />
          <Route
            path="/usa-apostille-services-bangalore"
            element={<UsaApostille />}
          />
          <Route
            path="/oman-apostille-services-bangalore"
            element={<OmanApostille />}
          />

          <Route
            path="/austria-apostille-services-bangalore"
            element={<AustriaApostille />}
          />
          <Route
            path="/uk-apostille-services-bangalore"
            element={<UkApostille />}
          />
          <Route
            path="/germany-apostille-services-bangalore"
            element={<GermanyApostille />}
          />
          <Route
            path="/mexico-apostille-services-bangalore"
            element={<MexicoApostille />}
          />
          <Route
            path="/france-apostille-services-bangalore"
            element={<FranceApostille />}
          />
          <Route
            path="/italy-apostille-services-bangalore"
            element={<ItalyApostille />}
          />
          <Route
            path="/lithuania-apostille-services-bangalore"
            element={<LithuaniaApostille />}
          />
          <Route
            path="/netherlands-apostille-services-bangalore"
            element={<NetherlandApostille />}
          />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route
            path="/state-hrd-home-department-attestation"
            element={<HrdPage />}
          />
          <Route
            path="/karanataka-hrd-home-department-attestation"
            element={<KaranatakaHrdPage />}
          />
          <Route
            path="/tamilnadu-hrd-home-department-attestation"
            element={<TamilNaduHrdPage />}
          />
          <Route
            path="/andhrapradesh-hrd-home-department-attestation"
            element={<AndhraHrdPage />}
          />
          <Route
            path="/maharashtra-hrd-home-department-attestation"
            element={<MaharastraHrdPage />}
          />
          <Route
            path="/kerala-hrd-home-department-attestation"
            element={<KeralaHrdPage />}
          />
          <Route
            path="/telangana-hrd-home-department-attestation"
            element={<TelanganaHrdPage />}
          />

          <Route path="/mofa-attestation-services" element={<MofaPage />} />
          <Route
            path="/mea-attestation-apostille-services"
            element={<MeaPage />}
          />
          <Route
            path="/degree-certificate-apostille-bangalore"
            element={<DegreeCertAttestation />}
          />
          <Route
            path="/birth-certificate-attestation-bangalore"
            element={<BirthCertAttestation />}
          />
          <Route
            path="/marriage-certificate-attestation-bangalore"
            element={<MarriageCertAttestation />}
          />
          <Route
            path="/commercial-documents-attestation-bangalore"
            element={<CommercialDocsAttestation />}
          />
          <Route
            path="/degree-certificate-apostille-bangalore"
            element={<DegreeCertApostille />}
          />
          <Route
            path="/birth-certificate-apostille-bangalore"
            element={<BirthCertApostille />}
          />
          <Route
            path="/marriage-certificate-apostille-bangalore"
            element={<MarriageCertApostille />}
          />
          <Route path="/wes-attestation-bangalore" element={<WesPage />} />
          <Route
            path="/translation-attestation-bangalore"
            element={<TranslationPage />}
          />
          <Route path="/pcc-attestation-bangalore" element={<PccPage />} />
          <Route
            path="/oman-pcc-attestation-bangalore"
            element={<OmanPccPage />}
          />
          <Route
            path="/kuwait-pcc-attestation-bangalore"
            element={<KuwaitPccPage />}
          />
          <Route
            path="/saudi-pcc-attestation-bangalore"
            element={<SaudiPccPage />}
          />
          <Route
            path="/uae-pcc-attestation-bangalore"
            element={<UaePccPage />}
          />
          <Route
            path="/qatar-pcc-attestation-bangalore"
            element={<QatarPccPage />}
          />
          <Route path="/track-status" element={<TrackStatus />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
