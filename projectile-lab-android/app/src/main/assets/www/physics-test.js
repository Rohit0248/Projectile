function ideal(speed, angleDeg, height, g){
  const th=angleDeg*Math.PI/180;
  const vx=speed*Math.cos(th), vy=speed*Math.sin(th);
  const T=(vy+Math.sqrt(vy*vy+2*g*height))/g;
  return {vx,vy,T,R:vx*T,H:height+vy*vy/(2*g)};
}
function close(a,b,t=1e-9){return Math.abs(a-b)<t}
let cases=0;
function assert(cond,msg){cases++; if(!cond) throw new Error(msg)}
const m=ideal(20,45,0,9.81);assert(close(m.T,2*Math.sin(Math.PI/4)*20/9.81,1e-12),'flight time');assert(close(m.R,400/9.81,1e-9),'range');assert(close(m.H,100/9.81,1e-9),'height');
const h=ideal(15,0,10,9.81);assert(close(h.T,Math.sqrt(20/9.81),1e-12),'horizontal launch time');assert(close(h.vy,0),'horizontal vy');
console.log('physics tests passed:',cases);
