import React from "react";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Head from "next/head";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - Gusto Professionals</title>
        <meta
          name="description"
          content="Learn how Gusto Professionals collects, uses, and protects your personal data in compliance with UAE, UK, and Nigerian privacy laws."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="border-b border-gray-300 w-full bg-gray-50 text-[#1e1e1e]">
        <MaxWidthWrapper className="py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#04306e] mb-6">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-600 mb-8">
            Last Updated: April 20, 2025
          </p>

          <section className="space-y-8">
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-semibold text-[#04306e] mb-4">
                1. Who We Are
              </h2>
              <p className="text-base leading-relaxed">
                Gusto Professionals is a sole proprietorship operating Health,
                Safety, and Environment (HSE) training services, including
                in-person training and certifications. Our details are:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Business Name</strong>: Gusto Professionals
                </li>
                <li>
                  <strong>Address</strong>: 712, Al Fahad Plaza Building,
                  Opposite KFC, Al Rigga Road, Al Rigga, Dubai, United Arab
                  Emirates
                </li>
                <li>
                  <strong>Email</strong>:{" "}
                  <a
                    href="mailto:info.gustoprofessionals@gmail.com"
                    className="text-[#04306e] hover:underline"
                    aria-label="Email Gusto Professionals"
                  >
                    info.gustoprofessionals@gmail.com
                  </a>
                </li>
                <li>
                  <strong>Phone</strong>: +44 7448 504110 (UK), +971 52 948 9070
                  (UAE)
                </li>
              </ul>
              <p className="mt-4">
                We are the data controller responsible for your personal data
                under applicable privacy laws, including the UAE Federal
                Decree-Law No. 45/2021, GDPR (for UK users), and NDPR (for
                Nigerian users).
              </p>
            </div>

            {/* Scope */}
            <div>
              <h2 className="text-2xl font-semibold text-[#04306e] mb-4">
                2. Scope of This Policy
              </h2>
              <p className="text-base leading-relaxed">
                This Privacy Policy applies to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Our website: www.gustoprofessionals.com</li>
                <li>
                  Our HSE training services, including in-person training and
                  certifications
                </li>
                <li>
                  All interactions where we collect personal data, such as
                  through contact forms
                </li>
              </ul>
              <p className="mt-4">
                This policy does not apply to third-party websites or services
                linked from our website, which have their own privacy policies.
              </p>
            </div>

            {/* Data Collection */}
            <div>
              <h2 className="text-2xl font-semibold text-[#04306e] mb-4">
                3. Personal Data We Collect
              </h2>
              <p className="text-base leading-relaxed">
                We collect personal data to provide our HSE training services
                and certifications. The types of data we collect depend on how
                you interact with us.
              </p>
              <h3 className="text-xl font-medium mt-4 mb-2">
                3.1 Data You Provide
              </h3>
              <p>
                We collect the following personal data directly from you through
                contact forms on our website:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Name</strong> (Required): To identify you and
                  personalize your training experience.
                </li>
                <li>
                  <strong>Email Address</strong> (Required): To communicate with
                  you about training courses, certifications, and inquiries.
                </li>
                <li>
                  <strong>Phone Number</strong> (Optional): To contact you for
                  training-related purposes, if provided.
                </li>
              </ul>
              <h3 className="text-xl font-medium mt-4 mb-2">
                3.2 Data Collected Automatically
              </h3>
              <p>
                We use cookies and similar technologies to collect data
                automatically when you visit our website:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Technical Data</strong>: IP address, browser type,
                  device information, and pages visited.
                </li>
                <li>
                  <strong>Usage Data</strong>: Time spent on the website,
                  clicks, and interactions with content.
                </li>
                <li>
                  <strong>Marketing Cookies</strong>: Data to deliver
                  personalized advertisements and track ad performance.
                </li>
              </ul>
              <h3 className="text-xl font-medium mt-4 mb-2">
                3.3 Data from Other Sources
              </h3>
              <p>
                We do not collect personal data from third parties, such as
                employers or social media platforms, unless explicitly provided
                by you through our contact forms (e.g., employer details in a
                business inquiry).
              </p>
            </div>

            {/* Data Collection Methods */}
            <div>
              <h2 className="text-2xl font-semibold text-[#04306e] mb-4">
                4. How We Collect Your Data
              </h2>
              <p className="text-base leading-relaxed">
                We collect personal data through:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Contact Forms</strong>: When you submit inquiries,
                  register for training, or request certifications.
                </li>
                <li>
                  <strong>Cookies and Tracking Technologies</strong>:
                  Automatically via marketing cookies, subject to your consent
                  through our cookie banner.
                </li>
              </ul>
            </div>

            {/* Purposes and Legal Basis */}
            <div>
              <h2 className="text-2xl font-semibold text-[#04306e] mb-4">
                5. Purposes and Legal Basis for Using Your Data
              </h2>
              <p className="text-base leading-relaxed">
                We use your personal data for the following purposes, with the
                corresponding legal basis under applicable privacy laws:
              </p>
              <table className="w-full mt-4 border border-gray-300">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-300 p-2 text-left">
                      Purpose
                    </th>
                    <th className="border border-gray-300 p-2 text-left">
                      Data Used
                    </th>
                    <th className="border border-gray-300 p-2 text-left">
                      Legal Basis
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">
                      To provide HSE training courses and certifications
                    </td>
                    <td className="border border-gray-300 p-2">
                      Name, email, phone (if provided)
                    </td>
                    <td className="border border-gray-300 p-2">
                      Contract (to fulfill our agreement to deliver training
                      services)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">
                      To respond to your inquiries
                    </td>
                    <td className="border border-gray-300 p-2">
                      Name, email, phone (if provided)
                    </td>
                    <td className="border border-gray-300 p-2">
                      Legitimate interest (to address your requests and provide
                      customer support)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">
                      To send marketing communications (e.g., course promotions)
                    </td>
                    <td className="border border-gray-300 p-2">Email</td>
                    <td className="border border-gray-300 p-2">
                      Consent (obtained via opt-in, where required)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">
                      To deliver personalized advertisements
                    </td>
                    <td className="border border-gray-300 p-2">
                      Technical and usage data (via cookies)
                    </td>
                    <td className="border border-gray-300 p-2">
                      Consent (via cookie banner for marketing cookies)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">
                      To improve our website and services
                    </td>
                    <td className="border border-gray-300 p-2">
                      Technical and usage data
                    </td>
                    <td className="border border-gray-300 p-2">
                      Legitimate interest (to enhance user experience and
                      functionality)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">
                      To comply with legal obligations
                    </td>
                    <td className="border border-gray-300 p-2">
                      Name, email, certification records
                    </td>
                    <td className="border border-gray-300 p-2">
                      Legal obligation (e.g., maintaining HSE certification
                      records)
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-4">
                We do not use your data for purposes beyond those listed, unless
                required by law or with your explicit consent.
              </p>
            </div>

            {/* Cookies and Tracking */}
            <div>
              <h2 className="text-2xl font-semibold text-[#04306e] mb-4">
                6. Cookies and Tracking Technologies
              </h2>
              <p className="text-base leading-relaxed">
                We use cookies to enhance your experience and deliver
                personalized marketing content.
              </p>
              <h3 className="text-xl font-medium mt-4 mb-2">
                6.1 Types of Cookies
              </h3>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Essential Cookies</strong>: Necessary for website
                  functionality (e.g., maintaining your session).
                </li>
                <li>
                  <strong>Marketing Cookies</strong>: Used to deliver relevant
                  advertisements and track ad performance.
                </li>
              </ul>
              <h3 className="text-xl font-medium mt-4 mb-2">
                6.2 Cookie Consent
              </h3>
              <p>
                We use a cookie consent banner to obtain your permission for
                non-essential cookies (marketing cookies). You can:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Accept all cookies.</li>
                <li>Reject non-essential cookies.</li>
                <li>Customize your preferences.</li>
              </ul>
              <p className="mt-4">
                You can manage your cookie settings at any time through the
                cookie banner or your browser settings. Note that disabling
                cookies may affect website functionality.
              </p>
              <h3 className="text-xl font-medium mt-4 mb-2">
                6.3 Third-Party Cookies
              </h3>
              <p>
                Our marketing cookies may be set by third-party advertising
                platforms (e.g., Google Ads). These third parties may collect
                data about your browsing behavior to serve targeted ads. We
                ensure these partners comply with applicable privacy laws.
              </p>
            </div>

            {/* Data Sharing */}
            <div>
              <h2 className="text-2xl font-semibold text-[#04306e] mb-4">
                7. Data Sharing
              </h2>
              <p className="text-base leading-relaxed">
                We do not share your personal data with third parties, except in
                the following limited circumstances:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Legal Obligations</strong>: If required by law,
                  regulation, or court order (e.g., to comply with HSE
                  certification audits).
                </li>
                <li>
                  <strong>Service Providers</strong>: We use trusted service
                  providers (e.g., email providers) to process data on our
                  behalf, but your data is not shared externally. It is securely
                  transferred to our company email inbox (
                  <a
                    href="mailto:info.gustoprofessionals@gmail.com"
                    className="text-[#04306e] hover:underline"
                  >
                    info.gustoprofessionals@gmail.com
                  </a>
                  ).
                </li>
                <li>
                  <strong>Business Transfers</strong>: In the event of a merger,
                  acquisition, or sale of assets, your data may be transferred
                  to the new entity, with notice to you and in compliance with
                  applicable laws.
                </li>
              </ul>
              <p className="mt-4">
                We do not sell, rent, or trade your personal data.
              </p>
            </div>

            {/* International Transfers */}
            <div>
              <h2 className="text-2xl font-semibold text-[#04306e] mb-4">
                8. International Data Transfers
              </h2>
              <p className="text-base leading-relaxed">
                As a UAE-based business targeting users in the UAE, UK, and
                Nigeria, your data is processed primarily in the UAE. If we
                transfer data outside the UAE (e.g., to UK or Nigerian servers
                for email processing), we ensure appropriate safeguards, such
                as:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Standard Contractual Clauses (SCCs)</strong>: For
                  transfers to the UK under GDPR.
                </li>
                <li>
                  <strong>NDPR Compliance</strong>: For Nigerian users, ensuring
                  adequate protection as required by the Nigeria Data Protection
                  Regulation.
                </li>
              </ul>
              <p className="mt-4">
                We take steps to ensure your data remains protected regardless
                of where it is processed.
              </p>
            </div>

            {/* Storage and Retention */}
            <div>
              <h2 className="text-2xl font-semibold text-[#04306e] mb-4">
                9. Data Storage and Retention
              </h2>
              <h3 className="text-xl font-medium mt-4 mb-2">9.1 Storage</h3>
              <p>
                Your personal data collected via contact forms is not stored on
                our website or servers. Instead, it is securely transferred to
                our company email inbox (
                <a
                  href="mailto:info.gustoprofessionals@gmail.com"
                  className="text-[#04306e] hover:underline"
                >
                  info.gustoprofessionals@gmail.com
                </a>
                ) using encrypted communication channels.
              </p>
              <h3 className="text-xl font-medium mt-4 mb-2">9.2 Retention</h3>
              <p>
                We retain your personal data only as long as necessary for the
                purposes outlined:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Contact Form Data</strong>: Retained in our email
                  inbox until the inquiry or training service is resolved,
                  unless required for certification records.
                </li>
                <li>
                  <strong>Certification Records</strong>: Retained for 7 years
                  to comply with HSE regulatory requirements, unless you request
                  deletion (where permitted by law).
                </li>
                <li>
                  <strong>Marketing Data</strong>: Retained until you withdraw
                  consent or opt out.
                </li>
                <li>
                  <strong>Technical Data (Cookies)</strong>: Retained as
                  specified in our cookie settings (typically up to 24 months
                  for marketing cookies).
                </li>
              </ul>
              <p className="mt-4">
                After the retention period, we securely delete your data or
                anonymize it for statistical purposes.
              </p>
            </div>

            {/* Security */}
            <div>
              <h2 className="text-2xl font-semibold text-[#04306e] mb-4">
                10. Data Security
              </h2>
              <p className="text-base leading-relaxed">
                We implement robust security measures to protect your personal
                data:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Encryption</strong>: We use SSL/TLS encryption to
                  secure data transmission between your browser and our website.
                </li>
                <li>
                  <strong>Access Controls</strong>: Only authorized personnel
                  have access to our email inbox containing your data.
                </li>
                <li>
                  <strong>Secure Email Processing</strong>: Data sent to our
                  email inbox is handled securely, with regular monitoring for
                  unauthorized access.
                </li>
              </ul>
              <p className="mt-4">
                Despite our efforts, no system is completely secure. In the
                unlikely event of a data breach, we will notify affected users
                and relevant authorities within 72 hours, as required by GDPR,
                NDPR, or UAE law.
              </p>
            </div>

            {/* User Rights */}
            <div>
              <h2 className="text-2xl font-semibold text-[#04306e] mb-4">
                11. Your Data Protection Rights
              </h2>
              <p className="text-base leading-relaxed">
                Depending on your location (UAE, UK, Nigeria), you have the
                following rights regarding your personal data:
              </p>
              <h3 className="text-xl font-medium mt-4 mb-2">
                11.1 General Rights
              </h3>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Access</strong>: Request a copy of your personal data.
                </li>
                <li>
                  <strong>Rectification</strong>: Correct inaccurate or
                  incomplete data.
                </li>
                <li>
                  <strong>Deletion</strong>: Request deletion of your data
                  (subject to legal obligations, e.g., certification records).
                </li>
                <li>
                  <strong>Restriction</strong>: Limit how we process your data
                  in certain circumstances.
                </li>
                <li>
                  <strong>Objection</strong>: Object to processing for marketing
                  or legitimate interest purposes.
                </li>
                <li>
                  <strong>Portability</strong>: Receive your data in a
                  structured, machine-readable format.
                </li>
              </ul>
              <h3 className="text-xl font-medium mt-4 mb-2">
                11.2 Additional Rights
              </h3>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>UK Users (GDPR)</strong>: Right to object to automated
                  decision-making (not applicable, as we do not use automated
                  decisions).
                </li>
                <li>
                  <strong>Nigerian Users (NDPR)</strong>: Right to be informed
                  of data processing and to withdraw consent.
                </li>
                <li>
                  <strong>UAE Users (Federal Decree-Law No. 45/2021)</strong>:
                  Right to stop processing and lodge complaints.
                </li>
              </ul>
              <h3 className="text-xl font-medium mt-4 mb-2">
                11.3 How to Exercise Your Rights
              </h3>
              <p>To exercise your rights, contact us at:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Email</strong>:{" "}
                  <a
                    href="mailto:info.gustoprofessionals@gmail.com"
                    className="text-[#04306e] hover:underline"
                  >
                    info.gustoprofessionals@gmail.com
                  </a>
                </li>
                <li>
                  <strong>Phone</strong>: +44 7448 504110 (UK) or +971 52 948
                  9070 (UAE)
                </li>
                <li>
                  <strong>Address</strong>: 712, Al Fahad Plaza Building,
                  Opposite KFC, Al Rigga Road, Al Rigga, Dubai, UAE
                </li>
              </ul>
              <p className="mt-4">We will respond within:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>30 days (GDPR for UK users).</li>
                <li>30 days (NDPR for Nigerian users).</li>
                <li>30 days (UAE law, unless otherwise specified).</li>
              </ul>
              <p className="mt-4">
                If you believe we have not addressed your request
                satisfactorily, you may lodge a complaint with a supervisory
                authority (see Section 14).
              </p>
            </div>

            {/* Marketing Communications */}
            <div>
              <h2 className="text-2xl font-semibold text-[#04306e] mb-4">
                12. Marketing Communications
              </h2>
              <p className="text-base leading-relaxed">
                We may send you marketing emails about new HSE training courses,
                certifications, or promotions if you have provided consent
                (e.g., during contact form submission). You can opt out at any
                time by:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Clicking the “unsubscribe” link in any marketing email.</li>
                <li>
                  Emailing{" "}
                  <a
                    href="mailto:info.gustoprofessionals@gmail.com"
                    className="text-[#04306e] hover:underline"
                  >
                    info.gustoprofessionals@gmail.com
                  </a>{" "}
                  with your opt-out request.
                </li>
              </ul>
              <p className="mt-4">
                We will promptly remove you from our marketing list, though we
                may still contact you for non-marketing purposes (e.g., training
                confirmations).
              </p>
            </div>

            {/* Cookies and Choices */}
            <div>
              <h2 className="text-2xl font-semibold text-[#04306e] mb-4">
                13. Cookies and Your Choices
              </h2>
              <p className="text-base leading-relaxed">
                You can manage cookies through our cookie consent banner, which
                appears when you visit our website. Options include:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Accepting all cookies.</li>
                <li>Rejecting non-essential (marketing) cookies.</li>
                <li>Customizing preferences.</li>
              </ul>
              <p className="mt-4">
                You can also disable cookies via your browser settings, but this
                may affect website functionality. For more details, see our{" "}
                <a href="#" className="text-[#04306e] hover:underline">
                  Cookie Policy
                </a>{" "}
                (if applicable, or contact us to create one).
              </p>
            </div>

            {/* Complaints */}
            <div>
              <h2 className="text-2xl font-semibold text-[#04306e] mb-4">
                14. Complaints and Supervisory Authorities
              </h2>
              <p className="text-base leading-relaxed">
                If you have concerns about our data practices, please contact us
                first at{" "}
                <a
                  href="mailto:info.gustoprofessionals@gmail.com"
                  className="text-[#04306e] hover:underline"
                >
                  info.gustoprofessionals@gmail.com
                </a>
                . If we cannot resolve your issue, you may contact the relevant
                supervisory authority:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>UAE</strong>: UAE Data Protection Authority (details
                  pending, as the authority is being established under Federal
                  Decree-Law No. 45/2021).
                </li>
                <li>
                  <strong>UK</strong>: Information Commissioner’s Office (ICO)
                  <ul className="list-circle pl-6 mt-1">
                    <li>Website: www.ico.org.uk</li>
                    <li>Phone: +44 303 123 1113</li>
                  </ul>
                </li>
                <li>
                  <strong>Nigeria</strong>: National Information Technology
                  Development Agency (NITDA)
                  <ul className="list-circle pl-6 mt-1">
                    <li>Email: dpo@nitda.gov.ng</li>
                    <li>Website: www.nitda.gov.ng</li>
                  </ul>
                </li>
              </ul>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="text-2xl font-semibold text-[#04306e] mb-4">
                15. Third-Party Links
              </h2>
              <p className="text-base leading-relaxed">
                Our website may contain links to third-party websites (e.g.,
                certification bodies, payment processors). These sites have
                their own privacy policies, and we are not responsible for their
                practices. Please review their policies before providing
                personal data.
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-2xl font-semibold text-[#04306e] mb-4">
                16. Children’s Privacy
              </h2>
              <p className="text-base leading-relaxed">
                Our services are not directed to individuals under 16 (or 13 in
                Nigeria for NDPR compliance). We do not knowingly collect
                personal data from children. If we learn that a child’s data has
                been collected, we will delete it promptly. If you believe a
                child has provided us with data, contact us at{" "}
                <a
                  href="mailto:info.gustoprofessionals@gmail.com"
                  className="text-[#04306e] hover:underline"
                >
                  info.gustoprofessionals@gmail.com
                </a>
                .
              </p>
            </div>

            {/* Policy Updates */}
            <div>
              <h2 className="text-2xl font-semibold text-[#04306e] mb-4">
                17. Changes to This Privacy Policy
              </h2>
              <p className="text-base leading-relaxed">
                We may update this Privacy Policy to reflect changes in our
                practices, legal requirements, or services. We will notify you
                of significant changes by:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Posting a notice on our website.</li>
                <li>
                  Sending an email to registered users (where applicable).
                </li>
              </ul>
              <p className="mt-4">
                The updated policy will be effective as of the “Last Updated”
                date at the top. Please review this policy periodically.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-semibold text-[#04306e] mb-4">
                18. Contact Us
              </h2>
              <p className="text-base leading-relaxed">
                For questions, concerns, or to exercise your data protection
                rights, contact us at:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Email</strong>:{" "}
                  <a
                    href="mailto:info.gustoprofessionals@gmail.com"
                    className="text-[#04306e] hover:underline"
                  >
                    info.gustoprofessionals@gmail.com
                  </a>
                </li>
                <li>
                  <strong>Phone</strong>: +44 7448 504110 (UK) or +971 52 948
                  9070 (UAE)
                </li>
                <li>
                  <strong>Address</strong>: 712, Al Fahad Plaza Building,
                  Opposite KFC, Al Rigga Road, Al Rigga, Dubai, UAE
                </li>
              </ul>
              <p className="mt-4">
                We are committed to addressing your inquiries promptly and
                transparently.
              </p>
            </div>
          </section>
        </MaxWidthWrapper>
      </div>
    </>
  );
};

export default PrivacyPolicy;
