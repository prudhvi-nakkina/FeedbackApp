import React from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { v4 as uuidv4 } from 'uuid';
import AboutPage from './pages/AboutPage';

function App() {

    const [feedback, setFeedback] = useState(FeedbackData);
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    };
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure?')) {
            setFeedback(feedback.filter((item) => item.id !== id))
        }

    }
    return (
        <Router>
            <Header text="Hello World" />
            <div className='container'>
                <Routes>
                    <Route exact path='/' element={
                        <>
                            <FeedbackForm handleAdd={addFeedback} />
                            <FeedbackStats feedback={feedback} />
                            <FeedbackList feedback={feedback}
                                handleDelete={(id) => { deleteFeedback(id) }} />
                        </>
                    }>

                    </Route>

                    <Route path='/about' element={<AboutPage />}></Route>
                </Routes>

            </div>
        </Router>

    )
}

export default App;