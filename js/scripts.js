$(function() {
  $(".sect1-btn").click(function(event){
    event.preventDefault();
    var q1 = $("input:radio[name=q1]:checked").val();
    var q2 = $("input:radio[name=q2]:checked").val();
    if(q2 === "nature") {
      $("#nature").show();
      $("#sect1").hide();
    } else if (q2 === "city") {
      $("#city").show();
      $("#sect1").hide();
    }
  });
  $(".sect2-btn").click(function(event){
    event.preventDefault();
    var q3Nature = $("input:radio[name=q3-nature]:checked").val();
    alert(q3Nature);
    if (q3Nature === "beach") {
      $(".hawaii").show();
      $("#nature").hide();
    } else if (q3Nature == "woods"){
      $(".yosemite").show();
      $("#nature").hide();
    }
  });
  $(".sect3-btn").click(function(event){
    event.preventDefault();
    var q1 = $("input:radio[name=q1]:checked").val();
    var q3City = $("input:radio[name=q3-city]:checked").val();
    var q4City = $("input:radio[name=q4-city]:checked").val();
    var q5City = $("input:radio[name=q5-city]:checked").val();
    $("#error").hide();
    $(".new-york").hide();
    $(".paris").hide();

    if (q3City === q4City) {
      $("#error").show();
    } else if (q1 === "relaxing") {
        if(q3City === "museums"){
          if(q4City === "roller") {
            if(q5City === "stay") {
              $(".new-york").show();
            } else if (q5City === "abroad"){
              $(".paris").show();
            }

          }

        }
    }
    //   $(".hawaii").show();
    //   $("city").hide();
    // } else if (q3Nature == "woods") {
    //   $(".yosemite").show();
    //   $("#nature").hide();
    // }
  });
});
