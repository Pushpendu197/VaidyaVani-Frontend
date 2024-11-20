import React, { useEffect, useState } from 'react';
import './Reminder.css';
import axios from "axios";
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';



import { faStopwatch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Reminder = () => {
    const [reminderMsg, setReminderMsg] = useState("");
    const [remindPerson, setRemindPerson] = useState("");

    //Date Time Picker...
    const [remindAt, setRemindAt] = useState();
    const [reminderList, setReminderList] = useState([]);

    // Fetch reminders when component mounts
    useEffect(() => {
        axios.get("http://localhost:8001/getAllReminders")
            .then(res => setReminderList(res.data))
            .catch(err => console.error("Error fetching reminders:", err));
    }, []);

    // Add a new reminder
    const addReminder = () => {
        axios.post("http://localhost:8001/addReminder", { reminderMsg, remindPerson, remindAt })
            .then(res => setReminderList(res.data))
            .catch(err => console.error("Error adding reminder:", err));

        // Clear input fields after adding
        setReminderMsg("");
        setRemindPerson("");
        setRemindAt(null);
    };

    // DELETE REMINDER...
    const deleteReminder = (id) => {
        axios.post(`http://localhost:8001/deleteReminder`, { id })
            .then(res => setReminderList(res.data))
            .catch(err => console.error("Error deleting reminder:", err));
    };

    return (
        <>
            <div className='reminderSection pb-32'>
                <div className='container'>
                    <div className=' text-center text-2xl font-semibold'>
                        <h4 className='homepageHeader'>Take@Pill 💊 </h4>
                    </div>

                    <div className='row pt-10 '>
                        <div className='col-4 p-8 rounded-lg addSection border shadow-md'>
                            {/* Form section */}
                            <h4 className='text-lg items-start font-semibold '>ADD REMINDER ⏰</h4>

                            <div className='mt-3 text-sm font-semibold'>
                                <div className="mb-3">
                                    <label className="form-label">Medicine Name:</label>
                                    <input
                                        type="text"
                                        className="form-control shadow-md text-sm"
                                        placeholder="Add Medicine Here"
                                        value={reminderMsg}
                                        onChange={e => setReminderMsg(e.target.value)}
                                    />
                                </div>

                                <div className="mb-3 ">
                                    <label className="form-label">Time of Takeing:</label>
                                    <DateTimePicker
                                        className='text-sm react-datetime-picker shadow-md'
                                        value={remindAt}
                                        onChange={setRemindAt}
                                        minDate={new Date()}
                                        hourPlaceholder='HH'
                                        dayPlaceholder='DD'
                                        yearPlaceholder='YYYY'
                                        minutePlaceholder='MM'
                                    />
                                </div>



                                <div className="mb-3">
                                    <label className="form-label">Taken By:</label>
                                    <input
                                        type="text"
                                        className="form-control shadow-md text-sm"
                                        placeholder="Add Patient"
                                        value={remindPerson}
                                        onChange={e => setRemindPerson(e.target.value)}
                                    />
                                </div>

                                <button className='btn btn-dark text-sm' onClick={addReminder}>Add</button>
                            </div>
                        </div>

                        <div className='col-8'>
                            {/* Display section with grid layout */}
                            <div className="reminderGrid">
                                {reminderList.length > 0 ? (
                                    reminderList.map(reminder => (
                                        <div className="card" key={reminder._id}>
                                            <div className="card-body">
                                                <p className="card-title text-lg text-center">Reminder <FontAwesomeIcon icon={faStopwatch} /></p>
                                                <hr />

                                                <p className="card-title text-lg pt-2 font-semibold text-purple-600">Medicine : </p>
                                                <p className="card-text capitalize text-sm">{reminder.reminderMsg}</p>

                                                <p className="card-title text-lg pt-2 font-semibold text-purple-600">Time : </p>
                                                <p className="card-text text-sm">
                                                    {reminder.remindAt ? new Date(reminder.remindAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }) : "No time set"}
                                                </p>

                                                <p className='card-text py-3 text-xs'><span className=' text-purple-600 font-semibold'>CareTaker: </span><span className='text-xs capitalize'>{reminder.remindPerson}</span></p>
                                                <button className="btn btn-primary text-xs" onClick={() => deleteReminder(reminder._id)}>Delete</button>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-center text-lg">No reminders found</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
};

export default Reminder;
