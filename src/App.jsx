import './styles/index.css';
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaDownload, FaArrowUp, FaCode, FaTools, FaCertificate } from 'react-icons/fa';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
                {/* Hero Section */}
                <motion.div
                    className="text-center mb-16 bg-white p-12 rounded-xl shadow-lg relative overflow-hidden"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Enhanced background design */}
                    <div className="absolute top-0 left-0 w-full h-full">
                        {/* Main gradient */}
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-pink-50/50"></div>
                        
                        {/* Animated background circles */}
                        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                        <div className="absolute top-0 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                        
                        {/* Subtle grid pattern */}
                        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:20px_20px]"></div>
                    </div>

                    {/* Profile picture section with enhanced design */}
                    <div className="relative z-10">
                        <div className="relative inline-block">
                            {/* Outer rotating rings */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full animate-spin-slow opacity-75 blur-sm"></div>
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full animate-spin-slow opacity-50 blur-sm" style={{ animationDirection: 'reverse', animationDuration: '5s' }}></div>
                            
                            {/* Glowing effect */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-75 blur-md group-hover:opacity-100 transition duration-1000"></div>
                            
                            {/* Profile picture container */}
                            <div className="relative p-1 bg-white rounded-full">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                                <img
                                    src="profile.jpg"
                                    alt="Daniyal Qureshi"
                                    className="w-40 h-40 rounded-full object-cover shadow-2xl relative z-10"
                                />
                            </div>

                            {/* Floating elements */}
                            <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-200 rounded-full blur-sm animate-float"></div>
                            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-200 rounded-full blur-sm animate-float animation-delay-1000"></div>
                            <div className="absolute top-0 right-0 w-6 h-6 bg-pink-200 rounded-full blur-sm animate-float animation-delay-2000"></div>
                        </div>

                        {/* Content with enhanced typography */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mt-8"
                        >
                            <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                                Daniyal Qureshi
                            </h1>
                            <p className="text-2xl font-medium mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                                Crafting Quality Through Automation
                            </p>
                            <p className="max-w-2xl mx-auto text-gray-600 mb-8 leading-relaxed">
                                I'm a Test Automation Engineer passionate about creating robust testing solutions 
                                that ensure software quality. Specializing in web and mobile automation, 
                                I transform complex testing challenges into efficient, automated processes.
                            </p>
                            
                            {/* Enhanced buttons */}
                            <div className="flex justify-center gap-4 flex-wrap">
                                <motion.a 
                                    href="https://www.linkedin.com/in/daniyalquraishi/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white overflow-hidden shadow-lg hover:shadow-colored transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                    <FaLinkedin className="relative z-10" />
                                    <span className="relative z-10">LinkedIn</span>
                                </motion.a>

                                <motion.a 
                                    href="https://github.com/daniyalquraishi" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gray-700 via-gray-800 to-black text-white overflow-hidden shadow-lg hover:shadow-colored transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                    <FaGithub className="relative z-10" />
                                    <span className="relative z-10">GitHub</span>
                                </motion.a>

                                <motion.a 
                                    href="/resume.pdf" 
                                    download
                                    className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700 text-white overflow-hidden shadow-lg hover:shadow-colored transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                    <FaDownload className="relative z-10" />
                                    <span className="relative z-10">Resume</span>
                                </motion.a>

                                <motion.a 
                                    href="mailto:daniyalqureshi212@gmail.com"
                                    className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gray-700 via-gray-800 to-black text-white overflow-hidden shadow-lg hover:shadow-colored transition-all duration-300"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                    <FaEnvelope className="relative z-10" />
                                    <span className="relative z-10">Email</span>
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8">
                    {/* Featured Projects Section */}
                    <motion.div
                        className="col-span-full mb-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Projects</h2>
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            initialSlide={2}
                            loop={true}
                            coverflowEffect={{
                                rotate: 20,
                                stretch: 0,
                                depth: 200,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            navigation={true}
                            modules={[EffectCoverflow, Pagination, Navigation]}
                            className="mySwiper"
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 20
                                },
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 30
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 40
                                }
                            }}
                        >
                            <SwiperSlide>
                                <ProjectCard
                                    title="STC Play"
                                    description="Gaming Application with comprehensive iOS automation and backend testing infrastructure."
                                    tech={["Appium", "RestAssured", "iOS Testing"]}
                                    className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProjectCard
                                    title="Hyre"
                                    description="Service platform with cross-platform automation coverage using modern testing tools."
                                    tech={["Appium", "Playwright", "Java", "JavaScript"]}
                                    className="bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProjectCard
                                    title="micro1"
                                    description="End-to-end testing solution for a recruiting platform with API integration testing."
                                    tech={["Playwright", "Postman", "API Testing"]}
                                    className="bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-700"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProjectCard
                                    title="TestHub Pro"
                                    description="Centralized testing platform with real-time reporting and analytics dashboard."
                                    tech={["React", "Node.js", "MongoDB", "Docker"]}
                                    className="bg-gradient-to-br from-cyan-500 via-cyan-600 to-cyan-700"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProjectCard
                                    title="AutoFlow CI/CD"
                                    description="Automated workflow testing solution integrated with continuous integration pipeline."
                                    tech={["Jenkins", "GitLab CI", "Docker", "Kubernetes"]}
                                    className="bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700"
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProjectCard
                                    title="Mobile Cloud Test"
                                    description="Cloud-based mobile testing framework with parallel execution capabilities."
                                    tech={["Appium", "AWS", "TestNG", "Selenium Grid"]}
                                    className="bg-gradient-to-br from-rose-500 via-rose-600 to-rose-700"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </motion.div>

                    {/* Skills & Expertise */}
                    <motion.div
                        className="col-span-full bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 shadow-lg border border-white/50 backdrop-blur-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-bold inline-flex items-center gap-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                                <FaCode className="text-blue-500" />
                                Technical Expertise
                            </h2>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold mb-3 text-gray-700">Automation Frameworks</h3>
                                <div className="flex flex-wrap gap-3">
                                    {["Selenium", "Appium", "Playwright", "Cypress", "RestAssured"].map((skill) => (
                                        <span key={skill} className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-300">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold mb-3 text-gray-700">Programming Languages</h3>
                                <div className="flex flex-wrap gap-3">
                                    {["Java", "JavaScript", "Python"].map((skill) => (
                                        <span key={skill} className="px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-300">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold mb-3 text-gray-700">Tools & Technologies</h3>
                                <div className="flex flex-wrap gap-3">
                                    {["Jenkins", "Git", "JMeter", "Postman", "GitLab CI/CD"].map((skill) => (
                                        <span key={skill} className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg font-medium shadow-sm hover:shadow-md transition-all duration-300">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Experience Highlights */}
                    <motion.div
                        className="col-span-full bg-gradient-to-br from-indigo-50 to-pink-50 rounded-xl p-8 shadow-lg border border-white/50 backdrop-blur-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-bold inline-flex items-center gap-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-600">
                                <FaTools className="text-indigo-500" />
                                Experience Highlights
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-[1px] rounded-lg">
                                <div className="bg-white p-4 rounded-lg h-full">
                                    <h3 className="text-lg font-semibold text-gray-800">Test Automation Framework Development</h3>
                                    <p className="text-gray-600 mt-2">
                                        Designed and implemented comprehensive automation frameworks for web and mobile applications, 
                                        reducing testing time by 60% and improving coverage by 40%.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-[1px] rounded-lg">
                                <div className="bg-white p-4 rounded-lg h-full">
                                    <h3 className="text-lg font-semibold text-gray-800">CI/CD Pipeline Integration</h3>
                                    <p className="text-gray-600 mt-2">
                                        Successfully integrated automated testing into CI/CD pipelines, enabling continuous testing 
                                        and reducing deployment time from 2 hours to 30 minutes.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 p-[1px] rounded-lg">
                                <div className="bg-white p-4 rounded-lg h-full">
                                    <h3 className="text-lg font-semibold text-gray-800">Cross-platform Mobile Testing</h3>
                                    <p className="text-gray-600 mt-2">
                                        Led mobile automation initiatives for iOS and Android platforms, achieving 90% test coverage 
                                        and reducing manual testing effort by 75%.
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gradient-to-r from-pink-500 to-pink-600 p-[1px] rounded-lg">
                                <div className="bg-white p-4 rounded-lg h-full">
                                    <h3 className="text-lg font-semibold text-gray-800">API Testing Architecture</h3>
                                    <p className="text-gray-600 mt-2">
                                        Developed robust API testing frameworks using RestAssured and Postman, ensuring 100% coverage 
                                        of critical endpoints and early bug detection.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Education & Certifications */}
                    <motion.div
                        className="col-span-full bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 shadow-lg border border-white/50 backdrop-blur-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-bold inline-flex items-center gap-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                                <FaCertificate className="text-purple-500" />
                                Education & Certifications
                            </h2>
                        </div>
                        
                        <div className="space-y-4">
                            {[
                                {
                                    type: "education",
                                    name: "Bachelor of Science in Computer Science",
                                    institution: "University Name",
                                    date: "2015 - 2019",
                                    details: "Relevant coursework: Software Testing, Software Engineering, Database Systems"
                                },
                                {
                                    type: "certification",
                                    name: "ISTQB Certified Tester",
                                    institution: "International Software Testing Qualifications Board",
                                    date: "2021"
                                },
                                {
                                    type: "certification",
                                    name: "AWS Certified DevOps Engineer",
                                    institution: "Amazon Web Services",
                                    date: "2022"
                                },
                                {
                                    type: "certification",
                                    name: "Selenium WebDriver with Java",
                                    institution: "Udemy",
                                    date: "2020"
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-gradient-to-r from-purple-500 to-pink-500 p-[1px] rounded-lg">
                                    <div className="bg-white p-4 rounded-lg">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
                                                <p className="text-purple-600 font-medium">{item.institution}</p>
                                                {item.details && (
                                                    <p className="text-gray-600 mt-2">{item.details}</p>
                                                )}
                                            </div>
                                            <p className="text-gray-500">{item.date}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-8 p-2.5 rounded-full z-50 bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg group hover:bg-white transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.div
                            className="relative"
                            animate={{
                                y: [2, -1, 2]
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <FaArrowUp className="w-4 h-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300" />
                        </motion.div>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Simplified Footer */}
            <footer className="mt-16 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex justify-between items-center">
                        <p className="text-gray-600">© {new Date().getFullYear()} Daniyal Qureshi</p>
                        <div className="flex gap-4">
                            <a href="https://linkedin.com/in/daniyalquraishi" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
                                <FaLinkedin className="w-5 h-5" />
                            </a>
                            <a href="https://github.com/daniyalquraishi" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
                                <FaGithub className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

// New ProjectCard Component
const ProjectCard = ({ title, description, tech, className }) => {
    return (
        <motion.div
            className={`p-6 rounded-xl ${className} transform transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl backdrop-blur-sm`}
            whileHover={{ scale: 1.02 }}
        >
            <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 text-white drop-shadow-sm">{title}</h3>
                <p className="mb-4 text-white/90 leading-relaxed">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {tech.map((item, index) => (
                        <span 
                            key={index} 
                            className="px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white border border-white/20 shadow-sm hover:bg-white/20 transition-colors duration-300"
                        >
                            {item}
                        </span>
                    ))}
                </div>
            </div>
            <div className="absolute inset-0 bg-white/5 rounded-xl"></div>
        </motion.div>
    );
};

export default App;
