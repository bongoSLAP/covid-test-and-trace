import NavBar from "../scenes/NavBar";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styling/Survey.css"


const SymptomSurvey = () => {

    const [q1, setQ1] = useState(false);
    const [q2, setQ2] = useState(false);
    const [q3, setQ3] = useState(false);
    const [q4, setQ4] = useState(false);
    const [q5, setQ5] = useState(false);
    const [endResult, setEndResult] = useState(false);
    

    const handleChangeq1 = () => {
        setQ1(!q1);
    };

    const handleChangeq2 = () => {
        setQ2(!q2);
    };

    const handleChangeq3 = () => {
        setQ3(!q3);
    };

    const handleChangeq4 = () => {
        setQ4(!q4);
    };

    const handleChangeq5 = () => {
        setQ5(!q5);
    };


    const Checkbox = ({ label, value, onChange }) => {
        return (
            <div className="checkboxContainer">
                <label className="checkboxLabel">
                    {label}
                    <input type="checkbox" checked={value} onChange={onChange} />
                </label>
            </div>
        );
    };

    function handleSubmit() {
        let result = 0;
        if (q1) {
            result += 1
        }
        if (q2) {
            result += 1
        }
        if (q3) {
            result += 1
        }
        if (q4) {
            result += 1
        }
        if (q5) {
            result += 1
        }

        if (result >= 2) {
            setEndResult(true)
        }
    }

    function TestPrompt() {
        if (!endResult){
            return(
                <div>
                </div>
            )
        }

        return(
            <div className="TestPromtContainer">
                <h2>We strongly advise you book a Covid-19 test</h2>
                <Link className="link" to='/BookTest'>Click here to book</Link>
            </div>
        )
    }

    function SurveyForm() {

        return(
            <form className="SurveyForm" onSubmit={handleSubmit}>
                <Checkbox label="Are you experiencing breathing problems?" value={q1} onChange={handleChangeq1}/>
                <Checkbox label="Are you experiencing fatigue?" value={q2} onChange={handleChangeq2}/>
                <Checkbox label="Are you experiencing a loss of taste or smell?" value={q3} onChange={handleChangeq3}/>
                <Checkbox label="Are you experiencing muscle weakness?" value={q4} onChange={handleChangeq4}/>
                <Checkbox label="Are you experiencing loss of sleep?" value={q5} onChange={handleChangeq5}/>
                <p id="onSuccessSurvey"></p>
                <input className="inputLogin" type='submit' value={"Submit survey"} onClick={() => {document.getElementById("onSuccessSurvey").innerHTML = "Your survey has been submitted, " +
                 "if there are no other messages you should assume you are ok and to report any new or worsening symptoms once they occur"}}/>
            </form>
        )
    }

    return(
        <div className="surveyPageContainer">
            <NavBar />
            <h1>Covid-19 Symptoms Survey</h1>
            <h3>Please answer all questions truthfully</h3>
            <SurveyForm />
            <TestPrompt />
        </div>
    )
}

export default SymptomSurvey;