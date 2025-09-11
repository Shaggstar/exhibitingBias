import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import dataSeed from "../data/moh_graph.json";

export default function MOHGraph() {
  const ref = useRef(null);
  const tipRef = useRef(null);
  const [preset, setPreset] = useState("reset");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.innerHTML = "";
    const width = el.clientWidth, height = 560;
    const svg = d3.select(el).append("svg")
      .attr("width","100%").attr("height",height).attr("viewBox",[0,0,width,height]);
    const g = svg.append("g");
    const color = t => ({Foundational:"#9bd",Parameter:"#fb9",Level:"#adf",Theory:"#c9f",Archetype:"#9f9"}[t] || "#ddd");

    const nodes = dataSeed.nodes.map(d=>({...d}));
    const links = dataSeed.links.map(d=>({...d}));

    const l = g.selectAll(".link").data(links).enter()
      .append("line").attr("stroke","#999").attr("stroke-opacity",.35).attr("stroke-width",1.2);

    const n = g.selectAll(".node").data(nodes).enter()
      .append("g").attr("class","node").call(drag(sim()));

    n.append("circle").attr("r", d => ({Foundational:18,Parameter:14,Level:16,Theory:14,Archetype:14}[d.type]))
      .attr("fill", d=>color(d.type)).attr("stroke","rgba(0,0,0,.35)").attr("stroke-width",1);

    n.append("text").text(d=>d.label).attr("x",0).attr("y",4)
      .attr("text-anchor","middle").attr("fill","#0b0b0b").attr("font-weight",700).attr("font-size",12);

    const tip = d3.select(tipRef.current);
    n.on("mouseover", (_,d)=> {
      tip.style("opacity",1).html(`<strong>${d.label}</strong><br/><em>${d.type}</em><br/>${d.summary||""}`);
    }).on("mousemove", (ev)=> {
      const rect = el.getBoundingClientRect();
      tip.style("left", (ev.clientX-rect.left+12)+"px").style("top", (ev.clientY-rect.top+12)+"px");
    }).on("mouseout", ()=> tip.style("opacity",0));

    const keep = {
      origins:   n => ["Foundational","Level","Theory"].includes(n.type),
      archetypes:n => n.type === "Archetype",
      alpha:     n => n.type === "Parameter" && (n.id === "alpha" || n.id === "F"),
      symbols:   n => n.id === "Symbols",
      reset:     n => true
    };
    function apply(name){
      const k = keep[name] || keep.reset;
      n.transition().style("opacity", d=>k(d)?1:0.12);
      l.transition().style("opacity", d=>(k(d.source)&&k(d.target))?.35:0.06);
    }
    apply(preset);

    function sim(){
      return d3.forceSimulation(nodes)
        .force("link", d3.forceLink(links).id(d=>d.id).distance(90).strength(.6))
        .force("charge", d3.forceManyBody().strength(-280))
        .force("center", d3.forceCenter(width/2, height/2))
        .on("tick", ()=>{
          l.attr("x1",d=>d.source.x).attr("y1",d=>d.source.y)
           .attr("x2",d=>d.target.x).attr("y2",d=>d.target.y);
          n.attr("transform", d=>`translate(${d.x},${d.y})`);
        });
    }
    function drag(sim){
      function started(e,d){ if(!e.active) sim.alphaTarget(.15).restart(); d.fx=d.x; d.fy=d.y; }
      function dragged(e,d){ d.fx=e.x; d.fy=e.y; }
      function ended(e,d){ if(!e.active) sim.alphaTarget(0); d.fx=null; d.fy=null; }
      return d3.drag().on("start",started).on("drag",dragged).on("end",ended);
    }

    return ()=> svg.remove();
  }, [preset]);

  return (
    <div>
      <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:10}}>
        {["origins","archetypes","alpha","symbols","reset"].map(p=>(
          <button key={p} className="pill" onClick={()=>setPreset(p)}>
            {p==="alpha" ? "α-Governance" : p[0].toUpperCase()+p.slice(1)}
          </button>
        ))}
      </div>
      <div style={{position:"relative",borderRadius:12,background:"rgba(26,26,26,.85)",height:560,overflow:"hidden"}}>
        <div ref={ref} style={{width:"100%",height:"100%"}}/>
        <div ref={tipRef} style={{position:"absolute",pointerEvents:"none",opacity:0,background:"#111",border:"1px solid rgba(255,107,53,.45)",color:"#eee",padding:"8px 10px",borderRadius:8,fontSize:14,maxWidth:260}}/>
      </div>
    </div>
  );
}
