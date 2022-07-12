import React, { useRef, useEffect,useState } from "react";
import $ from "jquery";
import { FormBuilder as FormBuilderIo, Formio, FormEdit } from "react-formio";
import { formIoData } from "./const";
// import JotformNav from "../JotformNav";

import "formiojs/dist/formio.full.css";
const Jotform = () => {
  const [formData, setFormData] = useState(formIoData);
  const printResult = () => {
    Formio.createForm(document.getElementById("formio-result"), {
      components: formData.components
    }).then((form) => {
      console.log(form.component.components);
      form.on("submit", (data) => console.log("submit", data));

    });

  };

useEffect(()=>{
  $(document).ready(function(){
    $("#hide").click(function(){
      $(".builder-sidebar").hide();
    });
    $("#show").click(function(){
      $(".builder-sidebar").show();
    });
  });
  // $( "#hide" ).click(function() {
  //   $( ".builder-sidebar" ).animate({
  //     opacity: 0.25,
  //     left: "0",
  //     width: "0"
  //   }, 5000);
  // });

  
},[])

// $(document).ready(function(){
//   $("#hide").click(function(){
//     $(".builder-sidebar").animate({left: '0px'});
//   });
// });
// $( "#hide" ).click(function() {
//   $( ".builder-sidebar" ).animate({
//     opacity: 0.25,
//     left: "+=50",
//     height: "toggle"
//   }, 5000, function() {
//     // Animation complete.
//   });
// });
  return (
    <>
    {/* <JotformNav/>  */}
     <div>
    {/* <button className="green" onClick={printResult}>
      display result
    </button> */}
<button id="hide">Hide</button>
<button id="show">Show</button>
    <FormBuilderIo
      form={formIoData}
      // onChange={schema => setFormData(schema)}
      onSubmit={(data) => {
        console.log(data);
      }}
      saveForm={(data) => setFormData(data)}
      saveText="Save Form"
      onSubmitDone={(data) => console.log(data)}
    />
    <div style={{ display: "none" }}>
      <div id="formio-result" />
    </div>
  </div></>
  )
}

export default Jotform;