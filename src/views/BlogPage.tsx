import React from 'react'
import Footer from './includes/Footer';
import Header from './includes/Header';
import { blogInfo } from './VitualData';
import { BlogAndNews } from './includes/Section';
import Banner from '../components/Banner';

const BlogPage = () => {

  return (
    <>
        <Header />
        <Banner page='Blog' path={['Home', 'Blog']} />
        <div className="px-5 my-5 text-black">
            <BlogAndNews />
            <div className="mt-5"><BlogAndNews /></div>
        </div>
        <Footer />
    </>
)

}

export default BlogPage;