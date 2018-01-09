var n=0 ,m=0;

$('.click-me').on('click',function(e){
   $('.popover-in').show();
      $('.popover-in').on('click',function(e){
      e.stopPropagation();
    });
  if(m%2===n%2){
  setTimeout(function(){
    $(document).one('click',function(){
      $('.popover-in').hide();
      m=n;
    });
  },0);
  }
      n++;
});
 $(document).one('click',function(){
     m++;
});
