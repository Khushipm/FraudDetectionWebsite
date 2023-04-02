import React, { useEffect } from "react";
import Link from "next/link";

import IndexNavbar from "../components/Navbars/IndexNavbar.js";
import Footer from "../components/Footers/Footer.js";
import Image from "next/image";
import Layout from "../components/Layout.jsx";

export default function Index() {
  return (
    <Layout title="Home / Stocky">
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px mb-30">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-8">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
              FraudShield - Credit Card Fraud Detection System
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              A software application that uses historical transaction data and real-time monitoring to identify and prevent fraudulent activity on credit cards.
              </p>
              <div className="mt-12">
                <Link href="/">
                  <a className="get-started bg-black text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-800 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
                    Get started
                  </a>
                </Link>

                {/* <a
                  href="https://github.com/sarvesh2902/Hackanova_CTRL-ALT-ELITE"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github Repo
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute top-20 b-auto right-0 pt-12 sm:w-6/12 -mt-26 sm:mt-0 w-100 max-h-860-px"
          src="https://img.freepik.com/free-vector/couple-securing-their-online-banking_53876-8767.jpg"
          alt="..."
        />
      </section>

      <section
        id="main"
        className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100"
      >
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          {/* <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg> */}
        </div>
        <div className="container mx-auto mt-20">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-5/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-black w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                <img
                  alt="..."
                  src="https://ecm.capitalone.com/WCM/bank/landing-pages/features/security-fraud-protection/security-fraud-protection-e4-checkered/06090-360checkingfeaturehub-21.4-security-mech-e4.b-desktop-1/rmobile.jpg"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  {/* <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-blueGray-700 fill-current"
                    ></polygon>
                  </svg> */}
                  <h4 className="text-xl font-bold text-white">
                  FraudShield - Credit Card Fraud Detection System
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    The credit card fraud detection system app uses advanced algorithms 
                    and machine learning techniques to analyze credit card transactions 
                    and identify any suspicious activity that may indicate fraud.</p>
                    <p className="text-md font-light mt-2 text-white">
                    Overall, credit card fraud detection systems use a combination 
                    of these techniques to monitor transaction data in real-time and 
                    identify any suspicious activity. By doing so, they can help prevent 
                    fraudulent transactions from occurring and protect customers from 
                    financial losses.
                  </p>
                  {/* <p className="text-md font-light mt-2 text-white">
                    Overall, a digital SCM system helps businesses improve their
                    supply chain visibility, reduce costs, increase efficiency,
                    and improve customer satisfaction.
                  </p> */}
                </blockquote>
              </div>
            </div>

            <div id="sol" className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-2">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                          />
                        </svg>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                      Real-time monitoring
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      Credit card fraud detection systems must be able 
                      to monitor transactions in real-time to detect any
                       suspicious activity.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
                          />
                        </svg>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                      Risk Assessment
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      The system assigns a risk score to each transaction
                       based on its likelihood of being fraudulent. 
                       Transactions with high risk scores are flagged for
                        further review.


                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                          />
                        </svg>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                      Data analytics
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      Fraud detection systems often use data analytics
                       to identify trends and patterns that may indicate 
                       fraud. 
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                          />
                        </svg>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                      Integration with  systems
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      The fraud detection system needs to be integrated
                       with other systems such as banking systems, payment 
                       processors, and customer service systems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-32">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                  />
                </svg>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Transportation Services
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Transportation services refer to the services provided by
                logistics that allows businesses to identify and optimize their
                transportation operations and improve supply chain efficiency
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Freight transportation
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Increased Efficiency
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2">
                  Transportation management
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2">
                  Last-mile delivery
                </span>
              </div>
              <Link href="/disease">
                <a className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150">
                  View
                  <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
                </a>
              </Link>
            </div>

            <div className="w-96 md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <img
                alt="..."
                src="https://img.freepik.com/free-vector/internet-store-goods-international-shipment_335657-2454.jpg"
                className="w-full align-middle rounded-t-lg"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center pt-22">
            <div className="w-96 md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <img
                alt="..."
                src="https://img.freepik.com/free-vector/supply-chain-management-abstract-concept-vector-illustration-logistics-operations-control-storage-goods-services-product-delivery-retail-distribution-transportation-abstract-metaphor_335657-1780.jpg?w=360"
                className="w-full align-middle rounded-t-lg"
              />
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Supply Chain Logistics
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                By optimizing their supply chain logistics processes, businesses
                can reduce costs, improve delivery times, and enhance customer
                satisfaction, ultimately leading to increased profitability and
                growth.
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Warehousing and inventory management
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Order fulfillments
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Cost Savings
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Supply chain visibility
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Supply chain optimization
                </span>
              </div>
              <Link href="/fertilizer">
                <a className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150">
                  View
                  <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
                </a>
              </Link>
            </div>
          </div>

          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
                  />
                </svg>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Digital Solutions
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Services provided by logistics companies to help businesses
                manage their warehousing and inventory operations.These services
                are designed to help businesses optimize their warehouse
                operations and improve their supply chain efficiency.
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Inventory management
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Order fulfillment
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2">
                  Cross-docking
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2">
                  Value-added services
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white  last:mr-0 mr-2 mt-2">
                  Quality control and inspection
                </span>
              </div>
              <Link href="/crop">
                <a className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150">
                  View
                  <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
                </a>
              </Link>
            </div>

            <div className="w-96 md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <img
                alt="..."
                src="https://img.freepik.com/free-vector/handling-order-processing-abstract-concept-vector-illustration-order-documentation-processing-system-handling-customer-request-logistics-automated-logistics-operations-abstract-metaphor_335657-1789.jpg?w=2000"
                className="w-full align-middle rounded-t-lg"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center pt-22">
            <div className="w-96 md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <img
                alt="..."
                src="https://img.freepik.com/free-vector/logistics-industry-freight-profit-analyzing-supply-chain-analytics-transportation-providers-data-transportation-costs-optimization-concept-pinkish-coral-bluevector-isolated-illustration_335657-1765.jpg?w=360"
                className="w-full align-middle rounded-t-lg"
              />
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                  />
                </svg>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Financial solutions
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                By implementing these SCM financial solutions, businesses can
                improve their financial performance related to the supply chain,
                reduce costs , and enhance supplier relationships.
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Improved Planning
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Increased Efficiency
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Reduced Losses
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Financial analytics and reporting
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Working capital optimization
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2  rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Supply chain financing
                </span>
              </div>
              <Link href="/weather">
                <a className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150">
                  View
                  <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
                </a>
              </Link>
            </div>
          </div>
        </div> */}
      </section>

      <section className="pb-16 bg-blueGray-200 relative pt-32">
        {/* <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div> */}

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <h3 className="font-semibold text-3xl">Let&apos;s get started</h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
              FraudShield - Credit Card Fraud Detection System
              </p>
              <div className="sm:block flex flex-col mt-10">
                <Link href="/disease">
                  <a className="get-started text-white bg-black font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-800 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">
                    Get started
                  </a>
                </Link>

                {/* <a
                  href="https://github.com/sarvesh2902/Hackanova_CTRL-ALT-ELITE"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github Repo
                </a> */}
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
}
