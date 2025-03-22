import React from 'react';
import { motion } from 'framer-motion';

const ProfileCard = () => {
    return (
        <motion.div 
            className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="flex items-center">
                <img 
                    src="/public/profile.jpeg" 
                    alt="Profile" 
                    className="w-32 h-32 rounded-full border-4 border-gray-300 shadow-md" 
                />
                <div className="ml-6">
                    <h1 className="text-3xl font-bold">Daniyal Qureshi</h1>
                    <p className="text-gray-600">SQA Engineer | Test Automation Specialist | Game Developer</p>
                </div>
            </div>
            <div className="mt-8">
                <h2 className="text-xl font-semibold">Job Experiences</h2>
                <ul className="list-disc ml-6 mt-2">
                    <li>USEA Company - Software Tester (Manual Testing)</li>
                    <li>STC Play - QA Tester (Automation with Selenium and Playwright)</li>
                    <li>Streamflix App - Automation with Appium and Espresso</li>
                    <li>Upwork - Freelance SQA Engineer</li>
                </ul>
                <h2 className="text-xl font-semibold mt-6">Projects</h2>
                <ul className="list-disc ml-6 mt-2">
                    <li>STC Play - Web and Mobile Testing</li>
                    <li>Streamflix App - Automation with Appium and Espresso</li>
                    <li>MFX - Automation with Playwright</li>
                    <li>Game Development - Unity (C#)</li>
                </ul>
                <h2 className="text-xl font-semibold mt-6">Skills & Courses</h2>
                <ul className="list-disc ml-6 mt-2">
                    <li>Selenium, Playwright, Appium, Espresso</li>
                    <li>SpecFlow, BDD, JMeter</li>
                    <li>Unity (C#), Jenkins, Git</li>
                </ul>
            </div>
        </motion.div>
    );
}

export default ProfileCard;
