import "../navBar/navBar.css"
import "../footer/footer.css"
import Footer from "../footer/footer";
import React from "react";
import "./quiz.css"
import tests from "../common/images/home_page/tests.png";
import image from "../common/images/respiratoriu.jpg"

function quiz() {
    return(
        <div className='quizWrapper'>
            <p className='quizTitle'>Take a quiz and test your knowledge</p>
            <div className='page'>
                <div className='questions'>
                    <div className='question'>
                        <p>Question 1</p>
                        <div className="answer">
                            <input className='radio' type='radio' id='true' name='answer1' value='ture'/>
                            <label className='label' htmlFor='true'>True</label>
                            <input className='radio' type='radio' id='false' name='answer1' value='false'/>
                            <label className='label' htmlFor='false'>False</label>
                        </div>
                    </div>
                    <div className='question'>
                        <p>Question 2</p>
                        <div className="answer">
                            <input className='radio' type='radio' id='true' name='answer2' value='ture'/>
                            <label className='label' htmlFor='true'>True</label>
                            <input className='radio' type='radio' id='false' name='answer2' value='false'/>
                            <label className='label' htmlFor='false'>False</label>
                        </div>
                    </div>
                    <div className='question'>
                        <p>Question 3</p>
                        <div className="answer">
                            <input className='radio' type='radio' id='true' name='answer3' value='ture'/>
                            <label className='label' htmlFor='true'>True</label>
                            <input className='radio' type='radio' id='false' name='answer3' value='false'/>
                            <label className='label' htmlFor='false'>False</label>
                        </div>
                    </div>
                    <div className='question'>
                        <p>Question 4</p>
                        <div className="answer">
                            <input className='radio' type='radio' id='true' name='answer4' value='ture'/>
                            <label className='label' htmlFor='true'>True</label>
                            <input className='radio' type='radio' id='false' name='answer4' value='false'/>
                            <label className='label' htmlFor='false'>False</label>
                        </div>
                    </div>
                </div>

                <img className='respiratoriu' src={image}/>
            </div>
            <button className="submitAnswer">Submit answer</button>

            <Footer/>
        </div>
    )
}

export default quiz;