import './styles/index.css';
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaDownload,
    FaArrowUp, FaCode, FaRobot, FaMobileAlt, FaServer, FaInfinity,
    FaCheckCircle, FaCertificate, FaGraduationCap, FaBriefcase
} from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

/* ------------------------------------------------------------------ */
/*  DATA — sourced directly from Daniyal's résumé                      */
/* ------------------------------------------------------------------ */

const STATS = [
    { value: "4+", label: "Years Experience" },
    { value: "25%", label: "Faster Test Cycles" },
    { value: "3", label: "Platforms Automated" },
    { value: "8", label: "Certifications" },
];

const SKILL_GROUPS = [
    {
        icon: FaCode,
        title: "Automation Frameworks",
        accent: "from-cyan-400 to-blue-500",
        skills: ["Selenium", "Playwright", "Cypress", "Appium", "Katalon Studio", "XCTest"],
    },
    {
        icon: FaRobot,
        title: "AI-Augmented Testing",
        accent: "from-violet-400 to-fuchsia-500",
        skills: ["Claude Code", "LLM Test Generation", "Prompt Engineering", "Autonomous E2E"],
    },
    {
        icon: FaServer,
        title: "API & Performance",
        accent: "from-emerald-400 to-teal-500",
        skills: ["REST Assured", "Postman", "JMeter", "RabbitMQ"],
    },
    {
        icon: FaCode,
        title: "Programming",
        accent: "from-amber-400 to-orange-500",
        skills: ["Java", "JavaScript", "TypeScript", "Python", "Groovy", "SQL"],
    },
    {
        icon: FaInfinity,
        title: "CI/CD & DevOps",
        accent: "from-sky-400 to-indigo-500",
        skills: ["Jenkins", "GitLab CI", "Git", "Docker"],
    },
    {
        icon: FaMobileAlt,
        title: "Methodologies",
        accent: "from-rose-400 to-pink-500",
        skills: ["Agile / Scrum", "BDD", "TDD", "Test Strategy", "Page Object Model"],
    },
];

const EXPERIENCE = [
    {
        title: "Test Automation Engineer II",
        company: "Next Generation Innovation",
        period: "Jun 2024 – Present",
        points: [
            "Spearheaded an AI-augmented testing initiative pairing Claude Code with Playwright to autonomously author, maintain and run end-to-end tests in CI/CD — slashing manual scripting effort and turnaround time.",
            "Designed reusable AI prompt templates enforcing Page Object Model, BDD/Cucumber and Allure standards, cutting onboarding time for new engineers.",
            "Engineered Selenium-based automation for business-critical web workflows, accelerating regression cycles and sharpening execution accuracy.",
            "Scaled Android automation with Appium and hardened backend coverage with comprehensive REST Assured API suites.",
            "Embedded automated tests into Jenkins and GitLab CI pipelines, shrinking feedback loops for faster, safer deployments.",
        ],
    },
    {
        title: "QA Engineer – Automation",
        company: "Innovative Solutions",
        period: "Feb 2024 – Jun 2024",
        points: [
            "Delivered cross-platform automated coverage for Android, iOS and web using Appium, Selenium and XCTest.",
            "Partnered with cross-functional teams to shape end-to-end test strategies tightly aligned to product goals.",
        ],
    },
    {
        title: "Test Automation Engineer",
        company: "Co-ventech",
        period: "Nov 2022 – Feb 2024",
        points: [
            "Drove cross-platform test automation with Cypress, Selenium, Playwright and Appium, expanding coverage across web and mobile.",
            "Strengthened backend stability through targeted API and performance testing with Postman and JMeter.",
        ],
    },
    {
        title: "SQA Engineer",
        company: "Peak Corporate Solutions",
        period: "Nov 2021 – Oct 2022",
        points: [
            "Elevated code quality and testability by contributing focused feedback throughout peer code reviews.",
            "Accelerated defect resolution by closely tracking fixes and deliverables alongside the development team.",
        ],
    },
];

const PROJECTS = [
    {
        title: "STC Play",
        description: "Gaming platform with comprehensive iOS automation and backend API test infrastructure.",
        tech: ["Appium", "REST Assured", "iOS / XCTest"],
        accent: "from-blue-500/20 to-cyan-500/20",
        ring: "hover:border-cyan-400/50",
    },
    {
        title: "Hyre",
        description: "Service marketplace with cross-platform automation coverage across mobile and web.",
        tech: ["Appium", "Playwright", "Java", "JavaScript"],
        accent: "from-violet-500/20 to-fuchsia-500/20",
        ring: "hover:border-fuchsia-400/50",
    },
    {
        title: "micro1",
        description: "AI recruiting platform — end-to-end suites with deep API integration testing.",
        tech: ["Playwright", "Postman", "API Testing"],
        accent: "from-emerald-500/20 to-teal-500/20",
        ring: "hover:border-emerald-400/50",
    },
];

const CERTIFICATIONS = [
    "Advanced Cypress",
    "Advanced Playwright",
    "Selenium 4 in Java",
    "Mobile Automation with Appium",
    "BDD with SpecFlow",
    "API Security Testing",
    "API Testing & JMeter Overview",
    "Web Element Locator Strategies",
];

const EDUCATION = [
    {
        degree: "B.S. in Computer Science",
        school: "Bahria University, Karachi",
        period: "2019 – 2023",
        detail: "CGPA 3.00",
    },
    {
        degree: "Higher Secondary Certificate (Science)",
        school: "Govt. Degree Science & Commerce College, Malir Cantt.",
        period: "2018",
        detail: "Grade B",
    },
    {
        degree: "Secondary School Certificate (Science)",
        school: "Allied School, Gulshan-e-Hadeed Campus",
        period: "2016",
        detail: "Grade A",
    },
];

const NAV_LINKS = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
];

/* ------------------------------------------------------------------ */
/*  SHARED PRIMITIVES                                                  */
/* ------------------------------------------------------------------ */

const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const Section = ({ id, eyebrow, title, children, className = "" }) => (
    <section id={id} className={`relative py-20 md:py-28 px-6 ${className}`}>
        <div className="max-w-6xl mx-auto">
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                className="mb-14 text-center"
            >
                {eyebrow && (
                    <p className="text-sm font-semibold tracking-[0.25em] uppercase text-cyan-400 mb-3">
                        {eyebrow}
                    </p>
                )}
                <h2 className="text-3xl md:text-5xl font-bold text-white">
                    {title}
                </h2>
                <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
            </motion.div>
            {children}
        </div>
    </section>
);

const Pill = ({ children }) => (
    <span className="px-3 py-1.5 text-sm font-medium rounded-lg bg-white/5 text-slate-200 border border-white/10">
        {children}
    </span>
);

/* ------------------------------------------------------------------ */
/*  NAVBAR                                                             */
/* ------------------------------------------------------------------ */

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
                scrolled ? "bg-slate-950/80 backdrop-blur-lg border-b border-white/10" : "bg-transparent"
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <a href="#top" className="font-bold text-lg text-white tracking-tight">
                    Daniyal<span className="text-cyan-400">.</span>Qureshi
                </a>

                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-slate-300 hover:text-white transition-colors relative group"
                        >
                            {link.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                    <a
                        href="/resume.pdf"
                        download
                        className="text-sm font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 text-white hover:opacity-90 transition-opacity"
                    >
                        Résumé
                    </a>
                </div>

                <button
                    onClick={() => setOpen((v) => !v)}
                    className="md:hidden text-white p-2"
                    aria-label="Toggle menu"
                >
                    <div className="space-y-1.5">
                        <span className={`block w-6 h-0.5 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
                        <span className={`block w-6 h-0.5 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
                        <span className={`block w-6 h-0.5 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
                    </div>
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-950/95 backdrop-blur-lg border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-6 py-4 flex flex-col gap-4">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="text-slate-300 hover:text-white transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="/resume.pdf"
                                download
                                className="text-center font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 text-white"
                            >
                                Download Résumé
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

/* ------------------------------------------------------------------ */
/*  HERO                                                               */
/* ------------------------------------------------------------------ */

const Hero = () => (
    <header id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-24 pb-16">
        {/* animated ambient glows */}
        <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-blob" />
            <div className="absolute top-1/3 right-0 w-96 h-96 bg-violet-500/20 rounded-full blur-[120px] animate-blob animation-delay-2000" />
            <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-[120px] animate-blob animation-delay-4000" />
            <div className="absolute inset-0 bg-grid opacity-[0.15]" />
        </div>

        <div className="max-w-5xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative inline-block mb-8"
            >
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 blur-md opacity-70 animate-spin-slow" />
                <img
                    src="profile.jpg"
                    alt="Daniyal Qureshi"
                    className="relative w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-2 border-white/20"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300"
            >
                <HiSparkles className="text-cyan-400" />
                Early adopter of AI-augmented testing
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold tracking-tight text-white"
            >
                Daniyal Qureshi
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-4 text-2xl md:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-violet-300 to-fuchsia-300"
            >
                Senior QA Automation Engineer
            </motion.p>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-6 max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed"
            >
                I architect scalable automation frameworks across web, mobile and API layers —
                and pair <span className="text-slate-200 font-medium">Claude Code with Playwright</span> to
                autonomously generate and maintain end-to-end tests that ship quality faster.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-9 flex flex-wrap justify-center gap-3"
            >
                <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-medium shadow-lg shadow-cyan-500/20 hover:opacity-90 transition-opacity">
                    <FaEnvelope /> Get in touch
                </a>
                <a href="/resume.pdf" download className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-medium hover:bg-white/10 transition-colors">
                    <FaDownload /> Résumé
                </a>
                <a href="https://www.linkedin.com/in/daniyalquraishi/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-medium hover:bg-white/10 transition-colors">
                    <FaLinkedin /> LinkedIn
                </a>
                <a href="https://github.com/daniyalquraishi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-medium hover:bg-white/10 transition-colors">
                    <FaGithub /> GitHub
                </a>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-500"
            >
                <span className="inline-flex items-center gap-2"><FaMapMarkerAlt className="text-cyan-400" /> Karachi, Pakistan</span>
                <span className="inline-flex items-center gap-2"><FaPhone className="text-cyan-400" /> +92 334 324 1003</span>
            </motion.div>
        </div>
    </header>
);

/* ------------------------------------------------------------------ */
/*  APP                                                                */
/* ------------------------------------------------------------------ */

function App() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const onScroll = () => setShowScrollTop(window.scrollY > 400);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-slate-300 selection:bg-cyan-500/30">
            <Navbar />
            <Hero />

            {/* STATS */}
            <section className="relative px-6 -mt-10">
                <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
                    {STATS.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                            className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center backdrop-blur-sm"
                        >
                            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-violet-300">
                                {stat.value}
                            </div>
                            <div className="mt-2 text-sm text-slate-400">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ABOUT */}
            <Section id="about" eyebrow="Who I am" title="About Me">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-80px" }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <p className="text-lg text-slate-400 leading-relaxed">
                        I'm a results-driven <span className="text-slate-200 font-medium">Senior QA Automation Engineer</span> with
                        4+ years architecting scalable automation frameworks across web, mobile and API layers using
                        Selenium, Playwright, Cypress and Appium. I've cut test execution time by
                        <span className="text-cyan-300 font-medium"> 25%</span> and widened coverage through robust,
                        CI/CD-integrated suites.
                    </p>
                    <p className="mt-5 text-lg text-slate-400 leading-relaxed">
                        As an early adopter of AI-augmented testing, I pair <span className="text-slate-200 font-medium">Claude Code
                        with Playwright</span> to autonomously generate and maintain end-to-end tests — accelerating delivery
                        while keeping quality high. I thrive in fast-paced Agile teams where speed, quality and reliability
                        drive release confidence.
                    </p>
                </motion.div>
            </Section>

            {/* SKILLS */}
            <Section id="skills" eyebrow="What I use" title="Technical Expertise" className="bg-white/[0.02]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {SKILL_GROUPS.map((group, i) => (
                        <motion.div
                            key={group.title}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ delay: (i % 3) * 0.08 }}
                            className="group rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300"
                        >
                            <div className={`inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${group.accent} mb-4`}>
                                <group.icon className="text-white text-lg" />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-4">{group.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <Pill key={skill}>{skill}</Pill>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* EXPERIENCE */}
            <Section id="experience" eyebrow="Where I've worked" title="Experience">
                <div className="relative max-w-3xl mx-auto">
                    {/* timeline line */}
                    <div className="absolute left-3 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/60 via-violet-500/40 to-transparent" />
                    <div className="space-y-10">
                        {EXPERIENCE.map((job, i) => (
                            <motion.div
                                key={job.title + job.company}
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ delay: i * 0.05 }}
                                className="relative pl-12 md:pl-16"
                            >
                                <span className="absolute left-0 md:left-1 top-1.5 flex items-center justify-center w-7 h-7 rounded-full bg-slate-950 border-2 border-cyan-400">
                                    <FaBriefcase className="text-cyan-400 text-xs" />
                                </span>
                                <div className="rounded-2xl bg-white/5 border border-white/10 p-6 hover:border-white/20 transition-colors">
                                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                                        <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                                        <span className="text-sm text-slate-500 whitespace-nowrap">{job.period}</span>
                                    </div>
                                    <p className="text-cyan-300 font-medium mb-4">{job.company}</p>
                                    <ul className="space-y-2.5">
                                        {job.points.map((point, idx) => (
                                            <li key={idx} className="flex gap-3 text-slate-400 leading-relaxed">
                                                <FaCheckCircle className="text-cyan-400/70 mt-1 shrink-0 text-sm" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* PROJECTS */}
            <Section id="projects" eyebrow="What I've built" title="Featured Projects" className="bg-white/[0.02]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {PROJECTS.map((project, i) => (
                        <motion.div
                            key={project.title}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -6 }}
                            className={`relative rounded-2xl bg-gradient-to-br ${project.accent} border border-white/10 ${project.ring} p-6 transition-colors duration-300 overflow-hidden`}
                        >
                            <div className="absolute inset-0 bg-slate-950/40" />
                            <div className="relative">
                                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                                <p className="text-slate-300 leading-relaxed mb-5">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white border border-white/15">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* EDUCATION + CERTIFICATIONS */}
            <Section id="education" eyebrow="Foundations" title="Education & Certifications">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Education */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-40px" }}
                    >
                        <h3 className="flex items-center gap-3 text-xl font-semibold text-white mb-6">
                            <FaGraduationCap className="text-cyan-400" /> Education
                        </h3>
                        <div className="space-y-4">
                            {EDUCATION.map((edu) => (
                                <div key={edu.degree} className="rounded-2xl bg-white/5 border border-white/10 p-5">
                                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                                        <h4 className="font-semibold text-white">{edu.degree}</h4>
                                        <span className="text-sm text-slate-500">{edu.period}</span>
                                    </div>
                                    <p className="text-slate-400 text-sm mt-1">{edu.school}</p>
                                    <p className="text-cyan-300 text-sm mt-1">{edu.detail}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Certifications */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ delay: 0.1 }}
                    >
                        <h3 className="flex items-center gap-3 text-xl font-semibold text-white mb-6">
                            <FaCertificate className="text-violet-400" /> Certifications
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {CERTIFICATIONS.map((cert) => (
                                <div key={cert} className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-4">
                                    <FaCertificate className="text-violet-400 shrink-0" />
                                    <span className="text-sm text-slate-200">{cert}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* CONTACT */}
            <Section id="contact" eyebrow="Let's talk" title="Get In Touch" className="bg-white/[0.02]">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-40px" }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <p className="text-lg text-slate-400 mb-8">
                        I'm always open to discussing test automation, AI-augmented QA workflows, or new opportunities.
                        Let's build something reliable together.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="mailto:daniyalqureshi212@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-medium shadow-lg shadow-cyan-500/20 hover:opacity-90 transition-opacity">
                            <FaEnvelope /> daniyalqureshi212@gmail.com
                        </a>
                        <a href="tel:+923343241003" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/15 text-white font-medium hover:bg-white/10 transition-colors">
                            <FaPhone /> +92 334 324 1003
                        </a>
                    </div>
                    <div className="mt-8 flex justify-center gap-5">
                        <a href="https://www.linkedin.com/in/daniyalquraishi/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400/50 transition-colors">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/daniyalquraishi" target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400/50 transition-colors">
                            <FaGithub />
                        </a>
                        <a href="mailto:daniyalqureshi212@gmail.com" className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-400/50 transition-colors">
                            <FaEnvelope />
                        </a>
                    </div>
                </motion.div>
            </Section>

            {/* FOOTER */}
            <footer className="border-t border-white/10 py-8 px-6">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-slate-500">
                        © {new Date().getFullYear()} Daniyal Qureshi · Senior QA Automation Engineer
                    </p>
                    <p className="text-sm text-slate-600">
                        Built with React, Tailwind & Framer Motion
                    </p>
                </div>
            </footer>

            {/* SCROLL TO TOP */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="fixed bottom-8 right-8 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow-lg shadow-cyan-500/30 hover:scale-110 transition-transform"
                        aria-label="Scroll to top"
                    >
                        <FaArrowUp />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;
