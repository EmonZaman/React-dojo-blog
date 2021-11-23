import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlog] = useState([
        { title: 'teri meri kahani', body: 'it a long story', author: 'soumik roy', id: 1 },
        { title: 'chairman', body: 'its a story about love', author: 'Shojib', id: 2 },
        { title: 'New Love', body: 'its a romantic love story, that everyone knows ', author: 'Sourav Paul', id: 3 }

    ]); 
const [name, setName] = useState('lungi');

    const handelDelete = (id) => {
        const newBlog = blogs.filter(blog => blog.id != id);
        setBlog(newBlog)
    }
    useEffect(() => {
        console.log(1);
    },[name]
);

return (
    <div className="home">
        <BlogList blogs={blogs} title="all array elements" handelDelete={handelDelete} />
        {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'soumik roy')} title="soumiks bnlog" /> */}
        <button onClick={()=> setName('nigidi')}>Change name</button>
        <p>{name}</p>
    </div>


);
}

export default Home;