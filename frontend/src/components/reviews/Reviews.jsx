import React, { useState } from 'react';
import rstyle from './reviews.module.css';
import r1 from '../../assets/reviews/girl-img-study.jpg';
import r2 from '../../assets/reviews/testimonial-v2-1.jpg';
import r3 from '../../assets/reviews/testimonial-v2-2.jpg';

const Reviews = () => {
    const allReviews = [
        {
            id: 1,
            img: "http://skilify.theuxuidesigner.com/images/webp/testimonial-v2-1.webp",
            feedback:
                'If you want to grow your career in the correct direction, you must register on skilify. This will allow you to learn many things from different courses',
            name: 'Bradley Smythe | Student',
        },
        {
            id: 2,
            img: "http://skilify.theuxuidesigner.com/images/webp/testimonial-v2-2.webp",
            feedback: 'Skilify is the best platform that gives us the most meaningful complete courses for your career.',
            name: 'Riaz Surti | Hearthy Foods',
        },
        {
            id: 3,
            img: "http://skilify.theuxuidesigner.com/images/webp/girl-img-study.webp",
            feedback:
                'Are you finding a place where you will get all courses related to your career, then skilify is the right place. Here you will get a wide range of courses from which you can select the one for you.',
            name: 'Mahir Dindsa | Student',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % allReviews.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + allReviews.length) % allReviews.length);
    };

    const currentReview = allReviews[currentIndex];

    return (
        <div className={rstyle.carouselContainer}>
            <div className={rstyle.container}>
                <div className={rstyle.head}>
                    <h1>What our students have to say</h1>
                    <div className={rstyle.navigation}>
                        <button onClick={handlePrev} className={rstyle.navButton}>
                            <i className="bx bx-left-arrow-alt"></i>
                        </button>
                        <button onClick={handleNext} className={rstyle.navButton}>
                            <i className="bx bx-right-arrow-alt"></i>
                        </button>
                    </div>
                </div>
                <div className={rstyle.row}>
                    <div className={rstyle.reviewContainer }>
                        <img src={currentReview.img} alt={currentReview.name} className={rstyle.reviewImage} />
                        <div className={rstyle.reviewContent}>
                            <p className={rstyle.feedback}>{currentReview.feedback}</p>
                            <p>{currentReview.name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
