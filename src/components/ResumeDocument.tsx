import { useState } from 'react';

type Page = {
  title: string;
  sections: { title: string; content: string }[];
};

const resumePages: Page[] = [
  {
    title: 'Resume — Vicky Fatrian',
    sections: [
      {
        title: 'VICKY FATRIAN',
        content:
          'Senior Web & API Developer\n\n' +
          'Cimahi, Bandung, Indonesia, 40531\n' +
          '+62818644684 | vickyfatrian@gmail.com\n' +
          'linkedin.com/in/vicky-fatrian-399386b6 | github.com/vfat',
      },
      {
        title: 'PROFESSIONAL SUMMARY',
        content:
          'Result-oriented Software Engineer with over a decade of professional experience designing, building, and maintaining robust web applications, high-performance API architectures, and IoT integrations. Proficient in a wide stack of backend technologies (PHP, Node.js, Python) and modern frontend frameworks (Next.js, Vue.js, React). Proven track record delivering multi-service platforms—including MetaTrader monitoring (Trader Panel), scalable inventory/POS systems, and complex third-party API integrations (BPJS, payment gateways, WhatsApp chatbots)—for fintech, enterprise, and healthtech systems.',
      },
      {
        title: 'TECHNICAL SKILLS',
        content:
          'Languages: PHP, JavaScript, TypeScript, Node.js, Python, Kotlin, Lua, Java, C, C++\n' +
          'Databases: MySQL, PostgreSQL, MongoDB, CouchDB, SQLite, GraphQL\n' +
          'Frameworks: Laravel, CodeIgniter, Lumen, Express, Next.js, Vue.js, React, F3, jQuery, Bootstrap, Tailwind CSS\n' +
          'Cloud & DevOps: AWS, GCP, Azure, Alibaba Cloud, Docker, Jenkins, Plesk, Composer, Git\n' +
          'OS: Linux (Ubuntu, Debian, CentOS), FreeBSD, Windows\n' +
          'Other Tools: GIMP, Inkscape, Adobe Premiere & After Effects, Office Suite',
      },
    ],
  },
  {
    title: 'Resume — Vicky Fatrian (Experience)',
    sections: [
      {
        title: 'PROFESSIONAL EXPERIENCE',
        content:
          'Senior Analyst Programmer — SDA Teknologi (Dec 2023 – Present)\n' +
          '  • Led backend development for Trader Panel, a multi-service platform for real-time MetaTrader (MT4/MT5) monitoring\n' +
          '  • Designed and implemented the full backend API layer (Express.js / Node.js): User API, Admin API, and Notification Center API\n' +
          '  • Built User API capabilities including login/signup, OTP, Google OAuth, profile management, dashboard summaries, MetaTrader account linking, trade/transaction history, chart screenshots, and notification workflows\n' +
          '  • Built Admin API for operational control: admin account management (RBAC), master data CRUD, system settings, session revoke, and desktop version broadcast/release management\n' +
          '  • Developed NC API services for notification ingestion, device registration, bulk price updates, chart screenshot handling, and settings synchronization\n' +
          '  • Developed the Admin Panel frontend (Next.js 15 App Router, TypeScript, Tailwind CSS, shadcn/ui, Zustand)\n' +
          '  • Authored Software Design Documents (SDD) and Security Design Documents (SecDD)\n' +
          '  • Applied security-by-design controls: layered Basic Auth + JWT, bcrypt password hashing, role-based access control, Joi validation, TLS\n' +
          '  • Completed the ISC2 Certified in Cybersecurity (CC) learning program\n\n' +
          'Backend Programmer — PT Inova Medika Solusindo (Aug 2021 – Present)\n' +
          '  • Designed and built custom RESTful APIs for mobile healthcare apps: Inovadok, Inovadok Medika, and KUBM\n' +
          '  • Successfully implemented hospital system APIs for RSIH and RSWB\n' +
          '  • Built a custom automated WhatsApp Chatbot service to streamline patient query handling\n' +
          '  • Integrated iPaymu payment gateway APIs for handling secure clinic transactions\n' +
          '  • Engineered and deployed the WSRS bridging service for JKN Mobile, enabling synchronization with BPJS Kesehatan systems\n' +
          '  • Developed custom API automation testing scripts to guarantee API performance and zero-downtime deployments\n' +
          '  • Created APIs supporting multi-healthcare facility (multi-faskes) configurations\n\n' +
          'Software Engineer — Grobmart.com (Nov 2017 – May 2021)\n' +
          '  • Designed, developed, and optimized a scalable warehouse inventory system\n' +
          '  • Set up and managed AWS and GCP development and staging server infrastructures\n' +
          '  • Created a custom, offline-capable Point of Sale (POS) system\n' +
          '  • Designed and integrated a proprietary internal courier and logistics tracking system\n' +
          '  • Developed mobile APIs to power the official Grobmart Android application\n' +
          '  • Conducted data analysis and database tuning to improve performance\n\n' +
          'Web & IoT Programmer — KODETEK (Apr 2016 – Jun 2017)\n' +
          '  • Designed and developed Smart Home IoT automation prototypes\n' +
          '  • Built responsive, customized web applications for diverse corporate clients\n' +
          '  • Set up, maintained, and managed server environments\n\n' +
          'Software Developer — FIXDIGITAL (Feb 2016 – Apr 2016)\n' +
          '  • Designed and developed a digital vehicle showroom application for used cars\n' +
          '  • Programmed smart home IoT integration prototypes\n' +
          '  • Managed and optimized databases for a digital karaoke media system\n\n' +
          'Web Programmer — INDOAPPSWORLD (Feb 2015 – Feb 2016)\n' +
          '  • Developed a comprehensive restaurant management and ordering system\n' +
          '  • Built a web platform for trading used mobile phones\n' +
          '  • Developed and optimized a local news media portal',
      },
    ],
  },
  {
    title: 'Resume — Vicky Fatrian (Education)',
    sections: [
      {
        title: 'PROFESSIONAL EXPERIENCE (cont.)',
        content:
          'Web Administrator (Intern) — FKIP Sriwijaya University (Feb 2012 – Mar 2012)\n' +
          '  • Designed and developed the official website of the Faculty of Teacher Training and Education\n\n' +
          'Network & System Technician — Balai Tekkom Dinas Pendidikan Sumsel (Oct 2010 – Nov 2011)\n' +
          '  • Configured and managed servers and network infrastructures',
      },
      {
        title: 'EDUCATION',
        content:
          'Associate Degree in Computer Engineering (Ahli Madya Komputer)\n' +
          'Sriwijaya University (Fasilkom UNSRI) | Palembang, Indonesia | 2009 – 2014\n' +
          'Graduated with a GPA of 3.36 / 4.00 from the Faculty of Computer Science',
      },
      {
        title: 'LANGUAGES',
        content:
          'English: Passive / Professional Reading & Technical Writing\n' +
          'Indonesian: Native',
      },
    ],
  },
];

export default function ResumeDocument() {
  const [page, setPage] = useState(0);
  const totalPages = resumePages.length;
  const currentPage = resumePages[page];

  return (
    <div className="resume-document">
      <div className="resume-header">
        <span className="resume-title">{currentPage.title}</span>
        <span className="resume-page-indicator">
          Page {page + 1} of {totalPages}
        </span>
      </div>
      <div className="resume-body">
        {currentPage.sections.map((section, i) => (
          <div key={i} className="resume-section">
            <h2 className="resume-section-title">{section.title}</h2>
            <pre className="resume-section-content">{section.content}</pre>
          </div>
        ))}
      </div>
      <div className="resume-footer">
        <button
          type="button"
          className="resume-nav"
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          disabled={page === 0}
        >
          ← Prev
        </button>
        <span className="resume-page-dots">
          {Array.from({ length: totalPages }, (_, i) => (
            <span key={i} className={i === page ? 'dot active' : 'dot'}>
              ●
            </span>
          ))}
        </span>
        <button
          type="button"
          className="resume-nav"
          onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
          disabled={page === totalPages - 1}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
