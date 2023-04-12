$(document).ready(function () {
  lazyLoad();

  /* ************************************ Fixed Header ************************************ */
  if ($(this).scrollTop() >= 100) {
    $("header").addClass("fixed");
  } else {
    $("header").removeClass("fixed");
  }
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 100) {
      $("header").addClass("fixed");
    } else {
      $("header").removeClass("fixed");
    }
  });
  /************************************ Menu ************************************/
  if ($(window).width() <= 991) {
    $(".menu-btn").click(function () {
      $(".menu-overlay").fadeIn(500);
      $(".header-nav").addClass("active");
      $("body").addClass("overflow");
    });
    $(".menu-close,.menu-overlay").click(function () {
      $(".menu-overlay").fadeOut(500);
      $(".header-nav").removeClass("active");
      $("body").removeClass("overflow");
    });
  }
  /************************************ Main Slider ************************************/
  var mainSwiper = new Swiper(".main-slider .swiper", {
    spaceBetween: 10,
    loop: true,
    speed: 500,
    // autoplay: {
    //   delay: 5000,
    // },
    effect: "fade",
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main-slider .swiper-button-next",
      prevEl: ".main-slider .swiper-button-prev",
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });

  /* ************************************ flatpicker ************************************ */

  $(".dateIn").flatpickr({
    enable: [
      {
        from: $(".dateIn").data("from"),
        to: $(".dateIn").data("to"),
      },
    ],
  });
  $(".dateOut").flatpickr({
    enable: [
      {
        from: $(".dateOut").data("from"),
        to: $(".dateOut").data("to"),
      },
    ],
  });

  $(".advsearch-date").change(function (e) {
    if ($(this).val() == "") {
      $(this)
        .prev(".advsearch-item-text")
        .find("span")
        .text($(this).attr("placeholder"));
    } else {
      $(this).prev(".advsearch-item-text").find("span").text($(this).val());
    }
  });
  /* ************************************ QTY ************************************ */
  $(document).on("click", ".qty-plus", function (e) {
    e.preventDefault();
    var ele = $(this).parents(".qty-cont").find(".qty-val");
    var value = ele.val();
    value++;
    ele.val(value);
    var content = `<div class="people-item">
  <span>الطفل ${value}</span>
  <div class="qty-cont">
    <button class="qty-ctrl qty-plus">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8.594"
        height="8.594"
        viewBox="0 0 8.594 8.594"
      >
        <path
          id="Path_29549"
          data-name="Path 29549"
          d="M12.057,7.76H8.834V4.537a.537.537,0,0,0-1.074,0V7.76H4.537a.537.537,0,0,0,0,1.074H7.76v3.223a.507.507,0,0,0,.537.537h0a.507.507,0,0,0,.537-.537V8.834h3.223a.537.537,0,0,0,0-1.074Z"
          transform="translate(-4 -4)"
        />
      </svg>
    </button>
    <input type="num" class="qty-val" value="0" readonly />
    <button class="qty-ctrl qty-minus">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8.594"
        height="1.074"
        viewBox="0 0 8.594 1.074"
      >
        <path
          id="Path_29549"
          data-name="Path 29549"
          d="M12.057,7.76H4.537a.537.537,0,0,0,0,1.074h7.52a.537.537,0,0,0,0-1.074Z"
          transform="translate(-4 -7.76)"
        />
      </svg>
    </button>
  </div>
  <span>عام</span>
</div>`;
    $(this)
      .parents(".advsearch-item-view")
      .siblings(".people-list")
      .append(content);
    ele.trigger("change");
  });

  $(document).on("click", ".qty-minus", function (e) {
    e.preventDefault();
    var ele = $(this).parents(".qty-cont").find(".qty-val");
    var value = ele.val();
    if (value > 0) {
      value--;
    }
    ele.val(value);
    $(".people-item:last-of-type").remove();
    ele.trigger("change");
  });

  $(document).on("change", ".qty-val.count", function (e) {
    var value = $(this).val();
    if (value > 0) {
      $(this).parents(".advsearch-item-view").siblings(".people-list").show();
    } else {
      $(this).parents(".advsearch-item-view").siblings(".people-list").hide();
    }
  });

  /************************************ mixitup ************************************/
  if ($("#mixitup-elements").length) {
    var mixer = mixitup("#mixitup-elements", {
      animation: {
        duration: 250,
        nudge: true,
        reverseOut: true,
        effects: "scale(0.01)",
      },
    });
  }

  /************************************ Rooms Slider ************************************/
  var roomsSwiper = new Swiper(".rooms-sec-cont .swiper", {
    spaceBetween: 23,
    navigation: {
      nextEl: ".rooms-sec-cont .swiper-btn-next",
      prevEl: ".rooms-sec-cont .swiper-btn-prev",
    },
    loop: true,
    pagination: {
      el: ".rooms-sec-cont .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1199: {
        slidesPerView: 4,
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
        $(".imgs-slider").trigger("refresh.owl.carousel");
      },
    },
  });

  /************************************ Specials Slider ************************************/
  var specialsSwiper = new Swiper(".specials-sec-cont .swiper", {
    spaceBetween: 23,
    navigation: {
      nextEl: ".specials-sec-cont .swiper-btn-next",
      prevEl: ".specials-sec-cont .swiper-btn-prev",
    },
    loop: true,
    pagination: {
      el: ".specials-sec-cont .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1199: {
        slidesPerView: 4,
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
        $(".imgs-slider").trigger("refresh.owl.carousel");
      },
    },
  });

  /************************************ Room Imgs ************************************/
  var owl = $(".imgs-slider");
  owl.owlCarousel({
    loop: true,
    nav: true,
    navText: [
      '<svg id="Group_27121" data-name="Group 27121" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M7.13,9.946l-5.805-5.8a.484.484,0,1,0-.684.684l5.273,5.393c-2.244,2.324-.051.029-5.273,5.532a.484.484,0,0,0,.685.684l5.805-5.8a.484.484,0,0,0,0-.684Z" transform="translate(12.502 6)" /></svg>',
      '<svg id="Group_27120" data-name="Group 27120" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"> <path d="M.641,9.946l5.8-5.8a.484.484,0,0,1,.684.684L1.857,10.219c2.244,2.324.051.029,5.273,5.532a.484.484,0,0,1-.685.684l-5.8-5.8a.484.484,0,0,1,0-.684Z" transform="translate(12.502 6)"/></svg>',
    ],
    margin: 23,
    rtl: document.dir == "rtl" ? true : false,
    items: 1,
  });
  owl.on("initialize.owl.carousel", function (event) {
    lazyLoad();
  });

  /************************************ Footer ************************************/
  if ($(window).width() <= 767) {
    $(".footer-title").click(function () {
      $(".footer-title").not(this).removeClass("active");
      $(this).toggleClass("active");
      if ($(this).siblings().css("display") == "none") {
        $(this).siblings().slideDown(500);
      } else {
        $(this).siblings().slideUp(500);
      }
      $(".footer-title").not(this).siblings().slideUp(500);
    });
  }

  /************************************ form ************************************/
  function formatState(state) {
    if (!state.id) {
      return state.text;
    }
    var baseUrl = "images/flags";
    var $state = $(
      '<span class="country-item"><img src="' +
        baseUrl +
        "/" +
        state.element.value.toLowerCase() +
        '.svg" class="img-flag" /> ' +
        state.text +
        "</span>"
    );
    return $state;
  }

  $(".country-select").select2({
    templateResult: formatState,
    templateSelection: formatState,
    minimumResultsForSearch: Infinity,
  });
  $(".custom-select").select2({
    minimumResultsForSearch: Infinity,
  });

  $(".password-eye").click(function () {
    var input = $(this).siblings("input");
    if (input.attr("type") === "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

  $(".forget-submit").click(function (e) {
    e.preventDefault();
    $(".otp-cont").slideDown();
    $(".otp-inputs *:input:first").focus();
    startTimer($(".otp-cont").data("duration"));
  });

  $(".otp-modal-btn").click(function (e) {
    $(".otp-modal-block *:input:first").focus();
    startTimer($(".otp-modal-block").data("duration"));
  });

  let otp_fields = $(".otp-inputs .otp-field");
  otp_fields
    .on("input", function (e) {
      $(this).val(
        $(this)
          .val()
          .replace(/[^0-9]/g, "")
      );
      let opt_value = "";
      otp_fields.each(function () {
        let field_value = $(this).val();
        if (field_value != "") opt_value += field_value;
      });
    })
    .on("keyup", function (e) {
      $(this).next().removeAttr("disabled").focus();
      $(this).removeClass("error").addClass("active");
    })
    .on("paste", function (e) {
      let paste_data = e.originalEvent.clipboardData.getData("text");
      let paste_data_splitted = paste_data.split("");
      $.each(paste_data_splitted, function (index, value) {
        otp_fields.eq(index).val(value);
      });
    });

  /************************************ FAQ ************************************/
  $(".faq-head").click(function () {
    $(".faq-head").not(this).removeClass("active");
    $(this).toggleClass("active");
    if ($(this).siblings().css("display") == "none") {
      $(this).siblings().slideDown(500);
    } else {
      $(this).siblings().slideUp(500);
    }
    $(".faq-head").not(this).siblings().slideUp(500);
  });

  /************************************ About Slider ************************************/
  var reteSwiper = new Swiper(".our-rate-cont .swiper", {
    spaceBetween: 20,
    navigation: {
      nextEl: ".our-rate-cont .swiper-btn-next",
      prevEl: ".our-rate-cont .swiper-btn-prev",
    },
    loop: true,
    pagination: {
      el: ".our-rate-cont .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1199: {
        slidesPerView: 4,
      },
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });

  /************************************ About journy ************************************/

  $(".journy-item").mousemove(function () {
    $(".journy-item").not(this).removeClass("active");
    $(this).addClass("active");
    var imgNum = $(this).data("img");
    var targetedImg = $(".journy-img img[data-target='" + imgNum + "']");
    $(".journy-img img").hide();
    targetedImg.show();
  });
  /************************************ rooms list ************************************/

  $(".view-ico.grid-view").click(function (e) {
    $(".view-ico.grid-view").addClass("active");
    $(".view-ico.list-view").removeClass("active");
    $(".rooms-grid").removeClass("list");
    $(".imgs-slider").trigger("refresh.owl.carousel");
  });
  $(".view-ico.list-view").click(function (e) {
    $(".view-ico.list-view").addClass("active");
    $(".view-ico.grid-view").removeClass("active");
    $(".rooms-grid").addClass("list");
    $(".imgs-slider").trigger("refresh.owl.carousel");
  });
  $(".filter-btn").click(function (e) {
    $(".archive-filters").addClass("active");
    $(".filter-overlay").fadeIn();
    $("body").addClass("overflow");
  });
  $(".filter-overlay").click(function (e) {
    $(".archive-filters").removeClass("active");
    $(".filter-overlay").fadeOut();
    $("body").removeClass("overflow");
  });

  /************************************ testimonials Slider ************************************/
  var testimonialsSwiper = new Swiper(".single-side-testimonials  .swiper", {
    spaceBetween: 15,
    loop: true,
    speed: 500,
    // autoplay: {
    //   delay: 5000,
    // },
    pagination: {
      el: ".single-side-testimonials  .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".single-side-testimonials  .swiper-btn-next",
      prevEl: ".single-side-testimonials  .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 3,
      },
      1199: {
        slidesPerView: 1,
      },
    },
  });
  var gallerySwiper = new Swiper(".gallery-side-testimonials  .swiper", {
    spaceBetween: 15,
    loop: true,
    speed: 500,
    // autoplay: {
    //   delay: 5000,
    // },
    pagination: {
      el: ".gallery-side-testimonials  .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".gallery-side-testimonials  .swiper-btn-next",
      prevEl: ".gallery-side-testimonials  .swiper-btn-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 3,
      },
      1199: {
        slidesPerView: 1,
      },
    },
  });

  /************************************ facilities ************************************/
  $(".single-facility-head").click(function () {
    $(".single-facility-head")
      .not(this)
      .parents(".single-facility-item")
      .removeClass("active");
    $(this).parents(".single-facility-item").toggleClass("active");
    if ($(this).siblings().css("display") == "none") {
      $(this).siblings().slideDown(500);
    } else {
      $(this).siblings().slideUp(500);
    }
    $(".single-facility-head").not(this).siblings().slideUp(500);
  });
});

function startTimer(duration) {
  var timeout = setTimeout(function () {
    var time = duration;
    var i = 1;
    var k = (i / duration) * 100;
    var l = 100 - k;
    i++;

    $("#c1").css({ "stroke-dasharray": [l, k], "stroke-dasharray": l });
    $("#c2").css("stroke-dasharray", [k, l]);
    $("#counterText").text(duration + 1 - i);
    var interval = setInterval(function () {
      if (i > time) {
        clearInterval(interval);
        clearTimeout(timeout);
        return;
      }
      k = (i / duration) * 100;
      l = 100 - k;
      $("#c1").css({ "stroke-dasharray": [l, k], "stroke-dasharray": l });
      $("#c2").css("stroke-dasharray", [k, l]);
      $("#counterText").text(duration + 1 - i);

      i++;
      if (duration + 1 - i == 0) {
        $(".resend-cont .prgress").hide();
        $(".resend-cont .resend-btn").removeAttr("disabled");
      }
    }, 1000);
  }, 0);
}
function passOtpReset(cancel) {
  $(".otp-cont").slideUp();
  cancel.parents(".otp-cont form")[0].reset();
}

function passOtpNext() {
  var flag = 0;
  var valid = true;
  $(".otp-inputs .otp-field").each(function () {
    let field_value = $(this).val();
    field_value == "" ? (flag = 0) : (flag = 1);
    flag === 0 ? (valid = false) : "";
  });

  if (valid) {
    if ($(window).width() <= 1199) {
      $(".forget-inline-end").slideDown();
    } else {
      $(".forget-block").addClass("active");
    }
  } else {
    $(".otp-inputs .otp-field").addClass("error");
  }
}
