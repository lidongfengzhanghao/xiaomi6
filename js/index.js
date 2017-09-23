/*
* @Author: Administrator
* @Date:   2017-09-18 21:26:32
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-20 21:07:28
*/

window.onload = function(){
	let bannerbottom =document.getElementsByClassName('bannerbottom')[0];
	let lii = bannerbottom.getElementsByTagName('li');
	let dian=document.getElementsByClassName('dian')[0];
	let a=dian.getElementsByTagName('a');
   let lefts = document.getElementsByClassName('leftdirect')[0];
   let rights =document.getElementsByClassName('rightdirect')[0];

  let basideli =document.getElementsByClassName('besideli')[0];
   let lis=besideli.getElementsByTagName('li');
    console.log(lis )
//    let item=document.getElementsByClassName('confot');




// for(let i=0;i<lis.length;i++){
//       lis[i].onmousemove =function(){
//          item[i].style.display = 'block';
//       }
//       lis[i].onmouseout = function(){
//          item[i].style.display = 'none';
//       }
//    }
// 	 let now = 0;
//    for (let i=0;i<a.length;i++){
//    	a[i].onclick = function(){
//    		// lii[now].style.display = 'none';
//    		// lii[i].style.display = 'block';
//          animate(lii[now],{opacity:0});
//          animate(lii[i],{opacity:1}); 
//    		now=i;
//    	}
//    }




// let num=0;
// let t;
// t=setInterval(move,3000);
// function move(){
//    num++;
//    if(num == lii.length){
//       num = 0;
//    }
//    for(let i=0;i<lii.length;i++){
//       // lii[i].style.display = 'none';
//       animate(lii[i],{opacity:0});
//       a[i].style.background='#fff';
//    }
//    // lii[num].style.display = 'block';
//     animate(lii[num],{opacity:1}); 
//    a[num].style.background='#ff6600';
// }

// function moveL(){
//    num--;
//    if(num<0){
//       num = lii.length-1;
//    }
//    for(let i=0;i<lii.length;i++){
//       // lii[i].style.display = 'none';
//       animate(lii[i],{opacity:0});
//       a[i].style.background='#fff';
//    }
//    // lii[num].style.display = 'block';
//    animate(lii[num],{opacity:1}); 
//    a[num].style.background='#ff6600';
// }





// // //鼠标移入停止
// let stop =document.getElementsByClassName('banner')[0];
//    stop= document.onmousemove = function(){
//       window.clearInterval(t);
//    }
//    stop= document.onmouseout = function(){
//       t=setInterval(move,3000);
//    }


// let lefts = document.getElementsByClassName('leftdirect')[0];
// let rights =document.getElementsByClassName('rightdirect')[0];
// let lefts = $('.left',leftdirect)[0];
// let rights = $('.right',rightdirect)[0];
// lefts.onclick = function(){
//   moveL();
// }
// rights.onclick = function(){
//    move();
// }




let now = 0;
let next=0;
let t=setInterval(move,3000);
let liiw=parseInt(getComputedStyle(lii[0],null).width);
let flag=true;


function move(){
  next++;
if(next == lii.length){
   next = 0;
}

   lii[next].style.left= liiw+'px';
   animate(lii[now],{left:-liiw});
   animate(lii[next],{left:0},function(){
      flag=true;
   });
   now = next;
}


function moveL(){

  next--;
if(next <0){
   next = lii.length-1;
}

   lii[next].style.left= `${-liiw}px`;
   animate(lii[now],{left:liiw});
   animate(lii[next],{left:0},function(){
      flag =true;
   });
   now = next;
}



lefts.onclick = function(){
   if(!flag){
      return;
   }
   flag =false;
   move();
}
rights.onclick = function(){
   if(!flag){
      return
   }
   flag = false;
   moveL();
}

for(let i=0;i<dian.length;i++){
   dian[i].onclick = function(){
         if(now == i){
            return;
         }
      lii[i].style.left= liiw+'px';
   animate(lii[now],{left:-liiw});
   animate(lii[i],{left:0});
   // dian[now].style.background='#49101';
   // dian[i].style.background='#fff'
   now = next =i;
   }
}
// 
// 
//鼠标移入停止
let stop =document.getElementsByClassName('banner')[0];
   stop= document.onmousemove = function(){
      window.clearInterval(t);
   }
   stop= document.onmouseout = function(){
      t=setInterval(move,3000);
   }
}
