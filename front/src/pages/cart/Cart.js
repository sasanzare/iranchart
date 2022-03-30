function Cart() {
  return (
    <div className="Cart container pt-5">
      <div className="row pt-5 pb-4 my-5">
        <div className="col-lg-8 pb-3">
          <div className="shadow rounded">
            <div className="row pt-3">
              <span className="col text-center">محصول</span>
              <span className="col text-center">2,700,000 </span>
              <span className="col text-center">تعداد </span>
              <span className="col text-center">جمع </span>
                 <hr className="col-10"/>
            </div>
            <div className="row">
              <span className="col text-center"></span>
              <span className="col text-center">2,700,000 </span>
              <div className="col d-flex justify-content-center">
                <input className="form-control w-50" type="number" />
              </div>
              <span className="col text-center">2,700,000 </span>
              <hr className="col-10"/>
            </div>
            <div className="row pb-3">
              <div className="col-md-8 col-12 text-center d-flex justify-content-between">

                  <div className="col-6 ">
                  <input
                  className="form-control"
                  type="text"
                  placeholder="کد تخفیف"
                />
                  </div>
                  <div className="col-6 ">
                  <button className="btn btn-green btn-block">اعمال</button>
                  </div>
                
              </div>
              <div className="col-md-4 col-12 pt-md-0 pt-3 text-center pr-0">
                <button className="btn btn-green">
                  به‌روز‌‌ ‌رسانی سبد خرید
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 pb-3">
        <div className="shadow rounded p-2 h-100">
          <p className="font-weight-bold">جمع کل سبد خرید</p>
          <p className="mb-0">جمع جز
            <span className="mr-4">2,700,000</span>
          </p>
          <p >جمع کل
            <span className="mr-4">2,700,000</span>
          </p>
          <div className="d-flex justify-content-center">
          <button className="btn btn-green">ادامه جهت تسویه</button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
