import Articleslist from "../../blocks/articleslist/Articlesist";
import UseDocumentTitle from "../../components/useDocumentTitle/UseDocumentTitle";
function Articles() {
  UseDocumentTitle({
    title: 'مجله ها',
      metaDescription: 'ایران چارت | مجله ها'
  })
  return (
    <div className="Articles">
      <div className="container py-5">
        <div className="row pt-5">
          <h1 className="col-12 text-center h2 pb-3"> مقالات</h1>
        </div>
        <Articleslist/>
      </div>
    </div>
  );
}

export default Articles;
