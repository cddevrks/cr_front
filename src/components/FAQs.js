import React, { useState } from "react";
import "./FAQs.css"; // Make sure to import the CSS file for transitions
import SectionTitle from "./SectionTitle";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null); // Track the currently open FAQ index

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close for the clicked index
  };

  const faqs = [
    {
      question: "Who can participate in the program?",
      answer:
        "All college students and school students from 8th to 12th grade are eligible to participate in the program.",
    },
    {
      question: "How do I register for the program?",
      answer: 'To register, click on the "Register Now" button on our website. You should login through google and then fill in your details, choose whether you are a school or college representative.',
    },
    {
      question: "What kind of tasks will we be doing?",
      answer:
        "Participants will engage in various social activities and challenges designed to create positive change in society. There will be both group and individual tasks.",
    },
    { question: "How are participants grouped?", answer: "Students from the same college will be grouped together. There are both group and individual tasks. For group tasks, every group member will receive the same points." },
    {
      question: "Can I participate in both individual and group tasks?",
      answer: "Yes, you can participate in both individual and group tasks. Your performance in these tasks will contribute to your points and standings on the respective leaderboards.",
    },
    {
      question: "How can I see my position on the leaderboard?",
      answer: "Your position on the college and individual leaderboards will be visible based on the points you have earned. The leaderboards will be regularly updated to reflect the latest standings.",
    },
  ];

  return (
    <section id="faqs" className="bg-[#230c3c] text-gray-300 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center">
        <SectionTitle title="FAQs"/>
        <h2 className="text-center font-oswald text-xl text-gray-300 pb-3" data-aos="fade-up">What d'ya wanna know, matey?</h2>
          <div className="grid w-[75%]  grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
            {faqs.map((item, index) => (
              <div className="faq-item" key={index} data-aos="fade-up">
                <button
                  className="p-6 hoverable border-b-2 text-start text-xl flex flex-col w-full"
                  onClick={() => handleClick(index)}
                >
                  <div className="flex justify-between items-center pb-3 w-full">
                    <h3 className="text-xl font-medium font-chelsea">
                      {item.question}
                    </h3>
                    <div className="text-gray-300 hover:text-gray-500 text-3xl">
                      {openIndex === index ? "-" : "+"}
                    </div>
                  </div>
                  <div
                    className={`faq-answer ${
                      openIndex === index ? "open" : ""
                    }`}
                  >
                    <p className="text-gray-400 font-oswald">{item.answer}</p>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;