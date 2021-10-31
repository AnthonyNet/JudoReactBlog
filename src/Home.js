import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

   const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'Mirek Dušín', id: 1},
        {title: 'Welcome', body: 'lorem ipsum...', author: 'Bláža del Mundo', id: 2},
        {title: 'Web dev tips', body: 'lorem ipsum...', author: 'Ovčáček', id: 3},
        {title: 'Solana crypto', body: 'lorem ipsum...', author: 'Mirek Dušín', id: 4},
   ]);

const [name, setName] = useState('mario');
  
const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
}

useEffect(() => {
    console.log(name);
}, [name] )
  

    return(
        <div className="home">
          <BlogList blogs={blogs}  title="All Blogs" handleDelete={handleDelete}/>
          <BlogList blogs={blogs.filter((blog) => blog.author === 'mario' )}  title={"Marios´s blogs"}/>
          <button onClick={() => setName('luigi') }>Change name</button>
        </div>    
    );
}

export default Home;