export default function ResumeDocument() {
  return (
    <div className="pdf-viewer">
      <div className="pdf-toolbar">
        <span className="pdf-toolbar-label">Resume.pdf</span>
        <span className="pdf-toolbar-page">Page 1 of 1</span>
      </div>
      <div className="pdf-page-container">
        <div className="pdf-page">
          <div className="pdf-page-content">
            <h1 className="resume-name">VICKY FATRIAN</h1>
            <p className="resume-title">Senior Web &amp; API Developer</p>

            <p className="resume-contact">
              Cimahi, Bandung, Indonesia, 40531 &nbsp;|&nbsp; +62818644684 &nbsp;|&nbsp; vickyfatrian@gmail.com
            </p>
            <p className="resume-contact">
              <a href="https://linkedin.com/in/vicky-fatrian-399386b6/" target="_blank" rel="noopener noreferrer">linkedin.com/in/vicky-fatrian-399386b6</a>
              &nbsp;|&nbsp;
              <a href="https://github.com/vfat" target="_blank" rel="noopener noreferrer">github.com/vfat</a>
            </p>

            <hr className="resume-divider" />

            <h2 className="resume-section-heading">Professional Summary</h2>
            <p className="resume-paragraph">
              Result-oriented Software Engineer with over a decade of professional experience designing, building, and maintaining robust web applications, high-performance API architectures, and IoT integrations. Proficient in a wide stack of backend technologies (PHP, Node.js, Python) and modern frontend frameworks (Next.js, Vue.js, React). Proven track record delivering multi-service platforms—including MetaTrader monitoring (Trader Panel), scalable inventory/POS systems, and complex third-party API integrations (BPJS, payment gateways, WhatsApp chatbots)—for fintech, enterprise, and healthtech systems.
            </p>

            <h2 className="resume-section-heading">Technical Skills</h2>
            <ul className="resume-skill-list">
              <li><strong>Languages:</strong> PHP, JavaScript, TypeScript, Node.js, Python, Kotlin, Lua, Java, C, C++</li>
              <li><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB, CouchDB, SQLite, GraphQL</li>
              <li><strong>Frameworks:</strong> Laravel, CodeIgniter, Lumen, Express, Next.js, Vue.js, React, F3, jQuery, Bootstrap, Tailwind CSS</li>
              <li><strong>Cloud &amp; DevOps:</strong> AWS, GCP, Azure, Alibaba Cloud, Docker, Jenkins, Plesk, Composer, Git</li>
              <li><strong>OS:</strong> Linux (Ubuntu, Debian, CentOS), FreeBSD, Windows</li>
              <li><strong>Other Tools:</strong> GIMP, Inkscape, Adobe Premiere &amp; After Effects, Office Suite</li>
            </ul>

            <h2 className="resume-section-heading">Professional Experience</h2>

            <div className="resume-job">
              <div className="resume-job-header">
                <span className="resume-job-title">Senior Analyst Programmer</span>
                <span className="resume-job-date">December 2023 – Present</span>
              </div>
              <p className="resume-job-company">SDA Teknologi | Kecamatan Parongpong, West Java, Indonesia</p>
              <ul className="resume-bullet-list">
                <li>Led backend development for <strong>Trader Panel</strong>, a multi-service platform for real-time MetaTrader (MT4/MT5) monitoring, multi-account/VPS visibility, and event-driven alerts without RDP access.</li>
                <li>Designed and implemented the full backend API layer (Express.js / Node.js): <strong>User API</strong>, <strong>Admin API</strong>, and <strong>Notification Center (NC) API</strong>, covering authentication, trading data, devices, charts, notifications, billing, and system administration.</li>
                <li>Built User API capabilities including login/signup, OTP, Google OAuth (web &amp; desktop), profile management, dashboard summaries, MetaTrader account linking, trade/transaction history, chart screenshots, and notification workflows.</li>
                <li>Built Admin API for operational control: admin account management (RBAC: superadmin/admin/viewer), master data CRUD (brokers, symbol pairs, ads), system settings, session revoke, and desktop version broadcast/release management.</li>
                <li>Developed NC API services for notification ingestion, device registration, bulk price updates, chart screenshot handling, and settings synchronization between agents and backend.</li>
                <li>Developed the <strong>Admin Panel</strong> frontend (Next.js 15 App Router, TypeScript, Tailwind CSS, shadcn/ui, Zustand) for administrators to manage users, master data, ads, settings, and desktop releases.</li>
                <li>Authored Software Design Documents (SDD) and Security Design Documents (SecDD) covering C4 architecture, API contracts (DDD specs), authentication/authorization, rate limiting, input validation, audit logging, and secure error handling.</li>
                <li>Applied security-by-design controls across services: layered Basic Auth + JWT, bcrypt password hashing, role-based access control, Joi validation, TLS, and monitoring/alerting integration.</li>
                <li>Completed the official ISC2 Certified in Cybersecurity (CC) learning program covering cybersecurity fundamentals.</li>
              </ul>
            </div>

            <div className="resume-job">
              <div className="resume-job-header">
                <span className="resume-job-title">Backend Programmer</span>
                <span className="resume-job-date">August 2021 – Present</span>
              </div>
              <p className="resume-job-company">PT Inova Medika Solusindo | Bandung, Indonesia</p>
              <ul className="resume-bullet-list">
                <li>Designed and built custom RESTful APIs for mobile healthcare apps: <em>Inovadok</em>, <em>Inovadok Medika</em>, and <em>KUBM</em>.</li>
                <li>Successfully implemented hospital system APIs for <em>RSIH</em> and <em>RSWB</em>.</li>
                <li>Built a custom automated WhatsApp Chatbot service to streamline patient query handling.</li>
                <li>Integrated iPaymu payment gateway APIs for handling secure clinic transactions.</li>
                <li>Engineered and deployed the WSRS (Web Service Rumah Sakit) bridging service for <em>JKN Mobile</em>, enabling synchronization with BPJS Kesehatan systems.</li>
                <li>Developed custom API automation testing scripts to guarantee API performance and zero-downtime deployments.</li>
                <li>Created APIs supporting multi-healthcare facility (multi-faskes) configurations.</li>
              </ul>
            </div>

            <div className="resume-job">
              <div className="resume-job-header">
                <span className="resume-job-title">Software Engineer</span>
                <span className="resume-job-date">November 2017 – May 2021</span>
              </div>
              <p className="resume-job-company">Grobmart.com | Bandung, Indonesia</p>
              <ul className="resume-bullet-list">
                <li>Designed, developed, and optimized a scalable warehouse inventory system for Grobmart.com and its retail partners.</li>
                <li>Set up and managed AWS and GCP development and staging server infrastructures.</li>
                <li>Created a custom, offline-capable Point of Sale (POS) system for physical retail operations.</li>
                <li>Designed and integrated a proprietary internal courier and logistics tracking system.</li>
                <li>Developed mobile APIs to power the official Grobmart Android application.</li>
                <li>Conducted data analysis and database tuning to improve performance and business decision-making.</li>
              </ul>
            </div>

            <div className="resume-job">
              <div className="resume-job-header">
                <span className="resume-job-title">Web &amp; IoT Programmer</span>
                <span className="resume-job-date">April 2016 – June 2017</span>
              </div>
              <p className="resume-job-company">KODETEK | Jakarta, Indonesia</p>
              <ul className="resume-bullet-list">
                <li>Designed and developed Smart Home IoT automation prototypes.</li>
                <li>Built responsive, customized web applications for diverse corporate clients.</li>
                <li>Set up, maintained, and managed server environments.</li>
              </ul>
            </div>

            <div className="resume-job">
              <div className="resume-job-header">
                <span className="resume-job-title">Software Developer</span>
                <span className="resume-job-date">February 2016 – April 2016</span>
              </div>
              <p className="resume-job-company">FIXDIGITAL | Malang, Indonesia</p>
              <ul className="resume-bullet-list">
                <li>Designed and developed a digital vehicle showroom application for used cars.</li>
                <li>Programmed smart home IoT integration prototypes.</li>
                <li>Managed and optimized databases for a digital karaoke media system.</li>
              </ul>
            </div>

            <div className="resume-job">
              <div className="resume-job-header">
                <span className="resume-job-title">Web Programmer</span>
                <span className="resume-job-date">February 2015 – February 2016</span>
              </div>
              <p className="resume-job-company">INDOAPPSWORLD | Palembang, Indonesia</p>
              <ul className="resume-bullet-list">
                <li>Developed a comprehensive restaurant management and ordering system.</li>
                <li>Built a web platform for trading used mobile phones.</li>
                <li>Developed and optimized a local news media portal.</li>
              </ul>
            </div>

            <div className="resume-job">
              <div className="resume-job-header">
                <span className="resume-job-title">Web Administrator (Intern)</span>
                <span className="resume-job-date">February 2012 – March 2012</span>
              </div>
              <p className="resume-job-company">FKIP Sriwijaya University | Palembang, Indonesia</p>
              <ul className="resume-bullet-list">
                <li>Designed and developed the official website of the Faculty of Teacher Training and Education.</li>
              </ul>
            </div>

            <div className="resume-job">
              <div className="resume-job-header">
                <span className="resume-job-title">Network &amp; System Technician</span>
                <span className="resume-job-date">October 2010 – November 2011</span>
              </div>
              <p className="resume-job-company">Balai Tekkom Dinas Pendidikan Sumsel | Palembang, Indonesia</p>
              <ul className="resume-bullet-list">
                <li>Configured and managed servers and network infrastructures.</li>
              </ul>
            </div>

            <h2 className="resume-section-heading">Education</h2>
            <div className="resume-job">
              <div className="resume-job-header">
                <span className="resume-job-title">Associate Degree in Computer Engineering (Ahli Madya Komputer)</span>
                <span className="resume-job-date">2009 – 2014</span>
              </div>
              <p className="resume-job-company">Sriwijaya University (Fasilkom UNSRI) | Palembang, Indonesia</p>
              <ul className="resume-bullet-list">
                <li>Graduated with a GPA of <strong>3.36 / 4.00</strong> from the Faculty of Computer Science.</li>
              </ul>
            </div>

            <h2 className="resume-section-heading">Languages</h2>
            <ul className="resume-skill-list">
              <li><strong>English:</strong> Passive / Professional Reading &amp; Technical Writing</li>
              <li><strong>Indonesian:</strong> Native</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
