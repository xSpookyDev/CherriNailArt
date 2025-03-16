import{d as o,m as a,j as e}from"./index-DKviBAw-.js";const s="/assets/Walking%20Girl-o3SdTv4N.mp4",d=o.section`
  width: 100%;
  height: 100vh;
  position: relative;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;

    @media (max-width: 48em) {
      object-position: center 10%;
    }
  }
  @media (max-width: 30em) {
    object-position: center 50%;
  }
`,l=o.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: ${t=>`rgba(${t.theme.bodyRgba},0.6)`};
`,r=o(a.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${t=>t.theme.text};

  div {
    display: flex;
    flex-direction: row;
  }

  h1 {
    font-family: "Kaushan Script";
    font-size: ${t=>t.theme.fontBig};
    text-shadow: 1px 1px 1px ${t=>t.theme.body};

    @media (max-width: 30em) {
      font-size: calc(5rem + 8vw);
    }
  }

  h2 {
    font-family: "Sirin Stencil";
    font-size: ${t=>t.theme.fontlg};
    text-shadow: 1px 1px 1px ${t=>t.theme.body};
    font-weight: 300;
    text-transform: capitalize;

    @media (max-width: 30em) {
      font-size: ${t=>t.theme.fontmd};
      margin-top: -1.5rem;
    }
  }
`,n={hidden:{opacity:0},show:{opacity:1,transition:{delayChildren:5,staggerChildren:.3}}},i={hidden:{opacity:0},show:{opacity:1}},h=()=>e.jsxs(d,{children:[e.jsx(l,{}),e.jsxs(r,{variants:n,initial:"hidden",animate:"show",children:[e.jsxs("div",{children:[e.jsx(a.h1,{variants:i,"data-scroll":!0,"data-scroll-delay":"0.13","data-scroll-speed":"4",children:"C"}),e.jsx(a.h1,{variants:i,"data-scroll":!0,"data-scroll-delay":"0.09","data-scroll-speed":"4",children:"h"}),e.jsx(a.h1,{variants:i,"data-scroll":!0,"data-scroll-delay":"0.06","data-scroll-speed":"4",children:"e"}),e.jsx(a.h1,{variants:i,"data-scroll":!0,"data-scroll-delay":"0.04","data-scroll-speed":"4",children:"r"}),e.jsx(a.h1,{variants:i,"data-scroll":!0,"data-scroll-delay":"0.02","data-scroll-speed":"4",children:"r"}),e.jsx(a.h1,{variants:i,"data-scroll":!0,"data-scroll-delay":"0.01","data-scroll-speed":"4",children:"i"})]}),e.jsx(a.h2,{variants:i,"data-scroll":!0,"data-scroll-delay":"0.04","data-scroll-speed":"2",children:"Inspire. Create. Believe."})]}),e.jsx("video",{src:s,type:"video/mp4",autoPlay:!0,muted:!0,loop:!0})]});export{h as default};
