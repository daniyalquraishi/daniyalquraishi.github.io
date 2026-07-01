import './styles/index.css';
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaDownload,
    FaArrowUp, FaCode, FaRobot, FaMobileAlt, FaServer, FaInfinity,
    FaCheckCircle, FaCertificate, FaGraduationCap, FaBriefcase, FaGamepad,
    FaClipboardCheck
} from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

/* ------------------------------------------------------------------ */
/*  DATA — sourced directly from Daniyal's résumé & LinkedIn           */
/* ------------------------------------------------------------------ */

const STATS = [
    { value: "5+", label: "Years Experience" },
    { value: "10+", label: "Products Tested" },
    { value: "11", label: "Certifications" },
    { value: "3", label: "Platforms Automated" },
];

const SKILL_GROUPS = [
    {
        icon: FaCode,
        title: "QA Automation",
        accent: "from-cyan-400 to-blue-500",
        skills: ["Selenium", "Playwright", "Cypress", "Appium", "Katalon Studio", "XCTest", "Framework Design", "Page Object Model"],
    },
    {
        icon: FaRobot,
        title: "AI-Augmented Testing",
        accent: "from-violet-400 to-fuchsia-500",
        skills: ["Claude Code", "LLM Test Generation", "Prompt Engineering", "Autonomous E2E Suites", "Self-Healing Tests"],
    },
    {
        icon: FaServer,
        title: "API & Performance Testing",
        accent: "from-emerald-400 to-teal-500",
        skills: ["REST Assured", "Postman", "JMeter", "RabbitMQ", "Load & Stress Testing", "API Security"],
    },
    {
        icon: FaClipboardCheck,
        title: "Manual & Quality Engineering",
        accent: "from-rose-400 to-pink-500",
        skills: ["Manual Testing", "Exploratory Testing", "Regression Testing", "Test Strategy & Planning", "Release Validation", "Defect Management"],
    },
    {
        icon: FaInfinity,
        title: "CI/CD & DevOps",
        accent: "from-sky-400 to-indigo-500",
        skills: ["Jenkins", "GitLab CI", "Git", "Docker", "Pipeline Integration", "Continuous Testing"],
    },
    {
        icon: FaMobileAlt,
        title: "Programming & Methodologies",
        accent: "from-amber-400 to-orange-500",
        skills: ["Java", "JavaScript", "TypeScript", "Python", "SQL", "Agile / Scrum", "BDD / TDD"],
    },
];

const EXPERIENCE = [
    {
        title: "Test Automation Engineer II",
        company: "Next Generation Innovation",
        period: "Jun 2024 – Present",
        points: [
            "Spearheaded an AI-augmented testing initiative to autonomously author, maintain and run end-to-end tests in CI/CD — slashing manual scripting effort and turnaround time.",
            "Designed reusable AI prompt templates enforcing Page Object Model, BDD/Cucumber and Allure standards, cutting onboarding time for new engineers.",
            "Engineered Selenium-based automation for business-critical web workflows, accelerating regression cycles.",
            "Scaled Android automation with Appium and hardened backend coverage with REST Assured API suites.",
            "Embedded automated tests into Jenkins and GitLab CI pipelines, shrinking feedback loops for faster, safer deployments.",
        ],
    },
    {
        title: "QA Automation Engineer",
        company: "USEA Global · Contract, Remote (Singapore)",
        period: "Aug 2022 – Jun 2024",
        points: [
            "Spearheaded end-to-end test automation for web and backend services, ensuring high-quality releases.",
            "Managed and maintained the CI/CD pipeline for automation code using Jenkins.",
            "Conducted performance testing with JMeter to validate system stability under load.",
            "Oversaw and validated all release cycles, ensuring seamless delivery with minimal rollback incidents.",
            "Collaborated with dev and product teams to resolve production issues, improving deployment success and system reliability.",
        ],
    },
    {
        title: "QA Engineer – Automation",
        company: "Innovative Solutions",
        period: "Feb 2024 – Jun 2024",
        points: [
            "Delivered cross-platform automated coverage for Android, iOS and web using Appium, Selenium and XCTest.",
            "Partnered with cross-functional teams to shape end-to-end test strategies aligned to product goals.",
        ],
    },
    {
        title: "Test Automation Engineer",
        company: "Co-ventech",
        period: "Nov 2022 – Feb 2024",
        points: [
            "Drove cross-platform test automation with Cypress, Selenium, Playwright and Appium across web and mobile.",
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
        role: "QA Automation & Testing",
        description: "Gaming & shop platform — automated API tests with REST Assured, performance testing with JMeter (dynamic token handling), and Selenium web automation in a Spring Boot framework.",
        tech: ["REST Assured", "JMeter", "Selenium", "Spring Boot"],
        accent: "from-blue-500/20 to-cyan-500/20",
        ring: "hover:border-cyan-400/50",
    },
    {
        title: "STC TV",
        role: "QA Automation & Testing",
        description: "Streaming platform — backend API testing, database validation for data consistency, and RabbitMQ message-queue verification to ensure reliable message flow.",
        tech: ["REST Assured", "RabbitMQ", "SQL", "Log Analysis"],
        accent: "from-indigo-500/20 to-blue-500/20",
        ring: "hover:border-indigo-400/50",
    },
    {
        title: "Hyre",
        role: "QA Automation & Testing",
        description: "Freelance marketplace — designed automated test suites for Android, iOS and web, prioritizing automation by risk and usage to streamline testing cycles.",
        tech: ["Appium", "Selenium", "XCTest", "Playwright"],
        accent: "from-violet-500/20 to-fuchsia-500/20",
        ring: "hover:border-fuchsia-400/50",
    },
    {
        title: "micro1",
        role: "QA Automation & Testing",
        description: "AI recruitment platform — created test plans, cases and scripts from API documentation, validating API functionality against specifications.",
        tech: ["Playwright", "Postman", "API Testing"],
        accent: "from-emerald-500/20 to-teal-500/20",
        ring: "hover:border-emerald-400/50",
    },
    {
        title: "Revibe",
        role: "QA Automation & Testing",
        description: "Backend + UI test automation wired into Jenkins CI — with Slack and email notifications and a Google Sheets logger reporting automation results after every run.",
        tech: ["UI Automation", "Backend Automation", "Jenkins", "Slack & Email Alerts", "Google Sheets Logger"],
        accent: "from-sky-500/20 to-blue-500/20",
        ring: "hover:border-sky-400/50",
    },
    {
        title: "Vimient",
        role: "QA Automation & Testing",
        description: "Healthcare application — developed automation scripts for web and mobile, working closely with dev and testing teams to identify and resolve issues.",
        tech: ["Selenium", "Appium", "Mobile Testing"],
        accent: "from-teal-500/20 to-cyan-500/20",
        ring: "hover:border-teal-400/50",
    },
    {
        title: "Lineup.ai",
        role: "QA & Requirements",
        description: "Forecasting application — validated tickets and stories in a fast-paced Agile environment, refining user stories and defining testable acceptance criteria.",
        tech: ["Agile", "Acceptance Criteria", "Story Refinement"],
        accent: "from-amber-500/20 to-orange-500/20",
        ring: "hover:border-amber-400/50",
    },
    {
        title: "Juicy Drop Merge",
        role: "Design & Development",
        description: "A merge-style casual game I designed and developed end-to-end — game mechanics, visuals and gameplay logic built from scratch.",
        tech: ["Game Design", "Development", "UI/UX"],
        accent: "from-rose-500/20 to-pink-500/20",
        ring: "hover:border-rose-400/50",
    },
    {
        title: "SIKE — Mood Prediction",
        role: "ML Final Year Project",
        description: "Machine learning system predicting a user's mood from questionnaire responses — implemented and evaluated multiple ML algorithms to classify emotional states.",
        tech: ["Python", "Machine Learning", "Classification"],
        accent: "from-purple-500/20 to-violet-500/20",
        ring: "hover:border-purple-400/50",
    },
];

const CERTIFICATIONS = [
    { name: "Continuous Integration with Jenkins", issuer: "TestAutomationU", date: "Feb 2025" },
    { name: "BDD with SpecFlow", issuer: "TestAutomationU", date: "Feb 2025" },
    { name: "Advanced Playwright", issuer: "TestAutomationU", date: "Oct 2023" },
    { name: "Selenium 4 in Java", issuer: "TestAutomationU", date: "Sep 2023" },
    { name: "Advanced Cypress", issuer: "TestAutomationU", date: "May 2023" },
    { name: "Web Element Locator Strategies", issuer: "TestAutomationU", date: "Apr 2023" },
    { name: "Mobile Automation with Appium in JavaScript", issuer: "TestAutomationU", date: "Mar 2023" },
    { name: "API Testing and Basic Overview of JMeter", issuer: "10Pearls University", date: "Mar 2023" },
    { name: "Automating in the Browser Using JavaScript", issuer: "TestAutomationU", date: "Mar 2023" },
    { name: "Setting a Foundation for Successful Test Automation", issuer: "TestAutomationU", date: "Mar 2023" },
    { name: "API Security Testing Guide by The XSS Rat", issuer: "Udemy", date: "Mar 2023" },
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
                and harness <span className="text-slate-200 font-medium">AI-augmented workflows</span> to
                generate, maintain and scale end-to-end testing that ships quality faster.
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
                        5+ years architecting scalable automation frameworks across web, mobile and API layers using
                        Selenium, Playwright, Cypress and Appium — dramatically accelerating regression cycles and
                        widening coverage through robust, CI/CD-integrated suites.
                    </p>
                    <p className="mt-5 text-lg text-slate-400 leading-relaxed">
                        As an early adopter of <span className="text-slate-200 font-medium">AI-augmented testing</span>, I use
                        LLM-driven workflows to autonomously generate and maintain end-to-end tests — accelerating delivery
                        while keeping quality high. From manual exploratory testing to performance validation under load,
                        I thrive in fast-paced Agile teams where speed, quality and reliability drive release confidence.
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
            <Section id="projects" eyebrow="What I've worked on" title="Featured Projects" className="bg-white/[0.02]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PROJECTS.map((project, i) => (
                        <motion.div
                            key={project.title}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ delay: (i % 3) * 0.08 }}
                            whileHover={{ y: -6 }}
                            className={`relative rounded-2xl bg-gradient-to-br ${project.accent} border border-white/10 ${project.ring} p-6 transition-colors duration-300 overflow-hidden`}
                        >
                            <div className="absolute inset-0 bg-slate-950/40" />
                            <div className="relative">
                                <div className="flex items-start justify-between gap-2 mb-2">
                                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                    {project.role === "Design & Development" && (
                                        <FaGamepad className="text-rose-300 text-xl shrink-0 mt-1" />
                                    )}
                                </div>
                                <p className="inline-block px-2.5 py-0.5 mb-3 text-xs font-semibold rounded-full bg-white/10 text-cyan-200 border border-white/15">
                                    {project.role}
                                </p>
                                <p className="text-slate-300 text-sm leading-relaxed mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/10 text-white border border-white/15">
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
                        className="flex flex-col"
                    >
                        <h3 className="flex items-center gap-3 text-xl font-semibold text-white mb-6">
                            <FaGraduationCap className="text-cyan-400" /> Education
                        </h3>
                        <div className="flex-1 rounded-2xl bg-white/5 border border-white/10 p-6">
                            <div className="flex flex-wrap items-baseline justify-between gap-2">
                                <h4 className="text-lg font-semibold text-white">B.S. in Computer Science</h4>
                                <span className="text-sm text-slate-500">2019 – 2023</span>
                            </div>
                            <p className="text-cyan-300 font-medium mt-1">Bahria University, Karachi</p>
                            <p className="text-slate-400 mt-4 leading-relaxed">
                                Built a strong engineering foundation across <span className="text-slate-200">data structures &
                                algorithms, database systems, software engineering, cloud computing, operating systems and
                                machine learning</span> — culminating in an ML-based final year project (SIKE, mood
                                prediction) that applied classification algorithms to real behavioral data.
                            </p>
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
                            <FaCertificate className="text-violet-400" /> Certifications ({CERTIFICATIONS.length})
                        </h3>
                        <div className="space-y-2.5 max-h-[420px] overflow-y-auto pr-1 cert-scroll">
                            {CERTIFICATIONS.map((cert) => (
                                <div key={cert.name} className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-3.5 hover:border-violet-400/40 transition-colors">
                                    <FaCertificate className="text-violet-400 shrink-0" />
                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm font-medium text-slate-200 leading-snug">{cert.name}</p>
                                        <p className="text-xs text-slate-500 mt-0.5">{cert.issuer} · {cert.date}</p>
                                    </div>
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
                    <div className="flex gap-4">
                        <a href="https://www.linkedin.com/in/daniyalquraishi/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                            <FaLinkedin className="w-5 h-5" />
                        </a>
                        <a href="https://github.com/daniyalquraishi" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                            <FaGithub className="w-5 h-5" />
                        </a>
                    </div>
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
