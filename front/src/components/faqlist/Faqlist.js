import axios from "axios";
import { useState, useEffect } from "react";
import BASE_URL from "../../microComponents/baseUrl/BaseUrl";
import Loading from "../loading/Loading";
const FAQ_URL = BASE_URL + "faq";
export default function Faqlist() {
  const [list, setlist] = useState([]);
  const getFaq = async () => {
    const { data } = await axios.get(FAQ_URL);
    setlist(data);
  };
  useEffect(() => {
    getFaq();
  }, []);

  return (
    <div id="accordionFaq" className="accordion">
      {list.length > 0 ? (
        list.map((faq) => (
          <div
            key={faq.position}
            className="card mb-2 border radius-15"
          >
            <div
              id={"heading" + faq.position}
              className="card-header bg-white pr-0 "
            >
              <h4 className="mr-3 text-right my-1 h6 font-weight-bold text-green"
              
              data-toggle="collapse"
                  data-target={"#collapse" + faq.position}
                  aria-expanded="false"
              >
                
                  {faq.question}
                
              </h4>
            </div>
            <div
              id={"collapse" + faq.position}
              className="collapse"
              aria-labelledby={"heading" + faq.position}
              data-parent="#accordionFaq"
            >
              <div className="card-body">
                <p className="font-14  f-Yekan-Bakh">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <Loading />
      )}
    </div>
  );
}
