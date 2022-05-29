export default function SourcePost(props) {
  return (
    <div className="col-md-8 col-12 py-3 mx-auto">
    {props.list.map((post,index) => (
        <div className="radius-10 shadow overflow-hidden mb-3 pb-3" key={post.id}>
          <div className="bg-ashy px-3 pt-2">
            <h6 className="p-0 text-center">سوال {post.title}</h6>
          </div>
          <div className="p-3 text-right font-14">محتوا</div>
        </div>
    ))}
    
    </div>
    
  );
}
