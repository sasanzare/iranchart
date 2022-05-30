import { Link } from "react-router-dom";
import { Styles } from "./SourcePost.css";

export default function SourcePost(props) {
  return (
    <div className="col-md-8 col-12 py-3 mx-auto">
    {props.list.map((post,index) => (
        <div className="radius-10 shadow overflow-hidden mb-3 pb-3" key={post.id}>
          <div className="bg-ashy px-3 pt-2">
            <h6 className="p-1 text-center small">سوال {post.slug}: {post.title}
            </h6>
          </div>
          <div className="p-3 text-right box-context">
            <p className="overflow-hidden " dangerouslySetInnerHTML={{ __html: post.body }}>

            </p>
            <Link className="btn float-left small font-12 border radius-20" to={"/article/" + post.id} >ادامه مطلب</Link>
          </div>
        </div>
    ))}
    
    </div>
    
  );
}
