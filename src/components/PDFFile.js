import React from "react";
import { Page, Text, Image, Document, StyleSheet, Font } from "@react-pdf/renderer";
import Contract_de_Colaborare from "../photos/Contract_de_Colaborare.png";
import text_semnatura from "../photos/text_semnatura.png";

Font.register({
  family: 'Roboto',
  src: '/fonts/roboto/Roboto-Regular.ttf',
});
console.log("Roboto-Regular font registered!");

Font.register({
  family: 'Roboto-Bold',
  src: '/fonts/roboto/Roboto-Bold.ttf',
  fontWeight: 'bold',
});
console.log("Roboto-Bold font registered!");

console.log(Font.getRegisteredFonts());

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
    paddingRight: 30,
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: "Roboto-Bold",
    marginVertical: 10,
    color: "#003399",
    paddingRight: 30,
  },
  paragraph: {
    marginBottom: 8,
    textAlign: "justify",
    paddingRight: 30,
  },
  textSpc: {
    marginBottom: 8,
    textAlign: "center",
    fontFamily: "Roboto-Bold",
  },
  bold: {
    fontFamily: "Roboto-Bold",
  },
  margin: {
    marginBottom: 8,
    textAlign: "justify",
    paddingRight: 30,
  },
  frontPage: {
    width: "100%",
    height: "100%",
  },
  line_1: {
    borderTopWidth: 2,
    borderTopColor: "#1e3a8a",
    borderTopStyle: "solid",
    width: "100%",
    paddingRight: 30,
  },
  line_2: {
    borderTopWidth: 1,
    borderTopColor: "#1e3a8a",
    borderTopStyle: "solid",
    width: "100%",
    paddingRight: 30,
  },
  signature: {
    marginTop: 8,
    width: "35%",
    height: "10%",
  },
  sprestator: {
    marginBottom: 8,
    textAlign: "center",
    fontFamily: "Roboto-Bold",
    flex: "justify",
  },
  beneficiar: {
    marginBottom: 8,
    fontFamily: "Roboto-Bold",
    flex: "justify",
  },
  flexOrz: {
    marginBottom: 8,
    flexDirection: "row",
  },

  container: {
    flexDirection: "row",
    justifyContent: "space-between", // separă cele două coloane
    alignItems: "center", // aliniază elementele pe verticală
  },
  column: {
    flex: 1, // fiecare coloană ocupă jumătate din spațiu
    alignItems: "center", // centrăm conținutul în fiecare coloană
  },
});

const PDFFile = ({  numar,
  prestator,
  resedinta,
  codPostal,
  telefon,
  cui,
  suma,
  text_semnatura_prestator,}) =>

  {
    const getCurrentDate = () => {
      const today = new Date();
      const day = String(today.getDate()).padStart(2, "0");
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const year = today.getFullYear();
      return `${day}.${month}.${year}`;
    };

    console.log({
      // numar,
      // prestator,
      // resedinta,
      // codPostal,
      // telefon,
      // cui,
      // suma,
      // text_semnatura_prestator,
    });

    const currentDate = getCurrentDate();

    return (
      <Document>
        <Page size="A4" style={styles.container_page1}>
          <Image style={styles.frontPage} src={Contract_de_Colaborare}></Image>
        </Page>
        <Page size="A4" style={styles.page}>
          <Text style={styles.header}>CONTRACT DE PRESTARI SERVICII</Text>
          <Text style={styles.paragraph}>
            dbacitea@network30.org | +40749277757 | Strada Gradinilor, Numar 54,
            Oras Strehaia,
          </Text>
          <Text style={styles.paragraph}>
            localitatea Comanda, Judetul Mehedinti
          </Text>
          <Text style={styles.paragraph}>www.a-nft.world</Text>
          <Text style={styles.textSpc}>
            Seria:..ATFSEC../Numar....{numar}..../Data...{currentDate}...
          </Text>
          <Text style={styles.line_1}></Text>
          <Text style={styles.sectionTitle}>1. PARTILE CONTRACTULUI:</Text>
          <Text style={styles.paragraph}>
            În temeiul prevederilor Legii nr. 98/2016 privind achizițiile
            publice, cu modificările și completările ulterioare, s-a încheiat
            prezentul contract de prestări servicii, între:
          </Text>
          <Text style={styles.paragraph}>
            1.1. Prestator...............{prestator}.........., cu sediul în/cu
            resedinta în..........{resedinta}........, cod poștal ..{codPostal}
            .., telefon.....{telefon}..., CUI/CNP......{cui}....... denumit in
            continuare ca si “<Text style={styles.bold}>Prestator</Text>".
          </Text>
          <Text style={styles.paragraph}>si</Text>
          <Text style={styles.paragraph}>
            1.2. Beneficiar....<Text style={styles.bold}>A-NFT WORLD SRL</Text>
            ...., cu sediul în ........
            <Text style={styles.bold}>Gradinilor 54, Strehaia</Text>........,
            .....<Text style={styles.bold}>Jud Mehedinti</Text>...., cod poștal
            ..
            <Text style={styles.bold}>225300</Text>.., telefon: ....
            <Text style={styles.bold}>0749277757</Text>...., e-mail: .....
            <Text style={styles.bold}>dbacitea@network30.org</Text>....,
            cui..... <Text style={styles.bold}>49632450</Text>....., denumit in
            continuare ca si “<Text style={styles.bold}>Beneficiar</Text>"
          </Text>
          <Text style={styles.line_2}></Text>
          <Text style={styles.sectionTitle}>DEFINITII</Text>
          <Text style={styles.paragraph}>
            În prezentul contract următorii termeni vor fi interpretaţi astfel:{" "}
          </Text>
          <Text style={styles.margin}>
            a. contract – prezentul contract şi toate anexele sale; beneficiar
            şi prestator – părţile contractante, aşa cum sunt acestea numite în
            prezentul contract;
          </Text>
          <Text style={styles.margin}>
            b. beneficiar şi prestator – părţile contractante, aşa cum sunt
            acestea numite în prezentul contract;
          </Text>
          <Text style={styles.margin}>
            c. preţul contractului – preţul plătibil prestatorului de către
            beneficiar, în baza contractului, pentru îndeplinirea integrală şi
            corespunzătoare a tuturor obligaţiilor asumate prin contract;
          </Text>
          <Text style={styles.margin}>
            d. servicii – activităţi a căror prestare face obiectul
            contractului;
          </Text>
          <Text style={styles.margin}>
            e. forţa majoră – reprezintă o împrejurare de origine externă, cu
            caracter extraordinar, absolut imprevizibilă şi inevitabilă, care se
            află în afara controlului oricărei părţi, care nu se datorează
            greşelii sau vinei acestora, şi care face imposibilă executarea şi,
            respectiv, îndeplinirea contractului; sunt considerate asemenea
            evenimente: războaie, revoluţii, incendii, inundaţii sau orice alte
            catastrofe naturale, restricţii apărute ca urmare a unei carantine,
            embargou, enumerarea nefiind exhaustivă, ci enunţiativă. Nu este
            considerat forţă majoră un eveniment asemenea celor de mai sus care,
            fără a crea o imposibilitate de executare, face extrem de
            costisitoare executarea obligaţiilor uneia din părţi.
          </Text>
          <Text style={styles.line_2}></Text>
          <Text style={styles.sectionTitle}>2. INTERPRETARE</Text>
          <Text style={styles.paragraph}>
            2.1 În prezentul contract, cu excepţia unei prevederi contrare,
            cuvintele la forma singular vor include forma de plural şi vice
            versa, acolo unde acest lucru este permis de context.
          </Text>
          <Text style={styles.paragraph}>
            2.2 Termenul “zi” sau “zile” sau orice referire la zile reprezintă
            zile calendaristice dacă nu se specifică în mod diferit.
          </Text>
          <Text style={styles.line_2}></Text>
          <Text style={styles.sectionTitle}>3. OBIECTUL CONTRACTULUI</Text>
          <Text style={styles.paragraph}>
            Obiectul contractului îl reprezintă prestarea de servicii de Relații
            Publice și Marketing. Aici se include: dezvoltarea strategiei de
            comunicare, planificarea postările din social media, elemente
            grafice și organizarea de evenimente cu scopul promovării de brand.
          </Text>
          <Text style={styles.line_2}></Text>
          <Text style={styles.sectionTitle}>
            4. PREȚUL CONTRACTULUI ȘI MODALITĂȚI DE PLATĂ
          </Text>
          <Text style={styles.paragraph}>
            4.1 Preţul convenit pentru îndeplinirea contractului, plătibil
            prestatorului de către beneficiar este de ....{suma}...... lei/luna.
          </Text>
          <Text style={styles.paragraph}>
            4.2 Plata se va efectua în lei, în contul prestatorului, în baza
            facturii fiscale însoţite de Raportul de activitate pentru fiecare
            eveniment întocmit de prestator și procesele verbale de recepție
            cantitativă și calitativă.
          </Text>
          <Text style={styles.line_2}></Text>
          <Text style={styles.sectionTitle}>
            5. AJUSTAREA PREŢULUI CONTRACTULUI
          </Text>
          <Text style={styles.paragraph}>
            5.1 Preţul contractului poate fi modificat doar în urma acordului
            ambelor părți.
          </Text>
          <Text style={styles.line_2}></Text>
          <Text style={styles.sectionTitle}>
            6. VALABILITATEA CONTRACTULUI ȘI TERMENUL DE EXECUȚIE A OBLIGAȚIILOR
          </Text>
          <Text style={styles.paragraph}>
            6.1 Valabilitatea prezentului contract începe de la data semnării
            lui de către ambele părți și se termină la epuizarea convențională
            sau legală a oricărui efect pe care îl produce.
          </Text>
          <Text style={styles.paragraph}>
            {" "}
            6.2 Perioada pentru prestarea serviciilor este de la data semnării
            contractului de către ambele părți și continuă pe o perioadă
            nedeteminată.
          </Text>
          <Text style={styles.paragraph}>
            6.3 Prestarea serviciilor va începe după realizarea unui studiu de
            piață în prealabil și potrivit nevoilor beneficiarului.
          </Text>
          <Text style={styles.line_2}></Text>
          <Text style={styles.sectionTitle}>7. OBLIGAŢIILE PRESTATORULUI</Text>
          <Text style={styles.paragraph}>
            7.1 Prestatorul are obligaţia de a presta serviciile prevăzute în
            prezentul contract cu profesionalismul şi promptitudinea cuvenite
            angajamentului asumat, în urma comunicării directe cu beneficiarul.
          </Text>
          <Text style={styles.paragraph}>
            7.2 Prestatorul are obligaţia de a supraveghea prestarea serviciilor
            şi de a asigura în mod continuu resursele necesare, pentru
            îndeplinirea contractului.
          </Text>
          <Text style={styles.paragraph}>
            7.3 Prestatorul este pe deplin responsabil pentru prestarea
            serviciilor ce fac obiectul prezentului contract. Totodată, este
            răspunzător atât de siguranţa tuturor operaţiunilor şi metodelor
            utilizate, cât şi de calificarea personalului folosit pe toată
            durata contractului.
          </Text>
          <Text style={styles.line_2}></Text>
          <Text style={styles.sectionTitle}>8. OBLIGAŢIILE BENEFICIARULUI</Text>
          <Text style={styles.paragraph}>
            8.1 Beneficiarul se asigură să plătească pentru serviciile prestate
            de către prestator.
          </Text>
          <Text style={styles.paragraph}>
            8.2 Beneficiarul se obligă să pună la dispoziţia prestatorului orice
            informaţii şi/sau facilităţi pe care le consideră relevante şi
            necesare pentru îndeplinirea contractului.
          </Text>
          <Text style={styles.paragraph}>
            8.3 Beneficiarul se obligă să asigure accesul reprezentanţilor
            prestatorului în sediul său, în vederea prestării serviciilor.
          </Text>
          <Text style={styles.line_2}></Text>
          <Text style={styles.sectionTitle}>
            9. CARACTERUL CONFIDENŢIAL AL CONTRACTULUI
          </Text>
          <Text style={styles.paragraph}>
            9.1 Fără a aduce atingere derulării şi execuţiei prezentului
            contract, beneficiarul are obligaţia de a asigura garantarea
            protejării acelor informaţii pe care prestatorul le precizează ca
            fiind confidenţiale, în măsura în care, în mod obiectiv, dezvăluirea
            acestor informaţii ar prejudicia interesele legitime ale acestuia,
            în special în ceea ce priveste secretul comercial si proprietatea
            intelectuală.
          </Text>
          <Text style={styles.paragraph}>
            9.2 Prestatorul va trata toate documentele și informațiile care îi
            sunt puse la dispoziție referitoare la contract ca având caracter
            personal și confidențial, cu excepția celor care, făcând parte din
            dosarul achiziției publice, așa cum acesta este definit în Legea nr.
            98/2016 privind achizițiile publice, cu modificările și completările
            ulterioare, au caracter de informație publică. Prestatorul nu va
            publica sau divulga nicio informație cu privire la contract fără
            acordul scris, prealabil, al beneficiarului.
          </Text>
          <Text style={styles.paragraph}>
            9.3 Prestatorul va asigura confidențialitatea informaţiilor și
            protecția datelor cu caracter personal la care are acces şi se va
            asigura că, atât pe perioada de derulare a contractului, cât şi după
            încetarea acestuia, informaţiile sau documentele la care a avut
            acces nu vor fi utilizate în alt scop decât pentru îndeplinirea
            obligaţiilor contractuale.
          </Text>
          <Text style={styles.paragraph}>
            9.4 Prestatorul are obligația de a instrui personalul folosit în
            scopul îndeplinirii contractului pentru ca acesta să asigure
            păstrarea confidențialității informațiilor și securitatea
            documentelor, datelor și bunurilor cu care intră în contact în
            timpul prestării serviciilor care fac obiectul contractului.
          </Text>
          <Text style={styles.line_2}></Text>
          <Text style={styles.sectionTitle}>
            10. SANCŢIUNI PENTRU NEÎNDEPLINIREA CULPABILĂ A OBLIGAŢIILOR
          </Text>
          <Text style={styles.paragraph}>
            10.1 În cazul în care prestatorul, din vina sa exclusivă, nu își
            onorează obligaţiile stabilite prin contract, începând cu ziua
            următoare beneficiarul are dreptul de a deduce din valoarea
            contractului, înceta contractul și de a înceta plata pentru
            prestarea serviciilor.
          </Text>
          <Text style={styles.paragraph}>
            10.2 În cazul în care beneficiarul, din vina sa exclusivă, nu îşi
            onorează obligaţiile în termenul prevăzut la art.10.1, prestatorul
            trebuie să fie anunțat de acest fapt, va avea loc o discuție între
            ambele părți și se vor lua măsurile necesare de comun acord.
          </Text>
          <Text style={styles.paragraph}>
            10.3 Nerespectarea obligaţiilor asumate prin prezentul contract de
            către una dintre părţi, în mod culpabil şi repetat (cel puțin de
            două ori), dă dreptul părţii lezate de a cere rezilierea
            contractului.
          </Text>
          <Text style={styles.line_2}></Text>
          <Text style={styles.sectionTitle}>11. RECEPȚIE ȘI VERIFICĂRI</Text>
          <Text style={styles.paragraph}>
            11.1 Beneficiarul sau reprezentantul său are dreptul de a verifica
            modul de prestare a serviciilor pentru a stabili direcțiile de
            comunicare online și offline, alături de prestator.
          </Text>
          <Text style={styles.paragraph}>
            {" "}
            11.2 Documentele realizate în cadrul contractului vor fi predate
            beneficiarului atât în original în format letric, cât și în format
            electronic.
          </Text>
          <Text style={styles.line_2}></Text>
          <Text style={styles.sectionTitle}>
            12. ÎNTÂRZIERI ÎN ÎNDEPLINIREA CONTRACTULUI
          </Text>
          <Text style={styles.paragraph}>
            12.1 Dacă pe parcursul îndeplinirii contractului prestatorul
            constată că nu poate respecta termenul de prestare prevăzut în nota
            de comandă, atunci acesta are obligaţia de a notifica beneficiarul;
            modificarea termenului de prestare a serviciilor prevăzut în comandă
            se va face cu acordul scris al părţilor.
          </Text>
          <Text style={styles.paragraph}>
            12.2 În afara cazului în care beneficiarul este de acord cu o
            prelungire a termenului de prestare prevăzut în comandă, orice
            întârziere în îndeplinirea comenzii dă dreptul beneficiarului de a
            solicita sesiuni de feedback pentru soluționarea situației.
          </Text>
          <Text style={styles.line_2}></Text>
          <Text style={styles.sectionTitle}>13. ÎNCETAREA CONTRACTULUI</Text>
          <Text style={styles.paragraph}>
            13.1 Contractul încetează, în condițiile legii, în conformitate cu
            prevederile art.1321 din Legea nr. 287/2009 privind Codul civil,
            republicată cu modificările ulterioare, în următoarele cazuri:
          </Text>
          <Text style={styles.paragraph}>
            a. executarea integrală a obligațiilor prestatorului și
            beneficiarului, așa cum sunt acestea prevăzute în prezentul
            contract; b. acordul de voinţă al părţilor; c. rezilierea
            contractului în condițiile art.12.4, art.12.5 și art.17.3.
          </Text>
          <Text style={styles.paragraph}>
            13.2 (1) Beneficiarul are dreptul de a denunţa unilateral
            contractul, printr-o notificare prealabilă adresată prestatorului.
            (2) Notificarea va fi transmisă de către beneficiar cu cel puțin 15
            zile înainte.
          </Text>
          <Text style={styles.line_2}></Text>
          <Text style={styles.sectionTitle}>14. FORŢA MAJORĂ</Text>
          <Text style={styles.paragraph}>
            14.1 Forţa majoră este constatată de o autoritate competentă.
          </Text>
          <Text style={styles.paragraph}>
            14.2 Forţa majoră exonerează părţile contractante de îndeplinirea
            obligaţiilor asumate prin prezentul contract, pe toată perioada în
            care aceasta acţionează.
          </Text>
          <Text style={styles.paragraph}>
            {" "}
            14.3 Îndeplinirea contractului va fi suspendată în perioada de
            acţiune a forţei majore, dar fără a prejudicia drepturile ce li se
            cuveneau părţilor până la apariţia acesteia.
          </Text>
          <Text style={styles.paragraph}>
            14.4 Partea contractantă care invocă forţa majoră are obligaţia de a
            notifica celeilalte părţi, imediat şi în mod complet, producerea
            acesteia şi să ia orice măsuri care îi stau la dispoziţie în vederea
            limitării consecinţelor.
          </Text>
          <Text style={styles.paragraph}>
            14.5 Partea contractantă care invocă forţa majoră are obligaţia de a
            notifica celeilalte părţi încetarea cauzei acesteia în maximum 15
            zile de la încetare.
          </Text>
          <Text style={styles.paragraph}>
            14.6 Dacă forţa majoră acţionează sau se estimează că va acţiona o
            perioadă mai mare de o lună, fiecare parte va avea dreptul să
            notifice celeilalte părţi încetarea de drept a prezentului contract,
            fără ca vreuna din părţi să poată pretinde celeilalte
            daune-interese.
          </Text>
          <Text style={styles.line_2}></Text>
          <Text style={styles.sectionTitle}>
            15. LIMBA CARE GUVERNEAZĂ CONTRACTUL
          </Text>
          <Text style={styles.paragraph}>
            Limba care guvernează contractul este limba română.
          </Text>
          <Text style={styles.line_2}></Text>
          <Text style={styles.sectionTitle}>16. COMUNICĂRI</Text>
          <Text style={styles.paragraph}>
            16.1 (1) Orice comunicare între părţi, referitoare la îndeplinirea
            prezentului contract, trebuie să fie transmisă în scris.
          </Text>

          <Text>
            (2) Orice document scris trebuie înregistrat atât în momentul
            transmiterii, cât şi în momentul primirii.
          </Text>
          <Text style={styles.paragraph}>
            16.2 Comunicările între părţi se pot face şi prin telefon sau
            e-mail, cu condiţia confirmării primirii comunicării.
          </Text>
          <Text style={styles.line_2}></Text>
          <Text style={styles.sectionTitle}>
            17. LEGEA APLICABILĂ CONTRACTULUI
          </Text>
          <Text style={styles.paragraph}>
            Contractul va fi interpretat conform legilor din România. Părţile au
            înţeles să încheie prezentul contract în 2 (două) exemplare, câte
            unul pentru fiecare parte.
          </Text>
          <Text style={styles.flexOrz}>
            <Text style={styles.beneficiar}>BENEFICIAR,</Text>
            <Text style={styles.sprestator}>PRESTATOR,</Text>
          </Text>

          <Text style={styles.beneficiar}>A-NFT WORLD SRL CUI 49632450</Text>
          <Image style={styles.signature} src={text_semnatura}></Image>

          {/* <Text style={styles.column}>
            <Image style={styles.signature} src={contract_page_3} />
            <Image style={styles.signature} src={contract_page_3} />
          </Text> */}
        </Page>
      </Document>
    );
  };

export default PDFFile;
