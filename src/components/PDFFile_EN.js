import React from "react";
import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import Contract_de_Colaborare_1 from "../photos/Contract_de_Colaborare_1.png";
import text_semnatura from "../photos/text_semnatura.png";

Font.register({
  family: "Roboto",
  src: "/fonts/roboto/Roboto-Regular.ttf",
});
console.log("Roboto-Regular font registered!");

Font.register({
  family: "Roboto-Bold",
  src: "/fonts/roboto/Roboto-Bold.ttf",
  fontWeight: "bold",
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
    justifyContent: "space-between", // separates the two columns
    alignItems: "center", // aligns the elements vertically
  },
  column: {
    flex: 1, // each column takes up half the space
    alignItems: "center", // centers the content in each column
  },
});

const PDFFile = () =>
  // numar,
  // prestator,
  // resedinta,
  // codPostal,
  // telefon,
  // cui,
  // suma,
  // text_semnatura_prestator,
  {
    const getCurrentDate = () => {
      const today = new Date();
      const day = String(today.getDate()).padStart(2, "0");
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const year = today.getFullYear();
      return `${day}.${month}.${year}`;
    };

    const numar = "54";
    const prestator = "Vasile Aurel";
    const resedinta = "Cuca Macaii";
    const codPostal = "345263";
    const telefon = "072843235";
    const cui = "42117031";
    const suma = "1200 Euro";
    const text_semnatura_prestator = "contractor's signature";
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
          <Image style={styles.frontPage} src={Contract_de_Colaborare_1}></Image>
        </Page>
        <Page size="A4" style={styles.page}>
          <Text style={styles.header}>SERVICE PROVISION CONTRACT</Text>
          <Text style={styles.paragraph}>
            dbacitea@network30.org | +40749277757 | Strada Gradinilor, Number
            54, Strehaia City,
          </Text>
          <Text style={styles.paragraph}>Comanda Town, Mehedinti County</Text>
          <Text style={styles.paragraph}>www.a-nft.world</Text>
          <Text style={styles.textSpc}>
            Series:..ATFSEC../Number....{numar}..../Date...{currentDate}...
          </Text>
          <Text style={styles.line_1}></Text>
          <Text style={styles.sectionTitle}>1. CONTRACT PARTIES:</Text>
          <Text style={styles.paragraph}>
            Based on the provisions of Law no. 98/2016 regarding public
            procurement, with subsequent amendments, this service provision
            contract is concluded between:
          </Text>
          <Text style={styles.paragraph}>
            1.1. Contractor...............{prestator}.........., with its
            office/residence in..........{resedinta}........, postal code ..
            {codPostal}
            .., phone.....{telefon}..., VAT/CNP......{cui}....... hereinafter
            referred to as "<Text style={styles.bold}>Contractor</Text>".
          </Text>
          <Text style={styles.paragraph}>and</Text>
          <Text style={styles.paragraph}>
            1.2. Beneficiary....<Text style={styles.bold}>A-NFT WORLD SRL</Text>
            ...., with office at ........
            <Text style={styles.bold}>Gradinilor 54, Strehaia</Text>........,
            .....<Text style={styles.bold}>Mehedinti County</Text>...., postal
            code ..<Text style={styles.bold}>225300</Text>.., phone: ....
            <Text style={styles.bold}>0749277757</Text>...., e-mail: .....
            <Text style={styles.bold}>dbacitea@network30.org</Text>....,
            VAT..... <Text style={styles.bold}>49632450</Text>....., hereinafter
            referred to as "<Text style={styles.bold}>Beneficiary</Text>"
          </Text>
          <Text style={styles.line_2}></Text>
          <Text style={styles.sectionTitle}>DEFINITIONS</Text>
          <Text style={styles.paragraph}>
            In this contract, the following terms will be interpreted as
            follows:{" "}
          </Text>
          <Text style={styles.margin}>
            a. contract – this contract and all its annexes; beneficiary and
            contractor – the contracting parties, as named in this contract;
          </Text>
          <Text style={styles.margin}>
            b. beneficiary and contractor – the contracting parties, as named in
            this contract;
          </Text>
          <Text style={styles.margin}>
            c. contract price – the price payable by the beneficiary to the
            contractor for the full and proper fulfillment of all obligations
            assumed by the contract;
          </Text>
          <Text style={styles.margin}>
            d. services – activities whose provision is the subject of the
            contract;
          </Text>
          <Text style={styles.margin}>
            e. force majeure – represents an external, extraordinary, entirely
            unpredictable and unavoidable event, beyond the control of any
            party, not due to their fault or negligence, which makes the
            execution and fulfillment of the contract impossible; such events
            include: wars, revolutions, fires, floods, or other natural
            disasters, restrictions due to quarantine, embargo, etc. The list is
            not exhaustive, but merely illustrative. An event similar to those
            listed above, which, without creating an impossibility of execution,
            makes fulfilling the obligations of one party extremely costly, is
            not considered force majeure.
          </Text>
          <Text style={styles.line_2}></Text>
          <Text style={styles.sectionTitle}>2. INTERPRETATION</Text>
          <Text style={styles.paragraph}>
            2.1 In this contract, unless otherwise provided, words in the
            singular form will include the plural form and vice versa, where
            context permits.
          </Text>
          <Text style={styles.paragraph}>
            2.2 The term “day” or “days” or any reference to days means calendar
            days unless specified otherwise.
          </Text>
          <Text style={styles.line_2}></Text>
          <Text style={styles.sectionTitle}>3. OBJECT OF THE CONTRACT</Text>
          <Text style={styles.paragraph}>
            The object of the contract is the provision of Public Relations and
            Marketing services. This includes: developing communication
            strategy, planning social media posts, graphic elements, and
            organizing events aimed at promoting the brand.
          </Text>
          <Text style={styles.line_2}></Text>
          <Text style={styles.sectionTitle}>
            4. CONTRACT PRICE AND PAYMENT METHODS
          </Text>
          <Text style={styles.paragraph}>
            4.1 The agreed price for fulfilling the contract, payable by the
            beneficiary to the provider, is ....{suma}...... lei/month.
          </Text>
          <Text style={styles.paragraph}>
            4.2 Payment will be made in lei, into the provider's account, based
            on the fiscal invoice accompanied by the Activity Report for each
            event prepared by the provider and the minutes of the quantitative
            and qualitative reception.
          </Text>
          <Text style={styles.line_2}></Text>
          <Text style={styles.sectionTitle}>5. CONTRACT PRICE ADJUSTMENT</Text>
          <Text style={styles.paragraph}>
            5.1 The contract price can only be modified with the agreement of
            both parties.
          </Text>
          <Text style={styles.line_2}></Text>
          <Text style={styles.sectionTitle}>
            6. VALIDITY OF THE CONTRACT AND PERFORMANCE DEADLINE
          </Text>
          <Text style={styles.paragraph}>
            6.1 The validity of this contract begins on the date of signature by
            both parties and ends upon the exhaustion of any effect it produces,
            either conventionally or legally.
          </Text>
          <Text style={styles.paragraph}>
            6.2 The period for providing services starts from the date the
            contract is signed by both parties and continues for an indefinite
            period.
          </Text>
          <Text style={styles.paragraph}>
            6.3 The provision of services will start after conducting a
            preliminary market study and according to the beneficiary's needs.
          </Text>
          <Text style={styles.line_2}></Text>
          <Text style={styles.sectionTitle}>7. PROVIDER'S OBLIGATIONS</Text>
          <Text style={styles.paragraph}>
            7.1 The provider is obligated to perform the services provided in
            this contract with professionalism and due promptness, as per the
            commitment made, through direct communication with the beneficiary.
          </Text>
          <Text style={styles.paragraph}>
            7.2 The provider is responsible for supervising the service delivery
            and ensuring continuous availability of necessary resources for
            fulfilling the contract.
          </Text>
          <Text style={styles.paragraph}>
            7.3 The provider is fully responsible for the services outlined in
            this contract. They are also responsible for the safety of all
            operations and methods used and the qualification of the staff
            employed throughout the contract's duration.
          </Text>
          <Text style={styles.line_2}></Text>
          <Text style={styles.sectionTitle}>8. BENEFICIARY'S OBLIGATIONS</Text>
          <Text style={styles.paragraph}>
            8.1 The beneficiary ensures payment for the services provided by the
            provider.
          </Text>
          <Text style={styles.paragraph}>
            8.2 The beneficiary is obliged to provide the provider with any
            information and/or facilities deemed relevant and necessary for
            fulfilling the contract.
          </Text>
          <Text style={styles.paragraph}>
            8.3 The beneficiary is obligated to ensure access to the provider's
            representatives at their premises to facilitate service delivery.
          </Text>
          <Text style={styles.line_2}></Text>
          <Text style={styles.sectionTitle}>
            9. CONFIDENTIALITY OF THE CONTRACT
          </Text>
          <Text style={styles.paragraph}>
            9.1 Without affecting the execution of this contract, the
            beneficiary is obliged to guarantee the protection of information
            specified by the provider as confidential, to the extent that
            revealing such information could harm the provider's legitimate
            interests, particularly concerning commercial secrets and
            intellectual property.
          </Text>
          <Text style={styles.paragraph}>
            9.2 The provider will treat all documents and information provided
            to them regarding the contract as personal and confidential, except
            for those that, as part of the public procurement file, as defined
            in Law no. 98/2016 on public procurement, are classified as public
            information. The provider will not publish or disclose any
            information related to the contract without the prior written
            consent of the beneficiary.
          </Text>
          <Text style={styles.paragraph}>
            9.3 The provider will ensure the confidentiality of information and
            the protection of personal data they have access to and will ensure
            that, both during the contract and after its termination,
            information or documents accessed will not be used for purposes
            other than fulfilling the contractual obligations.
          </Text>
          <Text style={styles.paragraph}>
            9.4 The provider is obliged to train the personnel used for the
            fulfillment of the contract to ensure the confidentiality of
            information and the security of documents, data, and goods they come
            into contact with during the service delivery outlined in the
            contract.
          </Text>
          <Text style={styles.line_2}></Text>
          <Text style={styles.sectionTitle}>
            10. SANCTIONS FOR WILLFUL NON-FULFILLMENT OF OBLIGATIONS
          </Text>
          <Text style={styles.paragraph}>
            10.1 If the provider, through their exclusive fault, fails to meet
            the obligations set by the contract, starting from the following
            day, the beneficiary has the right to deduct from the contract
            value, terminate the contract, and stop paying for the services
            provided.
          </Text>
          <Text style={styles.paragraph}>
            10.2 If the beneficiary, through their exclusive fault, fails to
            meet the obligations within the time limit set in Article 10.1, the
            provider must be notified of this, a discussion will take place
            between both parties, and the necessary measures will be taken by
            mutual agreement.
          </Text>
          <Text style={styles.paragraph}>
            10.3 Failure to meet the obligations assumed under this contract by
            either party, willfully and repeatedly (at least twice), gives the
            injured party the right to request the termination of the contract.
          </Text>
          <Text style={styles.line_2}></Text>
          <Text style={styles.sectionTitle}>
            11. ACCEPTANCE AND INSPECTIONS
          </Text>
          <Text style={styles.paragraph}>
            11.1 The beneficiary or their representative has the right to verify
            the service delivery method to establish the online and offline
            communication directions, together with the provider.
          </Text>
          <Text style={styles.paragraph}>
            11.2 Documents created under the contract will be handed over to the
            beneficiary in both original hard copy and electronic format.
          </Text>
          <Text style={styles.line_2}></Text>
          <Text style={styles.sectionTitle}>
            12. DELAYS IN FULFILLING THE CONTRACT
          </Text>
          <Text style={styles.paragraph}>
            12.1 If, during the contract's execution, the provider finds they
            cannot meet the performance deadline specified in the order, they
            are obligated to notify the beneficiary; the service delivery
            deadline in the order will be modified with the written agreement of
            both parties.
          </Text>
          <Text style={styles.paragraph}>
            12.2 Unless the beneficiary agrees to an extension of the
            performance deadline specified in the order, any delay in fulfilling
            the order gives the beneficiary the right to request feedback
            sessions for resolving the situation.
          </Text>
          <Text style={styles.line_2}></Text>
          <Text style={styles.sectionTitle}>
            13. TERMINATION OF THE CONTRACT
          </Text>
          <Text style={styles.paragraph}>
            13.1 The contract terminates under the law, in accordance with
            Article 1321 of Law no. 287/2009 on the Civil Code, republished with
            subsequent amendments, in the following cases:
          </Text>
          <Text style={styles.paragraph}>
            a. full execution of the provider's and beneficiary's obligations as
            stipulated in this contract; b. mutual consent of the parties; c.
            contract termination as per Articles 12.4, 12.5, and 17.3.
          </Text>
          <Text style={styles.paragraph}>
            13.2 (1) The beneficiary has the right to unilaterally terminate the
            contract by sending a prior notification to the provider. (2) The
            notification must be sent by the beneficiary at least 15 days in
            advance.
          </Text>
          <Text style={styles.line_2}></Text>
          <Text style={styles.sectionTitle}>14. FORCE MAJEURE</Text>
          <Text style={styles.paragraph}>
            14.1 Force majeure is established by a competent authority.
          </Text>
          <Text style={styles.paragraph}>
            14.2 Force majeure exempts the contracting parties from fulfilling
            their obligations under this contract for the entire period in which
            it occurs.
          </Text>
          <Text style={styles.paragraph}>
            14.3 The fulfillment of the contract will be suspended during the
            force majeure event, but without prejudicing the rights that were
            due to the parties until its occurrence.
          </Text>
          <Text style={styles.paragraph}>
            14.4 The contracting party invoking force majeure is obliged to
            immediately and fully notify the other party of its occurrence and
            take any available measures to limit its consequences.
          </Text>
          <Text style={styles.paragraph}>
            14.5 The contracting party invoking force majeure must notify the
            other party of the cessation of its cause within a maximum of 15
            days after it ends.
          </Text>
          <Text style={styles.paragraph}>
            14.6 If force majeure lasts or is expected to last for more than a
            month, each party has the right to notify the other party of the
            automatic termination of this contract, without either party
            claiming damages.
          </Text>
          <Text style={styles.line_2}></Text>
          <Text style={styles.sectionTitle}>
            15. GOVERNING LANGUAGE OF THE CONTRACT
          </Text>
          <Text style={styles.paragraph}>
            The governing language of the contract is Romanian.
          </Text>
          <Text style={styles.line_2}></Text>
          <Text style={styles.sectionTitle}>16. COMMUNICATIONS</Text>
          <Text style={styles.paragraph}>
            16.1 (1) Any communication between the parties regarding the
            fulfillment of this contract must be made in writing.
          </Text>
          <Text>
            (2) Any written document must be registered both at the time of
            sending and upon receipt.
          </Text>
          <Text style={styles.paragraph}>
            16.2 Communications between the parties can also be made via phone
            or email, provided the receipt of the communication is confirmed.
          </Text>
          <Text style={styles.line_2}></Text>
          <Text style={styles.sectionTitle}>17. APPLICABLE LAW</Text>
          <Text style={styles.paragraph}>
            The contract will be interpreted in accordance with the laws of
            Romania. The parties have agreed to conclude this contract in 2
            (two) copies, one for each party.
          </Text>
          <Text style={styles.flexOrz}>
            <Text style={styles.beneficiary}>BENEFICIARY,</Text>
            <Text style={styles.provider}>SERVICE PROVIDER,</Text>
          </Text>
          <Text style={styles.beneficiary}>A-NFT WORLD SRL CUI 49632450</Text>
          <Image style={styles.signature} src={text_semnatura}></Image>
        </Page>
      </Document>
    );
  };

export default PDFFile;
