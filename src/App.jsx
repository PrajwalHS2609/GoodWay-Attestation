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
import AustraliaAttestation from "./Components/AttestationCountries/Australia/AustraliaAttestation";
import EgyptAttestation from "./Components/AttestationCountries/EgyptAttestation/EgyptAttestation";
import ChinaAttestation from "./Components/AttestationCountries/ChinaAttestation/ChinaAttestation";
import VietnamAttestation from "./Components/AttestationCountries/VietnamAttestation/VietnamAttestation";
import TaiwanAttestation from "./Components/AttestationCountries/TaiwanAttestation/TaiwanAttestation";
import UsaAttestation from "./Components/AttestationCountries/UsaAttestation/UsaAttestation";
import OmanAttestation from "./Components/AttestationCountries/OmanAttestation/OmanAttestation";
import NigeriaAttestation from "./Components/AttestationCountries/NigeriaAttestation/NigeriaAttestation";
import MalaysiaAttestation from "./Components/AttestationCountries/MalaysiaAttestation/MalaysiaAttestation";
import PhilippinesAttestation from "./Components/AttestationCountries/PhilippinesAttestation/PhilippinesAttestation";
import AustriaAttestation from "./Components/AttestationCountries/AustriaAttestation/AustriaAttestation";
import UkAttestation from "./Components/AttestationCountries/UkAttestation/UkAttestation";
import GermanyAttestation from "./Components/AttestationCountries/GermanyAttestation/GermanyAttestation";
import MexicoAttestation from "./Components/AttestationCountries/MexicoAttestation/MexicoAttestation";
import FranceAttestation from "./Components/AttestationCountries/FranceAttestation/FranceAttestation";
import ItalyAttestation from "./Components/AttestationCountries/ItalyAttestation/ItalyAttestation";
// import SwedenAttestation from "./Components/AttestationCountries/SwedenAttestation/SwedenAttestation";
import LithuaniaAttestation from "./Components/AttestationCountries/LithuaniaAttestation/LithuaniaAttestation";
import NetherlandAttestation from "./Components/AttestationCountries/NetherlandAttestation/NetherlandAttestation";
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

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <ScrollTo />
        <UpperNav />
        <NavBar />
        <Routes>
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
            element={<PhilippinesAttestation/>}
          />
          <Route
            path="/australia-apostille-attestation-bangalore"
            element={<AustraliaAttestation />}
          />
          <Route
            path="/usa-apostille-attestation-bangalore"
            element={<UsaAttestation />}
          />
          <Route
            path="/oman-apostille-attestation-bangalore"
            element={<OmanAttestation />}
          />

          <Route
            path="/austria-apostille-attestation-bangalore"
            element={<AustriaAttestation />}
          />
          <Route
            path="/uk-apostille-attestation-bangalore"
            element={<UkAttestation />}
          />
          <Route
            path="/germany-apostille-attestation-bangalore"
            element={<GermanyAttestation />}
          />
          <Route
            path="/mexico-apostille-attestation-bangalore"
            element={<MexicoAttestation />}
          />
          <Route
            path="/france-apostille-attestation-bangalore"
            element={<FranceAttestation />}
          />
          <Route
            path="/italy-apostille-attestation-bangalore"
            element={<ItalyAttestation />}
          />
          {/* <Route path="/sweden-apostille" element={<SwedenAttestation />} /> */}
          <Route
            path="/lithuania-apostille-attestation-bangalore"
            element={<LithuaniaAttestation />}
          />
          <Route
            path="/netherland-apostille-attestation-bangalore"
            element={<NetherlandAttestation />}
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
            path="/degree-certificate-attestation-bangalore"
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
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
