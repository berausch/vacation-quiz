$(function() {
  $(".greet").click(function(){
    $(".greet").hide();
    $(".head-vaca").show();
  });
  $(".greet").click(function(){
    $("#sect1").show();
  });
  $(".sect1-btn").click(function(event){
    event.preventDefault();
    var q1 = $("input:radio[name=q1]:checked").val();
    var q2 = $("input:radio[name=q2]:checked").val();
    if(q2 === "nature") {
      $("#nature").show();
      $("#sect1").hide();
    } else if (q2 === "city") {
      if (q1 === "cultural"){
        $("#sect4").show();
        $("#sect1").hide();
      } else {
      $("#city").show();
      $("#sect1").hide();
      }}
  });
  $(".sect2-btn").click(function(event){
    event.preventDefault();
    var q3Nature = $("input:radio[name=q3-nature]:checked").val();
    if (q3Nature === "beach") {
      $(".hawaii").show();
      $("#nature").hide();
    } else if (q3Nature == "woods"){
      $(".yosemite").show();
      $("#nature").hide();
    }
  $(".sect3-btn").hide();
  });
  $(".sect3-btn").click(function(event){
    event.preventDefault();
    var q1 = $("input:radio[name=q1]:checked").val();
    var q3City = $("input:radio[name=q3-city]:checked").val();
    var q4City = $("input:radio[name=q4-city]:checked").val();

    if (q3City === q4City) {
      $("#error").show();
    } else {
      $("#error").hide();
      $(".new-york").hide();
      $(".paris").hide();
      $(".vegas").hide();
      $(".disneyworld").hide();
      $("#city").hide();
      $(".head-vaca").hide();
      $(".retake").show();
    }

    if (q3City === q4City) {
      $("#error").show();
    }
      else if (q1 === "relaxing") {
        if(q3City === "museums"){
          if(q4City === "roller") {
            $("#sect4").show();
            $(".retake").hide();
          }
          else if (q4City === "theater") {
              $(".paris").show();
            }
          else if (q4City === "gambling") {
            $("#sect4").show();
            $(".retake").hide();
          }}
        else if (q3City === "roller"){
          $(".disneyworld").show();
        }
        else if (q3City === "theater"){
          $(".new-york").show();
        }
        else if (q3City === "gambling"){
          $(".vegas").show();
        }}
    else if (q1 === "romantic"){
      if(q3City === "museums") {
        $(".paris").show();
      }
      else if (q3City === "roller"){
        $(".disneyworld").show();
      }
      else if(q3City === "theater") {
        if (q4City === "museums") {
          $(".disneyworld").show();
        } else if (q4City === "roller" ||q4City === "gambling") {
          $(".new-york").show();
        }}
      else if (q3City === "gambling"){
        $(".vegas").show();
        }}
    else if (q1 === "exciting"){
      if (q3City === "museums") {
        if(q4City === "roller" || q4City === "gambling") {
          $("#sect4").show();
          $(".retake").hide();
        }
        else if (q4City === "theater") {
          $(".paris").show();
        }}
      else if (q3City === "roller") {
        if (q4City === "museums"){
          $(".vegas").show();
        }
        else if (q4City === "theater" || q4City === "gambling"){
          $(".disneyworld").show();
        }}
      else if (q3City === "theater") {
        $(".new-york").show();
      }
      else if (q3City === "gambling") {
        $(".vegas").show();
      }}
    else if (q1 === "adventurous") {
      if (q3City === "museums") {
        if(q4City === "roller" || q4City === "gambling") {
          $("#sect4").show();
          $(".retake").hide();
          }
        else if (q4City === "theater") {
          $(".paris").show();
        }}
      else if (q3City === "roller") {
        $(".disneyworld").show();
      }
      else if (q3City === "theater"){
        if(q4City === "museums" || q4City === "gambling") {
          $(".disneyworld").show();
        }
        else if (q4City === "roller"){
          $(".new-york").show();
        }}
      else if (q3City === "gambling") {
        $(".vegas").show();
      }}
    else if (q1 === "family"){
      if (q3City === "museums") {
        if(q4City === "roller" || q4City === "gambling") {
          $("#sect4").show();
          $(".retake").hide();
          }
        else if (q4City === "theater") {
          $(".paris").show();
        }}
        else if (q3City === "roller") {
          $(".disneyworld").show();
        }
        else if (q3City === "theater"){
          if(q4City === "museums" || q4City === "gambling") {
            $(".disneyworld").show();
          }
          else if (q4City === "roller"){
            $(".new-york").show();
          }}
        else if (q3City === "gambling") {
          $(".vegas").show();
      }}
  });
  $(".sect4-btn").click(function(event){
    event.preventDefault();
    $("#sect4").hide();
    $("#error").hide();
    $(".new-york").hide();
    $(".paris").hide();
    $(".vegas").hide();
    $(".disneyworld").hide();
    $(".retake").show();
    $(".head-vaca").hide();
    var q5City = $("input:radio[name=q5-city]:checked").val();
      if (q5City === "stay"){
        $(".new-york").show();
      }
      else if (q5City === "abroad"){
        $(".paris").show();
      }


  });
    $(".retake").click(function(event){
      event.preventDefault();
      $("#error").hide();
      $(".new-york").hide();
      $(".paris").hide();
      $(".vegas").hide();
      $(".disneyworld").hide();
      $(".greet").show();
      $(".retake").hide();
    });
    $(".sect2-back").click(function(event){
      event.preventDefault();
      $(".head-vaca").show();
      $(".yosemite").hide();
      $(".hawaii").hide();
      $("#nature").hide();
      $("#sect1").show();

    });
    $(".sect3-back").click(function(event){
      event.preventDefault();
      $(".head-vaca").show();
      $(".new-york").hide();
      $(".paris").hide();
      $(".vegas").hide();
      $(".disneyworld").hide();
      $("#city").hide();
      $("#sect1").show();
    });
    $(".sect4-back").click(function(event){
      event.preventDefault();
      var q1 = $("input:radio[name=q1]:checked").val();
      if(q1 === "cultural") {
      $(".head-vaca").show();
      $(".new-york").hide();
      $(".paris").hide();
      $("#sect4").hide();
      $("#sect1").show();
    } else {
      $(".head-vaca").show();
      $(".new-york").hide();
      $(".paris").hide();
      $("#sect4").hide();
      $("#city").show();
    }
    });
    $(".result-back").click(function(event){
      event.preventDefault();
      var q1 = $("input:radio[name=q1]:checked").val();
      var q2 = $("input:radio[name=q2]:checked").val();
        if(q1 === "cultural") {
          $(".head-vaca").show();
          $(".paris").hide();
          $(".new-york").hide();
          $("#sect4").show();
          $(".retake").hide()
        } else {
          if(q2 === "nature") {
            $(".head-vaca").show();
            $(".hawaii").hide();
            $(".yosemite").hide();
            $("#nature").show();
            $(".retake").hide()
          } else if (q2 === "city") {
            $(".head-vaca").show();
            $(".paris").hide();
            $(".new-york").hide();
            $(".disneyworld").hide();
            $(".vegas").hide();
            $("#city").show();
            $(".retake").hide()
          }}
      });
});
