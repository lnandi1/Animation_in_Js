var obj, w, goRight;

function setSail()
{
  var pos = parseInt( obj.style.left, 10 );

  ( goRight ) ? pos++ : pos-- ;
  obj.style.left = pos + "px";

  if( pos > (w + 40) ) 
  {
    obj.style.background="url(Animate.png)";
    goRight = false;
  }

  if( pos < -140 ) 
  {
   obj.style.background="url(Animate.png)";
   goRight = true;
  }
 
  setTimeout( setSail , 10 );
}


function init()
{
  var preload=new Image();
  preload.src="Animate.png";

  obj = document.getElementById("boat"); 
  w = document.body.clientWidth;
  goRight = true;

  obj.style.position="absolute";
  obj.style.left="-120px";

  setSail();

}
onload=init;

