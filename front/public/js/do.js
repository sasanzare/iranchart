$(document).ready(function () {
        document.querySelectorAll('a[href^="#"]').forEach((e) => {
            e.addEventListener("click", function (e) {
                e.preventDefault(), document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
            });
        }),
        // $(".collapse.show").each(function () {
        //     $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
        // }),
        // $(".collapse")
        //     .on("show.bs.collapse", function () {
        //         $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
        //     })
        //     .on("hide.bs.collapse", function () {
        //         $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
        //     });
});
