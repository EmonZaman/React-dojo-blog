const BlogList = ({ blogs, title, handelDelete }) => {

    console.log(blogs)

    return (

        <div className="blog-list">
            <h2>{title}</h2>
            { blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>Books title name: {blog.title}</h2>
                    <h3>author: {blog.author}</h3>
                    <button onClick={() => handelDelete(blog.id)}>Delete</button>

                </div>

            ))



            }

            {/* <h2>Home</h2>
        <h2>{n}</h2>
        <h3>my name is {name}</h3>
        <button onClick={clikButton}>click me</button>
        <button>click me again</button> */}
        </div>

    );
}

export default BlogList;