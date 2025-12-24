"use client";
import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Calendar,
  Mail,
  AlertTriangle,
} from "lucide-react";

const executorTermsData = {
  title: "Hexbox Executors Terms and Conditions",
  effectiveDate: "08 July 2025",
  lastUpdated: "08 July 2025",
  company: {
    name: "OTOCO MATIC LLC - hexbox - Series 126",
    website: "hexbox.money",
  },
  intro: `These Executors Terms and Conditions ("Terms") establish the legal framework between you ("Executor," "you," or "your") and OTOCO MATIC LLC - hexbox - Series 126 ("Hexbox","we," "us," or "our") for your use of the Hexbox crowdfunding platform ("Platform"). By using the Platform as an Executor, you agree to be bound by these Terms and to uphold the commitments detailed herein.`,
  definitions: [
    {
      term: "Executor",
      definition:
        "The individual or entity who creates and manages a fundraising campaign on Hexbox.",
    },
    {
      term: "Investor",
      definition:
        "Any individual or entity who contributes funds to a campaign.",
    },
    {
      term: "Platform",
      definition: "The Hexbox website, smart contracts, and related services.",
    },
    {
      term: "User",
      definition:
        "Any person accessing the Hexbox platform, including Executors, Investors, or general visitors.",
    },
    {
      term: "Escrow Smart Contract",
      definition:
        "The blockchain-based mechanism holding funds until specified conditions are met.",
    },
    {
      term: "Finalization",
      definition:
        "The formal process where campaign conditions are verified, and funds are released to the Executor.",
    },
    {
      term: "Funding Types",
      definition: "The available funding models on Hexbox.",
    },
    {
      term: "All or Nothing",
      definition:
        "Funds are only released if the campaign reaches its full fundraising target by the set deadline. This ensures the project has the minimum resources required to deliver promised outcomes, and no partial funding is disbursed if the goal is not met.",
    },
    {
      term: "Flexible Funding",
      definition:
        "Any amount raised, even if less than the original target, is transferred to the Executor. Executors using this model must scale project delivery proportionally to the funds received and maintain transparent communication with Investors about any adjustments.",
    },
    {
      term: "Limitless Funding",
      definition:
        "There is no predefined cap or fundraising target, and funds can be collected continuously over time. This model suits ongoing or evolving projects, requiring Executors to provide regular updates and maintain accountability as funds accumulate indefinitely.",
    },
    {
      term: "Ticket",
      definition:
        "A blockchain-based digital proof of contribution issued automatically to the Investor upon successful donation to a campaign. Tickets serve as verifiable records of participation, may provide access to campaign-related rights, and are used to enforce refund eligibility and finalization logic via smart contracts. Tickets do not represent ownership, equity, or financial instruments.",
    },
  ],

  articles: [
    {
      number: 2,
      title: "Goodwill Rules and Fair Trade",
      content:
        "2.1. Parties shall act in accordance with goodwill rules and fair-trade principles while fulfilling their obligations under this agreement.\n\n2.2. All agreements between the parties in connection with these Terms shall be based on good faith rules.",
    },
    {
      number: 3,
      title: "Scope of the Agreement",
      content:
        "These Terms apply to all Executors using the Hexbox Platform to raise funds, including project posting, campaign management, fund usage, and interactions with Investors and the Platform. Executors must review and explicitly accept these Terms before launching their campaigns, acknowledging that they are legally bound by the commitments and rules set forth here.",
    },
    {
      number: 4,
      title: "Eligibility",
      content:
        "4.1. **Age and Legal Capacity:** You must be at least 18 years old (or the legal age in your jurisdiction) and have the legal capacity to bind any entity you represent.\n\n4.2. **Information Accuracy:** Executors are responsible for providing accurate, current, and complete information, including identification, project details, and legal compliance declarations, and for keeping this information updated during their use of the Platform.",
    },
    {
      number: 5,
      title: "Responsibilities of the Executor",
      content:
        "5.1. The Executor hereby represents and warrants that all descriptions, representations, and disclosures related to their project provided through the Platform shall be truthful, detailed, and accurate, and acknowledges that any material misrepresentation constitutes a breach of these Terms.\n\n5.2. The Executor covenants to fulfill all promised deliverables to Investors upon the successful achievement of funding, and further agrees to utilize the raised funds exclusively for the specific purpose stated in the campaign, without diversion or misapplication.\n\n5.3. The Executor agrees to comply fully with all applicable local, national, and international laws, including but not limited to tax, financial, and consumer protection regulations, and acknowledges that Hexbox bears no responsibility for the Executor's legal obligations.\n\n5.4. The Executor undertakes to provide timely, transparent, and material updates to Investors throughout the lifecycle of the campaign, including updates regarding progress, delays, risks, and any material changes to the project scope or delivery.\n\n5.5. The Executor acknowledges and agrees that they are strictly prohibited from using the Platform to create, offer, or promote financial products, including but not limited to securities, derivatives, investment contracts, or any offering subject to regulation under applicable financial or securities laws; any such attempt shall constitute a material breach of these Terms and may result in immediate termination or legal action.",
      isImportant: true,
    },
    {
      number: 6,
      title: "Responsibilities of Hexbox",
      content:
        "6.1. Hexbox is responsible for providing the Platform infrastructure, including the website, smart contracts, technical tools, and the issuance of digital tickets (representing proof of contribution or participation), and NFTs that enable campaign creation and investor participation.\n\n6.2. Hexbox will make reasonable efforts to ensure the Platform operates reliably, including regular maintenance, security updates, and technical support.\n\n6.3. Hexbox reserves the right to monitor, review, suspend, or remove campaigns that violate these Terms or applicable laws.\n\n6.4. Hexbox does not guarantee the success, quality, legality, or delivery of any campaign and is not responsible for the actions or omissions of Executors.\n\n6.5. Hexbox is committed to ensuring that investors' refund rights are protected during active crowdfunding campaigns. While funds are held in escrow during the fundraising period, Hexbox provides mechanisms for eligible investors to request refunds in accordance with Platform rules before finalization. Hexbox will make reasonable efforts to safeguard investor interests and prevent unauthorized withdrawals or misuse of funds during the active fundraising phase.\n\n6.6. Hexbox provides a donation token for all campaigns automatically. This token serves as a digital certificate of contribution or participation and is issued to Investors upon successful donation. Executors acknowledge that the issuance of tokens is part of the Platform's standard offering and forms part of the recognition framework for contributors.",
    },
    {
      number: 7,
      title: "Fees and Payment",
      content:
        "7.1. Hexbox receives a standard commission rate of 2.5% from each donation, shown on the purchase page; this rate may vary in future.\n\n7.2. Blockchain gas fees are the responsibility of users and are not controlled by Hexbox; both Hexbox commissions and gas fees are deducted automatically through smart contracts.",
    },
    {
      number: 8,
      title: "Funding Types",
      content:
        "8.1. **All or Nothing:** Executors acknowledge and accept that under this model, funds shall be released only if the full target amount, as set at the time of campaign launch, is met. Executors are obligated to deliver the full project scope only if the funding goal is reached, and they expressly accept the terms and conditions governing this funding type.\n\n8.2. **Flexible Funding:** Executors acknowledge and accept that under this model, partial funds shall be released even if the full target is not met. Executors are obligated to deliver proportional outcomes based on the funds raised and expressly agree to comply with the rules governing this funding type.\n\n8.3. **Limitless Funding:** Executors acknowledge and accept that under this model, funds can be continuously collected without a predefined cap, and they are obligated to provide ongoing updates, maintain accountability, and adhere to the conditions governing this funding type.\n\n8.4. **Funding Type Selection:** Executors must select their funding model before launch, and this choice is binding.",
    },
    {
      number: 9,
      title: "Late Pledges and Additional Funding",
      content:
        "9.1. Late pledges after campaign closure are not permitted. All fundraising must be conducted solely through official Platform channels. Executors explicitly acknowledge and accept this restriction as part of the binding agreement when launching their campaigns.\n\n9.2. In case of breach, including the detection of illegal or unauthorized fundraising activities, Executors expressly acknowledge and agree that such violations make Hexbox unreliable as a trusted intermediary. Hexbox disclaims responsibility and liability for any losses, damages, or claims arising from illegal campaigns, and reserves the right to suspend or remove campaigns, notify regulatory authorities, and take appropriate actions to protect its platform and users.",
    },
    {
      number: 10,
      title: "Escrow and Disbursement",
      content:
        "10.1. Funds are held in escrow smart contracts, defined under Article 1 as blockchain-based mechanisms designed to manage and secure the raised amounts. Executors acknowledge and accept that these escrow contracts not only hold funds until successful campaign finalization but also automatically issue tickets, which serve as purchase records and proof of contribution. These tickets are purchased by Investors and, depending on applicable Platform rules, may be refundable prior to campaign finalization.\n\n10.2. Executors acknowledge that the release of funds is strictly subject to the fulfillment of campaign conditions and compliance with the selected funding model. Any attempt to circumvent or manipulate the escrow mechanisms is strictly prohibited and constitutes a material breach.\n\n10.3. Executors are not entitled to access or control escrowed funds prior to the smart contract's programmed release conditions being met, including finalization or proportional distribution rules under the chosen funding model.\n\n10.4. Executors understand that disbursement transactions may incur blockchain gas fees, which will be deducted from the total disbursed amount. Hexbox is not responsible for fluctuations in gas costs or delays caused by network congestion.\n\n10.5. Upon release of funds, Executors are solely responsible for their use and agree to apply the funds exclusively for the purposes detailed in the campaign. Misuse or misappropriation may result in legal action, loss of platform access, or notification to relevant authorities.\n\n10.6. Executors acknowledge that while Hexbox may disable or remove a campaign from the user interface for violations, the associated smart contract records on the blockchain are permanent and cannot be reversed or deleted. Executors remain fully accountable for any obligations or liabilities arising from the blockchain-logged transactions.\n\n10.7. Tracking of fund use after successful campaign finalization shall be made available to the public solely through the transparent information recorded and accessible on the blockchain via the relevant smart contract transactions. Executors acknowledge and agree that Hexbox does not provide separate accounting reports beyond what is transparently visible on-chain. Executors further acknowledge and accept that Hexbox conducts this tracking as part of its commitment to the public good, and Executors are required to comply by ensuring that all disclosures regarding the transfer and application of funds are accurate, truthful, and traceable, thereby upholding the integrity of the blockchain-based records.",
    },
    {
      number: 11,
      title: "Reporting Errors and Failures",
      content:
        "Executors must promptly report any bugs, errors, or failures discovered on the Platform, including within the website, smart contracts, or related systems, and are strictly prohibited from exploiting, manipulating, or benefiting from such issues in any way. Executors expressly acknowledge and agree that failure to report or any attempt to exploit detected vulnerabilities constitutes a material breach of these Terms and may lead to penalties, immediate suspension or removal from the Platform, legal action, and potential notification to regulatory authorities.",
    },
    {
      number: 12,
      title: "Force Majeure",
      content:
        '12.1. Neither party shall be held liable for failure to perform its direct contractual obligations under these Terms, or for delays in performance, when such failure or delay arises from events beyond its reasonable control, including but not limited to natural disasters, fires, explosions, civil wars, wars, uprisings, public disturbances, declarations of mobilization, strikes, lockouts, or epidemics ("Force Majeure"). The affected party shall promptly notify the other party in writing, specifying the nature of the Force Majeure event, its anticipated impact, and estimated duration, and shall use commercially reasonable efforts to mitigate the effects and resume performance as soon as possible.\n\n12.2. In the event that a Force Majeure condition affects the performance of obligations or payment of charges under these Terms, any related sub-agreements or attachments shall be temporarily suspended for the duration of the Force Majeure event. Once the event has ended, the suspended agreements shall resume in full force. If, due to post-event conditions (including but not limited to changes in market prices or economic circumstances), adjustments to the affected terms are reasonably necessary, the parties shall engage in good-faith negotiations to amend, revise, or restate the relevant provisions to reflect the new conditions and ensure fairness and enforceability under the law.',
    },
    {
      number: 13,
      title: "Refunds and Cancellations",
      content:
        "13.1. Refunds shall be governed strictly by the Platform rules. Executors expressly acknowledge and accept that Hexbox provides clear, predefined mechanisms and terms for processing refunds during the active fundraising phase, including conditions under which investors may request and receive refunds prior to campaign finalization. Executors further acknowledge and agree that once a campaign has reached finalization, Hexbox bears no responsibility or liability for post-finalization refunds, and any such matters, claims, or disputes shall be solely and exclusively between the Executor and the Investors.\n\n13.2. Executors accept and confirm their obligation to comply fully with all refund policies set by the Platform, including but not limited to timely and accurate communication with Investors regarding refund conditions, limitations, timelines, and processes. Executors shall act in good faith to address any refund-related inquiries or concerns in accordance with the agreed terms.",
    },
    {
      number: 14,
      title: "Intellectual Property",
      content:
        "14.1. Executors retain ownership of their intellectual and industrial property rights, including all project-related content, materials, brand elements, logos, designs, and similar assets. However, no provision of these Terms shall be interpreted as granting the Executor or Hexbox any license, transfer, or right to use the other party's intellectual or industrial property without prior written consent.\n\n14.2. Executors grant Hexbox a non-exclusive, worldwide, royalty-free license solely for the use of their submitted content for Platform operations, marketing, promotion, and public display related to their campaigns. Executors acknowledge and accept that Hexbox may share, reference, or display these materials as part of the Platform's business operations.\n\n14.3. Neither party may use, refer to, or distribute the other party's brand, logo, design, or intellectual and industrial property rights in any medium, including social media, advertising, or third-party platforms, without the prior express written consent of the other party, except where necessary for Platform operations.\n\n14.4. Executors acknowledge that any reports, materials, or documents generated by Hexbox for Platform operations remain the property of Hexbox and may not be shared with third parties without Hexbox's prior written consent. All such materials must be kept confidential, and any electronic copies must be deleted after use to prevent unauthorized reproduction.",
    },
    {
      number: 15,
      title: "Limitation of Liability",
      content:
        '15.1. Hexbox provides the Platform strictly on an "as is" and "as available" basis and expressly disclaims all warranties, whether express, implied, or statutory, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. Executors acknowledge that they are solely responsible for determining whether the Platform suits their intended use and understand that Hexbox offers no guarantees regarding performance or results.\n\n15.2. Executors expressly acknowledge and accept that Hexbox shall not be liable for any project outcomes, including but not limited to delays, failures, misrepresentations, errors, or actions or omissions of Executors or third parties involved in campaigns. Executors accept that they bear full responsibility for the success, delivery, and management of their campaigns.\n\n15.3. Executors further acknowledge and accept that Hexbox shall not be liable for any indirect, incidental, consequential, special, or punitive damages arising from or related to the use or inability to use the Platform, regardless of the cause or theory of liability. Executors understand that Hexbox\'s role is limited to providing technical infrastructure and that Hexbox assumes no operational, fiduciary, or managerial responsibility over Executor activities.',
    },
    {
      number: 16,
      title: "Indemnification",
      content:
        "16.1. Executors hereby agree to fully indemnify, defend, and hold harmless Hexbox, its affiliates, officers, directors, employees, and agents from and against any and all claims, liabilities, damages, losses, costs, or expenses (including reasonable legal fees) arising out of or related to the Executor's violations of these Terms, misuse of the Platform, breach of legal obligations, or infringement of the rights of third parties. This includes but is not limited to claims arising from misrepresentations, unlawful fundraising activities, intellectual property infringements, or any other misconduct by the Executor that causes harm or exposes Hexbox to risk or liability.\n\n16.2. This indemnification obligation applies broadly to cover direct claims, third-party claims, regulatory investigations, penalties, and any legal or administrative proceedings arising from the Executor's actions or omissions. Executors acknowledge and agree that Hexbox shall have the right to select legal counsel, participate in the defense, and approve any settlement related to such claims, at the Executor's expense.",
      isImportant: true,
    },
    {
      number: 17,
      title: "Dispute Resolution",
      content:
        "17.1. Any dispute, controversy, or claim arising out of or relating to these Terms, including their interpretation, breach, termination, or validity, shall be finally resolved by binding arbitration under the Rules of Arbitration of the International Chamber of Commerce (ICC).\n\n17.2. The number of arbitrators shall be one. The location of arbitration shall be determined by mutual agreement of all parties attending the arbitration proceedings. If the parties are unable to reach consensus, the seat shall be designated according to the ICC rules.\n\n17.3. The governing law of these Terms, including the arbitration clause, shall be the laws of the United States. Executors acknowledge and accept that this dispute resolution mechanism is exclusive and that no party shall resort to any court of law, except for the purposes of enforcing an arbitral award or seeking interim or conservatory measures as permitted by applicable arbitration rules.",
    },
    {
      number: 18,
      title: "Blockchain Irreversibility Notice",
      content:
        "18.1. Executors acknowledge and accept that even if campaigns are removed from the Hexbox interface, the underlying smart contracts and blockchain records remain immutable, public, and permanently recorded on the blockchain. These records are beyond Hexbox's technical control and cannot be altered, reversed, or deleted.\n\n18.2. Executors remain fully liable for any obligations, liabilities, or consequences arising from the blockchain-logged transactions, regardless of whether the campaign is visible, suspended, or deactivated on the Hexbox interface. Executors are solely responsible for ensuring that all blockchain actions comply with applicable laws and Platform rules.\n\n18.3. Hexbox expressly disclaims any responsibility or liability for modifying, correcting, or reversing blockchain transactions. Executors expressly acknowledge that they bear sole accountability for all blockchain-recorded activities, including ensuring compliance, accuracy, and the lawful use of the Platform.",
    },
    {
      number: 19,
      title: "Jurisdiction-Specific Compliance",
      content:
        "19.1. Executors acknowledge that additional legal requirements may apply in their jurisdiction, including but not limited to the European Union's GDPR, the United Kingdom's FCA regulations, and the United States Securities and Exchange Commission (SEC) rules.\n\n19.2. Executors must certify compliance with these jurisdiction-specific requirements when launching campaigns and agree to provide evidence of compliance upon request.",
    },
    {
      number: 20,
      title: "Post-Finalization Dispute Limitation",
      content:
        "20.1. Executors acknowledge that once campaign funds are finalized and disbursed, any disputes, claims, or refund demands from Investors are solely between the Executor and the Investors.\n\n20.2. Hexbox disclaims liability for post-finalization matters and recommends Executors establish their own customer support and resolution frameworks to address investor concerns in good faith.",
    },
    {
      number: 21,
      title: "Amendments Fairness and Notice",
      content:
        "21.1. Hexbox commits to providing reasonable prior notice to Executors for any material amendments to these Terms.\n\n21.2. Where legally required, Executors will have an opportunity to acknowledge, consent, or opt out of material amendments. Continued use of the Platform after the notice period constitutes acceptance.",
    },
    {
      number: 22,
      title: "Governing Law and Sanctioned Countries Disclosure",
      content:
        "22.1. Executors acknowledge that the governing law of these Terms is the law of the United States, as specified in the Dispute Resolution article.\n\n22.2. Executors confirm that they are not located in or operating from countries subject to international sanctions or trade restrictions, including but not limited to those listed by the U.S. Treasury Office of Foreign Assets Control (OFAC), the European Union, or the United Nations.\n\n22.3. Executors further acknowledge that Hexbox reserves the right to suspend, block, or terminate any campaign or account found to be in violation of these international sanction rules.",
    },
  ],
};

const investorTermsData = {
  title: "Hexbox Investor Terms of Use",
  effectiveDate: "08 July 2025",
  lastUpdated: "08 July 2025",
  company: {
    name: "OTOCO MATIC LLC - hexbox - Series 126",
    website: "hexbox.money",
  },
  intro: `This Article sets forth the terms of agreement between you, the Investor, and Hexbox. By accessing or using Hexbox, including visiting the website hexbox.money or participating in any campaign, you agree to enter into a binding legal agreement with Hexbox under these Terms of Use. This agreement incorporates our Privacy Policy and Cookie Policy by reference. If you do not agree to all the terms, you may not use or access Hexbox or its services.`,
  definitions: [
    {
      term: "Investor",
      definition:
        "An individual or entity contributing digital assets to a campaign.",
    },
    {
      term: "Executor",
      definition: "An individual or entity launching a campaign.",
    },
    {
      term: "Campaign",
      definition: "A public fundraising initiative hosted on Hexbox.",
    },
    {
      term: "Token",
      definition:
        "A token is a blockchain-based digital certificate issued upon contribution. It functions as a record of participation and access pass to campaign-specific rights, but does not represent a financial product.",
    },
    {
      term: "Finalization",
      definition:
        "A blockchain-based event that releases campaign funds to the Executor and revokes refund eligibility.",
    },
    {
      term: "Smart Contract",
      definition:
        "Self-executing blockchain code governing transactions, token issuance, and refund logic.",
    },
    {
      term: "Escrow Account",
      definition:
        "A smart contract-controlled account that securely holds contributed funds during the campaign period. This account acts as a neutral digital escrow and ensures that funds are only released to the Executor upon Finalization or returned to the Investor if a refund is requested within the Refund Window.",
    },
    {
      term: "Wallet",
      definition:
        "A blockchain address under the Investor's control where tokens and digital assets are held.",
    },
    {
      term: "Refund Window",
      definition:
        "The period before Finalization during which a refund can be requested.",
    },
    {
      term: "Reward",
      definition:
        "Any benefit, product, service, or priority access offered in return for contribution, subject to campaign-specific terms.",
    },
    {
      term: "User",
      definition:
        "Any individual accessing Hexbox, whether logged in or anonymous.",
    },
  ],
  articles: [
    {
      number: 1,
      title: "Agreement to Terms",
      content:
        "This Article sets forth the terms of agreement between you, the Investor, and Hexbox. By accessing or using Hexbox, including visiting the website hexbox.money or participating in any campaign, you agree to enter into a binding legal agreement with Hexbox under these Terms of Use. This agreement incorporates our Privacy Policy and Cookie Policy by reference. If you do not agree to all the terms, you may not use or access Hexbox or its services.",
    },
    {
      number: 2,
      title: "Purpose and Scope",
      content:
        "Hexbox is a blockchain-based crowdfunding platform designed to facilitate presale access and early-stage support for projects through smart contract infrastructure. In addition to campaign contributions, Hexbox also enables the issuance of digital tickets in the form of tokens that may serve as vouchers or priority access to future products and services offered by Executors. These digital tickets are not financial products and are not intended to represent ownership, debt, or equity. These Terms govern all contributions made to campaigns, rights attached to token Receipts, refund mechanisms, and responsibilities of Investors.",
    },
    {
      number: 3,
      title: "Eligibility and Registration",
      content:
        "To use Hexbox, you must be at least 18 years of age and have the legal capacity to form binding contracts. Your jurisdiction must not prohibit participation in blockchain or crowdfunding platforms. We may require identity verification under KYC/AML regulations.",
    },
    {
      number: 4,
      title: "Investment Mechanism",
      content:
        "By contributing to a campaign on Hexbox, you enter into a direct, on-chain arrangement with the Executor. All contributions are executed via smart contracts, which manage the logic of fund custody, finalization, and refund conditions. Upon successful contribution, a blockchain-based token is issued to your designated wallet. This token functions as a non-custodial proof of participation and must be retained to access any campaign-related rights, such as initiating a refund during the Refund Window or claiming products, services, or other forms of campaign utility as described by the Executor.",
    },
    {
      number: 5,
      title: "Refund and Withdrawal Terms",
      content:
        "Refunds are available only during the Refund Window. Finalization, which may be automatic or triggered by the Executor, releases the funds and burns the token. Hexbox does not guarantee refunds after finalization. If you lose access to your wallet before claiming a refund, your rights may be permanently lost.",
    },
    {
      number: 6,
      title: "Investor Responsibilities and Risk Disclosure",
      content:
        "As an Investor, it is your responsibility to take reasonable precautions, which include conducting thorough due diligence before investing in a campaign, securing your wallet credentials and the token Receipt issued to you, and complying with all tax and legal obligations in your jurisdiction. Hexbox does not take responsibility for the claims made by a campaign nor responsibility for the performance of a campaign.",
    },
    {
      number: 7,
      title: "Fees and Taxes",
      content:
        "Fees applicable to your transaction will be clearly presented and must be acknowledged prior to confirming any contribution. These may include service charges imposed by Hexbox, smart contract execution fees, and third-party transaction processing costs. Additionally, you are solely responsible for all blockchain gas fees associated with initiating, interacting with, or reversing transactions on the network. You are also responsible for reporting and paying any local, national, or international taxes that may arise as a result of your activity on the platform. Hexbox does not provide tax advice or act as a withholding agent.",
    },
    {
      number: 8,
      title: "Platform Role and Disclaimers",
      content:
        "Hexbox acts solely as a neutral infrastructure and technology provider. We do not act as a broker, dealer, investment advisor, financial institution, custodian, or intermediary in any transaction. We do not originate, structure, endorse, or promote specific campaigns, nor do we provide financial, legal, or tax advice. Our role is strictly limited to providing smart contract tools and platform access that enable Executors and Investors to interact directly with one another. Hexbox does not mediate disputes between parties, validate the legitimacy of campaigns, or guarantee the outcome, delivery, or success of any project. All risk and decision-making rest entirely with the Users.",
    },
    {
      number: 9,
      title: "Prohibited Activities",
      content:
        "You may not engage in any conduct that violates these Terms or applicable laws. This includes, but is not limited to, fraudulent or deceptive behavior, misrepresentation of your identity or intentions, or any unlawful activity. You are prohibited from interfering with the technical operation of Hexbox, including tampering with smart contracts or attempting to circumvent security protocols. Additionally, you must not use automated bots, scripts, or any manipulative tools to influence campaign mechanics or outcomes.",
    },
    {
      number: 10,
      title: "Suspension and Termination",
      content:
        "Hexbox reserves the right to suspend or permanently terminate your access to the platform, services, and any related systems at any time if you are found to have violated these Terms, attempted to circumvent platform operations, engaged in fraudulent behavior, or otherwise posed a legal or reputational risk to Hexbox or its users. Such action may be taken without prior notice and at Hexbox's sole discretion. In such events, any rights attached to tokens held by the affected party—including access to refunds, rewards, or campaign-related benefits—may be invalidated without compensation. This includes cases where an account is associated with malicious activity, regulatory non-compliance, abuse of smart contracts, impersonation, or any other conduct detrimental to the integrity or lawful operation of the platform.",
    },
    {
      number: 11,
      title: "Intellectual Property",
      content:
        "All intellectual property, including but not limited to the text, graphics, code, features, design elements, trademarks, and any other materials displayed or made available through the Hexbox platform, are the exclusive property of Hexbox or its licensors. You are strictly prohibited from copying, distributing, modifying, reverse engineering, publicly displaying, or otherwise exploiting any part of the platform or its content for commercial or non-commercial purposes without the express prior written consent of Hexbox. Unauthorized use may constitute a violation of intellectual property laws and could result in legal action.",
    },
    {
      number: 12,
      title: "Limitation of Liability",
      content:
        "Hexbox disclaims all warranties. We are not liable for indirect or consequential losses, including but not limited to lost funds, campaign failures, product failures, delays, or service interruptions. Additionally, Hexbox shall not be held liable for any issues resulting from consumer error or misconduct, including but not limited to: failure to maintain control over one's wallet or private keys; transferring funds to an incorrect address; losing or deleting the token Receipt; misunderstanding campaign terms; failing to claim a refund within the Refund Window; reliance on external third-party tools or services; or misinterpreting reward eligibility or delivery timelines.",
    },
    {
      number: 13,
      title: "Dispute Resolution",
      content:
        "Any dispute, controversy, or claim arising out of or relating to this Agreement, including the breach, termination, or validity thereof, shall be finally resolved by arbitration under the Rules of Arbitration of the International Chamber of Commerce (ICC). The number of arbitrators shall be one. The seat of arbitration shall be voted by all parties. The language of arbitration shall be English. This Agreement shall be governed exclusively by the laws of the United States of America. All disputes shall be resolved solely through arbitration; no party shall have recourse to any court of law for any reason related to this Agreement, except to enforce an arbitral award.",
    },
    {
      number: 14,
      title: "Amendments",
      content:
        "We may modify these Terms at any time. Updates will be published on the platform. Continued use signifies acceptance.",
    },
    {
      number: 15,
      title: "Contact and Notices",
      content:
        "Please direct inquiries to our support team through the platform or via the channels listed in our Privacy Policy.",
    },
  ],
};

const TermsAndConditionsContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"executor" | "investor">(
    "executor"
  );
  const [expandedDefinitions, setExpandedDefinitions] = useState(false);
  const [expandedArticles, setExpandedArticles] = useState<number[]>([]);

  const termsData =
    activeTab === "executor" ? executorTermsData : investorTermsData;

  const toggleDefinitions = () => {
    setExpandedDefinitions(!expandedDefinitions);
  };

  const toggleArticle = (articleNumber: number) => {
    setExpandedArticles((prev) =>
      prev.includes(articleNumber)
        ? prev.filter((num) => num !== articleNumber)
        : [...prev, articleNumber]
    );
  };

  const formatContent = (content: string) => {
    return content.split("\n").map((paragraph, index) => (
      <p key={index} className="mb-4 last:mb-0">
        {paragraph.split("**").map((text, i) =>
          i % 2 === 1 ? (
            <strong key={i} className="font-semibold">
              {text}
            </strong>
          ) : (
            text
          )
        )}
      </p>
    ));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-dark-surface">
      <div className="mb-8 pb-6 border-b border-gray-200 dark:border-dark-border">
        {/* Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 dark:bg-dark-surfaceHover p-1 rounded-lg inline-flex">
            <button
              onClick={() => {
                setActiveTab("executor");
                setExpandedDefinitions(false);
                setExpandedArticles([]);
              }}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "executor"
                  ? "bg-white dark:bg-dark-surface text-blueColor dark:text-white shadow-sm"
                  : "text-gray-600 dark:text-dark-textMuted hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              Executor Terms
            </button>
            <button
              onClick={() => {
                setActiveTab("investor");
                setExpandedDefinitions(false);
                setExpandedArticles([]);
              }}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "investor"
                  ? "bg-white dark:bg-dark-surface text-blueColor dark:text-white shadow-sm"
                  : "text-gray-600 dark:text-dark-textMuted hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              Investor Terms
            </button>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {termsData.title}
        </h1>

        <div className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-dark-textMuted">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>Effective: {termsData.effectiveDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>Platform: {termsData.company.website}</span>
          </div>
        </div>
      </div>

      <div className="mb-8 p-4 bg-amber-50 dark:bg-dark-surfaceHover border border-amber-200 dark:border-dark-border rounded-lg">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-orangeColor mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-orangeColor dark:text-orangeColor mb-2">
              Important Notice
            </h3>
            <p className="text-orangeColorDull/70 dark:text-dark-textMuted text-sm">
              By investing via Hexbox, you confirm that you have read,
              understood, and agreed to these Terms. This is a legally binding
              agreement that incorporates blockchain technology and carries
              specific risks.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-8 prose max-w-none text-gray-700 dark:text-dark-textMuted">
        {formatContent(termsData.intro)}
      </div>

      <div className="mb-8">
        <button
          onClick={toggleDefinitions}
          className="flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-dark-text mb-4"
        >
          {expandedDefinitions ? (
            <ChevronDown className="w-5 h-5 text-gray-500 dark:text-dark-textMuted" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-500 dark:text-dark-textMuted" />
          )}
          Definitions
        </button>

        {expandedDefinitions && (
          <div className="bg-gray-50 dark:bg-dark-surfaceHover rounded-lg p-6">
            <div className="grid gap-4">
              {termsData.definitions.map((def, index) => (
                <div key={index} className="border-l-4 border-blueColor pl-4">
                  <dt className="font-semibold text-gray-900 dark:text-white mb-1">
                    {def.term}
                  </dt>
                  <dd className="text-gray-700 dark:text-dark-textMuted">
                    {def.definition}
                  </dd>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="space-y-6">
        {termsData.articles.map((article) => (
          <div
            key={article.number}
            className="border rounded-lg border-gray-200 dark:border-dark-border"
          >
            <button
              onClick={() => toggleArticle(article.number)}
              className="w-full flex items-center justify-between p-4 text-left transition-colors hover:bg-gray-50 dark:hover:bg-dark-surfaceHover"
            >
              <div className="flex items-center gap-3">
                {expandedArticles.includes(article.number) ? (
                  <ChevronDown className="w-5 h-5 text-gray-500 dark:text-dark-textMuted" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-500 dark:text-dark-textMuted" />
                )}
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  Article {article.number} – {article.title}
                </h2>
              </div>
            </button>

            {expandedArticles.includes(article.number) && (
              <div className="px-4 pb-4">
                <div className="prose max-w-none pl-8 text-gray-700 dark:text-dark-textMuted">
                  {formatContent(article.content)}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-dark-border">
        <div className="bg-blue-50 dark:bg-dark-surfaceHover border border-lightBlueColor dark:border-dark-border rounded-lg p-6">
          <h3 className="font-semibold text-blue-900 dark:text-white mb-3">
            Agreement Confirmation
          </h3>
          <p className="text-blueColor dark:text-blueColor mb-4">
            By investing via Hexbox, you confirm that you have read, understood,
            and agreed to these Terms.
          </p>
          <div className="text-sm text-blueColor dark:text-dark-textMuted">
            <p>
              <strong>Last updated:</strong> {termsData.lastUpdated}
            </p>
            <p>
              <strong>Contact:</strong> Please direct inquiries to our support
              team through the platform or via the channels listed in our
              Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsContent;

