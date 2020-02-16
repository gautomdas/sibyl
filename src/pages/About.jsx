import React from 'react';
import { Card, Row, Col } from 'antd';

function About() {
  return (
    <div>
      <h1>About</h1>
      <br />
      <br />
      <br />
      <b>Rewrite all of this.</b>
      <br />
      <br />
      <br />
      Big data is expanding faster than ever in the healthcare industry and the demand for
      healthcare analytics is ballooning. Yet, most data scientists still struggle to access the
      patient data they need to conduct research. One of the chief impediments is the lack of
      incentive for hospitals and pharmacies to release data. This is compounded by concerns over
      security, privacy, and legal uncertainty. The result is huge missed potential for healthcare
      innovation and a market ripe for capitalization. Sheryl is an innovative, free-market solution
      to all of these problems. We offer healthcare providers the opportunity to directly sell
      healthcare data to prospective researchers. The service utilizes end-to-end encryption, smart
      contracts, machine learning, and data security agreements to ensure that data is transferred
      in a manner that is secure, reliable, and respects patient privacy.
      <br />
      <br />
      <h2>Meet the Team</h2>
      [TODO]
      <br />
      <br />
      <h2>Data Transfer</h2>
      Our service offers a maximally secure transaction process. The majority (63%) of breaches are
      caused by human error or misuse. 9 The rest are caused by a combination of physical theft,
      hacking, and malware. DatabaseMart eliminates both of these possibilities. Our service employs
      Virgil Security’s end-to-end encryption technique. When a data provider decides to market
      their data, they download a client application and provide the directory location of the data
      to market. When a buyer seeks to purchase a database, the data is first encrypted by the
      client application, removing any intelligible content. The encrypted data is then sent to the
      buyer, and the buyer’s client decrypts the file. Throughout the transaction, our service does
      not store or view the data, so there is no risk of a breach. The transaction also employs a
      “smart contract” protocol. When data is purchased, the vender first sends a small but unusable
      portion of the desired database to the buyer. The buyer verifies that the product is as
      desired, and the rest of the transaction is carried out. The protocol ensures that buyers can
      access the data they are seeking.
      <br />
      <br />
      <h2>De-identification</h2>
      Before we distribute the data, we must ensure that the data cannot be used to identify the
      patient. The HIPAA permits two methods for de-identifying data: the “Expert Determination”
      method and the “Safe Harbor” method. In the former, an expert certifies that the data cannot
      be used to identify individuals therein contained. In the latter, eighteen key identifiers
      (including name, address, phone number, and email, among others) are replaced with random
      data. Our client will meet the HIPAA via the second method. Traditional de-identification
      clients rely on a dictionary to help find and remove these key identifiers. While dictionaries
      are effective for perfectly formatted datasets, they perform poorly in practice, as formatting
      errors and variations in style are prevalent among medical records. Instead, we choose to
      employ a machine learning technique called deep learning. Essentially, we feed our model
      batches of raw data and score the system on its ability to correctly de-identify data. After
      each batch, we adjust the model to achieve a better accuracy. By iterating over thousands of
      examples, the model approaches near-perfect precision. This specific method has been
      experimentally determined to achieve state-of-the-art performance, meeting HIPAA guidelines.
      <br />
      <br />
      <h2>License</h2>
      <h3>Section 1. Vender Data Defined</h3>
      “Vender Data” means all information processed or stored on computers or other electronic media
      by Vender or on Vender’s behalf, or provided to Buyer for such processing or storage, as well
      as any information derived from such information. Vender Data includes, without limitation:
      (a) information on paper or other nonelectronic media provided to Buyer for computer
      processing or storage, or information formerly on electronic media; (b) information provided
      to Buyer by Vender’s Venders or other users or by other third parties; and (c) personally
      identifiable information from such Venders, users, or other third parties.
      <h3>Section 2. Data Security</h3>
      Buyer shall exercise commercially reasonable efforts to prevent unauthorized exposure or
      disclosure of Vender Data. In addition, and without limiting the generality of the preceding
      sentence:
      <ol type="a">
        <li>
          <h4>
            <i>DataSec Program. </i>
          </h4>
          Buyer shall maintain, implement, and comply with a written data security program (the
          “DataSec Program”) that requires commercially reasonable policies and procedures to ensure
          compliance with this section. The DataSec Program’s policies and procedures shall contain
          administrative, technical, and physical safeguards, including without limitation: (i)
          guidelines on the proper disposal of Vender Data after it is no longer needed to carry out
          the purposes of the Agreement; (ii) access controls on electronic systems used to
          maintain, access, or transmit Vender Data; (iii) access restrictions at physical locations
          containing Vender Data; (iv) encryption of electronic Vender Data; (v) dual control
          procedures; (vi) testing and monitoring of electronic systems; and (vii) procedures to
          detect actual and attempted attacks on or intrusions into the systems containing or
          accessing Vender Data. Buyer shall review the DataSec Program and all other Vender Data
          security precautions regularly, but no less than annually, and update and maintain them to
          comply with applicable laws, regulations, technology changes, and best practices.
        </li>
        <li>
          <h4>
            <i>Employee Background Checks.</i>
          </h4>{' '}
          Buyer shall not allow any of its employees or subcontractor personnel to access Vender
          Data except to the extent that such individual has received a clean report with regard to
          each of the following: (i) verifications of education and work history; (ii) a 7-year all
          residence criminal offender record information check; and (iii) a 7-year federal criminal
          offender record information check. (A clean report refers to a report with no
          discrepancies in education or work history and no criminal investigations or convictions
          related to felonies or to crimes involving identity theft or other misuses of sensitive
          information.) However, the requirements of the preceding sentence shall not apply to the
          extent forbidden by applicable law.
        </li>
        <li>
          <h4>
            <i>Audits & Testing.</i>
          </h4>
          <ol type="i">
            <li>
              Buyer shall retain a certified public accounting firm to perform an annual audit of
              the Services’ data protection features and to provide a SOC 2 Type II report, pursuant
              to the standards of the American Institute of Certified Public Accountants (the
              “AICPA”). The most current report shall be due to Vender within 10 business days of
              the Effective Date and thereafter annually within 10 business days of Buyer’s receipt
              from the audit firm. If the AICPA revises its relevant reporting standards, Buyer
              shall provide the report that then most closely resembles a SOC 2 Type II report. In
              addition, Buyer shall annually conduct its own internal security audit and address
              security gaps in compliance with its security policies and procedures, including
              without limitation the DataSec Program.
            </li>
            <li>
              If requested by Vender, Buyer shall, on a quarterly basis: (A) permit security reviews
              (e.g., intrusion detection, firewalls, routers) by Vender on systems storing or
              processing Vender Data and on Buyer policies and procedures relating to the foregoing;
              and (B) permit unannounced inspection of any or all security processes and procedures
              during the Term, including without limitation penetration tests; provided Buyer is not
              required to permit any review or inspection that may compromise the security of
              Buyer’s other Venders or of their data.
            </li>
          </ol>
        </li>
        <li>
          <h4>
            <i>Data Breaches.</i>
          </h4>{' '}
          Buyer shall implement and maintain a program for managing unauthorized disclosure or
          exposure of Vender Data stored by or accessible through the Services (“Data Breaches”). In
          the event of a Data Breach, or in the event that Buyer suspects a Data Breach, Buyer shall
          (i) promptly notify Vender by telephone and (ii) cooperate with Vender and law enforcement
          agencies, where applicable, to investigate and resolve the Data Breach, including without
          limitation by providing reasonable assistance to Vender in notifying injured third
          parties. In addition, Buyer shall provide 1 year of credit monitoring service to any
          affected individual, unless the Data Breach resulted from Vender’s act or omission. Buyer
          shall give Vender prompt access to such records related to a Data Breach as Vender may
          reasonably request. The provisions of this Subsection 2(d) do not limit Vender’s other
          rights or remedies, if any, resulting from a Data Breach.
        </li>
      </ol>
      <br />
    </div>
  );
}

export default About;
