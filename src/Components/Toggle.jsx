import React, { useState } from "react";


export default function Toggle (props) {


  return (<label class="toggle-control float-right mt-5 pt-5 mr-2 pr-2">
    <input type="checkbox" className= "ml-auto" checked = {props.toggle} onClick={() => props.themeToggler()} />
    <span class="control"></span>
    </label>
  );
};