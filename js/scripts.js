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
        $("#q5City").show();
        $(".sect3-btn").show();
        $("#sect1").hide();
      } else {
      $("#q3City").show();
      $("#q4City").show();
      $(".sect3-btn").show();
      $("#sect1").hide();
      }}
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
    $(".vegas").hide();
    $(".disneyworld").hide();
    $("#q5City").hide();

    if (q3City === q4City) {
      $("#error").show();
    }
      else if (q1 === "relaxing") {
        if(q3City === "museums"){
          if(q4City === "roller") {
            $("#q5City").show();
            if(q5City === "stay") {
              $(".new-york").show();
            }
            else if (q5City === "abroad"){
                $(".paris").show();
            }}
          else if (q4City === "theater") {
              $(".paris").show();
            }
          else if (q4City === "gambling") {
            $("#q5City").show();
            if(q5City === "stay") {
              $(".new-york").show();
            }
            else if (q5City === "abroad"){
              $(".paris").show();
            }}}
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
          $("#q5City").show();
          if(q5City === "stay") {
            $(".new-york").show();
          }
          else if (q5City === "abroad"){
              $(".paris").show();
          }}
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
          $("#q5City").show();
          if(q5City === "stay") {
            $(".new-york").show();
          }
          else if (q5City === "abroad"){
              $(".paris").show();
          }}
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
          $("#q5City").show();
          if(q5City === "stay") {
            $(".new-york").show();
          }
          else if (q5City === "abroad"){
              $(".paris").show();
          }}
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
    else if (q1 === "cultural"){
      if (q5City === "stay"){
        $(".new-york").show();
      }
      else if (q5City === "abroad"){
        (".paris").show();
      }}
  });
});
