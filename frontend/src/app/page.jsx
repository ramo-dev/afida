"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import hero from "./assets/images/hero.jpeg"
import section2 from "./assets/images/section2.jpeg";
import section3 from "./assets/images/section3.jpeg";
import WhyBlockchain from "./components/WhyBlockchain";
import Button from "./components/Button";


const LandingPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);



  const faqs = [
    {
      question: "How does crowdfunding on blockchain work?",
      answer: "Crowdfunding on blockchain allows transparency in transactions, where funds are managed via smart contracts, ensuring secure and traceable donations.",
    },
    {
      question: "How do I start a campaign?",
      answer: "Starting a campaign is easy! Click on 'Get Started', create a wallet, and set up your campaign with a title, description, and fundraising goal.",
    },
    {
      question: "What types of projects can I fund?",
      answer: "You can fund a variety of projects, including startups, creative endeavors, community initiatives, and charitable causes. Just make sure they comply with our platform's guidelines.",
    },
    {
      question: "Are there any fees associated with crowdfunding?",
      answer: "Yes, there are minimal transaction fees involved in processing donations. These fees are significantly lower compared to traditional crowdfunding platforms.",
    },
    {
      question: "How can I ensure my donation is secure?",
      answer: "All transactions are secured through blockchain technology, which provides a transparent and tamper-proof record of all activities, ensuring the safety of your funds.",
    },
    {
      question: "Can I track the progress of a campaign?",
      answer: "Absolutely! You can track the progress of any campaign through the platform, including the total amount raised and the number of backers.",
    },
    {
      question: "What happens if a campaign does not reach its goal?",
      answer: "If a campaign does not reach its funding goal, funds will be returned to the backers, ensuring that no one loses their money without the project being funded.",
    },
    {
      question: "How can I promote my campaign?",
      answer: "Promoting your campaign can be done through social media, email newsletters, and leveraging your personal network. We also provide tools to help you reach a wider audience.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="bg-black text-white sm:px-4 lg:px-8 pt-5 mx-auto">
      {/* Hero Section */}
      <section className="min-h-full flex flex-col-reverse md:flex-row items-center px-6 sm:px-10 py-12 md:py-0">
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-5xl lg:text-7xl font-bold">Crowdfunding Made Easy</h1>
          <p className="mt-4 text-base sm:text-lg">
            Effortless fundraising for your projects, whether it’s illness, NGO campaigns, or personal projects. We provide seamless solutions.
          </p>
          <div className="mt-6 flex items-center flex-row space-x-4">
            <Button name="Join today" variant="secondary" href="/register" />
            <Button name="View Campaigns" href="/campaigns" variant="primary" />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image src={hero} alt="hero" width={500} height={500} className=" md:block hidden" />
        </div>
      </section>

      {/* Simple, Secure, Transparent Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center px-6 sm:px-10 py-20">
        <div className="w-full md:w-1/2">
          <Image src={section2} alt="section2" width={500} height={500} className="w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2 md:px-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">Simple. Secure. Transparent.</h2>
          <p className="text-base sm:text-lg my-5">Blockchain crowdfunding empowers creators and backers with unmatched transparency, security, and fairness. Join us today and start making a real impact!</p>
          <p className="text-base sm:text-lg my-5">
            Start a campaign, receive funds through smart contracts, and track donations—all on blockchain.
          </p>
          <Button name="Learn More" variant="secondary" />
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20 bg-black text-white px-3">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">It’s as Simple as 1, 2, 3</h2>
        </div>

        <div className="flex flex-col sm:flex-row justify-center space-y-8 sm:space-y-0 sm:space-x-12">
          <div className="text-center">
            <div className="border-primary border-4 text-2xl rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">1</div>
            <p className="font-bold">Create an account</p>
            <p className="mt-2 text-gray-400">Set up an account with Afida.</p>
          </div>

          <div className="text-center">
            <div className="border-primary border-4 text-2xl rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">2</div>
            <p className="font-bold">Connect Your Wallet</p>
            <p className="mt-2 text-gray-400">Link your crypto wallet for transactions.</p>
          </div>

          <div className="text-center">
            <div className="border-primary border-4 text-2xl rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">3</div>
            <p className="font-bold">Receive Funds</p>
            <p className="mt-2 text-gray-400">Get donations securely and transparently.</p>
          </div>
        </div>
      </section>

      {/* Why Pay More Section */}
      <section className="md:min-h-screen flex flex-col md:flex-row items-center px-6 sm:px-10 py-20">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">Why Pay More for Less?</h1>
          <p className="mt-4 text-base sm:text-lg">
            We use Base_L2 to cut down transaction costs, so you keep more of your donations. Secure, fast, and transparent - because why should your money get lost in fees?
          </p>
          <div className="mt-6 space-x-4">
            <Button name="Get Started" variant="secondary" />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:block hidden">
          <Image
            src={section3}
            alt="section3"
            width={500}
            height={500}
            className="w-full h-auto hue-rotate-[10%] brightness-50 contrast-200 "
          />
        </div>
      </section>

      {/* Why Blockchain Section */}
      <section className="md:block hidden">
        <WhyBlockchain />
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 sm:px-10 bg-black">
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">Have Questions? We Got Answers.</h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-600 pb-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-bold">{faq.question}</h3>
                <span className="text-primary text-2xl rounded-full px-[0.6rem] border-2 border-primary">
                  {openFAQ === index ? '-' : '+'}
                </span>
              </div>
              {openFAQ === index && <p className="mt-3 text-gray-400">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
