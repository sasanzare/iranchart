$(document).ready(function () {
  document.querySelectorAll('a[href^="#"]').forEach((e) => {
    e.addEventListener("click", function (e) {
      e.preventDefault(),
        document
          .querySelector(this.getAttribute("href"))
          .scrollIntoView({ behavior: "smooth" });
    });
  });
});




// const showChar = 210;
// const ellipsestext = "...";
// const moretext = "ادامه مطلب";
// const lesstext = "بستن مطلب";
// let more = document.querySelectorAll(".more");
// more.forEach(function () {
//   let content = more(this).html();

//   if (content.length > showChar) {
//     let c = content.substr(0, showChar);
//     let h = content.substr(showChar - 1, content.length - showChar);

//     let html =
//       c +
//       '<span class="moreellipses">' +
//       ellipsestext +
//       ' </span><span class="morecontent"><span>' +
//       h +
//       '</span>  <a href="" onclick="changeText(this)" class="morelink px-2 py-1 border radius-10 mt-2 float-left">' +
//       moretext +
//       "</a></span>";

//     more(this).html(html);
//   }
// });
//  let morelink = document.querySelector(".morelink");
// // morelink.addEventListener("click", function (){
// //   if (morelink(this).hasClass("less")) {
// //     morelink(this).removeClass("less");
// //     morelink(this).html(moretext);
// //   } else {
// //     morelink(this).addClass("less");
// //     morelink(this).html(lesstext);
// //   }
// //   morelink(this).parent().prev().toggle();
// //   morelink(this).prev().toggle();
// //   return false;
// // });

// function changeText(id) {
//   if (id.hasClass("less")) {
//     id.removeClass("less");
//     id.html(moretext);
//       } else {
//         id.addClass("less");
//         id.html(lesstext);
//       }
//       id.parent().prev().toggle();
//       id.prev().toggle();
//       return false;
// }


