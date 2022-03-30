import Inputfield from "../../components/inputfield/Inputfield";
import { useState } from "react";
import Lable from "../../microComponents/lable/Lable";
import Textarea from "../../components/textarea/Textarea";
function Order() {
  const [name, setName] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [phoone, setPhoone] = useState("");
  const [email, setEmail] = useState("");
  const [digit, setDigit] = useState("");
  return (
    <div className="Order container pt-5">
      <div className="row flex-column py-5">
      <form>
        <div className="col-lg-6 col-md-7 col-sm-9 col-11 shadow mx-auto p-3 rounded">
          
            <Lable title="نام و نام‌خانوادگی" />
            <Inputfield
              type="text"
              myclass=""
              value={(e) => setName(e.target.value)}
            />
            <Lable title="استان" />
            <Inputfield
              type="text"
              myclass=""
              value={(e) => setProvince(e.target.value)}
            />
            <Lable title="شهر" />
            <Inputfield
              type="text"
              myclass=""
              value={(e) => setCity(e.target.value)}
            />
            <Lable title="آدرس کامل" />
            <Inputfield
              type="text"
              myclass=""
              value={(e) => setAddress(e.target.value)}
            />
            <Lable title="شماره تماس" />
            <Inputfield
              type="number"
              myclass=""
              value={(e) => setPhoone(e.target.value)}
            />
            <Lable title="ایمیل" />
            <Inputfield
              type="email"
              myclass=""
              value={(e) => setEmail(e.target.value)}
            />
            <Lable title="توضیحات" />
            <Textarea
              myclass=""
              placeholder="یادداشت درباره سفارش شما"
              rows="3"
              value={(e) => setEmail(e.target.value)}
            />
         
        </div>
        <div className="col-lg-6 col-md-7 col-sm-9 col-11 shadow mx-auto p-3 rounded mt-3">
          
            <div className="row pt-3">
              <span class="col-4 text-center">محصول</span>
              <span class="col text-center">قیمت</span>
              <span class="col text-center">تعداد </span>
              <span class="col text-center">جمع </span>
              <hr class="col-10" />
            </div>
            <div className="row">
              <span class="col-4 text-center"></span>
              <span class="col text-center">2,700,000 </span>
              <div class="col">
              <Inputfield
              type="number"
              myclass=""
              value={(e) => setDigit(e.target.value)}
            />
              </div>
              <span class="col text-center">2,700,000 </span>
              <hr class="col-10 mt-n1" />
            </div>
            <div className="row">
              <div class=" col-12 text-center">
               زرین پال
              </div>
              <div class="col-12 pt-2 text-center">
                <button type="submit" class="btn btn-green btn-block">ثبت سفارش</button>
              </div>
            </div>
          
        </div>
        </form>
      </div>
    </div>
  );
}

export default Order;
