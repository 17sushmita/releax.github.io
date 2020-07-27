var tabButtons=document.querySelectorAll(".index .tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".content .content1");

function showPanel(panelIndex) {
    
    
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
}
showPanel(0);


    // for subindex span button toggling effect

      $('.feat-btn').click(function(){
        $('ol .feat-show').toggleClass("show");
        $('ol .first').toggleClass("rotate");
      });
      $('li').click(function(){
        $(this).addClass("active").siblings().removeClass("active");
      });

function toggleSidebar(){
    document.getElementById('index').classList.toggle('active');
    document.getElementById('content').classList.toggle('slide');

}