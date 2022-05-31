export default function UseDocumentTitle(data = {}) {
  data.title = data.title || 'ایران چارت';
  data.metaDescription = data.metaDescription || 'فارکس, کریپتو,ایران چارت';
  document.title = data.title;
  document.querySelector('meta[name="description"]').setAttribute('content', data.metaDescription);
}
