import React from "react";
import Footer from "../components/Footer";

const Legal = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 to-blue-50 text-slate-800">
      {/* Page Content */}
      <main className="flex-grow container mx-auto px-6 md:px-12 lg:px-24 py-16">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_#22d3ee]">
          Terms & Conditions
        </h1>
        <p className="text-center text-slate-500 mb-12 max-w-2xl mx-auto">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        {/* Content */}
        <div className="space-y-10 leading-relaxed text-lg">
          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-3">
              1. Introduction
            </h2>
            <p>
              Welcome to <strong>QeeniX Solutions</strong>. By accessing or using our
              website, products, or services, you agree to comply with and be bound
              by the following Terms and Conditions. If you do not agree, please do
              not use our services.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-3">
              2. Use of Our Services
            </h2>
            <p>
              You agree to use our website and services only for lawful purposes.
              You are responsible for ensuring that your use complies with all
              applicable laws, rules, and regulations. Unauthorized use, including
              attempts to gain access to restricted areas of our systems, is strictly
              prohibited.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-3">
              3. Intellectual Property Rights
            </h2>
            <p>
              All content, graphics, designs, and software developed by{" "}
              <strong>QeeniX Solutions</strong> are the intellectual property of our
              company. You may not reproduce, distribute, or modify any materials
              without our prior written consent.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-3">
              4. Limitation of Liability
            </h2>
            <p>
              <strong>QeeniX Solutions</strong> shall not be held liable for any
              direct, indirect, incidental, or consequential damages resulting from
              your use of our services. All materials are provided “as is” without
              any warranties, express or implied.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-3">
              5. Privacy Policy
            </h2>
            <p>
              Your privacy is important to us. Please refer to our{" "}
              <a
                href="/privacy"
                className="text-blue-500 hover:underline"
              >
                Privacy Policy
              </a>{" "}
              for information on how we collect, use, and protect your personal data.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-3">
              6. Changes to These Terms
            </h2>
            <p>
              We may revise these Terms & Conditions from time to time. Any changes
              will be posted on this page with an updated “Last Updated” date. You
              are encouraged to review these terms periodically.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mb-3">
              7. Contact Information
            </h2>
            <p>
              For questions or concerns regarding these Terms & Conditions, please
              contact us at:{" "}
              <a
                href="mailto:info.qeenix@gmail.com"
                className="text-blue-500 hover:underline"
              >
                info@qeenix.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Legal;
