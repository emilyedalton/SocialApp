import React, {useRef}from 'react'
import EventInfo from "../EventInfo";
import ReactToPrint from "react-to-print"


const ToPrint = () => {
const componentRef = useRef()
      return (
        <div>
          <ReactToPrint
            trigger={() => <a href="#">Print this out!</a>}
            content={() => this.componentRef}
          />
          <EventInfo ref={el => (this.componentRef = el)} />
        </div>
      );
    }
  
  
  export default ToPrint;