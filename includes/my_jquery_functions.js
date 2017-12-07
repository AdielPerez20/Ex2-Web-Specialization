 $("document").ready(function(){
    appendObjsToMain();
    $("#wrapper3 main").on("click",".generic_obj:not(.last)",obj_click);
    $(".last").click(last_click);
});
          
    function obj_click(){            
        if($(this).hasClass("star")==false){ //obj_star click                
            $(this).addClass("star");                               
        }
        else  { //generic_obj click
            $(this).removeClass("star");
              }                        
    }
        
    function last_click(){ //plus obj
            $("#wrapper3 main").prepend(createSection());
    }

    function createSection(){
            var obj = $('<section class="generic_obj">');            
            obj.css("background-color",getRandomColor());
            return obj;
    }
        
        
    function appendObjsToMain(){
        var x=1;
        var t=0;
        var obj = $("<section>");
        obj.addClass("generic_obj_3");
            for(i=0;i<78;i++){                
                $("#wrapper3 main").append(createSection());
                }
                $("#wrapper3 main section:last").css("background-color","").addClass("last");            
    }
            
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
          for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
          }
          return color;
    }
     