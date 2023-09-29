import React from 'react'
import img1 from '../../assets/courses/crd-img.jpg';
import img2 from '../../assets/courses/crd-img2.jpg'
import img3 from '../../assets/courses/crd-img3.jpg';
import img4 from '../../assets/courses/crd-img4.jpg';
import img5 from '../../assets/courses/crd-img5.jpg';
import star from '../../assets/courses/star.svg';
import play from '../../assets/courses/crd-play.svg';
import view from '../../assets/courses/crd-view.svg';
import { Link } from 'react-router-dom'
import courses from './courses.module.css'


const Courses = () => {
    const allCourses = [
        {
            id: 1,
            img: img1,
            courseName: "Learn Python Programming Beginner",
            stars: 4.5,
            views: "49,00",
            plays: 9,
            price: 200,
            discountedPrice: 150
        },
        {
            id: 2,
            img: img2,
            courseName: "Statistics Data Science and Business Analysis",
            stars: 4.3,
            views: "23,00",
            plays: 7,
            price: 150,
            discountedPrice: 99.99
        },
        {
            id: 3,
            img: img3,
            courseName: "Learn HTML5 Programming Beginning",
            stars: 4.7,
            views: "70,00",
            plays: 15,
            price: 100,
            discountedPrice: 70
        },
        {
            id: 4,
            img: img1,
            courseName: "Software Development From A to Z Beginner",
            stars: 4.2,
            views: "35,00",
            plays: 12,
            price: 250,
            discountedPrice: 220
        },
        {
            id: 5,
            img: img4,
            courseName: "Graphic Design Masterclass for Beginning",
            stars: 4.5,
            views: "49,00",
            plays: 9,
            price: 100,
            discountedPrice: 50
        },
        {
            id: 6,
            img: img5,
            courseName: "The Complete JavaScript Course Beginner",
            stars: 4.8,
            views: "85,00",
            plays: 17,
            price: 320,
            discountedPrice: 270
        }

    ]
    return (
        <div>
            <div className={courses.container}>
                <div className={courses.Head}>
                    <h1>Get choice of your course</h1>
                    <Link to="/" className={courses.button}>
                        View All
                    </Link>
                </div>

                <div className={courses.allCourses}>
                    <div className={courses.grid}>
                        {allCourses.map((course) => (
                            <div className={courses.gridItem} key={course.id}>

                                <img src={course.img} alt={course.courseName} />



                                <div className={courses.infoItems}>
                                    <p>
                                        <img src={star} alt="star" /> {course.stars}
                                    </p>
                                    <p>
                                        <img src={view} alt="star" /> {course.views}
                                    </p>
                                    <p>
                                        <img src={play} alt="star" /> {course.plays}
                                    </p>


                                </div>
                                <h3>{course.courseName}</h3>
                                <div className={courses.priceInfo}>
                                    <p className={courses.discountedPrice}>${course.discountedPrice}</p>
                                    <p className={courses.Originalprice}>${course.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses