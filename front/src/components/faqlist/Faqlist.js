import axios from 'axios';
import {useState, useEffect} from 'react'
function Faqlist() {
    let content = null;
    const [list, setlist] = useState(null);

    useEffect( ()=>{
        axios.get('http://localhost:8000/api/v1/faq')
        .then(resp =>setlist(resp.data))
    },[]);

    if(list) {
        content = list.map((faq) =>{
            return <div key={faq.position} className="card mb-2 border border-dark radius-15">
            <div id={"heading"+faq.position} className="card-header bg-white pr-0 ">
              <h4 className="mr-3 text-right my-1">
                <span
                  className="pr-0 btn photo-grey text-right collapsed"
                  data-toggle="collapse"
                  data-target={"#collapse"+faq.position}
                  aria-expanded="false"
                >
                  {faq.question}
                </span>
              </h4>
            </div>
            <div id={"collapse"+faq.position}className="collapse" aria-labelledby={"heading"+faq.position} data-parent="#accordionFaq">
              <div className="card-body">
                <p className="font-14  f-Yekan-Bakh">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        })
    }
  return (
      <div id="accordionFaq" className="accordion">
        {content}
      </div>
  );
}
export default Faqlist;
