import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Myprofile from './pages/Myprofile'
import MyAppointment from './pages/MyAppointment'
import Appointment from './pages/Appointment'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Reminder from './Components/Reminder'
import Feedback from './Components/Feedback'
import Bloodbank from './Components/Bloodbank'
import Assistant from './Components/Assistant'
import IndexDiet from './diet/IndexDiet'

function App() {

  // Function to load Google Translate script dynamically.................................................................................................
  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    };

    // Function to initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,hi,bn', // English, Hindi, Bengali
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_translate_element'
      );
    };

    addGoogleTranslateScript();
  }, []);




  //............................................................................................................

  return (
    <>
      <div className='px-6 sm:px-[10%]'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/doctors' element={<Doctors />} />
          <Route path='/doctors/:speciality' element={<Doctors />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/blood-bank' element={<Bloodbank />} />
          <Route path='/my-profile' element={<Myprofile />} />
          <Route path='/my-appointment' element={<MyAppointment />} />
          <Route path='/appointment/:docId' element={<Appointment />} />

          {/* fetured part  */}
          <Route path='/reminder' element={<Reminder />} />
          <Route path='/feedback' element={<Feedback />} />
          <Route path='/assistant' element={<Assistant />} />
          <Route path='/diet' element={<IndexDiet />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;
