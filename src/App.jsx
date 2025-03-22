import './styles/index.css';
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaDownload, FaArrowUp } from 'react-icons/fa';

function App() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Card Component
    const Card = ({ title, children }) => {
        return (
            <motion.div
                className="mb-8 bg-white rounded-xl p-6 w-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.01 }}
            >
                <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">{title}</h2>
                <div className="mt-4 text-gray-600">
                    {children}
                </div>
            </motion.div>
        );
    };

    // Experience Item Component
    const ExperienceItem = ({ title, company, location, period, points, website }) => {
        return (
            <div className="mb-6 last:mb-0">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                        <div className="space-y-1">
                            {website ? (
                                <a href={website} target="_blank" rel="noopener noreferrer" className="text-[#2563eb] font-medium hover:text-blue-600 hover:underline">
                                    {company}
                                </a>
                            ) : (
                                <p className="text-[#2563eb] font-medium">{company}</p>
                            )}
                            <p className="text-gray-600 text-sm">{location}</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-gray-500 text-sm">{period}</p>
                    </div>
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {points.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </div>
        );
    };

    // Project Item Component
    const ProjectItem = ({ title, description, tech }) => {
        return (
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 mb-2">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {tech.map((item, index) => (
                        <span key={index} className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-12">   
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-12 bg-white p-8 rounded-xl shadow-lg relative"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.a
                        href="/resume.pdf"
                        download
                        className="absolute top-4 right-4 inline-flex items-center gap-1.5 bg-blue-500 text-white px-3 py-1.5 rounded-lg hover:bg-blue-600 transition-colors duration-300 shadow-sm hover:shadow-md text-xs font-medium"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaDownload className="w-3 h-3" />
                        <span>Resume</span>
                    </motion.a>
                    <img
                        src="profile.jpg"
                        alt="Daniyal Qureshi"
                        className="mx-auto mb-6 rounded-full shadow-lg border-4 border-blue-500 w-32 h-32 object-cover"
                    />
                    <h1 className="text-4xl font-bold text-gray-800 mb-3">Daniyal Qureshi</h1>
                    <p className="text-xl text-gray-600 mb-4">
                        Test Automation Engineer | Quality Assurance Specialist
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-gray-600">
                        <a href="mailto:daniyalqureshi212@gmail.com" className="flex items-center gap-2 hover:text-blue-500 whitespace-nowrap">
                            <FaEnvelope />
                            <span>daniyalqureshi212@gmail.com</span>
                        </a>
                        <a href="tel:+923343241003" className="flex items-center gap-2 hover:text-blue-500 whitespace-nowrap">
                            <FaPhone />
                            <span>+92 334 324 1003</span>
                        </a>
                        <div className="flex items-center gap-2 whitespace-nowrap">
                            <FaMapMarkerAlt />
                            <span>Scheme 33, Karachi</span>
                        </div>
                        <a href="https://www.linkedin.com/in/daniyalquraishi/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-500 whitespace-nowrap">
                            <FaLinkedin />
                            <span>LinkedIn</span>
                        </a>
                        <a href="https://github.com/daniyalquraishi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-500 whitespace-nowrap">
                            <FaGithub />
                            <span>GitHub</span>
                        </a>
                    </div>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    <Card title="Summary">
                        <p className="text-gray-700 leading-relaxed">
                            Dynamic Test Automation Engineer with 3+ years of experience enhancing software quality and testing efficiency. 
                            Proficient in designing and executing automated test scripts for web and mobile applications using Selenium, 
                            Appium, and Playwright. Skilled in integrating automation within CI/CD pipelines to optimize deployment processes. 
                            Adept at creating test strategies and frameworks that reduce testing cycles, ensuring robust and high-quality 
                            application performance.
                        </p>
                    </Card>

                    <Card title="Experience">
                        <ExperienceItem
                            title="Test Automation Engineer II"
                            company="NextGeni"
                            location="Hybrid"
                            period="June 2024 - Present"
                            website="https://nextgeni.com"
                            points={[
                                "Automated web testing using Selenium, improving testing speed and accuracy.",
                                "Created Android automation scripts with Appium, ensuring seamless app performance.",
                                "Built and maintained API test suites with RestAssured, enhancing API testing coverage.",
                                "Integrated testing into CI/CD pipelines, improving deployment efficiency.",
                                "Optimized test frameworks, reducing execution time by 25%."
                            ]}
                        />
                        <ExperienceItem
                            title="QA Engineer - Automation"
                            company="Innovative Solutions"
                            location="Karachi"
                            period="Feb 2024 - June 2024"
                            points={[
                                "Developed and executed automated test scripts for Android, iOS, and web applications.",
                                "Utilized tools like Appium, Selenium, and XCTest to create efficient test suites.",
                                "Collaborated with cross-functional teams to define comprehensive test strategies.",
                                "Enhanced test automation coverage and efficiency."
                            ]}
                        />
                        <ExperienceItem
                            title="Test Automation Engineer"
                            company="Co-Ventech"
                            location="Karachi"
                            period="Nov 2022 - Jan 2024"
                            points={[
                                "Automated testing using Cypress, Selenium, Playwright, and Appium.",
                                "Conducted API testing with JMeter and Postman to ensure backend stability.",
                                "Developed automated test frameworks for consistent releases."
                            ]}
                        />
                        <ExperienceItem
                            title="SQA Engineer"
                            company="Peak Corporate Solutions"
                            location="Karachi"
                            period="Nov 2021 - Oct 2022"
                            points={[
                                "Participated in code reviews and provided feedback on code quality and testability.",
                                "Managed deployments and non-prod environments.",
                                "Monitored defects, fixes, and deliverables in collaboration with the development team."
                            ]}
                        />
                    </Card>

                    <Card title="Education & Certifications">
                        <div className="grid gap-6">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Education</h3>
                                <div className="space-y-1">
                                    <p className="text-blue-600 font-medium">Bachelors in Computer Science</p>
                                    <p className="text-gray-600">Bahria University, Karachi</p>
                                    <p className="text-gray-600">Feb 2019 - Dec 2022</p>
                                    <p className="text-gray-600">CGPA: 3.0</p>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Certifications</h3>
                                <div className="space-y-1">
                                    <p className="text-gray-700">• Selenium 4 in Java - TestAutomationU</p>
                                    <p className="text-gray-700">• API Security Testing Guide - Udemy</p>
                                    <p className="text-gray-700">• Mobile Automation with Appium (JavaScript) - Udemy</p>
                                    <p className="text-gray-700">• Advanced Playwright - TestAutomationU</p>
                                    <p className="text-gray-700">• Web Development - Digitech Learning System</p>
                                    <p className="text-gray-700">• Information Technology - Digitech Learning System</p>
                                    <p className="text-gray-700">• React Native Expo for Mobile Apps - Udemy</p>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card title="Projects">
                        <div className="grid gap-4">
                            <ProjectItem
                                title="STC Play"
                                description="Gaming Application: iOS automation with Appium and backend testing with RestAssured."
                                tech={["Appium", "RestAssured", "iOS Testing"]}
                            />
                            <ProjectItem
                                title="Hyre"
                                description="Service Providing App: Automated Android and web applications using Appium (Java) and Playwright (JavaScript)."
                                tech={["Appium", "Playwright", "Java", "JavaScript"]}
                            />
                            <ProjectItem
                                title="micro1"
                                description="Recruiting Platform: Developed end-to-end testing with Playwright and API testing using Postman."
                                tech={["Playwright", "Postman", "API Testing"]}
                            />
                        </div>
                    </Card>

                    <Card title="Awards & Recognition">
                        <div className="grid gap-4">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Professional Achievements</h3>
                                <div className="space-y-2">
                                    <p className="text-gray-700">• Test Automation Bootcamp - Co-Ventech</p>
                                    <p className="text-gray-700">• Certificate of Appreciation (ITCN Asia Expo 2022) - MARG ERP</p>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card title="Languages">
                        <div className="grid gap-4">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <div className="flex flex-wrap gap-4">
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-800 font-medium">English</span>
                                        <span className="text-gray-600">(Professional)</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-gray-800 font-medium">Urdu</span>
                                        <span className="text-gray-600">(Native)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card title="Interests">
                        <div className="grid gap-4">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Test Automation</span>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Mobile Testing</span>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">API Testing</span>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Game Development</span>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">CI/CD</span>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card title="Technical Skills">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-gray-800 mb-2">Languages</h3>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Java</span>
                                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">JavaScript</span>
                                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Python</span>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-gray-800 mb-2">Test Automation Tools</h3>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Selenium</span>
                                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Appium</span>
                                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Playwright</span>
                                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Cypress</span>
                                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Katalon</span>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-gray-800 mb-2">API Testing Tools</h3>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">RestAssured</span>
                                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">JMeter</span>
                                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Postman</span>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="font-semibold text-gray-800 mb-2">CI/CD & Others</h3>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Jenkins</span>
                                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">GitLab CI/CD</span>
                                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Rainforest QA</span>
                                    <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Git</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>

            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-8 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300 z-50"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaArrowUp className="w-6 h-6" />
                    </motion.button>
                )}
            </AnimatePresence>

            <footer className="mt-16 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center md:text-left">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Daniyal Qureshi</h3>
                            <p className="text-gray-600">Test Automation Engineer</p>
                            <p className="text-gray-600">Karachi, Pakistan</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Connect</h3>
                            <div className="flex justify-center gap-4">
                                <a href="https://www.linkedin.com/in/daniyalquraishi/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition-colors">
                                    <FaLinkedin className="w-6 h-6" />
                                </a>
                                <a href="https://github.com/daniyalquraishi" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 transition-colors">
                                    <FaGithub className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                        <div className="text-center md:text-right">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Contact</h3>
                            <a href="mailto:daniyalqureshi212@gmail.com" className="text-gray-600 hover:text-blue-500 transition-colors block mb-2">
                                daniyalqureshi212@gmail.com
                            </a>
                            <a href="tel:+923343241003" className="text-gray-600 hover:text-blue-500 transition-colors block">
                                +92 334 324 1003
                            </a>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-100 text-center text-gray-600">
                        <p>© {new Date().getFullYear()} Daniyal Qureshi. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
