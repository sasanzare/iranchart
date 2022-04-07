import Inputfield from "../../components/inputfield/Inputfield";
import { useState } from "react";
import Lable from "../../microComponents/lable/Lable";
import Textarea from "../../components/textarea/Textarea";
function Order() {
  const [name, setName] = useState("");
  const [lName, setlName] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [digit, setDigit] = useState("");
  return (
    <div className="Order container pt-5">
      <div className="row flex-column py-5">
        
      <form>
        <div className="col-lg-6 col-md-7 col-sm-9 col-11 shadow mx-auto p-3 rounded">
        <h1 className=" text-center h5 text-green font-weight-bold">جزییات صورت حساب</h1>
            <Lable title="نام" />
            <Inputfield
              type="text"
              myclass=""
              value={name}
              insert={(e) => setName(e.target.value)}
            />
            <Lable title="نام‌خانوادگی" />
            <Inputfield
              type="text"
              myclass=""
              value={lName}
              insert={(e) => setlName(e.target.value)}
            />
            <Lable title="استان" />
            <Inputfield
              type="text"
              myclass=""
              value={province}
              insert={(e) => setProvince(e.target.value)}
            />
            <Lable title="شهر" />
            <Inputfield
              type="text"
              myclass=""
              value={city}
              insert={(e) => setCity(e.target.value)}
            />
            <Lable title="آدرس کامل" />
            <Inputfield
              type="text"
              myclass=""
              value={address}
              insert={(e) => setAddress(e.target.value)}
            />
            <Lable title="شماره تماس" />
            <Inputfield
              type="number"
              myclass=""
              value={phone}
              insert={(e) => setPhone(e.target.value)}
            />
            <Lable title="ایمیل" />
            <Inputfield
              type="email"
              myclass=""
              value={email}
              insert={(e) => setEmail(e.target.value)}
            />
            <Lable title="توضیحات" />
            <Textarea
              myclass=""
              placeholder="یادداشت درباره سفارش شما"
              rows="3"
              value={description}
              insert={(e) => setDescription(e.target.value)}
            />
         
        </div>
        <div className="col-lg-6 col-md-7 col-sm-9 col-11 shadow mx-auto p-3 rounded mt-3">
          
            <div className="row pt-3">
              <span className="col-4 text-center">محصول</span>
              <span className="col text-center">قیمت</span>
              <span className="col text-center">تعداد </span>
              <span className="col text-center">جمع </span>
              <hr className="col-10" />
            </div>
            <div className="row">
              <span className="col-4 text-center"></span>
              <span className="col text-center">2,700,000 </span>
              <div className="col">
              <Inputfield
              type="number"
              myclass=""
              value={digit}
              insert={(e) => setDigit(e.target.value)}
            />
              </div>
              <span className="col text-center">2,700,000 </span>
              <hr className="col-10 mt-n1" />
            </div>
            <div className="row">
              <div className=" col-12 text-center">
               زرین پال
              </div>
              <div className="col-12 pt-2 text-center">
                <button type="submit" className="btn btn-green btn-block">ثبت سفارش</button>
              </div>
            </div>
          
        </div>
        </form>
      </div>
    </div>
  );
}

export default Order;
