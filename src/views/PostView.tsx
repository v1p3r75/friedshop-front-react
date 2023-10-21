import React from 'react'
import Footer from './includes/Footer';
import Header from './includes/Header';
import { apiCategory, blogInfo } from './VirtualData';
import Banner from '../components/Banner';
import BlogDetails from '../components/BlogDetails';
import SearchBar from '../components/SearchBar';
import { Category } from './includes/Section';
import Tags from '../components/Tags';
import Archives from '../components/Archives';
import { Link } from 'react-router-dom';

const PostView = () => {

  return (
    <>
        <Header />
        <Banner page='Blog Details' path={['Home', 'Blog Details']} />
        <div className="shop d-flex flex-wrap gap-3 my-3 text-black p-3 p-lg-5"> 
          <div className="post-section col-12 col-lg-8"> 
            <BlogDetails {...blogInfo[0]} />
          </div>
          <aside className='col-12 col-lg-3'>
            <SearchBar />
            <div className="category-list text-black bg-white w-100 border border-1 fd-hover-border-primary p-3 my-5">
              <h5>Categories</h5><hr />
              <div className="d-flex flex-column gap-2">
                {
                  apiCategory.map((category) => <Category category={category} key={category.id}/>)
                }
              </div>
            </div>
            <div className="top-posts text-black bg-white w-100 border border-1 fd-hover-border-primary p-3 my-5">
                <h5>Recents Posts</h5><hr />
                {
                  blogInfo.map((blogInfo) => {
                    return <div key={blogInfo.blod_id} className='d-flex gap-3 mb-3'>
                      <div className="post-image w-25"><Link to={"/blog/" + blogInfo.blod_id} className='text-black'><img src={blogInfo.img} alt={blogInfo.title} className='w-100 h-75'/></Link></div>
                      <div className="post-details">
                        <h6 className="fw-bold m-0"><Link to={"/blog/" + blogInfo.blod_id} className='text-black'>{blogInfo.title}</Link></h6>
                        <div><span className="opacity-50">{blogInfo.date}</span></div>
                      </div>
                    </div>
                  })
                }
            </div>
            <Tags />
            <Archives />
          </aside>
        </div>
        <Footer />
    </>
)

}

export default PostView;