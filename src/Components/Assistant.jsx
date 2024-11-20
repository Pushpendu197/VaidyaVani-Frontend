import React, { useState, useEffect } from 'react';
import { FaPaperPlane, FaMicrophone, FaRobot } from 'react-icons/fa';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import './Assistant.css';

function Assistant() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [listening, setListening] = useState(false);

    const medicalKeywords = [
        'Symptoms', 'Diagnosis', 'Treatment', 'Medication', 'Prescription', 'Healthcare', 'Physician', 'Specialist', 'Clinic', 'Hospital',
        'Diabetes', 'Cancer', 'Heart disease', 'Hypertension', 'Asthma', 'Arthritis', 'Depression', 'Anxiety', 'Alzheimer\'s disease', 'Stroke',
        'Surgery', 'Chemotherapy', 'Radiation therapy', 'Physical therapy', 'Blood test', 'MRI', 'CT scan', 'X-ray', 'Vaccination', 'Emergency care',
        'Nutrition', 'Fitness', 'Mental health', 'Weight loss', 'Healthy lifestyle', 'Stress management', 'Sleep disorders', 'Mindfulness', 'Meditation', 'Wellness programs',
        'Health screenings', 'Vaccines', 'Health check-up', 'Preventive care', 'Dietary supplements', 'Smoking cessation', 'Alcohol abuse', 'Disease prevention', 'Exercise recommendations', 'Healthy eating',
        'Health insurance', 'Medicare', 'Medicaid', 'Out-of-pocket costs', 'Copayment', 'Deductible', 'Pre-existing conditions', 'Coverage', 'Claim process', 'Affordable Care Act',
        'Pediatric care', 'Senior health', 'Child development', 'Immunizations', 'Geriatric medicine', 'Pediatric nutrition', 'Elderly care', 'Pediatric diseases', 'Aging process', 'Caregiver support',
        'Acupuncture', 'Chiropractic care', 'Herbal medicine', 'Homeopathy', 'Meditation', 'Yoga', 'Nutritional therapy', 'Mind-body connection', 'Holistic health', 'Alternative therapies',
        'CPR', 'First aid', 'Emergency room', 'Trauma care', 'Acute care', 'Resuscitation', 'Allergic reactions', 'Choking', 'Burn treatment', 'Poisoning',
        'Depression treatment', 'Anxiety management', 'Mental health therapy', 'Psychiatric evaluation', 'Counseling', 'Support groups', 'Coping strategies', 'Mental health awareness', 'Emotional support', 'Stress relief techniques',
        'disease', 'syndrome', 'medicine'
    ];

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    // Handle voice input
    const handleVoiceInput = () => {
        if (!listening) {
            recognition.start();
            setListening(true);
        }

        recognition.onresult = (event) => {
            const voiceInput = event.results[0][0].transcript;
            setInput(voiceInput);
            handleSendMessage(voiceInput);
            setListening(false);
        };

        recognition.onerror = (event) => {
            console.error('Error with speech recognition:', event.error);
            setListening(false);
        };
    };

    // Speak a message using SpeechSynthesis
    const speakMessage = (message) => {
        const utterance = new SpeechSynthesisUtterance(message);
        window.speechSynthesis.speak(utterance);
    };

    // Check if the message is medical-related
    const isMedicalQuery = (message) => {
        const lowerCaseMessage = message.toLowerCase();
        return medicalKeywords.some((keyword) => lowerCaseMessage.includes(keyword));
    };

    // Get greeting based on the current time
    const getGreeting = () => {
        const currentHour = new Date().getHours();
        if (currentHour < 12) {
            return 'Good morning,Pushpendu! Tell me how can i help you';
        } else if (currentHour < 18) {
            return 'Good afternoon,Pushpendu! Tell me how can i help you';
        } else {
            return 'Good evening,Pushpendu! Tell me how can i help you';
        }
    };

    // Handle sending the message
    const handleSendMessage = async (message) => {
        const userMessage = message || input;
        if (userMessage.trim()) {
            const newMessages = [...messages, { text: userMessage, user: true }];
            setMessages(newMessages);
            setInput('');

            // If the message is not related to medical topics
            if (!isMedicalQuery(userMessage)) {
                const errorMessage = 'Sorry Pushpendu! Please specify the topics on medical categories.';
                setMessages([...newMessages, { text: errorMessage, user: false }]);
                speakMessage(errorMessage); // Speak the error message
                return;
            }

            try {
                setLoading(true);
                const response = await axios.post(
                    'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyC2DKORzQ-GqXivkYawCIvGkc0DL1ermr8',
                    {
                        contents: [
                            {
                                parts: [{ text: userMessage }]
                            }
                        ]
                    }
                );
                const botResponse = response.data.candidates[0].content.parts[0].text;
                setLoading(false);
                setMessages([...newMessages, { text: botResponse, user: false }]);
                speakMessage(botResponse); // Speak the bot's response
            } catch (error) {
                console.error('Error sending message:', error);
                setLoading(false);
                const errorMsg = 'Error: Could not get response from AI.';
                setMessages([...newMessages, { text: errorMsg, user: false }]);
                speakMessage(errorMsg); // Speak the error message
            }
        }
    };

    // Send initial bot message when component loads
    useEffect(() => {
        const initialMessage = { text: getGreeting(), user: false };
        setMessages([initialMessage]);
        speakMessage(initialMessage.text); // Speak the greeting message
    }, []);

    return (
        <div className="flex flex-col items-center justify-center bodySection">
            {/* Chatbot Title */}
            <div className="bg-pup text-white p-3 w-full text-lg font-medium">
                VaidyaVani Health Assistant
            </div>

            {/* Chatbot Window */}
            <div className="bg-white w-full max-w-lg shadow-lg rounded-lg overflow-hidden flex flex-col justify-between h-[100%]">
                <div className="p-4 flex-1 overflow-y-auto">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.user ? 'justify-end' : 'justify-start'} mb-2`}>
                            {/* User (Sender) Message */}
                            {msg.user ? (
                                <div className="flex items-center">
                                    <div className="text-sm text-right max-w-xs bg-blue p-3 rounded-lg shadow-md">
                                        <ReactMarkdown>{msg.text}</ReactMarkdown>
                                    </div>
                                    <div className='icons_user text-3xl'>🧑 </div>
                                </div>
                            ) : (
                                // Bot (Receiver) Message
                                <div className="flex items-center text-sm">
                                    <div className='icons_doc text-3xl'>👨🏻‍⚕️ </div>
                                    <div className="text-sm text-left max-w-xs bg-gray-200 p-3 rounded-lg shadow-md">
                                        <ReactMarkdown>{msg.text}</ReactMarkdown>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Loading Animation */}
                    {loading && (
                        <div className="text-center text-gray-500 mt-4">Typing ....</div>
                    )}

                    {listening && (
                        <div className="text-center text-gray-500 mt-4">Litening ....</div>
                    )}
                </div>

                {/* Input Section */}
                <div className="p-3 border-t border-gray-200 flex items-center text-sm">
                    <input
                        type="text"
                        className="flex-1 p-2 border border-gray-300 rounded-lg outline-none"
                        placeholder="Type your message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <button
                        className="ml-2 bg-blue text-white p-2 rounded-lg hover:bg-black transition-all"
                        onClick={() => handleSendMessage()}
                    >
                        <FaPaperPlane />
                    </button>
                    <button
                        className="ml-2 bg-green-400 text-white p-2 rounded-lg hover:bg-green-600 transition-all"
                        onClick={handleVoiceInput}
                    >
                        <FaMicrophone />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Assistant;
