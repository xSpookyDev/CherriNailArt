import{d as a,m as n,r as m,a as h,j as t}from"./index-DKviBAw-.js";const d=a(n.div)`
  width: 100vw;
  z-index: 6;
  position: absolute;
  top: ${e=>e.click?"0":`-${e.theme.navHeight}`};

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s ease;

  @media (max-width: 40em) {
    top: ${e=>e.click?"0":"calc(-50vh - 4rem)"};
  }
`,p=a(n.ul)`
  position: relative;
  height: ${e=>e.theme.navHeight};
  background-color: ${e=>e.theme.body};
  color: ${e=>e.theme.text};
  list-style: none;

  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  padding: 0 10rem;

  @media (max-width: 40em) {
    flex-direction: column;
    padding: 2rem 0;
    height: 50vh;
  }
`,u=a.li`
  background-color: ${e=>`rgba(${e.theme.textRgba}, 0.7)`};
  list-style-type: style none;
  color: ${e=>e.theme.body};
  width: 15rem;
  height: 2.5rem;

  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);

  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${e=>e.theme.fontmd};
  font-weight: 600;
  text-transform: uppercase;

  cursor: pointer;

  @media (max-width: 40em) {
    width: 10rem;
    height: 2rem;
  }
`,o=a(n.li)`
  text-transform: uppercase;
  color: ${e=>e.theme.text};
  cursor: pointer;
  @media (max-width: 40em) {
    flex-direction: column;
    padding: 0.5rem 0;
  }
`,g=()=>{const[e,r]=m.useState(!1),{scroll:l}=h.useLocomotiveScroll(),i=s=>{let c=document.querySelector(s);r(!e),l.scrollTo(c,{offset:"-100",duration:"2000",easing:[.25,0,.35,1]})};return t.jsx(d,{click:+e,initial:{y:"-100%"},animate:{y:0},transition:{duration:2,delay:5},children:t.jsxs(p,{drag:"y",dragConstraints:{top:0,bottom:70},dragElastic:.05,dragSnapToOrigin:!0,children:[t.jsx(u,{onClick:()=>r(!e),children:"Menu"}),t.jsx(o,{onClick:()=>i("#home"),whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,Y:0},children:"Home"}),t.jsx(o,{onClick:()=>i(".about"),whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,Y:0},children:"about"}),t.jsx(o,{onClick:()=>i("#shop"),whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,Y:0},children:t.jsx("a",{href:"https://www.instagram.com/cherrinailart/",target:"_blank",rel:"noreferrer",children:"Shop"})}),t.jsx(o,{onClick:()=>i("#new-arrival"),whileHover:{scale:1.1,y:-5},whileTap:{scale:.9,Y:0},children:"new arrival"})]})})};export{g as default};
