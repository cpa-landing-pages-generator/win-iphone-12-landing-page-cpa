var CHOSEN;
var CHOSEN2;
var COLOR;
var CAPA;
var CHOSENCAPACITY;
var NICECOLOR;
var NNN;
var POOR;
var FOLDER;

function IP(xD) {
  CHOSEN = xD;
  console.log(CHOSEN)
  $(".IPHONE-2").not("." + xD).removeClass("IP-SELECTED");
  $("." + xD).addClass("IP-SELECTED");
  $(".CON").removeAttr("disabled");
}

function CON() {

  switch (CHOSEN) {
    case "12":
      NNN = "iPhone 12";
      CAPA = "SMALL"
      FOLDER = "NORMAL";
      break;
    case "12-MAX":
      NNN = "iPhone 12 Max";
      CAPA = "SMALL";
      FOLDER = "NORMAL";
      break;
    case "12-PRO":
      NNN = "iPhone 12 Pro";
      CAPA = "BIG";
      FOLDER = "PRO";
      break;
    case "12-PRO-MAX":
      NNN = "iPhone 12 Pro Max";
      CAPA = "BIG";
      FOLDER = "PRO";
      break;
  }

  $("#CONFIGURE").text("Configure your " + NNN);

    $("#FLI").css("min-height", "100vh");
  $(".S1").fadeOut(1500, function() {
    setTimeout(function() {

      if (POOR) {
        //$(".CFCF").fadeIn(1500);
        $(".CHOOSEFINISH").fadeIn(1500);
      } else {
        $(".CFCF").fadeIn(1500);
      }

      $(".IP" + CHOSEN).fadeIn(1500).css("display", "flex");
      fitty("#CONFIGURE");
    }, 750)
  })
}

function IPC(Dx) {

  $(".CCCP")[0].scrollIntoView()

  COLOR = Dx;
  console.log(COLOR);
  $(".IP-COLOR").not(".IPC-" + Dx).removeClass("IP-SELECTED");
  $(".IPC-" + Dx).addClass("IP-SELECTED");

  switch (COLOR) {
          case "DARKBLUE":
            NICECOLOR = "Dark Blue";
            break;
          case "LIGHTGREEN":
            NICECOLOR = "Light Green";
            break;
        case "LIGHTBLUE":
            NICECOLOR = "Light Blue";
            break;
          case "ORANGE":
            NICECOLOR = "Orange";
            break;
          case "BLACK":
            NICECOLOR = "Black";
            break;
          case "GREEN":
            NICECOLOR = "Green";
            break;
          case "PURPLE":
            NICECOLOR = "Purple";
            break;
          case "RED":
            NICECOLOR = "Red"
            break;
          case "WHITE":
            NICECOLOR = "White";
            break;
          case "YELLOW":
            NICECOLOR = "Yellow";
            break;
          case "GOLD":
            NICECOLOR = "Gold";
            break;
          case "GREY":
            NICECOLOR = "Space Grey"
            break;
          case "MIDNIGHT":
            NICECOLOR = "Midnight Green";
            break;
          case "SILVER":
            NICECOLOR = "Silver";
            break;
  }

  $(".CPCP").fadeIn(1500);
  $("#CAPACITY").fadeIn(1500);
  //fitty("#CAPACITY");
  $("#CAPACITY-" + CAPA).fadeIn(1500).css("display", "flex");

}

function SCAPA(XD) {

  CHOSENCAPACITY = XD;
  console.log(CHOSENCAPACITY);
  $(".IP-CAPACITY").not(".CAPA-" + XD).removeClass("IP-SELECTED");
  $(".CAPA-" + XD).addClass("IP-SELECTED");

  $("#FINISH").fadeIn(1500, function() {
    $("#FINISH")[0].scrollIntoView();
  });
}

function FINISH() {
  $(".KON").fadeOut(1500);
  $(".S3").fadeOut(1500);
  setTimeout(function() {

    if (POOR) {
      $("#IP-PREVIEW").removeClass("w-100").addClass("w-75");
    }

    $("#IP-PREVIEW").attr("src", "img/" + FOLDER + "/" + COLOR + ".jpg");
    $("#COR").text("Your " + NNN);
    $("#SCOLOR").text(NICECOLOR);
    $("#SCAPACITY").html(CHOSENCAPACITY + "<small>GB</small>");
    $(".S4").fadeIn(1500);
    $(".S5").fadeIn(1500);
    fitty("#S-COLOR");
    fitty("#S-CAPA");
    //fitty capacity color
    fitty("#COR");
    setTimeout(function() {
      $("#TYPE").fadeIn(1500);
    }, 2000)
  }, 2000)
}

function TYPE() {
  $(".S5").fadeOut(1500);
  $(".S6").fadeOut(1500, function() {
    $(".S7").fadeIn(1500);
  });
}

function LAST() {

  var SMAIL = $("#EMAIL").val();

  if (SMAIL == "") {
    alert("Type in your Email address.")
  } else {

    //$.ajax({
      //url: "E.php",
      //data: {"E":SMAIL},
      //type: "POST"
    //});

    call_locker();
  }
}

$(function() {

  if ($(window).height() > 720) {

    POOR = false;

    fitty(".FFF");
    setTimeout(function() {
      fitty(".FFF");
    }, 50)
    setTimeout(function() {
      $("#FLI").fadeTo(1500, 1);
    }, 100)

  } else {

    POOR = true;

    fitty(".FFF");
    setTimeout(function() {
      fitty(".FFF");
    }, 50)
    setTimeout(function() {
      $("#FLI").css("min-height", "100vh");
      $("#FLI").fadeTo(1500, 1);
    }, 100)

  }

});
