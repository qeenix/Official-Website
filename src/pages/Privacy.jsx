import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "1. Project Requirements",
      content:
        "Before starting any project, QeeniX requires clients to clearly provide all necessary requirements, specifications, and related documents. Once the project has been initiated and confirmed, major requirement changes will not be accepted after two (2) weeks from the project start date. Any changes requested after this period may require a new quotation or additional charges depending on the scope.",
    },
    {
      title: "2. Package Selection",
      content:
        "All clients must select a service package (Basic, Standard, or Premium) before the project begins. The selected package determines the level of features, delivery time, and support included. Upgrades or changes to the selected package are allowed only before development begins.",
    },
    {
      title: "3. Project Agreement",
      content:
        "Before any development work starts, the client must review and agree to the official Project Agreement, which includes:\n\n• Scope of work\n• Timelines and milestones\n• Payment schedule\n• Confidentiality and intellectual property terms\n\nBy agreeing, the client confirms understanding of all project conditions and limitations.",
    },
    {
      title: "4. Payments & Invoices",
      content:
        "Clients must follow the payment schedule stated in their project agreement.\n\n• Initial advance payment is required to start the project.\n• Remaining payments must be completed before project delivery.\n• Failure to make timely payments may result in work suspension or cancellation.",
    },
    {
      title: "5. Confidentiality",
      content:
        "QeeniX respects client confidentiality. All shared documents, project materials, and data are handled securely and will not be shared or reused without written client permission.",
    },
    {
      title: "6. Delivery & Ownership",
      content:
        "Upon full payment, the client receives ownership of the final deliverables. However, QeeniX retains rights to use non-confidential parts of the project (e.g., design elements or layouts) for portfolio and marketing purposes unless otherwise agreed.",
    },
    {
      title: "7. Support & Maintenance",
      content:
        "Post-project support depends on the selected package:\n\n• Basic: 1-week support\n• Standard: 1-month support\n• Premium: 3-month support + priority bug fixes\n\nExtended maintenance can be arranged as an add-on service.",
    },
    {
      title: "8. Refund & Cancellation Policy",
      content:
        "Once a project agreement is signed and work has started, refunds will not be issued unless QeeniX fails to deliver the promised scope. If the client decides to cancel before development starts, a 10% administrative fee will be deducted from the refund.",
    },
    {
      title: "9. Privacy Policy",
      content:
        "QeeniX collects only necessary client data (e.g., name, email, contact details) for communication and project purposes. We never share, sell, or disclose personal data to third parties. All data is stored securely and used solely for professional engagement.",
    },
    {
      title: "10. Agreement Acceptance",
      content:
        "By signing the project agreement or proceeding with payment, the client confirms full acceptance of QeeniX’s Terms of Service and Privacy Policy.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div>
      <motion.div
        className="max-w-5xl mx-auto p-6 md:p-12 bg-gray-50 min-h-screen"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h1
          className="text-4xl font-bold text-gray-800 mb-12 text-center"
          variants={itemVariants}
        >
          Privacy & Policy / Terms of Service
        </motion.h1>

        {sections.map((section, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative mb-10 p-6 bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
          >
            {/* Background "QeeniX" text */}
            <span className="absolute inset-0 text-6xl md:text-8xl font-bold text-blue-200 text-opacity-20 flex items-center justify-center pointer-events-none scale-90 opacity-0 group-hover:opacity-30 group-hover:scale-100 transition-all duration-500 select-none">
              QeeniX
            </span>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4 relative z-10">
              {section.title}
            </h2>
            <p className="text-gray-700 whitespace-pre-line relative z-10">
              {section.content}
            </p>
          </motion.div>
        ))}
      </motion.div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
