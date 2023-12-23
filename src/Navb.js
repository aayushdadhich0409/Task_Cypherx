import React, { useState } from "react";

const Navb = (props) => {
  
  const [selectedOption, setSelectedOption] = useState(null);
  const [subOptions, setSubOptions] = useState(null);

  const handleMainDropdownChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    // Reset sub-options when the main dropdown changes
    setSubOptions(null);
  };
  const handleMainDropdownChang = (event) => {
    const selectedValue = event.target.value;
    props.pass(selectedValue);
  };

  const ordering = (event)=>{
    const selectedValue = event.target.value;
    if(selectedValue === "priority"){
        props.flag("yes");
    }
    else{
        props.flag("no");
    }

  }
  return (
    <nav class="navbar bg-body-tertiary" style={{ border: "2px solid white","background-color":"gray" }}>
      <div className="flex-row">
        <select
          className="drop1"
          value={selectedOption}
          onChange={handleMainDropdownChange}
          style={{ "margin-left": "10px" }}
        >
          <option value="">Adjust Grouping</option>
          <option value="option1">Grouping</option>
        </select>

        {selectedOption && (
          <div>
            <select value={subOptions} onChange={handleMainDropdownChang}>
              {/* <option value="">Select a sub-option</option> */}
              {selectedOption === "option1" && (
                <>
                  <option value="user">user</option>
                  <option value="status">status</option>
                  <option value="priority">Priority</option>
                </> 
              )}
            </select>
          </div>
        )}

        <select
          className="drop1"
          value={selectedOption}
          onChange={handleMainDropdownChange}
          style={{ "margin-left": "10px" }}
        >
          <option value="">Select Ordering</option>
          <option value="option2">Ordering</option>
        </select>
        {selectedOption && (
          <div>
            <select value={subOptions} onChange={ordering}>
              {/* <option value="">Select a sub-option</option> */}
              {selectedOption === "option2" && (
                <>
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </>
              )}
            </select>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navb;
