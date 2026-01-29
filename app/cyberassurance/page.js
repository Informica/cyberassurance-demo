export const metadata = {
  title: "Cyber Assurance",
  description: "Cyber Assurance services to assess, validate, and strengthen your security posture",
};

export default function CyberAssurancePage() {
  return (
    <main className="px-6 py-16 max-w-6xl mx-auto">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Cyber Assurance
        </h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          Cyber Assurance helps organizations validate their cybersecurity
          posture through continuous assessment, risk evaluation, and
          independent verification.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-3">
        <div className="border border-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">
            Risk Assessment
          </h2>
          <p className="text-gray-400">
            Identify gaps across people, process, and technology with
            structured security assessments.
          </p>
        </div>

        <div className="border border-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">
            Compliance Validation
          </h2>
          <p className="text-gray-400">
            Ensure alignment with industry standards such as ISO 27001,
            SOC 2, and regulatory frameworks.
          </p>
        </div>

        <div className="border border-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">
            Continuous Assurance
          </h2>
          <p className="text-gray-400">
            Ongoing monitoring and periodic reviews to maintain a strong
            security posture over time.
          </p>
        </div>
      </section>
    </main>
  );
}
