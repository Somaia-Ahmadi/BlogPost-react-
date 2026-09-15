import "./BlogPost.css";

function BlogPost(){
    return(
        <div className="Blog-card">
            <img className="Blog-image" src="/girl react.png"  alt=" girl learning react"/>

            <div className="Blog-content">
                <h1> Learn React Components</h1>

                <p className="blog-infor"> By Somaia Ahmadi . sep 14/ 2026</p>

                <p className="blog-desript"> Learn basics of react components and jsx</p>

                <a href="./https://github.com/Somaia-Ahmadi/BlogPost-react-"> My GitHub links</a>
                <br>
                </br>

                <button className="btn"> Read more</button>

            </div>
             
        </div>
    );
}

export default BlogPost;
