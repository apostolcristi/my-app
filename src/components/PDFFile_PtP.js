import React from "react";
import { Page, Text, Document, StyleSheet, Font } from "@react-pdf/renderer";

Font.register({
  family: "Roboto",
  src: "/fonts/roboto/Roboto-Regular.ttf",
});

Font.register({
  family: "Roboto-Bold",
  src: "/fonts/roboto/Roboto-Bold.ttf",
  fontWeight: "bold",
});

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 10,
    fontFamily: "Roboto",
    lineHeight: 1.5,
    color: "#000",
  },
  header: {
    fontSize: 18,
    fontFamily: "Roboto-Bold",
    textAlign: "center",
    color: "#003399",
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: "Roboto-Bold",
    marginVertical: 10,
    color: "#003399",
  },
  paragraph: {
    marginBottom: 8,
    textAlign: "justify",
  },
});

const ContractDocument = () => {
  const getCurrentDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const currentDate = getCurrentDate();

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>CONTRACT DE VANZARE-CUMPARARE</Text>

        <Text style={styles.paragraph}>
          Serie: A-NFT-SALES Nr. .............. încheiat la data de {currentDate}.
        </Text>

        <Text style={styles.sectionTitle}>Părțile Contractului:</Text>
        <Text style={styles.paragraph}>
          1. Numele/Societatea ........................................, domiciliat in / cu sediul in
          .................................................., posesor al CI seria ........ nr. ............... /
          înmatriculată la ORC cu nr. ...................., CNP / C.U.I. ............................... cu
          sediul în ....................................................., cod IBAN
          .................................................................. deschis la ............................................... /
          prin intermediul platformei .................................... , denumit în continuare
          Vânzător, prin mandatar A-NFT WORLD S.R.L.
        </Text>

        <Text style={styles.paragraph}>
          2. Numele/Societatea ......................................... domiciliat in / cu sediul in
          .............................................................................. , posesor al CI seria
          ......... nr. ............... / înmatriculat la ORC cu nr. ........................ , CNP / C.U.I.
          ................................. reprezentat prin .............................. denumit în
          continuare Cumpărător/Beneficiar.
        </Text>

        <Text style={styles.sectionTitle}>Art. 1. Obiectul Contractului</Text>
        <Text style={styles.paragraph}>
          Obiectul prezentului contract îl reprezintă vânzarea de către Vânzător a
          Produselor descrise în Anexa 1 la prezentul Contract, denumite în continuare
          Produsele. Cumpărătorul declară că a luat la cunoștință de caracteristicile
          Produsului conform prezentării pe platforma și este de acord cu acestea.
        </Text>

        <Text style={styles.sectionTitle}>Art. 2. Prețul și Modalități de Plată</Text>
        <Text style={styles.paragraph}>
          2.1. Prețul Produselor este de ....................... RON, ....................... USD,
          .........................EUR. Prețul este determinat în RON, având în vedere
          cerințele fiscale din România. La prețul indicat se pot adăuga taxe și comisioane
          percepute de instituțiile financiare care gestionează instrumentele de plată.
        </Text>

        <Text style={styles.paragraph}>
          2.2. Plata se va realiza prin transfer bancar în contul Intermediarului nr.
          ...................................... deschis la ........................................ . Plata în această
          modalitate se va face prin intermediul platformei, utilizând modalitățile de plată
          electronice disponibile. În cazul în care plata se efectuează în valute electronice,
          cum ar fi Bitcoin, valoarea tranzacției va fi calculată conform ratei de schimb
          publicate pe https://solscan.io. Plata se consideră efectuată la momentul
          creditării contului Intermediarului cu suma corespunzătoare, în funcție de
          modalitatea de plată aleasă.
        </Text>

        <Text style={styles.sectionTitle}>Art. 3. Comanda și Livrarea Produselor</Text>
        <Text style={styles.paragraph}>
          Cumpărătorul acceptă că odată semnat acest contract, comanda se consideră
          transmisă și urmează a fi procesată de Vânzător. Produsele vor fi livrate conform
          modalităților specificate în Anexa 1.
        </Text>

        <Text style={styles.sectionTitle}>Art. 4. Obligațiile Părților</Text>
        <Text style={styles.paragraph}>
          Vânzătorul se obligă să garanteze autenticitatea Produselor. Cumpărătorul se
          obligă să plătească integral contravaloarea acestora și să respecte utilizarea
          conform destinației lor.
        </Text>

        <Text style={styles.sectionTitle}>Art. 5. Încetarea Contractului</Text>
        <Text style={styles.paragraph}>
          5.1. Nerespectarea obligațiilor de către Părți atrage răspunderea contractuală a
          acestora.
        </Text>

        <Text style={styles.paragraph}>
          5.2. Prezentul contract încetează prin voința ambelor părți, în măsura în care
          acestea convin expres astfel, cu obligația părților de a-și executa obligațiile
          deja scadente la data încetării.
        </Text>

        <Text style={styles.paragraph}>
          5.3. Prezentul contract încetează de drept, fără punere în întârziere sau altă
          formalitate prealabilă, fără intervenția instanței de judecată, prin rezoluțiune
          unilaterală de către Vânzător, în cazul în care Cumpărătorul nu achită prețul
          produselor, în modalitatea stabilită de părți, în termen de 24 de ore de la
          încheierea prezentului contract.
        </Text>

        <Text style={styles.sectionTitle}>Art. 6. Forța Majoră</Text>
        <Text style={styles.paragraph}>
          6.1. Partea care nu își poate îndeplini obligațiile din cauză de forță majoră este
          exonerată de răspundere, în condițiile legii, cu obligația de a notifica cealaltă
          parte în termen de 5 zile.
        </Text>

        <Text style={styles.sectionTitle}>Art. 7. Legea Aplicabilă</Text>
        <Text style={styles.paragraph}>
          7.1. Prezentul Contract este guvernat și va fi interpretat în conformitate cu
          legea română.
        </Text>

        <Text style={styles.sectionTitle}>Art. 8. Obligații Confidențiale</Text>
        <Text style={styles.paragraph}>
          8.1. Intermediarul se obligă să păstreze confidențialitatea tuturor datelor și
          informațiilor furnizate de Părți.
        </Text>

        <Text style={styles.sectionTitle}>Art. 9. Alte Clauze</Text>
        <Text style={styles.paragraph}>
          9.1. Orice reclamație, notificare sau corespondență între Părți trebuie efectuată
          în scris printr-un mijloc ce asigură recepționarea.
        </Text>
      </Page>
    </Document>
  );
};

export default ContractDocument;
