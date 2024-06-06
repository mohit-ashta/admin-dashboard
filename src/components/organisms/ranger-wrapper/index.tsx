// import { rangeDataprops } from "@/constants/types";
// import React, { useState } from "react";
// import ReactSlider from "react-slider";

// export const RangeWrapper: React.FC<rangeDataprops> = ({
//   max,
//   min,
//   onChange,
//   value,
//   firstName,
//   lastName,
//   lastValueName,
//   valueName,
//   lastFormatName,
// }) => {
//   const [sliderValue, setSliderValue] = useState<any>(value);

//   const handleChange = (newValue: number | number[]) => {
//     if (typeof newValue === 'number') {
//       setSliderValue(newValue);
//       onChange(newValue);
//     } else if (Array.isArray(newValue) && newValue.length > 0) {
//       setSliderValue(newValue[0]);
//       onChange(newValue[0]);
//     }
//   };

//   return (
//     <>
//       <ReactSlider
//         className="horizontal-slider"
//         thumbClassName="example-thumb"
//         trackClassName="example-track"
//         max={max}
//         min={min}
//         defaultValue={[min, value]}
//         onChange={handleChange}
//         minDistance={10}
//         pearling
//       />
//       <div className="range-box-wrapper d-flex justify-content-between">
//         <div className="d-flex flex-column">
//           <span className="range-year">
//             {sliderValue} {valueName}
//           </span>
//           <span className="range-validate">{firstName}</span>
//         </div>
//         <div className="d-flex flex-column">
//           <span className="range-year">
//             {sliderValue} {lastValueName} {lastFormatName}
//           </span>
//           <span className="range-validate">{lastName}</span>
//         </div>
//       </div>
//     </>
//   );
// };
