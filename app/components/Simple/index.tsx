"use client";
import React, { useState } from "react";

const HomePage = () => {
  const [showRecentUpdates, setShowRecentUpdates] = useState(true);

  const firmUpdates = [
    {
      title: "Annual General Meeting",
      description:
        "The Annual General Meeting (AGM) is scheduled for next month. All stakeholders are invited to attend.",
      icon: "fa-calendar-alt",
      timestamp: "October 20, 2024, 3:00 PM",
    },
    {
      title: "Office Relocation",
      description:
        "Our office is relocating to a new address. Please update your records and visit us at the new location.",
      icon: "fa-map-marker-alt",
      timestamp: "October 15, 2024, 11:00 AM",
    },
    {
      title: "Employee Training Program",
      description:
        "A new employee training program has been introduced. Enroll now to enhance your skills and knowledge.",
      icon: "fa-chalkboard-teacher",
      timestamp: "October 10, 2024, 9:00 AM",
    },
    {
      title: "New Product Launch",
      description:
        "We are excited to announce the launch of our new product. Check out the features and benefits.",
      icon: "fa-box-open",
      timestamp: "October 5, 2024, 2:00 PM",
    },
    {
      title: "Quarterly Earnings Report",
      description:
        "The latest quarterly earnings report is now available. Review the financial performance and key metrics.",
      icon: "fa-chart-line",
      timestamp: "October 1, 2024, 10:00 AM",
    },
  ];

  return (
    <>
      {showRecentUpdates && (
        <>
          <div>
            <div className="mx-auto max-w-10xl mt-16 px-6 mb-20 relative">
              <div className="radial-bgone hidden lg:block"></div>
              <div className="text-center mb-14">
                <h3 className="text-offwhite text-3xl md:text-5xl font-bold mb-3">
                Recent Updates and News 📢
                </h3>
                <p className="text-bluish md:text-lg font-normal leading-8">
                 Take a Peek on what's happening at Alphagrep Recently.
                </p>
                <section
                  className="max-w-screen-xl xl:max-w-screen-2xl mx-2 sm:mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6 pb-20 sm:py-8 rounded-[2.25rem] sm:rounded-xl shadow-lg sm:shadow-md mt-10 mb-20 section-transition"
                  style={{ border: "2px solid rgba(48, 47, 47, 0.8)" }}
                >
                  <div>
                    <ul className="space-y-6">
                      {firmUpdates.map((update, index) => (
                        <li
                          key={index}
                          className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-b border-gray-300 last:border-none"
                        >
                          <div className="flex items-start space-x-4">
                            <i
                              className={`fas ${update.icon} text-3xl text-blue-500`}
                            ></i>
                            <div className="flex-1">
                              <div className="flex justify-between items-center mb-2">
                                <h4 className="text-xl font-semibold text-gray-800">
                                  {update.title}
                                </h4>

                                <p className="text-sm text-gray-500">
                                  {update.timestamp}
                                </p>
                              </div>
                              <p className="text-sm text-gray-600 mb-2 text-left">
                                {update.description}
                              </p>
                              <div className="flex justify-between items-center">
                                <a
                                  href="#"
                                  className="text-sm text-blue-500 underline hover:text-blue-700 transition-colors duration-200"
                                >
                                  know more
                                  <i className="fas fa-angle-double-right ml-1"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HomePage;
