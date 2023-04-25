$(document).ready(function () {
  var currentDate = moment().format("DD/MM/YYYY");
  $(".advsearch-sec #from, .advsearch-sec #to").daterangepicker(
    {
      locale: {
        format: "DD/MM/YYYY",
      },

      alwaysShowCalendars: true,
      minDate: currentDate,
      autoApply: true,
      autoUpdateInput: false,
      opens: "center",
      parentEl: $(window).width() <= 767 ? ".dateOut-item" : ".advsearch-items",
    },
    function (start, end) {
      var selectedStartDate = start.format("DD/MM/YYYY");
      var selectedEndDate = end.format("DD/MM/YYYY");

      $checkinInput = $("#from");
      $checkoutInput = $("#to");

      $checkinInput.val(selectedStartDate).trigger("change");
      $checkoutInput.val(selectedEndDate).trigger("change");

      var checkOutPicker = $checkoutInput.data("daterangepicker");
      checkOutPicker.setStartDate(selectedStartDate);
      checkOutPicker.setEndDate(selectedEndDate);

      var checkInPicker = $checkinInput.data("daterangepicker");
      checkInPicker.setStartDate(selectedStartDate);
      checkInPicker.setEndDate(selectedEndDate);
    }
  );
  $(".single-side-book #from, .single-side-book #to").daterangepicker(
    {
      locale: {
        format: "DD/MM/YYYY",
      },

      alwaysShowCalendars: true,
      minDate: currentDate,
      autoApply: true,
      autoUpdateInput: false,
      opens: "right",
    },
    function (start, end) {
      var selectedStartDate = start.format("DD/MM/YYYY");
      var selectedEndDate = end.format("DD/MM/YYYY");

      $checkinInput = $("#from");
      $checkoutInput = $("#to");

      $checkinInput.val(selectedStartDate).trigger("change");
      $checkoutInput.val(selectedEndDate).trigger("change");

      var checkOutPicker = $checkoutInput.data("daterangepicker");
      checkOutPicker.setStartDate(selectedStartDate);
      checkOutPicker.setEndDate(selectedEndDate);

      var checkInPicker = $checkinInput.data("daterangepicker");
      checkInPicker.setStartDate(selectedStartDate);
      checkInPicker.setEndDate(selectedEndDate);
    }
  );
  $("#from, #to").on("apply.daterangepicker", function (ev, picker) {
    var start = picker.startDate._d;
    var end = picker.endDate._d;
    var options = {
      day: "2-digit",
      year: "numeric",
      month: "long",
      weekday: "short",
    };
    var dif = Math.abs(picker.endDate - picker.startDate);
    d = dif / (1000 * 3600 * 24);
    $(".days-count").remove();

    if (document.dir == "rtl") {
      var text = "(إقامة لمدة " + Math.trunc(d) + " ليالى)";
      var startFormat = start.toLocaleDateString("ar-EG", options);
      var endFormat = end.toLocaleDateString("ar-EG", options);
    } else {
      var text = "(" + Math.trunc(d) + " night stay)";
      var startFormat = start.toLocaleDateString("en-US", options);
      var endFormat = end.toLocaleDateString("en-US", options);
    }
    $(".daterangepicker ").append(`<div class='days-count'>
    <div class="days-range">${startFormat} - ${endFormat}</div>
    <div class="days-range-count">${text}</div>
    </div>`);
  });

  $(".dateExtend").daterangepicker({
    autoApply: true,
    singleDatePicker: true,
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
});
