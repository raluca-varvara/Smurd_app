import "../navBar/navBar.css"
import "../footer/footer.css"
import Footer from "../footer/footer";
import React, { useState, useEffect }from "react";
import "./quiz.css"
import tests from "../common/images/home_page/tests.png";
import image from "../common/images/respiratoriu.jpg"

function Quiz() {
    const [quiz1, setQuiz1] = useState("quiz1")
    const [ok, setOk] = useState("okquiz1");
     useEffect (()=> {
       
        if (localStorage.getItem("quiz") === "quiz1") {
            setOk("okquiz1");
        } else if (localStorage.getItem("quiz") === "quiz2"){
            setOk("okquiz2");
        } else {
           setOk("okquiz1")
        }
    })
    if (ok ==="okquiz1") {
        return (
    
            <div className='quizWrapper'>
                <p className='quizTitle'>Take a quiz and test your knowledge</p>
           
                <div className='page'>
                    <div className='questions'>
                        <h3>Select a quiz</h3>
                        <select name="category" id="category">
                            <option value="quiz1" onChange={localStorage.setItem("quiz", "quiz1")}>Quiz1</option>
                            <option value="quiz2" onChange={localStorage.setItem("quiz", "quiz2")}>Quiz2</option>
                            <option value="quiz3" onChange={localStorage.setItem("quiz", "quiz3")}>Quiz3</option>
                        </select>
                   
                        <div className='question'>
                            <p>Question 1</p>
                            <div className="answer">
                                <input className='radio' type='radio' id='true' name='answer1' value='ture' />
                                <label className='label' htmlFor='true'>True</label>
                                <input className='radio' type='radio' id='false' name='answer1' value='false' />
                                <label className='label' htmlFor='false'>False</label>
                            </div>
                        </div>
                        <div className='question'>
                            <p>Question 2</p>
                            <div className="answer">
                                <input className='radio' type='radio' id='true' name='answer2' value='ture' />
                                <label className='label' htmlFor='true'>True</label>
                                <input className='radio' type='radio' id='false' name='answer2' value='false' />
                                <label className='label' htmlFor='false'>False</label>
                            </div>
                        </div>
                        <div className='question'>
                            <p>Question 3</p>
                            <div className="answer">
                                <input className='radio' type='radio' id='true' name='answer3' value='ture' />
                                <label className='label' htmlFor='true'>True</label>
                                <input className='radio' type='radio' id='false' name='answer3' value='false' />
                                <label className='label' htmlFor='false'>False</label>
                            </div>
                        </div>
                        <div className='question'>
                            <p>Question 4</p>
                            <div className="answer">
                                <input className='radio' type='radio' id='true' name='answer4' value='ture' />
                                <label className='label' htmlFor='true'>True</label>
                                <input className='radio' type='radio' id='false' name='answer4' value='false' />
                                <label className='label' htmlFor='false'>False</label>
                            </div>
                        </div>
                    </div>

                    <img className='respiratoriu' src={image} />
                </div>
                <button className="submitAnswer">Submit answer</button>

                <Footer />
            </div>
    
        )
    }
}

export default Quiz;