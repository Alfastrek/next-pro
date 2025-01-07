'use client';
import Image from 'next/image';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

interface faqdata {
  heading: string;
  subheading: string;
}

const faqdata: faqdata[] = [
  {
    heading: '1. What is cryptocurrency?',
    subheading:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into',
  },
  {
    heading: '2. Can cryptocurrency be converted to cash?',
    subheading:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into',
  },
  {
    heading: '3. How long should you hold cryptocurrency?',
    subheading:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into',
  },
];

const Faq = () => {
  return (
    <div className="mx-auto max-w-10xl mt-16 px-6 mb-20 relative">
      <div className="my-20 px-6" id="faq-section">
        <div className="text-center mb-14">
          <h3 className="text-neon-yellow text-3xl md:text-5xl font-bold mb-3">
            Frequently Asked Questions ❓
          </h3>
          <p className="text-bluish md:text-lg font-normal leading-8">
            Find answers to the most common questions below.
          </p>
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2">
            {/* Column-1 */}
            <div>
              <div className="w-full px-4 pt-16">
                {faqdata.map((items, i) => (
                  <div
                    className="mx-auto w-full max-w-5xl rounded-2xl bg-blue py-8 px-6 mb-5"
                    key={i}
                  >
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full justify-between rounded-lg text-offwhite sm:px-4 sm:py-2 text-left md:text-2xl font-medium">
                            <span>{items.heading}</span>
                            <ChevronDownIcon
                              className={`${
                                open ? 'rotate-180 transform' : ''
                              } h-5 w-5 text-purple-500`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-4 pt-4 pb-2 md:text-lg text-bluish font-normal opacity-50">
                            {items.subheading}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </div>
                ))}
              </div>
            </div>

            {/* Column-2 */}
            <div className="mt-32">
              <Image
                src={'/images/Faq/faq.svg'}
                alt="faq-image"
                width={941}
                height={379}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
