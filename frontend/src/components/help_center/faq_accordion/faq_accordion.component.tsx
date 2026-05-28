import { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

const FAQAccordion: FC<FAQAccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq-section"
      className="scroll-mt-28 transition-colors duration-300"
    >
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 mb-4">
          <i className="fa-solid fa-circle-question"></i>
          <span className="text-sm font-semibold">
            FREQUENTLY ASKED QUESTIONS
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
          Common Questions
        </h2>

        <p className="text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
          Find quick answers to the most common StorySparkAI questions,
          workflows, and troubleshooting topics.
        </p>
      </div>

      {/* Empty state */}
      {items.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 dark:border-white/10 bg-slate-100 dark:bg-white/[0.03] p-12 text-center">
          <div className="w-20 h-20 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center mx-auto mb-5">
            <i className="fa-solid fa-question text-3xl text-slate-500"></i>
          </div>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            No FAQs Found
          </h3>

          <p className="text-slate-600 dark:text-slate-400">
            Try searching with different keywords.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {items.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className="
                  group overflow-hidden
                  rounded-3xl
                  border border-slate-200 dark:border-white/10
                  bg-white dark:bg-white/[0.04]
                  backdrop-blur-xl
                  shadow-md hover:shadow-xl
                  transition-all duration-300
                "
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="
                    w-full flex items-center justify-between
                    px-6 py-5 text-left
                    transition-all duration-300
                    hover:bg-slate-50 dark:hover:bg-white/[0.03]
                    cursor-pointer
                  "
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div
                      className={`
                        mt-1 flex items-center justify-center
                        w-11 h-11 rounded-xl
                        transition-all duration-300
                        ${
                          isOpen
                            ? "bg-indigo-500/20 text-indigo-400"
                            : "bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400"
                        }
                      `}
                    >
                      <i className="fa-solid fa-question"></i>
                    </div>

                    {/* Question */}
                    <div>
                      <h3
                        className={`
                          text-lg font-semibold transition-colors duration-300
                          ${
                            isOpen
                              ? "text-indigo-500 dark:text-indigo-400"
                              : "text-slate-900 dark:text-white"
                          }
                        `}
                      >
                        {faq.question}
                      </h3>
                    </div>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`
                      flex items-center justify-center
                      w-10 h-10 rounded-xl
                      border transition-all duration-300
                      ${
                        isOpen
                          ? "bg-indigo-500/20 border-indigo-500/20 text-indigo-400"
                          : "bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400"
                      }
                    `}
                  >
                    <i className="fa-solid fa-chevron-down"></i>
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6">
                        <div className="pl-[60px]">
                          <div className="rounded-2xl bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 p-5">
                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Top Glow Line */}
                <div
                  className={`
                    h-[2px] w-full bg-gradient-to-r
                    from-indigo-500 via-blue-500 to-purple-500
                    transition-opacity duration-300
                    ${isOpen ? "opacity-100" : "opacity-0"}
                  `}
                />
              </motion.div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default FAQAccordion;