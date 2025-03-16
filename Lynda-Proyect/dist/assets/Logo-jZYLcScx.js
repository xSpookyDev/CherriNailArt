import{d as i,m as n,j as e,L as a}from"./index-DKviBAw-.js";const s=i.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 100%;
  color: ${t=>t.theme.text};
  z-index: 5;

  a {
    display: flex;
    align-items: flex-end;
  }

  svg {
    width: 4rem;
    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;

    g {
      path {
        stroke: ${t=>t.theme.text};
      }
    }
  }
`,o=i(n.span)`
  font-size: ${t=>t.theme.fontlg};
  color: ${t=>t.theme.text};
  padding-bottom: 0.5rem;
`,r={hidden:{opacity:0,x:-50},visible:{opacity:1,x:-5,transition:{duration:2,delay:5,ease:"easeInOut"}}},d={hidden:{opacity:0,pathLength:0},visible:{opacity:1,pathLength:1,transition:{duration:2,delay:3,ease:"easeInOut"}}},h=()=>e.jsx(s,{children:e.jsxs(a,{to:"/",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",height:"48px",viewBox:"0 0 24 24",width:"48px",fill:"none",children:[" ",e.jsx("g",{})," ",e.jsxs("g",{children:[" ",e.jsx(n.path,{variants:d,initial:"hidden",animate:"visible",d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"})," "]})," "]}),e.jsx(o,{variants:r,initial:"hidden",animate:"visible",children:"Cherri Nail"})]})});export{h as default};
