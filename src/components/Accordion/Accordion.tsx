import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean

}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering');
    if (props.collapsed === true) {
        return <div>
            <AppAccordionTitle title={props.titleValue}/>

        </div>
    } else {
        return <div>
            <AppAccordionTitle title={props.titleValue}/>
            <AppAccordionBody/>
        </div>
    }

}

type AppAccordionTitlePropsType = {
    title: string
}

function AppAccordionTitle(props: AppAccordionTitlePropsType) {
    console.log('AppAccordionTitle rendering');
    return (
        <h3>{props.title}</h3>
    );
}

function AppAccordionBody() {
    console.log('AppAccordionBody rendering');
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>

    );
}


export default Accordion;