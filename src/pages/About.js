import React, { useState } from 'react';

export default function About() {
    const [accordion1, setAccordion1] = useState(false);
    const [accordion2, setAccordion2] = useState(false);
    const [accordion3, setAccordion3] = useState(false);




    const toggle = (accordionId) => {

        switch (accordionId) {
            case 1:
                accordion1 ? setAccordion1(false) : setAccordion1(true)
                break;
            case 2: accordion2 ? setAccordion2(false) : setAccordion2(true)
                break;
            case 3: accordion3 ? setAccordion3(false) : setAccordion3(true)
                break;
            default:
                break;
        }
    }


    return (
        <>
            <h1>About</h1>
            <div className="accordion">
                <div className="accordion_container" onClick={() => toggle(1)}>
                    <h2>Accordion 1</h2>
                    <div className={(accordion1 ? "show" : "hide")}>
                        <p>lorem eiofhg wgoiewhrgrghr pgq</p>
                    </div>
                </div>

                <div className="accordion_container" onClick={() => toggle(2)}>
                    <h2>Accordion 2</h2>
                    <div className={(accordion2 ? "show" : "hide")}>
                        <p>nina er kul</p>
                    </div>
                </div>

                <div className="accordion_container" onClick={() => toggle(3)}>
                    <h2>Accordion 3</h2>
                    <div className={(accordion3 ? "show" : "hide")}>
                        <p>nina er kul</p>
                    </div>
                </div>


            </div>
        </>
    )
}
