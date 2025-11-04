import { motion } from 'framer-motion'

export default function Certifications() {
    const certs = [
      {
        title: "Google Analytics Certification",
        issuer: "Google",
        date: "2025",
        link: "https://drive.google.com/file/d/19PNniV5rcjkEZsPzZQRBdix10eRMLI37/view",
        logo: "/google-analytics-logo.jpg",
      },
      {
        title: "Cloud Networking with AWS VPC",
        issuer: "Amazon Web Services (AWS)",
        date: "2025",
        link: "https://drive.google.com/file/d/1GHwuTk_RS60IQ--NCtgsHfJtE8Z9tVep/view",
        logo: "/vpc-logo.jpg",
      },
      {
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services (AWS)",
        date: "2025",
        link: "https://drive.google.com/file/d/1kDGaIVARbne_OAAKs_ZXiOUNbl4t2BVC/view",
        logo: "/aws-certified-logo.jpg",
      },
    ];
  
    return (
      <section
        id="certifications"
        className="section-padding bg-gray-50 dark:bg-gray-800/50"
      >
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          >
            Certifications
          </motion.h2>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {certs.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 text-center"
              >
                {/* Logo Section */}
                <div className="mb-4 flex justify-center">
                  <img
                    src={cert.logo}
                    alt={`${cert.issuer} logo`}
                    className="w-20 h-20 object-contain"
                    onError={(e) => {
                      console.error('Image failed to load:', cert.logo);
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
  
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{cert.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{cert.issuer}</p>
                <p className="text-xs text-gray-500 dark:text-gray-500 mb-4">Issued: {cert.date}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 font-medium text-sm hover:underline inline-block"
                >
                  View Certificate →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  