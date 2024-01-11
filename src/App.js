import { useState } from "react";
import "./App.css";
import Accordion from "./components/accordion/Accordion";

const faqs = [
  {
    id: 1,
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    id: 2,
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    id: 3,
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function App() {
  const [selected, setSelected] = useState(null);

  const handleClick = (id) => {
    setSelected(id !== selected ? id : null);
  };

  return (
    <div className="bg-white h-screen w-screen flex flex-col justify-center items-center">
      {faqs.map((faq) => (
        <Accordion faq={faq} selected={selected} handleClick={handleClick} />
      ))}
    </div>
  );
}

export default App;
