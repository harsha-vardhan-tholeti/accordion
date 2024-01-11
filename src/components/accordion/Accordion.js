import React from "react";

function Accordation({ faq, handleClick, selected }) {
  return (
    <div key={faq.id} className="w-[500px] bg-gray-200 m-4 rounded-2xl p-4">
      <div className="flex justify-between items-center mb-2">
        <p>{faq.title}</p>
        <div className="pb-[5px]" onClick={() => handleClick(faq.id)}>
          {faq.id !== selected ? (
            <p className="text-2xl">+</p>
          ) : (
            <p className="text-2xl">-</p>
          )}
        </div>
      </div>
      {faq.id === selected && (
        <div>
          <p>{faq.text}</p>
        </div>
      )}
    </div>
  );
}

export default Accordation;
