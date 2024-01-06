import { useEffect, useState } from "react"
import BestSelling from "../../components/User/BestSelling"
import Category from "../../components/User/Category"
import Container from "../../components/User/Container"
import Footer from "../../components/User/Footer"
import Hero from "../../components/User/Hero"
import Navbar from "../../components/User/Navbar"
import Products from "../../components/User/Products"
import ProductsScroll from "../../components/User/ProductsScroll"
import UserHeader from "../../components/User/UserHeader"
const Home = () => {
    return (
        <div>
            <Navbar />
            <Container children={<UserHeader />} />
            <Container children={<Hero />} />
            <Container children={<ProductsScroll />} />
            <Container children={<Category />} />
            <Container children={<BestSelling />} />
            <Container children={<Products />} />
            <Footer />

        </div>
    )
}

export default Home
