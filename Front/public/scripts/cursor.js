"use strict";

$(document).ready(function () {
  $(document).on("mousemove", function (e) {
    let clientX = e.clientX;
    let clientY = e.clientY;
    $("#cursor").css({
      left: clientX + "px",
      top: clientY + "px",
    });
  });

  $(".a").on({
    mouseover: function () {
      $("#cursor").addClass("mini");
    },
    mouseout: function () {
      $("#cursor").removeClass("mini");
    },
  });
});
