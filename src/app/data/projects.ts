export interface ProjectFeature {
  imagePath: string;
  caption: string;
}

export interface AdditionalLink {
  label: string;
  repoLink?: string;
  deploymentLink?: string;
}

export interface SubProject {
  title: string;
  description: string;
  features: ProjectFeature[];
}

export interface ProjectData {
  slug: string;
  title: string;
  description: string;
  oneLineSummary: string;
  problemGoal: string;
  repoLink?: string;
  deploymentLink?: string;
  imageSrc: string; // cover/card screenshot
  logoSrc?: string; // dedicated logo asset if exists
  techStack: string[];
  size?: "large" | "medium" | "standard" | "small";
  badgeText?: string;
  additionalLinks?: AdditionalLink[];
  features: ProjectFeature[]; // fallback flat list of features
  subProjects?: SubProject[]; // structured sub-projects for utilities
  technicalHighlight: string;
  hasScreenshots: boolean;
  hasDetailPage: boolean; // Flag to skip CLI projects from separate page routing
}

export const projectsData: ProjectData[] = [
  {
    slug: "attendify",
    title: "Attendify — Workforce Management SaaS",
    oneLineSummary: "A full-featured enterprise SaaS platform for workforce attendance and scheduling.",
    description: "A full-featured enterprise SaaS platform for workforce attendance and scheduling. Features geofence-verified clock-ins, role-based access control, shift/leave management, and audit-ready session logging. Delivers a complete administrative experience for real-time tracking.",
    problemGoal: "SaaS platform addressing the challenges of decentralized team attendance tracking, ensuring geofenced check-in credibility, and streamlining workforce schedules and leave approvals.",
    // repoLink: "https://github.com/kulsoomimran/attendify",
    deploymentLink: "https://attendify-coral.vercel.app/",
    imageSrc: "/Attendify.jpg",
    techStack: ["Next.js", "Better Auth", "PostgreSQL", "Tailwind CSS"],
    size: "large",
    badgeText: "Featured Project",
    technicalHighlight: "Geofence verification logic. Verified coordinates matching user GPS input against configured job site radii with accurate Haversine distance computations to prevent off-site check-ins.",
    hasScreenshots: true,
    hasDetailPage: true,
    features: [
      {
        imagePath: "/Projects/attendify/employee_dashboard.png",
        caption: "Employee dashboard offering immediate overview of daily attendance logs, upcoming shifts, and check-in status."
      },
      {
        imagePath: "/Projects/attendify/employee_clock-in.png",
        caption: "Geofence-restricted check-in system verifying real-time coordinates against boundaries."
      },
      {
        imagePath: "/Projects/attendify/admin_dashboard.png",
        caption: "Admin control panel displaying overview metrics, system activity logs, and real-time attendance status."
      },
      {
        imagePath: "/Projects/attendify/admin_attendance.png",
        caption: "Attendance monitoring grid tracking check-in details, status anomalies, and hours worked."
      },
      {
        imagePath: "/Projects/attendify/admin_shifts.png",
        caption: "Shift scheduling dashboard allowing managers to assign, edit, and coordinate team timetables."
      },
      {
        imagePath: "/Projects/attendify/admin_leaves_page.png",
        caption: "Leaves approval workspace where managers can review, approve, or reject employee time-off requests."
      },
      {
        imagePath: "/Projects/attendify/admin_employees.png",
        caption: "Employee directory containing user records, department filters, and profile metadata."
      },
      {
        imagePath: "/Projects/attendify/admin_holidays.png",
        caption: "Holiday calendar configuration workspace for managing official organization closures."
      },
      {
        imagePath: "/Projects/attendify/admin_settings.png",
        caption: "Custom rules panel to adjust shift policies, check-in offsets, and regional settings."
      }
    ]
  },
  {
    slug: "physical-ai-and-humanoid-robotics",
    title: "Physical AI and Humanoid Robotics",
    oneLineSummary: "Interactive AI research documentation combined with a Retrieval-Augmented Generation chatbot.",
    description: "An interactive AI-enhanced platform combining robotics research documentation with a Retrieval-Augmented Generation (RAG) chatbot. Enables context-aware, real-time responses based on custom robotics book contents.",
    problemGoal: "Providing robotics researchers and students with structured documentation coupled with a specialized RAG bot capable of answering deep technical queries directly from the textbook source.",
    // repoLink: "https://github.com/kulsoomimran/physical_ai_and_humanoid_robotics",
    deploymentLink: "https://ai-and-humanoid-robotics-book.vercel.app/",
    imageSrc: "/book.png",
    techStack: ["Docusaurus", "FastAPI", "Cohere Embeddings", "Qdrant Vector Database"],
    size: "medium",
    badgeText: "Featured RAG/AI System",
    technicalHighlight: "Qdrant vector search implementation. Built a semantic retrieval system chunking book texts with Cohere embeddings, storing them in Qdrant, and querying via a FastAPI backend for low-latency context injection.",
    hasScreenshots: true,
    hasDetailPage: true,
    features: [
      {
        imagePath: "/Projects/physical_ai_and_humanoid_robotics/main_page.png",
        caption: "Home landing page introducing readers to the core themes of the Physical AI and Humanoid Robotics research collection."
      },
      {
        imagePath: "/Projects/physical_ai_and_humanoid_robotics/docs_intro.png",
        caption: "Clean, structured documentation pages displaying chapters, markdown-rendered equations, and navigation."
      },
      {
        imagePath: "/Projects/physical_ai_and_humanoid_robotics/chatbot.png",
        caption: "Integrated RAG Chatbot window executing vector queries to fetch relevant book passages for accurate answers."
      },
      {
        imagePath: "/Projects/physical_ai_and_humanoid_robotics/language_toggle.png",
        caption: "Dual-language switch interface enabling translations and content structure adjustment dynamically."
      },
      {
        imagePath: "/Projects/physical_ai_and_humanoid_robotics/light_theme.png",
        caption: "Optimized light theme displaying diagrammatic assets and technical documentation with rich readability."
      }
    ]
  },
  {
    slug: "todo-full-stack",
    title: "Todo Full-Stack Web Application",
    oneLineSummary: "A secure task management application built with FastAPI, Next.js, and JWT.",
    description: "A full-stack task manager leveraging automated database operations. Equipped with a custom secure JWT authentication flow, supporting clean, high-performance task CRUD actions.",
    problemGoal: "Streamlining personal productivity workflows with robust, instant operations and state persistence secured behind modern credential validations.",
    // repoLink: "https://github.com/kulsoomimran/Todo-Full-Stack-Web-Application",
    deploymentLink: "https://todo-full-stack-web-application-sigma.vercel.app/",
    imageSrc: "/todo.png",
    techStack: ["Next.js", "FastAPI", "PostgreSQL (Neon Serverless)", "JWT Authentication"],
    size: "medium",
    badgeText: "Featured Project",
    technicalHighlight: "Custom JWT authentication flow. Developed secure access tokens and session refresh logic with FastAPI backend and Next.js middlewares for server-side auth checks.",
    hasScreenshots: true,
    hasDetailPage: true,
    features: [
      {
        imagePath: "/Projects/task_flow/login.png",
        caption: "Clean authentication interface ensuring encrypted credentials entry and session authorization."
      },
      {
        imagePath: "/Projects/task_flow/dashboard.png",
        caption: "Main interactive workspace containing categorization columns, prioritization badges, and search filters."
      },
      {
        imagePath: "/Projects/task_flow/add_task.png",
        caption: "A modular overlay modal enabling fast task insertions, date deadlines, and tag attachments."
      },
      {
        imagePath: "/Projects/task_flow/sidebar.png",
        caption: "Contextual sidebar allowing rapid filter switching between projects, priorities, and timelines."
      }
    ]
  },
  {
    slug: "nike-clone",
    title: "Nike Clone",
    oneLineSummary: "An immersive e-commerce storefront showcasing interactive filters, cart, and checkout.",
    description: "An e-commerce storefront clone consisting of interactive sign-in pages, product listing filters, detailed item cards, and active cart status updates.",
    problemGoal: "Demonstrating modern responsive UI/UX patterns for a premium storefront, mimicking cart management, and simulating checkout systems.",
    // repoLink: "https://github.com/kulsoomimran/UI-UX-Hackathon",
    deploymentLink: "https://marketplace-builder-hackathon-ruddy.vercel.app/",
    imageSrc: "/Nike.png",
    logoSrc: "/Nike.png",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
    technicalHighlight: "Product listing and filtering architecture. Managed dynamic state transitions for complex category, sizing, and pricing filters in a responsive Next.js grid.",
    hasScreenshots: true,
    hasDetailPage: true,
    features: [
      {
        imagePath: "/Projects/elevate-by-nike/dashboard.png",
        caption: "E-commerce homepage featuring hero promotions, interactive category banners, and dynamic product grids."
      },
      {
        imagePath: "/Projects/elevate-by-nike/products.png",
        caption: "Detailed catalog view rendering inventory cards with real-time responsive styling."
      },
      {
        imagePath: "/Projects/elevate-by-nike/featured_product.png",
        caption: "Product details page displaying sizes, active stock indicators, and full-resolution graphics."
      },
      {
        imagePath: "/Projects/elevate-by-nike/cart.png",
        caption: "Shopping cart drawer calculating prices, item totals, and sub-total summaries dynamically."
      },
      {
        imagePath: "/Projects/elevate-by-nike/CheckOut.png",
        caption: "Multi-step checkout validation form capturing shipping, payment, and order receipts."
      },
      {
        imagePath: "/Projects/elevate-by-nike/JoinUs.png",
        caption: "Secure membership registration and portal access built with Tailwind forms."
      },
      {
        imagePath: "/Projects/elevate-by-nike/wishlist.png",
        caption: "User profile wishlist saving favorited items with instantaneous addition and deletion triggers."
      }
    ]
  },
  {
    slug: "secure-data-encryption",
    title: "Secure Data Encryption",
    oneLineSummary: "A web utility implementing hashing and cryptographic methods to protect sensitive string data.",
    description: "A web utility implementing hashing and cryptographic methods to protect sensitive string data. Features an interactive login portal and dynamic cryptographic conversion feeds.",
    problemGoal: "Making secure hashing algorithms (SHA-256, bcrypt) and symmetric key cryptography accessible via an intuitive interactive dashboard.",
    // repoLink: "https://github.com/kulsoomimran/secure-data-encryption",
    deploymentLink: "https://secure-data-encryption-bykulsoomimran.streamlit.app/",
    imageSrc: "/dataEncryption.jpeg",
    logoSrc: "/dataEncryption.jpeg",
    techStack: ["Python", "Streamlit", "UV"],
    technicalHighlight: "Symmetric encryption handling. Designed secure encryption and decryption tools using cryptography libraries in Python, providing immediate feed feedback.",
    hasScreenshots: true,
    hasDetailPage: true,
    features: [
      {
        imagePath: "/Projects/secure_data_encryption/login.png",
        caption: "Credential protection layer shielding access to the cryptographic control panels."
      },
      {
        imagePath: "/Projects/secure_data_encryption/data_encryption.png",
        caption: "Symmetric text encryption screen demonstrating immediate ciphertext feedback."
      },
      {
        imagePath: "/Projects/secure_data_encryption/menu.png",
        caption: "Collapsible menu enabling seamless transfers between hashing, symmetric ciphering, and public-key panels."
      },
      {
        imagePath: "/Projects/secure_data_encryption/retrieve_encrypted_data.png",
        caption: "Symmetric cipher retrieval panel demonstrating decryptions of previously hashed or encrypted records."
      }
    ]
  },
  {
    slug: "my-blog-web",
    title: "My Blog Web",
    oneLineSummary: "A responsive dynamic blog with structured article layouts and post creation.",
    description: "A responsive dynamic blog with structured article layouts and post creation. Leverages Next.js custom routing for smooth and instant post-rendering transitions.",
    problemGoal: "Providing an extensible blogging space with modular templates that load instantaneously and support seamless content insertions.",
    // repoLink: "https://github.com/kulsoomimran/blog-web",
    deploymentLink: "https://blog-website-mu-three.vercel.app/",
    imageSrc: "/blog.png",
    logoSrc: "/blog.png",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
    technicalHighlight: "Dynamic post rendering. Implemented incremental static regeneration (ISR) and static routing in Next.js to pre-render articles with instantaneous page load times.",
    hasScreenshots: true,
    hasDetailPage: true,
    features: [
      {
        imagePath: "/Projects/my-blog-app/blog.png",
        caption: "Main article feed presenting curated previews, tag categorizations, and reading durations."
      },
      {
        imagePath: "/Projects/my-blog-app/blogs_ai-in-everyday-life.png",
        caption: "Full-page article layout styled with typography optimized for long-form reading comfort."
      },
      {
        imagePath: "/Projects/my-blog-app/dashboard.png",
        caption: "Admin dashboard to create, edit, and organize posts."
      },
      {
        imagePath: "/Projects/my-blog-app/about.png",
        caption: "Stylized biography layout detailing developer background, interests, and contact forms."
      }
    ]
  },
  {
    slug: "python-utilities",
    title: "Python Utilities",
    oneLineSummary: "A suite of four interactive Streamlit tools for passwords, conversion, and data cleaning.",
    description: "A suite of four interactive Streamlit tools: a Password Generator to secure accounts, a Unit Converter for simple parameter shifts, and an Info Scrubber & File Converter for data scrubbing and cross-format conversion.",
    problemGoal: "Solving daily utility tasks — password evaluation, scrubbing csv files, units conversion — in a single modular Streamlit web app.",
    imageSrc: "/fileConvertor.png",
    logoSrc: "/fileConvertor.png",
    techStack: ["Python", "Streamlit", "UV"],
    additionalLinks: [
      {
        label: "Password Strength Meter",
        // repoLink: "https://github.com/kulsoomimran/password-strength-meter",
        deploymentLink: "https://password-strength-meter-by-kulsoom.streamlit.app/",
      },
      {
        label: "Password Gen",
        // repoLink: "https://github.com/kulsoomimran/password-generator.git",
        deploymentLink: "https://python-password-generator.streamlit.app/",
      },
      {
        label: "Unit Converter",
        // repoLink: "https://github.com/kulsoomimran/unit-converter.git",
        deploymentLink: "https://unit-converter-by-kulsoomimran.streamlit.app/",
      },
      {
        label: "Info Scrubber",
        // repoLink: "https://github.com/kulsoomimran/growth-mindset-challenge",
        deploymentLink: "https://growth-mindset-challenge-bykulsoomimran.streamlit.app/",
      }
    ],
    technicalHighlight: "Interactive Streamlit toolkit. Structured multiple standalone utilities in Python utilizing modular script configurations powered by the fast UV package installer.",
    hasScreenshots: true,
    hasDetailPage: true,
    features: [], // Emptied because we are using subProjects field
    subProjects: [
      {
        title: "Password Generator",
        description: "Creates highly secure, custom passwords with adjustable parameters for length, numeric characters, and unique symbols.",
        features: [
          {
            imagePath: "/Projects/python_utilities/password_generator/password_generator.png",
            caption: "Main interface layout of the Password Generator displaying standard parameter parameters."
          },
          {
            imagePath: "/Projects/python_utilities/password_generator/password_generator_digits_special_characters.png",
            caption: "Configuring the password generator to include letters, digits, and special character combinations."
          },
          {
            imagePath: "/Projects/python_utilities/password_generator/password_geenrator_digit.png",
            caption: "Generating numeric digit ciphers using password lengths customizable in Streamlit."
          }
        ]
      },
      {
        title: "Password Strength Meter",
        description: "Evaluates password security levels in real-time, performing complexity entropy tests and providing tips for improvement.",
        features: [
          {
            imagePath: "/Projects/python_utilities/password_strength_meter/psm_screen.png",
            caption: "Initial dashboard interface of the Password Strength Meter utility awaiting credential analysis."
          },
          {
            imagePath: "/Projects/python_utilities/password_strength_meter/psm_moderate_password.png",
            caption: "Warning feedback displaying when user tests passwords that lack recommended special characters."
          },
          {
            imagePath: "/Projects/python_utilities/password_strength_meter/psm_strong_password.png",
            caption: "Success state indicating secure passwords satisfying lowercase, uppercase, numeric, and character counts."
          }
        ]
      },
      {
        title: "Unit Converter",
        description: "Converts dimensions between metric and imperial scales across lengths, mass/weight, and temperatures.",
        features: [
          {
            imagePath: "/Projects/python_utilities/unit_converter/unit_converter.png",
            caption: "Selectable conversion console for selecting conversions across measurement types."
          },
          {
            imagePath: "/Projects/python_utilities/unit_converter/unit_converter_length.png",
            caption: "Converting lengths dynamically between meters, feet, kilometers, and inches."
          },
          {
            imagePath: "/Projects/python_utilities/unit_converter/unit_converter_temperature.png",
            caption: "Executing thermal metric conversions across Celsius, Fahrenheit, and Kelvin bounds."
          },
          {
            imagePath: "/Projects/python_utilities/unit_converter/unit_converter_weight.png",
            caption: "Converting weights dynamically between kilograms, pounds, and ounces."
          }
        ]
      },
      {
        title: "Info Scrubber & File Converter",
        description: "Uploads CSV or Excel workbooks, cleans formatting values, handles columns visualizations, and converts extensions dynamically.",
        features: [
          {
            imagePath: "/Projects/python_utilities/info_scrubber/info_scrubber.png",
            caption: "Uploading excel files into the workbook parser console for formatting adjustments."
          },
          {
            imagePath: "/Projects/python_utilities/info_scrubber/info_scrubber_data_preview.png",
            caption: "Dynamic tabular dataset preview showing clean rows, columns, and structural details."
          },
          {
            imagePath: "/Projects/python_utilities/info_scrubber/info_scrubber_file.png",
            caption: "Formatting conversion panels converting loaded workbook spreadsheets into CSV formats."
          },
          {
            imagePath: "/Projects/python_utilities/info_scrubber/info_scrubber_data_visualization.png",
            caption: "Data visualization dashboard rendering direct visual graphs of numeric column sets."
          }
        ]
      }
    ]
  },
  {
    slug: "library-manager",
    title: "Library Manager",
    oneLineSummary: "A terminal interface tool designed to maintain local text archives and reading progress.",
    description: "A terminal interface tool designed to maintain local text archives and reading progress lists. Provides full cataloging options, text parsing, and persistent storage features.",
    problemGoal: "Providing a command-line interface (CLI) to organize e-books, track active reading statistics, and scan local directories for metadata.",
    deploymentLink: "",
    imageSrc: "/libraryManager.png",
    logoSrc: "/libraryManager.png",
    techStack: ["Python"],
    technicalHighlight: "CLI file parsing. Designed local text archive cataloging utilizing structured file I/O operations and input sanitation protocols.",
    hasScreenshots: false,
    hasDetailPage: false, // CLI project -> skip separate page
    features: []
  },
  {
    slug: "atm",
    title: "ATM",
    oneLineSummary: "A CLI transaction console simulating user logins, deposits, and withdrawal validations.",
    description: "A CLI transaction console simulating user logins, account balance lookups, deposits, and withdrawal validations.",
    problemGoal: "Simulating authentic automated teller machine experiences inside a command-line container, checking validation errors, and storing session states.",
    deploymentLink: "",
    imageSrc: "/atm.jpg",
    logoSrc: "/atm.jpg",
    techStack: ["TypeScript"],
    technicalHighlight: "CLI state machine simulation. Managed transaction processing and state flows using pure TypeScript and terminal-based async inputs.",
    hasScreenshots: false,
    hasDetailPage: false, // CLI project -> skip separate page
    features: []
  }
];

export const getProjectBySlug = (slug: string): ProjectData | undefined => {
  return projectsData.find((p) => p.slug === slug);
};
