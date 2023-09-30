import React from 'react'
import category from './category.module.css';
import { Link } from 'react-router-dom';
import design from '../../assets/categories/designimg.jpg';
import develeopment from '../../assets/categories/developmentimg.jpg';
import Software from '../../assets/categories/softwareimg.jpg';
import Business from '../../assets/categories/categories.jpg';
import Marketing from '../../assets/categories/marketingimg.jpg';
import Photography from '../../assets/categories/photographyimg.jpg';
import Health from '../../assets/categories/healthimg.jpg';
import Technology from '../../assets/categories/technologyimg.jpg'

const Categories = () => {
    const allCategories = [
        {
            id: 1,
            img: design,
            categoryName: "Design"
        },
        {
            id: 2,
            img: develeopment,
            categoryName: "Development"
        },
        {
            id: 3,
            img: Software,
            categoryName: "IT & Software"
        },
        {
            id: 4,
            img: Business,
            categoryName: "Business"
        },
        {
            id: 5,
            img: Marketing,
            categoryName: "Marketing"
        },
        {
            id: 6,
            img: Photography,
            categoryName: "Photography"
        },
        {
            id: 7,
            img: Health,
            categoryName: "Health & Care"
        },
        {
            id: 8,
            img: Technology,
            categoryName: "Technology"
        }
    ]
    return (
        <div className={category.topcontainer}>
            <div className={category.container}>
                <div className={category.Head}>
                    <h1>Top Categories</h1>
                    <Link to="/" className={category.button}>
                        See All Categories
                    </Link>
                </div>

                <div className={category.allCategories}>
                    <div className={category.grid}>
                        {allCategories.map((item) => (
                            <div className={category.gridItem} key={item.id}>
                                <img src={item.img} alt={item.categoryName} />
                                <p>{item.categoryName}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories;
