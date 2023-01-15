import "../navBar/navBar.css"
import "../footer/footer.css"
import Footer from "../footer/footer";
import React, { useState, useEffect }from "react";
import "./quiz.css"
import tests from "../common/images/home_page/tests.png";
import image from "../common/images/respiratoriu.jpg"

function Quiz() {
    const [questionText, setQuestionText] = useState([])
    const [answer, setAnswer] = useState([])
    const [userAnswer, setUserAnswer] = useState([true, true, true, true])
    var q = 4;
    var question = [];
    var questions = [
        "In cazul unei fracturi deschise primul pas este oprirea sangerarii",
        "Trebuie să aplicați un garou dacă un șarpe v-a mușcat?",
        "Stomacul nu trebuie pompat in caz de otravire",
        "Un garou se aplica deasupra plagii",
        "Apa oxignata este o substanta antiseptica",
        "Frecventa insuflarilor ce trebuiesc realizate pentru efectuarea respiratiei artificiale gura la gura este de 14-20 insuflari/min",
        "Imobilizarea unui brat fracturat se face cuprinzind osul fracturat si cele doua articulatii",
        "Persoanle ranite dintr-un autovehicul se scot prin tragere",
        "Substantele antiseptice se folosesc pentru calmarea durerilor",
        "Victima care a pierdut mult singe trebuie asezata cu fata in jos",
        "Intr-un pansament pe plaga se aplica o compresa de vata sterila",
        "Pentru evitarea complicatiior in cazul unei fracturi, se impune repaus la pat",
        "Gravitatea unei hemoragii se apreciaza in functie de cantitatea singelui pierdut",
        "Hemoragiile la trunchi si cap trebuie oprite prin aplicarea garoului",
        "Pe biletul care se prinde langa garoul aplicat unui ranit se scrie ora si munutul aplicarii garoului",
        "Pana la transportarea victimei la spital, pozitia de asteptare este pozitie cat mai comoda"
    ]
    var answers = ['true', 'false', 'false', 'true', 'true', 'true', 'true', 'false', 'false', 'false', 'false', 'false', 'true', 'false', 'true', 'false']

     useEffect (()=> {
        handleQuestion()
    }, [])

    function handleQuestion() {
        while(answer.length > 0) {
            answer.pop()
        }
        while(q > 0) {
            var x = Math.floor(Math.random() * 15)
            if(question.indexOf(questions[x]) === -1) {
                question.push(questions[x])
                answer.push(answers[x])
                q -= 1;
            }
        }
        setQuestionText(question)
    }

    const handleAnswers = (nr, input) => {
        userAnswer.splice(nr, 1, input)

    }

    function handleSubmit() {
        var s = ""
        var nr = 0
        console.log(answer)
        console.log(userAnswer)
        for(let i = 0; i < 4; i++) {
            if(answer[i] === userAnswer[i]) {
                nr++;
                s += i + 1 + ") Correct answer\n"
            } else {
                s += i + 1+ ") Wrong answer \n"
            }
        }
        alert(s)
    }

    return (

        <div className='quizWrapper'>
            <p className='quizTitle'>Take a quiz and test your knowledge</p>

            <div className='page'>
                <div className='questions'>
                    <div className='question'>
                        <p>{questionText[0]}</p>
                        <div className="answer">
                            <input className='radio' type='radio' id='true' name='answer1' value='true' onChange={event => handleAnswers(0, event.target.value)}/>
                            <label className='label' htmlFor='true'>True</label>
                            <input className='radio' type='radio' id='false' name='answer1' value='false' onChange={event => handleAnswers(0, event.target.value)}/>
                            <label className='label' htmlFor='false'>False</label>
                        </div>
                    </div>
                    <div className='question'>
                        <p>{questionText[1]}</p>
                        <div className="answer">
                            <input className='radio' type='radio' id='true' name='answer2' value='true' onChange={event => handleAnswers(1, event.target.value)}/>
                            <label className='label' htmlFor='true'>True</label>
                            <input className='radio' type='radio' id='false' name='answer2' value='false' onChange={event => handleAnswers(1, event.target.value)}/>
                            <label className='label' htmlFor='false'>False</label>
                        </div>
                    </div>
                    <div className='question'>
                        <p>{questionText[2]}</p>
                        <div className="answer">
                            <input className='radio' type='radio' id='true' name='answer3' value='true' onChange={event => handleAnswers(2, event.target.value)}/>
                            <label className='label' htmlFor='true'>True</label>
                            <input className='radio' type='radio' id='false' name='answer3' value='false' onChange={event => handleAnswers(2, event.target.value)}/>
                            <label className='label' htmlFor='false'>False</label>
                        </div>
                    </div>
                    <div className='question'>
                        <p>{questionText[3]}</p>
                        <div className="answer">
                            <input className='radio' type='radio' id='true' name='answer4' value='true' onChange={event => handleAnswers(3, event.target.value)}/>
                            <label className='label' htmlFor='true'>True</label>
                            <input className='radio' type='radio' id='false' name='answer4' value='false' onChange={event => handleAnswers(3, event.target.value)}/>
                            <label className='label' htmlFor='false'>False</label>
                        </div>
                    </div>
                </div>

                <img className='respiratoriu' src={image} />
            </div>
            <button onClick={handleSubmit} className="submitAnswer">Submit answer</button>

            <Footer />
        </div>

    )
}

export default Quiz;