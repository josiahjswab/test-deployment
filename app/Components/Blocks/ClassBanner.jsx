import React from "react";
import TypistLoop from "./TypistLoop";

export default function ClassBanner() {
  return (
    <div>
      <div className="image-block flex-center flex-column">
        <div className="dynamic-text-container flex-wrap">
          <div className="learn barlow">
            <TypistLoop />
          </div>
        </div>
        <div className="form-container flex-wrap">
          <div className="sdcs barlow">SAN DIEGO CODE SCHOOL</div>
          <div className="border-temp place-holder-md pm">Embedded Form</div>
        </div>
      </div>
      <div className="form-container-mediaquery flex-wrap">
        <div className="sdcs barlow">SAN DIEGO CODE SCHOOL</div>
        <div className="border-temp place-holder-sm pm">Embedded Form</div>
      </div>
      <div className="spacer-sm"></div>
    </div>
  );
}
