import React from "react";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Head from "next/head";
import Link from "next/link";

const TermsOfUse = () => {
  return (
    <>
      <Head>
        <title>Terms of Use - Gusto Professionals</title>
        <meta
          name="description"
          content="Review the Terms of Use for using Gusto Professionals' HSE training services and website, including user responsibilities and service conditions."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="border-b border-gray-300 w-full bg-gray-50 text-[#1e1e1e]">
        <MaxWidthWrapper className="py-12 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#04306e] mb-6">
            Terms of Use
          </h1>
          <p className="text-sm text-gray-600 mb-8">
            Last Updated: April 20, 2025
          </p>

          <section className="space-y-8">
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-semibold text-[#04306e] mb-4">
                1. About Gusto Professionals
              </h2>
              <p className="text-base leading-relaxed">
                Gusto Professionals is a sole proprietorship based in Dubai,
                United Arab Emirates, offering Health, Safety, and Environment
                (HSE) training and certifications. Our contact details are:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Address</strong>: 712, Al Fahad Plaza Building,
                  Opposite KFC, Al Rigga Road, Al Rigga, Dubai, UAE
                </li>
                <li>
                  <strong>Email</strong>:{" "}
                  <Link
                    href="mailto:info.gustoprofessionals@gmail.com"
                    className="text-[#04306e] hover:underline"
                    aria-label="Email Gusto Professionals"
                  >
                    info.gustoprofessionals@gmail.com
                  </Link>
                </li>
                <li>
                  <strong>Phone</strong>: +44 7448 504110 (UK), +971 52 948 9070
                  (UAE)
                </li>
              </ul>
            </div>

            {/* Eligibility */}
            <div>
              <h2 className="text-2xl font-semibold text-[#04306e] mb-4">
                2. Eligibility
              </h2>
              <p className="text-base leading-relaxed">
                To use our Website and Services, you must:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Be at least 16 years old (or 13 in Nigeria, with parental
                  consent).
                </li>
                <li>
                  Provide accurate and complete information when submitting
                  contact forms or enrolling in Services.
                </li>
                <li>
                  Comply with these Terms and all applicable laws in the UAE,
                  UK, Nigeria, or your jurisdiction.
                </li>
              </ul>
              <p className="mt-4">
                Businesses enrolling employees must have the authority to
                provide employee information and ensure employees comply with
                these Terms.
              </p>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-2xl font-semibold text-[#04306e] mb-4">
                3. Services
              </h2>
              <p className="text-base leading-relaxed">
                We offer in-person HSE training courses and certifications
                designed to meet industry standards in the UAE, UK, and Nigeria.
                Our Services include:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Training Courses</strong>: Instructor-led sessions
                  covering HSE topics (e.g., workplace safety, environmental
                  compliance).
                </li>
                <li>
                  <strong>Certifications</strong>: Issuance of certificates upon
                  successful course completion, subject to meeting all
                  requirements.
                </li>
              </ul>
              <p className="mt-4">
                To enroll, Users must submit a contact form with their name and
                email (phone optional) and follow any additional instructions
                provided by Gusto Professionals. We reserve the right to modify,
                suspend, or cancel Services at our discretion, with notice where
                feasible.
              </p>
            </div>

            {/* User Accounts and Responsibilities */}
            <div>
              <h2 className="text-2xl font-semibold text-[#04306e] mb-4">
                4. User Accounts and Responsibilities
              </h2>
              <p className="text-base leading-relaxed">
                Currently, our Services do not require user accounts. All
                interactions occur via contact forms, and communications are
                managed through our email (
                <Link
                  href="mailto:info.gustoprofessionals@gmail.com"
                  className="text-[#04306e] hover:underline"
                >
                  info.gustoprofessionals@gmail.com
                </Link>
                ). If we introduce accounts in the future, you agree to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Provide accurate registration information.</li>
                <li>Maintain the security of your account credentials.</li>
                <li>Notify us immediately of unauthorized account use.</li>
              </ul>
              <p className="mt-4">You are responsible for:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Providing true, accurate, and complete information in contact
                  forms.
                </li>
                <li>
                  Not misrepresenting your identity or affiliation (e.g.,
                  claiming to represent a business without authority).
                </li>
                <li>
                  Complying with all course requirements (e.g., attendance,
                  assessments) to receive certifications.
                </li>
              </ul>
            </div>

            {/* Permitted Use */}
            <div>
              <h2 className="text-2xl font-semibold text-[#04306e] mb-4">
                5. Permitted Use
              </h2>
              <p className="text-base leading-relaxed">
                You may use our Website and Services only for lawful purposes
                and in accordance with these Terms. You agree not to:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Copy, distribute, or reproduce our training materials, website
                  content, or certifications without written permission.
                </li>
                <li>
                  Use the Website or Services to engage in fraudulent, harmful,
                  or illegal activities (e.g., falsifying certification
                  records).
                </li>
                <li>
                  Attempt to bypass security measures, access restricted areas,
                  or interfere with the Website’s functionality.
                </li>
                <li>
                  Use automated tools (e.g., bots, scrapers) to extract content
                  from the Website.
                </li>
                <li>
                  Share or resell training materials or certifications with
                  unauthorized parties.
                </li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-2xl font-semibold text-[#04306e] mb-4">
                6. Intellectual Property
              </h2>
              <p className="text-base leading-relaxed">
                All content on our Website and Services, including training
                materials, course content, logos, and certifications
                (“Content”), is owned by Gusto Professionals or our licensors
                and is protected by copyright, trademark, and other intellectual
                property laws. You may:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Use Content solely for personal or professional training
                  purposes as part of our Services.
                </li>
                <li>
                  Not modify, reproduce, distribute, or create derivative works
                  from Content without our express written consent.
                </li>
              </ul>
              <p className="mt-4">
                The “Gusto Professionals” name and logo are our trademarks.
                Unauthorized use is prohibited.
              </p>
            </div>

            {/* Fees and Payments */}
            <div>
              <h2 className="text-2xl font-semibold text-[#04306e] mb-4">
                7. Fees and Payments
              </h2>
              <p className="text-base leading-relaxed">
                If you enroll in paid Services, you agree to pay all applicable
                fees as communicated during enrollment. Currently, payments are
                handled offline (e.g., bank transfer, in-person). If we
                introduce online payments, additional terms will apply,
                including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Payment processing by third-party providers (e.g., Stripe).
                </li>
                <li>No storage of payment details on our Website.</li>
              </ul>
              <p className="mt-4">
                All fees are non-refundable unless otherwise stated or required
                by law. We reserve the right to cancel Services for non-payment.
              </p>
            </div>

            {/* Refunds and Cancellations */}
            <div>
              <h2 className="text-2xl font-semibold text-[#04306e] mb-4">
                8. Refunds and Cancellations
              </h2>
              <p className="text-base leading-relaxed">
                <strong>Cancellations by You</strong>: You may cancel enrollment
                by contacting us at{" "}
                <Link
                  href="mailto:info.gustoprofessionals@gmail.com"
                  className="text-[#04306e] hover:underline"
                >
                  info.gustoprofessionals@gmail.com
                </Link>
                . Refunds, if any, are at our discretion and subject to a 7-day
                notice period before the course start date.
              </p>
              <p className="mt-4">
                <strong>Cancellations by Us</strong>: We may cancel or
                reschedule courses due to insufficient enrollment, instructor
                availability, or unforeseen circumstances. We will notify you
                promptly and offer a refund or alternative course date.
              </p>
              <p className="mt-4">
                <strong>No-Show Policy</strong>: Failure to attend a course
                without prior notice forfeits any refund or rescheduling rights.
              </p>
            </div>

            {/* Certification Requirements */}
            <div>
              <h2 className="text-2xl font-semibold text-[#04306e] mb-4">
                9. Certification Requirements
              </h2>
              <p className="text-base leading-relaxed">
                To receive an HSE certification, you must:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Attend all required training sessions.</li>
                <li>
                  Complete assessments or practical exercises as specified.
                </li>
                <li>
                  Provide accurate identification information for certification
                  records.
                </li>
              </ul>
              <p className="mt-4">
                Certifications are issued in your name and are non-transferable.
                We reserve the right to revoke certifications for fraud,
                misrepresentation, or failure to meet requirements.
              </p>
            </div>

            {/* Disclaimers */}
            <div>
              <h2 className="text-2xl font-semibold text-[#04306e] mb-4">
                10. Disclaimers
              </h2>
              <p className="text-base leading-relaxed">
                Our Services are provided “as is” without warranties of any
                kind, express or implied, except as required by law. We do not
                guarantee:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Uninterrupted or error-free access to the Website or Services.
                </li>
                <li>
                  The accuracy or completeness of training content, though we
                  strive to meet industry standards.
                </li>
                <li>
                  That certifications will satisfy all regulatory or employer
                  requirements in your jurisdiction.
                </li>
              </ul>
              <p className="mt-4">
                You acknowledge that HSE certifications do not guarantee
                workplace safety compliance or employment outcomes. You are
                responsible for verifying the suitability of our certifications
                for your needs.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-semibold text-[#04306e] mb-4">
                11. Limitation of Liability
              </h2>
              <p className="text-base leading-relaxed">
                To the maximum extent permitted by law, Gusto Professionals, its
                owner, and affiliates are not liable for:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Indirect, incidental, consequential, or punitive damages
                  arising from your use of the Website or Services.
                </li>
                <li>
                  Losses related to course cancellations, technical issues, or
                  certification disputes.
                </li>
                <li>
                  Any amount exceeding the fees paid for the specific Service
                  giving rise to the claim.
                </li>
              </ul>
              <p className="mt-4">
                This limitation applies regardless of the legal theory (e.g.,
                contract, tort, negligence).
              </p>
            </div>

            {/* Indemnification */}
            <div>
              <h2 className="text-2xl font-semibold text-[#04306e] mb-4">
                12. Indemnification
              </h2>
              <p className="text-base leading-relaxed">
                You agree to indemnify and hold harmless Gusto Professionals,
                its owner, and affiliates from any claims, losses, or damages
                (including legal fees) arising from:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Your violation of these Terms.</li>
                <li>Your misuse of the Website, Services, or Content.</li>
                <li>Your provision of inaccurate or fraudulent information.</li>
              </ul>
            </div>

            {/* Termination */}
            <div>
              <h2 className="text-2xl font-semibold text-[#04306e] mb-4">
                13. Termination
              </h2>
              <p className="text-base leading-relaxed">
                We may suspend or terminate your access to the Website or
                Services if you:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Violate these Terms (e.g., misuse Content, engage in
                  fraudulent activity).
                </li>
                <li>Fail to pay applicable fees.</li>
                <li>
                  Engage in conduct that harms Gusto Professionals, other Users,
                  or third parties.
                </li>
              </ul>
              <p className="mt-4">
                Upon termination, you must cease using the Website and Services.
                Provisions related to intellectual property, liability, and
                indemnification survive termination.
              </p>
            </div>

            {/* Governing Law and Dispute Resolution */}
            <div>
              <h2 className="text-2xl font-semibold text-[#04306e] mb-4">
                14. Governing Law and Dispute Resolution
              </h2>
              <p className="text-base leading-relaxed">
                These Terms are governed by the laws of the United Arab
                Emirates, without regard to conflict of law principles. Any
                disputes arising from these Terms or your use of the Website or
                Services will be resolved through:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Negotiation</strong>: Contact us first at{" "}
                  <Link
                    href="mailto:info.gustoprofessionals@gmail.com"
                    className="text-[#04306e] hover:underline"
                  >
                    info.gustoprofessionals@gmail.com
                  </Link>{" "}
                  to resolve issues amicably.
                </li>
                <li>
                  <strong>Arbitration</strong>: If unresolved, disputes will be
                  settled by binding arbitration in Dubai, UAE, under the rules
                  of the Dubai International Arbitration Centre (DIAC).
                </li>
                <li>
                  <strong>Courts</strong>: For matters not subject to
                  arbitration, the courts of Dubai have exclusive jurisdiction.
                </li>
              </ul>
              <p className="mt-4">
                Users in the UK or Nigeria may have additional rights under
                local laws, which we will respect.
              </p>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="text-2xl font-semibold text-[#04306e] mb-4">
                15. Third-Party Links
              </h2>
              <p className="text-base leading-relaxed">
                Our Website may contain links to third-party websites (e.g.,
                certification bodies). We are not responsible for their content,
                services, or practices. Use such links at your own risk.
              </p>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="text-2xl font-semibold text-[#04306e] mb-4">
                16. Changes to These Terms
              </h2>
              <p className="text-base leading-relaxed">
                We may update these Terms to reflect changes in our Services,
                legal requirements, or business practices. We will notify you of
                significant changes by:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Posting a notice on our Website.</li>
                <li>
                  Sending an email to Users who have submitted contact forms
                  (where applicable).
                </li>
              </ul>
              <p className="mt-4">
                The updated Terms will be effective as of the “Last Updated”
                date at the top. Continued use of the Website or Services after
                changes constitutes acceptance.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-semibold text-[#04306e] mb-4">
                17. Contact Us
              </h2>
              <p className="text-base leading-relaxed">
                For questions, concerns, or disputes related to these Terms,
                contact us at:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  <strong>Email</strong>:{" "}
                  <Link
                    href="mailto:info.gustoprofessionals@gmail.com"
                    className="text-[#04306e] hover:underline"
                  >
                    info.gustoprofessionals@gmail.com
                  </Link>
                </li>
                <li>
                  <strong>Phone</strong>: +44 7448 504110 (UK), +971 52 948 9070
                  (UAE)
                </li>
                <li>
                  <strong>Address</strong>: 712, Al Fahad Plaza Building,
                  Opposite KFC, Al Rigga Road, Al Rigga, Dubai, UAE
                </li>
              </ul>
            </div>

            {/* Miscellaneous */}
            <div>
              <h2 className="text-2xl font-semibold text-[#04306e] mb-4">
                18. Miscellaneous
              </h2>
              <p className="text-base leading-relaxed">
                <strong>Entire Agreement</strong>: These Terms, along with any
                additional terms provided during enrollment, constitute the
                entire agreement between you and Gusto Professionals.
              </p>
              <p className="mt-4">
                <strong>Severability</strong>: If any provision is found
                invalid, the remaining provisions remain enforceable.
              </p>
              <p className="mt-4">
                <strong>No Waiver</strong>: Our failure to enforce any right or
                provision does not waive that right or provision.
              </p>
              <p className="mt-4">
                <strong>Assignment</strong>: We may assign these Terms to a
                successor in the event of a merger or acquisition. You may not
                assign these Terms without our consent.
              </p>
            </div>
          </section>
        </MaxWidthWrapper>
      </div>
    </>
  );
};

export default TermsOfUse;
