import { useState } from "react";

export const FAQ = ({faqs}) => {
    const [activeFaqId, setActiveFaqId] = useState(null);

    const faqDescToggle = (id) => {
        setActiveFaqId((prevId) => (prevId === id ? null : id));
    };

    return (
        <div className="new-faq-section py-5">
            <div className="container pb-5">
                <div className="dfvghhgfdvggyre text-center pb-3">
                    <span>Frequently Asked Questions</span>

                    <h2 className="mt-2">
                        <span>FAQ</span>s
                    </h2>

                    <p>
                        Our clients are not just clients, they are our partners. We truly <br />
                        believe in collaboration to make brands grow.
                    </p>
                </div>

                <div className="dienhwerjjr">
                    <div className="accordion row">
                        {faqs.map((faq) => (
                            <div className="col-lg-6 mb-3" key={faq.id}>
                                <div className="accordion-item">
                                    <button
                                        onClick={() => faqDescToggle(faq.id)}
                                        id={`accordion-button-${faq.id}`}
                                        aria-expanded={activeFaqId === faq.id}
                                    >
                                        <span className="accordion-title">{faq.question}</span>
                                        <span className="icon" aria-hidden="true" />
                                    </button>

                                    {activeFaqId === faq.id && (
                                        <div className="accordion-content">
                                            <p>{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}