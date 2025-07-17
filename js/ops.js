"use strict";

var CABLES=CABLES||{};
CABLES.OPS=CABLES.OPS||{};

var Ops=Ops || {};
Ops.Gl=Ops.Gl || {};
Ops.Ui=Ops.Ui || {};
Ops.Anim=Ops.Anim || {};
Ops.Data=Ops.Data || {};
Ops.Html=Ops.Html || {};
Ops.Math=Ops.Math || {};
Ops.User=Ops.User || {};
Ops.Vars=Ops.Vars || {};
Ops.Array=Ops.Array || {};
Ops.Color=Ops.Color || {};
Ops.Patch=Ops.Patch || {};
Ops.Cables=Ops.Cables || {};
Ops.Number=Ops.Number || {};
Ops.String=Ops.String || {};
Ops.Boolean=Ops.Boolean || {};
Ops.Devices=Ops.Devices || {};
Ops.Sidebar=Ops.Sidebar || {};
Ops.Trigger=Ops.Trigger || {};
Ops.Graphics=Ops.Graphics || {};
Ops.Gl.Meshes=Ops.Gl.Meshes || {};
Ops.Gl.Shader=Ops.Gl.Shader || {};
Ops.Gl.Textures=Ops.Gl.Textures || {};
Ops.Data.Compose=Ops.Data.Compose || {};
Ops.Math.Compare=Ops.Math.Compare || {};
Ops.User.monotom=Ops.User.monotom || {};
Ops.Devices.Mouse=Ops.Devices.Mouse || {};
Ops.Html.Elements=Ops.Html.Elements || {};
Ops.Patch.PK3cVbR=Ops.Patch.PK3cVbR || {};
Ops.Gl.ImageCompose=Ops.Gl.ImageCompose || {};
Ops.Graphics.Meshes=Ops.Graphics.Meshes || {};
Ops.Graphics.Geometry=Ops.Graphics.Geometry || {};
Ops.Data.Compose.Array=Ops.Data.Compose.Array || {};



// **************************************************************
// 
// Ops.Patch.PK3cVbR.TextToUVTexture
// 
// **************************************************************

Ops.Patch.PK3cVbR.TextToUVTexture= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={"inc_gen_ports_js":"const port_zgplxnbc1=op.inTrigger(\"zgplxnbc1\");\nport_zgplxnbc1.setUiAttribs({title:\"Execute\",});\nport_zgplxnbc1.setUiAttribs({\"values\":[\"\"]});\n\nconst port_nxezakedh=op.inArray(\"nxezakedh\");\nport_nxezakedh.setUiAttribs({title:\"Array of Strings\",});\nport_nxezakedh.setUiAttribs({\"values\":[\"\"]});\n\nconst port_ypqxgfqsy=op.inString(\"ypqxgfqsy\",\"Courier\");\nport_ypqxgfqsy.setUiAttribs({title:\"Font\",});\nport_ypqxgfqsy.setUiAttribs({\"values\":[\"\"]});\n\nconst port_zhebovez1=op.inString(\"zhebovez1\",\"normal\");\nport_zhebovez1.setUiAttribs({title:\"Weight\",});\nport_zhebovez1.setUiAttribs({\"values\":[\"\"]});\n\nconst port_498yuliuq=op.outObject(\"498yuliuq\");\nport_498yuliuq.setUiAttribs({title:\"Text UV Texture\",display:\"texture\",objType:\"texture\",objType:\"texture\"});\nport_498yuliuq.setUiAttribs({\"values\":[\"\"]});\n\nconst port_fgi23titp=op.outArray(\"fgi23titp\");\nport_fgi23titp.setUiAttribs({title:\"Text UV Coordinates\",});\nport_fgi23titp.setUiAttribs({\"values\":[\"\"]});\n\nconst port_ddpq7kosf=op.outArray(\"ddpq7kosf\");\nport_ddpq7kosf.setUiAttribs({title:\"Text Width\",});\nport_ddpq7kosf.setUiAttribs({\"values\":[\"\"]});\n\nop.initInnerPorts=function(addedOps)\n{\n  for(let i=0;i<addedOps.length;i++)\n  {\n    if(addedOps[i].innerInput)\n    {\nconst innerOut_zgplxnbc1 = addedOps[i].outTrigger(\"innerOut_zgplxnbc1\");\ninnerOut_zgplxnbc1.setUiAttribs({title:\"Execute\"});\nport_zgplxnbc1.onTriggered = () => { innerOut_zgplxnbc1.trigger(); };\n\nconst innerOut_nxezakedh = addedOps[i].outArray(\"innerOut_nxezakedh\");\ninnerOut_nxezakedh.setUiAttribs({title:\"Array of Strings\"});\nport_nxezakedh.on(\"change\", (a,v) => { innerOut_nxezakedh.setRef(a); });\n\nconst innerOut_ypqxgfqsy = addedOps[i].outString(\"innerOut_ypqxgfqsy\");\ninnerOut_ypqxgfqsy.set(port_ypqxgfqsy.get() );\ninnerOut_ypqxgfqsy.setUiAttribs({title:\"Font\"});\nport_ypqxgfqsy.on(\"change\", (a,v) => { innerOut_ypqxgfqsy.set(a); });\n\nconst innerOut_zhebovez1 = addedOps[i].outString(\"innerOut_zhebovez1\");\ninnerOut_zhebovez1.set(port_zhebovez1.get() );\ninnerOut_zhebovez1.setUiAttribs({title:\"Weight\"});\nport_zhebovez1.on(\"change\", (a,v) => { innerOut_zhebovez1.set(a); });\n\n    }\nif(addedOps[i].innerOutput)\n{\nconst innerIn_498yuliuq = addedOps[i].inObject(\"innerIn_498yuliuq\");\ninnerIn_498yuliuq.setUiAttribs({title:\"Text UV Texture\"});\ninnerIn_498yuliuq.on(\"change\", (a,v) => { port_498yuliuq.setRef(a); });\n\nconst innerIn_fgi23titp = addedOps[i].inArray(\"innerIn_fgi23titp\");\ninnerIn_fgi23titp.setUiAttribs({title:\"Text UV Coordinates\"});\ninnerIn_fgi23titp.on(\"change\", (a,v) => { port_fgi23titp.setRef(a); });\n\nconst innerIn_ddpq7kosf = addedOps[i].inArray(\"innerIn_ddpq7kosf\");\ninnerIn_ddpq7kosf.setUiAttribs({title:\"Text Width\"});\ninnerIn_ddpq7kosf.on(\"change\", (a,v) => { port_ddpq7kosf.setRef(a); });\n\n}\n}\n};\n","subpatch_json":"{\"ops\":[{\"id\":\"8plc1rtsr\",\"uiAttribs\":{\"subPatch\":\"8k6721ec7\"},\"storage\":{\"blueprintVer\":2},\"portsOut\":[{\"name\":\"trigger 0\",\"links\":[{\"portIn\":\"Exe\",\"portOut\":\"trigger 0\",\"objIn\":\"qpn10j3zy\",\"objOut\":\"8plc1rtsr\"}]},{\"name\":\"trigger 1\",\"links\":[{\"portIn\":\"Render\",\"portOut\":\"trigger 1\",\"objIn\":\"9p1cqrp9r\",\"objOut\":\"8plc1rtsr\"}]},{\"name\":\"trigger 15\",\"links\":[{\"portIn\":\"Execute\",\"portOut\":\"trigger 15\",\"objIn\":\"t50fp58tq\",\"objOut\":\"8plc1rtsr\"}]}],\"objName\":\"Ops.Trigger.Sequence\"},{\"id\":\"qpn10j3zy\",\"uiAttribs\":{\"subPatch\":\"8k6721ec7\"},\"storage\":{\"blueprintVer\":2},\"portsOut\":[{\"name\":\"Trigger\",\"links\":[{\"portIn\":\"Render\",\"portOut\":\"Trigger\",\"objIn\":\"8feiks3d8\",\"objOut\":\"qpn10j3zy\"}]},{\"name\":\"Index\",\"value\":5},{\"name\":\"Value\",\"links\":[{\"portIn\":\"text\",\"portOut\":\"Value\",\"objIn\":\"8feiks3d8\",\"objOut\":\"qpn10j3zy\"}]}],\"objName\":\"Ops.Array.ArrayIteratorStrings\"},{\"id\":\"8feiks3d8\",\"uiAttribs\":{\"subPatch\":\"8k6721ec7\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Draw Mesh\",\"value\":0},{\"name\":\"Scale Mesh\",\"value\":7.15},{\"name\":\"Size index\",\"value\":0},{\"name\":\"Size\",\"value\":\"Auto\"},{\"name\":\"Width\",\"value\":1311},{\"name\":\"Height\",\"value\":1433},{\"name\":\"Auto Height\",\"value\":0},{\"name\":\"Auto Line Breaks\",\"value\":1},{\"name\":\"fontSize\",\"value\":50},{\"name\":\"align index\",\"value\":1},{\"name\":\"align\",\"value\":\"center\"},{\"name\":\"Vertical align index\",\"value\":0},{\"name\":\"Vertical align\",\"value\":\"Top\"},{\"name\":\"Letter Spacing\",\"value\":1.1},{\"name\":\"Line Height Add\",\"value\":0},{\"name\":\"Padding Y Top\",\"value\":0},{\"name\":\"Padding Y Bottom\",\"value\":0},{\"name\":\"Padding X\",\"value\":0},{\"name\":\"filter index\",\"value\":2},{\"name\":\"filter\",\"value\":\"mipmap\"},{\"name\":\"Wrap index\",\"value\":2},{\"name\":\"Wrap\",\"value\":\"clamp to edge\"},{\"name\":\"Anisotropic index\",\"value\":0},{\"name\":\"Anisotropic\",\"value\":\"0\"},{\"name\":\"Reuse Texture\",\"value\":1},{\"name\":\"Show Debug\",\"value\":0},{\"name\":\"Redraw On Font Load\",\"value\":1},{\"name\":\"r\",\"value\":0.6763671934604645},{\"name\":\"g\",\"value\":0.9827395507295931},{\"name\":\"b\",\"value\":1},{\"name\":\"Opacity\",\"value\":1},{\"name\":\"background R\",\"value\":0},{\"name\":\"background G\",\"value\":0},{\"name\":\"background B\",\"value\":0},{\"name\":\"background A\",\"value\":1}],\"portsOut\":[{\"name\":\"Next\",\"links\":[{\"portIn\":\"Update\",\"portOut\":\"Next\",\"objIn\":\"d8nt87ctj\",\"objOut\":\"8feiks3d8\"}]},{\"name\":\"Ratio\",\"value\":0.464},{\"name\":\"Aspect\",\"links\":[{\"portIn\":\"Number\",\"portOut\":\"Aspect\",\"objIn\":\"dv1yqzwz7\",\"objOut\":\"8feiks3d8\"}]},{\"name\":\"Num Lines\",\"value\":1}],\"objName\":\"Ops.Gl.Textures.TextTexture_v6\"},{\"id\":\"9p1cqrp9r\",\"uiAttribs\":{\"subPatch\":\"8k6721ec7\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Draw Mesh\",\"value\":0},{\"name\":\"Scale Mesh\",\"value\":0.74},{\"name\":\"Size index\",\"value\":0},{\"name\":\"Size\",\"value\":\"Auto\"},{\"name\":\"Width\",\"value\":527},{\"name\":\"Height\",\"value\":335},{\"name\":\"Auto Height\",\"value\":0},{\"name\":\"Auto Line Breaks\",\"value\":1},{\"name\":\"fontSize\",\"value\":100},{\"name\":\"align index\",\"value\":0},{\"name\":\"align\",\"value\":\"left\"},{\"name\":\"Vertical align index\",\"value\":0},{\"name\":\"Vertical align\",\"value\":\"Top\"},{\"name\":\"Letter Spacing\",\"value\":1},{\"name\":\"Line Height Add\",\"value\":0},{\"name\":\"Padding Y Top\",\"value\":0},{\"name\":\"Padding Y Bottom\",\"value\":0},{\"name\":\"Padding X\",\"value\":0},{\"name\":\"filter index\",\"value\":2},{\"name\":\"filter\",\"value\":\"mipmap\"},{\"name\":\"Wrap index\",\"value\":2},{\"name\":\"Wrap\",\"value\":\"clamp to edge\"},{\"name\":\"Anisotropic index\",\"value\":3},{\"name\":\"Anisotropic\",\"value\":\"4\"},{\"name\":\"Reuse Texture\",\"value\":1},{\"name\":\"Show Debug\",\"value\":0},{\"name\":\"Redraw On Font Load\",\"value\":1},{\"name\":\"r\",\"value\":1},{\"name\":\"g\",\"value\":1},{\"name\":\"b\",\"value\":1},{\"name\":\"Opacity\",\"value\":1},{\"name\":\"background R\",\"value\":0},{\"name\":\"background G\",\"value\":0},{\"name\":\"background B\",\"value\":0},{\"name\":\"background A\",\"value\":0}],\"portsOut\":[{\"name\":\"Ratio\",\"value\":0.9375},{\"name\":\"texture\",\"links\":[{\"portIn\":\"innerIn_498yuliuq\",\"portOut\":\"texture\",\"objIn\":\"s39ut5yi6\",\"objOut\":\"9p1cqrp9r\"}]},{\"name\":\"Aspect\",\"value\":1.0666666666666667},{\"name\":\"Num Lines\",\"value\":6}],\"objName\":\"Ops.Gl.Textures.TextTexture_v6\"},{\"id\":\"rh3b9fjvt\",\"uiAttribs\":{\"subPatch\":\"8k6721ec7\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Seperator\",\"value\":\"\"},{\"name\":\"New Line\",\"value\":1}],\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"text\",\"portOut\":\"Result\",\"objIn\":\"9p1cqrp9r\",\"objOut\":\"rh3b9fjvt\"}]}],\"objName\":\"Ops.Array.ArrayToString_v3\"},{\"id\":\"d8nt87ctj\",\"uiAttribs\":{\"subPatch\":\"8k6721ec7\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"Active\",\"value\":1},{\"name\":\"Clear\",\"value\":0}],\"portsOut\":[{\"name\":\"Next\",\"links\":[{\"portIn\":\"Update\",\"portOut\":\"Next\",\"objIn\":\"dv1yqzwz7\",\"objOut\":\"d8nt87ctj\"}]},{\"name\":\"Result\",\"links\":[{\"portIn\":\"innerIn_ddpq7kosf\",\"portOut\":\"Result\",\"objIn\":\"s39ut5yi6\",\"objOut\":\"d8nt87ctj\"},{\"portIn\":\"Text Ratios\",\"portOut\":\"Result\",\"objIn\":\"t50fp58tq\",\"objOut\":\"d8nt87ctj\"}]}],\"objName\":\"Ops.Data.Compose.Array.CompArray\"},{\"id\":\"dv1yqzwz7\",\"uiAttribs\":{\"subPatch\":\"8k6721ec7\"},\"storage\":{\"blueprintVer\":2},\"objName\":\"Ops.Data.Compose.Array.CompArrayPushNumber\"},{\"id\":\"3schyl64h\",\"uiAttribs\":{\"subPatch\":\"8k6721ec7\"},\"storage\":{\"blueprintVer\":2},\"portsOut\":[{\"name\":\"innerOut_zgplxnbc1\",\"title\":\"Execute\",\"links\":[{\"portIn\":\"exe\",\"portOut\":\"innerOut_zgplxnbc1\",\"objIn\":\"8plc1rtsr\",\"objOut\":\"3schyl64h\"}]},{\"name\":\"innerOut_nxezakedh\",\"title\":\"Array of Strings\",\"links\":[{\"portIn\":\"Array\",\"portOut\":\"innerOut_nxezakedh\",\"objIn\":\"qpn10j3zy\",\"objOut\":\"3schyl64h\"},{\"portIn\":\"Array\",\"portOut\":\"innerOut_nxezakedh\",\"objIn\":\"rh3b9fjvt\",\"objOut\":\"3schyl64h\"}]},{\"name\":\"innerOut_ypqxgfqsy\",\"title\":\"Font\",\"links\":[{\"portIn\":\"font\",\"portOut\":\"innerOut_ypqxgfqsy\",\"objIn\":\"8feiks3d8\",\"objOut\":\"3schyl64h\"},{\"portIn\":\"font\",\"portOut\":\"innerOut_ypqxgfqsy\",\"objIn\":\"9p1cqrp9r\",\"objOut\":\"3schyl64h\"}]},{\"name\":\"innerOut_zhebovez1\",\"title\":\"Weight\",\"links\":[{\"portIn\":\"weight\",\"portOut\":\"innerOut_zhebovez1\",\"objIn\":\"8feiks3d8\",\"objOut\":\"3schyl64h\"},{\"portIn\":\"weight\",\"portOut\":\"innerOut_zhebovez1\",\"objIn\":\"9p1cqrp9r\",\"objOut\":\"3schyl64h\"}]}],\"objName\":\"Ops.Ui.SubPatchInput\"},{\"id\":\"s39ut5yi6\",\"uiAttribs\":{\"subPatch\":\"8k6721ec7\"},\"storage\":{\"blueprintVer\":2},\"portsIn\":[{\"name\":\"innerIn_498yuliuq\",\"title\":\"Text UV Texture\"},{\"name\":\"innerIn_fgi23titp\",\"title\":\"Text UV Coordinates\"},{\"name\":\"innerIn_ddpq7kosf\",\"title\":\"Text Width\"}],\"objName\":\"Ops.Ui.SubPatchOutput\"},{\"id\":\"t50fp58tq\",\"uiAttribs\":{\"subPatch\":\"8k6721ec7\"},\"storage\":{\"blueprintVer\":2},\"portsOut\":[{\"name\":\"UV Coordinates\",\"links\":[{\"portIn\":\"innerIn_fgi23titp\",\"portOut\":\"UV Coordinates\",\"objIn\":\"s39ut5yi6\",\"objOut\":\"t50fp58tq\"}]}],\"objName\":\"Ops.Patch.PK3cVbR.TextUVCoordinates2\"}]}",};
const port_zgplxnbc1=op.inTrigger("zgplxnbc1");
port_zgplxnbc1.setUiAttribs({title:"Execute",});
port_zgplxnbc1.setUiAttribs({"values":[""]});

const port_nxezakedh=op.inArray("nxezakedh");
port_nxezakedh.setUiAttribs({title:"Array of Strings",});
port_nxezakedh.setUiAttribs({"values":[""]});

const port_ypqxgfqsy=op.inString("ypqxgfqsy","Courier");
port_ypqxgfqsy.setUiAttribs({title:"Font",});
port_ypqxgfqsy.setUiAttribs({"values":[""]});

const port_zhebovez1=op.inString("zhebovez1","normal");
port_zhebovez1.setUiAttribs({title:"Weight",});
port_zhebovez1.setUiAttribs({"values":[""]});

const port_498yuliuq=op.outObject("498yuliuq");
port_498yuliuq.setUiAttribs({title:"Text UV Texture",display:"texture",objType:"texture",objType:"texture"});
port_498yuliuq.setUiAttribs({"values":[""]});

const port_fgi23titp=op.outArray("fgi23titp");
port_fgi23titp.setUiAttribs({title:"Text UV Coordinates",});
port_fgi23titp.setUiAttribs({"values":[""]});

const port_ddpq7kosf=op.outArray("ddpq7kosf");
port_ddpq7kosf.setUiAttribs({title:"Text Width",});
port_ddpq7kosf.setUiAttribs({"values":[""]});

op.initInnerPorts=function(addedOps)
{
  for(let i=0;i<addedOps.length;i++)
  {
    if(addedOps[i].innerInput)
    {
const innerOut_zgplxnbc1 = addedOps[i].outTrigger("innerOut_zgplxnbc1");
innerOut_zgplxnbc1.setUiAttribs({title:"Execute"});
port_zgplxnbc1.onTriggered = () => { innerOut_zgplxnbc1.trigger(); };

const innerOut_nxezakedh = addedOps[i].outArray("innerOut_nxezakedh");
innerOut_nxezakedh.setUiAttribs({title:"Array of Strings"});
port_nxezakedh.on("change", (a,v) => { innerOut_nxezakedh.setRef(a); });

const innerOut_ypqxgfqsy = addedOps[i].outString("innerOut_ypqxgfqsy");
innerOut_ypqxgfqsy.set(port_ypqxgfqsy.get() );
innerOut_ypqxgfqsy.setUiAttribs({title:"Font"});
port_ypqxgfqsy.on("change", (a,v) => { innerOut_ypqxgfqsy.set(a); });

const innerOut_zhebovez1 = addedOps[i].outString("innerOut_zhebovez1");
innerOut_zhebovez1.set(port_zhebovez1.get() );
innerOut_zhebovez1.setUiAttribs({title:"Weight"});
port_zhebovez1.on("change", (a,v) => { innerOut_zhebovez1.set(a); });

    }
if(addedOps[i].innerOutput)
{
const innerIn_498yuliuq = addedOps[i].inObject("innerIn_498yuliuq");
innerIn_498yuliuq.setUiAttribs({title:"Text UV Texture"});
innerIn_498yuliuq.on("change", (a,v) => { port_498yuliuq.setRef(a); });

const innerIn_fgi23titp = addedOps[i].inArray("innerIn_fgi23titp");
innerIn_fgi23titp.setUiAttribs({title:"Text UV Coordinates"});
innerIn_fgi23titp.on("change", (a,v) => { port_fgi23titp.setRef(a); });

const innerIn_ddpq7kosf = addedOps[i].inArray("innerIn_ddpq7kosf");
innerIn_ddpq7kosf.setUiAttribs({title:"Text Width"});
innerIn_ddpq7kosf.on("change", (a,v) => { port_ddpq7kosf.setRef(a); });

}
}
};

const patchId = "bp2sub_" + op.id;

new CABLES.SubPatchOp(op, { "subId": patchId });

initializeSubpatch();

function initializeSubpatch()
{
    if(!attachments || !attachments.subpatch_json) return;

    const p = JSON.parse(attachments.subpatch_json);

    CABLES.Patch.replaceOpIds(p,
        {
            "parentSubPatchId": patchId,
            "prefixHash": patchId,
            "oldIdAsRef": true,
            "doNotUnlinkLostLinks": true
        });

    for (let i = 0; i < p.ops.length; i++)
    {
        p.ops[i].uiAttribs.blueprintSubpatch2 = true;
    }

    op.loadDependencies(p, () =>
    {
        op.patch.deSerialize(p, { "opsCreated": op.initInnerPorts });
        if (CABLES.UI)gui.savedState.setSaved("blueprintloaded", patchId);
        op.patch.emitEvent("subpatchExpose", patchId);
        op.setStorage({ "blueprintVer": 2 });
        op.patch.emitEvent("subpatchExpose", patchId);
    });
}

}
};

CABLES.OPS["830823de-7d45-479a-aa6a-ea6b9aec4519"]={f:Ops.Patch.PK3cVbR.TextToUVTexture,objName:"Ops.Patch.PK3cVbR.TextToUVTexture"};




// **************************************************************
// 
// Ops.Patch.PK3cVbR.ComputeTextMeshParameters
// 
// **************************************************************

Ops.Patch.PK3cVbR.ComputeTextMeshParameters= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={"inc_gen_ports_js":"const port_m2a4h2k9j=op.inTrigger(\"m2a4h2k9j\");\nport_m2a4h2k9j.setUiAttribs({title:\"Execute\",});\nport_m2a4h2k9j.setUiAttribs({\"values\":[\"\"]});\n\nconst port_o2yrl5cd3=op.inArray(\"o2yrl5cd3\");\nport_o2yrl5cd3.setUiAttribs({title:\"String Array\",});\nport_o2yrl5cd3.setUiAttribs({\"values\":[\"\"]});\n\nconst port_htuulk2ys=op.inArray(\"htuulk2ys\");\nport_htuulk2ys.setUiAttribs({title:\"Text Original Positions\",});\nport_htuulk2ys.setUiAttribs({\"values\":[\"\"]});\n\nconst port_2d3uvd89n=op.outArray(\"2d3uvd89n\");\nport_2d3uvd89n.setUiAttribs({title:\"String Lengths Array\",});\nport_2d3uvd89n.setUiAttribs({\"values\":[\"\"]});\n\nconst port_stl2nof01=op.outArray(\"stl2nof01\");\nport_stl2nof01.setUiAttribs({title:\"Char Positions\",});\nport_stl2nof01.setUiAttribs({\"values\":[\"\"]});\n\nconst port_jk8q9heos=op.outArray(\"jk8q9heos\");\nport_jk8q9heos.setUiAttribs({title:\"Word Center Positions\",});\nport_jk8q9heos.setUiAttribs({\"values\":[\"\"]});\n\nconst port_sq3df51g5=op.outArray(\"sq3df51g5\");\nport_sq3df51g5.setUiAttribs({title:\"Word First Letter Positions\",});\nport_sq3df51g5.setUiAttribs({\"values\":[\"\"]});\n\nop.initInnerPorts=function(addedOps)\n{\n  for(let i=0;i<addedOps.length;i++)\n  {\n    if(addedOps[i].innerInput)\n    {\nconst innerOut_m2a4h2k9j = addedOps[i].outTrigger(\"innerOut_m2a4h2k9j\");\ninnerOut_m2a4h2k9j.setUiAttribs({title:\"Execute\"});\nport_m2a4h2k9j.onTriggered = () => { innerOut_m2a4h2k9j.trigger(); };\n\nconst innerOut_o2yrl5cd3 = addedOps[i].outArray(\"innerOut_o2yrl5cd3\");\ninnerOut_o2yrl5cd3.setUiAttribs({title:\"String Array\"});\nport_o2yrl5cd3.on(\"change\", (a,v) => { innerOut_o2yrl5cd3.setRef(a); });\n\nconst innerOut_htuulk2ys = addedOps[i].outArray(\"innerOut_htuulk2ys\");\ninnerOut_htuulk2ys.setUiAttribs({title:\"Text Original Positions\"});\nport_htuulk2ys.on(\"change\", (a,v) => { innerOut_htuulk2ys.setRef(a); });\n\n    }\nif(addedOps[i].innerOutput)\n{\nconst innerIn_2d3uvd89n = addedOps[i].inArray(\"innerIn_2d3uvd89n\");\ninnerIn_2d3uvd89n.setUiAttribs({title:\"String Lengths Array\"});\ninnerIn_2d3uvd89n.on(\"change\", (a,v) => { port_2d3uvd89n.setRef(a); });\n\nconst innerIn_stl2nof01 = addedOps[i].inArray(\"innerIn_stl2nof01\");\ninnerIn_stl2nof01.setUiAttribs({title:\"Char Positions\"});\ninnerIn_stl2nof01.on(\"change\", (a,v) => { port_stl2nof01.setRef(a); });\n\nconst innerIn_jk8q9heos = addedOps[i].inArray(\"innerIn_jk8q9heos\");\ninnerIn_jk8q9heos.setUiAttribs({title:\"Word Center Positions\"});\ninnerIn_jk8q9heos.on(\"change\", (a,v) => { port_jk8q9heos.setRef(a); });\n\nconst innerIn_sq3df51g5 = addedOps[i].inArray(\"innerIn_sq3df51g5\");\ninnerIn_sq3df51g5.setUiAttribs({title:\"Word First Letter Positions\"});\ninnerIn_sq3df51g5.on(\"change\", (a,v) => { port_sq3df51g5.setRef(a); });\n\n}\n}\n};\n","subpatch_json":"{\"ops\":[{\"id\":\"7t864w1yz\",\"uiAttribs\":{\"subPatch\":\"3e7j0a76f\"},\"storage\":{},\"portsOut\":[{\"name\":\"Trigger\",\"links\":[{\"portIn\":\"Update\",\"portOut\":\"Trigger\",\"objIn\":\"nfanjtg3y\",\"objOut\":\"7t864w1yz\"}]},{\"name\":\"Index\",\"value\":5},{\"name\":\"Value\",\"links\":[{\"portIn\":\"String\",\"portOut\":\"Value\",\"objIn\":\"nyshaj1zi\",\"objOut\":\"7t864w1yz\"}]}],\"objName\":\"Ops.Array.ArrayIteratorStrings\"},{\"id\":\"nfanjtg3y\",\"uiAttribs\":{\"subPatch\":\"3e7j0a76f\"},\"storage\":{},\"portsIn\":[{\"name\":\"Active\",\"value\":1},{\"name\":\"Clear\",\"value\":0}],\"portsOut\":[{\"name\":\"Next\",\"links\":[{\"portIn\":\"Update\",\"portOut\":\"Next\",\"objIn\":\"vlban8o1s\",\"objOut\":\"nfanjtg3y\"}]},{\"name\":\"Result\",\"links\":[{\"portIn\":\"innerIn_2d3uvd89n\",\"portOut\":\"Result\",\"objIn\":\"6dqxg0gvp\",\"objOut\":\"nfanjtg3y\"},{\"portIn\":\"String Lengths\",\"portOut\":\"Result\",\"objIn\":\"acjimdayt\",\"objOut\":\"nfanjtg3y\"}]}],\"objName\":\"Ops.Data.Compose.Array.CompArray\"},{\"id\":\"vlban8o1s\",\"uiAttribs\":{\"subPatch\":\"3e7j0a76f\"},\"storage\":{},\"objName\":\"Ops.Data.Compose.Array.CompArrayPushNumber\"},{\"id\":\"nyshaj1zi\",\"uiAttribs\":{\"subPatch\":\"3e7j0a76f\"},\"storage\":{},\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"Number\",\"portOut\":\"Result\",\"objIn\":\"vlban8o1s\",\"objOut\":\"nyshaj1zi\"}]}],\"objName\":\"Ops.String.StringLength_v2\"},{\"id\":\"e4xc132kf\",\"uiAttribs\":{\"subPatch\":\"3e7j0a76f\"},\"storage\":{},\"portsOut\":[{\"name\":\"trigger 0\",\"links\":[{\"portIn\":\"Reset\",\"portOut\":\"trigger 0\",\"objIn\":\"nfanjtg3y\",\"objOut\":\"e4xc132kf\"}]},{\"name\":\"trigger 1\",\"links\":[{\"portIn\":\"Exe\",\"portOut\":\"trigger 1\",\"objIn\":\"7t864w1yz\",\"objOut\":\"e4xc132kf\"}]}],\"objName\":\"Ops.Trigger.Sequence\"},{\"id\":\"ns932ottw\",\"uiAttribs\":{\"subPatch\":\"3e7j0a76f\"},\"storage\":{},\"portsOut\":[{\"name\":\"innerOut_m2a4h2k9j\",\"title\":\"Execute\",\"links\":[{\"portIn\":\"exe\",\"portOut\":\"innerOut_m2a4h2k9j\",\"objIn\":\"e4xc132kf\",\"objOut\":\"ns932ottw\"}]},{\"name\":\"innerOut_o2yrl5cd3\",\"title\":\"String Array\",\"links\":[{\"portIn\":\"Array\",\"portOut\":\"innerOut_o2yrl5cd3\",\"objIn\":\"7t864w1yz\",\"objOut\":\"ns932ottw\"}]},{\"name\":\"innerOut_htuulk2ys\",\"title\":\"Text Original Positions\",\"links\":[{\"portIn\":\"innerIn_stl2nof01\",\"portOut\":\"innerOut_htuulk2ys\",\"objIn\":\"6dqxg0gvp\",\"objOut\":\"ns932ottw\"},{\"portIn\":\"Text Original Positions\",\"portOut\":\"innerOut_htuulk2ys\",\"objIn\":\"acjimdayt\",\"objOut\":\"ns932ottw\"}]}],\"objName\":\"Ops.Ui.SubPatchInput\"},{\"id\":\"6dqxg0gvp\",\"uiAttribs\":{\"subPatch\":\"3e7j0a76f\"},\"storage\":{},\"portsIn\":[{\"name\":\"innerIn_2d3uvd89n\",\"title\":\"String Lengths Array\"},{\"name\":\"innerIn_stl2nof01\",\"title\":\"Char Positions\"},{\"name\":\"innerIn_jk8q9heos\",\"title\":\"Word Center Positions\"},{\"name\":\"innerIn_sq3df51g5\",\"title\":\"Word First Letter Positions\"}],\"objName\":\"Ops.Ui.SubPatchOutput\"},{\"id\":\"acjimdayt\",\"uiAttribs\":{\"subPatch\":\"3e7j0a76f\"},\"storage\":{},\"portsOut\":[{\"name\":\"Centered Positions\",\"links\":[{\"portIn\":\"innerIn_jk8q9heos\",\"portOut\":\"Centered Positions\",\"objIn\":\"6dqxg0gvp\",\"objOut\":\"acjimdayt\"}]},{\"name\":\"First Letter Positions\",\"links\":[{\"portIn\":\"innerIn_sq3df51g5\",\"portOut\":\"First Letter Positions\",\"objIn\":\"6dqxg0gvp\",\"objOut\":\"acjimdayt\"}]}],\"objName\":\"Ops.Patch.PK3cVbR.ComputeWordCenterPosition\"}]}",};
const port_m2a4h2k9j=op.inTrigger("m2a4h2k9j");
port_m2a4h2k9j.setUiAttribs({title:"Execute",});
port_m2a4h2k9j.setUiAttribs({"values":[""]});

const port_o2yrl5cd3=op.inArray("o2yrl5cd3");
port_o2yrl5cd3.setUiAttribs({title:"String Array",});
port_o2yrl5cd3.setUiAttribs({"values":[""]});

const port_htuulk2ys=op.inArray("htuulk2ys");
port_htuulk2ys.setUiAttribs({title:"Text Original Positions",});
port_htuulk2ys.setUiAttribs({"values":[""]});

const port_2d3uvd89n=op.outArray("2d3uvd89n");
port_2d3uvd89n.setUiAttribs({title:"String Lengths Array",});
port_2d3uvd89n.setUiAttribs({"values":[""]});

const port_stl2nof01=op.outArray("stl2nof01");
port_stl2nof01.setUiAttribs({title:"Char Positions",});
port_stl2nof01.setUiAttribs({"values":[""]});

const port_jk8q9heos=op.outArray("jk8q9heos");
port_jk8q9heos.setUiAttribs({title:"Word Center Positions",});
port_jk8q9heos.setUiAttribs({"values":[""]});

const port_sq3df51g5=op.outArray("sq3df51g5");
port_sq3df51g5.setUiAttribs({title:"Word First Letter Positions",});
port_sq3df51g5.setUiAttribs({"values":[""]});

op.initInnerPorts=function(addedOps)
{
  for(let i=0;i<addedOps.length;i++)
  {
    if(addedOps[i].innerInput)
    {
const innerOut_m2a4h2k9j = addedOps[i].outTrigger("innerOut_m2a4h2k9j");
innerOut_m2a4h2k9j.setUiAttribs({title:"Execute"});
port_m2a4h2k9j.onTriggered = () => { innerOut_m2a4h2k9j.trigger(); };

const innerOut_o2yrl5cd3 = addedOps[i].outArray("innerOut_o2yrl5cd3");
innerOut_o2yrl5cd3.setUiAttribs({title:"String Array"});
port_o2yrl5cd3.on("change", (a,v) => { innerOut_o2yrl5cd3.setRef(a); });

const innerOut_htuulk2ys = addedOps[i].outArray("innerOut_htuulk2ys");
innerOut_htuulk2ys.setUiAttribs({title:"Text Original Positions"});
port_htuulk2ys.on("change", (a,v) => { innerOut_htuulk2ys.setRef(a); });

    }
if(addedOps[i].innerOutput)
{
const innerIn_2d3uvd89n = addedOps[i].inArray("innerIn_2d3uvd89n");
innerIn_2d3uvd89n.setUiAttribs({title:"String Lengths Array"});
innerIn_2d3uvd89n.on("change", (a,v) => { port_2d3uvd89n.setRef(a); });

const innerIn_stl2nof01 = addedOps[i].inArray("innerIn_stl2nof01");
innerIn_stl2nof01.setUiAttribs({title:"Char Positions"});
innerIn_stl2nof01.on("change", (a,v) => { port_stl2nof01.setRef(a); });

const innerIn_jk8q9heos = addedOps[i].inArray("innerIn_jk8q9heos");
innerIn_jk8q9heos.setUiAttribs({title:"Word Center Positions"});
innerIn_jk8q9heos.on("change", (a,v) => { port_jk8q9heos.setRef(a); });

const innerIn_sq3df51g5 = addedOps[i].inArray("innerIn_sq3df51g5");
innerIn_sq3df51g5.setUiAttribs({title:"Word First Letter Positions"});
innerIn_sq3df51g5.on("change", (a,v) => { port_sq3df51g5.setRef(a); });

}
}
};

const patchId = "bp2sub_" + op.id;

new CABLES.SubPatchOp(op, { "subId": patchId });

initializeSubpatch();

function initializeSubpatch()
{
    if(!attachments || !attachments.subpatch_json) return;

    const p = JSON.parse(attachments.subpatch_json);

    CABLES.Patch.replaceOpIds(p,
        {
            "parentSubPatchId": patchId,
            "prefixHash": patchId,
            "oldIdAsRef": true,
            "doNotUnlinkLostLinks": true
        });

    for (let i = 0; i < p.ops.length; i++)
    {
        p.ops[i].uiAttribs.blueprintSubpatch2 = true;
    }

    op.loadDependencies(p, () =>
    {
        op.patch.deSerialize(p, { "opsCreated": op.initInnerPorts });
        if (CABLES.UI)gui.savedState.setSaved("blueprintloaded", patchId);
        op.patch.emitEvent("subpatchExpose", patchId);
        op.setStorage({ "blueprintVer": 2 });
        op.patch.emitEvent("subpatchExpose", patchId);
    });
}

}
};

CABLES.OPS["c9d58e95-7534-4fba-bc3e-eac5dd382cda"]={f:Ops.Patch.PK3cVbR.ComputeTextMeshParameters,objName:"Ops.Patch.PK3cVbR.ComputeTextMeshParameters"};




// **************************************************************
// 
// Ops.User.monotom.TextureLoaderFromArray
// 
// **************************************************************

Ops.User.monotom.TextureLoaderFromArray= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={"inc_gen_ports_js":"const port_52xsh7xlg=op.inString(\"52xsh7xlg\",\" chimeres.webp, brule_harold.webp, chimeres3.webp, georges.webp, music.webp, madame_rose.webp, mahdoton_paluu.webp, la_premiere_seconde.webp\");\nport_52xsh7xlg.setUiAttribs({title:\"value\",});\n\nconst port_shvso569u=op.outArray(\"shvso569u\");\nport_shvso569u.setUiAttribs({title:\"TextureArray\",});\n\nop.initInnerPorts=function(addedOps)\n{\n  for(let i=0;i<addedOps.length;i++)\n  {\n    if(addedOps[i].innerInput)\n    {\nconst innerOut_52xsh7xlg = addedOps[i].outString(\"innerOut_52xsh7xlg\");\ninnerOut_52xsh7xlg.set(port_52xsh7xlg.get() );\ninnerOut_52xsh7xlg.setUiAttribs({title:\"value\"});\nport_52xsh7xlg.on(\"change\", (a,v) => { innerOut_52xsh7xlg.set(a); });\n\n    }\nif(addedOps[i].innerOutput)\n{\nconst innerIn_shvso569u = addedOps[i].inArray(\"innerIn_shvso569u\");\ninnerIn_shvso569u.setUiAttribs({title:\"TextureArray\"});\ninnerIn_shvso569u.on(\"change\", (a,v) => { port_shvso569u.setRef(a); });\n\n}\n}\n};\n","subpatch_json":"{\"ops\":[{\"id\":\"rhnztkuxd\",\"uiAttribs\":{\"subPatch\":\"z9qhpwsjh\"},\"storage\":{},\"portsIn\":[{\"name\":\"separator\",\"value\":\",\"},{\"name\":\"Numbers\",\"value\":0},{\"name\":\"Trim\",\"value\":0},{\"name\":\"Split Lines\",\"value\":0}],\"portsOut\":[{\"name\":\"array\",\"links\":[{\"portIn\":\"urls\",\"portOut\":\"array\",\"objIn\":\"bj8x3lo9z\",\"objOut\":\"rhnztkuxd\"}]},{\"name\":\"length\",\"value\":6}],\"objName\":\"Ops.Array.StringToArray_v2\"},{\"id\":\"bj8x3lo9z\",\"uiAttribs\":{\"subPatch\":\"z9qhpwsjh\"},\"storage\":{},\"portsIn\":[{\"name\":\"filter index\",\"value\":1},{\"name\":\"filter\",\"value\":\"linear\"},{\"name\":\"wrap index\",\"value\":0},{\"name\":\"wrap\",\"value\":\"repeat\"},{\"name\":\"Flip\",\"value\":0},{\"name\":\"unpackPreMultipliedAlpha\",\"value\":0},{\"name\":\"Caching\",\"value\":0},{\"name\":\"Asset in patch\",\"value\":1}],\"portsOut\":[{\"name\":\"TextureArray\",\"links\":[{\"portIn\":\"innerIn_shvso569u\",\"portOut\":\"TextureArray\",\"objIn\":\"sehrly20p\",\"objOut\":\"bj8x3lo9z\"}]},{\"name\":\"width\",\"value\":1536},{\"name\":\"height\",\"value\":1024},{\"name\":\"loading\",\"value\":0},{\"name\":\"Aspect Ratio\",\"value\":1.5}],\"objName\":\"Ops.Gl.TextureArrayLoaderFromArray_v2\"},{\"id\":\"xdg1sokpg\",\"uiAttribs\":{\"subPatch\":\"z9qhpwsjh\"},\"storage\":{},\"portsIn\":[{\"name\":\"Search For\",\"value\":\" \"},{\"name\":\"Replace\",\"value\":\"\"},{\"name\":\"Replace What index\",\"value\":0},{\"name\":\"Replace What\",\"value\":\"All\"}],\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"String\",\"portOut\":\"Result\",\"objIn\":\"cfb5qiwcy\",\"objOut\":\"xdg1sokpg\"}]}],\"objName\":\"Ops.String.StringReplace\"},{\"id\":\"cfb5qiwcy\",\"uiAttribs\":{\"subPatch\":\"z9qhpwsjh\"},\"storage\":{},\"portsOut\":[{\"name\":\"Result\",\"links\":[{\"portIn\":\"text\",\"portOut\":\"Result\",\"objIn\":\"rhnztkuxd\",\"objOut\":\"cfb5qiwcy\"}]}],\"objName\":\"Ops.String.StringTrim_v2\"},{\"id\":\"o6d7wh510\",\"uiAttribs\":{\"subPatch\":\"z9qhpwsjh\"},\"storage\":{},\"portsOut\":[{\"name\":\"innerOut_52xsh7xlg\",\"title\":\"value\",\"links\":[{\"portIn\":\"String\",\"portOut\":\"innerOut_52xsh7xlg\",\"objIn\":\"xdg1sokpg\",\"objOut\":\"o6d7wh510\"}]}],\"objName\":\"Ops.Ui.SubPatchInput\"},{\"id\":\"sehrly20p\",\"uiAttribs\":{\"subPatch\":\"z9qhpwsjh\"},\"storage\":{},\"portsIn\":[{\"name\":\"innerIn_shvso569u\",\"title\":\"TextureArray\"}],\"objName\":\"Ops.Ui.SubPatchOutput\"}]}",};
const port_52xsh7xlg=op.inString("52xsh7xlg"," chimeres.webp, brule_harold.webp, chimeres3.webp, georges.webp, music.webp, madame_rose.webp, mahdoton_paluu.webp, la_premiere_seconde.webp");
port_52xsh7xlg.setUiAttribs({title:"value",});

const port_shvso569u=op.outArray("shvso569u");
port_shvso569u.setUiAttribs({title:"TextureArray",});

op.initInnerPorts=function(addedOps)
{
  for(let i=0;i<addedOps.length;i++)
  {
    if(addedOps[i].innerInput)
    {
const innerOut_52xsh7xlg = addedOps[i].outString("innerOut_52xsh7xlg");
innerOut_52xsh7xlg.set(port_52xsh7xlg.get() );
innerOut_52xsh7xlg.setUiAttribs({title:"value"});
port_52xsh7xlg.on("change", (a,v) => { innerOut_52xsh7xlg.set(a); });

    }
if(addedOps[i].innerOutput)
{
const innerIn_shvso569u = addedOps[i].inArray("innerIn_shvso569u");
innerIn_shvso569u.setUiAttribs({title:"TextureArray"});
innerIn_shvso569u.on("change", (a,v) => { port_shvso569u.setRef(a); });

}
}
};

const patchId = "bp2sub_" + op.id;

new CABLES.SubPatchOp(op, { "subId": patchId });

initializeSubpatch();

function initializeSubpatch()
{
    if(!attachments || !attachments.subpatch_json) return;

    const p = JSON.parse(attachments.subpatch_json);

    CABLES.Patch.replaceOpIds(p,
        {
            "parentSubPatchId": patchId,
            "prefixHash": patchId,
            "oldIdAsRef": true,
            "doNotUnlinkLostLinks": true
        });

    for (let i = 0; i < p.ops.length; i++)
    {
        p.ops[i].uiAttribs.blueprintSubpatch2 = true;
    }

    op.loadDependencies(p, () =>
    {
        op.patch.deSerialize(p, { "opsCreated": op.initInnerPorts });
        if (CABLES.UI)gui.savedState.setSaved("blueprintloaded", patchId);
        op.patch.emitEvent("subpatchExpose", patchId);
        op.setStorage({ "blueprintVer": 2 });
        op.patch.emitEvent("subpatchExpose", patchId);
    });
}

}
};

CABLES.OPS["85c8e37b-2956-4fcd-9346-a6a7266eb3ea"]={f:Ops.User.monotom.TextureLoaderFromArray,objName:"Ops.User.monotom.TextureLoaderFromArray"};




// **************************************************************
// 
// Ops.Trigger.Sequence
// 
// **************************************************************

Ops.Trigger.Sequence= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    exe = op.inTrigger("exe"),
    cleanup = op.inTriggerButton("Clean up connections");

op.setUiAttrib({ "resizable": true, "resizableY": false, "stretchPorts": true });
const
    exes = [],
    triggers = [],
    num = 16;

let
    updateTimeout = null,
    connectedOuts = [];

exe.onTriggered = triggerAll;
cleanup.onTriggered = clean;
cleanup.setUiAttribs({ "hideParam": true, "hidePort": true });

for (let i = 0; i < num; i++)
{
    const p = op.outTrigger("trigger " + i);
    triggers.push(p);
    p.onLinkChanged = updateButton;

    if (i < num - 1)
    {
        let newExe = op.inTrigger("exe " + i);
        newExe.onTriggered = triggerAll;
        exes.push(newExe);
    }
}

updateConnected();

function updateConnected()
{
    connectedOuts.length = 0;
    for (let i = 0; i < triggers.length; i++)
        if (triggers[i].links.length > 0) connectedOuts.push(triggers[i]);
}

function updateButton()
{
    updateConnected();
    clearTimeout(updateTimeout);
    updateTimeout = setTimeout(() =>
    {
        let show = false;
        for (let i = 0; i < triggers.length; i++)
            if (triggers[i].links.length > 1) show = true;

        cleanup.setUiAttribs({ "hideParam": !show });

        if (op.isCurrentUiOp()) op.refreshParams();
    }, 60);
}

function triggerAll()
{
    // for (let i = 0; i < triggers.length; i++) triggers[i].trigger();
    for (let i = 0; i < connectedOuts.length; i++) connectedOuts[i].trigger();
}

function clean()
{
    let count = 0;
    for (let i = 0; i < triggers.length; i++)
    {
        let removeLinks = [];

        if (triggers[i].links.length > 1)
            for (let j = 1; j < triggers[i].links.length; j++)
            {
                while (triggers[count].links.length > 0) count++;

                removeLinks.push(triggers[i].links[j]);
                const otherPort = triggers[i].links[j].getOtherPort(triggers[i]);
                op.patch.link(op, "trigger " + count, otherPort.op, otherPort.name);
                count++;
            }

        for (let j = 0; j < removeLinks.length; j++) removeLinks[j].remove();
    }
    updateButton();
    updateConnected();
}

}
};

CABLES.OPS["a466bc1f-06e9-4595-8849-bffb9fe22f99"]={f:Ops.Trigger.Sequence,objName:"Ops.Trigger.Sequence"};




// **************************************************************
// 
// Ops.Array.ArrayIteratorStrings
// 
// **************************************************************

Ops.Array.ArrayIteratorStrings= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    exe = op.inTrigger("Exe"),
    arr = op.inArray("Array"),
    trigger = op.outTrigger("Trigger"),
    idx = op.outNumber("Index"),
    val = op.outString("Value");

exe.onTriggered = function ()
{
    if (!arr.get()) return;

    for (let i = 0; i < arr.get().length; i++)
    {
        idx.set(i);
        let value = null;
        if (arr.get()[i])
        {
            value = String(arr.get()[i]);
        }
        val.set(value);
        trigger.trigger();
        // op.patch.instancing.increment();
    }
};

}
};

CABLES.OPS["0f8ee026-e094-484d-8403-547c92293be9"]={f:Ops.Array.ArrayIteratorStrings,objName:"Ops.Array.ArrayIteratorStrings"};




// **************************************************************
// 
// Ops.Gl.Textures.TextTexture_v6
// 
// **************************************************************

Ops.Gl.Textures.TextTexture_v6= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={"text_frag":"{{MODULES_HEAD}}\r\n\r\nUNI sampler2D tex;\r\nUNI float a;\r\nUNI vec4 color;\r\nIN vec2 texCoord;\r\n\r\nvoid main()\r\n{\r\n\r\n    vec4 col=texture(tex,vec2(texCoord.x,(1.0-texCoord.y)));\r\n\r\n    {{MODULE_COLOR}}\r\n\r\n    outColor=col;\r\n}\r\n","text_vert":"{{MODULES_HEAD}}\r\n\r\nIN vec3 vPosition;\r\nUNI mat4 projMatrix;\r\nUNI mat4 modelMatrix;\r\nUNI mat4 viewMatrix;\r\nUNI float aspect;\r\nOUT vec2 texCoord;\r\nIN vec2 attrTexCoord;\r\n\r\nvoid main()\r\n{\r\n    vec4 pos=vec4(vPosition,  1.0);\r\n\r\n    pos.x*=aspect;\r\n\r\n    texCoord=vec2(attrTexCoord.x,1.0-attrTexCoord.y);;\r\n\r\n    mat4 mMatrix=modelMatrix;\r\n\r\n    {{MODULE_VERTEX_POSITION}}\r\n    mat4 modelViewMatrix=viewMatrix*mMatrix;\r\n\r\n    gl_Position = projMatrix * modelViewMatrix * pos;\r\n}\r\n",};
const
    render = op.inTriggerButton("Render"),

    text = op.inString("text", "cables"),

    drawMesh = op.inValueBool("Draw Mesh", true),
    meshScale = op.inValueFloat("Scale Mesh", 0.5),

    texSizeMeth = op.inSwitch("Size", ["Auto", "Manual"], "Auto"),

    texSizeManWidth = op.inInt("Width", 512),
    texSizeManHeight = op.inInt("Height", 512),
    texSizeAutoHeight = op.inBool("Auto Height", true),

    texSizeManBreak = op.inBool("Auto Line Breaks", true),

    font = op.inString("font", "Arial"),
    weight = op.inString("weight", "normal"),
    inFontSize = op.inValueFloat("fontSize", 300),
    align = op.inSwitch("align", ["left", "center", "right"], "center"),
    valign = op.inSwitch("Vertical align", ["Top", "Middle", "Bottom"], "Top"),

    inLetterspacing = op.inFloat("Letter Spacing", 0),
    inLineHeight = op.inFloat("Line Height Add", 0),

    inPaddingY = op.inInt("Padding Y Top", 3),
    inPaddingYBot = op.inInt("Padding Y Bottom", 3),
    inPaddingX = op.inInt("Padding X", 0),

    tfilter = op.inSwitch("filter", ["nearest", "linear", "mipmap"], "linear"),
    wrap = op.inValueSelect("Wrap", ["repeat", "mirrored repeat", "clamp to edge"], "clamp to edge"),
    aniso = op.inSwitch("Anisotropic", [0, 1, 2, 4, 8, 16], 0),
    cachetexture = op.inValueBool("Reuse Texture", true),
    drawDebug = op.inBool("Show Debug", false),

    reloadOnFont = op.inBool("Redraw On Font Load", true),

    r = op.inValueSlider("r", 1),
    g = op.inValueSlider("g", 1),
    b = op.inValueSlider("b", 1),
    inOpacity = op.inFloatSlider("Opacity", 1),

    bgR = op.inValueSlider("background R", 0),
    bgG = op.inValueSlider("background G", 0),
    bgB = op.inValueSlider("background B", 0),
    bgA = op.inValueSlider("background A", 1),

    inRedraw = op.inTriggerButton("Force Redraw"),

    next = op.outTrigger("Next"),
    outRatio = op.outNumber("Ratio"),
    textureOut = op.outTexture("texture"),
    outEle = op.outObject("Canvas", null, "element"),
    outAspect = op.outNumber("Aspect", 1),
    outLines = op.outNumber("Num Lines");

const SPACE = " ";

r.setUiAttribs({ "colorPick": true });
bgR.setUiAttribs({ "colorPick": true });

op.toWorkPortsNeedToBeLinked(render);

op.setPortGroup("Text Color", [r, g, b, inOpacity]);
op.setPortGroup("Background", [bgR, bgG, bgB, bgA]);
op.setPortGroup("Font", [font, weight, inFontSize, align, valign, inLetterspacing, inLineHeight]);
op.setPortGroup("Texture", [wrap, tfilter, aniso, cachetexture, drawDebug]);

op.setPortGroup("Rendering", [drawMesh, meshScale]);

render.onLinkChanged = () =>
{
    if (!render.isLinked())textureOut.setRef(CGL.Texture.getEmptyTexture(cgl));
    else textureOut.setRef(tex);
};

inRedraw.onTriggered =
    r.onChange =
    g.onChange =
    b.onChange =
    inOpacity.onChange =
    valign.onChange =
    texSizeManBreak.onChange =
    texSizeAutoHeight.onChange =
    inLineHeight.onChange =
    texSizeMeth.onChange =
    texSizeManWidth.onChange =
    texSizeManHeight.onChange =
    align.onChange =
    inLetterspacing.onChange =
    inPaddingY.onChange =
    inPaddingYBot.onChange =
    inPaddingX.onChange =
    text.onChange =
    inFontSize.onChange =
    weight.onChange =
    aniso.onChange =
    font.onChange =
    drawDebug.onChange =
    cachetexture.onChange = function ()
    {
        needsRefresh = true;
        updateUi();
    };

textureOut.ignoreValueSerialize = true;

const cgl = op.patch.cgl;
let tex = new CGL.Texture(cgl);
let autoHeight = 2;
let autoWidth = 2;

const fontImage = document.createElement("canvas");
fontImage.id = "texturetext_" + CABLES.generateUUID();
fontImage.style.display = "none";
document.body.appendChild(fontImage);
fontImage.style.letterSpacing = "0px";

outEle.setRef(fontImage);

let ctx = fontImage.getContext("2d");
let needsRefresh = true;
const mesh = CGL.MESHES.getSimpleRect(cgl, "texttexture rect");
const vScale = vec3.create();
const shader = new CGL.Shader(cgl, "texttexture");
shader.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG"]);
shader.setSource(attachments.text_vert, attachments.text_frag);
const texUni = new CGL.Uniform(shader, "t", "tex");
const aspectUni = new CGL.Uniform(shader, "f", "aspect", 0);
const opacityUni = new CGL.Uniform(shader, "f", "a", inOpacity);
const uniColor = new CGL.Uniform(shader, "4f", "color", r, g, b, inOpacity);

if (op.patch.isEditorMode()) CABLES.UI.SIMPLEWIREFRAMERECT = CABLES.UI.SIMPLEWIREFRAMERECT || new CGL.WireframeRect(cgl);

render.onTriggered = doRender;
drawMesh.onChange = updateUi;
updateUi();

op.on("delete", () =>
{
    ctx = null;
    fontImage.remove();
});

aniso.onChange =
    tfilter.onChange =
    wrap.onChange = () =>
    {
        if (tex)tex.delete();
        tex = null;
        needsRefresh = true;
    };

bgR.onChange = bgG.onChange = bgB.onChange = bgA.onChange = r.onChange = g.onChange = b.onChange = inOpacity.onChange = () =>
{
    if (!drawMesh.get() || textureOut.isLinked()) needsRefresh = true;
};

textureOut.onLinkChanged = () =>
{
    if (textureOut.isLinked()) needsRefresh = true;
};

op.patch.on("fontLoaded", (fontName) =>
{
    if (fontName == font.get()) needsRefresh = true;
});

document.fonts.ready.then(() =>
{
    if (reloadOnFont.get()) needsRefresh = true;
});

document.fonts.onloadingdone = function (fontFaceSetEvent)
{
    if (reloadOnFont.get()) needsRefresh = true;
};

function getWidth()
{
    return autoWidth;
}

function getHeight()
{
    return autoHeight;
}

function doRender()
{
    let count = 0;
    while (needsRefresh && count < 10)
    {
        reSize();
        refresh();
        count++;
    }

    if (drawMesh.get())
    {
        vScale[0] = vScale[1] = vScale[2] = meshScale.get();
        cgl.pushBlendMode(CGL.BLEND_NORMAL, false);
        cgl.pushModelMatrix();
        mat4.scale(cgl.mMatrix, cgl.mMatrix, vScale);

        shader.popTextures();
        shader.pushTexture(texUni, tex.tex);
        aspectUni.set(outAspect.get());

        if (cgl.shouldDrawHelpers(op))
            CABLES.UI.SIMPLEWIREFRAMERECT.render(outAspect.get(), 1, 1);

        cgl.pushShader(shader);
        mesh.render(op.patch.cg.getShader());

        cgl.popShader();
        cgl.popBlendMode();
        cgl.popModelMatrix();
    }

    next.trigger();
}

function reSize()
{
    if (tex) tex.setSize(getWidth(), getHeight());

    ctx.canvas.width = fontImage.width = getWidth();
    ctx.canvas.height = fontImage.height = getHeight();

    outAspect.set(fontImage.width / fontImage.height);

    needsRefresh = true;
}

function autoLineBreaks(strings)
{
    let newString = "";

    for (let i = 0; i < strings.length; i++)
    {
        if (!strings[i])
        {
            newString += "\n";
            continue;
        }
        let sumWidth = 0;
        const words = strings[i].split(SPACE);

        for (let j = 0; j < words.length; j++)
        {
            if (!words[j]) continue;
            sumWidth += ctx.measureText(words[j] + SPACE).width;

            if (sumWidth > texSizeManWidth.get())
            {
                // found = true;
                newString += "\n" + words[j] + SPACE;
                sumWidth = ctx.measureText(words[j] + SPACE).width;
            }
            else
            {
                newString += words[j] + SPACE;
            }
        }
        newString += "\n";
    }
    let txt = newString;

    strings = txt.split("\n");

    if (strings[strings.length - 1] == "")strings.pop();

    return strings;
}

function refresh()
{
    cgl.checkFrameStarted("texttrexture refresh");
    const rgbStringClear = "rgba(" + Math.floor(bgR.get() * 255) + "," + Math.floor(bgG.get() * 255) + "," + Math.floor(bgB.get() * 255) + "," + bgA.get() + ")";
    ctx.fillStyle = rgbStringClear;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    const rgbString = "rgba(" + Math.floor(r.get() * 255) + ","
        + Math.floor(g.get() * 255) + "," + Math.floor(b.get() * 255) + ","
        + inOpacity.get() + ")";

    ctx.fillStyle = rgbString;
    let fontSize = parseFloat(inFontSize.get());
    let fontname = font.get();
    if (fontname.indexOf(SPACE) > -1) fontname = "\"" + fontname + "\"";
    ctx.font = weight.get() + SPACE + fontSize + "px " + fontname + "";

    ctx.textBaseline = "top";
    ctx.textAlign = align.get();
    ctx.letterSpacing = inLetterspacing.get() + "px";

    let txt = (text.get() + "").replace(/<br\/>/g, "\n");
    txt = txt.trim();
    let strings = txt.split("\n");

    needsRefresh = false;

    let paddingY = Math.max(0, inPaddingY.get());
    let paddingYBot = Math.max(0, inPaddingYBot.get());
    let paddingX = Math.max(0, inPaddingX.get());

    autoWidth = 0;
    autoHeight = 0;

    if (texSizeManBreak.get() && texSizeMeth.get() == "Manual")
    {
        if (texSizeManWidth.get() > 128)
        {
            strings = autoLineBreaks(strings);
        }
    }

    const lineHeights = [];

    for (let i = 0; i < strings.length; i++)
    {
        const measure = ctx.measureText(strings[i]);
        lineHeights[i] = Math.ceil(measure.fontBoundingBoxAscent) + Math.ceil(measure.fontBoundingBoxDescent) + inLineHeight.get();
    }

    for (let i = 0; i < strings.length; i++)
    {
        const measure = ctx.measureText(strings[i]);
        autoWidth = Math.max(autoWidth, Math.ceil(measure.width));
        autoHeight += lineHeights[i];
    }

    autoWidth += paddingX * 2;

    if (inLineHeight.get() < 0)autoHeight += (inLineHeight.get() / 2) * -1;

    let calcHeight = autoHeight;

    if (texSizeMeth.get() == "Manual")
    {
        autoWidth = texSizeManWidth.get() + paddingX * 2;

        if (!texSizeAutoHeight.get())
        {
            autoHeight = texSizeManHeight.get();
        }
    }

    autoHeight = Math.ceil(autoHeight);
    autoWidth = Math.ceil(autoWidth);

    if (autoWidth > cgl.maxTexSize || autoHeight > cgl.maxTexSize) op.setUiError("textoobig", "Texture too big!");
    else op.setUiError("textoobig", null);

    autoHeight = Math.min(cgl.maxTexSize, autoHeight);
    autoWidth = Math.min(cgl.maxTexSize, autoWidth);

    let posy = 0;
    if (valign.get() == "Middle") posy = (autoHeight - calcHeight) / 2;
    else if (valign.get() == "Bottom") posy = (autoHeight - calcHeight);

    posy += paddingY;

    autoHeight += paddingY + paddingYBot;

    if (ctx.canvas.width != autoWidth || ctx.canvas.height != autoHeight) reSize();

    const dbg = drawDebug.get();

    for (let i = 0; i < strings.length; i++)
    {
        let posx = 0 + paddingX; // left

        if (align.get() == "center") posx = ctx.canvas.width / 2;
        if (align.get() == "right") posx = ctx.canvas.width - paddingX;

        if (texSizeMeth.get() == "Manual") posx += inLetterspacing.get();

        ctx.fillText(strings[i], posx, posy);

        if (dbg)
        {
            ctx.lineWidth = 3;
            ctx.strokeStyle = "#FF0000";
            ctx.beginPath();
            ctx.moveTo(0, posy);
            ctx.lineTo(ctx.canvas.width, posy);
            ctx.stroke();
        }

        posy += lineHeights[i];
    }

    // ctx.restore();

    let cgl_wrap = CGL.Texture.WRAP_REPEAT;
    if (wrap.get() == "mirrored repeat") cgl_wrap = CGL.Texture.WRAP_MIRRORED_REPEAT;
    else if (wrap.get() == "clamp to edge") cgl_wrap = CGL.Texture.WRAP_CLAMP_TO_EDGE;

    let f = CGL.Texture.FILTER_LINEAR;
    if (tfilter.get() == "nearest") f = CGL.Texture.FILTER_NEAREST;
    else if (tfilter.get() == "mipmap") f = CGL.Texture.FILTER_MIPMAP;

    if (!cachetexture.get() || !tex || !textureOut.get() || tex.width != fontImage.width || tex.height != fontImage.height || tex.anisotropic != parseFloat(aniso.get()))
    {
        if (tex)tex.delete();
        tex = new CGL.Texture.createFromImage(cgl, fontImage, { "filter": f, "anisotropic": parseFloat(aniso.get()), "wrap": cgl_wrap });
    }

    tex.unpackAlpha = false;
    tex.flip = false;
    tex.initTexture(fontImage, f);

    outRatio.set(ctx.canvas.height / ctx.canvas.width);
    outLines.set(strings.length);

    textureOut.setRef(tex);
}

function updateUi()
{
    texSizeManWidth.setUiAttribs({ "greyout": texSizeMeth.get() != "Manual" });
    texSizeManHeight.setUiAttribs({ "greyout": texSizeMeth.get() != "Manual" || texSizeAutoHeight.get() });
    texSizeManBreak.setUiAttribs({ "greyout": texSizeMeth.get() != "Manual" });
    valign.setUiAttribs({ "greyout": texSizeMeth.get() != "Manual" });
    texSizeAutoHeight.setUiAttribs({ "greyout": texSizeMeth.get() != "Manual" });

    meshScale.setUiAttribs({ "greyout": !drawMesh.get() });
}

}
};

CABLES.OPS["2c042efa-3604-4717-b8f4-5ad08d6740e5"]={f:Ops.Gl.Textures.TextTexture_v6,objName:"Ops.Gl.Textures.TextTexture_v6"};




// **************************************************************
// 
// Ops.Array.ArrayToString_v3
// 
// **************************************************************

Ops.Array.ArrayToString_v3= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inArr=op.inArray("Array"),
    inSeperator=op.inString("Seperator",","),
    inNewLine=op.inValueBool("New Line"),
    outStr=op.outString("Result");

inArr.onChange=
    outStr.onChange=
    inSeperator.onChange=
    inNewLine.onChange=exec;


function exec()
{
    var arr=inArr.get();
    var result='';

    var sep=inSeperator.get();
    if(inNewLine.get())sep+='\n';

    if(arr && arr.join)
    {
        result=arr.join(sep);
    }

    outStr.set(result);
}
}
};

CABLES.OPS["7b539bb3-8e86-4367-9e00-a637d3cfd87a"]={f:Ops.Array.ArrayToString_v3,objName:"Ops.Array.ArrayToString_v3"};




// **************************************************************
// 
// Ops.Data.Compose.Array.CompArray
// 
// **************************************************************

Ops.Data.Compose.Array.CompArray= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    update = op.inTrigger("Update"),
    active = op.inBool("Active", true),
    clear = op.inBool("Clear", true),
    inReset = op.inTriggerButton("Reset"),
    next = op.outTrigger("Next"),
    outArr = op.outArray("Result");

inReset.onTriggered = () =>
{
    arr = [];
    outArr.setRef([]);
};

let arr = [];

update.onTriggered = () =>
{
    if (!active.get()) return next.trigger();

    op.patch.tempData.compArray = op.patch.tempData.compArray || [];

    if (clear.get())
    {
        arr = [];
    }

    op.patch.tempData.compArray.push(arr);
    next.trigger();

    outArr.setRef(op.patch.tempData.compArray.pop());
};

}
};

CABLES.OPS["16f1ce37-9e0d-4632-a9ba-dfd42c4eb254"]={f:Ops.Data.Compose.Array.CompArray,objName:"Ops.Data.Compose.Array.CompArray"};




// **************************************************************
// 
// Ops.Data.Compose.Array.CompArrayPushNumber
// 
// **************************************************************

Ops.Data.Compose.Array.CompArrayPushNumber= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    update = op.inTrigger("Update"),
    inNum1 = op.inFloat("Number", 0),
    next = op.outTrigger("Next");

update.onTriggered = () =>
{
    if (op.patch.tempData.compArray && op.patch.tempData.compArray.length > 0)
    {
        let arr = op.patch.tempData.compArray[op.patch.tempData.compArray.length - 1];
        if (arr) arr.push(inNum1.get());
    }
    next.trigger();
};

}
};

CABLES.OPS["49741334-d249-4f62-96ea-3ff582f38598"]={f:Ops.Data.Compose.Array.CompArrayPushNumber,objName:"Ops.Data.Compose.Array.CompArrayPushNumber"};




// **************************************************************
// 
// Ops.Ui.SubPatchInput
// 
// **************************************************************

Ops.Ui.SubPatchInput= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
op.innerInput = true;

const goto = op.inTriggerButton("Goto SubPatchOp");
goto.setUiAttribs({ "hidePort": true });
goto.onTriggered = () =>
{
    const parent = op.patch.getSubPatchOuterOp(op.uiAttribs.subPatch);
    gui.patchView.centerSelectOp(parent.id);
};

}
};

CABLES.OPS["c4e4e933-136e-479e-8de8-0b35b75d9217"]={f:Ops.Ui.SubPatchInput,objName:"Ops.Ui.SubPatchInput"};




// **************************************************************
// 
// Ops.Ui.SubPatchOutput
// 
// **************************************************************

Ops.Ui.SubPatchOutput= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
op.innerOutput = true;

}
};

CABLES.OPS["02d45073-7936-4830-81ad-59a162febf1f"]={f:Ops.Ui.SubPatchOutput,objName:"Ops.Ui.SubPatchOutput"};




// **************************************************************
// 
// Ops.Patch.PK3cVbR.TextUVCoordinates2
// 
// **************************************************************

Ops.Patch.PK3cVbR.TextUVCoordinates2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    exec = op.inTrigger("Execute"),
    ratiosIn = op.inArray("Text Ratios"),
    uvCoord = op.outArray("UV Coordinates");

exec.onTriggered = () =>
{
    try
    {
        const ratios = ratiosIn.get();
        const n = ratios.length;
        const maxRatio = ratios.reduce((prev, e) => { return Math.max(prev, e); });

        const uv = [];
        {
            for (let i = 0; i < n; i++)
            {
                // format : [ U, V, U scale, V scale ]
                uv.push(0, (n - i - 1) / n, ratios[i] / maxRatio, 1 / n);
            }
            uvCoord.set(uv);
        }
    }
    catch (e)
    {
        uvCoord.set([]);
    }
};

}
};

CABLES.OPS["7b8f26db-748a-49e1-ad65-218b881d80b2"]={f:Ops.Patch.PK3cVbR.TextUVCoordinates2,objName:"Ops.Patch.PK3cVbR.TextUVCoordinates2"};




// **************************************************************
// 
// Ops.String.StringLength_v2
// 
// **************************************************************

Ops.String.StringLength_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inStr = op.inString("String"),
    result = op.outNumber("Result");

inStr.onChange = function ()
{
    if (!inStr.get()) result.set(0);
    else result.set(String(inStr.get()).length);
};

}
};

CABLES.OPS["aa47bb8b-d5d7-4175-b217-ab0157d3365d"]={f:Ops.String.StringLength_v2,objName:"Ops.String.StringLength_v2"};




// **************************************************************
// 
// Ops.Patch.PK3cVbR.ComputeWordCenterPosition
// 
// **************************************************************

Ops.Patch.PK3cVbR.ComputeWordCenterPosition= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
// welcome to your new op!
// have a look at the documentation:
// https://cables.gl/docs/5_writing_ops/dev_ops/dev_ops

const
    textPosIn = op.inArray("Text Original Positions"),
    stringLengthsIn = op.inArray("String Lengths"),
    centeredPosOut = op.outArray("Centered Positions"),
    firstLetterPosOut = op.outArray("First Letter Positions");

textPosIn.onChange = () =>
{
    try
    {
        const textPos = textPosIn.get();
        const stringLengths = stringLengthsIn.get();
        const nWords = stringLengths.length;
        const centeredPos = [];
        const firstLetterPos = [];
        let wordStartIdx = 0;
        for (let i = 0; i < nWords; i++)
        {
            const wordLength = stringLengths[i];
            const firstLetterPosX = textPos[wordStartIdx];
            const firstLetterPosY = textPos[wordStartIdx+1];
            const firstLetterPosZ = textPos[wordStartIdx+2];
            let avgX = 0;
            let avgY = 0;
            let avgZ = 0;

            for (let j = 0; j < wordLength; j++) {
                avgX += textPos[wordStartIdx + j * 3];
                avgY += textPos[wordStartIdx + j * 3 + 1];
                avgZ += textPos[wordStartIdx + j * 3 + 2];
            }

            avgX = avgX / wordLength;
            avgY = avgY / wordLength;
            avgZ = avgZ / wordLength;
            centeredPos.push(avgX);
            centeredPos.push(avgY);
            centeredPos.push(avgZ);
            firstLetterPos.push(firstLetterPosX);
            firstLetterPos.push(firstLetterPosY);
            firstLetterPos.push(firstLetterPosZ);

            wordStartIdx += wordLength * 3;
        }
        centeredPosOut.set(centeredPos);
        firstLetterPosOut.set(firstLetterPos);
    }
    catch (e)
    {
        centeredPosOut.set(null);
        firstLetterPosOut.set(null);
    }
};

stringLengthsIn.onChange = textPosIn.onChange;

}
};

CABLES.OPS["e685226b-6189-4f57-86ab-208b77f71c4e"]={f:Ops.Patch.PK3cVbR.ComputeWordCenterPosition,objName:"Ops.Patch.PK3cVbR.ComputeWordCenterPosition"};




// **************************************************************
// 
// Ops.Array.StringToArray_v2
// 
// **************************************************************

Ops.Array.StringToArray_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const text = op.inStringEditor("text", "1,2,3"),
    separator = op.inString("separator", ","),
    toNumber = op.inValueBool("Numbers", true),
    trim = op.inValueBool("Trim", true),
    splitNewLines = op.inBool("Split Lines", false),
    arr = op.outArray("array"),
    parsed = op.outTrigger("Parsed"),
    len = op.outNumber("length");

text.setUiAttribs({ "ignoreBigPort": true });

text.onChange = separator.onChange = toNumber.onChange = trim.onChange = parse;

splitNewLines.onChange = () =>
{
    separator.setUiAttribs({ "greyout": splitNewLines.get() });
    parse();
};

parse();

function parse()
{
    if (!text.get())
    {
        arr.set(null);
        arr.set([]);
        len.set(0);
        return;
    }

    let textInput = text.get();
    if (trim.get() && textInput)
    {
        textInput = textInput.replace(/^\s+|\s+$/g, "");
        textInput = textInput.trim();
    }

    let r;
    let sep = separator.get();
    if (separator.get() === "\\n") sep = "\n";
    if (splitNewLines.get()) r = textInput.split("\n");
    else r = textInput.split(sep);

    if (r[r.length - 1] === "") r.length -= 1;

    len.set(r.length);

    if (trim.get())
    {
        for (let i = 0; i < r.length; i++)
        {
            r[i] = r[i].replace(/^\s+|\s+$/g, "");
            r[i] = r[i].trim();
        }
    }

    op.setUiError("notnum", null);
    if (toNumber.get())
    {
        let hasStrings = false;
        for (let i = 0; i < r.length; i++)
        {
            r[i] = Number(r[i]);
            if (!CABLES.isNumeric(r[i]))
            {
                hasStrings = true;
            }
        }
        if (hasStrings)
        {
            op.setUiError("notnum", "Parse Error / Not all values numerical!", 1);
        }
    }

    arr.setRef(r);
    parsed.trigger();
}

}
};

CABLES.OPS["c974de41-4ce4-4432-b94d-724741109c71"]={f:Ops.Array.StringToArray_v2,objName:"Ops.Array.StringToArray_v2"};




// **************************************************************
// 
// Ops.Gl.TextureArrayLoaderFromArray_v2
// 
// **************************************************************

Ops.Gl.TextureArrayLoaderFromArray_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    filenames = op.inArray("urls"),
    tfilter = op.inDropDown("filter", ["nearest", "linear", "mipmap"], "linear"),
    wrap = op.inDropDown("wrap", ["repeat", "mirrored repeat", "clamp to edge"], "repeat"),
    flip = op.inBool("Flip", false),
    unpackAlpha = op.inBool("unpackPreMultipliedAlpha", false),
    inCaching = op.inBool("Caching", false),
    inPatchAsset = op.inBool("Asset in patch", false),
    arrOut = op.outArray("TextureArray"),
    width = op.outNumber("width"),
    height = op.outNumber("height"),
    loading = op.outBoolNum("loading"),
    ratio = op.outNumber("Aspect Ratio");

op.toWorkPortsNeedToBeLinked(filenames);

const cgl = op.patch.cgl;
const arr = [];
let cgl_filter = CGL.Texture.FILTER_LINEAR;
let cgl_wrap = CGL.Texture.WRAP_MIRRORED_REPEAT;
let loadingId = null;
let timedLoader = 0;
arrOut.set(arr);

inPatchAsset.onChange =
    flip.onChange =
    unpackAlpha.onChange =
    filenames.onChange = reload;

tfilter.onChange = onFilterChange;
wrap.onChange = onWrapChange;

function reload(nocache)
{
    if (!filenames.isLinked())
    {
        arrOut.setRef(null);
        return;
    }
    clearTimeout(timedLoader);
    timedLoader = setTimeout(function ()
    {
        realReload(nocache);
    }, 30);
}

function loadImage(_i, _url, nocache, cb)
{
    let url = _url;
    const i = _i;
    if (!url) return;

    if (inPatchAsset.get())
    {
        let patchId = null;
        if (op.storage && op.storage.blueprint && op.storage.blueprint.patchId)
        {
            patchId = op.storage.blueprint.patchId;
        }
        url = op.patch.getAssetPath(patchId) + url;
    }

    url = op.patch.getFilePath(url);

    if (!inCaching.get()) if (nocache)url += "?rnd=" + CABLES.generateUUID();

    let tex = CGL.Texture.load(cgl, url,
        function (err)
        {
            if (err)
            {
                const errMsg = "could not load texture \"" + url + "\"";
                op.uiAttr({ "error": errMsg });
                op.warn("[TextureArrayLoader] " + errMsg);
                if (cb)cb();
                return;
            }
            else op.uiAttr({ "error": null });

            width.set(tex.width);
            height.set(tex.height);
            ratio.set(tex.width / tex.height);

            arr[i] = tex;

            arrOut.setRef(arr);
            if (cb)cb();
        }, {
            "wrap": cgl_wrap,
            "flip": flip.get(),
            "unpackAlpha": unpackAlpha.get(),
            "filter": cgl_filter
        });
}

function realReload(nocache)
{
    const files = filenames.get();

    if (!files || files.length == 0) return;

    if (loadingId)cgl.patch.loading.finished(loadingId);

    loadingId = cgl.patch.loading.start("texturearray", CABLES.uuid(), op);
    loading.set(true);

    for (let i = 0; i < files.length; i++)
    {
        arr[i] = CGL.Texture.getEmptyTexture(cgl);
        let cb = null;
        if (i == files.length - 1)
        {
            cb = () =>
            {
                loading.set(false);
                cgl.patch.loading.finished(loadingId);
            };
        }

        if (!files[i]) { if (cb) cb(); }
        else loadImage(i, files[i], nocache, cb);
    }
}

function onFilterChange()
{
    if (tfilter.get() == "nearest") cgl_filter = CGL.Texture.FILTER_NEAREST;
    if (tfilter.get() == "linear") cgl_filter = CGL.Texture.FILTER_LINEAR;
    if (tfilter.get() == "mipmap") cgl_filter = CGL.Texture.FILTER_MIPMAP;

    reload();
}

function onWrapChange()
{
    if (wrap.get() == "repeat") cgl_wrap = CGL.Texture.WRAP_REPEAT;
    if (wrap.get() == "mirrored repeat") cgl_wrap = CGL.Texture.WRAP_MIRRORED_REPEAT;
    if (wrap.get() == "clamp to edge") cgl_wrap = CGL.Texture.WRAP_CLAMP_TO_EDGE;

    reload();
}

op.onFileChanged = function (fn)
{
    // should reload changed files that are used in the array
};

}
};

CABLES.OPS["f994015c-72ab-42f4-9ef7-a6409a9efb9b"]={f:Ops.Gl.TextureArrayLoaderFromArray_v2,objName:"Ops.Gl.TextureArrayLoaderFromArray_v2"};




// **************************************************************
// 
// Ops.String.StringReplace
// 
// **************************************************************

Ops.String.StringReplace= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inStr = op.inString("String"),
    inSearch = op.inString("Search For", "foo"),
    inRepl = op.inString("Replace", "bar"),
    inWhat = op.inSwitch("Replace What", ["All", "First"], "All"),
    outStr = op.outString("Result");

inRepl.onChange =
inStr.onChange =
inWhat.onChange =
inSearch.onChange = update;

function update()
{
    op.setUiError("exception", null);

    let str = "";
    try
    {
        if (inWhat.get() == "All") str = String(inStr.get()).replace(new RegExp(inSearch.get(), "g"), inRepl.get());
        else str = String(inStr.get()).replace(inSearch.get(), inRepl.get());
    }
    catch (e)
    {
        op.setUiError("exception", "exception " + e.message);
    }

    outStr.set(str);
}

}
};

CABLES.OPS["4a053e7a-6b00-4e71-bd51-90cdb190994c"]={f:Ops.String.StringReplace,objName:"Ops.String.StringReplace"};




// **************************************************************
// 
// Ops.String.StringTrim_v2
// 
// **************************************************************

Ops.String.StringTrim_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inStr=op.inString("String"),
    outStr=op.outString("Result",'');

inStr.onChange=function()
{
    if(!inStr.get())outStr.set('');
        else outStr.set(inStr.get().trim());
};

}
};

CABLES.OPS["a9aed302-328a-4d33-bd3f-27e3e6690b9e"]={f:Ops.String.StringTrim_v2,objName:"Ops.String.StringTrim_v2"};




// **************************************************************
// 
// Ops.Gl.MainLoop_v2
// 
// **************************************************************

Ops.Gl.MainLoop_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    hdpi = op.inFloat("Max Pixel Density (DPR)", 2),
    fpsLimit = op.inValue("FPS Limit", 0),
    reduceFocusFPS = op.inValueBool("Reduce FPS unfocussed", false),
    clear = op.inValueBool("Transparent", false),
    active = op.inValueBool("Active", 1),
    inFocus = op.inValueBool("Focus canvas", 1),
    trigger = op.outTrigger("trigger"),
    width = op.outNumber("width"),
    height = op.outNumber("height"),
    outPixel = op.outNumber("Pixel Density");

op.onAnimFrame = render;
hdpi.onChange = updateHdpi;

const cgl = op.patch.cg = op.patch.cgl;
let rframes = 0;
let rframeStart = 0;
let timeOutTest = null;
let addedListener = false;
if (!op.patch.cgl) op.uiAttr({ "error": "No webgl cgl context" });

const identTranslate = vec3.create();
vec3.set(identTranslate, 0, 0, 0);
const identTranslateView = vec3.create();
vec3.set(identTranslateView, 0, 0, -2);

let firstTime = true;
let fsElement = null;
let winhasFocus = true;
let winVisible = true;

window.addEventListener("blur", () => { winhasFocus = false; });
window.addEventListener("focus", () => { winhasFocus = true; });
document.addEventListener("visibilitychange", () => { winVisible = !document.hidden; });

testMultiMainloop();

// op.patch.cgl.cgCanvas.forceAspect = 1.7777777;
op.patch.tempData.mainloopOp = this;

function updateHdpi()
{
    setPixelDensity();

    if (CABLES.UI)
    {
        if (hdpi.get() < 1)
            op.patch.cgl.canvas.style.imageRendering = "pixelated";
    }

    op.patch.cgl.updateSize();
    if (CABLES.UI) gui.setLayout();
}

active.onChange = function ()
{
    op.patch.removeOnAnimFrame(op);

    if (active.get())
    {
        op.setUiAttrib({ "extendTitle": "" });
        op.onAnimFrame = render;
        op.patch.addOnAnimFrame(op);
        op.log("adding again!");
    }
    else
    {
        op.setUiAttrib({ "extendTitle": "Inactive" });
    }
};

function getFpsLimit()
{
    if (reduceFocusFPS.get())
    {
        if (!winVisible) return 10;
        if (!winhasFocus) return 30;
    }

    return fpsLimit.get();
}

op.onDelete = function ()
{
    cgl.gl.clearColor(0, 0, 0.0, 0);
    cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT | cgl.gl.DEPTH_BUFFER_BIT);
};

function setPixelDensity()
{
    if (hdpi.get() != 0) op.patch.cgl.pixelDensity = Math.min(hdpi.get(), window.devicePixelRatio);
    else op.patch.cgl.pixelDensity = window.devicePixelRatio;
}

function render(time)
{
    if (!active.get()) return;
    if (cgl.aborted || cgl.canvas.clientWidth === 0 || cgl.canvas.clientHeight === 0) return;

    op.patch.cg = cgl;

    setPixelDensity();

    // if (hdpi.get())op.patch.cgl.pixelDensity = window.devicePixelRatio;

    const startTime = performance.now();

    op.patch.config.fpsLimit = getFpsLimit();

    if (cgl.canvasWidth == -1)
    {
        cgl.setCanvas(op.patch.config.glCanvasId);
        return;
    }

    if (cgl.canvasWidth != width.get() || cgl.canvasHeight != height.get())
    {
        width.set(cgl.canvasWidth / 1);
        height.set(cgl.canvasHeight / 1);
    }

    if (CABLES.now() - rframeStart > 1000)
    {
        CGL.fpsReport = CGL.fpsReport || [];
        if (op.patch.loading.getProgress() >= 1.0 && rframeStart !== 0)CGL.fpsReport.push(rframes);
        rframes = 0;
        rframeStart = CABLES.now();
    }
    CGL.MESH.lastShader = null;
    CGL.MESH.lastMesh = null;

    cgl.renderStart(cgl, identTranslate, identTranslateView);

    if (!clear.get()) cgl.gl.clearColor(0, 0, 0, 1);
    else cgl.gl.clearColor(0, 0, 0, 0);

    cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT | cgl.gl.DEPTH_BUFFER_BIT);

    trigger.trigger();

    if (CGL.MESH.lastMesh)CGL.MESH.lastMesh.unBind();

    if (CGL.Texture.previewTexture)
    {
        if (!CGL.Texture.texturePreviewer) CGL.Texture.texturePreviewer = new CGL.Texture.texturePreview(cgl);
        CGL.Texture.texturePreviewer.render(CGL.Texture.previewTexture);
    }
    cgl.renderEnd(cgl);

    op.patch.cg = null;

    if (!clear.get())
    {
        cgl.gl.clearColor(1, 1, 1, 1);
        cgl.gl.colorMask(false, false, false, true);
        cgl.gl.clear(cgl.gl.COLOR_BUFFER_BIT);
        cgl.gl.colorMask(true, true, true, true);
    }

    if (!cgl.tempData.phong)cgl.tempData.phong = {};
    rframes++;
    if (firstTime)
    {
        if (inFocus.get()) cgl.canvas.focus();
        firstTime = false;
    }

    outPixel.set(op.patch.cgl.pixelDensity);
    op.patch.cgl.profileData.profileMainloopMs = performance.now() - startTime;
}

function testMultiMainloop()
{
    clearTimeout(timeOutTest);
    timeOutTest = setTimeout(
        () =>
        {
            if (op.patch.getOpsByObjName(op.name).length > 1)
            {
                op.setUiError("multimainloop", "there should only be one mainloop op!");
                if (!addedListener)addedListener = op.patch.addEventListener("onOpDelete", testMultiMainloop);
            }
            else op.setUiError("multimainloop", null, 1);
        }, 500);
}

}
};

CABLES.OPS["f1029550-d877-42da-9b1e-63a5163a0350"]={f:Ops.Gl.MainLoop_v2,objName:"Ops.Gl.MainLoop_v2"};




// **************************************************************
// 
// Ops.Vars.VarSetArray_v2
// 
// **************************************************************

Ops.Vars.VarSetArray_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const val = op.inArray("Value", null);
op.varName = op.inDropDown("Variable", [], "", true);

new CABLES.VarSetOpWrapper(op, "array", val, op.varName);

}
};

CABLES.OPS["8088290f-45d4-4312-b4ca-184d34ca4667"]={f:Ops.Vars.VarSetArray_v2,objName:"Ops.Vars.VarSetArray_v2"};




// **************************************************************
// 
// Ops.Vars.VarGetArray_v2
// 
// **************************************************************

Ops.Vars.VarGetArray_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const val = op.outArray("Value");
op.varName = op.inValueSelect("Variable", [], "", true);

new CABLES.VarGetOpWrapper(op, "array", op.varName, val);

}
};

CABLES.OPS["afa79294-aa9c-43bc-a49a-cade000a1de5"]={f:Ops.Vars.VarGetArray_v2,objName:"Ops.Vars.VarGetArray_v2"};




// **************************************************************
// 
// Ops.Math.GaussianRandomArray
// 
// **************************************************************

Ops.Math.GaussianRandomArray= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inNum = op.inValueInt("Num", 100),
    outArr = op.outArray("Array"),
    inDev = op.inValue("Deviation", 1),
    seed = op.inValueFloat("Random Seed");

let arr = [];
let stdDev = 1;
let previous = false;
let nextGaussian = null;
let y2;

seed.onChange = inDev.onChange = inNum.onChange = update;
update();

// from https://github.com/processing/p5.js/blob/master/src/math/random.js

function randomGaussian(mean, sd)
{
    let y1, x1, x2, w;
    if (previous)
    {
        y1 = y2;
        previous = false;
    }
    else
    {
        do
        {
            x1 = Math.seededRandom() * 2 - 1;
            x2 = Math.seededRandom() * 2 - 1;
            w = x1 * x1 + x2 * x2;
        } while (w >= 1);
        w = Math.sqrt((-2 * Math.log(w)) / w);
        y1 = x1 * w;
        y2 = x2 * w;
        previous = true;
    }

    let m = mean || 0;
    let s = sd || 1;
    return y1 * s + m;
}

function update()
{
    stdDev = inDev.get();
    Math.randomSeed = seed.get();

    arr.length = Math.floor(inNum.get()) || 0;
    for (let i = 0; i < arr.length; i++)
    {
        arr[i] = randomGaussian(0, stdDev);
    }

    outArr.set(null);
    outArr.set(arr);
}

}
};

CABLES.OPS["1a8c3535-6fce-4cba-8601-ddb7a5dd7656"]={f:Ops.Math.GaussianRandomArray,objName:"Ops.Math.GaussianRandomArray"};




// **************************************************************
// 
// Ops.Vars.VarGetNumber_v2
// 
// **************************************************************

Ops.Vars.VarGetNumber_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const val = op.outNumber("Value");
op.varName = op.inValueSelect("Variable", [], "", true);

new CABLES.VarGetOpWrapper(op, "number", op.varName, val);

}
};

CABLES.OPS["421f5b52-c0fa-47c4-8b7a-012b9e1c864a"]={f:Ops.Vars.VarGetNumber_v2,objName:"Ops.Vars.VarGetNumber_v2"};




// **************************************************************
// 
// Ops.Math.Math
// 
// **************************************************************

Ops.Math.Math= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const num0 = op.inFloat("number 0", 0),
    num1 = op.inFloat("number 1", 0),
    mathDropDown = op.inSwitch("math mode", ["+", "-", "*", "/", "%", "min", "max"], "+"),
    result = op.outNumber("result");

let mathFunc;

num0.onChange = num1.onChange = update;
mathDropDown.onChange = onFilterChange;

let n0 = 0;
let n1 = 0;

const mathFuncAdd = function (a, b) { return a + b; };
const mathFuncSub = function (a, b) { return a - b; };
const mathFuncMul = function (a, b) { return a * b; };
const mathFuncDiv = function (a, b) { return a / b; };
const mathFuncMod = function (a, b) { return a % b; };
const mathFuncMin = function (a, b) { return Math.min(a, b); };
const mathFuncMax = function (a, b) { return Math.max(a, b); };

function onFilterChange()
{
    let mathSelectValue = mathDropDown.get();

    if (mathSelectValue == "+") mathFunc = mathFuncAdd;
    else if (mathSelectValue == "-") mathFunc = mathFuncSub;
    else if (mathSelectValue == "*") mathFunc = mathFuncMul;
    else if (mathSelectValue == "/") mathFunc = mathFuncDiv;
    else if (mathSelectValue == "%") mathFunc = mathFuncMod;
    else if (mathSelectValue == "min") mathFunc = mathFuncMin;
    else if (mathSelectValue == "max") mathFunc = mathFuncMax;
    update();
    op.setUiAttrib({ "extendTitle": mathSelectValue });
}

function update()
{
    n0 = num0.get();
    n1 = num1.get();

    result.set(mathFunc(n0, n1));
}

onFilterChange();

}
};

CABLES.OPS["e9fdcaca-a007-4563-8a4d-e94e08506e0f"]={f:Ops.Math.Math,objName:"Ops.Math.Math"};




// **************************************************************
// 
// Ops.Gl.MeshInstancer_v4
// 
// **************************************************************

Ops.Gl.MeshInstancer_v4= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={"billboard_vert":"\r\n#ifdef BILLBOARDING\r\n\r\n    modelViewMatrix[0][0] = 1.0;\r\n    modelViewMatrix[0][1] = 0.0;\r\n    modelViewMatrix[0][2] = 0.0;\r\n\r\n    #ifndef BILLBOARDING_CYLINDRIC\r\n        modelViewMatrix[1][0] = 0.0;\r\n        modelViewMatrix[1][1] = 1.0;\r\n        modelViewMatrix[1][2] = 0.0;\r\n    #endif\r\n\r\n    modelViewMatrix[2][0] = 0.0;\r\n    modelViewMatrix[2][1] = 0.0;\r\n    modelViewMatrix[2][2] = 1.0;\r\n\r\n#endif","instancer_body_frag":"#define INSTANCING\r\n#ifdef COLORIZE_INSTANCES\r\n    #ifdef BLEND_MODE_MULTIPLY\r\n        col.rgb *= frag_instColor.rgb;\r\n        col.a *= frag_instColor.a;\r\n    #endif\r\n\r\n    #ifdef BLEND_MODE_ADD\r\n        col.rgb += frag_instColor.rgb;\r\n        col.a += frag_instColor.a;\r\n    #endif\r\n\r\n    #ifdef BLEND_MODE_NONE\r\n        col.rgb = frag_instColor.rgb;\r\n        col.a = frag_instColor.a;\r\n    #endif\r\n#endif\r\n","instancer_body_vert":"\r\n\r\n#ifdef HAS_TEXCOORDS\r\ntexCoord=(texCoord*instTexCoords.zw)+instTexCoords.xy;\r\n#endif\r\n\r\nmMatrix*=instMat;\r\npos.xyz*=MOD_scale;\r\n\r\n#ifdef HAS_COLORS\r\nfrag_instColor=instColor;\r\n#endif\r\n#ifndef HAS_COLORS\r\nfrag_instColor=vec4(1.0);\r\n#endif\r\n\r\n\r\nfrag_instIndex=instanceIndex;\r\n\r\n","instancer_head_frag":"IN vec4 frag_instColor;\r\n\r\n#ifdef WEBGL2\r\n    flat IN float frag_instIndex;\r\n#endif\r\n#ifdef WEBGL1\r\n    IN float frag_instIndex;\r\n#endif\r\n","instancer_head_vert":"\r\nIN vec4 instColor;\r\nIN mat4 instMat;\r\nIN vec4 instTexCoords;\r\nIN float instanceIndex;\r\nOUT mat4 instModelMat;\r\nOUT vec4 frag_instColor;\r\n\r\n#ifdef WEBGL2\r\n    flat OUT float frag_instIndex;\r\n#endif\r\n#ifdef WEBGL1\r\n    OUT float frag_instIndex;\r\n#endif\r\n\r\n\r\n\r\n#define INSTANCING\r\n\r\n",};
const
    exe = op.inTrigger("exe"),
    geom = op.inObject("geom", null, "geometry"),
    inScale = op.inValue("Scale", 1),
    doLimit = op.inValueBool("Limit Instances", false),
    inLimit = op.inValueInt("Limit", 100),
    inTranslates = op.inArray("positions", 3),
    inScales = op.inArray("Scale Array", 3),
    inRot = op.inArray("Rotations", 3),
    inRotMeth = op.inSwitch("Rotation Type", ["Euler", "Quaternions", "Normals"], "Euler"),

    inBillboarding = op.inSwitch("Billboarding", ["Off", "Spherical", "Cylindrical"], "Off"),

    inBlendMode = op.inSwitch("Material blend mode", ["Multiply", "Add", "Normal"], "Multiply"),
    inColor = op.inArray("Colors", 4),
    inTexCoords = op.inArray("TexCoords", 4),
    outTrigger = op.outTrigger("Trigger Out"),
    outNum = op.outNumber("Num");

op.setPortGroup("Limit Number of Instances", [inLimit, doLimit]);
op.setPortGroup("Parameters", [inScales, inRot, inTranslates, inRotMeth]);
op.toWorkPortsNeedToBeLinked(geom);
op.toWorkPortsNeedToBeLinked(exe);

geom.ignoreValueSerialize = true;

const cgl = op.patch.cgl;
const m = mat4.create();
let
    matrixArray = new Float32Array(1),
    instColorArray = new Float32Array(1),
    instTexcoordArray = new Float32Array(1),
    mesh = null,
    recalc = true,
    num = 0,
    arrayChangedColor = true,
    arrayChangedTexcoords = true,
    arrayChangedTrans = true;

const mod = new CGL.ShaderModifier(cgl, op.name, { "opId": op.id });
mod.addModule({
    "name": "MODULE_VERTEX_POSITION",
    "title": op.name,
    "priority": -2,
    "srcHeadVert": attachments.instancer_head_vert,
    "srcBodyVert": attachments.instancer_body_vert
});

mod.addModule({
    "name": "MODULE_VERTEX_MODELVIEW",
    "title": op.name + "_billboard",
    "srcBodyVert": attachments.billboard_vert
});

mod.addModule({
    "name": "MODULE_COLOR",
    "priority": -2,
    "title": op.name,
    "srcHeadFrag": attachments.instancer_head_frag,
    "srcBodyFrag": attachments.instancer_body_frag,
});

mod.addUniformVert("f", "MOD_scale", inScale);

let needsUpdateDefines = true;

inBlendMode.onChange = () => { needsUpdateDefines = true; };

doLimit.onChange = updateLimit;
exe.onTriggered = doRender;
exe.onLinkChanged = function ()
{
    if (!exe.isLinked()) removeModule();
};

updateLimit();

inRot.onChange =
inScales.onChange =
inTranslates.onChange =
inRotMeth.onChange =
    function ()
    {
        arrayChangedTrans = true;
        recalc = true;
    };

inBillboarding.onChange =
inTexCoords.onChange = function ()
{
    arrayChangedTexcoords = true;
    recalc = true;
    needsUpdateDefines = true;
};

inColor.onChange = function ()
{
    arrayChangedColor = true;
    recalc = true;
    needsUpdateDefines = true;
};

function reset()
{
    arrayChangedColor = true,
    arrayChangedTrans = true;
    recalc = true;
}

function updateDefines()
{
    mod.toggleDefine("BILLBOARDING", inBillboarding.get() != "Off");
    mod.toggleDefine("BILLBOARDING_CYLINDRIC", inBillboarding.get() == "Cylindrical");

    mod.toggleDefine("COLORIZE_INSTANCES", inColor.get());
    mod.toggleDefine("TEXCOORDS_INSTANCES", inTexCoords.get());
    mod.toggleDefine("BLEND_MODE_MULTIPLY", inBlendMode.get() === "Multiply");
    mod.toggleDefine("BLEND_MODE_ADD", inBlendMode.get() === "Add");
    mod.toggleDefine("BLEND_MODE_NONE", inBlendMode.get() === "Normal");
    needsUpdateDefines = false;
}

geom.onChange = function ()
{
    if (mesh)mesh.dispose();
    if (!geom.get())
    {
        mesh = null;
        return;
    }

    mesh = new CGL.Mesh(cgl, geom.get());
    reset();
};

function removeModule()
{

}

function setupArray()
{
    if (!mesh) return;

    let transforms = inTranslates.get();
    if (!transforms) transforms = [0, 0, 0];

    num = Math.floor(transforms.length / 3);

    if (needsUpdateDefines)updateDefines();

    const colArr = inColor.get();
    const tcArr = inTexCoords.get();
    const scales = inScales.get();
    const useQuats = inRotMeth.get() == "Quaternions";
    const useEuler = inRotMeth.get() == "Euler";
    const useNormals = inRotMeth.get() == "Normals";

    let stride = 3;
    if (useQuats)stride = 4;
    inRot.setUiAttribs({ "stride": stride });

    if (scales && scales.length != transforms.length) op.setUiError("lengthScales", "Scales array has wrong length");
    else op.setUiError("lengthScales", null);

    if (matrixArray.length != num * 16) matrixArray = new Float32Array(num * 16);
    if (instColorArray.length != num * 4)
    {
        arrayChangedColor = true;
        instColorArray = new Float32Array(num * 4);
    }
    if (instTexcoordArray.length != num * 4)
    {
        arrayChangedTexcoords = true;
        instTexcoordArray = new Float32Array(num * 4);
    }

    const rotArr = inRot.get();

    for (let i = 0; i < num; i++)
    {
        mat4.identity(m);

        mat4.translate(m, m, [
            transforms[i * 3],
            transforms[i * 3 + 1],
            transforms[i * 3 + 2]
        ]);

        if (rotArr)
        {
            if (useQuats)
            {
                const mq = mat4.create();
                const q = [rotArr[i * 4 + 0], rotArr[i * 4 + 1], rotArr[i * 4 + 2], rotArr[i * 4 + 3]];
                quat.normalize(q, q);
                mat4.fromQuat(mq, q);
                mat4.mul(m, m, mq);
            }
            else
            if (useNormals)
            {
                const n = [rotArr[i * 3 + 0], rotArr[i * 3 + 1], rotArr[i * 3 + 2]];
                const up = [1, 0, 0];
                const v = vec3.create();

                vec3.cross(v, up, n);
                vec3.normalize(v, v);

                const angle = Math.acos(vec3.dot(up, n));
                const q = quat.create();

                quat.setAxisAngle(q, v, angle);
                quat.normalize(q, q);

                const mq = mat4.create();

                mat4.fromQuat(mq, q);
                mat4.mul(m, m, mq);
            }
            if (useEuler)
            {
                mat4.rotateX(m, m, rotArr[i * 3 + 0] * CGL.DEG2RAD);
                mat4.rotateY(m, m, rotArr[i * 3 + 1] * CGL.DEG2RAD);
                mat4.rotateZ(m, m, rotArr[i * 3 + 2] * CGL.DEG2RAD);
            }
        }

        if (arrayChangedColor && colArr)
        {
            instColorArray[i * 4 + 0] = colArr[i * 4 + 0];
            instColorArray[i * 4 + 1] = colArr[i * 4 + 1];
            instColorArray[i * 4 + 2] = colArr[i * 4 + 2];
            instColorArray[i * 4 + 3] = colArr[i * 4 + 3];
        }

        if (arrayChangedTexcoords && tcArr)
        {
            instTexcoordArray[i * 4 + 0] = tcArr[i * 4 + 0];
            instTexcoordArray[i * 4 + 1] = tcArr[i * 4 + 1];
            instTexcoordArray[i * 4 + 2] = tcArr[i * 4 + 2];
            instTexcoordArray[i * 4 + 3] = tcArr[i * 4 + 3];
        }

        if (scales && scales.length > i) mat4.scale(m, m, [scales[i * 3], scales[i * 3 + 1], scales[i * 3 + 2]]);
        else mat4.scale(m, m, [1, 1, 1]);

        for (let a = 0; a < 16; a++) matrixArray[i * 16 + a] = m[a];
    }

    // mesh.numInstances = num;
    mesh.setNumInstances(num);

    if (arrayChangedTrans) mesh.addAttribute("instMat", matrixArray, 16);
    if (arrayChangedColor) mesh.addAttribute("instColor", instColorArray, 4, { "instanced": true });
    if (arrayChangedTexcoords) mesh.addAttribute("instTexCoords", instTexcoordArray, 4, { "instanced": true });

    mod.toggleDefine("HAS_TEXCOORDS", tcArr);
    mod.toggleDefine("HAS_COLORS", colArr);

    arrayChangedColor = false;
    recalc = false;
}

function updateLimit()
{
    inLimit.setUiAttribs({ "greyout": !doLimit.get() });
}

function doRender()
{
    if (!mesh) return;
    if (recalc) setupArray();
    op.checkGraphicsApi();

    mod.bind();

    if (doLimit.get()) mesh.setNumInstances(Math.min(num, inLimit.get()));
    else mesh.setNumInstances(num);

    outNum.set(mesh.numInstances);

    if (mesh.numInstances > 0) mesh.render(cgl.getShader());

    outTrigger.trigger();

    mod.unbind();
}

}
};

CABLES.OPS["cb58f461-a0bd-4159-a3cb-5e396198b4e9"]={f:Ops.Gl.MeshInstancer_v4,objName:"Ops.Gl.MeshInstancer_v4"};




// **************************************************************
// 
// Ops.Graphics.Meshes.Cube_v2
// 
// **************************************************************

Ops.Graphics.Meshes.Cube_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("Render"),
    active = op.inValueBool("Render Mesh", true),
    width = op.inValue("Width", 1),
    len = op.inValue("Length", 1),
    height = op.inValue("Height", 1),
    center = op.inValueBool("Center", true),
    mapping = op.inSwitch("Mapping", ["Side", "Cube +-", "SideWrap"], "Side"),
    mappingBias = op.inValue("Bias", 0),
    inFlipX = op.inValueBool("Flip X", true),
    sideTop = op.inValueBool("Top", true),
    sideBottom = op.inValueBool("Bottom", true),
    sideLeft = op.inValueBool("Left", true),
    sideRight = op.inValueBool("Right", true),
    sideFront = op.inValueBool("Front", true),
    sideBack = op.inValueBool("Back", true),
    trigger = op.outTrigger("Next"),
    geomOut = op.outObject("geometry", null, "geometry");

const cgl = op.patch.cgl;
op.toWorkPortsNeedToBeLinked(render);
op.toWorkShouldNotBeChild("Ops.Gl.TextureEffects.ImageCompose", CABLES.OP_PORT_TYPE_FUNCTION);

op.setPortGroup("Mapping", [mapping, mappingBias, inFlipX]);
op.setPortGroup("Geometry", [width, height, len, center]);
op.setPortGroup("Sides", [sideTop, sideBottom, sideLeft, sideRight, sideFront, sideBack]);

let geom = null,
    mesh = null,
    meshvalid = true,
    needsRebuild = true;

mappingBias.onChange =
    inFlipX.onChange =
    sideTop.onChange =
    sideBottom.onChange =
    sideLeft.onChange =
    sideRight.onChange =
    sideFront.onChange =
    sideBack.onChange =
    mapping.onChange =
    width.onChange =
    height.onChange =
    len.onChange =
    center.onChange = buildMeshLater;

function buildMeshLater()
{
    needsRebuild = true;
}

render.onLinkChanged = function ()
{
    if (!render.isLinked()) geomOut.set(null);
    else geomOut.setRef(geom);
};

render.onTriggered = function ()
{
    if (needsRebuild)buildMesh();
    if (active.get() && mesh && meshvalid) mesh.render();
    trigger.trigger();
};

op.preRender = function ()
{
    buildMesh();
    if (mesh && cgl)mesh.render();
};

function buildMesh()
{
    if (!geom)geom = new CGL.Geometry("cubemesh");
    geom.clear();

    let x = width.get();
    let nx = -1 * width.get();
    let y = height.get();
    let ny = -1 * height.get();
    let z = len.get();
    let nz = -1 * len.get();

    if (!center.get())
    {
        nx = 0;
        ny = 0;
        nz = 0;
    }
    else
    {
        x *= 0.5;
        nx *= 0.5;
        y *= 0.5;
        ny *= 0.5;
        z *= 0.5;
        nz *= 0.5;
    }

    addAttribs(geom, x, y, z, nx, ny, nz);
    if (mapping.get() == "Side") sideMappedCube(geom, 1, 1, 1);
    else if (mapping.get() == "SideWrap") sideMappedCube(geom, x, y, z);
    else cubeMappedCube(geom);

    geom.verticesIndices = [];
    if (sideTop.get()) geom.verticesIndices.push(8, 9, 10, 8, 10, 11); // Top face
    if (sideBottom.get()) geom.verticesIndices.push(12, 13, 14, 12, 14, 15); // Bottom face
    if (sideLeft.get()) geom.verticesIndices.push(20, 21, 22, 20, 22, 23); // Left face
    if (sideRight.get()) geom.verticesIndices.push(16, 17, 18, 16, 18, 19); // Right face
    if (sideBack.get()) geom.verticesIndices.push(4, 5, 6, 4, 6, 7); // Back face
    if (sideFront.get()) geom.verticesIndices.push(0, 1, 2, 0, 2, 3); // Front face

    if (geom.verticesIndices.length === 0) meshvalid = false;
    else meshvalid = true;

    if (mesh)mesh.dispose();
    if (op.patch.cg) mesh = op.patch.cg.createMesh(geom, { "opId": op.id });

    geomOut.setRef(geom);

    needsRebuild = false;
}

op.onDelete = function ()
{
    if (mesh)mesh.dispose();
};

function sideMappedCube(geom, x, y, z)
{
    const bias = mappingBias.get();

    let u1 = 1.0 - bias;
    let u0 = 0.0 + bias;
    if (inFlipX.get())
    {
        [u1, u0] = [u0, u1];
    }

    let v1 = 1.0 - bias;
    let v0 = 0.0 + bias;

    geom.setTexCoords([
        // Front face
        x * u0, y * v1,
        x * u1, y * v1,
        x * u1, y * v0,
        x * u0, y * v0,
        // Back face
        x * u1, y * v1,
        x * u1, y * v0,
        x * u0, y * v0,
        x * u0, y * v1,
        // Top face
        x * u0, z * v0,
        x * u0, z * v1,
        x * u1, z * v1,
        x * u1, z * v0,
        // Bottom face
        x * u1, y * v0,
        x * u0, y * v0,
        x * u0, y * v1,
        x * u1, y * v1,
        // Right face
        z * u1, y * v1,
        z * u1, y * v0,
        z * u0, y * v0,
        z * u0, y * v1,
        // Left face
        z * u0, y * v1,
        z * u1, y * v1,
        z * u1, y * v0,
        z * u0, y * v0,
    ]);
}

function cubeMappedCube(geom, x, y, z, nx, ny, nz)
{
    const sx = 0.25;
    const sy = 1 / 3;
    const bias = mappingBias.get();

    let flipx = 0.0;
    if (inFlipX.get()) flipx = 1.0;

    const tc = [];
    tc.push(
        // Front face   Z+
        flipx + sx + bias, sy * 2 - bias, flipx + sx * 2 - bias, sy * 2 - bias, flipx + sx * 2 - bias, sy + bias, flipx + sx + bias, sy + bias,
        // Back face Z-
        flipx + sx * 4 - bias, sy * 2 - bias, flipx + sx * 4 - bias, sy + bias, flipx + sx * 3 + bias, sy + bias, flipx + sx * 3 + bias, sy * 2 - bias);

    if (inFlipX.get())
        tc.push(
            // Top face
            sx + bias, 0 - bias, sx * 2 - bias, 0 - bias, sx * 2 - bias, sy * 1 + bias, sx + bias, sy * 1 + bias,
            // Bottom face
            sx + bias, sy * 3 + bias, sx + bias, sy * 2 - bias, sx * 2 - bias, sy * 2 - bias, sx * 2 - bias, sy * 3 + bias
        );

    else
        tc.push(
            // Top face
            sx + bias, 0 + bias, sx + bias, sy * 1 - bias, sx * 2 - bias, sy * 1 - bias, sx * 2 - bias, 0 + bias,
            // Bottom face
            sx + bias, sy * 3 - bias, sx * 2 - bias, sy * 3 - bias, sx * 2 - bias, sy * 2 + bias, sx + bias, sy * 2 + bias);

    tc.push(
        // Right face
        flipx + sx * 3 - bias, 1.0 - sy - bias, flipx + sx * 3 - bias, 1.0 - sy * 2 + bias, flipx + sx * 2 + bias, 1.0 - sy * 2 + bias, flipx + sx * 2 + bias, 1.0 - sy - bias,
        // Left face
        flipx + sx * 0 + bias, 1.0 - sy - bias, flipx + sx * 1 - bias, 1.0 - sy - bias, flipx + sx * 1 - bias, 1.0 - sy * 2 + bias, flipx + sx * 0 + bias, 1.0 - sy * 2 + bias);

    geom.setTexCoords(tc);
}

function addAttribs(geom, x, y, z, nx, ny, nz)
{
    geom.vertices = [
        // Front face
        nx, ny, z,
        x, ny, z,
        x, y, z,
        nx, y, z,
        // Back face
        nx, ny, nz,
        nx, y, nz,
        x, y, nz,
        x, ny, nz,
        // Top face
        nx, y, nz,
        nx, y, z,
        x, y, z,
        x, y, nz,
        // Bottom face
        nx, ny, nz,
        x, ny, nz,
        x, ny, z,
        nx, ny, z,
        // Right face
        x, ny, nz,
        x, y, nz,
        x, y, z,
        x, ny, z,
        // zeft face
        nx, ny, nz,
        nx, ny, z,
        nx, y, z,
        nx, y, nz
    ];

    geom.vertexNormals = new Float32Array([
        // Front face
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,
        0.0, 0.0, 1.0,

        // Back face
        0.0, 0.0, -1.0,
        0.0, 0.0, -1.0,
        0.0, 0.0, -1.0,
        0.0, 0.0, -1.0,

        // Top face
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,
        0.0, 1.0, 0.0,

        // Bottom face
        0.0, -1.0, 0.0,
        0.0, -1.0, 0.0,
        0.0, -1.0, 0.0,
        0.0, -1.0, 0.0,

        // Right face
        1.0, 0.0, 0.0,
        1.0, 0.0, 0.0,
        1.0, 0.0, 0.0,
        1.0, 0.0, 0.0,

        // Left face
        -1.0, 0.0, 0.0,
        -1.0, 0.0, 0.0,
        -1.0, 0.0, 0.0,
        -1.0, 0.0, 0.0
    ]);
    geom.tangents = new Float32Array([
        // front face
        0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0,
        // back face
        1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        // top face
        -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
        // bottom face
        1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        // right face
        0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1,
        // left face
        0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1
    ]);
    geom.biTangents = new Float32Array([
        // front face
        -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
        // back face
        1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0,
        // top face
        0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
        // bottom face
        0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1,
        // right face
        0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
        // left face
        0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1
    ]);
}

}
};

CABLES.OPS["37b92ba4-cea5-42ae-bf28-a513ca28549c"]={f:Ops.Graphics.Meshes.Cube_v2,objName:"Ops.Graphics.Meshes.Cube_v2"};




// **************************************************************
// 
// Ops.Vars.VarSetNumber_v2
// 
// **************************************************************

Ops.Vars.VarSetNumber_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const val = op.inValueFloat("Value", 0);
op.varName = op.inDropDown("Variable", [], "", true);

new CABLES.VarSetOpWrapper(op, "number", val, op.varName);

}
};

CABLES.OPS["b5249226-6095-4828-8a1c-080654e192fa"]={f:Ops.Vars.VarSetNumber_v2,objName:"Ops.Vars.VarSetNumber_v2"};




// **************************************************************
// 
// Ops.Trigger.TriggerReceive
// 
// **************************************************************

Ops.Trigger.TriggerReceive= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const next = op.outTrigger("Triggered");
op.varName = op.inValueSelect("Named Trigger", [], "", true);

op.varName.setUiAttribs({ "_triggerSelect": true });

updateVarNamesDropdown();
op.patch.addEventListener("namedTriggersChanged", updateVarNamesDropdown);

let oldName = null;

function doTrigger()
{
    next.trigger();
}

function updateVarNamesDropdown()
{
    if (CABLES.UI)
    {
        let varnames = [];
        let vars = op.patch.namedTriggers;

        for (let i in vars) varnames.push(i);
        varnames = varnames.sort();
        op.varName.uiAttribs.values = varnames;
    }
}

op.varName.onChange = function ()
{
    if (oldName)
    {
        let oldCbs = op.patch.namedTriggers[oldName];
        let a = oldCbs.indexOf(doTrigger);
        if (a != -1) oldCbs.splice(a, 1);
    }

    op.setTitle(">" + op.varName.get());
    op.patch.namedTriggers[op.varName.get()] = op.patch.namedTriggers[op.varName.get()] || [];
    let cbs = op.patch.namedTriggers[op.varName.get()];

    cbs.push(doTrigger);
    oldName = op.varName.get();
    updateError();
    op.patch.emitEvent("opTriggerNameChanged", op, op.varName.get());
};

op.on("uiParamPanel", updateError);

function updateError()
{
    if (!op.varName.get())
    {
        op.setUiError("unknowntrigger", "unknown trigger");
    }
    else op.setUiError("unknowntrigger", null);
}

}
};

CABLES.OPS["0816c999-f2db-466b-9777-2814573574c5"]={f:Ops.Trigger.TriggerReceive,objName:"Ops.Trigger.TriggerReceive"};




// **************************************************************
// 
// Ops.Color.ColorValue
// 
// **************************************************************

Ops.Color.ColorValue= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const r = op.inValueSlider("r", Math.random());
const g = op.inValueSlider("g", Math.random());
const b = op.inValueSlider("b", Math.random());
r.setUiAttribs({ "colorPick": true });
const a = op.inValueSlider("a", 1);

const outR = op.outNumber("outr");
const outG = op.outNumber("outg");
const outB = op.outNumber("outb");
const outA = op.outNumber("outa");
const outHex = op.outNumber("Hex", "000000");
const arrOut = op.outArray("Array");

r.onChange = g.onChange = b.onChange = a.onChange = exec;

/**
 * Float [0..1] -> Hex String [00..FF]
 */
function floatToHex(f)
{
    let s = Math.round(f * 255).toString(16);
    if (s.length === 1)
    {
        s = "0" + s;
    }
    return s.toUpperCase();
}

function exec()
{
    outR.set(r.get());
    outG.set(g.get());
    outB.set(b.get());
    outA.set(a.get());

    let hex = floatToHex(r.get()) + floatToHex(g.get()) + floatToHex(b.get());
    outHex.set(hex);

    arrOut.set([r.get(), g.get(), b.get(), a.get()]);
}

exec();

}
};

CABLES.OPS["7caa37c8-f2a7-49f2-a29c-96af362abca0"]={f:Ops.Color.ColorValue,objName:"Ops.Color.ColorValue"};




// **************************************************************
// 
// Ops.Array.Array3
// 
// **************************************************************

Ops.Array.Array3= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inNum = op.inValueInt("Num Triplets", 100),
    inX = op.inValueFloat("X", 0),
    inY = op.inValueFloat("Y", 0),
    inZ = op.inValueFloat("Z", 0),
    outArr = op.outArray("Array", null, 3),
    outTotalPoints = op.outNumber("Total points"),
    outArrayLength = op.outNumber("Array length");

inNum.onChange =
    inX.onChange =
    inY.onChange =
    inZ.onChange = update;

let arr = [];
update();

function update()
{
    let num = Math.floor(inNum.get() * 3);

    if (num < 0)num = 0;
    if (arr.length != num) arr.length = num;

    const x = inX.get();
    const y = inY.get();
    const z = inZ.get();

    for (let i = 0; i < num; i += 3)
    {
        arr[i] = x;
        arr[i + 1] = y;
        arr[i + 2] = z;
    }

    outArr.setRef(arr);
    outTotalPoints.set(num / 3);
    outArrayLength.set(num);
}

}
};

CABLES.OPS["2766606a-3ea0-4204-8613-b8950a124435"]={f:Ops.Array.Array3,objName:"Ops.Array.Array3"};




// **************************************************************
// 
// Ops.Array.ArrayMerge_v3
// 
// **************************************************************

Ops.Array.ArrayMerge_v3= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const numArrays = 8;
const inArrs = [];

for (let i = 0; i < numArrays; i++)
{
    inArrs[i] = op.inArray("Array " + i);
    inArrs[i].onChange = function ()
    {
        update();
    };
}

const
    outArr = op.outArray("Result"),
    outArrayLength = op.outNumber("Array length");

let arr = [];

function update()
{
    arr.length = 0;

    for (let i = 0; i < numArrays; i++)
    {
        const ar = inArrs[i].get();
        if (ar)arr = arr.concat(ar);
    }

    outArr.setRef(arr);
    outArrayLength.set(arr.length);
}

}
};

CABLES.OPS["753d053a-04a3-44c7-abf0-ae2676ced13e"]={f:Ops.Array.ArrayMerge_v3,objName:"Ops.Array.ArrayMerge_v3"};




// **************************************************************
// 
// Ops.Devices.Mouse.Mouse_v3
// 
// **************************************************************

Ops.Devices.Mouse.Mouse_v3= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inCoords = op.inSwitch("Coordinates", ["-1 to 1", "Pixel Display", "Pixel", "0 to 1"], "-1 to 1"),
    area = op.inValueSelect("Area", ["Canvas", "Document", "Parent Element", "Canvas Area"], "Canvas"),
    flipY = op.inValueBool("flip y", true),
    rightClickPrevDef = op.inBool("right click prevent default", true),
    touchscreen = op.inValueBool("Touch support", true),
    inPassive = op.inValueBool("Passive Events", false),
    active = op.inValueBool("Active", true),
    outMouseX = op.outNumber("x", 0),
    outMouseY = op.outNumber("y", 0),
    mouseClick = op.outTrigger("click"),
    mouseClickRight = op.outTrigger("click right"),
    mouseDown = op.outBoolNum("Button is down"),
    mouseOver = op.outBoolNum("Mouse is hovering"),
    outMovementX = op.outNumber("Movement X", 0),
    outMovementY = op.outNumber("Movement Y", 0);

const cgl = op.patch.cgl;
let normalize = 1;
let listenerElement = null;
let areaElement = null;

inPassive.onChange =
area.onChange = addListeners;

inCoords.onChange = updateCoordNormalizing;
op.onDelete = removeListeners;

addListeners();

op.on("loadedValueSet", onStart);

function onStart()
{
    if (normalize == 0)
    {
        if (areaElement.clientWidth === 0) setTimeout(onStart, 50);

        outMouseX.set(areaElement.clientWidth / 2);
        outMouseY.set(areaElement.clientHeight / 2);
    }
    else if (normalize == 1)
    {
        outMouseX.set(0);
        outMouseY.set(0);
    }
    else if (normalize == 2)
    {
        outMouseX.set(0.5);
        outMouseY.set(0.5);
    }
    else if (normalize == 3)
    {
        if (areaElement.clientWidth === 0)
        {
            setTimeout(onStart, 50);
        }

        outMouseX.set(areaElement.clientWidth / 2 / cgl.pixelDensity);
        outMouseY.set(areaElement.clientHeight / 2 / cgl.pixelDensity);
    }
    else console.error("unknown normalize mouse", normalize);
}

function setValue(x, y)
{
    x = x || 0;
    y = y || 0;

    if (normalize == 0) // pixel
    {
        outMouseX.set(x);
        outMouseY.set(y);
    }
    else
    if (normalize == 3) // pixel css
    {
        outMouseX.set(x * cgl.pixelDensity);
        outMouseY.set(y * cgl.pixelDensity);
    }
    else
    {
        let w = areaElement.clientWidth / cgl.pixelDensity;
        let h = areaElement.clientHeight / cgl.pixelDensity;

        w = w || 1;
        h = h || 1;

        if (normalize == 1) // -1 to 1
        {
            let xx = (x / w * 2.0 - 1.0);
            let yy = (y / h * 2.0 - 1.0);
            xx = CABLES.clamp(xx, -1, 1);
            yy = CABLES.clamp(yy, -1, 1);

            outMouseX.set(xx);
            outMouseY.set(yy);
        }
        else if (normalize == 2) // 0 to 1
        {
            let xx = x / w;
            let yy = y / h;

            xx = CABLES.clamp(xx, 0, 1);
            yy = CABLES.clamp(yy, 0, 1);

            outMouseX.set(xx);
            outMouseY.set(yy);
        }
    }
}

function checkHovering(e)
{
    if (!areaElement) return;
    const r = areaElement.getBoundingClientRect();

    return (
        e.clientX > r.left &&
        e.clientX < r.left + r.width &&
        e.clientY > r.top &&
        e.clientY < r.top + r.height
    );
}

touchscreen.onChange = function ()
{
    removeListeners();
    addListeners();
};

active.onChange = function ()
{
    if (listenerElement)removeListeners();
    if (active.get())addListeners();
};

function updateCoordNormalizing()
{
    if (inCoords.get() == "Pixel") normalize = 0;
    else if (inCoords.get() == "-1 to 1") normalize = 1;
    else if (inCoords.get() == "0 to 1") normalize = 2;
    else if (inCoords.get() == "Pixel Display") normalize = 3;
}

function onMouseEnter(e)
{
    mouseDown.set(false);
    mouseOver.set(checkHovering(e));
}

function onMouseDown(e)
{
    if (!checkHovering(e)) return;
    mouseDown.set(true);
}

function onMouseUp(e)
{
    mouseDown.set(false);
}

function onClickRight(e)
{
    if (!checkHovering(e)) return;
    mouseClickRight.trigger();
    if (rightClickPrevDef.get()) e.preventDefault();
}

function onmouseclick(e)
{
    if (!checkHovering(e)) return;
    mouseClick.trigger();
}

function onMouseLeave(e)
{
    mouseDown.set(false);
    mouseOver.set(checkHovering(e));
}

function setCoords(e)
{
    let x = e.clientX;
    let y = e.clientY;

    if (area.get() != "Document")
    {
        x = e.offsetX;
        y = e.offsetY;
    }
    if (area.get() === "Canvas Area")
    {
        const r = areaElement.getBoundingClientRect();
        x = e.clientX - r.left;
        y = e.clientY - r.top;

        if (x < 0 || x > r.width || y > r.height || y < 0) return;
        x = CABLES.clamp(x, 0, r.width);
        y = CABLES.clamp(y, 0, r.height);
    }

    if (flipY.get()) y = areaElement.clientHeight - y;

    setValue(x / cgl.pixelDensity, y / cgl.pixelDensity);
}

function onmousemove(e)
{
    mouseOver.set(checkHovering(e));
    if (area.get() === "Canvas Area")
    {
        const r = areaElement.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;

        if (x < 0 || x > r.width || y > r.height || y < 0) return;
    }

    setCoords(e);

    outMovementX.set(e.movementX / cgl.pixelDensity);
    outMovementY.set(e.movementY / cgl.pixelDensity);
}

function ontouchmove(e)
{
    if (event.touches && event.touches.length > 0) setCoords(e.touches[0]);
}

function ontouchstart(event)
{
    mouseDown.set(true);

    if (event.touches && event.touches.length > 0) onMouseDown(event.touches[0]);
}

function ontouchend(event)
{
    mouseDown.set(false);
    onMouseUp();
}

function removeListeners()
{
    if (!listenerElement) return;
    listenerElement.removeEventListener("touchend", ontouchend);
    listenerElement.removeEventListener("touchstart", ontouchstart);
    listenerElement.removeEventListener("touchmove", ontouchmove);

    listenerElement.removeEventListener("click", onmouseclick);
    listenerElement.removeEventListener("mousemove", onmousemove);
    listenerElement.removeEventListener("mouseleave", onMouseLeave);
    listenerElement.removeEventListener("mousedown", onMouseDown);
    listenerElement.removeEventListener("mouseup", onMouseUp);
    listenerElement.removeEventListener("mouseenter", onMouseEnter);
    listenerElement.removeEventListener("contextmenu", onClickRight);
    listenerElement = null;
}

function addListeners()
{
    if (listenerElement || !active.get())removeListeners();
    if (!active.get()) return;

    listenerElement = areaElement = cgl.canvas;

    if (area.get() == "Canvas Area")
    {
        areaElement = cgl.canvas.parentElement;
        listenerElement = document.body;
    }
    if (area.get() == "Document") areaElement = listenerElement = document.body;
    if (area.get() == "Parent Element") listenerElement = areaElement = cgl.canvas.parentElement;

    if (!areaElement)
    {
        op.setUiError("noarea", "could not find area element for mouse", 2);
        return;
    }
    op.setUiError("noarea", null);

    let passive = false;
    if (inPassive.get())passive = { "passive": true };

    if (touchscreen.get())
    {
        listenerElement.addEventListener("touchend", ontouchend, passive);
        listenerElement.addEventListener("touchstart", ontouchstart, passive);
        listenerElement.addEventListener("touchmove", ontouchmove, passive);
    }

    listenerElement.addEventListener("mousemove", onmousemove, passive);
    listenerElement.addEventListener("mouseleave", onMouseLeave, passive);
    listenerElement.addEventListener("mousedown", onMouseDown, passive);
    listenerElement.addEventListener("mouseup", onMouseUp, passive);
    listenerElement.addEventListener("mouseenter", onMouseEnter, passive);
    listenerElement.addEventListener("contextmenu", onClickRight, passive);
    listenerElement.addEventListener("click", onmouseclick, passive);
}

//

}
};

CABLES.OPS["6d1edbc0-088a-43d7-9156-918fb3d7f24b"]={f:Ops.Devices.Mouse.Mouse_v3,objName:"Ops.Devices.Mouse.Mouse_v3"};




// **************************************************************
// 
// Ops.Devices.TouchScreen
// 
// **************************************************************

Ops.Devices.TouchScreen= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    disableScaleWeb = op.inValueBool("Disable Scaling", true),
    disableDefault = op.inValueBool("Disable Scroll", true),
    hdpi = op.inValueBool("HDPI Coordinates", false),
    active = op.inValueBool("Active", true),

    outTouched = op.outNumber("Touched", false),
    numFingers = op.outNumber("Fingers", 0),

    f1x = op.outNumber("Finger 1 X", 0),
    f1y = op.outNumber("Finger 1 Y", 0),
    f1f = op.outNumber("Finger 1 Force", 0),

    f2x = op.outNumber("Finger 2 X", 0),
    f2y = op.outNumber("Finger 2 Y", 0),
    f2f = op.outNumber("Finger 2 Force", 0),
    area = op.inSwitch("Area", ["Canvas", "Document"], "Canvas"),

    outEvents = op.outArray("Events"),
    normalize = op.inValueBool("Normalize Coordinates"),
    flipY = op.inValueBool("Flip Y"),
    outTouchStart = op.outTrigger("Touch Start"),
    outTouchEnd = op.outTrigger("Touch End");

area.onChange = updateArea;

function setPos(event)
{
    if (event.touches && event.touches.length > 0)
    {
        var rect = event.target.getBoundingClientRect();
        var x = event.touches[0].clientX - event.touches[0].target.offsetLeft;
        var y = event.touches[0].clientY - event.touches[0].target.offsetTop;

        if (flipY.get()) y = rect.height - y;

        if (hdpi.get())
        {
            x *= (op.patch.cgl.pixelDensity || 1);
            y *= (op.patch.cgl.pixelDensity || 1);
        }

        if (normalize.get())
        {
            x = (x / rect.width * 2.0 - 1.0);
            y = (y / rect.height * 2.0 - 1.0);
        }

        f1x.set(x);
        f1y.set(y);

        if (event.touches[0].force)f1f.set(event.touches[0].force);
    }

    if (event.touches && event.touches.length > 1)
    {
        var rect = event.target.getBoundingClientRect();
        var x = event.touches[1].clientX - event.touches[1].target.offsetLeft;
        var y = event.touches[1].clientY - event.touches[1].target.offsetTop;

        if (hdpi.get())
        {
            x *= (op.patch.cgl.pixelDensity || 1);
            y *= (op.patch.cgl.pixelDensity || 1);
        }

        if (normalize.get())
        {
            x = (x / rect.width * 2.0 - 1.0);
            y = (y / rect.height * 2.0 - 1.0);
        }

        f2x.set(x);
        f2y.set(y);

        if (event.touches[1].force)f2f.set(event.touches[1].force);
    }
    outEvents.set(event.touches);
}

const ontouchstart = function (event)
{
    outTouched.set(true);
    setPos(event);
    numFingers.set(event.touches.length);
    outTouchStart.trigger();
};

const ontouchend = function (event)
{
    outTouched.set(false);
    f1f.set(0);
    f2f.set(0);
    setPos(event);

    numFingers.set(event.touches.length);
    outTouchEnd.trigger();
};

const ontouchmove = function (event)
{
    setPos(event);
    numFingers.set(event.touches.length);
    if (disableDefault.get() || (disableScaleWeb.get() && event.scale !== 1))
    {
        event.preventDefault();
        document.body.style["touch-action"] = "none";
    }
    else
    {
        document.body.style["touch-action"] = "initial";
    }
};

const cgl = op.patch.cgl;
let listenerElement = null;
function addListeners()
{
    listenerElement.addEventListener("touchmove", ontouchmove, { "passive": false });
    listenerElement.addEventListener("touchstart", ontouchstart, { "passive": false });
    listenerElement.addEventListener("touchend", ontouchend, { "passive": false });
}

function updateArea()
{
    removeListeners();

    if (area.get() == "Document") listenerElement = document;
    else listenerElement = cgl.canvas;

    if (active.get()) addListeners();
}

function removeListeners()
{
    if (listenerElement)
    {
        listenerElement.removeEventListener("touchmove", ontouchmove);
        listenerElement.removeEventListener("touchstart", ontouchstart);
        listenerElement.removeEventListener("touchend", ontouchend);
    }
    listenerElement = null;
}

active.onChange = function ()
{
    updateArea();
};

updateArea();

}
};

CABLES.OPS["cedffacf-0f09-4342-bd21-540bd9c8037d"]={f:Ops.Devices.TouchScreen,objName:"Ops.Devices.TouchScreen"};




// **************************************************************
// 
// Ops.Trigger.TriggerSend
// 
// **************************************************************

Ops.Trigger.TriggerSend= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    trigger = op.inTriggerButton("Trigger"),
    next = op.outTrigger("Next");

op.varName = op.inValueSelect("Named Trigger", [], "", true);

op.varName.onChange = updateName;

trigger.onTriggered = doTrigger;

op.patch.addEventListener("namedTriggersChanged", updateVarNamesDropdown);

updateVarNamesDropdown();

op.varName.setUiAttribs({ "_triggerSelect": true });

function updateVarNamesDropdown()
{
    if (CABLES.UI)
    {
        let varnames = [];
        const vars = op.patch.namedTriggers;
        varnames.push("+ create new one");
        for (const i in vars) varnames.push(i);
        varnames = varnames.sort();
        op.varName.uiAttribs.values = varnames;
    }
}

function updateName()
{
    if (CABLES.UI)
    {
        if (op.varName.get() == "+ create new one")
        {
            new CABLES.UI.ModalDialog({
                "prompt": true,
                "title": "New Trigger",
                "text": "Enter a name for the new trigger",
                "promptValue": "",
                "promptOk": (str) =>
                {
                    op.varName.set(str);
                    op.patch.namedTriggers[str] = op.patch.namedTriggers[str] || [];
                    updateVarNamesDropdown();
                }
            });
            return;
        }

        op.refreshParams();
    }

    if (!op.patch.namedTriggers[op.varName.get()])
    {
        op.patch.namedTriggers[op.varName.get()] = op.patch.namedTriggers[op.varName.get()] || [];
        op.patch.emitEvent("namedTriggersChanged");
    }

    op.setTitle(">" + op.varName.get());

    op.refreshParams();
    op.patch.emitEvent("opTriggerNameChanged", op, op.varName.get());
}

function doTrigger()
{
    const arr = op.patch.namedTriggers[op.varName.get()];
    // fire an event even if noone is receiving this trigger
    // this way TriggerReceiveFilter can still handle it
    op.patch.emitEvent("namedTriggerSent", op.varName.get());

    if (!arr)
    {
        op.setUiError("unknowntrigger", "unknown trigger");
        return;
    }
    else op.setUiError("unknowntrigger", null);

    for (let i = 0; i < arr.length; i++)
    {
        arr[i]();
    }

    next.trigger();
}

}
};

CABLES.OPS["ce1eaf2b-943b-4dc0-ab5e-ee11b63c9ed0"]={f:Ops.Trigger.TriggerSend,objName:"Ops.Trigger.TriggerSend"};




// **************************************************************
// 
// Ops.Number.TriggerOnChangeNumber
// 
// **************************************************************

Ops.Number.TriggerOnChangeNumber= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inval = op.inFloat("Value"),
    next = op.outTrigger("Next"),
    number = op.outNumber("Number");

inval.onChange = function ()
{
    number.set(inval.get());
    next.trigger();
};

}
};

CABLES.OPS["f5c8c433-ce13-49c4-9a33-74e98f110ed0"]={f:Ops.Number.TriggerOnChangeNumber,objName:"Ops.Number.TriggerOnChangeNumber"};




// **************************************************************
// 
// Ops.Trigger.TriggerOnce
// 
// **************************************************************

Ops.Trigger.TriggerOnce= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    exe = op.inTriggerButton("Exec"),
    reset = op.inTriggerButton("Reset"),
    next = op.outTrigger("Next"),
    outTriggered = op.outBoolNum("Was Triggered");

let triggered = false;

op.toWorkPortsNeedToBeLinked(exe);

reset.onTriggered = function ()
{
    triggered = false;
    outTriggered.set(triggered);
};

exe.onTriggered = function ()
{
    if (triggered) return;

    triggered = true;
    next.trigger();
    outTriggered.set(triggered);
};

}
};

CABLES.OPS["cf3544e4-e392-432b-89fd-fcfb5c974388"]={f:Ops.Trigger.TriggerOnce,objName:"Ops.Trigger.TriggerOnce"};




// **************************************************************
// 
// Ops.Array.ArrayLength_v2
// 
// **************************************************************

Ops.Array.ArrayLength_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    array = op.inArray("array"),
    outLength = op.outNumber("length");

outLength.ignoreValueSerialize = true;

function update()
{
    let l = 0;
    if (array.get()) l = array.get().length;
    outLength.set(l);
}

array.onChange = update;

}
};

CABLES.OPS["6f665caa-96ed-45d8-8620-e34f0f8e062c"]={f:Ops.Array.ArrayLength_v2,objName:"Ops.Array.ArrayLength_v2"};




// **************************************************************
// 
// Ops.Html.Cursor_v2
// 
// **************************************************************

Ops.Html.Cursor_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    exec = op.inTriggerButton("Update"),
    cursorPort = op.inDropDown("CSS Cursors", ["auto", "crosshair", "pointer", "hand", "move", "n-resize", "ne-resize", "e-resize", "se-resize", "s-resize", "sw-resize", "w-resize", "nw-resize", "ew-resize", "text", "wait", "help", "none"], "pointer"),
    parentEle = op.inBool("Set Parent Element", true),
    next = op.outTrigger("Next");

const cursorStr = "";
exec.onTriggered = update;

let lastParentCursor = "";

exec.onLinkChanged =
next.onLinkChanged = () =>
{
    op.patch.cgl.setCursor("auto");
};

parentEle.onChange = () =>
{
    if (!parentEle.get())
    {
        lastParentCursor = "auto";
        op.patch.cgl.canvas.parentElement.style.cursor = "auto";
    }
};

function update()
{
    let arg2 = null;

    op.patch.cgl.setCursor(cursorPort.get(), arg2);

    if (parentEle.get() && lastParentCursor != cursorPort.get())
        op.patch.cgl.canvas.parentElement.style.cursor = cursorPort.get();

    next.trigger();
}

}
};

CABLES.OPS["39486799-bdad-42d3-a300-4642c23578a8"]={f:Ops.Html.Cursor_v2,objName:"Ops.Html.Cursor_v2"};




// **************************************************************
// 
// Ops.Math.Divide
// 
// **************************************************************

Ops.Math.Divide= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    number1 = op.inValueFloat("number1", 1),
    number2 = op.inValueFloat("number2", 2),
    result = op.outNumber("result");

op.setUiAttribs({ "mathTitle": true });

number1.onChange = number2.onChange = exec;
exec();

function exec()
{
    result.set(number1.get() / number2.get());
}

}
};

CABLES.OPS["86fcfd8c-038d-4b91-9820-a08114f6b7eb"]={f:Ops.Math.Divide,objName:"Ops.Math.Divide"};




// **************************************************************
// 
// Ops.Math.Multiply
// 
// **************************************************************

Ops.Math.Multiply= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    number1 = op.inValueFloat("number1", 1),
    number2 = op.inValueFloat("number2", 1),
    result = op.outNumber("result");

op.setUiAttribs({ "mathTitle": true });

number1.onChange = number2.onChange = update;
update();

function update()
{
    const n1 = number1.get();
    const n2 = number2.get();

    result.set(n1 * n2);
}

}
};

CABLES.OPS["1bbdae06-fbb2-489b-9bcc-36c9d65bd441"]={f:Ops.Math.Multiply,objName:"Ops.Math.Multiply"};




// **************************************************************
// 
// Ops.Sidebar.Button_v2
// 
// **************************************************************

Ops.Sidebar.Button_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
// inputs
const parentPort = op.inObject("link");
const buttonTextPort = op.inString("Text", "Button");

// outputs
const siblingsPort = op.outObject("childs");
const buttonPressedPort = op.outTrigger("Pressed Trigger");

const inGreyOut = op.inBool("Grey Out", false);
const inVisible = op.inBool("Visible", true);

// vars
const el = document.createElement("div");
el.dataset.op = op.id;
el.classList.add("cablesEle");
el.classList.add("sidebar__item");
el.classList.add("sidebar--button");
const input = document.createElement("button");
input.classList.add("sidebar__button-input");
el.appendChild(input);
input.addEventListener("click", onButtonClick);
input.style.width = "100%";
const inputText = document.createTextNode(buttonTextPort.get());
input.appendChild(inputText);
op.toWorkNeedsParent("Ops.Sidebar.Sidebar");

// events
parentPort.onChange = onParentChanged;
buttonTextPort.onChange = onButtonTextChanged;
op.onDelete = onDelete;

const greyOut = document.createElement("div");
greyOut.classList.add("sidebar__greyout");
el.appendChild(greyOut);
greyOut.style.display = "none";

inGreyOut.onChange = function ()
{
    greyOut.style.display = inGreyOut.get() ? "block" : "none";
};

inVisible.onChange = function ()
{
    el.style.display = inVisible.get() ? "block" : "none";
};

function onButtonClick()
{
    buttonPressedPort.trigger();
}

function onButtonTextChanged()
{
    const buttonText = buttonTextPort.get();
    input.textContent = buttonText;

    input.setAttribute("aria-label", "button " + buttonTextPort.get());

    if (CABLES.UI) op.setUiAttrib({ "extendTitle": buttonText });
}

function onParentChanged()
{
    siblingsPort.set(null);
    const parent = parentPort.get();
    if (parent && parent.parentElement)
    {
        parent.parentElement.appendChild(el);
        siblingsPort.set(parent);
    }
    else
    { // detach
        if (el.parentElement)
        {
            el.parentElement.removeChild(el);
        }
    }
}

function showElement(el)
{
    if (el)
    {
        el.style.display = "block";
    }
}

function hideElement(el)
{
    if (el)
    {
        el.style.display = "none";
    }
}

function onDelete()
{
    removeElementFromDOM(el);
}

function removeElementFromDOM(el)
{
    if (el && el.parentNode && el.parentNode.removeChild)
    {
        el.parentNode.removeChild(el);
    }
}

}
};

CABLES.OPS["5e9c6933-0605-4bf7-8671-a016d917f327"]={f:Ops.Sidebar.Button_v2,objName:"Ops.Sidebar.Button_v2"};




// **************************************************************
// 
// Ops.Sidebar.Sidebar
// 
// **************************************************************

Ops.Sidebar.Sidebar= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={"style_css":" /*\r\n * SIDEBAR\r\n  http://danielstern.ca/range.css/#/\r\n  https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-progress-value\r\n */\r\n\r\n.sidebar-icon-undo\r\n{\r\n    width:10px;\r\n    height:10px;\r\n    background-image: url(\"data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' stroke='grey' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 7v6h6'/%3E%3Cpath d='M21 17a9 9 0 00-9-9 9 9 0 00-6 2.3L3 13'/%3E%3C/svg%3E\");\r\n    background-size: 19px;\r\n    background-repeat: no-repeat;\r\n    top: -19px;\r\n    margin-top: -7px;\r\n}\r\n\r\n.icon-chevron-down {\r\n    top: 2px;\r\n    right: 9px;\r\n}\r\n\r\n.iconsidebar-chevron-up,.sidebar__close-button {\r\n\tbackground-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tdXAiPjxwb2x5bGluZSBwb2ludHM9IjE4IDE1IDEyIDkgNiAxNSI+PC9wb2x5bGluZT48L3N2Zz4=);\r\n}\r\n\r\n.iconsidebar-minimizebutton {\r\n    background-position: 98% center;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.sidebar-cables-right\r\n{\r\n    right: 15px;\r\n    left: initial !important;\r\n}\r\n\r\n.sidebar-cables *\r\n{\r\n    color: #BBBBBB !important;\r\n    font-family: Arial;\r\n}\r\n\r\n.sidebar-cables {\r\n    --sidebar-color: #07f78c;\r\n    --sidebar-width: 220px;\r\n    --sidebar-border-radius: 10px;\r\n    --sidebar-monospace-font-stack: \"SFMono-Regular\", Consolas, \"Liberation Mono\", Menlo, Courier, monospace;\r\n    --sidebar-hover-transition-time: .2s;\r\n\r\n    position: absolute;\r\n    top: 15px;\r\n    left: 15px;\r\n    border-radius: var(--sidebar-border-radius);\r\n    z-index: 100000;\r\n    width: var(--sidebar-width);\r\n    max-height: 100%;\r\n    box-sizing: border-box;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    font-size: 13px;\r\n    line-height: 1em; /* prevent emojis from breaking height of the title */\r\n}\r\n\r\n.sidebar-cables::selection {\r\n    background-color: var(--sidebar-color);\r\n    color: #EEEEEE;\r\n}\r\n\r\n.sidebar-cables::-webkit-scrollbar {\r\n    background-color: transparent;\r\n    --cables-scrollbar-width: 8px;\r\n    width: var(--cables-scrollbar-width);\r\n}\r\n\r\n.sidebar-cables::-webkit-scrollbar-track {\r\n    background-color: transparent;\r\n    width: var(--cables-scrollbar-width);\r\n}\r\n\r\n.sidebar-cables::-webkit-scrollbar-thumb {\r\n    background-color: #333333;\r\n    border-radius: 4px;\r\n    width: var(--cables-scrollbar-width);\r\n}\r\n\r\n.sidebar-cables--closed {\r\n    width: auto;\r\n}\r\n\r\n.sidebar__close-button {\r\n    background-color: #222;\r\n    /*-webkit-user-select: none;  */\r\n    /*-moz-user-select: none;     */\r\n    /*-ms-user-select: none;      */\r\n    /*user-select: none;          */\r\n    /*transition: background-color var(--sidebar-hover-transition-time);*/\r\n    /*color: #CCCCCC;*/\r\n    height: 2px;\r\n    /*border-bottom:20px solid #222;*/\r\n\r\n    /*box-sizing: border-box;*/\r\n    /*padding-top: 2px;*/\r\n    /*text-align: center;*/\r\n    /*cursor: pointer;*/\r\n    /*border-radius: 0 0 var(--sidebar-border-radius) var(--sidebar-border-radius);*/\r\n    /*opacity: 1.0;*/\r\n    /*transition: opacity 0.3s;*/\r\n    /*overflow: hidden;*/\r\n}\r\n\r\n.sidebar__close-button-icon {\r\n    display: inline-block;\r\n    /*opacity: 0;*/\r\n    width: 20px;\r\n    height: 20px;\r\n    /*position: relative;*/\r\n    /*top: -1px;*/\r\n\r\n\r\n}\r\n\r\n.sidebar--closed {\r\n    width: auto;\r\n    margin-right: 20px;\r\n}\r\n\r\n.sidebar--closed .sidebar__close-button {\r\n    margin-top: 8px;\r\n    margin-left: 8px;\r\n    padding:10px;\r\n\r\n    height: 25px;\r\n    width:25px;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n    opacity: 0.3;\r\n    background-repeat: no-repeat;\r\n    background-position: center center;\r\n    transform:rotate(180deg);\r\n}\r\n\r\n.sidebar--closed .sidebar__group\r\n{\r\n    display:none;\r\n\r\n}\r\n.sidebar--closed .sidebar__close-button-icon {\r\n    background-position: 0px 0px;\r\n}\r\n\r\n.sidebar__close-button:hover {\r\n    background-color: #111111;\r\n    opacity: 1.0 !important;\r\n}\r\n\r\n/*\r\n * SIDEBAR ITEMS\r\n */\r\n\r\n.sidebar__items {\r\n    /* max-height: 1000px; */\r\n    /* transition: max-height 0.5;*/\r\n    background-color: #222;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.sidebar--closed .sidebar__items {\r\n    /* max-height: 0; */\r\n    height: 0;\r\n    display: none;\r\n    pointer-interactions: none;\r\n}\r\n\r\n.sidebar__item__right {\r\n    float: right;\r\n}\r\n\r\n/*\r\n * SIDEBAR GROUP\r\n */\r\n\r\n.sidebar__group {\r\n    /*background-color: #1A1A1A;*/\r\n    overflow: hidden;\r\n    box-sizing: border-box;\r\n    animate: height;\r\n    /*background-color: #151515;*/\r\n    /* max-height: 1000px; */\r\n    /* transition: max-height 0.5s; */\r\n--sidebar-group-header-height: 33px;\r\n}\r\n\r\n.sidebar__group-items\r\n{\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.sidebar__group--closed {\r\n    /* max-height: 13px; */\r\n    height: var(--sidebar-group-header-height);\r\n}\r\n\r\n.sidebar__group-header {\r\n    box-sizing: border-box;\r\n    color: #EEEEEE;\r\n    background-color: #151515;\r\n    -webkit-user-select: none;  /* Chrome all / Safari all */\r\n    -moz-user-select: none;     /* Firefox all */\r\n    -ms-user-select: none;      /* IE 10+ */\r\n    user-select: none;          /* Likely future */\r\n\r\n    /*height: 100%;//var(--sidebar-group-header-height);*/\r\n\r\n    padding-top: 7px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.08em;\r\n    cursor: pointer;\r\n    /*transition: background-color var(--sidebar-hover-transition-time);*/\r\n    position: relative;\r\n}\r\n\r\n.sidebar__group-header:hover {\r\n  background-color: #111111;\r\n}\r\n\r\n.sidebar__group-header-title {\r\n  /*float: left;*/\r\n  overflow: hidden;\r\n  padding: 0 15px;\r\n  padding-top:5px;\r\n  padding-bottom:10px;\r\n  font-weight:bold;\r\n}\r\n\r\n.sidebar__group-header-undo {\r\n    float: right;\r\n    overflow: hidden;\r\n    padding-right: 15px;\r\n    padding-top:5px;\r\n    font-weight:bold;\r\n  }\r\n\r\n.sidebar__group-header-icon {\r\n    width: 17px;\r\n    height: 14px;\r\n    background-repeat: no-repeat;\r\n    display: inline-block;\r\n    position: absolute;\r\n    background-size: cover;\r\n\r\n    /* icon open */\r\n    /* feather icon: chevron up */\r\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tdXAiPjxwb2x5bGluZSBwb2ludHM9IjE4IDE1IDEyIDkgNiAxNSI+PC9wb2x5bGluZT48L3N2Zz4=);\r\n    top: 4px;\r\n    right: 5px;\r\n    opacity: 0.0;\r\n    transition: opacity 0.3;\r\n}\r\n\r\n.sidebar__group-header:hover .sidebar__group-header-icon {\r\n    opacity: 1.0;\r\n}\r\n\r\n/* icon closed */\r\n.sidebar__group--closed .sidebar__group-header-icon {\r\n    /* feather icon: chevron down */\r\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biI+PHBvbHlsaW5lIHBvaW50cz0iNiA5IDEyIDE1IDE4IDkiPjwvcG9seWxpbmU+PC9zdmc+);\r\n    top: 4px;\r\n    right: 5px;\r\n}\r\n\r\n/*\r\n * SIDEBAR ITEM\r\n */\r\n\r\n.sidebar__item\r\n{\r\n    box-sizing: border-box;\r\n    padding: 7px;\r\n    padding-left:15px;\r\n    padding-right:15px;\r\n\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\n.sidebar__item-label {\r\n    display: inline-block;\r\n    -webkit-user-select: none;  /* Chrome all / Safari all */\r\n    -moz-user-select: none;     /* Firefox all */\r\n    -ms-user-select: none;      /* IE 10+ */\r\n    user-select: none;          /* Likely future */\r\n    width: calc(50% - 7px);\r\n    margin-right: 7px;\r\n    margin-top: 2px;\r\n    text-overflow: ellipsis;\r\n    /* overflow: hidden; */\r\n}\r\n\r\n.sidebar__item-value-label {\r\n    font-family: var(--sidebar-monospace-font-stack);\r\n    display: inline-block;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    max-width: 60%;\r\n}\r\n\r\n.sidebar__item-value-label::selection {\r\n    background-color: var(--sidebar-color);\r\n    color: #EEEEEE;\r\n}\r\n\r\n.sidebar__item + .sidebar__item,\r\n.sidebar__item + .sidebar__group,\r\n.sidebar__group + .sidebar__item,\r\n.sidebar__group + .sidebar__group {\r\n    /*border-top: 1px solid #272727;*/\r\n}\r\n\r\n/*\r\n * SIDEBAR ITEM TOGGLE\r\n */\r\n\r\n/*.sidebar__toggle */\r\n.icon_toggle{\r\n    cursor: pointer;\r\n}\r\n\r\n.sidebar__toggle-input {\r\n    --sidebar-toggle-input-color: #CCCCCC;\r\n    --sidebar-toggle-input-color-hover: #EEEEEE;\r\n    --sidebar-toggle-input-border-size: 2px;\r\n    display: inline;\r\n    float: right;\r\n    box-sizing: border-box;\r\n    border-radius: 50%;\r\n    /*outline-style: solid;*/\r\n    /*outline-color:red;*/\r\n    cursor: pointer;\r\n    --toggle-size: 11px;\r\n    margin-top: 2px;\r\n    background-color: transparent !important;\r\n    border: var(--sidebar-toggle-input-border-size) solid var(--sidebar-toggle-input-color);\r\n    width: var(--toggle-size);\r\n    height: var(--toggle-size);\r\n    transition: background-color var(--sidebar-hover-transition-time);\r\n    transition: border-color var(--sidebar-hover-transition-time);\r\n}\r\n.sidebar__toggle:hover .sidebar__toggle-input {\r\n    border-color: var(--sidebar-toggle-input-color-hover);\r\n}\r\n\r\n.sidebar__toggle .sidebar__item-value-label {\r\n    -webkit-user-select: none;  /* Chrome all / Safari all */\r\n    -moz-user-select: none;     /* Firefox all */\r\n    -ms-user-select: none;      /* IE 10+ */\r\n    user-select: none;          /* Likely future */\r\n    max-width: calc(50% - 12px);\r\n}\r\n.sidebar__toggle-input::after { clear: both; }\r\n\r\n.sidebar__toggle--active .icon_toggle\r\n{\r\n\r\n    background-image: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE1cHgiIHdpZHRoPSIzMHB4IiBmaWxsPSIjMDZmNzhiIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGcgZGlzcGxheT0ibm9uZSI+PGcgZGlzcGxheT0iaW5saW5lIj48Zz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzA2Zjc4YiIgZD0iTTMwLDI3QzE3LjM1LDI3LDcsMzcuMzUsNyw1MGwwLDBjMCwxMi42NSwxMC4zNSwyMywyMywyM2g0MCBjMTIuNjUsMCwyMy0xMC4zNSwyMy0yM2wwLDBjMC0xMi42NS0xMC4zNS0yMy0yMy0yM0gzMHogTTcwLDY3Yy05LjM4OSwwLTE3LTcuNjEtMTctMTdzNy42MTEtMTcsMTctMTdzMTcsNy42MSwxNywxNyAgICAgUzc5LjM4OSw2Nyw3MCw2N3oiPjwvcGF0aD48L2c+PC9nPjwvZz48Zz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMwLDI3QzE3LjM1LDI3LDcsMzcuMzUsNyw1MGwwLDBjMCwxMi42NSwxMC4zNSwyMywyMywyM2g0MCAgIGMxMi42NSwwLDIzLTEwLjM1LDIzLTIzbDAsMGMwLTEyLjY1LTEwLjM1LTIzLTIzLTIzSDMweiBNNzAsNjdjLTkuMzg5LDAtMTctNy42MS0xNy0xN3M3LjYxMS0xNywxNy0xN3MxNyw3LjYxLDE3LDE3ICAgUzc5LjM4OSw2Nyw3MCw2N3oiPjwvcGF0aD48L2c+PGcgZGlzcGxheT0ibm9uZSI+PGcgZGlzcGxheT0iaW5saW5lIj48cGF0aCBmaWxsPSIjMDZmNzhiIiBzdHJva2U9IiMwNmY3OGIiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNNyw1MGMwLDEyLjY1LDEwLjM1LDIzLDIzLDIzaDQwICAgIGMxMi42NSwwLDIzLTEwLjM1LDIzLTIzbDAsMGMwLTEyLjY1LTEwLjM1LTIzLTIzLTIzSDMwQzE3LjM1LDI3LDcsMzcuMzUsNyw1MEw3LDUweiI+PC9wYXRoPjwvZz48Y2lyY2xlIGRpc3BsYXk9ImlubGluZSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiMwNmY3OGIiIHN0cm9rZT0iIzA2Zjc4YiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGN4PSI3MCIgY3k9IjUwIiByPSIxNyI+PC9jaXJjbGU+PC9nPjxnIGRpc3BsYXk9Im5vbmUiPjxwYXRoIGRpc3BsYXk9ImlubGluZSIgZD0iTTcwLDI1SDMwQzE2LjIxNSwyNSw1LDM2LjIxNSw1LDUwczExLjIxNSwyNSwyNSwyNWg0MGMxMy43ODUsMCwyNS0xMS4yMTUsMjUtMjVTODMuNzg1LDI1LDcwLDI1eiBNNzAsNzEgICBIMzBDMTguNDIxLDcxLDksNjEuNTc5LDksNTBzOS40MjEtMjEsMjEtMjFoNDBjMTEuNTc5LDAsMjEsOS40MjEsMjEsMjFTODEuNTc5LDcxLDcwLDcxeiBNNzAsMzFjLTEwLjQ3NywwLTE5LDguNTIzLTE5LDE5ICAgczguNTIzLDE5LDE5LDE5czE5LTguNTIzLDE5LTE5UzgwLjQ3NywzMSw3MCwzMXogTTcwLDY1Yy04LjI3MSwwLTE1LTYuNzI5LTE1LTE1czYuNzI5LTE1LDE1LTE1czE1LDYuNzI5LDE1LDE1Uzc4LjI3MSw2NSw3MCw2NXoiPjwvcGF0aD48L2c+PC9zdmc+);\r\n    opacity: 1;\r\n    transform: rotate(0deg);\r\n    background-position: -4px -9px;\r\n}\r\n\r\n\r\n.icon_toggle\r\n{\r\n    float: right;\r\n    width:40px;\r\n    height:18px;\r\n    background-image: url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE1cHgiIHdpZHRoPSIzMHB4IiBmaWxsPSIjYWFhYWFhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAwIDEwMCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGcgZGlzcGxheT0ibm9uZSI+PGcgZGlzcGxheT0iaW5saW5lIj48Zz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2FhYWFhYSIgZD0iTTMwLDI3QzE3LjM1LDI3LDcsMzcuMzUsNyw1MGwwLDBjMCwxMi42NSwxMC4zNSwyMywyMywyM2g0MCBjMTIuNjUsMCwyMy0xMC4zNSwyMy0yM2wwLDBjMC0xMi42NS0xMC4zNS0yMy0yMy0yM0gzMHogTTcwLDY3Yy05LjM4OSwwLTE3LTcuNjEtMTctMTdzNy42MTEtMTcsMTctMTdzMTcsNy42MSwxNywxNyAgICAgUzc5LjM4OSw2Nyw3MCw2N3oiPjwvcGF0aD48L2c+PC9nPjwvZz48Zz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMwLDI3QzE3LjM1LDI3LDcsMzcuMzUsNyw1MGwwLDBjMCwxMi42NSwxMC4zNSwyMywyMywyM2g0MCAgIGMxMi42NSwwLDIzLTEwLjM1LDIzLTIzbDAsMGMwLTEyLjY1LTEwLjM1LTIzLTIzLTIzSDMweiBNNzAsNjdjLTkuMzg5LDAtMTctNy42MS0xNy0xN3M3LjYxMS0xNywxNy0xN3MxNyw3LjYxLDE3LDE3ICAgUzc5LjM4OSw2Nyw3MCw2N3oiPjwvcGF0aD48L2c+PGcgZGlzcGxheT0ibm9uZSI+PGcgZGlzcGxheT0iaW5saW5lIj48cGF0aCBmaWxsPSIjYWFhYWFhIiBzdHJva2U9IiNhYWFhYWEiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBkPSJNNyw1MGMwLDEyLjY1LDEwLjM1LDIzLDIzLDIzaDQwICAgIGMxMi42NSwwLDIzLTEwLjM1LDIzLTIzbDAsMGMwLTEyLjY1LTEwLjM1LTIzLTIzLTIzSDMwQzE3LjM1LDI3LDcsMzcuMzUsNyw1MEw3LDUweiI+PC9wYXRoPjwvZz48Y2lyY2xlIGRpc3BsYXk9ImlubGluZSIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IiNhYWFhYWEiIHN0cm9rZT0iI2FhYWFhYSIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGN4PSI3MCIgY3k9IjUwIiByPSIxNyI+PC9jaXJjbGU+PC9nPjxnIGRpc3BsYXk9Im5vbmUiPjxwYXRoIGRpc3BsYXk9ImlubGluZSIgZD0iTTcwLDI1SDMwQzE2LjIxNSwyNSw1LDM2LjIxNSw1LDUwczExLjIxNSwyNSwyNSwyNWg0MGMxMy43ODUsMCwyNS0xMS4yMTUsMjUtMjVTODMuNzg1LDI1LDcwLDI1eiBNNzAsNzEgICBIMzBDMTguNDIxLDcxLDksNjEuNTc5LDksNTBzOS40MjEtMjEsMjEtMjFoNDBjMTEuNTc5LDAsMjEsOS40MjEsMjEsMjFTODEuNTc5LDcxLDcwLDcxeiBNNzAsMzFjLTEwLjQ3NywwLTE5LDguNTIzLTE5LDE5ICAgczguNTIzLDE5LDE5LDE5czE5LTguNTIzLDE5LTE5UzgwLjQ3NywzMSw3MCwzMXogTTcwLDY1Yy04LjI3MSwwLTE1LTYuNzI5LTE1LTE1czYuNzI5LTE1LDE1LTE1czE1LDYuNzI5LDE1LDE1Uzc4LjI3MSw2NSw3MCw2NXoiPjwvcGF0aD48L2c+PC9zdmc+);\r\n    background-size: 50px 37px;\r\n    background-position: -6px -10px;\r\n    transform: rotate(180deg);\r\n    opacity: 0.4;\r\n}\r\n\r\n\r\n\r\n/*.sidebar__toggle--active .sidebar__toggle-input {*/\r\n/*    transition: background-color var(--sidebar-hover-transition-time);*/\r\n/*    background-color: var(--sidebar-toggle-input-color);*/\r\n/*}*/\r\n/*.sidebar__toggle--active .sidebar__toggle-input:hover*/\r\n/*{*/\r\n/*    background-color: var(--sidebar-toggle-input-color-hover);*/\r\n/*    border-color: var(--sidebar-toggle-input-color-hover);*/\r\n/*    transition: background-color var(--sidebar-hover-transition-time);*/\r\n/*    transition: border-color var(--sidebar-hover-transition-time);*/\r\n/*}*/\r\n\r\n/*\r\n * SIDEBAR ITEM BUTTON\r\n */\r\n\r\n.sidebar__button {}\r\n\r\n.sidebar__button-input:active\r\n{\r\n    background-color: #555 !important;\r\n}\r\n\r\n.sidebar__button-input {\r\n    -webkit-user-select: none;  /* Chrome all / Safari all */\r\n    -moz-user-select: none;     /* Firefox all */\r\n    -ms-user-select: none;      /* IE 10+ */\r\n    user-select: none;          /* Likely future */\r\n    min-height: 24px;\r\n    background-color: transparent;\r\n    color: #CCCCCC;\r\n    box-sizing: border-box;\r\n    padding-top: 3px;\r\n    text-align: center;\r\n    border-radius: 125px;\r\n    border:2px solid #555;\r\n    cursor: pointer;\r\n    padding-bottom: 3px;\r\n    display:block;\r\n}\r\n\r\n.sidebar__button-input.plus, .sidebar__button-input.minus {\r\n    display: inline-block;\r\n    min-width: 20px;\r\n}\r\n\r\n.sidebar__button-input:hover {\r\n  background-color: #333;\r\n  border:2px solid var(--sidebar-color);\r\n}\r\n\r\n/*\r\n * VALUE DISPLAY (shows a value)\r\n */\r\n\r\n.sidebar__value-display {}\r\n\r\n/*\r\n * SLIDER\r\n */\r\n\r\n.sidebar__slider {\r\n    --sidebar-slider-input-height: 3px;\r\n}\r\n\r\n.sidebar__slider-input-wrapper {\r\n    width: 100%;\r\n\r\n    margin-top: 8px;\r\n    position: relative;\r\n}\r\n\r\n.sidebar__slider-input {\r\n    -webkit-appearance: none;\r\n    appearance: none;\r\n    margin: 0;\r\n    width: 100%;\r\n    height: var(--sidebar-slider-input-height);\r\n    background: #555;\r\n    cursor: pointer;\r\n    /*outline: 0;*/\r\n\r\n    -webkit-transition: .2s;\r\n    transition: background-color .2s;\r\n    border: none;\r\n}\r\n\r\n.sidebar__slider-input:focus, .sidebar__slider-input:hover {\r\n    border: none;\r\n}\r\n\r\n.sidebar__slider-input-active-track {\r\n    user-select: none;\r\n    position: absolute;\r\n    z-index: 11;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: var(--sidebar-color);\r\n    pointer-events: none;\r\n    height: var(--sidebar-slider-input-height);\r\n    max-width: 100%;\r\n}\r\n\r\n/* Mouse-over effects */\r\n.sidebar__slider-input:hover {\r\n    /*background-color: #444444;*/\r\n}\r\n\r\n/*.sidebar__slider-input::-webkit-progress-value {*/\r\n/*    background-color: green;*/\r\n/*    color:green;*/\r\n\r\n/*    }*/\r\n\r\n/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */\r\n\r\n.sidebar__slider-input::-moz-range-thumb\r\n{\r\n    position: absolute;\r\n    height: 15px;\r\n    width: 15px;\r\n    z-index: 900 !important;\r\n    border-radius: 20px !important;\r\n    cursor: pointer;\r\n    background: var(--sidebar-color) !important;\r\n    user-select: none;\r\n\r\n}\r\n\r\n.sidebar__slider-input::-webkit-slider-thumb\r\n{\r\n    position: relative;\r\n    appearance: none;\r\n    -webkit-appearance: none;\r\n    user-select: none;\r\n    height: 15px;\r\n    width: 15px;\r\n    display: block;\r\n    z-index: 900 !important;\r\n    border: 0;\r\n    border-radius: 20px !important;\r\n    cursor: pointer;\r\n    background: #777 !important;\r\n}\r\n\r\n.sidebar__slider-input:hover ::-webkit-slider-thumb {\r\n    background-color: #EEEEEE !important;\r\n}\r\n\r\n/*.sidebar__slider-input::-moz-range-thumb {*/\r\n\r\n/*    width: 0 !important;*/\r\n/*    height: var(--sidebar-slider-input-height);*/\r\n/*    background: #EEEEEE;*/\r\n/*    cursor: pointer;*/\r\n/*    border-radius: 0 !important;*/\r\n/*    border: none;*/\r\n/*    outline: 0;*/\r\n/*    z-index: 100 !important;*/\r\n/*}*/\r\n\r\n.sidebar__slider-input::-moz-range-track {\r\n    background-color: transparent;\r\n    z-index: 11;\r\n}\r\n\r\n.sidebar__slider input[type=text],\r\n.sidebar__slider input[type=paddword]\r\n{\r\n    box-sizing: border-box;\r\n    /*background-color: #333333;*/\r\n    text-align: right;\r\n    color: #BBBBBB;\r\n    display: inline-block;\r\n    background-color: transparent !important;\r\n\r\n    width: 40%;\r\n    height: 18px;\r\n    /*outline: none;*/\r\n    border: none;\r\n    border-radius: 0;\r\n    padding: 0 0 0 4px !important;\r\n    margin: 0;\r\n}\r\n\r\n.sidebar__slider input[type=text]:active,\r\n.sidebar__slider input[type=text]:focus,\r\n.sidebar__slider input[type=text]:hover\r\n.sidebar__slider input[type=password]:active,\r\n.sidebar__slider input[type=password]:focus,\r\n.sidebar__slider input[type=password]:hover\r\n{\r\n\r\n    color: #EEEEEE;\r\n}\r\n\r\n/*\r\n * TEXT / DESCRIPTION\r\n */\r\n\r\n.sidebar__text .sidebar__item-label {\r\n    width: auto;\r\n    display: block;\r\n    max-height: none;\r\n    margin-right: 0;\r\n    line-height: 1.1em;\r\n}\r\n\r\n/*\r\n * SIDEBAR INPUT\r\n */\r\n.sidebar__text-input textarea,\r\n.sidebar__text-input input[type=date],\r\n.sidebar__text-input input[type=datetime-local],\r\n.sidebar__text-input input[type=text],\r\n.sidebar__text-input input[type=password] {\r\n    box-sizing: border-box;\r\n    background-color: #333333;\r\n    color: #BBBBBB;\r\n    display: inline-block;\r\n    width: 50%;\r\n    height: 18px;\r\n\r\n\r\n    border: none;\r\n    border-radius: 0;\r\n    border:1px solid #666;\r\n    padding: 0 0 0 4px !important;\r\n    margin: 0;\r\n    color-scheme: dark;\r\n}\r\n\r\n.sidebar__text-input textarea:focus::placeholder {\r\n  color: transparent;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.sidebar__color-picker .sidebar__item-label\r\n{\r\n    width:45%;\r\n}\r\n\r\n.sidebar__text-input textarea,\r\n.sidebar__text-input input[type=text]:active,\r\n.sidebar__text-input input[type=text]:focus,\r\n.sidebar__text-input input[type=text]:hover,\r\n.sidebar__text-input input[type=password]:active,\r\n.sidebar__text-input input[type=password]:focus,\r\n.sidebar__text-input input[type=password]:hover {\r\n    background-color: transparent;\r\n    color: #EEEEEE;\r\n\r\n}\r\n\r\n.sidebar__text-input textarea\r\n{\r\n    margin-top:10px;\r\n    height:60px;\r\n    width:100%;\r\n}\r\n\r\n/*\r\n * SIDEBAR SELECT\r\n */\r\n\r\n\r\n\r\n .sidebar__select {}\r\n .sidebar__select-select {\r\n    color: #BBBBBB;\r\n    /*-webkit-appearance: none;*/\r\n    /*-moz-appearance: none;*/\r\n    appearance: none;\r\n    /*box-sizing: border-box;*/\r\n    width: 50%;\r\n    /*height: 20px;*/\r\n    background-color: #333333;\r\n    /*background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM4ODg4ODgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLWNoZXZyb24tZG93biI+PHBvbHlsaW5lIHBvaW50cz0iNiA5IDEyIDE1IDE4IDkiPjwvcG9seWxpbmU+PC9zdmc+);*/\r\n    background-repeat: no-repeat;\r\n    background-position: right center;\r\n    background-size: 16px 16px;\r\n    margin: 0;\r\n    /*padding: 0 2 2 6px;*/\r\n    border-radius: 5px;\r\n    border: 1px solid #777;\r\n    background-color: #444;\r\n    cursor: pointer;\r\n    /*outline: none;*/\r\n    padding-left: 5px;\r\n\r\n }\r\n\r\n.sidebar__select-select:hover,\r\n.sidebar__select-select:active,\r\n.sidebar__select-select:inactive {\r\n    background-color: #444444;\r\n    color: #EEEEEE;\r\n}\r\n\r\n/*.sidebar__select-select option*/\r\n/*{*/\r\n/*    background-color: #444444;*/\r\n/*    color: #bbb;*/\r\n/*}*/\r\n\r\n.sidebar__select-select option:checked\r\n{\r\n    background-color: #000;\r\n    color: #FFF;\r\n}\r\n\r\n\r\n/*\r\n * COLOR PICKER\r\n */\r\n\r\n\r\n .sidebar__color-picker input[type=text] {\r\n    box-sizing: border-box;\r\n    background-color: #333333;\r\n    color: #BBBBBB;\r\n    display: inline-block;\r\n    width: calc(50% - 21px); /* 50% minus space of picker circle */\r\n    height: 18px;\r\n    /*outline: none;*/\r\n    border: none;\r\n    border-radius: 0;\r\n    padding: 0 0 0 4px !important;\r\n    margin: 0;\r\n    margin-right: 7px;\r\n}\r\n\r\n.sidebar__color-picker input[type=text]:active,\r\n.sidebar__color-picker input[type=text]:focus,\r\n.sidebar__color-picker input[type=text]:hover {\r\n    background-color: #444444;\r\n    color: #EEEEEE;\r\n}\r\n\r\ndiv.sidebar__color-picker-color-input,\r\n.sidebar__color-picker input[type=color],\r\n.sidebar__palette-picker input[type=color] {\r\n    display: inline-block;\r\n    border-radius: 100%;\r\n    height: 14px;\r\n    width: 14px;\r\n\r\n    padding: 0;\r\n    border: none;\r\n    /*border:2px solid red;*/\r\n    border-color: transparent;\r\n    outline: none;\r\n    background: none;\r\n    appearance: none;\r\n    -moz-appearance: none;\r\n    -webkit-appearance: none;\r\n    cursor: pointer;\r\n    position: relative;\r\n    top: 3px;\r\n}\r\n.sidebar__color-picker input[type=color]:focus,\r\n.sidebar__palette-picker input[type=color]:focus {\r\n    outline: none;\r\n}\r\n.sidebar__color-picker input[type=color]::-moz-color-swatch,\r\n.sidebar__palette-picker input[type=color]::-moz-color-swatch {\r\n    border: none;\r\n}\r\n.sidebar__color-picker input[type=color]::-webkit-color-swatch-wrapper,\r\n.sidebar__palette-picker input[type=color]::-webkit-color-swatch-wrapper {\r\n    padding: 0;\r\n}\r\n.sidebar__color-picker input[type=color]::-webkit-color-swatch,\r\n.sidebar__palette-picker input[type=color]::-webkit-color-swatch {\r\n    border: none;\r\n    border-radius: 100%;\r\n}\r\n\r\n/*\r\n * Palette Picker\r\n */\r\n.sidebar__palette-picker .sidebar__palette-picker-color-input.first {\r\n    margin-left: 0;\r\n}\r\n.sidebar__palette-picker .sidebar__palette-picker-color-input.last {\r\n    margin-right: 0;\r\n}\r\n.sidebar__palette-picker .sidebar__palette-picker-color-input {\r\n    margin: 0 4px;\r\n}\r\n\r\n.sidebar__palette-picker .circlebutton {\r\n    width: 14px;\r\n    height: 14px;\r\n    border-radius: 1em;\r\n    display: inline-block;\r\n    top: 3px;\r\n    position: relative;\r\n}\r\n\r\n/*\r\n * Preset\r\n */\r\n.sidebar__item-presets-preset\r\n{\r\n    padding:4px;\r\n    cursor:pointer;\r\n    padding-left:8px;\r\n    padding-right:8px;\r\n    margin-right:4px;\r\n    background-color:#444;\r\n}\r\n\r\n.sidebar__item-presets-preset:hover\r\n{\r\n    background-color:#666;\r\n}\r\n\r\n.sidebar__greyout\r\n{\r\n    background: #222;\r\n    opacity: 0.8;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    z-index: 1000;\r\n    right: 0;\r\n    top: 0;\r\n}\r\n\r\n.sidebar_tabs\r\n{\r\n    background-color: #151515;\r\n    padding-bottom: 0px;\r\n}\r\n\r\n.sidebar_switchs\r\n{\r\n    float: right;\r\n}\r\n\r\n.sidebar_tab\r\n{\r\n    float:left;\r\n    background-color: #151515;\r\n    border-bottom:1px solid transparent;\r\n    padding-right:7px;\r\n    padding-left:7px;\r\n    padding-bottom: 5px;\r\n    padding-top: 5px;\r\n    cursor:pointer;\r\n}\r\n\r\n.sidebar_tab_active\r\n{\r\n    background-color: #272727;\r\n    color:white;\r\n}\r\n\r\n.sidebar_tab:hover\r\n{\r\n    border-bottom:1px solid #777;\r\n    color:white;\r\n}\r\n\r\n\r\n.sidebar_switch\r\n{\r\n    float:left;\r\n    background-color: #444;\r\n    padding-right:7px;\r\n    padding-left:7px;\r\n    padding-bottom: 5px;\r\n    padding-top: 5px;\r\n    cursor:pointer;\r\n}\r\n\r\n.sidebar_switch:last-child\r\n{\r\n    border-top-right-radius: 7px;\r\n    border-bottom-right-radius: 7px;\r\n}\r\n\r\n.sidebar_switch:first-child\r\n{\r\n    border-top-left-radius: 7px;\r\n    border-bottom-left-radius: 7px;\r\n}\r\n\r\n\r\n.sidebar_switch_active\r\n{\r\n    background-color: #999;\r\n    color:white;\r\n}\r\n\r\n.sidebar_switch:hover\r\n{\r\n    color:white;\r\n}\r\n\r\n.sidebar__text-input-input::focus-visible,\r\n/*.sidebar__text-input-input:active,*/\r\n.sidebar__button-input:focus-visible,\r\n.sidebar__text-input:focus-visible\r\n/*.sidebar__text-input:active*/\r\n{\r\n    outline-style: solid;\r\n    outline-color:white;\r\n    outline-width: 1px;\r\n\r\n}\r\n\r\n",};
// vars
const CSS_ELEMENT_CLASS = "cables-sidebar-style"; /* class for the style element to be generated */
const CSS_ELEMENT_DYNAMIC_CLASS = "cables-sidebar-dynamic-style"; /* things which can be set via op-port, but not attached to the elements themselves, e.g. minimized opacity */
const SIDEBAR_CLASS = "sidebar-cables";
const SIDEBAR_ID = "sidebar" + CABLES.uuid();
const SIDEBAR_ITEMS_CLASS = "sidebar__items";
const SIDEBAR_OPEN_CLOSE_BTN_CLASS = "sidebar__close-button";

const BTN_TEXT_OPEN = ""; // 'Close';
const BTN_TEXT_CLOSED = ""; // 'Show Controls';

let openCloseBtn = null;
let openCloseBtnIcon = null;
let headerTitleText = null;

// inputs
const visiblePort = op.inValueBool("Visible", true);
const opacityPort = op.inValueSlider("Opacity", 1);
const defaultMinimizedPort = op.inValueBool("Default Minimized");
const minimizedOpacityPort = op.inValueSlider("Minimized Opacity", 0.5);
const undoButtonPort = op.inValueBool("Show undo button", false);
const inMinimize = op.inValueBool("Show Minimize", false);

const inTitle = op.inString("Title", "");
const side = op.inValueBool("Side");
const addCss = op.inValueBool("Default CSS", true);

let doc = op.patch.cgl.canvas.ownerDocument;

// outputs
const childrenPort = op.outObject("childs");
childrenPort.setUiAttribs({ "title": "Children" });

const isOpenOut = op.outBool("Opfened");
isOpenOut.setUiAttribs({ "title": "Opened" });

let sidebarEl = doc.querySelector("." + SIDEBAR_ID);
if (!sidebarEl) sidebarEl = initSidebarElement();

const sidebarItemsEl = sidebarEl.querySelector("." + SIDEBAR_ITEMS_CLASS);
childrenPort.set({
    "parentElement": sidebarItemsEl,
    "parentOp": op,
});
onDefaultMinimizedPortChanged();
initSidebarCss();
updateDynamicStyles();

addCss.onChange = () =>
{
    initSidebarCss();
    updateDynamicStyles();
};
visiblePort.onChange = onVisiblePortChange;
opacityPort.onChange = onOpacityPortChange;
defaultMinimizedPort.onChange = onDefaultMinimizedPortChanged;
minimizedOpacityPort.onChange = onMinimizedOpacityPortChanged;
undoButtonPort.onChange = onUndoButtonChange;
op.onDelete = onDelete;

function onMinimizedOpacityPortChanged()
{
    updateDynamicStyles();
}

inMinimize.onChange = updateMinimize;

function updateMinimize(header)
{
    if (!header || header.uiAttribs) header = doc.querySelector(".sidebar-cables .sidebar__group-header");
    if (!header) return;

    const undoButton = doc.querySelector(".sidebar-cables .sidebar__group-header .sidebar__group-header-undo");

    if (inMinimize.get())
    {
        header.classList.add("iconsidebar-chevron-up");
        header.classList.add("iconsidebar-minimizebutton");

        if (undoButton)undoButton.style.marginRight = "20px";
    }
    else
    {
        header.classList.remove("iconsidebar-chevron-up");
        header.classList.remove("iconsidebar-minimizebutton");

        if (undoButton)undoButton.style.marginRight = "initial";
    }
}

side.onChange = function ()
{
    if (!sidebarEl) return;
    if (side.get()) sidebarEl.classList.add("sidebar-cables-right");
    else sidebarEl.classList.remove("sidebar-cables-right");
};

function onUndoButtonChange()
{
    const header = doc.querySelector(".sidebar-cables .sidebar__group-header");
    if (header)
    {
        initUndoButton(header);
    }
}

function initUndoButton(header)
{
    if (header)
    {
        const undoButton = doc.querySelector(".sidebar-cables .sidebar__group-header .sidebar__group-header-undo");
        if (undoButton)
        {
            if (!undoButtonPort.get())
            {
                // header.removeChild(undoButton);
                undoButton.remove();
            }
        }
        else
        {
            if (undoButtonPort.get())
            {
                const headerUndo = doc.createElement("span");
                headerUndo.classList.add("sidebar__group-header-undo");
                headerUndo.classList.add("sidebar-icon-undo");

                headerUndo.addEventListener("click", function (event)
                {
                    event.stopPropagation();
                    const reloadables = doc.querySelectorAll(".sidebar-cables .sidebar__reloadable");
                    const doubleClickEvent = doc.createEvent("MouseEvents");
                    doubleClickEvent.initEvent("dblclick", true, true);
                    reloadables.forEach((reloadable) =>
                    {
                        reloadable.dispatchEvent(doubleClickEvent);
                    });
                });
                header.appendChild(headerUndo);
            }
        }
    }
    updateMinimize(header);
}

function onDefaultMinimizedPortChanged()
{
    if (!openCloseBtn) { return; }
    if (defaultMinimizedPort.get())
    {
        sidebarEl.classList.add("sidebar--closed");
        if (visiblePort.get()) isOpenOut.set(false);
    }
    else
    {
        sidebarEl.classList.remove("sidebar--closed");
        if (visiblePort.get()) isOpenOut.set(true);
    }
}

function onOpacityPortChange()
{
    const opacity = opacityPort.get();
    sidebarEl.style.opacity = opacity;
}

function onVisiblePortChange()
{
    if (!sidebarEl) return;
    if (visiblePort.get())
    {
        sidebarEl.style.display = "block";
        if (!sidebarEl.classList.contains("sidebar--closed")) isOpenOut.set(true);
    }
    else
    {
        sidebarEl.style.display = "none";
        isOpenOut.set(false);
    }
}

side.onChanged = function ()
{

};

/**
 * Some styles cannot be set directly inline, so a dynamic stylesheet is needed.
 * Here hover states can be set later on e.g.
 */
function updateDynamicStyles()
{
    const dynamicStyles = doc.querySelectorAll("." + CSS_ELEMENT_DYNAMIC_CLASS);
    if (dynamicStyles)
    {
        dynamicStyles.forEach(function (e)
        {
            e.parentNode.removeChild(e);
        });
    }

    if (!addCss.get()) return;

    const newDynamicStyle = doc.createElement("style");
    newDynamicStyle.classList.add("cablesEle");
    newDynamicStyle.classList.add(CSS_ELEMENT_DYNAMIC_CLASS);
    let cssText = ".sidebar--closed .sidebar__close-button { ";
    cssText += "opacity: " + minimizedOpacityPort.get();
    cssText += "}";
    const cssTextEl = doc.createTextNode(cssText);
    newDynamicStyle.appendChild(cssTextEl);
    doc.body.appendChild(newDynamicStyle);
}

function initSidebarElement()
{
    const element = doc.createElement("div");
    element.classList.add(SIDEBAR_CLASS);
    element.classList.add(SIDEBAR_ID);
    const canvasWrapper = op.patch.cgl.canvas.parentElement; /* maybe this is bad outside cables!? */

    // header...
    const headerGroup = doc.createElement("div");
    headerGroup.classList.add("sidebar__group");

    element.appendChild(headerGroup);
    const header = doc.createElement("div");
    header.classList.add("sidebar__group-header");

    element.appendChild(header);
    const headerTitle = doc.createElement("span");
    headerTitle.classList.add("sidebar__group-header-title");
    headerTitleText = doc.createElement("span");
    headerTitleText.classList.add("sidebar__group-header-title-text");
    headerTitleText.innerHTML = inTitle.get();
    headerTitle.appendChild(headerTitleText);
    header.appendChild(headerTitle);

    initUndoButton(header);
    updateMinimize(header);

    headerGroup.appendChild(header);
    element.appendChild(headerGroup);
    headerGroup.addEventListener("click", onOpenCloseBtnClick);

    if (!canvasWrapper)
    {
        op.warn("[sidebar] no canvas parentelement found...");
        return;
    }
    canvasWrapper.appendChild(element);
    const items = doc.createElement("div");
    items.classList.add(SIDEBAR_ITEMS_CLASS);
    element.appendChild(items);
    openCloseBtn = doc.createElement("div");
    openCloseBtn.classList.add(SIDEBAR_OPEN_CLOSE_BTN_CLASS);
    openCloseBtn.addEventListener("click", onOpenCloseBtnClick);
    element.appendChild(openCloseBtn);

    return element;
}

inTitle.onChange = function ()
{
    if (headerTitleText)headerTitleText.innerHTML = inTitle.get();
};

function setClosed(b)
{

}

function onOpenCloseBtnClick(ev)
{
    ev.stopPropagation();
    if (!sidebarEl) { op.logError("Sidebar could not be closed..."); return; }
    sidebarEl.classList.toggle("sidebar--closed");
    const btn = ev.target;
    let btnText = BTN_TEXT_OPEN;
    if (sidebarEl.classList.contains("sidebar--closed"))
    {
        btnText = BTN_TEXT_CLOSED;
        isOpenOut.set(false);
    }
    else
    {
        isOpenOut.set(true);
    }
}

function initSidebarCss()
{
    const cssElements = doc.querySelectorAll("." + CSS_ELEMENT_CLASS);
    // remove old script tag
    if (cssElements)
    {
        cssElements.forEach((e) =>
        {
            e.parentNode.removeChild(e);
        });
    }

    if (!addCss.get()) return;

    const newStyle = doc.createElement("style");

    newStyle.innerHTML = attachments.style_css;
    newStyle.classList.add(CSS_ELEMENT_CLASS);
    newStyle.classList.add("cablesEle");
    doc.body.appendChild(newStyle);
}

function onDelete()
{
    removeElementFromDOM(sidebarEl);
}

function removeElementFromDOM(el)
{
    if (el && el.parentNode && el.parentNode.removeChild) el.parentNode.removeChild(el);
}

}
};

CABLES.OPS["5a681c35-78ce-4cb3-9858-bc79c34c6819"]={f:Ops.Sidebar.Sidebar,objName:"Ops.Sidebar.Sidebar"};




// **************************************************************
// 
// Ops.Ui.Area
// 
// **************************************************************

Ops.Ui.Area= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inTitle = op.inString("Title", ""),
    inDelete = op.inTriggerButton("Delete");

inTitle.setUiAttribs({ "hidePort": true });

op.setUiAttrib({ "hasArea": true });

op.init =
    inTitle.onChange =
    op.onLoaded = update;

update();

function update()
{
    if (CABLES.UI)
    {
        gui.savedState.setUnSaved("areaOp", op.getSubPatch());
        op.uiAttr(
            {
                "comment_title": inTitle.get() || " "
            });

        op.name = inTitle.get();
    }
}

inDelete.onTriggered = () =>
{
    op.patch.deleteOp(op.id);
};

}
};

CABLES.OPS["38f79614-b0de-4960-8da5-2827e7f43415"]={f:Ops.Ui.Area,objName:"Ops.Ui.Area"};




// **************************************************************
// 
// Ops.Gl.BlendMode
// 
// **************************************************************

Ops.Gl.BlendMode= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    exec = op.inTrigger("Render"),
    inBlend = op.inValueSelect("Blendmode", ["None", "Normal", "Add", "Subtract", "Multiply"], "Normal"),
    inPremul = op.inValueBool("Premultiplied"),
    next = op.outTrigger("Next");

const cgl = op.patch.cgl;
let blendMode = 0;
inBlend.onChange = update;
update();

function update()
{
    if (inBlend.get() == "Normal")blendMode = CGL.BLEND_NORMAL;
    else if (inBlend.get() == "Add")blendMode = CGL.BLEND_ADD;
    else if (inBlend.get() == "Subtract")blendMode = CGL.BLEND_SUB;
    else if (inBlend.get() == "Multiply")blendMode = CGL.BLEND_MUL;
    else blendMode = CGL.BLEND_NONE;

    if (CABLES.UI)
    {
        let blstr = "";
        if (inBlend.get() == "Normal")blstr = "";
        else if (inBlend.get() == "Add")blstr = "Add";
        else if (inBlend.get() == "Subtract")blstr = "Sub";
        else if (inBlend.get() == "Multiply")blstr = "Mul";
        else blstr = "None";

        op.setUiAttrib({ "extendTitle": blstr });
    }
}

exec.onTriggered = function ()
{
    op.checkGraphicsApi();

    cgl.pushBlendMode(blendMode, inPremul.get());
    cgl.pushBlend(blendMode != CGL.BLEND_NONE);
    next.trigger();
    cgl.popBlend();
    cgl.popBlendMode();
    cgl.gl.blendEquationSeparate(cgl.gl.FUNC_ADD, cgl.gl.FUNC_ADD);
    cgl.gl.blendFuncSeparate(cgl.gl.SRC_ALPHA, cgl.gl.ONE_MINUS_SRC_ALPHA, cgl.gl.ONE, cgl.gl.ONE_MINUS_SRC_ALPHA);
};

}
};

CABLES.OPS["ce0fff72-1438-4373-924f-e1d0f78b053f"]={f:Ops.Gl.BlendMode,objName:"Ops.Gl.BlendMode"};




// **************************************************************
// 
// Ops.Math.Sum
// 
// **************************************************************

Ops.Math.Sum= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    number1 = op.inValueFloat("number1", 0),
    number2 = op.inValueFloat("number2", 0),
    result = op.outNumber("result");

op.setUiAttribs({ "mathTitle": true });

number1.onChange =
number2.onChange = exec;
exec();

function exec()
{
    const v = number1.get() + number2.get();
    if (!isNaN(v))
        result.set(v);
}

}
};

CABLES.OPS["c8fb181e-0b03-4b41-9e55-06b6267bc634"]={f:Ops.Math.Sum,objName:"Ops.Math.Sum"};




// **************************************************************
// 
// Ops.Math.TriggerRandomNumber_v2
// 
// **************************************************************

Ops.Math.TriggerRandomNumber_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    exe = op.inTriggerButton("Generate"),
    min = op.inValue("min", 0),
    max = op.inValue("max", 1),
    outTrig = op.outTrigger("next"),
    result = op.outNumber("result"),
    inInteger = op.inValueBool("Integer", false),
    noDupe = op.inValueBool("No consecutive duplicates", false);

op.setPortGroup("Value Range", [min, max]);

exe.onTriggered =
    max.onChange =
    min.onChange =
    inInteger.onChange = genRandom;

genRandom();

function genRandom()
{
    let r = (Math.random() * (max.get() - min.get())) + min.get();

    if (inInteger.get())r = randInt();

    if (min.get() != max.get() && max.get() > min.get())
        while (noDupe.get() && r == result.get()) r = randInt();

    result.set(r);
    outTrig.trigger();
}

function randInt()
{
    return Math.floor((Math.random() * ((max.get() - min.get() + 1))) + min.get());
}

}
};

CABLES.OPS["26f446cc-9107-4164-8209-5254487fa132"]={f:Ops.Math.TriggerRandomNumber_v2,objName:"Ops.Math.TriggerRandomNumber_v2"};




// **************************************************************
// 
// Ops.Array.Array3Sum
// 
// **************************************************************

Ops.Array.Array3Sum= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inArr = op.inArray("Array3x", 3),
    addX = op.inValue("Add X", 1),
    addY = op.inValue("Add Y", 1),
    addZ = op.inValue("Add Z", 1),
    outArr = op.outArray("Result");

outArr.setUiAttribs({ "stride": 3 });

let arr = [];

addY.onChange =
addX.onChange =
addZ.onChange =
inArr.onChange = function ()
{
    let newArr = inArr.get();
    if (newArr)
    {
        if (arr.length != newArr.length)arr.length = newArr.length;

        for (let i = 0; i < newArr.length; i += 3)
        {
            arr[i + 0] = newArr[i + 0] + addX.get();
            arr[i + 1] = newArr[i + 1] + addY.get();
            arr[i + 2] = newArr[i + 2] + addZ.get();
        }

        outArr.setRef(arr);
    }
    else
    {
        outArr.setRef(null);
    }
};

}
};

CABLES.OPS["5120ca09-6ce3-457a-afc1-79b15a06137c"]={f:Ops.Array.Array3Sum,objName:"Ops.Array.Array3Sum"};




// **************************************************************
// 
// Ops.Array.Array3To2
// 
// **************************************************************

Ops.Array.Array3To2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
let inArr = op.inArray("Array3x", 3);
let outArr = op.outArray("Array2x", 2);

let arr = [];

inArr.onChange = function ()
{
    let theArray = inArr.get();
    if (!theArray || (theArray.length / 3) % 1.0 != 0)
    {
        return;
    }
    if (!theArray) return;

    if ((theArray.length / 3) * 2 != arr.length)
    {
        arr.length = (theArray.length / 3) * 2;
    }

    for (let i = 0; i < theArray.length / 3; i++)
    {
        arr[i * 2 + 0] = theArray[i * 3 + 0];
        arr[i * 2 + 1] = theArray[i * 3 + 1];
    }

    outArr.set(null);
    outArr.set(arr);
};

}
};

CABLES.OPS["c451ee12-67f4-4dc9-8fb8-7a6cc4295a4c"]={f:Ops.Array.Array3To2,objName:"Ops.Array.Array3To2"};




// **************************************************************
// 
// Ops.Patch.PK3cVbR.AdjMatrix
// 
// **************************************************************

Ops.Patch.PK3cVbR.AdjMatrix= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
// welcome to your new op!
// have a look at the documentation:
// https://cables.gl/docs/5_writing_ops/dev_ops/dev_ops

const
    exec = op.inTrigger("Execute"),
    categoriesSizeIn = op.inInt("Categories Count"),
    contentSizeIn = op.inInt("Content Count"),
    result = op.outArray("Result"),
    edgesCount = op.outNumber("Edges Count");

function setConnection(matrix, size, nodeA, nodeB, weight)
{
    matrix[nodeA * size + nodeB] = weight;
    matrix[nodeB * size + nodeA] = weight;
}

exec.onTriggered = () =>
{
    const categoriesSize = categoriesSizeIn.get();
    const contentSize = contentSizeIn.get();
    const size = categoriesSize + contentSize;
    const adj = new Array(size * size).fill(0);

    // Categories Edges
    setConnection(adj, size, 0, 2, 0.40);
    setConnection(adj, size, 0, 3, 0.50);
    setConnection(adj, size, 1, 2, 0.20);
    setConnection(adj, size, 1, 3, 0.50);
    setConnection(adj, size, 1, 5, 0.20);
    setConnection(adj, size, 2, 3, 0.80);
    setConnection(adj, size, 2, 4, 0.31);
    setConnection(adj, size, 3, 4, 0.70);
    setConnection(adj, size, 3, 5, 0.30);
    setConnection(adj, size, 4, 5, 0.30);

    // Content Edges
    setConnection(adj, size, 6, 1, 0.10);
    setConnection(adj, size, 6, 0, 0.10);
    setConnection(adj, size, 7, 1, 0.10);
    setConnection(adj, size, 7, 0, 0.10);
    setConnection(adj, size, 8, 1, 0.10);
    setConnection(adj, size, 8, 0, 0.10);
    setConnection(adj, size, 9, 1, 0.10);
    setConnection(adj, size, 9, 1, 0.10);
    setConnection(adj, size, 10, 1, 0.10);
    setConnection(adj, size, 11, 1, 0.10);
    setConnection(adj, size, 12, 1, 0.10);
    setConnection(adj, size, 13, 1, 0.10);


    const edgesCountCalculation = adj.reduce((count, element) =>
    {
        if (element > 0)
        {
            return count + 0.5;
        }
        else return count;
    });

    result.set(adj);
    edgesCount.set(edgesCountCalculation);
};

}
};

CABLES.OPS["1013d68d-5a2e-4f30-a284-ce0248c7c2af"]={f:Ops.Patch.PK3cVbR.AdjMatrix,objName:"Ops.Patch.PK3cVbR.AdjMatrix"};




// **************************************************************
// 
// Ops.Array.Array_v3
// 
// **************************************************************

Ops.Array.Array_v3= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inLength = op.inValueInt("Array length", 10),
    modeSelect = op.inSwitch("Mode select", ["Number", "1,2,3,4", "0-1"], "Number"),
    inDefaultValue = op.inValueFloat("Default Value"),
    inReverse = op.inBool("Reverse", false),
    outArr = op.outArray("Array"),
    outArrayLength = op.outNumber("Array length out");

let arr = [];
let selectIndex = 0;
const MODE_NUMBER = 0;
const MODE_1_TO_4 = 1;
const MODE_0_TO_1 = 2;

modeSelect.onChange = onFilterChange;

inReverse.onChange =
    inDefaultValue.onChange =
    inLength.onChange = reset;

onFilterChange();
reset();

function onFilterChange()
{
    let selectedMode = modeSelect.get();
    if (selectedMode === "Number") selectIndex = MODE_NUMBER;
    else if (selectedMode === "1,2,3,4") selectIndex = MODE_1_TO_4;
    else if (selectedMode === "0-1") selectIndex = MODE_0_TO_1;

    inDefaultValue.setUiAttribs({ "greyout": selectIndex !== MODE_NUMBER });

    op.setUiAttrib({ "extendTitle": modeSelect.get() });

    reset();
}

function reset()
{
    arr.length = 0;

    let arrLength = inLength.get();
    let valueForArray = inDefaultValue.get();
    let i;

    // mode 0 - fill all array values with one number
    if (selectIndex === MODE_NUMBER)
    {
        for (i = 0; i < arrLength; i++)
        {
            arr[i] = valueForArray;
        }
    }
    // mode 1 Continuous number array - increments up to array length
    else if (selectIndex === MODE_1_TO_4)
    {
        for (i = 0; i < arrLength; i++)
        {
            arr[i] = i;
        }
    }
    // mode 2 Normalized array
    else if (selectIndex === MODE_0_TO_1)
    {
        if (arrLength > 1) { 
            for (i = 0; i < arrLength; i++)
                {
                    arr[i] = i / (arrLength - 1);
                }
        } else 
        {
            //When array length is only 1 
            arr = [0];
        }
    }

    if (inReverse.get())arr = arr.reverse();

    outArr.setRef(arr);
    outArrayLength.set(arr.length);
}

}
};

CABLES.OPS["e4d31a46-bf64-42a8-be34-4cbb2bbc2600"]={f:Ops.Array.Array_v3,objName:"Ops.Array.Array_v3"};




// **************************************************************
// 
// Ops.Patch.PK3cVbR.DrawVariableWidthEdgesCategories
// 
// **************************************************************

Ops.Patch.PK3cVbR.DrawVariableWidthEdgesCategories= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const triggerIn = op.inTrigger("Trigger");
const nodePositionsIn = op.inArray("NodePositions2D");
const edgeWeightMatrixIn = op.inArray("EdgeWeightMatrix");
const graphSizeIn = op.inInt("GraphSize");
const categoriesCountIn = op.inInt("Categories Count");
const minThicknessIn = op.inFloat("MinThickness", 0.15);
const maxThicknessIn = op.inFloat("MaxThickness", 1.5);
const defaultEdgeZIn = op.inFloat("DefaultEdgeZ", 0.0); // To place edges slightly behind/in-front of nodes
const normalizeWeightsIn = op.inBool("NormalizeWeights", true);
const triggerOut = op.outTrigger("Next");

const translationsOut = op.outArray("EdgeTranslations");
const rotationsOut = op.outArray("EdgeRotations"); // Euler ZYX: [rx,ry,rz,...]
const scalesOut = op.outArray("EdgeScales");     // [sx,sy,sz,...]
const instanceCountOut = op.outNumber("EdgeInstanceCount");

// Helper to map a value from one range to another
function mapRange(value, inMin, inMax, outMin, outMax) {
    // Clamp value to inMin-inMax range first
    const clampedValue = Math.max(inMin, Math.min(inMax, value));
    if (inMin === inMax) return (outMin + outMax) / 2; // Avoid division by zero, return midpoint
    return outMin + (outMax - outMin) * (clampedValue - inMin) / (inMax - inMin);
}


triggerIn.onTriggered = () => {
    const positions = nodePositionsIn.get();
    const adjWeights = edgeWeightMatrixIn.get();
    const graphSize = graphSizeIn.get();
    const categoriesCount = categoriesCountIn.get();
    const minThick = minThicknessIn.get();
    const maxThick = maxThicknessIn.get();
    const edgeZ = defaultEdgeZIn.get();
    const normalize = normalizeWeightsIn.get();

    const translations = [];
    const rotations = [];
    const scales = [];
    let edgeCount = 0;

    if (!positions || !adjWeights || graphSize === 0 || positions.length < graphSize * 2 || adjWeights.length < graphSize * graphSize) {
        console.warn("PrepareEdgeMeshes: Insufficient data.");
        translationsOut.set(new Float32Array(0));
        rotationsOut.set(new Float32Array(0));
        scalesOut.set(new Float32Array(0));
        instanceCountOut.set(0);
        triggerOut.trigger();
        return;
    }

    let dataMinWeight = Infinity;
    let dataMaxWeight = -Infinity;
    if (normalize) {
        for (let i = 0; i < graphSize; i++) {
            for (let j = i + 1; j < graphSize; j++) {
                const weight = adjWeights[i * graphSize + j];
                if (weight > 0) { // Only consider actual edges for min/max weight
                    if (weight < dataMinWeight) dataMinWeight = weight;
                    if (weight > dataMaxWeight) dataMaxWeight = weight;
                }
            }
        }
        if (dataMinWeight === Infinity) { // No edges found
             dataMinWeight = 0; dataMaxWeight = 1; // Avoid issues, effectively makes all thicknesses minThick
        }
    }


    for (let i = 0; i < graphSize; i++) {
        for (let j = i + 1; j < graphSize; j++) { // Iterate upper triangle to process each edge once
            const weight = adjWeights[i * graphSize + j];

            if (weight > 0) { // If there's an edge with positive weight
                edgeCount++;

                const x1 = positions[i * 2];
                const y1 = positions[i * 2 + 1];
                const x2 = positions[j * 2];
                const y2 = positions[j * 2 + 1];

                // 1. Calculate Translation (midpoint of the edge)
                const midX = (x1 + x2) / 2;
                const midY = (y1 + y2) / 2;
                translations.push(midX, midY, edgeZ);

                // 2. Calculate Scale
                const dx = x2 - x1;
                const dy = y2 - y1;
                const length = Math.sqrt(dx * dx + dy * dy);

                let thickness;
                if (normalize) {
                    thickness = mapRange(weight, dataMinWeight, dataMaxWeight, minThick, maxThick);
                } else {
                    // If not normalizing, you might want to clamp or directly use weight
                    // This example clamps, assuming weight is somewhat proportional to desired thickness
                    thickness = Math.max(minThick, Math.min(maxThick, weight));
                }
                thickness = Math.max(0.001, thickness); // Ensure thickness is not zero

                // Assuming base mesh (Plane) is 1x1 unit, oriented along its X-axis by default
                // We scale X by length, Y by thickness
                scales.push(length, thickness, 1.0); // Scale Z by 1 (or desired depth if any)

                // 3. Calculate Rotation (around Z-axis for 2D)
                const angleRad = Math.atan2(dy, dx) * 180 / 3.1415; // Angle in radians
                rotations.push(0, 0, angleRad); // Rotate around Z axis
            }
        }
    }

    translationsOut.set(new Float32Array(translations));
    rotationsOut.set(new Float32Array(rotations));
    scalesOut.set(new Float32Array(scales));
    instanceCountOut.set(edgeCount);
    triggerOut.trigger();
};
}
};

CABLES.OPS["a461cbd3-fed6-4634-8433-01cd9cd6ff67"]={f:Ops.Patch.PK3cVbR.DrawVariableWidthEdgesCategories,objName:"Ops.Patch.PK3cVbR.DrawVariableWidthEdgesCategories"};




// **************************************************************
// 
// Ops.Gl.Meshes.Cylinder_v2
// 
// **************************************************************

Ops.Gl.Meshes.Cylinder_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inRender = op.inTrigger("render"),
    inDraw = op.inValueBool("Draw", true),
    inSegments = op.inValueInt("segments", 40),
    inStacks = op.inValueInt("stacks", 1),
    inLength = op.inValueFloat("length", 1),
    inOuterRadius = op.inValueFloat("outer radius", 0.5),
    inInnerRadius = op.inValueFloat("inner radius", 0),
    inUVMode = op.inValueSelect("UV mode", ["simple", "atlas"], "simple"),
    flipSideMapping = op.inValueBool("Flip Mapping", false),
    inCaps = op.inValueBool("Caps", true),
    inFlat = op.inValueBool("Flat Normals", false),
    outTrigger = op.outTrigger("next"),
    outGeometry = op.outObject("geometry"),
    geom = new CGL.Geometry("cylinder");

inDraw.setUiAttribs({ "title": "Render mesh" });

const
    TAU = Math.PI * 2,
    cgl = op.patch.cgl;

let needsRebuild = true;
let mesh = null;

inUVMode.setUiAttribs({ "hidePort": true });
op.onDelete = function () { if (mesh)mesh.dispose(); };

op.preRender = buildMesh;

function buildMesh()
{
    const flipTex = flipSideMapping.get();

    const
        segments = Math.max(inSegments.get(), 3) | 0,
        innerRadius = Math.max(inInnerRadius.get(), 0),
        outerRadius = Math.max(inOuterRadius.get(), innerRadius),
        stacks = Math.max(inStacks.get(), inStacks.defaultValue) | 0,
        length = inLength.get(),
        stackLength = length / stacks,
        segmentRadians = TAU / segments,
        uvMode = inUVMode.get();
    let
        positions = [],
        normals = [],
        tangents = [],
        biTangents = [],
        texcoords = [],
        indices = [],
        x, y, z, i, j,
        a, d, o;
    if (uvMode == "atlas") o = 0.5;
    else o = 1;

    // for each stack
    for (
        i = 0, z = -length / 2;
        i <= stacks;
        i++, z += stackLength
    )
    {
        // for each segment
        for (
            j = a = 0;
            j <= segments;
            j++, a += segmentRadians
        )
        {
            positions.push(
                (x = Math.sin(a)) * outerRadius,
                (y = Math.cos(a)) * outerRadius,
                z
            );
            d = Math.sqrt(x * x + y * y);
            x /= d;
            y /= d;
            normals.push(x, y, 0);
            tangents.push(-y, x, 0);
            biTangents.push(0, 0, 1);

            if (flipTex)
                texcoords.push(
                    j / segments,
                    1.0 - ((z / length + 0.5) * o)
                );

            else
                texcoords.push(
                    (z / length + 0.5) * o,
                    j / segments
                );
        }
    }

    // create indices
    for (j = 0; j < stacks; j++)
    {
        for (
            i = 0, d = j * (segments + 1);
            i < segments;
            i++, d++
        )
        {
            a = d + 1;
            indices.push(
                d + (segments + 1), a, d, d + (segments + 1), a + (segments + 1), a
            );
        }
    }

    // create inner shell
    if (innerRadius)
    {
        d = positions.length;
        for (i = j = 0; i < d; i += 3, j += 2)
        {
            positions.push(
                (positions[i] / outerRadius) * innerRadius,
                (positions[i + 1] / outerRadius) * innerRadius,
                positions[i + 2]
            );
            normals.push(
                -normals[i],
                -normals[i + 1],
                0
            );
            tangents.push(
                -tangents[i],
                -tangents[i + 1],
                0
            );
            biTangents.push(
                0,
                -biTangents[i + 1],
                -biTangents[i + 2]
            );
            texcoords.push(
                texcoords[j],
                1 - texcoords[j + 1]
            );
        }
        a = d / 3;
        d = indices.length;
        for (i = 0; i < d; i += 6)
        {
            indices.push(
                a + indices[i],
                a + indices[i + 2],
                a + indices[i + 1],
                a + indices[i + 3],
                a + indices[i + 5],
                a + indices[i + 4]
            );
        }

        if (inCaps.get())
        {
            // create caps
            a = positions.length;
            o = a / 2;
            d = segments * 3;

            // cap positions
            Array.prototype.push.apply(positions, positions.slice(0, d));
            Array.prototype.push.apply(positions, positions.slice(o, o + d));
            Array.prototype.push.apply(positions, positions.slice(o - d, o));
            Array.prototype.push.apply(positions, positions.slice(a - d, a));

            // cap normals
            d = segments * 2;
            for (i = 0; i < d; i++) normals.push(0, 0, -1), tangents.push(-1, 0, 0), biTangents.push(0, -1, 0);
            for (i = 0; i < d; i++) normals.push(0, 0, 1), tangents.push(1, 0, 0), biTangents.push(0, 1, 0);

            // cap uvs
            if (uvMode == "atlas")
            {
                d = (innerRadius / outerRadius) * 0.5;
                for (i = o = 0; i < segments; i++, o += segmentRadians)
                    texcoords.push(
                        Math.sin(o) * 0.25 + 0.75,
                        Math.cos(o) * 0.25 + 0.25
                    );
                for (i = o = 0; i < segments; i++, o += segmentRadians)
                    texcoords.push(
                        (Math.sin(o) * d + 0.5) * 0.5 + 0.5,
                        (Math.cos(o) * d + 0.5) * 0.5
                    );
                for (i = o = 0; i < segments; i++, o += segmentRadians)
                    texcoords.push(
                        Math.sin(o) * 0.25 + 0.75,
                        Math.cos(o) * 0.25 + 0.75
                    );
                for (i = o = 0; i < segments; i++, o += segmentRadians)
                    texcoords.push(
                        (Math.sin(o) * d + 0.5) * 0.5 + 0.5,
                        (Math.cos(o) * d + 0.5) * 0.5 + 0.5
                    );
            }
            else
            {
                for (i = 0; i < d; i++) texcoords.push(0, 0);
                for (i = 0; i < d; i++) texcoords.push(1, 1);
            }

            // cap indices
            for (
                i = 0, o = a / 3 + x;
                i < segments - 1;
                i++, o++
            )
            {
                indices.push(
                    o + 1, o + segments, o, o + segments + 1, o + segments, o + 1
                );
            }
            indices.push(
                o + segments, a / 3 + x, a / 3 + segments + x, o + segments, o, a / 3 + x
            );
            x += segments * 2;
            for (
                i = 0, o = a / 3 + x;
                i < segments - 1;
                i++, o++
            )
            {
                indices.push(
                    o, o + segments, o + 1, o + 1, o + segments, o + segments + 1
                );
            }
            indices.push(
                a / 3 + segments + x, a / 3 + x, o + segments, a / 3 + x, o, o + segments
            );
        }
    }
    else
    {
        a = positions.length;
        d = a / 3;

        positions.push(0, 0, -length / 2);
        Array.prototype.push.apply(positions, positions.slice(0, segments * 3));
        for (i = 0; i <= segments; i++) normals.push(0, 0, -1), tangents.push(-1, 0, 0), biTangents.push(0, -1, 0);

        if (inCaps.get())
        {
            positions.push(0, 0, length / 2);
            Array.prototype.push.apply(positions, positions.slice(a - segments * 3, a));
            for (i = 0; i <= segments; i++) normals.push(0, 0, 1), tangents.push(1, 0, 0), biTangents.push(0, 1, 0);
            if (uvMode == "atlas")
            {
                texcoords.push(0.75, 0.25);
                for (i = a = 0; i < segments; i++, a += segmentRadians)
                    texcoords.push(Math.sin(a) * 0.25 + 0.75, Math.cos(a) * 0.25 + 0.25);
                texcoords.push(0.75, 0.75);
                for (i = a = 0; i < segments; i++, a += segmentRadians)
                    texcoords.push(Math.sin(a) * 0.25 + 0.75, Math.cos(a) * 0.25 + 0.75);
            }
            else
            {
                for (i = 0; i <= segments; i++) texcoords.push(0, 0);
                for (i = 0; i <= segments; i++) texcoords.push(1, 1);
            }
            indices.push(d + 1, d, d + segments);
            for (i = 1; i < segments; i++)
                indices.push(d, d + i, d + i + 1);
            d += segments + 1;
            indices.push(d, d + 1, d + segments);
            for (i = 1; i < segments; i++)
                indices.push(d, d + i + 1, d + i);
            d += segments + 1;
        }
    }

    // set geometry
    geom.clear();
    geom.vertices = positions;
    geom.texCoords = texcoords;
    geom.vertexNormals = normals;
    geom.tangents = tangents;
    geom.biTangents = biTangents;
    geom.verticesIndices = indices;

    if (inFlat.get()) geom.unIndex();

    outGeometry.setRef(geom);

    if (op.patch.cg)
        if (!mesh) mesh = op.patch.cg.createMesh(geom, { "opId": op.id });
        else mesh.setGeom(geom);

    needsRebuild = false;
}

// set event handlers
inRender.onTriggered = function ()
{
    if (needsRebuild) buildMesh();
    if (inDraw.get() && mesh) mesh.render();
    outTrigger.trigger();
};

inSegments.onChange =
inOuterRadius.onChange =
inInnerRadius.onChange =
inCaps.onChange =
inLength.onChange =
flipSideMapping.onChange =
inStacks.onChange =
inFlat.onChange =
inUVMode.onChange = function ()
{
    // only calculate once, even after multiple settings could were changed
    needsRebuild = true;
};

}
};

CABLES.OPS["2899ad67-1e64-4692-af2a-c3b9078f1b5f"]={f:Ops.Gl.Meshes.Cylinder_v2,objName:"Ops.Gl.Meshes.Cylinder_v2"};




// **************************************************************
// 
// Ops.Gl.Shader.PointMaterial_v6
// 
// **************************************************************

Ops.Gl.Shader.PointMaterial_v6= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={"pointmat_frag":"\r\n{{MODULES_HEAD}}\r\n\r\nUNI vec4 color;\r\nUNI float atlasNumX;\r\n\r\n// IN vec2 pointCoord;\r\nIN float ps;\r\nIN vec2 texCoord;\r\n\r\n#ifdef HAS_TEXTURE_DIFFUSE\r\n    UNI sampler2D diffTex;\r\n#endif\r\n#ifdef HAS_TEXTURE_MASK\r\n    UNI sampler2D texMask;\r\n#endif\r\n#ifdef HAS_TEXTURE_COLORIZE\r\n    IN vec4 colorize;\r\n#endif\r\n#ifdef HAS_TEXTURE_OPACITY\r\n    IN float opacity;\r\n#endif\r\n\r\n#ifdef HAS_TEXTURE_ROT\r\n    UNI sampler2D texRot;\r\n#endif\r\n\r\n\r\n#ifdef USE_ATLAS\r\n    IN float randAtlas;\r\n    #ifdef HAS_TEXTURE_ATLASLOOKUP\r\n        UNI sampler2D texAtlasLookup;\r\n    #endif\r\n#endif\r\n\r\n\r\n#ifdef VERTEX_COLORS\r\n    IN vec4 vertexColor;\r\n#endif\r\n\r\nvec3 lumcoeff = vec3(0.299,0.587,0.114);\r\n\r\n#define PI 3.14159265\r\n#define TAU (2.0*PI)\r\n\r\nvoid pR(inout vec2 p, float a)\r\n{\r\n\tp = cos(a)*p + sin(a)*vec2(p.y, -p.x);\r\n}\r\n\r\n\r\nvoid main()\r\n{\r\n    #ifdef FLIP_TEX\r\n        vec2 pointCoord=vec2(gl_PointCoord.x,(1.0-gl_PointCoord.y));\r\n    #endif\r\n    #ifndef FLIP_TEX\r\n        vec2 pointCoord=gl_PointCoord;\r\n    #endif\r\n\r\n    #ifdef HAS_TEXTURE_ROT\r\n        float r=texture(texRot,texCoord).r;\r\n        pointCoord-=vec2(0.5);\r\n        pR(pointCoord,r*TAU);\r\n        pointCoord+=vec2(0.5);\r\n    #endif\r\n\r\n    vec2 origPointCoord=pointCoord;\r\n\r\n\r\n    #ifdef USE_ATLAS\r\n\r\n        float atlasIdx=randAtlas;\r\n\r\n        #ifdef HAS_TEXTURE_ATLASLOOKUP\r\n            atlasIdx=texture(texAtlasLookup,texCoord).r;\r\n        #endif\r\n\r\n        #ifdef ATLAS_XFADE\r\n            vec2 pointCoord2=vec2(origPointCoord);\r\n            pointCoord2.x=origPointCoord.x/atlasNumX+ceil(atlasIdx)*(1.0/atlasNumX);\r\n        #endif\r\n\r\n        pointCoord.x=origPointCoord.x/atlasNumX+floor(atlasIdx)*(1.0/atlasNumX);\r\n\r\n\r\n    #endif\r\n\r\n    {{MODULE_BEGIN_FRAG}}\r\n\r\n    if(ps<1.0)discard;\r\n\r\n    vec4 col=color;\r\n\r\n    #ifdef HAS_TEXTURE_MASK\r\n        float mask;\r\n        #ifdef TEXTURE_MASK_R\r\n            mask=texture(texMask,pointCoord).r;\r\n        #endif\r\n        #ifdef TEXTURE_MASK_A\r\n            mask=texture(texMask,pointCoord).a;\r\n        #endif\r\n        #ifdef TEXTURE_MASK_LUMI\r\n        \tmask = dot(texture(texMask,pointCoord).rgb, lumcoeff);\r\n        #endif\r\n\r\n        #ifdef ATLAS_XFADE\r\n            float mask2=texture(texMask,pointCoord2).r;\r\n\r\n            #ifdef TEXTURE_MASK_A\r\n                mask2=texture(texMask,pointCoord2).a;\r\n            #endif\r\n            #ifdef TEXTURE_MASK_LUMI\r\n            \tmask2 = dot(texture(texMask,pointCoord2).rgb, lumcoeff);\r\n            #endif\r\n\r\n            mask=mix(mask,mask2,fract(atlasIdx));\r\n        #endif\r\n    #endif\r\n\r\n    #ifdef HAS_TEXTURE_DIFFUSE\r\n\r\n        col=texture(diffTex,pointCoord);\r\n\r\n        #ifdef ATLAS_XFADE\r\n            vec4 col2=texture(diffTex,pointCoord2);\r\n            col=mix(col,col2,fract(atlasIdx));\r\n        #endif\r\n\r\n        #ifdef COLORIZE_TEXTURE\r\n            col.rgb*=color.rgb;\r\n        #endif\r\n    #endif\r\n\r\n    col.a*=color.a;\r\n\r\n\r\n    #ifdef MAKE_ROUND\r\n\r\n        #ifndef MAKE_ROUNDAA\r\n            if ((gl_PointCoord.x-0.5)*(gl_PointCoord.x-0.5) + (gl_PointCoord.y-0.5)*(gl_PointCoord.y-0.5) > 0.25) discard; //col.a=0.0;\r\n        #endif\r\n\r\n        #ifdef MAKE_ROUNDAA\r\n            float circ=(gl_PointCoord.x-0.5)*(gl_PointCoord.x-0.5) + (gl_PointCoord.y-0.5)*(gl_PointCoord.y-0.5);\r\n\r\n            float a=smoothstep(0.25,0.25-fwidth(gl_PointCoord.x),circ);\r\n            if(a==0.0)discard;\r\n            col.a=a*color.a;\r\n        #endif\r\n    #endif\r\n\r\n    #ifdef HAS_TEXTURE_COLORIZE\r\n        col*=colorize;\r\n    #endif\r\n\r\n    #ifdef TEXTURE_COLORIZE_MUL\r\n        col*=color;\r\n    #endif\r\n\r\n    #ifdef HAS_TEXTURE_MASK\r\n        col.a*=mask;\r\n    #endif\r\n\r\n    #ifdef HAS_TEXTURE_OPACITY\r\n        col.a*=opacity;\r\n    #endif\r\n\r\n    #ifdef VERTEX_COLORS\r\n        col.rgb = vertexColor.rgb;\r\n        col.a *= vertexColor.a;\r\n    #endif\r\n\r\n    if (col.a <= 0.0) discard;\r\n\r\n    #ifdef HAS_TEXTURE_COLORIZE\r\n        col*=colorize;\r\n    #endif\r\n\r\n    {{MODULE_COLOR}}\r\n\r\n\r\n    outColor = col;\r\n}\r\n","pointmat_vert":"{{MODULES_HEAD}}\r\n\r\n\r\n\r\nIN vec3 vPosition;\r\nIN vec2 attrTexCoord;\r\nIN vec3 attrVertNormal;\r\nIN vec3 attrTangent;\r\nIN vec3 attrBiTangent;\r\nIN float attrPointSize;\r\n\r\n#ifdef VERTEX_COLORS\r\n    IN vec4 attrVertColor;\r\n    OUT vec4 vertexColor;\r\n#endif\r\n\r\nOUT vec3 norm;\r\nOUT float ps;\r\n\r\nOUT vec2 texCoord;\r\n\r\n\r\n#ifdef HAS_TEXTURES\r\n#endif\r\n\r\n#ifdef HAS_TEXTURE_COLORIZE\r\n   UNI sampler2D texColorize;\r\n   OUT vec4 colorize;\r\n#endif\r\n#ifdef HAS_TEXTURE_OPACITY\r\n    UNI sampler2D texOpacity;\r\n    OUT float opacity;\r\n#endif\r\n\r\n#ifdef HAS_TEXTURE_POINTSIZE\r\n   UNI sampler2D texPointSize;\r\n   UNI float texPointSizeMul;\r\n#endif\r\n\r\nUNI mat4 projMatrix;\r\nUNI mat4 modelMatrix;\r\nUNI mat4 viewMatrix;\r\n\r\nUNI float pointSize;\r\nUNI vec3 camPos;\r\n\r\nUNI float canvasWidth;\r\nUNI float canvasHeight;\r\nUNI float camDistMul;\r\nUNI float randomSize;\r\nUNI float minPointSize;\r\nUNI float pixelRatio;\r\n\r\nIN float attrVertIndex;\r\n\r\nUNI float atlasNumX;\r\n\r\n#ifdef USE_ATLAS\r\n    OUT float randAtlas;\r\n#endif\r\n\r\nfloat rand(float n){return fract(sin(n) * 5711.5711123);}\r\n\r\n#define POINTMATERIAL\r\n\r\nvoid main()\r\n{\r\n    norm=attrVertNormal;\r\n    #ifdef PIXELSIZE\r\n        float psMul=1.0;\r\n    #endif\r\n\r\n    #ifndef PIXELSIZE\r\n        float psMul=sqrt(canvasWidth/canvasHeight)+0.00000000001;\r\n    #endif\r\n\r\n    #ifdef USE_ATLAS\r\n        randAtlas=atlasNumX*rand(attrVertIndex+vPosition.x);\r\n    #endif\r\n\r\n    vec3 tangent=attrTangent;\r\n    vec3 bitangent=attrBiTangent;\r\n\r\n\r\n    #ifdef VERTEX_COLORS\r\n        vertexColor=attrVertColor;\r\n    #endif\r\n\r\n    // #ifdef HAS_TEXTURES\r\n        texCoord=attrTexCoord;\r\n    // #endif\r\n\r\n    #ifdef HAS_TEXTURE_OPACITY\r\n        // opacity=texture(texOpacity,vec2(rand(attrVertIndex+texCoord.x*texCoord.y+texCoord.y+texCoord.x),rand(texCoord.y*texCoord.x-texCoord.x-texCoord.y-attrVertIndex))).r;\r\n        opacity=texture(texOpacity,texCoord).r;\r\n    #endif\r\n\r\n\r\n    #ifdef HAS_TEXTURE_COLORIZE\r\n        #ifdef RANDOM_COLORIZE\r\n            colorize=texture(texColorize,vec2(rand(attrVertIndex+texCoord.x*texCoord.y+texCoord.y+texCoord.x),rand(texCoord.y*texCoord.x-texCoord.x-texCoord.y-attrVertIndex)));\r\n        #endif\r\n        #ifndef RANDOM_COLORIZE\r\n            colorize=texture(texColorize,texCoord);\r\n        #endif\r\n    #endif\r\n\r\n\r\n\r\n\r\n\r\n    mat4 mMatrix=modelMatrix;\r\n    vec4 pos = vec4( vPosition, 1. );\r\n\r\n    gl_PointSize=0.0;\r\n\r\n    {{MODULE_VERTEX_POSITION}}\r\n\r\n    vec4 model=mMatrix * pos;\r\n\r\n    psMul+=rand(texCoord.x*texCoord.y+texCoord.y*3.0+texCoord.x*2.0+attrVertIndex)*randomSize;\r\n\r\n    float addPointSize=0.0;\r\n    #ifdef HAS_TEXTURE_POINTSIZE\r\n\r\n        #ifdef POINTSIZE_CHAN_R\r\n            addPointSize=texture(texPointSize,texCoord).r;\r\n        #endif\r\n        #ifdef POINTSIZE_CHAN_G\r\n            addPointSize=texture(texPointSize,texCoord).g;\r\n        #endif\r\n        #ifdef POINTSIZE_CHAN_B\r\n            addPointSize=texture(texPointSize,texCoord).b;\r\n        #endif\r\n\r\n        #ifdef DOTSIZEREMAPABS\r\n            addPointSize=1.0-(distance(addPointSize,0.5)*2.0);\r\n            addPointSize=addPointSize*addPointSize*addPointSize*2.0;\r\n        #endif\r\n\r\n        addPointSize*=texPointSizeMul;\r\n\r\n    #endif\r\n\r\n    ps=0.0;\r\n    #ifndef SCALE_BY_DISTANCE\r\n        ps = (pointSize+addPointSize+attrPointSize) * psMul;\r\n    #endif\r\n    #ifdef SCALE_BY_DISTANCE\r\n        float cameraDist = distance(model.xyz, camPos);\r\n        ps = ( (pointSize+addPointSize+attrPointSize) / cameraDist) * psMul;\r\n    #endif\r\n    ps=max(minPointSize,ps);\r\n    ps*=pixelRatio;\r\n\r\n    gl_PointSize += ps;\r\n\r\n\r\n    gl_Position = projMatrix * viewMatrix * model;\r\n}\r\n",};
const cgl = op.patch.cgl;

const
    render = op.inTrigger("render"),
    pointSize = op.inValueFloat("PointSize", 3),
    inPixelSize = op.inBool("Size in Pixels", false),
    randomSize = op.inValue("Random Size", 0),
    makeRound = op.inValueBool("Round", true),
    makeRoundAA = op.inValueBool("Round Antialias", false),
    doScale = op.inValueBool("Scale by Distance", false),
    r = op.inValueSlider("r", Math.random()),
    g = op.inValueSlider("g", Math.random()),
    b = op.inValueSlider("b", Math.random()),
    a = op.inValueSlider("a", 1),
    vertCols = op.inBool("Vertex Colors", false),
    texture = op.inTexture("texture"),
    textureMulColor = op.inBool("Colorize Texture"),
    textureMask = op.inTexture("Texture Mask"),
    texMaskChan = op.inSwitch("Mask Channel", ["R", "A", "Luminance"], "R"),
    textureColorize = op.inTexture("Texture Colorize"),
    colorizeRandom = op.inValueBool("Colorize Randomize", false),
    textureOpacity = op.inTexture("Texture Opacity"),
    texturePointSize = op.inTexture("Texture Point Size"),
    texturePointSizeChannel = op.inSwitch("Point Size Channel", ["R", "G", "B"], "R"),
    texturePointSizeMul = op.inFloat("Texture Point Size Mul", 1),
    texturePointSizeMap = op.inSwitch("Map Size 0", ["Black", "Grey"], "Black"),
    flipTex = op.inValueBool("Flip Texture", false),

    inAtlasXFade = op.inBool("Atlas Cross Fade", false),
    inAtlasRepeatX = op.inFloat("Atlas Repeat X ", 1),
    inAtlasLookupTex = op.inTexture("Atlas Lookup"),
    inRotTex = op.inTexture("Rotate Texture"),
    minPointSize = op.inValueFloat("Min Point Size", 0),

    trigger = op.outTrigger("trigger"),
    shaderOut = op.outObject("shader", null, "shader");

op.setPortGroup("Texture", [texture, textureMulColor, textureMask, texMaskChan, textureColorize, textureOpacity, colorizeRandom]);
op.setPortGroup("Color", [r, g, b, a, vertCols]);
op.setPortGroup("Size", [pointSize, randomSize, makeRound, makeRoundAA, doScale, inPixelSize, texturePointSize, texturePointSizeMul, texturePointSizeChannel, texturePointSizeMap]);

op.setPortGroup("Atlas", [inAtlasRepeatX, inAtlasLookupTex, inAtlasXFade]);

r.setUiAttribs({ "colorPick": true });

const shader = new CGL.Shader(cgl, "PointMaterial", this);
shader.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG"]);
shader.define("MAKE_ROUND");

op.toWorkPortsNeedToBeLinked(render);

const
    uniPointSize = new CGL.Uniform(shader, "f", "pointSize", pointSize),
    texturePointSizeMulUniform = new CGL.Uniform(shader, "f", "texPointSizeMul", texturePointSizeMul),
    uniRandomSize = new CGL.Uniform(shader, "f", "randomSize", randomSize),
    uniMinPointSize = new CGL.Uniform(shader, "f", "minPointSize", minPointSize),
    uniColor = new CGL.Uniform(shader, "4f", "color", r, g, b, a),
    uniRandAtlasX = new CGL.Uniform(shader, "f", "atlasNumX", inAtlasRepeatX),
    uniDpr = new CGL.Uniform(shader, "f", "pixelRatio", 1),
    uniWidth = new CGL.Uniform(shader, "f", "canvasWidth", cgl.canvasWidth),
    uniHeight = new CGL.Uniform(shader, "f", "canvasHeight", cgl.canvasHeight),
    textureUniform = new CGL.Uniform(shader, "t", "diffTex"),
    textureColorizeUniform = new CGL.Uniform(shader, "t", "texColorize"),
    textureOpacityUniform = new CGL.Uniform(shader, "t", "texOpacity"),
    textureColoPointSize = new CGL.Uniform(shader, "t", "texPointSize"),
    texturePointSizeUniform = new CGL.Uniform(shader, "t", "texPointSize"),
    textureMaskUniform = new CGL.Uniform(shader, "t", "texMask"),
    textureAtlasLookupUniform = new CGL.Uniform(shader, "t", "texAtlasLookup"),
    texRotUni = new CGL.Uniform(shader, "t", "texRot");

shader.setSource(attachments.pointmat_vert, attachments.pointmat_frag);
shader.glPrimitive = cgl.gl.POINTS;
shaderOut.setRef(shader);
shaderOut.ignoreValueSerialize = true;

doScale.onChange =
    inAtlasRepeatX.onChange =
    makeRound.onChange =
    makeRoundAA.onChange =
    texture.onChange =
    textureColorize.onChange =
    textureMask.onChange =
    colorizeRandom.onChange =
    flipTex.onChange =
    texMaskChan.onChange =
    inPixelSize.onChange =
    textureOpacity.onChange =
    texturePointSize.onChange =
    texturePointSizeMap.onChange =
    texturePointSizeChannel.onChange =
    textureMulColor.onChange =
    inAtlasLookupTex.onLinkChanged =
    inRotTex.onLinkChanged =
    vertCols.onChange = updateDefines;

render.onTriggered = doRender;
updateUi();

op.preRender = function ()
{
    if (shader)shader.bind();
    doRender();
};

function doRender()
{
    uniWidth.setValue(cgl.canvasWidth);
    uniHeight.setValue(cgl.canvasHeight);
    op.checkGraphicsApi();

    cgl.pushShader(shader);
    shader.popTextures();
    if (texture.get() && !texture.get().deleted) shader.pushTexture(textureUniform, texture.get());
    if (textureMask.get()) shader.pushTexture(textureMaskUniform, textureMask.get());
    if (textureColorize.get()) shader.pushTexture(textureColorizeUniform, textureColorize.get());
    if (textureOpacity.get()) shader.pushTexture(textureOpacityUniform, textureOpacity.get());
    if (texturePointSize.get()) shader.pushTexture(texturePointSizeUniform, texturePointSize.get());
    if (inAtlasLookupTex.get()) shader.pushTexture(textureAtlasLookupUniform, inAtlasLookupTex.get());
    if (inRotTex.get()) shader.pushTexture(texRotUni, inRotTex.get());

    uniDpr.set(cgl.pixelDensity);

    trigger.trigger();

    cgl.popShader();
}

function useAtlas()
{
    return inAtlasRepeatX.get() > 0 || inAtlasLookupTex.isLinked();
}

function updateUi()
{
    inAtlasRepeatX.setUiAttribs({ "greyout": !useAtlas() });
    texMaskChan.setUiAttribs({ "greyout": !textureMask.isLinked() });

    texturePointSizeChannel.setUiAttribs({ "greyout": !texturePointSize.isLinked() });
    texturePointSizeMul.setUiAttribs({ "greyout": !texturePointSize.isLinked() });
    texturePointSizeMap.setUiAttribs({ "greyout": !texturePointSize.isLinked() });
}

function updateDefines()
{
    shader.toggleDefine("USE_ATLAS", useAtlas());

    shader.toggleDefine("SCALE_BY_DISTANCE", doScale.get());
    shader.toggleDefine("MAKE_ROUND", makeRound.get());
    shader.toggleDefine("MAKE_ROUNDAA", makeRoundAA.get());

    shader.toggleDefine("ATLAS_XFADE", inAtlasXFade.get());

    shader.toggleDefine("VERTEX_COLORS", vertCols.get());
    shader.toggleDefine("RANDOM_COLORIZE", colorizeRandom.get());
    shader.toggleDefine("HAS_TEXTURE_DIFFUSE", texture.get());
    shader.toggleDefine("HAS_TEXTURE_MASK", textureMask.isLinked());
    shader.toggleDefine("HAS_TEXTURE_COLORIZE", textureColorize.isLinked());
    shader.toggleDefine("HAS_TEXTURE_OPACITY", textureOpacity.isLinked());
    shader.toggleDefine("HAS_TEXTURE_POINTSIZE", texturePointSize.isLinked());
    shader.toggleDefine("HAS_TEXTURE_ATLASLOOKUP", inAtlasLookupTex.isLinked());
    shader.toggleDefine("HAS_TEXTURE_ROT", inRotTex.isLinked());

    shader.toggleDefine("TEXTURE_COLORIZE_MUL", textureMulColor.get());

    shader.toggleDefine("FLIP_TEX", flipTex.get());
    shader.toggleDefine("TEXTURE_MASK_R", texMaskChan.get() == "R");
    shader.toggleDefine("TEXTURE_MASK_A", texMaskChan.get() == "A");
    shader.toggleDefine("TEXTURE_MASK_LUMI", texMaskChan.get() == "Luminance");
    shader.toggleDefine("PIXELSIZE", inPixelSize.get());

    shader.toggleDefine("POINTSIZE_CHAN_R", texturePointSizeChannel.get() == "R");
    shader.toggleDefine("POINTSIZE_CHAN_G", texturePointSizeChannel.get() == "G");
    shader.toggleDefine("POINTSIZE_CHAN_B", texturePointSizeChannel.get() == "B");

    shader.toggleDefine("DOTSIZEREMAPABS", texturePointSizeMap.get() == "Grey");
    updateUi();
}

}
};

CABLES.OPS["e44df958-00c7-46e4-95bb-3e6ac6c4188f"]={f:Ops.Gl.Shader.PointMaterial_v6,objName:"Ops.Gl.Shader.PointMaterial_v6"};




// **************************************************************
// 
// Ops.Graphics.Geometry.TransformGeometry
// 
// **************************************************************

Ops.Graphics.Geometry.TransformGeometry= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    geometry = op.inObject("Geometry"),
    transX = op.inValue("Translate X"),
    transY = op.inValue("Translate Y"),
    transZ = op.inValue("Translate Z"),
    scaleX = op.inValueSlider("Scale X", 1),
    scaleY = op.inValueSlider("Scale Y", 1),
    scaleZ = op.inValueSlider("Scale Z", 1),
    rotX = op.inValue("Rotation X"),
    rotY = op.inValue("Rotation Y"),
    rotZ = op.inValue("Rotation Z"),
    outGeom = op.outObject("Result", null, "geometry");

transX.onChange =
    transY.onChange =
    transZ.onChange =
    scaleX.onChange =
    scaleY.onChange =
    scaleZ.onChange =
    rotX.onChange =
    rotY.onChange =
    rotZ.onChange =
    geometry.onChange = update;

const rotVec = vec3.create();
const emptyVec = vec3.create();
const transVec = vec3.create();
const centerVec = vec3.create();

function update()
{
    const oldGeom = geometry.get();
    const i = 0;

    if (oldGeom && oldGeom.copy)
    {
        const geom = oldGeom.copy();

        for (let i = 0; i < geom.vertices.length; i += 3)
        {
            geom.vertices[i + 0] *= scaleX.get();
            geom.vertices[i + 1] *= scaleY.get();
            geom.vertices[i + 2] *= scaleZ.get();

            geom.vertices[i + 0] += transX.get();
            geom.vertices[i + 1] += transY.get();
            geom.vertices[i + 2] += transZ.get();
        }

        for (let i = 0; i < geom.vertices.length; i += 3)
        {
            vec3.set(rotVec,
                geom.vertices[i + 0],
                geom.vertices[i + 1],
                geom.vertices[i + 2]);

            vec3.rotateX(rotVec, rotVec, transVec, rotX.get() * CGL.DEG2RAD);
            vec3.rotateY(rotVec, rotVec, transVec, rotY.get() * CGL.DEG2RAD);
            vec3.rotateZ(rotVec, rotVec, transVec, rotZ.get() * CGL.DEG2RAD);

            geom.vertices[i + 0] = rotVec[0];
            geom.vertices[i + 1] = rotVec[1];
            geom.vertices[i + 2] = rotVec[2];
        }

        outGeom.setRef(geom);
    }
    else
    {
        outGeom.setRef(null);
    }
}

}
};

CABLES.OPS["9678fee2-5436-499c-b94d-2603cdbeb380"]={f:Ops.Graphics.Geometry.TransformGeometry,objName:"Ops.Graphics.Geometry.TransformGeometry"};




// **************************************************************
// 
// Ops.Graphics.Meshes.Circle_v3
// 
// **************************************************************

Ops.Graphics.Meshes.Circle_v3= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("render"),
    radius = op.inValue("radius", 0.5),
    innerRadius = op.inValueSlider("innerRadius", 0),
    segments = op.inValueInt("segments", 40),
    percent = op.inValueSlider("percent", 1),
    steps = op.inValue("steps", 0),
    invertSteps = op.inValueBool("invertSteps", false),
    mapping = op.inSwitch("mapping", ["flat", "round"]),
    drawSpline = op.inValueBool("Spline", false),
    inDraw = op.inValueBool("Draw", true),
    trigger = op.outTrigger("trigger"),
    geomOut = op.outObject("geometry", null, "geometry");

op.setPortGroup("Size", [radius, innerRadius]);
op.setPortGroup("Display", [percent, steps, invertSteps]);
op.toWorkShouldNotBeChild("Ops.Gl.TextureEffects.ImageCompose", CABLES.OP_PORT_TYPE_FUNCTION);

inDraw.setUiAttribs({ "title": "Render mesh" });

mapping.set("flat");

mapping.onChange =
    segments.onChange =
    radius.onChange =
    innerRadius.onChange =
    percent.onChange =
    steps.onChange =
    invertSteps.onChange =
    drawSpline.onChange = calcLater;

geomOut.ignoreValueSerialize = true;
const cgl = op.patch.cgl;

let geom = new CGL.Geometry("circle");
let mesh = null;
const lastSegs = -1;

let oldPrim = 0;
let shader = null;
let needsCalc = true;

render.onTriggered = renderMesh;
op.onDelete = function () { if (mesh)mesh.dispose(); };

op.preRender = () =>
{
    renderMesh();
};

render.onLinkChanged = function ()
{
    if (!render.isLinked()) geomOut.set(null);
    else geomOut.setRef(geom);
};

function renderMesh()
{
    if (!op.patch.cg) return;
    if (needsCalc)calc();

    if (!CGL.TextureEffect.checkOpNotInTextureEffect(op)) return;

    shader = op.patch.cg.getShader();
    if (!shader) return;
    oldPrim = shader.glPrimitive;

    if (drawSpline.get()) shader.glPrimitive = cgl.gl.LINE_STRIP;

    if (inDraw.get() && mesh)
    {
        // mesh.instances = 3;
        mesh.render(shader);
    }
    trigger.trigger();

    shader.glPrimitive = oldPrim;
}

function calc()
{
    const segs = Math.max(3, Math.floor(segments.get()));

    geom.clear();

    const faces = [];
    const texCoords = [];
    const vertexNormals = [];
    const tangents = [];
    const biTangents = [];

    let i = 0, degInRad = 0;
    let oldPosX = 0, oldPosY = 0;
    let oldPosXTexCoord = 0, oldPosYTexCoord = 0;

    let oldPosXIn = 0, oldPosYIn = 0;
    let oldPosXTexCoordIn = 0, oldPosYTexCoordIn = 0;

    let posxTexCoordIn = 0, posyTexCoordIn = 0;
    let posxTexCoord = 0, posyTexCoord = 0;
    let posx = 0, posy = 0;

    const perc = Math.max(0.0, percent.get());
    const verts = [];

    if (drawSpline.get())
    {
        let lastX = 0;
        let lastY = 0;
        const tc = [];
        for (i = 0; i <= segs * perc; i++)
        {
            degInRad = (360 / segs) * i * CGL.DEG2RAD;
            posx = Math.cos(degInRad) * radius.get();
            posy = Math.sin(degInRad) * radius.get();

            posyTexCoord = 0.5;

            if (i > 0)
            {
                verts.push(lastX);
                verts.push(lastY);
                verts.push(0);
                posxTexCoord = 1.0 - (i - 1) / segs;

                tc.push(posxTexCoord, posyTexCoord);
            }
            verts.push(posx);
            verts.push(posy);
            verts.push(0);

            lastX = posx;
            lastY = posy;
        }
        geom.setPointVertices(verts);
    }
    else
    if (innerRadius.get() <= 0)
    {
        for (i = 0; i <= segs * perc; i++)
        {
            degInRad = (360 / segs) * i * CGL.DEG2RAD;
            posx = Math.cos(degInRad) * radius.get();
            posy = Math.sin(degInRad) * radius.get();

            if (mapping.get() == "flat")
            {
                posxTexCoord = (Math.cos(degInRad) + 1.0) / 2;
                posyTexCoord = 1.0 - (Math.sin(degInRad) + 1.0) / 2;
                posxTexCoordIn = 0.5;
                posyTexCoordIn = 0.5;
            }
            else if (mapping.get() == "round")
            {
                posxTexCoord = 1.0 - i / segs;
                posyTexCoord = 0;
                posxTexCoordIn = posxTexCoord;
                posyTexCoordIn = 1;
            }

            faces.push(
                [0, 0, 0],
                [oldPosX, oldPosY, 0],
                [posx, posy, 0]
            );

            texCoords.push(
                posxTexCoordIn, posyTexCoordIn, oldPosXTexCoord, oldPosYTexCoord, posxTexCoord, posyTexCoord
            );
            vertexNormals.push(0, 0, 1, 0, 0, 1, 0, 0, 1);
            tangents.push(1, 0, 0, 1, 0, 0, 1, 0, 0);
            biTangents.push(0, -1, 0, 0, -1, 0, 0, -1, 0);

            oldPosXTexCoord = posxTexCoord;
            oldPosYTexCoord = posyTexCoord;

            oldPosX = posx;
            oldPosY = posy;
        }

        geom = CGL.Geometry.buildFromFaces(faces, "circle");
        geom.vertexNormals = vertexNormals;
        geom.tangents = tangents;
        geom.biTangents = biTangents;
        geom.texCoords = texCoords;
    }
    else
    {
        let count = 0;
        const numSteps = segs * perc;
        const pos = 0;

        for (i = 0; i <= numSteps; i++)
        {
            count++;

            degInRad = (360 / segs) * i * CGL.DEG2RAD;
            posx = Math.cos(degInRad) * radius.get();
            posy = Math.sin(degInRad) * radius.get();

            const posxIn = Math.cos(degInRad) * innerRadius.get() * radius.get();
            const posyIn = Math.sin(degInRad) * innerRadius.get() * radius.get();

            if (mapping.get() == "round")
            {
                posxTexCoord = 1.0 - i / segs;
                posyTexCoord = 0;
                posxTexCoordIn = posxTexCoord;
                posyTexCoordIn = 1;
            }

            if (steps.get() === 0.0 ||
                (count % parseInt(steps.get(), 10) === 0 && !invertSteps.get()) ||
                (count % parseInt(steps.get(), 10) !== 0 && invertSteps.get()))
            {
                faces.push(
                    [posxIn, posyIn, 0],
                    [oldPosX, oldPosY, 0],
                    [posx, posy, 0]
                );

                faces.push(
                    [oldPosXIn, oldPosYIn, 0],
                    [oldPosX, oldPosY, 0],
                    [posxIn, posyIn, 0]
                );

                texCoords.push(
                    posxTexCoord, 0, oldPosXTexCoord, 0, posxTexCoordIn, 1, posxTexCoord, 1, oldPosXTexCoord, 0, oldPosXTexCoordIn, 1);

                vertexNormals.push(0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1);
                tangents.push(1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0);
                biTangents.push(0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1);
            }

            oldPosXTexCoordIn = posxTexCoordIn;
            oldPosYTexCoordIn = posyTexCoordIn;

            oldPosXTexCoord = posxTexCoord;
            oldPosYTexCoord = posyTexCoord;

            oldPosX = posx;
            oldPosY = posy;

            oldPosXIn = posxIn;
            oldPosYIn = posyIn;
        }

        geom = CGL.Geometry.buildFromFaces(faces, "circle");
        geom.vertexNormals = vertexNormals;
        geom.tangents = tangents;
        geom.biTangents = biTangents;

        if (mapping.get() == "flat") geom.mapTexCoords2d();
        else geom.texCoords = texCoords;
    }

    geomOut.setRef(geom);

    if (geom.vertices.length == 0) return;
    if (mesh) mesh.dispose();
    mesh = null;
    if (op.patch.cg)
        mesh = op.patch.cg.createMesh(geom, { "opId": op.id });
    needsCalc = false;
}

function calcLater()
{
    needsCalc = true;
}

}
};

CABLES.OPS["ae07830b-91c3-4cbe-a7d6-d3b737392c16"]={f:Ops.Graphics.Meshes.Circle_v3,objName:"Ops.Graphics.Meshes.Circle_v3"};




// **************************************************************
// 
// Ops.Math.Subtract
// 
// **************************************************************

Ops.Math.Subtract= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    number1 = op.inValue("number1", 1),
    number2 = op.inValue("number2", 1),
    result = op.outNumber("result");

op.setUiAttribs({ "mathTitle": true });

number1.onChange =
    number2.onChange = exec;
exec();

function exec()
{
    let v = number1.get() - number2.get();
    if (!isNaN(v)) result.set(v);
}

}
};

CABLES.OPS["a4ffe852-d200-4b96-9347-68feb01122ca"]={f:Ops.Math.Subtract,objName:"Ops.Math.Subtract"};




// **************************************************************
// 
// Ops.Array.ArrayChunk
// 
// **************************************************************

Ops.Array.ArrayChunk= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const inArrayPort = op.inArray("Input Array"),
    beginPort = op.inValueInt("Begin Index", 0),
    sizePort = op.inValueInt("Chunk Size", 1),
    circularPort = op.inValueBool("Circular", false),
    outArrayPort = op.outArray("Output Array"),
    outArrayLength = op.outNumber("Array length");

let newArr = [];
inArrayPort.onChange = setOutarray;
beginPort.onChange = setOutarray;
sizePort.onChange = setOutarray;
circularPort.onChange = setOutarray;

function setOutarray()
{
    let inArr = inArrayPort.get();
    let begin = Math.floor(beginPort.get());
    let size = Math.floor(sizePort.get());
    let circular = circularPort.get();

    if (!inArr)
    {
        outArrayPort.set(null);
        return;
    }
    if (begin < 0)
    {
        begin = 0;
    }
    if (circular && begin >= inArr.length)
    {
        begin %= inArr.length;
    }

    if (!inArr || size < 1)
    {
        outArrayPort.set(null);
        return;
    }
    let end = size + begin;

    let newLen = Math.min(inArr.length, begin + end) - begin;
    if (newLen < 0)
    {
        // op.setUiError("idx", "invalid index/array length");
        newLen = 0;
    }
    else op.setUiError("idx", null);
    newLen = Math.min(newLen, size);

    if (newLen > size) newLen = inArr.length;
    newArr.length = newLen;
    for (let i = begin; i < newLen + begin; i++)
    {
        newArr[i - begin] = inArr[i];
    }

    outArrayLength.set(newLen);
    outArrayPort.setRef(newArr);
}

}
};

CABLES.OPS["c7ee6c6e-ca88-4c24-b289-78bb922bf5f7"]={f:Ops.Array.ArrayChunk,objName:"Ops.Array.ArrayChunk"};




// **************************************************************
// 
// Ops.Vars.VarSetObject_v2
// 
// **************************************************************

Ops.Vars.VarSetObject_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const val = op.inObject("Value", null);
op.varName = op.inDropDown("Variable", [], "", true);

new CABLES.VarSetOpWrapper(op, "object", val, op.varName);

}
};

CABLES.OPS["c7608375-5b45-4bca-87ef-d0c5e970779a"]={f:Ops.Vars.VarSetObject_v2,objName:"Ops.Vars.VarSetObject_v2"};




// **************************************************************
// 
// Ops.Vars.VarGetObject_v2
// 
// **************************************************************

Ops.Vars.VarGetObject_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const val = op.outObject("Value");
op.varName = op.inValueSelect("Variable", [], "", true);

new CABLES.VarGetOpWrapper(op, "object", op.varName, val);

}
};

CABLES.OPS["321419d9-69c7-4310-a327-93d310bc2b8e"]={f:Ops.Vars.VarGetObject_v2,objName:"Ops.Vars.VarGetObject_v2"};




// **************************************************************
// 
// Ops.Patch.PK3cVbR.ExtractContentNodesPositions
// 
// **************************************************************

Ops.Patch.PK3cVbR.ExtractContentNodesPositions= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
// welcome to your new op!
// have a look at the documentation:
// https://cables.gl/docs/5_writing_ops/dev_ops/dev_ops

const
    currentPositionsIn = op.inArray("Current Positions"),
    graphSizeIn = op.inInt("Graph Size"),
    categoriesCountIn = op.inInt("Categories Count"),
    nodesMaskIn = op.inArray("Nodes Mask"),
    maskedContentPositionOut = op.outArray("Content Masked Positions"),
    maskedGlobalPositionOut = op.outArray("Global Masked Positions");

categoriesCountIn.onChange = currentPositionsIn.onChange;
nodesMaskIn.onChange = currentPositionsIn.onChange;
currentPositionsIn.onChange = () =>
{
    const positions = currentPositionsIn.get();
    const categoriesCount = categoriesCountIn.get();
    const nodesMask = nodesMaskIn.get();
    const graphSize = graphSizeIn.get();
    const maskedContentPosition = [];
    const maskedGlobalPosition = [];

    for (var i = 0 ; i < graphSize; i++) {
        if (nodesMask[i] != 0) {
            maskedGlobalPosition.push(positions[i*2], positions[i*2+1]);
            if (i >= categoriesCount) {
                maskedContentPosition.push(positions[i*2], positions[i*2+1]);
            }

        }
    }

    maskedContentPositionOut.set(maskedContentPosition);
    maskedGlobalPositionOut.set(maskedGlobalPosition);

};

}
};

CABLES.OPS["5d9ab002-5642-49fa-b62d-3b4dd21d2921"]={f:Ops.Patch.PK3cVbR.ExtractContentNodesPositions,objName:"Ops.Patch.PK3cVbR.ExtractContentNodesPositions"};




// **************************************************************
// 
// Ops.Patch.PK3cVbR.SubMatrix
// 
// **************************************************************

Ops.Patch.PK3cVbR.SubMatrix= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    exec = op.inTrigger("Trigger"),
    mIn = op.inArray("Matrix"),
    maskIn = op.inArray("Mask"),
    typeIn = op.inSwitch("Type", ["Intersection", "Union", "Keep N nodes"], "Union"),
    nodesToKeep = op.inInt("Main Nodes", 0),
    next = op.outTrigger("Next"),
    result = op.outArray("SubMatrix");

exec.onTriggered = () =>
{
    const type = typeIn.get();
    const matrix = mIn.get();
    const mask = maskIn.get();
    const size = mask.length;
    const subMatrix = new Array(size * size);

    for (let i = 0; i < size; i++)
    {
        for (let j = 0; j < size; j++)
        {
            let index = i * size + j;
            if (type == "Union" && (mask[i] != 0 || mask[j] != 0))
            {
                subMatrix[index] = matrix[index];
            }
            else if (type == "Intersection" && mask[i] != 0 && mask[j] != 0)
            {
                subMatrix[index] = matrix[index];
            }
            else
            {
                subMatrix[index] = 0;
            }
        }
    }
    result.set(subMatrix);
};

}
};

CABLES.OPS["917b24b8-f572-4acc-aae4-fc621a8470db"]={f:Ops.Patch.PK3cVbR.SubMatrix,objName:"Ops.Patch.PK3cVbR.SubMatrix"};




// **************************************************************
// 
// Ops.Patch.PK3cVbR.DrawVariableWidthEdgesContent
// 
// **************************************************************

Ops.Patch.PK3cVbR.DrawVariableWidthEdgesContent= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const triggerIn = op.inTrigger("Trigger");
const nodePositionsIn = op.inArray("NodePositions2D");
const edgeWeightMatrixIn = op.inArray("EdgeWeightMatrix");
const graphSizeIn = op.inInt("GraphSize");
const categoriesCountIn = op.inInt("Categories Count");
const minThicknessIn = op.inFloat("MinThickness", 0.15);
const maxThicknessIn = op.inFloat("MaxThickness", 1.5);
const defaultEdgeZIn = op.inFloat("DefaultEdgeZ", 0.0); // To place edges slightly behind/in-front of nodes
const normalizeWeightsIn = op.inBool("NormalizeWeights", true);
const nodesMaskIn = op.inArray("Nodes Mask");
const triggerOut = op.outTrigger("Next");

const translationsOut = op.outArray("EdgeTranslations");
const rotationsOut = op.outArray("EdgeRotations"); // Euler ZYX: [rx,ry,rz,...]
const scalesOut = op.outArray("EdgeScales");     // [sx,sy,sz,...]
const instanceCountOut = op.outNumber("EdgeInstanceCount");

// Helper to map a value from one range to another
function mapRange(value, inMin, inMax, outMin, outMax) {
    // Clamp value to inMin-inMax range first
    const clampedValue = Math.max(inMin, Math.min(inMax, value));
    if (inMin === inMax) return (outMin + outMax) / 2; // Avoid division by zero, return midpoint
    return outMin + (outMax - outMin) * (clampedValue - inMin) / (inMax - inMin);
}

nodesMaskIn.onChange = triggerIn.onTriggered;

triggerIn.onTriggered = () => {
    const positions = nodePositionsIn.get();
    const adjWeights = edgeWeightMatrixIn.get();
    const graphSize = graphSizeIn.get();
    const categoriesCount = categoriesCountIn.get();
    const minThick = minThicknessIn.get();
    const maxThick = maxThicknessIn.get();
    const edgeZ = defaultEdgeZIn.get();
    const normalize = normalizeWeightsIn.get();
    const nodesMask = nodesMaskIn.get();

    const translations = [];
    const rotations = [];
    const scales = [];
    let edgeCount = 0;

    if (!positions || !adjWeights || graphSize === 0 || positions.length < graphSize * 2 || adjWeights.length < graphSize * graphSize) {
        console.warn("PrepareEdgeMeshes: Insufficient data.");
        translationsOut.set(new Float32Array(0));
        rotationsOut.set(new Float32Array(0));
        scalesOut.set(new Float32Array(0));
        instanceCountOut.set(0);
        triggerOut.trigger();
        return;
    }

    let dataMinWeight = Infinity;
    let dataMaxWeight = -Infinity;
    if (normalize) {
        for (let i = 0; i < graphSize; i++) {
            for (let j = i + 1; j < graphSize; j++) {
                const weight = adjWeights[i * graphSize + j];
                if (weight > 0) { // Only consider actual edges for min/max weight
                    if (weight < dataMinWeight) dataMinWeight = weight;
                    if (weight > dataMaxWeight) dataMaxWeight = weight;
                }
            }
        }
        if (dataMinWeight === Infinity) { // No edges found
             dataMinWeight = 0; dataMaxWeight = 1; // Avoid issues, effectively makes all thicknesses minThick
        }
    }


    for (let i = 0; i < graphSize; i++) {
        for (let j = i + 1; j < graphSize; j++) { // Iterate upper triangle to process each edge once
            const weight = adjWeights[i * graphSize + j];

            if (weight > 0 && nodesMask[i] != 0 && nodesMask[j] != 0) { // If there's an edge with positive weight
                edgeCount++;

                const x1 = positions[i * 2];
                const y1 = positions[i * 2 + 1];
                const x2 = positions[j * 2];
                const y2 = positions[j * 2 + 1];

                // 1. Calculate Translation (midpoint of the edge)
                const midX = (x1 + x2) / 2;
                const midY = (y1 + y2) / 2;
                translations.push(midX, midY, edgeZ);

                // 2. Calculate Scale
                const dx = x2 - x1;
                const dy = y2 - y1;
                const length = Math.sqrt(dx * dx + dy * dy);

                let thickness;
                if (normalize) {
                    thickness = mapRange(weight, dataMinWeight, dataMaxWeight, minThick, maxThick);
                } else {
                    // If not normalizing, you might want to clamp or directly use weight
                    // This example clamps, assuming weight is somewhat proportional to desired thickness
                    thickness = Math.max(minThick, Math.min(maxThick, weight));
                }
                thickness = Math.max(0.001, thickness); // Ensure thickness is not zero

                // Assuming base mesh (Plane) is 1x1 unit, oriented along its X-axis by default
                // We scale X by length, Y by thickness
                scales.push(length, thickness, 1.0); // Scale Z by 1 (or desired depth if any)

                // 3. Calculate Rotation (around Z-axis for 2D)
                const angleRad = Math.atan2(dy, dx) * 180 / 3.1415; // Angle in radians
                rotations.push(0, 0, angleRad); // Rotate around Z axis
            }
        }
    }

    translationsOut.set(new Float32Array(translations));
    rotationsOut.set(new Float32Array(rotations));
    scalesOut.set(new Float32Array(scales));
    instanceCountOut.set(edgeCount);
    triggerOut.trigger();
};
}
};

CABLES.OPS["efd65f3e-ae98-4ac9-ac7e-5acf77f81e2e"]={f:Ops.Patch.PK3cVbR.DrawVariableWidthEdgesContent,objName:"Ops.Patch.PK3cVbR.DrawVariableWidthEdgesContent"};




// **************************************************************
// 
// Ops.Sidebar.Slider_v3
// 
// **************************************************************

Ops.Sidebar.Slider_v3= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
// constants
const STEP_DEFAULT = 0.00001;

// inputs
const parentPort = op.inObject("link");
const labelPort = op.inString("Text", "Slider");
const minPort = op.inValue("Min", 0);
const maxPort = op.inValue("Max", 1);
const stepPort = op.inValue("Step", STEP_DEFAULT);
const labelSuffix = op.inString("Suffix", "");

const inGreyOut = op.inBool("Grey Out", false);
const inVisible = op.inBool("Visible", true);

const inputValuePort = op.inValue("Input", 0.5);
const setDefaultValueButtonPort = op.inTriggerButton("Set Default");
const reset = op.inTriggerButton("Reset");

let parent = null;

const defaultValuePort = op.inValue("Default", 0.5);
defaultValuePort.setUiAttribs({ "hidePort": true, "greyout": true });

// outputs
const siblingsPort = op.outObject("childs");
const valuePort = op.outNumber("Result", defaultValuePort.get());

op.toWorkNeedsParent("Ops.Sidebar.Sidebar");
op.setPortGroup("Range", [minPort, maxPort, stepPort]);
op.setPortGroup("Display", [inGreyOut, inVisible]);

// vars
const el = document.createElement("div");
el.addEventListener("dblclick", function ()
{
    valuePort.set(parseFloat(defaultValuePort.get()));
    inputValuePort.set(parseFloat(defaultValuePort.get()));
    setValueFieldValue(defaultValuePort.get());
});

el.dataset.op = op.id;
el.classList.add("cablesEle");

el.classList.add("sidebar__item");
el.classList.add("sidebar__slider");
el.classList.add("sidebar__reloadable");

op.patch.on("sidebarStylesChanged", () => { updateActiveTrack(); });

const label = document.createElement("div");
label.classList.add("sidebar__item-label");

const greyOut = document.createElement("div");
greyOut.classList.add("sidebar__greyout");
el.appendChild(greyOut);
greyOut.style.display = "none";

const labelText = document.createTextNode(labelPort.get());
label.appendChild(labelText);
el.appendChild(label);

const value = document.createElement("input");
value.value = defaultValuePort.get();
value.classList.add("sidebar__text-input-input");
value.setAttribute("type", "text");

value.oninput = onTextInputChanged;
el.appendChild(value);

const suffixEle = document.createElement("span");
// setValueFieldValue(defaultValuePort).get();
// value.setAttribute("type", "text");
// value.oninput = onTextInputChanged;

el.appendChild(suffixEle);

labelSuffix.onChange = () =>
{
    suffixEle.innerHTML = labelSuffix.get();
};

const inputWrapper = document.createElement("div");
inputWrapper.classList.add("sidebar__slider-input-wrapper");
el.appendChild(inputWrapper);

const activeTrack = document.createElement("div");
activeTrack.classList.add("sidebar__slider-input-active-track");
inputWrapper.appendChild(activeTrack);
const input = document.createElement("input");
input.classList.add("sidebar__slider-input");
input.setAttribute("min", minPort.get());
input.setAttribute("max", maxPort.get());
input.setAttribute("type", "range");
input.setAttribute("step", stepPort.get());
input.setAttribute("value", defaultValuePort.get());
input.style.display = "block"; /* needed because offsetWidth returns 0 otherwise */
inputWrapper.appendChild(input);

updateActiveTrack();
input.addEventListener("input", onSliderInput);

// events
parentPort.onChange = onParentChanged;
labelPort.onChange = onLabelTextChanged;
inputValuePort.onChange = onInputValuePortChanged;
defaultValuePort.onChange = onDefaultValueChanged;
setDefaultValueButtonPort.onTriggered = onSetDefaultValueButtonPress;
minPort.onChange = onMinPortChange;
maxPort.onChange = onMaxPortChange;
stepPort.onChange = stepPortChanged;
op.onDelete = onDelete;

// op.onLoadedValueSet=function()
op.onLoaded = op.onInit = function ()
{
    if (op.patch.config.sidebar)
    {
        op.patch.config.sidebar[labelPort.get()];
        valuePort.set(op.patch.config.sidebar[labelPort.get()]);
    }
    else
    {
        valuePort.set(parseFloat(defaultValuePort.get()));
        inputValuePort.set(parseFloat(defaultValuePort.get()));
        // onInputValuePortChanged();
    }
};

reset.onTriggered = function ()
{
    const newValue = parseFloat(defaultValuePort.get());
    valuePort.set(newValue);
    setValueFieldValue(newValue);
    setInputFieldValue(newValue);
    inputValuePort.set(newValue);
    updateActiveTrack();
};

inGreyOut.onChange = function ()
{
    greyOut.style.display = inGreyOut.get() ? "block" : "none";
};

inVisible.onChange = function ()
{
    el.style.display = inVisible.get() ? "block" : "none";
};

function onTextInputChanged(ev)
{
    let newValue = parseFloat(ev.target.value);
    if (isNaN(newValue)) newValue = 0;
    const min = minPort.get();
    const max = maxPort.get();
    if (newValue < min) { newValue = min; }
    else if (newValue > max) { newValue = max; }
    // setInputFieldValue(newValue);
    valuePort.set(newValue);
    updateActiveTrack();
    inputValuePort.set(newValue);
    op.refreshParams();
}

function onInputValuePortChanged()
{
    let newValue = parseFloat(inputValuePort.get());
    const minValue = minPort.get();
    const maxValue = maxPort.get();
    if (newValue > maxValue) { newValue = maxValue; }
    else if (newValue < minValue) { newValue = minValue; }
    // setValueFieldValue(newValue);
    setInputFieldValue(newValue);
    valuePort.set(newValue);
    updateActiveTrack();
}

function onSetDefaultValueButtonPress()
{
    let newValue = parseFloat(inputValuePort.get());
    const minValue = minPort.get();
    const maxValue = maxPort.get();
    if (newValue > maxValue) { newValue = maxValue; }
    else if (newValue < minValue) { newValue = minValue; }
    setValueFieldValue(newValue);
    setInputFieldValue(newValue);
    valuePort.set(newValue);
    defaultValuePort.set(newValue);
    op.refreshParams();

    updateActiveTrack();
}

function onSliderInput(ev)
{
    ev.preventDefault();
    ev.stopPropagation();
    setValueFieldValue(ev.target.value);
    const inputFloat = parseFloat(ev.target.value);
    valuePort.set(inputFloat);
    inputValuePort.set(inputFloat);
    op.refreshParams();

    updateActiveTrack();
    return false;
}

function stepPortChanged()
{
    const step = stepPort.get();
    input.setAttribute("step", step);
    updateActiveTrack();
}

function updateActiveTrack(val)
{
    let valueToUse = parseFloat(input.value);
    if (typeof val !== "undefined") valueToUse = val;
    let availableWidth = activeTrack.parentElement.getBoundingClientRect().width || 220;
    if (parent) availableWidth = parseInt(getComputedStyle(parent.parentElement).getPropertyValue("--sidebar-width")) - 20;

    const trackWidth = CABLES.map(
        valueToUse,
        parseFloat(input.min),
        parseFloat(input.max),
        0,
        availableWidth - 16 /* subtract slider thumb width */
    );
    activeTrack.style.width = trackWidth + "px";
}

function onMinPortChange()
{
    const min = minPort.get();
    input.setAttribute("min", min);
    updateActiveTrack();
}

function onMaxPortChange()
{
    const max = maxPort.get();
    input.setAttribute("max", max);
    updateActiveTrack();
}

function onDefaultValueChanged()
{
    const defaultValue = defaultValuePort.get();
    valuePort.set(parseFloat(defaultValue));
    onMinPortChange();
    onMaxPortChange();
    setInputFieldValue(defaultValue);
    setValueFieldValue(defaultValue);

    updateActiveTrack(defaultValue); // needs to be passed as argument, is this async?
}

function onLabelTextChanged()
{
    const labelText = labelPort.get();
    label.textContent = labelText;
    if (CABLES.UI) op.setUiAttrib({ "extendTitle": labelText });
    value.setAttribute("aria-label", "slider " + labelPort.get());
    input.setAttribute("aria-label", "slider " + labelPort.get());
}

function onParentChanged()
{
    siblingsPort.set(null);
    parent = parentPort.get();
    if (parent && parent.parentElement)
    {
        parent.parentElement.appendChild(el);
        siblingsPort.set(parent);
    }
    else if (el.parentElement) el.parentElement.removeChild(el);

    updateActiveTrack();
}

function setValueFieldValue(v)
{
    value.value = v;
}

function setInputFieldValue(v)
{
    input.value = v;
}

function showElement(el)
{
    if (el)el.style.display = "block";
}

function hideElement(el)
{
    if (el)el.style.display = "none";
}

function onDelete()
{
    removeElementFromDOM(el);
}

function removeElementFromDOM(el)
{
    if (el && el.parentNode && el.parentNode.removeChild) el.parentNode.removeChild(el);
}

}
};

CABLES.OPS["74730122-5cba-4d0d-b610-df334ec6220a"]={f:Ops.Sidebar.Slider_v3,objName:"Ops.Sidebar.Slider_v3"};




// **************************************************************
// 
// Ops.Number.TriggerOnChangeNumber_v2
// 
// **************************************************************

Ops.Number.TriggerOnChangeNumber_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inval = op.inFloat("Value"),
    next = op.outTrigger("Next"),
    number = op.outNumber("Number");

inval.onChange = function ()
{
    number.set(inval.get());
    next.trigger();
};

op.init = () =>
{
    if (inval.isLinked())next.trigger();
};

}
};

CABLES.OPS["63ec7ad7-a436-4f72-8b5e-257cc20049d4"]={f:Ops.Number.TriggerOnChangeNumber_v2,objName:"Ops.Number.TriggerOnChangeNumber_v2"};




// **************************************************************
// 
// Ops.Array.Array2To3
// 
// **************************************************************

Ops.Array.Array2To3= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inArr = op.inArray("Array2x", 2),
    outArr = op.outArray("Array3x", 3),
    outTotalPoints = op.outNumber("Total points"),
    outArrayLength = op.outNumber("Array length");

let arr = [];
let showingError = false;

inArr.onChange = function ()
{
    let theArray = inArr.get();
    if (!theArray)
    {
        outArr.set(null);
        return;
    }

    if (theArray.length % 2 != 0)
    {
        if (!showingError)
        {
            op.setUiError("warning", "Arrays length not divisible by 2!");
            showingError = true;
        }
        outArr.set(null);
        outTotalPoints.set(0);
        outArrayLength.set(0);
        return;
    }
    if (showingError)
    {
        showingError = false;
        op.setUiError("warning", null);
    }

    if ((theArray.length / 2) * 3 != arr.length)
    {
        arr.length = (theArray.length / 2) * 3;
    }

    for (let i = 0; i < theArray.length / 2; i++)
    {
        arr[i * 3 + 0] = theArray[i * 2 + 0];
        arr[i * 3 + 1] = theArray[i * 2 + 1];
        arr[i * 3 + 2] = 0;
    }

    outArr.setRef(arr);
    outTotalPoints.set(arr.length / 3);
    outArrayLength.set(arr.length);
};

}
};

CABLES.OPS["9854162e-d415-4300-a47b-173772b454e9"]={f:Ops.Array.Array2To3,objName:"Ops.Array.Array2To3"};




// **************************************************************
// 
// Ops.Array.ArrayIteratorTextures
// 
// **************************************************************

Ops.Array.ArrayIteratorTextures= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    exe = op.inTrigger("exe"),
    arr = op.inArray("array"),
    trigger = op.outTrigger("trigger"),
    finished = op.outTrigger("finished"),
    idx = op.outNumber("index"),
    val = op.outObject("value", null, "texture");

exe.onTriggered = function ()
{
    const theArr = arr.get();
    if (!theArr)
    {
        val.set(CGL.Texture.getEmptyTexture(op.patch.cgl));
        return;
    }

    for (let i = 0; i < theArr.length; i++)
    {
        val.setRef(theArr[i] || CGL.Texture.getEmptyTexture(op.patch.cgl));
        idx.set(i);

        trigger.trigger();
    }
    finished.trigger();
};

}
};

CABLES.OPS["dc000b9e-74c4-4284-851d-55cc79d7f76b"]={f:Ops.Array.ArrayIteratorTextures,objName:"Ops.Array.ArrayIteratorTextures"};




// **************************************************************
// 
// Ops.String.NumberToString_v2
// 
// **************************************************************

Ops.String.NumberToString_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    val = op.inValue("Number"),
    decPlaces = op.inInt("Decimal Places", 4),
    result = op.outString("Result");

let doDec = false;
let decm = 1;
decPlaces.onChange = updateDecm;
val.onChange = update;
updateDecm();
update();

function updateDecm()
{
    doDec = decPlaces.get() < 100;
    decm = Math.pow(10, decPlaces.get());
    update();
}

function update()
{
    if (doDec)
        result.set(String(Math.round(val.get() * decm) / decm));
    else
        result.set(String(val.get() || 0));
}

}
};

CABLES.OPS["5c6d375a-82db-4366-8013-93f56b4061a9"]={f:Ops.String.NumberToString_v2,objName:"Ops.String.NumberToString_v2"};




// **************************************************************
// 
// Ops.String.String_v2
// 
// **************************************************************

Ops.String.String_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    v = op.inString("value", ""),
    result = op.outString("String");

v.onChange = function ()
{
    if (!v.isLinked())
        op.setUiAttrib({ "extendTitle": v.get() });

    result.set(v.get());
};

}
};

CABLES.OPS["d697ff82-74fd-4f31-8f54-295bc64e713d"]={f:Ops.String.String_v2,objName:"Ops.String.String_v2"};




// **************************************************************
// 
// Ops.Html.Elements.Element_v2
// 
// **************************************************************

Ops.Html.Elements.Element_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inText = op.inString("Text", "Element"),
    inPos = op.inSwitch("Position", ["Absolute", "Static", "Relative", "Fixed"], "Absolute"),
    inInteractive = op.inSwitch("Interactive", ["True", "False", "No Pointer Events"], "True"),

    inSetSize = op.inValueBool("Set Size", false),
    inWidth = op.inFloat("Width", 100),
    inHeight = op.inFloat("Height", 100),
    inSizeUnit = op.inSwitch("Size  Units", ["px", "%", "vwh"], "px"),

    inOverflow = op.inSwitch("Overflow", ["Visible", "Hidden", "Scroll", "Auto"], "Hidden"),

    inStyle = op.inStringEditor("Inline Style", "", "inline-css"),
    inClass = op.inString("CSS Class"),
    inBlacklist = op.inString("Disable CSS Props"),

    inDisplay = op.inDropDown("Display", ["None", "Block", "Inline", "inline-block", "flex", "inline-flex", "grid", "inline-grid", "flow-root"], "Block"),
    inTag = op.inString("Tag Name", "div"),
    inOpacity = op.inFloatSlider("Opacity", 1),
    inPropagation = op.inValueBool("Propagate Click-Events", true),

    outElement = op.outObject("DOM Element", null, "element"),
    outHover = op.outBoolNum("Hovering"),
    outClicked = op.outTrigger("Clicked");

op.setPortGroup("Area", [inWidth, inHeight, inSetSize, inSizeUnit, inOverflow]);
op.setPortGroup("CSS", [inClass, inStyle, inBlacklist]);

let listenerElement = null;
let oldStr = null;
let prevDisplay = "block";
let div = null;

const parent = op.patch.cgl.canvas.parentElement;

createElement();

inClass.onChange = updateClass;
inText.onChange = updateText;

inTag.onChange = () =>
{
    removeElement();
    createElement();
    updateClass();
    updateText();
};

inSetSize.onChange =
    updateUiAndStyle;

inDisplay.onChange =
    inOpacity.onChange =
    inPos.onChange =
    inWidth.onChange =
    inHeight.onChange =
    inOverflow.onChange =
    inSizeUnit.onChange =
    inHeight.onChange =
    inStyle.onChange = updateStyle;

inInteractive.onChange = updateInteractive;

updateText();
updateStyle();
warning();
updateInteractive();

let oldClassesStr = "";
op.onDelete = removeElement;

outElement.onLinkChanged = updateStyle;

inInteractive.onLinkChanged =
outClicked.onLinkChanged = () =>
{
    op.setUiError("interactiveProblem", null);
    if (outClicked.isLinked() && !isInteractive())
        op.setUiError("interactiveProblem", "Interactive should be activated when linking clicked port");
};

function updateUiAndStyle()
{
    inWidth.setUiAttribs({ "greyout": !inSetSize.get() });
    inHeight.setUiAttribs({ "greyout": !inSetSize.get() });
    updateStyle();
}

function createElement()
{
    div = op.patch.getDocument().createElement(inTag.get() || "div");
    div.dataset.op = op.id;
    div.classList.add("cablesEle");

    parent.appendChild(div);
    outElement.setRef(div);
    updateStyle();
}

function removeElement()
{
    if (div) removeClasses();
    if (div && div.parentNode) div.parentNode.removeChild(div);
    oldStr = null;
    div = null;
}

function updateText()
{
    let str = inText.get();

    if (oldStr === str) return;
    oldStr = str;

    if (div.innerHTML != str) div.innerHTML = str;
}

function updateStyle()
{
    if (!div) return;

    div.setAttribute("style", inStyle.get());

    div.style.position = inPos.get().toLowerCase();

    div.style.overflow = inOverflow.get().toLowerCase();
    div.style.display = inDisplay.get();
    div.style.opacity = inOpacity.get();
    if (inInteractive.get() == "No Pointer Events")div.style.pointerEvents = "none";

    if (inSetSize.get())
    {
        div.style.width = inWidth.get() + inSizeUnit.get();
        div.style.height = inHeight.get() + inSizeUnit.get();
    }
    else
    {
        div.style.width = "";
        div.style.height = "";
    }

    outElement.setRef(div);

    if (!div.parentElement) parent.appendChild(div);

    warning();
}

function removeClasses()
{
    if (!div) return;

    const classes = (inClass.get() || "").split(" ");
    for (let i = 0; i < classes.length; i++)
    {
        if (classes[i]) div.classList.remove(classes[i]);
    }
    oldClassesStr = "";
}

function updateClass()
{
    const classes = (inClass.get() || "").split(" ");
    const oldClasses = (oldClassesStr || "").split(" ");

    let found = false;

    for (let i = 0; i < oldClasses.length; i++)
    {
        if (
            oldClasses[i] &&
            classes.indexOf(oldClasses[i].trim()) == -1)
        {
            found = true;
            div.classList.remove(oldClasses[i]);
        }
    }

    for (let i = 0; i < classes.length; i++)
    {
        if (classes[i])
        {
            div.classList.add(classes[i].trim());
        }
    }

    oldClassesStr = inClass.get();
    warning();
    outElement.setRef(div);
}

function onMouseEnter(e)
{
    outHover.set(true);
}

function onMouseLeave(e)
{
    outHover.set(false);
}

function onKey(e)
{
    if (e.keyCode == 13 || e.keyCode == 32)outClicked.trigger();
}

function onMouseClick(e)
{
    if (!inPropagation.get()) e.stopPropagation();
    outClicked.trigger();
}

function isInteractive()
{
    return inInteractive.get() != "No Pointer Events";
}

function updateInteractive()
{
    op.setUiError("interactiveProblem", null);

    removeListeners();
    if (isInteractive()) addListeners();
    updateStyle();
}

function removeListeners()
{
    if (listenerElement)
    {
        listenerElement.removeEventListener("pointerdown", onMouseClick);
        listenerElement.removeEventListener("pointerleave", onMouseLeave);
        listenerElement.removeEventListener("pointerenter", onMouseEnter);
        listenerElement.removeEventListener("keydown", onKey, false);
        listenerElement.removeAttribute("tabindex");
        listenerElement = null;
    }
}

function addListeners()
{
    if (listenerElement)removeListeners();

    listenerElement = div;

    if (listenerElement)
    {
        listenerElement.addEventListener("pointerdown", onMouseClick);
        listenerElement.addEventListener("pointerleave", onMouseLeave);
        listenerElement.addEventListener("pointerenter", onMouseEnter);
        listenerElement.setAttribute("tabindex", 0);
        listenerElement.addEventListener("keydown", onKey, false);
    }
}

op.addEventListener("onEnabledChange", (enabled) =>
{
    removeElement();
    if (!enabled) return;

    createElement();
    updateStyle();
    updateClass();
    updateText();
    updateInteractive();
});

function warning()
{
    if (inClass.get() && inStyle.get())
    {
        op.setUiError("error", "Element uses external and inline CSS", 1);
    }
    else
    {
        op.setUiError("error", null);
    }
}

}
};

CABLES.OPS["a0d2cc80-0b2f-4422-ba2d-c903ac9ca297"]={f:Ops.Html.Elements.Element_v2,objName:"Ops.Html.Elements.Element_v2"};




// **************************************************************
// 
// Ops.Vars.VarTriggerNumber
// 
// **************************************************************

Ops.Vars.VarTriggerNumber= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    trigger = op.inTriggerButton("Trigger"),
    val = op.inValueFloat("Value", 0),
    next = op.outTrigger("Next");

op.varName = op.inDropDown("Variable", [], "", true);

new CABLES.VarSetOpWrapper(op, "number", val, op.varName, trigger, next);

}
};

CABLES.OPS["2c29baf0-2af2-486d-9218-4299594ee9c1"]={f:Ops.Vars.VarTriggerNumber,objName:"Ops.Vars.VarTriggerNumber"};




// **************************************************************
// 
// Ops.Math.Compare.Equals
// 
// **************************************************************

Ops.Math.Compare.Equals= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    number1 = op.inValue("number1", 1),
    number2 = op.inValue("number2", 1),
    result = op.outBoolNum("result");

number1.onChange =
    number2.onChange = exec;
exec();

function exec()
{
    result.set(number1.get() == number2.get());
}

}
};

CABLES.OPS["4dd3cc55-eebc-4187-9d4e-2e053a956fab"]={f:Ops.Math.Compare.Equals,objName:"Ops.Math.Compare.Equals"};




// **************************************************************
// 
// Ops.Boolean.IfFalseThen
// 
// **************************************************************

Ops.Boolean.IfFalseThen= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    exe = op.inTrigger("Exe"),
    boolean = op.inValueBool("Boolean", false),
    triggerThen = op.outTrigger("then"),
    triggerElse = op.outTrigger("else");

boolean.onChange = execBool;
exe.onTriggered = exec;

function execBool()
{
    if (exe.isLinked()) return;
    exec();
}

function exec()
{
    if (!boolean.get()) triggerThen.trigger();
    else triggerElse.trigger();
}

}
};

CABLES.OPS["91cf65f1-94ac-423f-a536-af71eed08440"]={f:Ops.Boolean.IfFalseThen,objName:"Ops.Boolean.IfFalseThen"};




// **************************************************************
// 
// Ops.Patch.PK3cVbR.ArrayMovingAverage
// 
// **************************************************************

Ops.Patch.PK3cVbR.ArrayMovingAverage= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const triggerIn = op.inTrigger("Trigger");
const arrayIn = op.inArray("Array");
const windowSizeIn = op.inInt("WindowSize", 5);
const arraySizeOptionalIn = op.inInt("ArraySize (optional)", 0);
const resetTrigger = op.inTrigger("Reset");

const triggerOut = op.outTrigger("Next");
const avgArrayOut = op.outArray("AveragedArray");

let history = [];
let determinedArraySize = 0;
let lastConfiguredSize = 0;
let lastInputArrayReference = null;

function weightedAverage(history, arraySize, historySize, coeff)
{
    const weightedAveragedArray = [];

    for (let i = 0; i < arraySize; i++)
    {
        let sum = 0;
        for (let j = 0; j < historySize; j++)
        {
            sum += history[j][i];
        }
        weightedAveragedArray[i] = sum / historySize;
    }

    return weightedAveragedArray;
}

function computeAndUpdate()
{
    const currentInputArray = arrayIn.get();
    const windowSize = Math.max(1, windowSizeIn.get());
    const currentConfiguredSize = arraySizeOptionalIn.get();

    if (currentConfiguredSize !== lastConfiguredSize)
    {
        determinedArraySize = currentConfiguredSize > 0 ? currentConfiguredSize : determinedArraySize;
        history.length = 0;
        lastInputArrayReference = null;
    }
    lastConfiguredSize = currentConfiguredSize;

    if (determinedArraySize === 0)
    {
        determinedArraySize = currentInputArray.length;
    }

    let arrayToAddToHistory = currentInputArray;
    if (currentInputArray !== lastInputArrayReference) {
        arrayToAddToHistory = currentInputArray;
        lastInputArrayReference = currentInputArray;
    } else {
        arrayToAddToHistory = history[history.length - 1];
    }

    const historyEntry = new Float32Array(determinedArraySize);
    for (let i = 0; i < determinedArraySize; i++)
    {
        historyEntry[i] = arrayToAddToHistory[i];
    }
    history.push(historyEntry);

    while (history.length > windowSize)
    {
        history.shift();
    }

    const numArraysInWindow = history.length;
    /*
    const coeff = numArraysInWindow * (numArraysInWindow + 1) / 2;
    const averagedValues = new Float32Array(
        weightedAverage(history, determinedArraySize, numArraysInWindow, coeff)
    );*/


    const averagedValues = new Float32Array(determinedArraySize);
    for (let i = 0; i < determinedArraySize; i++) {
        let sum = 0;
        for (let j = 0; j < numArraysInWindow; j++) {
            sum += history[j][i];
        }
        averagedValues[i] = sum / numArraysInWindow;
    }

    avgArrayOut.set(averagedValues);
    triggerOut.trigger();
}

triggerIn.onTriggered = computeAndUpdate;

arrayIn.onNewValue = () =>
{
    computeAndUpdate();
};

function reset()
{
    history.length = 0;
    determinedArraySize = 0;
    lastConfiguredSize = 0;
    lastInputArrayReference = null;
    avgArrayOut.set(new Float32Array(0));
    triggerOut.trigger();
}

resetTrigger.onTriggered = reset;

}
};

CABLES.OPS["9eb28cd4-ae24-4917-a28e-1ebd7dcf0669"]={f:Ops.Patch.PK3cVbR.ArrayMovingAverage,objName:"Ops.Patch.PK3cVbR.ArrayMovingAverage"};




// **************************************************************
// 
// Ops.Graphics.Transform
// 
// **************************************************************

Ops.Graphics.Transform= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("render"),
    posX = op.inValue("posX", 0),
    posY = op.inValue("posY", 0),
    posZ = op.inValue("posZ", 0),
    scale = op.inValue("scale", 1),
    rotX = op.inValue("rotX", 0),
    rotY = op.inValue("rotY", 0),
    rotZ = op.inValue("rotZ", 0),
    trigger = op.outTrigger("trigger");

op.setPortGroup("Rotation", [rotX, rotY, rotZ]);
op.setPortGroup("Position", [posX, posY, posZ]);
op.setPortGroup("Scale", [scale]);
op.setUiAxisPorts(posX, posY, posZ);

op.toWorkPortsNeedToBeLinked(render, trigger);

const vPos = vec3.create();
const vScale = vec3.create();
const transMatrix = mat4.create();
mat4.identity(transMatrix);

let
    doScale = false,
    doTranslate = false,
    translationChanged = true,
    scaleChanged = true,
    rotChanged = true;

rotX.onChange = rotY.onChange = rotZ.onChange = setRotChanged;
posX.onChange = posY.onChange = posZ.onChange = setTranslateChanged;
scale.onChange = setScaleChanged;

render.onTriggered = function ()
{
    // if(!CGL.TextureEffect.checkOpNotInTextureEffect(op)) return;

    let updateMatrix = false;
    if (translationChanged)
    {
        updateTranslation();
        updateMatrix = true;
    }
    if (scaleChanged)
    {
        updateScale();
        updateMatrix = true;
    }
    if (rotChanged) updateMatrix = true;

    if (updateMatrix) doUpdateMatrix();

    const cg = op.patch.cg || op.patch.cgl;
    cg.pushModelMatrix();
    mat4.multiply(cg.mMatrix, cg.mMatrix, transMatrix);

    trigger.trigger();
    cg.popModelMatrix();

    if (CABLES.UI)
    {
        if (!posX.isLinked() && !posY.isLinked() && !posZ.isLinked())
        {
            gui.setTransform(op.id, posX.get(), posY.get(), posZ.get());

            if (op.isCurrentUiOp())
                gui.setTransformGizmo(
                    {
                        "posX": posX,
                        "posY": posY,
                        "posZ": posZ,
                    });
        }
    }
};

// op.transform3d = function ()
// {
//     return { "pos": [posX, posY, posZ] };
// };

function doUpdateMatrix()
{
    mat4.identity(transMatrix);
    if (doTranslate)mat4.translate(transMatrix, transMatrix, vPos);

    if (rotX.get() !== 0)mat4.rotateX(transMatrix, transMatrix, rotX.get() * CGL.DEG2RAD);
    if (rotY.get() !== 0)mat4.rotateY(transMatrix, transMatrix, rotY.get() * CGL.DEG2RAD);
    if (rotZ.get() !== 0)mat4.rotateZ(transMatrix, transMatrix, rotZ.get() * CGL.DEG2RAD);

    if (doScale)mat4.scale(transMatrix, transMatrix, vScale);
    rotChanged = false;
}

function updateTranslation()
{
    doTranslate = false;
    if (posX.get() !== 0.0 || posY.get() !== 0.0 || posZ.get() !== 0.0) doTranslate = true;
    vec3.set(vPos, posX.get(), posY.get(), posZ.get());
    translationChanged = false;
}

function updateScale()
{
    // doScale=false;
    // if(scale.get()!==0.0)
    doScale = true;
    vec3.set(vScale, scale.get(), scale.get(), scale.get());
    scaleChanged = false;
}

function setTranslateChanged()
{
    translationChanged = true;
}

function setScaleChanged()
{
    scaleChanged = true;
}

function setRotChanged()
{
    rotChanged = true;
}

doUpdateMatrix();

}
};

CABLES.OPS["650baeb1-db2d-4781-9af6-ab4e9d4277be"]={f:Ops.Graphics.Transform,objName:"Ops.Graphics.Transform"};




// **************************************************************
// 
// Ops.Array.ArrayGetNumber
// 
// **************************************************************

Ops.Array.ArrayGetNumber= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    array = op.inArray("array"),
    index = op.inValueInt("index"),
    valueInvalid = op.inFloat("Value Invalid Index", 0),
    value = op.outNumber("value"),
    outValidIndex = op.outBoolNum("Valid Index", true);

array.ignoreValueSerialize = true;
op.toWorkPortsNeedToBeLinked(array);
index.onChange = array.onChange = update;

function update()
{
    if (array.get())
    {
        const input = array.get()[index.get()];
        if (isNaN(input))
        {
            value.set(valueInvalid.get());
            outValidIndex.set(false);
        }
        else
        {
            outValidIndex.set(true);
            value.set(parseFloat(input));
        }
    }
}

}
};

CABLES.OPS["d1189078-70cf-437d-9a37-b2ebe89acdaf"]={f:Ops.Array.ArrayGetNumber,objName:"Ops.Array.ArrayGetNumber"};




// **************************************************************
// 
// Ops.Patch.PK3cVbR.NodeDragger
// 
// **************************************************************

Ops.Patch.PK3cVbR.NodeDragger= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
// --- Inputs ---
const triggerIn = op.inTrigger("Trigger");
const mouseXIn = op.inFloat("Mouse X");
const mouseYIn = op.inFloat("Mouse Y");
const mouseButtonDownIn = op.inBool("Mouse Button Down");
const currentPositionsIn = op.inArray("CurrentNodePositions2D");
const currentSelectedNodesIn = op.inArray("CurrentSelectedNodesArray", null)
const graphSizeIn = op.inInt("GraphSize");
const nodeRadiusIn = op.inFloat("NodeVisualRadius", 0.5); // Adjust based on your node sizes
const draggedNodeIndexIn = op.inInt("DraggedNodesIndex", -1);
const enableDragIn = op.inBool("EnableDrag", true);
const textScaleFactorIn = op.inArray("Text Aspect Ratio");

// --- Outputs ---
const updatedPositionsOut = op.outArray("UpdatedNodePositions2D");
const draggedNodeIndexOut = op.outNumber("DraggedNodeIndex");
const selectedNodesOut = op.outArray("NewSelectedNodes");
const isDraggingOut = op.outBool("IsDragging");
const triggerOut = op.outTrigger("Next");

// --- Internal State ---
let isCurrentlyDragging = false;
let currentlyDraggedNodeIdx = -1;
let dragOffsetX = 0;
let dragOffsetY = 0;
let nodePositionsBuffer = null; // To store a working copy of positions

// Debounce/flag to avoid re-picking immediately after release
let justReleased = false;
let releaseTimeout = null;

triggerIn.onTriggered = () => {
    const mouseX = mouseXIn.get();
    const mouseY = mouseYIn.get();
    const mouseDown = mouseButtonDownIn.get();
    const currentPos = currentPositionsIn.get();
    const numNodes = graphSizeIn.get();
    const nodeRadius = nodeRadiusIn.get();
    const enableDrag = enableDragIn.get();
    const textScaleFactor = textScaleFactorIn.get();
    const lastDraggedNodeIndex = draggedNodeIndexIn.get();
    let selectedNodes = currentSelectedNodesIn.get();
    if (selectedNodes === null) {
        selectedNodes = new Array(numNodes).filled(0);
    }


    if (!mouseX || !mouseY ||!currentPos || numNodes === 0) {
        // If essential inputs are missing, pass through current positions
        if (currentPos) updatedPositionsOut.set(currentPos);
        else updatedPositionsOut.set(new Float32Array(0));
        draggedNodeIndexOut.set(-1);
        isDraggingOut.set(false);
        triggerOut.trigger();
        return;
    }

    // Ensure buffer is initialized and has the correct size
    if (!nodePositionsBuffer || nodePositionsBuffer.length !== currentPos.length) {
        nodePositionsBuffer = new Float32Array(currentPos);
    } else {
        // Copy currentPos to buffer if not dragging, otherwise buffer holds dragged state
        if (!isCurrentlyDragging) {
             // Only copy if currentPos is different to avoid unnecessary GC/alloc if it's the same array ref
            if (nodePositionsBuffer !== currentPos) {
                nodePositionsBuffer.set(currentPos);
            }
        }
    }


    if (!enableDrag) {
        if (isCurrentlyDragging) { // If dragging was disabled mid-drag
            isCurrentlyDragging = false;
            currentlyDraggedNodeIdx = -1;
        }
        updatedPositionsOut.set(nodePositionsBuffer); // Pass through the last known good positions
        draggedNodeIndexOut.set(currentlyDraggedNodeIdx);
        isDraggingOut.set(isCurrentlyDragging);
        triggerOut.trigger();
        return;
    }


    if (mouseDown) {
        if (!isCurrentlyDragging && !justReleased) {
            // --- Try to pick a node ---
            let minDistSq = nodeRadius * nodeRadius;
            let pickedIdx = -1;

            for (let i = 0; i < numNodes; i++) {

                const nodeX = nodePositionsBuffer[i * 2];
                const nodeY = nodePositionsBuffer[i * 2 + 1];
                const dx = (mouseX - nodeX);// * textScaleFactor[i*3];
                const dy = (mouseY - nodeY);// * textScaleFactor[i*3+1];
                const distSq = dx * dx + dy * dy;

                if (distSq < minDistSq) {
                    minDistSq = distSq;
                    pickedIdx = i;
                }
            }

            if (lastDraggedNodeIndex === -1 && pickedIdx !== -1) {
                selectedNodes[pickedIdx] = 1 - selectedNodes[pickedIdx];
            }

            if (pickedIdx !== -1) {
                isCurrentlyDragging = true;
                currentlyDraggedNodeIdx = pickedIdx;
                dragOffsetX = mouseX - nodePositionsBuffer[pickedIdx * 2];
                dragOffsetY = mouseY - nodePositionsBuffer[pickedIdx * 2 + 1];
                console.warn('picked node: ', pickedIdx,
                    '\nmouseXY: ', mouseX, mouseY,
                    '\nnodePositionXY: ',
                        nodePositionsBuffer[pickedIdx * 2],
                        nodePositionsBuffer[pickedIdx * 2 +1]);
            }
        } else if (isCurrentlyDragging && currentlyDraggedNodeIdx !== -1) {
            // --- Continue dragging ---
            const newX = mouseX - dragOffsetX;
            const newY = mouseY - dragOffsetY;
            nodePositionsBuffer[currentlyDraggedNodeIdx * 2] = newX;
            nodePositionsBuffer[currentlyDraggedNodeIdx * 2 + 1] = newY;
        }
    } else { // Mouse button is UP
        if (isCurrentlyDragging) {
            isCurrentlyDragging = false;
            // currentlyDraggedNodeIdx remains for one frame to show which node was dropped
            justReleased = true;
            if (releaseTimeout) clearTimeout(releaseTimeout);
            releaseTimeout = setTimeout(() => { justReleased = false; }, 3); // Brief refractory period
        }
    }

    updatedPositionsOut.set(nodePositionsBuffer);
    draggedNodeIndexOut.set(currentlyDraggedNodeIdx); // Keep idx on release frame
    isDraggingOut.set(isCurrentlyDragging);
    selectedNodesOut.set(selectedNodes);

    if (!mouseDown && !isCurrentlyDragging && currentlyDraggedNodeIdx !== -1 && !justReleased) {
         // Reset currentlyDraggedNodeIdx after the release frame if not dragging and not in refractory period
        currentlyDraggedNodeIdx = -1;
    }

    triggerOut.trigger();
};

// Clean up timeout on op deletion
op.onDelete = () => {
    if (releaseTimeout) {
        clearTimeout(releaseTimeout);
    }
};
}
};

CABLES.OPS["bf428a68-8a37-4914-b17f-4f0ee128654a"]={f:Ops.Patch.PK3cVbR.NodeDragger,objName:"Ops.Patch.PK3cVbR.NodeDragger"};




// **************************************************************
// 
// Ops.Patch.PK3cVbR.EdgesColor
// 
// **************************************************************

Ops.Patch.PK3cVbR.EdgesColor= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const graphSizeIn = op.inInt("GraphSize", 0); // Changed to inInt, added default
const nodesSelectedIndexIn = op.inInt("NodeSelectedIndex", -1); // Added default
const adjacencyMatrixIn = op.inArray("Adjacency Matrix");
const edgesCountIn = op.inInt("Edges Count");
const nodesMaskIn = op.inArray("Nodes Mask");
const colorUnselectedIn = op.inArray("ColorUnselected", [0.5, 0.5, 0.5, 1]); // Changed to inColor, added default
const colorDraggedIn = op.inArray("ColorDragged", [1, 0, 0, 1]); // Changed to inColor, added default
const colorSelectedIn = op.inArray("ColorSelected", [1, 0, 0, 1]); // Changed to inColor, added default
const currentSelectedNodesIn = op.inArray("Current Selected Nodes");
const resultOut = op.outArray("ColorsArray"); // Renamed 'result' to 'resultOut' for clarity

// This function will handle the logic and can be called on change or initially
const updateColors = () => {
    // Get the CURRENT values from the input ports INSIDE the handler
    const currentGraphSize = graphSizeIn.get();
    const currentEdgesCount = edgesCountIn.get();
    const currentAdj = adjacencyMatrixIn.get();
    const currentUnselectedColor = colorUnselectedIn.get();
    const currentDraggedColor = colorDraggedIn.get();
    const currentSelectedColor = colorSelectedIn.get();
    const currentNodeIndex = nodesSelectedIndexIn.get();
    const nodesMask = nodesMaskIn.get();
    const currentSelectedNodes = currentSelectedNodesIn.get();

    let edgesColors = [];

    for (let i = 0; i < currentGraphSize; i++) {
        for (let j = i + 1; j < currentGraphSize; j++) {
            if (nodesMask[i] != 0 && nodesMask[j] != 0) {
            let index = i * currentGraphSize + j;
            if (currentAdj[index] > 0) {
                if (i === currentNodeIndex || j === currentNodeIndex) {
                    edgesColors = edgesColors.concat(currentDraggedColor);
                } else if (currentSelectedNodes[i] == 1 || currentSelectedNodes[j] == 1) {
                    edgesColors = edgesColors.concat(currentSelectedColor);
                }
                else {
                    edgesColors = edgesColors.concat(currentUnselectedColor);
                }
            }
            }
        }
    }
    resultOut.set(edgesColors);
};

// Assign the handler to the onChange event of nodesSelectedIndexIn
nodesSelectedIndexIn.onChange = updateColors;
nodesMaskIn.onChange = updateColors;

// Also listen to changes in other relevant inputs to update the colors
graphSizeIn.onChange = updateColors;
colorUnselectedIn.onChange = updateColors;
colorSelectedIn.onChange = updateColors;

}
};

CABLES.OPS["38184be1-b854-47c3-bf25-abcce5220044"]={f:Ops.Patch.PK3cVbR.EdgesColor,objName:"Ops.Patch.PK3cVbR.EdgesColor"};




// **************************************************************
// 
// Ops.Patch.PK3cVbR.NodesColor
// 
// **************************************************************

Ops.Patch.PK3cVbR.NodesColor= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
// welcome to your new op!
// have a look at the documentation:
// https://cables.gl/docs/5_writing_ops/dev_ops/dev_ops

const graphSizeIn = op.inInt("GraphSize", 0); // Changed to inInt, added default
const nodesSelectedIndexIn = op.inInt("NodeSelectedIndex", -1); // Added default
const nodesMaskIn = op.inArray("Nodes Mask");
const colorUnselectedIn = op.inArray("ColorUnselected", [0.5, 0.5, 0.5, 1]); // Changed to inColor, added default
const colorDraggedIn = op.inArray("ColorDragged", [1, 0, 0, 1]); // Changed to inColor, added default
const colorSelectedIn = op.inArray("ColorSelected", [1, 0, 0, 1]); // Changed to inColor, added default
const currentSelectedNodesIn = op.inArray("Current Selected Nodes");
const resultOut = op.outArray("ColorsArray"); // Renamed 'result' to 'resultOut' for clarity

// This function will handle the logic and can be called on change or initially
const updateColors = () => {
    // Get the CURRENT values from the input ports INSIDE the handler
    const currentGraphSize = graphSizeIn.get();
    const currentUnselectedColor = colorUnselectedIn.get();
    const currentDraggedColor = colorDraggedIn.get();
    const currentSelectedColor = colorSelectedIn.get();
    const currentNodeIndex = nodesSelectedIndexIn.get();
    const nodesMask = nodesMaskIn.get();
    const currentSelectedNodes = currentSelectedNodesIn.get();

    let nodesColors = [];

    // Basic validation
    if (typeof currentGraphSize !== 'number' || currentGraphSize <= 0) {
        resultOut.set([]); // Output empty array if graph size is invalid
        return;
    }
    if (!Array.isArray(currentSelectedColor) || !Array.isArray(currentUnselectedColor) ||
        currentSelectedColor.length < 3 || currentUnselectedColor.length < 3 ) { // Basic check for color array
        console.warn("Color inputs are not valid arrays.");
        resultOut.set([]);
        return;
    }

    // Corrected loop condition: i < currentGraphSize
    for (let i = 0; i < currentGraphSize; i++) {
        // Determine the color for the current node
        // We are pushing the actual color array [r,g,b,a]
        if (nodesMask[i] != 0) {
            if (i === currentNodeIndex) {
                nodesColors = nodesColors.concat(currentDraggedColor);
            } else if (currentSelectedNodes[i] == 1) {
                nodesColors = nodesColors.concat(currentSelectedColor);
            } else {
                nodesColors = nodesColors.concat(currentUnselectedColor);
            }
        }
    }
    resultOut.set(nodesColors);
};

// Assign the handler to the onChange event of nodesSelectedIndexIn
nodesSelectedIndexIn.onChange = updateColors;
nodesMaskIn.onChange = updateColors;

// Also listen to changes in other relevant inputs to update the colors
graphSizeIn.onChange = updateColors;
colorUnselectedIn.onChange = updateColors;
colorSelectedIn.onChange = updateColors;

// Optional: Trigger an initial update when the patch loads or op is created
// This ensures the output is set correctly from the start based on default/initial input values.
// You might need a trigger input for this, or call it if inputs have flow control (e.g. op.patch.isLoaded())
// For simplicity here, we'll call it once directly, assuming inputs are ready.
// However, relying on individual onChanges is often more robust for initial states if defaults are set.

}
};

CABLES.OPS["d770c6f9-6b79-48b2-82b7-d7dc53ecb238"]={f:Ops.Patch.PK3cVbR.NodesColor,objName:"Ops.Patch.PK3cVbR.NodesColor"};




// **************************************************************
// 
// Ops.Patch.PK3cVbR.NodeNames
// 
// **************************************************************

Ops.Patch.PK3cVbR.NodeNames= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    exec = op.inTrigger("Execute"),
    nodeNames = op.outArray("Category Names"),
    nodeWeights = op.outArray("Node Weights");

exec.onTriggered = () =>
{
    const names = [
        "Mathematics",
        "Machine Learning",
        "Music",
        "Theater",
        "About",
        "Games"
    ];

    const weights = [
        0.1739130434782609,
        0.4652173913043479,
        0.882608695652174,
        1,
        0.41304347826086957,
        0.6304347826086957
    ];

    nodeNames.set(names);
    nodeWeights.set(weights);
};

}
};

CABLES.OPS["eb89234c-f601-44fa-8108-f9dd093934e6"]={f:Ops.Patch.PK3cVbR.NodeNames,objName:"Ops.Patch.PK3cVbR.NodeNames"};




// **************************************************************
// 
// Ops.String.StringCompose_v3
// 
// **************************************************************

Ops.String.StringCompose_v3= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    format=op.inString('Format',"hello $a, $b $c und $d"),
    a=op.inString('String A','world'),
    b=op.inString('String B',1),
    c=op.inString('String C',2),
    d=op.inString('String D',3),
    e=op.inString('String E'),
    f=op.inString('String F'),
    result=op.outString("Result");

format.onChange=
    a.onChange=
    b.onChange=
    c.onChange=
    d.onChange=
    e.onChange=
    f.onChange=update;

update();

function update()
{
    var str=format.get()||'';
    if(typeof str!='string')
        str='';

    str = str.replace(/\$a/g, a.get());
    str = str.replace(/\$b/g, b.get());
    str = str.replace(/\$c/g, c.get());
    str = str.replace(/\$d/g, d.get());
    str = str.replace(/\$e/g, e.get());
    str = str.replace(/\$f/g, f.get());

    result.set(str);
}
}
};

CABLES.OPS["6afea9f4-728d-4f3c-9e75-62ddc1448bf0"]={f:Ops.String.StringCompose_v3,objName:"Ops.String.StringCompose_v3"};




// **************************************************************
// 
// Ops.Cables.FPS_v2
// 
// **************************************************************

Ops.Cables.FPS_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    outFPS = op.outNumber("FPS"),
    outMS = op.outNumber("MS");

const listener = op.patch.cgl.fpsCounter.addEventListener("performance", update);

op.onDelete = function ()
{
    op.patch.removeEventListener(listener);
};

function update(p)
{
    outFPS.set(p.fps);
    outMS.set(p.ms);
}

}
};

CABLES.OPS["6dbb866c-b57a-4875-9f1d-22172162eaa8"]={f:Ops.Cables.FPS_v2,objName:"Ops.Cables.FPS_v2"};




// **************************************************************
// 
// Ops.Patch.PK3cVbR.NodesMask
// 
// **************************************************************

Ops.Patch.PK3cVbR.NodesMask= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
// welcome to your new op!
// have a look at the documentation:
// https://cables.gl/docs/5_writing_ops/dev_ops/dev_ops

const
    exec = op.inTrigger("Execute"),
    categoriesCountIn = op.inInt("CategoriesCount"),
    graphSizeIn = op.inInt("Graph Size"),
    contentElementsCountIn = op.inInt("Content Elements Count"),
    nodesMask = op.outArray("Nodes Mask"),
    nodesSelected = op.outArray("Nodes Selected");

exec.onTriggered = () =>
{
    const categoriesCount = categoriesCountIn.get();
    const graphSize = graphSizeIn.get();
    const contentElementsCount = contentElementsCountIn.get();

    const nodesMaskInitialization = new Array(graphSize).fill(0).map((e, i) =>
    {
        if (i < categoriesCount) { return 1; }
        else if (i < categoriesCount + contentElementsCount) { return 1; }
        else return 0;
    });
    const nodesSelectionInitialization = new Array(graphSize).fill(0);

    nodesMask.set(nodesMaskInitialization);
    nodesSelected.set(nodesSelectionInitialization);
};

}
};

CABLES.OPS["f8c99f4a-3920-4ebf-b198-f009026a6bc4"]={f:Ops.Patch.PK3cVbR.NodesMask,objName:"Ops.Patch.PK3cVbR.NodesMask"};




// **************************************************************
// 
// Ops.Trigger.TriggerButton
// 
// **************************************************************

Ops.Trigger.TriggerButton= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inTrig = op.inTriggerButton("Trigger"),
    outTrig = op.outTrigger("Next");

inTrig.onTriggered = function ()
{
    outTrig.trigger();
};

}
};

CABLES.OPS["21630924-39e4-4df5-9965-b9136510d156"]={f:Ops.Trigger.TriggerButton,objName:"Ops.Trigger.TriggerButton"};




// **************************************************************
// 
// Ops.Array.ArrayMultiply
// 
// **************************************************************

Ops.Array.ArrayMultiply= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inArray = op.inArray("In"),
    inValue = op.inValue("Value", 1.0),
    outArray = op.outArray("Result");

let newArr = [];
outArray.set(newArr);
inArray.onChange =
inValue.onChange = inArray.onChange = function ()
{
    let arr = inArray.get();
    if (!arr) return;

    let mul = inValue.get();

    if (newArr.length != arr.length)newArr.length = arr.length;

    for (let i = 0; i < arr.length; i++) newArr[i] = arr[i] * mul;

    outArray.setRef(newArr);
};

inArray.onLinkChanged = () =>
{
    if (inArray) inArray.copyLinkedUiAttrib("stride", outArray);
};

}
};

CABLES.OPS["a01c344b-4129-4b01-9c8f-36cefe86d7cc"]={f:Ops.Array.ArrayMultiply,objName:"Ops.Array.ArrayMultiply"};




// **************************************************************
// 
// Ops.Vars.VarSetTexture_v2
// 
// **************************************************************

Ops.Vars.VarSetTexture_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const val = op.inTexture("Value", null);
op.varName = op.inDropDown("Variable", [], "", true);

new CABLES.VarSetOpWrapper(op, "object", val, op.varName);

}
};

CABLES.OPS["4fbfc71e-1429-439f-8591-ad35961252ed"]={f:Ops.Vars.VarSetTexture_v2,objName:"Ops.Vars.VarSetTexture_v2"};




// **************************************************************
// 
// Ops.Trigger.GateTrigger
// 
// **************************************************************

Ops.Trigger.GateTrigger= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    exe = op.inTrigger('Execute'),
    passThrough = op.inValueBool('Pass Through',true),
    triggerOut = op.outTrigger('Trigger out');

exe.onTriggered = function()
{
    if(passThrough.get())
        triggerOut.trigger();
}

}
};

CABLES.OPS["65e8b8a2-ba13-485f-883a-2bcf377989da"]={f:Ops.Trigger.GateTrigger,objName:"Ops.Trigger.GateTrigger"};




// **************************************************************
// 
// Ops.Array.ArrayPack3
// 
// **************************************************************

Ops.Array.ArrayPack3= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const exe = op.inTrigger("Trigger in"),
    inArr1 = op.inArray("Array 1"),
    inArr2 = op.inArray("Array 2"),
    inArr3 = op.inArray("Array 3"),
    exeOut = op.outTrigger("Trigger out"),
    outArr = op.outArray("Array out", 3),
    outNum = op.outNumber("Num Points"),
    outArrayLength = op.outNumber("Array length");

let showingError = false;

let arr = [];
let emptyArray = [];
let needsCalc = true;

exe.onTriggered = update;

inArr1.onChange = inArr2.onChange = inArr3.onChange = calcLater;

function calcLater()
{
    needsCalc = true;
}

function update()
{
    let array1 = inArr1.get();
    let array2 = inArr2.get();
    let array3 = inArr3.get();

    if (!array1 && !array2 && !array3)
    {
        outArr.set(null);
        outNum.set(0);
        return;
    }
    // only update if array has changed
    if (needsCalc)
    {
        let arrlen = 0;

        if (!array1 || !array2 || !array3)
        {
            if (array1) arrlen = array1.length;
            else if (array2) arrlen = array2.length;
            else if (array3) arrlen = array3.length;

            if (emptyArray.length != arrlen)
                for (let i = 0; i < arrlen; i++) emptyArray[i] = 0;

            if (!array1)array1 = emptyArray;
            if (!array2)array2 = emptyArray;
            if (!array3)array3 = emptyArray;
        }

        if ((array1.length !== array2.length) || (array2.length !== array3.length))
        {
            op.setUiError("arraylen", "Arrays do not have the same length !");
            return;
        }
        op.setUiError("arraylen", null);

        arr.length = array1.length;
        for (let i = 0; i < array1.length; i++)
        {
            arr[i * 3 + 0] = array1[i];
            arr[i * 3 + 1] = array2[i];
            arr[i * 3 + 2] = array3[i];
        }

        needsCalc = false;
        outArr.setRef(arr);
        outNum.set(arr.length / 3);
        outArrayLength.set(arr.length);
    }

    exeOut.trigger();
}

}
};

CABLES.OPS["2bcf32fe-3cbd-48fd-825a-61255bebda9b"]={f:Ops.Array.ArrayPack3,objName:"Ops.Array.ArrayPack3"};




// **************************************************************
// 
// Ops.Array.ArrayUnpack2
// 
// **************************************************************

Ops.Array.ArrayUnpack2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const inArray1 = op.inArray("Array in xyz"),
    outArray1 = op.outArray("Array 1 out"),
    outArray2 = op.outArray("Array 2 out"),
    outArrayLength = op.outNumber("Array lengths");

let showingError = false;

const arr1 = [];
const arr2 = [];

inArray1.onChange = update;

function update()
{
    let array1 = inArray1.get();

    if (!array1)
    {
        outArray1.set(null);
        return;
    }

    if (array1.length % 2 !== 0)
    {
        if (!showingError)
        {
            op.uiAttr({ "error": "Arrays length not divisible by 2 !" });
            outArrayLength.set(0);
            showingError = true;
        }
        return;
    }
    if (array1.length === 0)
    {
        outArrayLength.set(0);
        outArray1.set(null);
        outArray2.set(null);
    }

    if (showingError)
    {
        showingError = false;
        op.uiAttr({ "error": null });
    }

    arr1.length = Math.floor(array1.length / 2);
    arr2.length = Math.floor(array1.length / 2);

    for (let i = 0; i < array1.length / 2; i++)
    {
        arr1[i] = array1[i * 2];
        arr2[i] = array1[i * 2 + 1];
    }

    // outArray1.set(null);
    // outArray2.set(null);
    outArray1.setRef(arr1);
    outArray2.setRef(arr2);
    outArrayLength.set(arr1.length);
}

}
};

CABLES.OPS["3f789664-9937-4478-ba28-63ccb67e5114"]={f:Ops.Array.ArrayUnpack2,objName:"Ops.Array.ArrayUnpack2"};




// **************************************************************
// 
// Ops.Gl.Shader.MatCapMaterial_v3
// 
// **************************************************************

Ops.Gl.Shader.MatCapMaterial_v3= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={"matcap_frag":"{{MODULES_HEAD}}\r\n\r\n#ifdef HAS_TEXTURES\r\n    IN vec2 texCoord;\r\n#endif\r\n\r\nIN vec3 transformedNormal;\r\nIN vec3 viewSpacePosition;\r\n\r\nUNI vec4 inColor;\r\n\r\nUNI sampler2D texMatcap;\r\n\r\n#ifdef HAS_DIFFUSE_TEXTURE\r\n   UNI sampler2D texDiffuse;\r\n#endif\r\n\r\n#ifdef USE_SPECULAR_TEXTURE\r\n   UNI sampler2D texSpec;\r\n   UNI sampler2D texSpecMatCap;\r\n#endif\r\n\r\n#ifdef HAS_AO_TEXTURE\r\n    UNI sampler2D texAo;\r\n    UNI float aoIntensity;\r\n#endif\r\n\r\n#ifdef HAS_NORMAL_TEXTURE\r\n    IN vec3 vBiTangent;\r\n    IN vec3 vTangent;\r\n    IN mat3 normalMatrix;\r\n\r\n    UNI sampler2D texNormal;\r\n    UNI float normalMapIntensity;\r\n#endif\r\n\r\n#ifdef HAS_TEXTURE_OPACITY\r\n    UNI sampler2D texOpacity;\r\n#endif\r\n\r\n#ifdef CALC_SSNORMALS\r\n    IN vec3 eye_relative_pos;\r\n\r\n    // from https://www.enkisoftware.com/devlogpost-20150131-1-Normal_generation_in_the_pixel_shader\r\n    vec3 CalculateScreenSpaceNormals() {\r\n    \tvec3 dFdxPos = dFdx(eye_relative_pos);\r\n    \tvec3 dFdyPos = dFdy(eye_relative_pos);\r\n    \tvec3 screenSpaceNormal = normalize( cross(dFdxPos, dFdyPos));\r\n        return normalize(screenSpaceNormal);\r\n    }\r\n#endif\r\n\r\n// * taken & modified from https://github.com/mrdoob/three.js/blob/dev/src/renderers/shaders/ShaderLib/meshmatcap_frag.glsl.js\r\nvec2 getMatCapUV(vec3 viewSpacePosition, vec3 normal) {\r\n    vec3 viewDir = normalize(-viewSpacePosition);\r\n\tvec3 x = normalize(vec3(viewDir.z, 0.0, - viewDir.x));\r\n\tvec3 y = normalize(cross(viewDir, x));\r\n\tvec2 uv = vec2(dot(x, normal), dot(y, normal)) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks\r\n\treturn uv;\r\n}\r\n\r\nvoid main()\r\n{\r\n    vec3 normal = normalize(transformedNormal);\r\n    {{MODULE_NORMAL}}\r\n\r\n\r\n\r\n    #ifdef HAS_TEXTURES\r\n        vec2 texCoords = texCoord;\r\n        {{MODULE_BEGIN_FRAG}}\r\n    #endif\r\n\r\n\r\n\r\n    #ifdef DOUBLE_SIDED\r\n        if(!gl_FrontFacing) normal *= -1.0;\r\n    #endif\r\n\r\n    #ifdef CALC_SSNORMALS\r\n        normal = CalculateScreenSpaceNormals();\r\n    #endif\r\n\r\n\r\n\r\n   #ifdef HAS_NORMAL_TEXTURE\r\n        vec3 normalFromMap = texture( texNormal, texCoord ).xyz * 2.0 - 1.0;\r\n        normalFromMap = normalize(normalFromMap);\r\n\r\n        vec3 tangent;\r\n        vec3 binormal;\r\n\r\n        #ifdef CALC_TANGENT\r\n            vec3 c1 = cross(normalFromMap, vec3(0.0, 0.0, 1.0));\r\n            vec3 c2 = cross(normalFromMap, vec3(0.0, 1.0, 0.0));\r\n\r\n            tangent = c1;\r\n            tangent = normalize(tangent);\r\n            binormal = cross(normal, tangent);\r\n            binormal = normalize(binormal);\r\n        #endif\r\n\r\n        #ifndef CALC_TANGENT\r\n            tangent = normalize(normalMatrix * vTangent);\r\n            vec3 bitangent = normalize(normalMatrix * vBiTangent);\r\n            binormal = normalize(cross(normal, bitangent));\r\n        #endif\r\n\r\n        normalFromMap = normalize(\r\n            tangent * normalFromMap.x\r\n            + binormal * normalFromMap.y\r\n            + normal * normalFromMap.z\r\n        );\r\n\r\n        vec3 mixedNormal = normalize(normal + normalFromMap * normalMapIntensity);\r\n\r\n        normal = mixedNormal;\r\n    #endif\r\n\r\n    vec4 col = texture(texMatcap, getMatCapUV(viewSpacePosition, normal));\r\n\r\n    #ifdef HAS_DIFFUSE_TEXTURE\r\n        col = col*texture(texDiffuse, texCoords);\r\n    #endif\r\n\r\n    col.rgb *= inColor.rgb;\r\n\r\n\r\n    #ifdef HAS_AO_TEXTURE\r\n        col = col\r\n            * mix(\r\n                vec4(1.0,1.0,1.0,1.0),\r\n                texture(texAo, texCoords),\r\n                aoIntensity\r\n            );\r\n    #endif\r\n\r\n    #ifdef USE_SPECULAR_TEXTURE\r\n        vec4 spec = texture(texSpecMatCap, getMatCapUV(viewSpacePosition, normal));\r\n        spec *= texture(texSpec, texCoords);\r\n        col += spec;\r\n    #endif\r\n\r\n    col.a *= inColor.a;\r\n\r\n    #ifdef HAS_TEXTURE_OPACITY\r\n        #ifdef TRANSFORMALPHATEXCOORDS\r\n            texCoords=vec2(texCoord.s,1.0-texCoord.t);\r\n            texCoords.y = 1. - texCoords.y;\r\n        #endif\r\n        #ifdef ALPHA_MASK_ALPHA\r\n            col.a*=texture(texOpacity,texCoords).a;\r\n        #endif\r\n        #ifdef ALPHA_MASK_LUMI\r\n            col.a*=dot(vec3(0.2126,0.7152,0.0722), texture(texOpacity,texCoords).rgb);\r\n        #endif\r\n        #ifdef ALPHA_MASK_R\r\n            col.a*=texture(texOpacity,texCoords).r;\r\n        #endif\r\n        #ifdef ALPHA_MASK_G\r\n            col.a*=texture(texOpacity,texCoords).g;\r\n        #endif\r\n        #ifdef ALPHA_MASK_B\r\n            col.a*=texture(texOpacity,texCoords).b;\r\n        #endif\r\n\r\n        #ifdef DISCARDTRANS\r\n            if(col.a < 0.2) discard;\r\n        #endif\r\n    #endif\r\n\r\n    {{MODULE_COLOR}}\r\n\r\n    outColor = col;\r\n}","matcap_vert":"IN vec3 vPosition;\r\n\r\n#ifdef HAS_TEXTURES\r\n    IN vec2 attrTexCoord;\r\n#endif\r\n\r\nIN vec3 attrVertNormal;\r\nIN float attrVertIndex;\r\n\r\n#ifdef HAS_NORMAL_TEXTURE\r\n    IN vec3 attrTangent;\r\n    IN vec3 attrBiTangent;\r\n    OUT vec3 vBiTangent;\r\n    OUT vec3 vTangent;\r\n#endif\r\n\r\nUNI mat4 projMatrix;\r\nUNI mat4 modelMatrix;\r\nUNI mat4 viewMatrix;\r\nUNI vec3 camPos;\r\n\r\n#ifdef HAS_TEXTURES\r\n    UNI vec2 texOffset;\r\n    UNI vec2 texRepeat;\r\n    OUT vec2 texCoord;\r\n#endif\r\n\r\nOUT mat3 normalMatrix;\r\nOUT vec3 viewSpacePosition;\r\nOUT vec3 transformedNormal;\r\n\r\n{{MODULES_HEAD}}\r\n\r\n#ifdef CALC_SSNORMALS\r\n    // from https://www.enkisoftware.com/devlogpost-20150131-1-Normal_generation_in_the_pixel_shader\r\n    OUT vec3 eye_relative_pos;\r\n#endif\r\n\r\nmat3 transposeMat3(mat3 m) {\r\n    return mat3(m[0][0], m[1][0], m[2][0],\r\n        m[0][1], m[1][1], m[2][1],\r\n        m[0][2], m[1][2], m[2][2]);\r\n}\r\n\r\n mat3 inverseMat3(mat3 m) {\r\n    float a00 = m[0][0], a01 = m[0][1], a02 = m[0][2];\r\n    float a10 = m[1][0], a11 = m[1][1], a12 = m[1][2];\r\n    float a20 = m[2][0], a21 = m[2][1], a22 = m[2][2];\r\n\r\n    float b01 = a22 * a11 - a12 * a21;\r\n    float b11 = -a22 * a10 + a12 * a20;\r\n    float b21 = a21 * a10 - a11 * a20;\r\n\r\n    float det = a00 * b01 + a01 * b11 + a02 * b21;\r\n\r\n    return mat3(b01, (-a22 * a01 + a02 * a21), (a12 * a01 - a02 * a11),\r\n        b11, (a22 * a00 - a02 * a20), (-a12 * a00 + a02 * a10),\r\n        b21, (-a21 * a00 + a01 * a20), (a11 * a00 - a01 * a10)) / det;\r\n}\r\n\r\nvoid main()\r\n{\r\n    #ifdef HAS_TEXTURES\r\n        texCoord = texRepeat * vec2(attrTexCoord.x, attrTexCoord.y) + texOffset;\r\n        texCoord.y = 1. - texCoord.y;\r\n    #endif\r\n\r\n    mat4 mMatrix = modelMatrix;\r\n    mat4 mvMatrix;\r\n\r\n    #ifdef HAS_NORMAL_TEXTURE\r\n        vec3 tangent = attrTangent;\r\n        vec3 bitangent = attrBiTangent;\r\n        vTangent = attrTangent;\r\n        vBiTangent = attrBiTangent;\r\n    #endif\r\n\r\n    vec4 pos = vec4(vPosition, 1.);\r\n    vec3 norm = attrVertNormal;\r\n\r\n    {{MODULE_VERTEX_POSITION}}\r\n\r\n    mvMatrix = viewMatrix * mMatrix;\r\n    vec3 normal = norm;\r\n\r\n    normalMatrix = transposeMat3(inverseMat3(mat3(mvMatrix)));\r\n\r\n    vec3 fragPos = vec3((mvMatrix) * pos);\r\n    viewSpacePosition = normalize(fragPos);\r\n\r\n    #ifdef CALC_SSNORMALS\r\n        eye_relative_pos = -(vec3(viewMatrix * vec4(camPos, 1.)) - fragPos);\r\n    #endif\r\n\r\n    transformedNormal = normalize(mat3(normalMatrix) * normal);\r\n\r\n    mat4 modelViewMatrix=mvMatrix;\r\n    {{MODULE_VERTEX_MODELVIEW}}\r\n\r\n    gl_Position = projMatrix * modelViewMatrix * pos;\r\n\r\n}\r\n",};
const cgl = op.patch.cgl;

const
    render = op.inTrigger("Render"),
    textureMatcap = op.inTexture("MatCap"),
    textureDiffuse = op.inTexture("Diffuse"),
    textureNormal = op.inTexture("Normal"),
    textureSpec = op.inTexture("Specular Mask"),
    textureSpecMatCap = op.inTexture("Specular MatCap"),
    textureAo = op.inTexture("AO Texture"),
    textureOpacity = op.inTexture("Opacity Texture"),
    r = op.inValueSlider("r", 1),
    g = op.inValueSlider("g", 1),
    b = op.inValueSlider("b", 1),
    pOpacity = op.inValueSlider("Opacity", 1),
    aoIntensity = op.inValueSlider("AO Intensity", 1.0),
    normalMapIntensity = op.inFloatSlider("Normal Map Intensity", 1),
    repeatX = op.inValue("Repeat X", 1),
    repeatY = op.inValue("Repeat Y", 1),
    offsetX = op.inValue("Offset X", 0),
    offsetY = op.inValue("Offset Y", 0),
    inDoubleSided = op.inValueBool("Double Sided"),
    ssNormals = op.inValueBool("Screen Space Normals"),
    calcTangents = op.inValueBool("Calc normal tangents", true),
    texCoordAlpha = op.inValueBool("Opacity TexCoords Transform", false),
    discardTransPxl = op.inValueBool("Discard Transparent Pixels"),

    next = op.outTrigger("Next"),
    shaderOut = op.outObject("Shader");

r.setUiAttribs({ "colorPick": true });

const alphaMaskSource = op.inSwitch("Alpha Mask Source", ["Luminance", "R", "G", "B", "A"], "Luminance");
alphaMaskSource.setUiAttribs({ "greyout": true });

op.setPortGroup("Normals", [calcTangents, ssNormals, inDoubleSided]);
op.setPortGroup("Texture Opacity", [alphaMaskSource, texCoordAlpha, discardTransPxl]);
op.setPortGroup("Texture Transforms", [aoIntensity, normalMapIntensity, repeatX, repeatY, offsetX, offsetY]);
op.setPortGroup("Texture Maps", [textureDiffuse, textureNormal, textureSpec, textureSpecMatCap, textureAo, textureOpacity]);
op.setPortGroup("Color", [r, g, b, pOpacity]);

const shader = new CGL.Shader(cgl, "MatCapMaterialNew3");
const uniOpacity = new CGL.Uniform(shader, "f", "opacity", pOpacity);

shader.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_NORMAL", "MODULE_BEGIN_FRAG", "MODULE_VERTEX_MODELVIEW"]);
shader.setSource(attachments.matcap_vert, attachments.matcap_frag);
shaderOut.setRef(shader);

const textureMatcapUniform = new CGL.Uniform(shader, "t", "texMatcap");
let textureDiffuseUniform = null;
let textureNormalUniform = null;
let normalMapIntensityUniform = null;
let textureSpecUniform = null;
let textureSpecMatCapUniform = null;
let textureAoUniform = null;
const offsetUniform = new CGL.Uniform(shader, "2f", "texOffset", offsetX, offsetY);
const repeatUniform = new CGL.Uniform(shader, "2f", "texRepeat", repeatX, repeatY);

const aoIntensityUniform = new CGL.Uniform(shader, "f", "aoIntensity", aoIntensity);
const colorUniform = new CGL.Uniform(shader, "4f", "inColor", r, g, b, pOpacity);

inDoubleSided.onChange =
calcTangents.onChange = updateDefines;
updateDefines();

function updateDefines()
{
    shader.toggleDefine("DOUBLE_SIDED", inDoubleSided.get());

    if (calcTangents.get()) shader.define("CALC_TANGENT");
    else shader.removeDefine("CALC_TANGENT");
}

ssNormals.onChange = function ()
{
    if (ssNormals.get())
    {
        if (cgl.glVersion < 2)
        {
            cgl.gl.getExtension("OES_standard_derivatives");
            shader.enableExtension("GL_OES_standard_derivatives");
        }

        shader.define("CALC_SSNORMALS");
    }
    else shader.removeDefine("CALC_SSNORMALS");
};

textureMatcap.onChange = updateMatcap;

function updateMatcap()
{
    if (!cgl.defaultMatcapTex3)
    {
        const pixels = new Uint8Array(256 * 4);
        for (let x = 0; x < 16; x++)
        {
            for (let y = 0; y < 16; y++)
            {
                let c = y * 16;
                c *= Math.min(1, (x + y / 3) / 8);
                pixels[(x + y * 16) * 4 + 0] = pixels[(x + y * 16) * 4 + 1] = pixels[(x + y * 16) * 4 + 2] = c;
                pixels[(x + y * 16) * 4 + 3] = 255;
            }
        }

        cgl.defaultMatcapTex3 = new CGL.Texture(cgl);
        cgl.defaultMatcapTex3.initFromData(pixels, 16, 16, CGL.Texture.FILTER_LINEAR, CGL.Texture.WRAP_REPEAT);
    }
}

textureDiffuse.onChange = function ()
{
    if (textureDiffuse.get())
    {
        if (textureDiffuseUniform !== null) return;
        shader.define("HAS_DIFFUSE_TEXTURE");
        shader.removeUniform("texDiffuse");
        textureDiffuseUniform = new CGL.Uniform(shader, "t", "texDiffuse");
    }
    else
    {
        shader.removeDefine("HAS_DIFFUSE_TEXTURE");
        shader.removeUniform("texDiffuse");
        textureDiffuseUniform = null;
    }
};

textureNormal.onChange = function ()
{
    if (textureNormal.get())
    {
        if (textureNormalUniform !== null) return;
        shader.define("HAS_NORMAL_TEXTURE");
        shader.removeUniform("texNormal");
        textureNormalUniform = new CGL.Uniform(shader, "t", "texNormal");
        if (!normalMapIntensityUniform) normalMapIntensityUniform = new CGL.Uniform(shader, "f", "normalMapIntensity", normalMapIntensity);
    }
    else
    {
        shader.removeDefine("HAS_NORMAL_TEXTURE");
        shader.removeUniform("texNormal");
        textureNormalUniform = null;
    }
};

textureAo.onChange = function ()
{
    if (textureAo.get())
    {
        if (textureAoUniform !== null) return;
        shader.define("HAS_AO_TEXTURE");
        shader.removeUniform("texAo");
        textureAoUniform = new CGL.Uniform(shader, "t", "texAo");
    }
    else
    {
        shader.removeDefine("HAS_AO_TEXTURE");
        shader.removeUniform("texAo");
        textureAoUniform = null;
    }
};

textureSpec.onChange = textureSpecMatCap.onChange = function ()
{
    if (textureSpec.get() && textureSpecMatCap.get())
    {
        if (textureSpecUniform !== null) return;
        shader.define("USE_SPECULAR_TEXTURE");
        shader.removeUniform("texSpec");
        shader.removeUniform("texSpecMatCap");
        textureSpecUniform = new CGL.Uniform(shader, "t", "texSpec");
        textureSpecMatCapUniform = new CGL.Uniform(shader, "t", "texSpecMatCap");
    }
    else
    {
        shader.removeDefine("USE_SPECULAR_TEXTURE");
        shader.removeUniform("texSpec");
        shader.removeUniform("texSpecMatCap");
        textureSpecUniform = null;
        textureSpecMatCapUniform = null;
    }
};

// TEX OPACITY

function updateAlphaMaskMethod()
{
    if (alphaMaskSource.get() == "Alpha Channel") shader.define("ALPHA_MASK_ALPHA");
    else shader.removeDefine("ALPHA_MASK_ALPHA");

    if (alphaMaskSource.get() == "Luminance") shader.define("ALPHA_MASK_LUMI");
    else shader.removeDefine("ALPHA_MASK_LUMI");

    if (alphaMaskSource.get() == "R") shader.define("ALPHA_MASK_R");
    else shader.removeDefine("ALPHA_MASK_R");

    if (alphaMaskSource.get() == "G") shader.define("ALPHA_MASK_G");
    else shader.removeDefine("ALPHA_MASK_G");

    if (alphaMaskSource.get() == "B") shader.define("ALPHA_MASK_B");
    else shader.removeDefine("ALPHA_MASK_B");
}

alphaMaskSource.onChange = updateAlphaMaskMethod;
textureOpacity.onChange = updateOpacity;

let textureOpacityUniform = null;

function updateOpacity()
{
    if (textureOpacity.get())
    {
        if (textureOpacityUniform !== null) return;
        shader.removeUniform("texOpacity");
        shader.define("HAS_TEXTURE_OPACITY");
        if (!textureOpacityUniform) textureOpacityUniform = new CGL.Uniform(shader, "t", "texOpacity");

        alphaMaskSource.setUiAttribs({ "greyout": false });
        discardTransPxl.setUiAttribs({ "greyout": false });
        texCoordAlpha.setUiAttribs({ "greyout": false });
    }
    else
    {
        shader.removeUniform("texOpacity");
        shader.removeDefine("HAS_TEXTURE_OPACITY");
        textureOpacityUniform = null;

        alphaMaskSource.setUiAttribs({ "greyout": true });
        discardTransPxl.setUiAttribs({ "greyout": true });
        texCoordAlpha.setUiAttribs({ "greyout": true });
    }
    updateAlphaMaskMethod();
}

discardTransPxl.onChange = function ()
{
    if (discardTransPxl.get()) shader.define("DISCARDTRANS");
    else shader.removeDefine("DISCARDTRANS");
};

texCoordAlpha.onChange = function ()
{
    if (texCoordAlpha.get()) shader.define("TRANSFORMALPHATEXCOORDS");
    else shader.removeDefine("TRANSFORMALPHATEXCOORDS");
};

function checkUiErrors()
{
    if (textureSpec.get() && !textureSpecMatCap.get())
    {
        op.setUiError("specNoMatCapSpec", "You connected a specular texture but have not connected a specular matcap texture. You need to connect both texture inputs for the specular input to work.", 1);
        op.setUiError("noSpecMatCapSpec", null);
    }
    else if (!textureSpec.get() && textureSpecMatCap.get())
    {
        op.setUiError("noSpecMatCapSpec", "You connected a specular matcap texture but have not connected a specular texture. You need to connect both texture inputs for the specular input to work.", 1);
        op.setUiError("specNoMatCapSpec", null);
    }
    else if (textureSpec.get() && textureSpecMatCap.get())
    {
        op.setUiError("specNoMatCapSpec", null);
        op.setUiError("noSpecMatCapSpec", null);
    }
    else
    {
        op.setUiError("specNoMatCapSpec", null);
        op.setUiError("noSpecMatCapSpec", null);
    }
}

render.onTriggered = function ()
{
    checkUiErrors();
    op.checkGraphicsApi();

    if (!cgl.defaultMatcapTex3) updateMatcap();
    shader.popTextures();

    const tex = textureMatcap.get() || cgl.defaultMatcapTex3;
    shader.pushTexture(textureMatcapUniform, tex.tex);

    if (textureDiffuse.get() && textureDiffuseUniform) shader.pushTexture(textureDiffuseUniform, textureDiffuse.get().tex);
    if (textureNormal.get() && textureNormalUniform) shader.pushTexture(textureNormalUniform, textureNormal.get().tex);
    if (textureSpec.get() && textureSpecUniform) shader.pushTexture(textureSpecUniform, textureSpec.get().tex);
    if (textureSpecMatCap.get() && textureSpecMatCapUniform) shader.pushTexture(textureSpecMatCapUniform, textureSpecMatCap.get().tex);
    if (textureAo.get() && textureAoUniform) shader.pushTexture(textureAoUniform, textureAo.get().tex);
    if (textureOpacity.get() && textureOpacityUniform) shader.pushTexture(textureOpacityUniform, textureOpacity.get().tex);

    cgl.pushShader(shader);
    next.trigger();
    cgl.popShader();
};

}
};

CABLES.OPS["c1dd6e76-61b4-471a-b8d1-f550a5a9a4f4"]={f:Ops.Gl.Shader.MatCapMaterial_v3,objName:"Ops.Gl.Shader.MatCapMaterial_v3"};




// **************************************************************
// 
// Ops.Gl.Shader.BasicMaterial_v3
// 
// **************************************************************

Ops.Gl.Shader.BasicMaterial_v3= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={"basicmaterial_frag":"{{MODULES_HEAD}}\r\n\r\nIN vec2 texCoord;\r\n\r\n#ifdef VERTEX_COLORS\r\nIN vec4 vertCol;\r\n#endif\r\n\r\n#ifdef HAS_TEXTURES\r\n    IN vec2 texCoordOrig;\r\n    #ifdef HAS_TEXTURE_DIFFUSE\r\n        UNI sampler2D tex;\r\n    #endif\r\n    #ifdef HAS_TEXTURE_OPACITY\r\n        UNI sampler2D texOpacity;\r\n   #endif\r\n#endif\r\n\r\n\r\n\r\nvoid main()\r\n{\r\n    {{MODULE_BEGIN_FRAG}}\r\n    vec4 col=color;\r\n\r\n\r\n    #ifdef HAS_TEXTURES\r\n        vec2 uv=texCoord;\r\n\r\n        #ifdef CROP_TEXCOORDS\r\n            if(uv.x<0.0 || uv.x>1.0 || uv.y<0.0 || uv.y>1.0) discard;\r\n        #endif\r\n\r\n        #ifdef HAS_TEXTURE_DIFFUSE\r\n            col=texture(tex,uv);\r\n\r\n            #ifdef COLORIZE_TEXTURE\r\n                col.r*=color.r;\r\n                col.g*=color.g;\r\n                col.b*=color.b;\r\n            #endif\r\n        #endif\r\n        col.a*=color.a;\r\n        #ifdef HAS_TEXTURE_OPACITY\r\n            #ifdef TRANSFORMALPHATEXCOORDS\r\n                uv=texCoordOrig;\r\n            #endif\r\n            #ifdef ALPHA_MASK_IR\r\n                col.a*=1.0-texture(texOpacity,uv).r;\r\n            #endif\r\n            #ifdef ALPHA_MASK_IALPHA\r\n                col.a*=1.0-texture(texOpacity,uv).a;\r\n            #endif\r\n            #ifdef ALPHA_MASK_ALPHA\r\n                col.a*=texture(texOpacity,uv).a;\r\n            #endif\r\n            #ifdef ALPHA_MASK_LUMI\r\n                col.a*=dot(vec3(0.2126,0.7152,0.0722), texture(texOpacity,uv).rgb);\r\n            #endif\r\n            #ifdef ALPHA_MASK_R\r\n                col.a*=texture(texOpacity,uv).r;\r\n            #endif\r\n            #ifdef ALPHA_MASK_G\r\n                col.a*=texture(texOpacity,uv).g;\r\n            #endif\r\n            #ifdef ALPHA_MASK_B\r\n                col.a*=texture(texOpacity,uv).b;\r\n            #endif\r\n            // #endif\r\n        #endif\r\n    #endif\r\n\r\n    {{MODULE_COLOR}}\r\n\r\n    #ifdef DISCARDTRANS\r\n        if(col.a<0.2) discard;\r\n    #endif\r\n\r\n    #ifdef VERTEX_COLORS\r\n        col*=vertCol;\r\n    #endif\r\n\r\n    outColor = col;\r\n}\r\n","basicmaterial_vert":"\r\n{{MODULES_HEAD}}\r\n\r\nOUT vec2 texCoord;\r\nOUT vec2 texCoordOrig;\r\n\r\nUNI mat4 projMatrix;\r\nUNI mat4 modelMatrix;\r\nUNI mat4 viewMatrix;\r\n\r\n#ifdef HAS_TEXTURES\r\n    UNI float diffuseRepeatX;\r\n    UNI float diffuseRepeatY;\r\n    UNI float texOffsetX;\r\n    UNI float texOffsetY;\r\n#endif\r\n\r\n#ifdef VERTEX_COLORS\r\n    in vec4 attrVertColor;\r\n    out vec4 vertCol;\r\n\r\n#endif\r\n\r\n\r\nvoid main()\r\n{\r\n    mat4 mMatrix=modelMatrix;\r\n    mat4 modelViewMatrix;\r\n\r\n    norm=attrVertNormal;\r\n    texCoordOrig=attrTexCoord;\r\n    texCoord=attrTexCoord;\r\n    #ifdef HAS_TEXTURES\r\n        texCoord.x=texCoord.x*diffuseRepeatX+texOffsetX;\r\n        texCoord.y=(1.0-texCoord.y)*diffuseRepeatY+texOffsetY;\r\n    #endif\r\n\r\n    #ifdef VERTEX_COLORS\r\n        vertCol=attrVertColor;\r\n    #endif\r\n\r\n    vec4 pos = vec4(vPosition, 1.0);\r\n\r\n    #ifdef BILLBOARD\r\n       vec3 position=vPosition;\r\n       modelViewMatrix=viewMatrix*modelMatrix;\r\n\r\n       gl_Position = projMatrix * modelViewMatrix * vec4((\r\n           position.x * vec3(\r\n               modelViewMatrix[0][0],\r\n               modelViewMatrix[1][0],\r\n               modelViewMatrix[2][0] ) +\r\n           position.y * vec3(\r\n               modelViewMatrix[0][1],\r\n               modelViewMatrix[1][1],\r\n               modelViewMatrix[2][1]) ), 1.0);\r\n    #endif\r\n\r\n    {{MODULE_VERTEX_POSITION}}\r\n\r\n    #ifndef BILLBOARD\r\n        modelViewMatrix=viewMatrix * mMatrix;\r\n\r\n        {{MODULE_VERTEX_MODELVIEW}}\r\n\r\n    #endif\r\n\r\n    // mat4 modelViewMatrix=viewMatrix*mMatrix;\r\n\r\n    #ifndef BILLBOARD\r\n        // gl_Position = projMatrix * viewMatrix * modelMatrix * pos;\r\n        gl_Position = projMatrix * modelViewMatrix * pos;\r\n    #endif\r\n}\r\n",};
const render = op.inTrigger("render");
const trigger = op.outTrigger("trigger");
const shaderOut = op.outObject("shader", null, "shader");

shaderOut.ignoreValueSerialize = true;

op.toWorkPortsNeedToBeLinked(render);
op.toWorkShouldNotBeChild("Ops.Gl.TextureEffects.ImageCompose", CABLES.OP_PORT_TYPE_FUNCTION);

const cgl = op.patch.cgl;

const shader = new CGL.Shader(cgl, "basicmaterial", this);
shader.addAttribute({ "type": "vec3", "name": "vPosition" });
shader.addAttribute({ "type": "vec2", "name": "attrTexCoord" });
shader.addAttribute({ "type": "vec3", "name": "attrVertNormal", "nameFrag": "norm" });
shader.addAttribute({ "type": "float", "name": "attrVertIndex" });

shader.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG", "MODULE_VERTEX_MODELVIEW"]);

shader.setSource(attachments.basicmaterial_vert, attachments.basicmaterial_frag);

shaderOut.setRef(shader);

render.onTriggered = doRender;

// rgba colors
const r = op.inValueSlider("r", Math.random());
const g = op.inValueSlider("g", Math.random());
const b = op.inValueSlider("b", Math.random());
const a = op.inValueSlider("a", 1);
r.setUiAttribs({ "colorPick": true });

// const uniColor=new CGL.Uniform(shader,'4f','color',r,g,b,a);
const colUni = shader.addUniformFrag("4f", "color", r, g, b, a);

shader.uniformColorDiffuse = colUni;

// diffuse outTexture

const diffuseTexture = op.inTexture("texture");
let diffuseTextureUniform = null;
diffuseTexture.onChange = updateDiffuseTexture;

const colorizeTexture = op.inValueBool("colorizeTexture", false);
const vertexColors = op.inValueBool("Vertex Colors", false);

// opacity texture
const textureOpacity = op.inTexture("textureOpacity");
let textureOpacityUniform = null;

const alphaMaskSource = op.inSwitch("Alpha Mask Source", ["Luminance", "R", "G", "B", "A", "1-A", "1-R"], "Luminance");
alphaMaskSource.setUiAttribs({ "greyout": true });
textureOpacity.onChange = updateOpacity;

const texCoordAlpha = op.inValueBool("Opacity TexCoords Transform", false);
const discardTransPxl = op.inValueBool("Discard Transparent Pixels");

// texture coords
const
    diffuseRepeatX = op.inValue("diffuseRepeatX", 1),
    diffuseRepeatY = op.inValue("diffuseRepeatY", 1),
    diffuseOffsetX = op.inValue("Tex Offset X", 0),
    diffuseOffsetY = op.inValue("Tex Offset Y", 0),
    cropRepeat = op.inBool("Crop TexCoords", false);

shader.addUniformFrag("f", "diffuseRepeatX", diffuseRepeatX);
shader.addUniformFrag("f", "diffuseRepeatY", diffuseRepeatY);
shader.addUniformFrag("f", "texOffsetX", diffuseOffsetX);
shader.addUniformFrag("f", "texOffsetY", diffuseOffsetY);

const doBillboard = op.inValueBool("billboard", false);

alphaMaskSource.onChange =
    doBillboard.onChange =
    discardTransPxl.onChange =
    texCoordAlpha.onChange =
    cropRepeat.onChange =
    vertexColors.onChange =
    colorizeTexture.onChange = updateDefines;

op.setPortGroup("Color", [r, g, b, a]);
op.setPortGroup("Color Texture", [diffuseTexture, vertexColors, colorizeTexture]);
op.setPortGroup("Opacity", [textureOpacity, alphaMaskSource, discardTransPxl, texCoordAlpha]);
op.setPortGroup("Texture Transform", [diffuseRepeatX, diffuseRepeatY, diffuseOffsetX, diffuseOffsetY, cropRepeat]);

updateOpacity();
updateDiffuseTexture();

op.preRender = function ()
{
    shader.bind();
    doRender();
    if (!shader) return;
};

function doRender()
{
    op.checkGraphicsApi();
    cgl.pushShader(shader);
    shader.popTextures();

    if (diffuseTextureUniform && diffuseTexture.get()) shader.pushTexture(diffuseTextureUniform, diffuseTexture.get());
    if (textureOpacityUniform && textureOpacity.get()) shader.pushTexture(textureOpacityUniform, textureOpacity.get());

    trigger.trigger();

    cgl.popShader();
}

function updateOpacity()
{
    if (textureOpacity.get())
    {
        if (textureOpacityUniform !== null) return;
        shader.removeUniform("texOpacity");
        shader.define("HAS_TEXTURE_OPACITY");
        if (!textureOpacityUniform)textureOpacityUniform = new CGL.Uniform(shader, "t", "texOpacity");
    }
    else
    {
        shader.removeUniform("texOpacity");
        shader.removeDefine("HAS_TEXTURE_OPACITY");
        textureOpacityUniform = null;
    }

    updateDefines();
}

function updateDiffuseTexture()
{
    if (diffuseTexture.get())
    {
        if (!shader.hasDefine("HAS_TEXTURE_DIFFUSE"))shader.define("HAS_TEXTURE_DIFFUSE");
        if (!diffuseTextureUniform)diffuseTextureUniform = new CGL.Uniform(shader, "t", "texDiffuse");
    }
    else
    {
        shader.removeUniform("texDiffuse");
        shader.removeDefine("HAS_TEXTURE_DIFFUSE");
        diffuseTextureUniform = null;
    }
    updateUi();
}

function updateUi()
{
    const hasTexture = diffuseTexture.isLinked() || textureOpacity.isLinked();
    diffuseRepeatX.setUiAttribs({ "greyout": !hasTexture });
    diffuseRepeatY.setUiAttribs({ "greyout": !hasTexture });
    diffuseOffsetX.setUiAttribs({ "greyout": !hasTexture });
    diffuseOffsetY.setUiAttribs({ "greyout": !hasTexture });
    colorizeTexture.setUiAttribs({ "greyout": !hasTexture });

    alphaMaskSource.setUiAttribs({ "greyout": !textureOpacity.get() });
    texCoordAlpha.setUiAttribs({ "greyout": !textureOpacity.get() });

    let notUsingColor = true;
    notUsingColor = diffuseTexture.get() && !colorizeTexture.get();
    r.setUiAttribs({ "greyout": notUsingColor });
    g.setUiAttribs({ "greyout": notUsingColor });
    b.setUiAttribs({ "greyout": notUsingColor });
}

function updateDefines()
{
    shader.toggleDefine("VERTEX_COLORS", vertexColors.get());
    shader.toggleDefine("CROP_TEXCOORDS", cropRepeat.get());
    shader.toggleDefine("COLORIZE_TEXTURE", colorizeTexture.get());
    shader.toggleDefine("TRANSFORMALPHATEXCOORDS", texCoordAlpha.get());
    shader.toggleDefine("DISCARDTRANS", discardTransPxl.get());
    shader.toggleDefine("BILLBOARD", doBillboard.get());

    shader.toggleDefine("ALPHA_MASK_ALPHA", alphaMaskSource.get() == "A");
    shader.toggleDefine("ALPHA_MASK_IALPHA", alphaMaskSource.get() == "1-A");
    shader.toggleDefine("ALPHA_MASK_IR", alphaMaskSource.get() == "1-R");
    shader.toggleDefine("ALPHA_MASK_LUMI", alphaMaskSource.get() == "Luminance");
    shader.toggleDefine("ALPHA_MASK_R", alphaMaskSource.get() == "R");
    shader.toggleDefine("ALPHA_MASK_G", alphaMaskSource.get() == "G");
    shader.toggleDefine("ALPHA_MASK_B", alphaMaskSource.get() == "B");
    updateUi();
}

}
};

CABLES.OPS["ec55d252-3843-41b1-b731-0482dbd9e72b"]={f:Ops.Gl.Shader.BasicMaterial_v3,objName:"Ops.Gl.Shader.BasicMaterial_v3"};




// **************************************************************
// 
// Ops.Anim.Timer_v2
// 
// **************************************************************

Ops.Anim.Timer_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inSpeed = op.inValue("Speed", 1),
    playPause = op.inValueBool("Play", true),
    reset = op.inTriggerButton("Reset"),
    inSyncTimeline = op.inValueBool("Sync to timeline", false),
    outTime = op.outNumber("Time");

op.setPortGroup("Controls", [playPause, reset, inSpeed]);

const timer = new CABLES.Timer();
let lastTime = null;
let time = 0;
let syncTimeline = false;

playPause.onChange = setState;
setState();

function setState()
{
    if (playPause.get())
    {
        timer.play();
        op.patch.addOnAnimFrame(op);
    }
    else
    {
        timer.pause();
        op.patch.removeOnAnimFrame(op);
    }
}

reset.onTriggered = doReset;

function doReset()
{
    time = 0;
    lastTime = null;
    timer.setTime(0);
    outTime.set(0);
}

inSyncTimeline.onChange = function ()
{
    syncTimeline = inSyncTimeline.get();
    playPause.setUiAttribs({ "greyout": syncTimeline });
    reset.setUiAttribs({ "greyout": syncTimeline });
};

op.onAnimFrame = function (tt, frameNum, deltaMs)
{
    if (timer.isPlaying())
    {
        if (CABLES.overwriteTime !== undefined)
        {
            outTime.set(CABLES.overwriteTime * inSpeed.get());
        }
        else

        if (syncTimeline)
        {
            outTime.set(tt * inSpeed.get());
        }
        else
        {
            timer.update();

            const timerVal = timer.get();

            if (lastTime === null)
            {
                lastTime = timerVal;
                return;
            }

            const t = Math.abs(timerVal - lastTime);
            lastTime = timerVal;

            time += t * inSpeed.get();
            if (time != time)time = 0;
            outTime.set(time);
        }
    }
};

}
};

CABLES.OPS["aac7f721-208f-411a-adb3-79adae2e471a"]={f:Ops.Anim.Timer_v2,objName:"Ops.Anim.Timer_v2"};




// **************************************************************
// 
// Ops.Patch.PK3cVbR.ContentNames
// 
// **************************************************************

Ops.Patch.PK3cVbR.ContentNames= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    exec = op.inTrigger("Execute"),
    contentItemNames = op.outArray("Category Names");

exec.onTriggered = () =>
{
    const names = [
        "Chimère(s)",
        "Brûle Harold",
        "Madame Rose",
        "Georges",
        "Musiques",
        "Test"
    ];


    contentItemNames.set(names);
};

}
};

CABLES.OPS["8e140d0a-6de5-4464-b83a-caacb82d0558"]={f:Ops.Patch.PK3cVbR.ContentNames,objName:"Ops.Patch.PK3cVbR.ContentNames"};




// **************************************************************
// 
// Ops.Gl.TextMeshMSDF_v2
// 
// **************************************************************

Ops.Gl.TextMeshMSDF_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={"textmeshsdf_frag":"\r\nUNI sampler2D tex0;\r\nUNI sampler2D tex1;\r\nUNI sampler2D tex2;\r\nUNI sampler2D tex3;\r\n\r\nIN vec2 texCoord;\r\nIN vec4 fragAttrColors;\r\n\r\nUNI vec4 color;\r\nUNI vec2 texSize;\r\n\r\n#ifdef BORDER\r\n    UNI float borderWidth;\r\n    UNI float borderSmooth;\r\n    UNI vec3 colorBorder;\r\n#endif\r\n\r\n#ifdef TEXTURE_COLOR\r\nUNI sampler2D texMulColor;\r\n#endif\r\n#ifdef TEXTURE_MASK\r\nUNI sampler2D texMulMask;\r\n#endif\r\n\r\nUNI float smoothing;\r\nIN float texIndex;\r\n\r\n#ifdef SHADOW\r\n    UNI float shadowWidth;\r\n#endif\r\n\r\n\r\nfloat median(float r, float g, float b)\r\n{\r\n    return max(min(r, g), min(max(r, g), b));\r\n}\r\n\r\nvoid main()\r\n{\r\n    vec4 bgColor=vec4(0.0,0.0,0.0,0.0);\r\n    vec4 fgColor=color;\r\n    float opacity=1.0;\r\n\r\n    #ifndef SDF\r\n        if(int(texIndex)==0) outColor = texture(tex0, texCoord);\r\n        if(int(texIndex)==1) outColor = texture(tex1, texCoord);\r\n        if(int(texIndex)==2) outColor = texture(tex2, texCoord);\r\n        if(int(texIndex)==3) outColor = texture(tex3, texCoord);\r\n\r\n        return;\r\n    #endif\r\n\r\n\r\n    #ifdef TEXTURE_COLOR\r\n        fgColor.rgb *= texture(texMulColor, vec2(0.0,0.0)).rgb; //todo texcoords from char positioning\r\n    #endif\r\n    #ifdef TEXTURE_MASK\r\n        opacity *= texture(texMulMask, vec2(0.0,0.0)).r; //todo texcoords from char positioning\r\n    #endif\r\n\r\n\r\n    #ifdef SHADOW\r\n        vec2 msdfUnit1 = texSize;\r\n        vec2 tcv=vec2(texCoord.x-0.002,texCoord.y-0.002);\r\n        vec3 smpl1;\r\n        if(int(texIndex)==0) smpl1 = texture(tex0, tcv).rgb;\r\n        if(int(texIndex)==1) smpl1 = texture(tex1, tcv).rgb;\r\n        if(int(texIndex)==2) smpl1 = texture(tex2, tcv).rgb;\r\n        if(int(texIndex)==3) smpl1 = texture(tex3, tcv).rgb;\r\n\r\n        float sigDist1 = median(smpl1.r, smpl1.g, smpl1.b) - 0.001;\r\n        float opacity1 = smoothstep(0.0,0.9,sigDist1*sigDist1);\r\n        outColor = mix(bgColor, vec4(0.0,0.0,0.0,1.0), opacity1);\r\n    #endif\r\n\r\n    vec2 msdfUnit = 8.0/texSize;\r\n    vec3 smpl;\r\n\r\n    if(int(texIndex)==0) smpl = texture(tex0, texCoord).rgb;\r\n    if(int(texIndex)==1) smpl = texture(tex1, texCoord).rgb;\r\n    if(int(texIndex)==2) smpl = texture(tex2, texCoord).rgb;\r\n    if(int(texIndex)==3) smpl = texture(tex3, texCoord).rgb;\r\n\r\n\r\n    float sigDist = median(smpl.r, smpl.g, smpl.b) - 0.5;\r\n    sigDist *= dot(msdfUnit, (0.5+(smoothing-0.5))/fwidth(texCoord));\r\n    opacity *= clamp(sigDist + 0.5, 0.0, 1.0);\r\n\r\n    #ifdef BORDER\r\n        float sigDist2 = median(smpl.r, smpl.g, smpl.b) - 0.01;\r\n        float bw=borderWidth*0.6+0.24;\r\n        float opacity2 = smoothstep(bw-borderSmooth,bw+borderSmooth,sigDist2*sigDist2);\r\n        fgColor=mix(fgColor,vec4(colorBorder,1.0),1.0-opacity2);\r\n    #endif\r\n\r\n    float opa=opacity*color.a;\r\n\r\n    if(opa==0.0)discard;\r\n\r\n    outColor = mix(outColor, fgColor, opa);\r\n\r\n#ifdef HAS_ATTR_COLORS\r\n    outColor*=fragAttrColors;\r\n#endif\r\n}\r\n\r\n","textmeshsdf_vert":"UNI sampler2D tex1;\r\nUNI sampler2D tex2;\r\nUNI sampler2D tex3;\r\nUNI sampler2D tex4;\r\n\r\nUNI mat4 projMatrix;\r\nUNI mat4 modelMatrix;\r\nUNI mat4 viewMatrix;\r\n\r\nIN vec3 vPosition;\r\nIN vec2 attrTexCoord;\r\nIN mat4 instMat;\r\nIN vec2 attrTexOffsets;\r\nIN vec2 attrSize;\r\nIN vec2 attrTcSize;\r\nIN float attrPage;\r\nIN vec4 attrColors;\r\n\r\nOUT vec2 texCoord;\r\nOUT float texIndex;\r\nOUT vec4 fragAttrColors;\r\n\r\n\r\n\r\n\r\nconst float mulSize=0.01;\r\n\r\nvoid main()\r\n{\r\n    texCoord=(attrTexOffsets+attrTexCoord*attrTcSize);\r\n    texCoord.y=1.0-texCoord.y;\r\n\r\n    mat4 instMVMat=instMat;\r\n    vec4 vert=vec4( vPosition, 1. );\r\n    vert.x*=attrSize.x*mulSize;\r\n    vert.y*=attrSize.y*mulSize;\r\n\r\n    fragAttrColors=attrColors;\r\n\r\n    texIndex=attrPage+0.4; // strange ios rounding errors?!\r\n\r\n    mat4 mvMatrix=viewMatrix * modelMatrix * instMVMat;\r\n\r\n    gl_Position = projMatrix * mvMatrix * vert;\r\n}\r\n",};
// https://soimy.github.io/msdf-bmfont-xml/

// antialiasing:
// https://github.com/Chlumsky/msdfgen/issues/22

const
    render = op.inTrigger("Render"),
    str = op.inString("Text", "cables"),
    inFont = op.inDropDown("Font", [], "", true),
    scale = op.inFloat("Scale", 0.25),

    letterSpace = op.inFloat("Letter Spacing", 0),
    lineHeight = op.inFloat("Line Height", 1),

    align = op.inSwitch("Align", ["Left", "Center", "Right"], "Center"),
    valign = op.inSwitch("Vertical Align", ["Zero", "Top", "Middle", "Bottom"], "Middle"),

    r = op.inValueSlider("r", 1),
    g = op.inValueSlider("g", 1),
    b = op.inValueSlider("b", 1),
    a = op.inValueSlider("a", 1),
    doSDF = op.inBool("SDF", true),

    smoothing = op.inValueSlider("Smoothing", 0.3),

    inBorder = op.inBool("Border", false),
    inBorderWidth = op.inFloatSlider("Border Width", 0.5),
    inBorderSmooth = op.inFloatSlider("Smoothness", 0.25),
    br = op.inValueSlider("Border r", 1),
    bg = op.inValueSlider("Border g", 1),
    bb = op.inValueSlider("Border b", 1),

    inShadow = op.inBool("Shadow", false),

    inTexColor = op.inTexture("Texture Color"),
    inTexMask = op.inTexture("Texture Mask"),

    inPosArr = op.inArray("Positions"),
    inScaleArr = op.inArray("Scalings"),
    inRotArr = op.inArray("Rotations"),
    inColors = op.inArray("Colors"),

    next = op.outTrigger("Next"),
    outArr = op.outArray("Positions Original", null, 3),

    outScales = op.outArray("Scales", null, 2),
    outLines = op.outNumber("Num Lines"),

    outWidth = op.outNumber("Width"),
    outHeight = op.outNumber("Height"),
    outStartY = op.outNumber("Start Y"),
    outNumChars = op.outNumber("Num Chars");

op.setPortGroup("Size", [letterSpace, lineHeight, scale]);
op.setPortGroup("Character Transformations", [inScaleArr, inRotArr, inPosArr]);
op.setPortGroup("Alignment", [align, valign]);
op.setPortGroup("Color", [r, g, b, a, doSDF]);
op.setPortGroup("Border", [br, bg, bb, inBorderSmooth, inBorderWidth, inBorder]);

r.setUiAttribs({ "colorPick": true });
br.setUiAttribs({ "colorPick": true });

const cgl = op.patch.cgl;
const fontDataVarPrefix = "font_data_";
const substrLength = fontDataVarPrefix.length;
const alignVec = vec3.create();
const vScale = vec3.create();
const shader = new CGL.Shader(cgl, "TextMeshSDF");
shader.define("INSTANCING");

let fontTexs = null;
let fontData = null;
let fontChars = null;
let needUpdate = true;
let geom = null;
let mesh = null;
let disabled = false;
let valignMode = 1;
let heightAll = 0, widthAll = 0;
let avgHeight = 0;
let minY, maxY, minX, maxX;
let needsUpdateTransmats = true;
let transMats = null;
let offY = 0;

if (cgl.glVersion == 1)
{
    cgl.gl.getExtension("OES_standard_derivatives");
    shader.enableExtension("GL_OES_standard_derivatives");
}

shader.setSource(attachments.textmeshsdf_vert, attachments.textmeshsdf_frag);

const
    uniTex = new CGL.Uniform(shader, "t", "tex0", 0),
    uniTex1 = new CGL.Uniform(shader, "t", "tex1", 1),
    uniTex2 = new CGL.Uniform(shader, "t", "tex2", 2),
    uniTex3 = new CGL.Uniform(shader, "t", "tex3", 3),
    uniTexMul = new CGL.Uniform(shader, "t", "texMulColor", 4),
    uniTexMulMask = new CGL.Uniform(shader, "t", "texMulMask", 5),
    uniColor = new CGL.Uniform(shader, "4f", "color", r, g, b, a),
    uniColorBorder = new CGL.Uniform(shader, "3f", "colorBorder", br, bg, bb),

    uniTexSize = new CGL.Uniform(shader, "2f", "texSize", 0, 0),

    uniSmoothing = new CGL.Uniform(shader, "f", "smoothing", smoothing),
    uniborderSmooth = new CGL.Uniform(shader, "f", "borderSmooth", inBorderSmooth),
    uniborderWidth = new CGL.Uniform(shader, "f", "borderWidth", inBorderWidth);

scale.onChange = updateScale;

inRotArr.onChange =
    inPosArr.onChange =
    inScaleArr.onChange = function () { needsUpdateTransmats = true; };

inTexColor.onChange =
inTexMask.onChange =
inShadow.onChange =
inBorder.onChange =
doSDF.onChange =
    updateDefines;

inColors.onLinkChanged = () =>
{
    updateDefines();
    needsUpdateTransmats = true;
    needUpdate = true;
};

inColors.onChange = () =>
{
    needUpdate = true;
    if (mesh && inColors.get() && inColors.isLinked())
        mesh.setAttribute("attrColors", new Float32Array(inColors.get()), 4, { "instanced": true });
};

align.onChange =
    str.onChange =
    letterSpace.onChange =
    lineHeight.onChange =
    function ()
    {
        needUpdate = true;
    };

valign.onChange = updateAlign;

op.patch.addEventListener("variablesChanged", updateFontList);
op.patch.addEventListener("FontLoadedMSDF", updateFontList);

inFont.onChange = updateFontData;

updateDefines();
updateScale();
updateFontList();

function updateDefines()
{
    shader.toggleDefine("SDF", doSDF.get());
    shader.toggleDefine("SHADOW", inShadow.get());
    shader.toggleDefine("BORDER", inBorder.get());
    shader.toggleDefine("TEXTURE_COLOR", inTexColor.isLinked());
    shader.toggleDefine("TEXTURE_MASK", inTexMask.isLinked());
    shader.toggleDefine("HAS_ATTR_COLORS", inColors.isLinked());

    br.setUiAttribs({ "greyout": !inBorder.get() });
    bg.setUiAttribs({ "greyout": !inBorder.get() });
    bb.setUiAttribs({ "greyout": !inBorder.get() });
    inBorderSmooth.setUiAttribs({ "greyout": !inBorder.get() });
    inBorderWidth.setUiAttribs({ "greyout": !inBorder.get() });
}

function updateFontData()
{
    updateFontList();
    const varname = fontDataVarPrefix + inFont.get();

    fontData = null;
    fontTexs = null;
    fontChars = {};

    const dataVar = op.patch.getVar(varname);

    if (!dataVar || !dataVar.getValue())
    {
        fontData = null;

        // op.warn("no varname", varname);
        return;
    }

    fontData = dataVar.getValue().data;

    if (!fontData)
    {
        return;
    }

    const basename = dataVar.getValue().basename;

    const textVar = op.patch.getVar("font_tex_" + basename);
    if (!textVar)
    {
        fontTexs = null;
        fontData = null;
        return;
    }

    fontTexs = textVar.getValue();

    for (let i = 0; i < fontData.chars.length; i++) fontChars[fontData.chars[i].char] = fontData.chars[i];
    needUpdate = true;
}

function updateFontList()
{
    const vars = op.patch.getVars();
    const names = ["..."];

    for (const i in vars)
        if (vars[i].type == "fontData")
            names.push(i.substr(substrLength));

    inFont.uiAttribs.values = names;
}

function updateScale()
{
    const s = scale.get();
    vec3.set(vScale, s, s, s);
    vec3.set(alignVec, 0, offY * s, 0);

    outWidth.set(widthAll * s);
    outHeight.set(heightAll * s);

    outStartY.set((maxY + offY) * s);
}

function updateAlign()
{
    if (minX == undefined) return;
    if (valign.get() == "Top") valignMode = 0;
    else if (valign.get() == "Middle") valignMode = 1;
    else if (valign.get() == "Bottom") valignMode = 2;
    else if (valign.get() == "Zero") valignMode = 3;

    offY = 0;
    widthAll = (Math.abs(minX - maxX));
    heightAll = (Math.abs(minY - maxY));

    if (valignMode === 1) offY = heightAll / 2;
    else if (valignMode === 2) offY = heightAll;

    if (valignMode != 0)offY -= avgHeight;

    updateScale();
}

function buildTransMats()
{
    needsUpdateTransmats = false;

    // if(!( inPosArr.get() || inScaleArr.get() || inRotArr.get()))
    // {
    //     transMats=null;
    //     return;
    // }

    const transformations = [];
    const translates = inPosArr.get() || outArr.get();
    const scales = inScaleArr.get();
    const rots = inRotArr.get();

    for (let i = 0; i < mesh.numInstances; i++)
    {
        const m = mat4.create();
        mat4.translate(m, m, [translates[i * 3 + 0], translates[i * 3 + 1], translates[i * 3 + 2]]);

        if (scales) mat4.scale(m, m, [scales[i * 3 + 0], scales[i * 3 + 1], scales[i * 3 + 2]]);

        if (rots)
        {
            mat4.rotateX(m, m, rots[i * 3 + 0] * CGL.DEG2RAD);
            mat4.rotateY(m, m, rots[i * 3 + 1] * CGL.DEG2RAD);
            mat4.rotateZ(m, m, rots[i * 3 + 2] * CGL.DEG2RAD);
        }

        transformations.push(Array.prototype.slice.call(m));
    }

    transMats = [].concat.apply([], transformations);
}

render.onTriggered = function ()
{
    if (!fontData || !fontTexs)
    {
        updateFontData();
    }

    if (!fontData)
    {
        op.setUiError("nodata", "No font data!");
        op.setUiError("msdfhint", "Use the FontMSDF op to create font and texture.", 0);
    }
    if (!fontTexs)
    {
        op.setUiError("nodata", "No font texture");
        op.setUiError("msdfhint", "Use the FontMSDF op to create font and texture.", 0);
    }
    if (fontTexs && fontData)
    {
        op.setUiError("nodata", null);
        op.setUiError("msdfhint", null);
    }

    if (needUpdate)
    {
        generateMesh();
        needUpdate = false;
    }

    if (mesh && mesh.numInstances > 0 && fontTexs)
    {
        cgl.pushShader(shader);

        cgl.setTexture(0, CGL.Texture.getEmptyTexture(cgl).tex);

        if (fontTexs[0]) uniTexSize.setValue([fontTexs[0].width, fontTexs[0].height]);

        if (fontTexs[0]) cgl.setTexture(0, fontTexs[0].tex);
        else cgl.setTexture(0, CGL.Texture.getEmptyTexture(cgl).tex);

        if (fontTexs[1])cgl.setTexture(1, fontTexs[1].tex);
        else cgl.setTexture(1, CGL.Texture.getEmptyTexture(cgl).tex);

        if (fontTexs[2])cgl.setTexture(2, fontTexs[2].tex);
        else cgl.setTexture(2, CGL.Texture.getEmptyTexture(cgl).tex);

        if (fontTexs[3])cgl.setTexture(3, fontTexs[3].tex);
        else cgl.setTexture(3, CGL.Texture.getEmptyTexture(cgl).tex);

        if (inTexColor.get()) cgl.setTexture(4, inTexColor.get().tex);
        if (inTexMask.get()) cgl.setTexture(5, inTexMask.get().tex);

        cgl.pushModelMatrix();
        mat4.translate(cgl.mMatrix, cgl.mMatrix, alignVec);

        if (needsUpdateTransmats) buildTransMats();
        if (transMats) mesh.setAttribute("instMat", new Float32Array(transMats), 16, { "instanced": true });

        if (!disabled)
        {
            mat4.scale(cgl.mMatrix, cgl.mMatrix, vScale);

            mesh.render(cgl.getShader());
        }

        cgl.popModelMatrix();

        // cgl.setTexture(0, null);
        cgl.popShader();
        // cgl.popBlendMode();
    }

    next.trigger();
};

function getChar(chStr)
{
    return fontChars[String(chStr)] || fontChars["?"] || fontChars._ || fontChars.X;
}

function generateMesh()
{
    if (!fontData || !fontChars)
    {
        outNumChars.set(0);
        return;
    }

    const theString = String(str.get() + "");

    if (!geom)
    {
        geom = new CGL.Geometry("textmesh");

        geom.vertices = [
            0.5, 0.5, 0.0,
            -0.5, 0.5, 0.0,
            0.5, -0.5, 0.0,
            -0.5, -0.5, 0.0
        ];

        geom.normals = [
            0.0, 0.0, 0.0,
            0.0, 0.0, 0.0,
            0.0, 0.0, 0.0,
            0.0, 0.0, 0.0
        ];

        geom.texCoords = new Float32Array([
            1.0, 0.0,
            0.0, 0.0,
            1.0, 1.0,
            0.0, 1.0
        ]);

        geom.verticesIndices = [
            0, 1, 2,
            2, 1, 3
        ];
    }

    if (mesh)mesh.dispose();
    mesh = new CGL.Mesh(cgl, geom);

    const strings = (theString).split("\n");
    const transformations = [];
    const tcOffsets = [];
    const sizes = [];
    const texPos = [];
    const tcSizes = [];
    const pages = [];
    let charCounter = 0;
    const arrPositions = [];

    const mulSize = 0.01;

    outLines.set(strings.length);
    minY = 99999;
    maxY = -99999;
    minX = 99999;
    maxX = -99999;

    avgHeight = 0;

    for (let i = 0; i < fontData.chars.length; i++)
    {
        if (fontData.chars[i].height) avgHeight += fontData.chars[i].height;
    }
    avgHeight /= fontData.chars.length;
    avgHeight *= mulSize;

    for (let s = 0; s < strings.length; s++)
    {
        const txt = strings[s];
        const numChars = txt.length;
        let lineWidth = 0;

        for (let i = 0; i < numChars; i++)
        {
            const chStr = txt.substring(i, i + 1);
            const char = getChar(chStr);
            if (char) lineWidth += char.xadvance * mulSize + letterSpace.get();
        }

        let pos = 0;
        if (align.get() == "Right") pos -= lineWidth;
        else if (align.get() == "Center") pos -= lineWidth / 2;

        for (let i = 0; i < numChars; i++)
        {
            const m = mat4.create();

            const chStr = txt.substring(i, i + 1);
            const char = getChar(chStr);

            if (!char) continue;

            pages.push(char.page || 0);
            sizes.push(char.width, char.height);

            tcOffsets.push(char.x / fontData.common.scaleW, (char.y / fontData.common.scaleH));

            const charWidth = char.width / fontData.common.scaleW;
            const charHeight = char.height / fontData.common.scaleH;
            const charOffsetY = (char.yoffset / fontData.common.scaleH);
            const charOffsetX = char.xoffset / fontData.common.scaleW;

            if (chStr == " ") tcSizes.push(0, 0);
            else tcSizes.push(charWidth, charHeight);

            mat4.identity(m);

            let adv = (char.xadvance / 2) * mulSize;
            pos += adv;

            const x = pos + (char.xoffset / 2) * mulSize;
            const y = (s * -lineHeight.get()) + (avgHeight) - (mulSize * (char.yoffset + char.height / 2));

            minX = Math.min(x - charWidth, minX);
            maxX = Math.max(x + charWidth, maxX);
            minY = Math.min(y - charHeight - avgHeight / 2, minY);
            maxY = Math.max(y + charHeight + avgHeight / 2, maxY);

            mat4.translate(m, m, [x, y, 0]);
            arrPositions.push(x, y, 0);

            adv = (char.xadvance / 2) * mulSize + letterSpace.get();

            pos += adv;

            minX = Math.min(pos - charWidth, minX);
            maxX = Math.max(pos + charWidth, maxX);

            transformations.push(Array.prototype.slice.call(m));

            charCounter++;
        }
    }

    transMats = [].concat.apply([], transformations);

    disabled = false;
    if (transMats.length == 0) disabled = true;

    mesh.numInstances = transMats.length / 16;
    outNumChars.set(mesh.numInstances);

    if (mesh.numInstances == 0)
    {
        disabled = true;
        return;
    }

    mesh.setAttribute("instMat", new Float32Array(transMats), 16, { "instanced": true });
    mesh.setAttribute("attrTexOffsets", new Float32Array(tcOffsets), 2, { "instanced": true });
    mesh.setAttribute("attrTcSize", new Float32Array(tcSizes), 2, { "instanced": true });
    mesh.setAttribute("attrSize", new Float32Array(sizes), 2, { "instanced": true });
    mesh.setAttribute("attrPage", new Float32Array(pages), 1, { "instanced": true });

    if (inColors.isLinked())
        mesh.setAttribute("attrColors", new Float32Array(inColors.get()), 4, { "instanced": true });

    outScales.set(sizes);
    updateAlign();
    needsUpdateTransmats = true;
    outArr.setRef(arrPositions);
}

}
};

CABLES.OPS["b5c99363-a749-4040-884b-66f91294bcad"]={f:Ops.Gl.TextMeshMSDF_v2,objName:"Ops.Gl.TextMeshMSDF_v2"};




// **************************************************************
// 
// Ops.Boolean.IfTrueThen_v2
// 
// **************************************************************

Ops.Boolean.IfTrueThen_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    exe = op.inTrigger("exe"),
    boolean = op.inValueBool("boolean", false),
    triggerThen = op.outTrigger("then"),
    triggerElse = op.outTrigger("else");

exe.onTriggered = exec;

// let b = false;

// boolean.onChange = () =>
// {
//     b = boolean.get();
// };

function exec()
{
    if (boolean.get()) triggerThen.trigger();
    else triggerElse.trigger();
}

}
};

CABLES.OPS["9549e2ed-a544-4d33-a672-05c7854ccf5d"]={f:Ops.Boolean.IfTrueThen_v2,objName:"Ops.Boolean.IfTrueThen_v2"};




// **************************************************************
// 
// Ops.Trigger.DelayedTrigger
// 
// **************************************************************

Ops.Trigger.DelayedTrigger= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    exe = op.inTriggerButton("exe"),
    delay = op.inValueFloat("delay", 1),
    cancel = op.inTriggerButton("Cancel"),
    next = op.outTrigger("next"),
    outDelaying = op.outBool("Delaying");

let lastTimeout = null;

cancel.onTriggered = function ()
{
    if (lastTimeout)clearTimeout(lastTimeout);
    lastTimeout = null;
};

exe.onTriggered = function ()
{
    outDelaying.set(true);
    if (lastTimeout)clearTimeout(lastTimeout);

    lastTimeout = setTimeout(
        function ()
        {
            outDelaying.set(false);
            lastTimeout = null;
            next.trigger();
        },
        delay.get() * 1000);
};

}
};

CABLES.OPS["f4ff66b0-8500-46f7-9117-832aea0c2750"]={f:Ops.Trigger.DelayedTrigger,objName:"Ops.Trigger.DelayedTrigger"};




// **************************************************************
// 
// Ops.Number.Number
// 
// **************************************************************

Ops.Number.Number= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    v = op.inValueFloat("value"),
    result = op.outNumber("result");

v.onChange = exec;

let isLinked = false;
v.onLinkChanged = () =>
{
    if (!isLinked && v.isLinked())op.setUiAttribs({ "extendTitle": null });
    isLinked = v.isLinked();
};

function exec()
{
    if (CABLES.UI && !isLinked) op.setUiAttribs({ "extendTitle": v.get() });

    result.set(Number(v.get()));
}

}
};

CABLES.OPS["8fb2bb5d-665a-4d0a-8079-12710ae453be"]={f:Ops.Number.Number,objName:"Ops.Number.Number"};




// **************************************************************
// 
// Ops.Patch.PK3cVbR.TransformCategoryLettersPositions
// 
// **************************************************************

Ops.Patch.PK3cVbR.TransformCategoryLettersPositions= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    exec = op.inTrigger("Trigger"),
    nodePosIn = op.inArray("Node Positions"),
    textPosIn = op.inArray("Text Original Positions"),
    textCenterPosIn = op.inArray("Text Center Positions"),
    strLengthsIn = op.inArray("String Lengths"),
    scaleIn = op.inFloat("Scale", 5.2),
    next = op.outTrigger("Next"),
    result = op.outArray("Updated Text Positions");

let numTriggered = 0;
exec.onTriggered = () =>
{
    numTriggered++;
    try
    {
        const nodePos = nodePosIn.get();
        const textPos = textPosIn.get();
        const textCenterPos = textCenterPosIn.get();
        const strLengths = strLengthsIn.get();
        const scale = 1/scaleIn.get();
        const nWords = strLengths.length;
        const updatedPos = [];

        let idx = 0;
        for (let i = 0; i < nWords; i++)
        {
            const strLen = strLengths[i];
            if (numTriggered % 3000 == 0)
            {
                console.log("BEGINNING", i);
                console.log('i*3:',i * 3, 'idx:',idx,'strLen:', strLen);
                console.log(nodePos[i * 3], textPos[idx + 1] - textCenterPos[i * 3 + 1]);
            }

            for (let j = 0; j < strLen; j++)
            {
                updatedPos.push(nodePos[i * 3]*scale + textPos[idx] - textCenterPos[i * 3]);
                updatedPos.push(nodePos[i * 3 + 1]*scale + textPos[idx + 1] - textCenterPos[i * 3 + 1]);
                updatedPos.push(nodePos[i * 3 + 2]*scale + textPos[idx + 2] + textCenterPos[i * 3 + 2]);
                idx += 3;
            }
        }
        result.set(updatedPos);
    }
    catch (e)
    {
        result.set(null);
    }
    next.trigger();
};

}
};

CABLES.OPS["66c6a785-8779-471e-aaa6-52c71935ce16"]={f:Ops.Patch.PK3cVbR.TransformCategoryLettersPositions,objName:"Ops.Patch.PK3cVbR.TransformCategoryLettersPositions"};




// **************************************************************
// 
// Ops.Gl.Orthogonal_v2
// 
// **************************************************************

Ops.Gl.Orthogonal_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("render"),
    bounds = op.inValue("bounds", 2),
    fixAxis = op.inSwitch("Axis", ["X", "Y", "None"], "X"),
    zNear = op.inValue("frustum near", -100),
    zFar = op.inValue("frustum far", 100),
    trigger = op.outTrigger("trigger"),
    outRatio = op.outNumber("Ratio"),
    outWidth = op.outNumber("Width"),
    outHeight = op.outNumber("Height");
const cgl = op.patch.cgl;

render.onTriggered = function ()
{
    const vp = cgl.getViewPort();

    if (fixAxis.get() == "X")
    {
        const ratio = vp[3] / vp[2];

        cgl.pushPMatrix();
        mat4.ortho(
            cgl.pMatrix,
            -bounds.get(),
            bounds.get(),
            -bounds.get() * ratio,
            bounds.get() * ratio,
            parseFloat(zNear.get()),
            parseFloat(zFar.get())
        );

        outWidth.set(bounds.get() * 2);
        outHeight.set(bounds.get() * ratio * 2);
        outRatio.set(ratio);
    }
    else if (fixAxis.get() == "Y")
    {
        const ratio = vp[2] / vp[3];

        cgl.pushPMatrix();
        mat4.ortho(
            cgl.pMatrix,
            -bounds.get() * ratio,
            bounds.get() * ratio,
            -bounds.get(),
            bounds.get(),
            parseFloat(zNear.get()),
            parseFloat(zFar.get())
        );

        outWidth.set(bounds.get() * ratio * 2);
        outHeight.set(bounds.get() * 2);
        outRatio.set(ratio);
    }
    else
    {
        cgl.pushPMatrix();
        mat4.ortho(
            cgl.pMatrix,
            -bounds.get(),
            bounds.get(),
            -bounds.get(),
            bounds.get(),
            parseFloat(zNear.get()),
            parseFloat(zFar.get())
        );

        outWidth.set(bounds.get() * 2);
        outHeight.set(bounds.get() * 2);
        outRatio.set(1);
    }

    trigger.trigger();
    cgl.popPMatrix();
};

}
};

CABLES.OPS["b9235490-eaf2-4960-b1be-4279a4051ec6"]={f:Ops.Gl.Orthogonal_v2,objName:"Ops.Gl.Orthogonal_v2"};




// **************************************************************
// 
// Ops.Gl.ViewPortSize
// 
// **************************************************************

Ops.Gl.ViewPortSize= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    exec = op.inTrigger("Exec"),
    next = op.outTrigger("Next"),
    outX = op.outNumber("X"),
    outY = op.outNumber("Y"),
    outW = op.outNumber("Width"),
    outH = op.outNumber("Height");

exec.onTriggered = function ()
{
    const vp = op.patch.cgl.viewPort;

    outX.set(vp[0]);
    outY.set(vp[1]);
    outW.set(vp[2]);
    outH.set(vp[3]);

    next.trigger();
};

}
};

CABLES.OPS["7cb99d8f-d7ef-478e-902b-54e054e387a0"]={f:Ops.Gl.ViewPortSize,objName:"Ops.Gl.ViewPortSize"};




// **************************************************************
// 
// Ops.Graphics.Meshes.Rectangle_v4
// 
// **************************************************************

Ops.Graphics.Meshes.Rectangle_v4= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("render"),
    doRender = op.inValueBool("Render Mesh", true),
    width = op.inValue("width", 1),
    height = op.inValue("height", 1),
    pivotX = op.inSwitch("pivot x", ["left", "center", "right"], "center"),
    pivotY = op.inSwitch("pivot y", ["top", "center", "bottom"], "center"),
    axis = op.inSwitch("axis", ["xy", "xz"], "xy"),
    flipTcX = op.inBool("Flip TexCoord X", false),
    flipTcY = op.inBool("Flip TexCoord Y", true),
    nColumns = op.inValueInt("num columns", 1),
    nRows = op.inValueInt("num rows", 1),
    trigger = op.outTrigger("trigger"),
    geomOut = op.outObject("geometry", null, "geometry");

geomOut.ignoreValueSerialize = true;

const geom = new CGL.Geometry("rectangle");

doRender.setUiAttribs({ "title": "Render" });
render.setUiAttribs({ "title": "Trigger" });
trigger.setUiAttribs({ "title": "Next" });
op.setPortGroup("Pivot", [pivotX, pivotY, axis]);
op.setPortGroup("Size", [width, height]);
op.setPortGroup("Structure", [nColumns, nRows]);
op.toWorkPortsNeedToBeLinked(render);
op.toWorkShouldNotBeChild("Ops.Gl.TextureEffects.ImageCompose", CABLES.OP_PORT_TYPE_TRIGGER);

const AXIS_XY = 0;
const AXIS_XZ = 1;

let curAxis = AXIS_XY;
let mesh = null;
let needsRebuild = true;
let doScale = true;

const vScale = vec3.create();
vec3.set(vScale, 1, 1, 1);

axis.onChange =
    pivotX.onChange =
    pivotY.onChange =
    flipTcX.onChange =
    flipTcY.onChange =
    nRows.onChange =
    nColumns.onChange = rebuildLater;
updateScale();

width.onChange =
    height.onChange =
    () =>
    {
        if (doScale) updateScale();
        else needsRebuild = true;
    };

function updateScale()
{
    if (curAxis === AXIS_XY) vec3.set(vScale, width.get(), height.get(), 1);
    if (curAxis === AXIS_XZ) vec3.set(vScale, width.get(), 1, height.get());
}

geomOut.onLinkChanged = () =>
{
    doScale = !geomOut.isLinked();
    updateScale();
    needsRebuild = true;
};

function rebuildLater()
{
    needsRebuild = true;
}

render.onTriggered = () =>
{
    if (needsRebuild) rebuild();
    const cg = op.patch.cg;
    if (cg && mesh && doRender.get())
    {
        if (doScale)
        {
            cg.pushModelMatrix();
            mat4.scale(cg.mMatrix, cg.mMatrix, vScale);
        }

        mesh.render(cg.getShader());

        if (doScale) cg.popModelMatrix();
    }

    trigger.trigger();
};

op.onDelete = function () { if (mesh)mesh.dispose(); };

function rebuild()
{
    if (axis.get() == "xy") curAxis = AXIS_XY;
    if (axis.get() == "xz") curAxis = AXIS_XZ;

    updateScale();
    let w = width.get();
    let h = height.get();

    if (doScale) w = h = 1;

    let x = 0;
    let y = 0;

    if (pivotX.get() == "center") x = 0;
    else if (pivotX.get() == "right") x = -w / 2;
    else if (pivotX.get() == "left") x = +w / 2;

    if (pivotY.get() == "center") y = 0;
    else if (pivotY.get() == "top") y = -h / 2;
    else if (pivotY.get() == "bottom") y = +h / 2;

    const numRows = Math.max(1, Math.round(nRows.get()));
    const numColumns = Math.max(1, Math.round(nColumns.get()));

    const stepColumn = w / numColumns;
    const stepRow = h / numRows;

    const indices = [];
    const tc = new Float32Array((numColumns + 1) * (numRows + 1) * 2);
    const verts = new Float32Array((numColumns + 1) * (numRows + 1) * 3);
    const norms = new Float32Array((numColumns + 1) * (numRows + 1) * 3);
    const tangents = new Float32Array((numColumns + 1) * (numRows + 1) * 3);
    const biTangents = new Float32Array((numColumns + 1) * (numRows + 1) * 3);

    let idxTc = 0;
    let idxVert = 0;
    let idxNorms = 0;
    let idxTangent = 0;
    let idxBiTangent = 0;

    for (let r = 0; r <= numRows; r++)
    {
        for (let c = 0; c <= numColumns; c++)
        {
            verts[idxVert++] = c * stepColumn - w / 2 + x;
            if (curAxis == AXIS_XZ) verts[idxVert++] = 0;
            verts[idxVert++] = r * stepRow - h / 2 + y;

            if (curAxis == AXIS_XY)verts[idxVert++] = 0;

            tc[idxTc++] = c / numColumns;
            tc[idxTc++] = r / numRows;

            if (curAxis == AXIS_XY) // default
            {
                norms[idxNorms++] = 0;
                norms[idxNorms++] = 0;
                norms[idxNorms++] = 1;

                tangents[idxTangent++] = 1;
                tangents[idxTangent++] = 0;
                tangents[idxTangent++] = 0;

                biTangents[idxBiTangent++] = 0;
                biTangents[idxBiTangent++] = 1;
                biTangents[idxBiTangent++] = 0;
            }
            else if (curAxis == AXIS_XZ)
            {
                norms[idxNorms++] = 0;
                norms[idxNorms++] = 1;
                norms[idxNorms++] = 0;

                biTangents[idxBiTangent++] = 0;
                biTangents[idxBiTangent++] = 0;
                biTangents[idxBiTangent++] = 1;
            }
        }
    }

    indices.length = numColumns * numRows * 6;
    let idx = 0;

    for (let c = 0; c < numColumns; c++)
    {
        for (let r = 0; r < numRows; r++)
        {
            const ind = c + (numColumns + 1) * r;
            const v1 = ind;
            const v2 = ind + 1;
            const v3 = ind + numColumns + 1;
            const v4 = ind + 1 + numColumns + 1;

            if (curAxis == AXIS_XY) // default
            {
                indices[idx++] = v1;
                indices[idx++] = v2;
                indices[idx++] = v3;

                indices[idx++] = v3;
                indices[idx++] = v2;
                indices[idx++] = v4;
            }
            else
            if (curAxis == AXIS_XZ)
            {
                indices[idx++] = v1;
                indices[idx++] = v3;
                indices[idx++] = v2;

                indices[idx++] = v2;
                indices[idx++] = v3;
                indices[idx++] = v4;
            }
        }
    }

    if (flipTcY.get()) for (let i = 0; i < tc.length; i += 2)tc[i + 1] = 1.0 - tc[i + 1];
    if (flipTcX.get()) for (let i = 0; i < tc.length; i += 2)tc[i] = 1.0 - tc[i];

    geom.clear();
    geom.vertices = verts;
    geom.texCoords = tc;
    geom.verticesIndices = indices;
    geom.vertexNormals = norms;
    geom.tangents = tangents;
    geom.biTangents = biTangents;

    if (op.patch.cg)
        if (!mesh) mesh = op.patch.cg.createMesh(geom, { "opId": op.id });
        else mesh.setGeom(geom);

    geomOut.setRef(geom);
    needsRebuild = false;
}

}
};

CABLES.OPS["cc8c3ede-7103-410b-849f-a645793cab39"]={f:Ops.Graphics.Meshes.Rectangle_v4,objName:"Ops.Graphics.Meshes.Rectangle_v4"};




// **************************************************************
// 
// Ops.Patch.PK3cVbR.ArrayMultiplyArray1
// 
// **************************************************************

Ops.Patch.PK3cVbR.ArrayMultiplyArray1= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
// Multiplies numbers between arrays of the same size

const
    ArrayIn0 = op.inArray("Array0"),
    ArrayIn1 = op.inArray("Array1"),
    result = op.outArray("Multiplied Array");


ArrayIn0.onChange = ArrayIn1.onChange;

ArrayIn1.onChange = () =>
{
    const array0 = ArrayIn0.get();
    const array1 = ArrayIn1.get();
    try {
        console.warn('array0', array0);
        const multipliedArray = array0.map((e, i) => e * array1[i]);
        result.set(multipliedArray);
    }
    catch(e) {
        result.set([]);
    }
};

}
};

CABLES.OPS["51569647-59ac-411b-a223-c7fb91e4375b"]={f:Ops.Patch.PK3cVbR.ArrayMultiplyArray1,objName:"Ops.Patch.PK3cVbR.ArrayMultiplyArray1"};




// **************************************************************
// 
// Ops.Vars.VarGetTexture_v2
// 
// **************************************************************

Ops.Vars.VarGetTexture_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const val = op.outTexture("Value");
op.varName = op.inValueSelect("Variable", [], "", true);

new CABLES.VarGetOpWrapper(op, "object", op.varName, val);

}
};

CABLES.OPS["5f8ce5fc-9787-45c9-9a83-0eebd2c6de15"]={f:Ops.Vars.VarGetTexture_v2,objName:"Ops.Vars.VarGetTexture_v2"};




// **************************************************************
// 
// Ops.Patch.PK3cVbR.NodesColor1
// 
// **************************************************************

Ops.Patch.PK3cVbR.NodesColor1= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
// welcome to your new op!
// have a look at the documentation:
// https://cables.gl/docs/5_writing_ops/dev_ops/dev_ops

const graphSizeIn = op.inInt("GraphSize", 0); // Changed to inInt, added default
const nodesSelectedIndexIn = op.inInt("NodeSelectedIndex", -1); // Added default
const nodesMaskIn = op.inArray("Nodes Mask");
const colorUnselectedIn = op.inArray("ColorUnselected", [0.5, 0.5, 0.5, 1]); // Changed to inColor, added default
const colorDraggedIn = op.inArray("ColorDragged", [1, 0, 0, 1]); // Changed to inColor, added default
const colorSelectedIn = op.inArray("ColorSelected", [1, 0, 0, 1]); // Changed to inColor, added default
const currentSelectedNodesIn = op.inArray("Current Selected Nodes");
const resultOut = op.outArray("ColorsArray"); // Renamed 'result' to 'resultOut' for clarity

// This function will handle the logic and can be called on change or initially
const updateColors = () => {
    // Get the CURRENT values from the input ports INSIDE the handler
    const currentGraphSize = graphSizeIn.get();
    const currentUnselectedColor = colorUnselectedIn.get();
    const currentDraggedColor = colorDraggedIn.get();
    const currentSelectedColor = colorSelectedIn.get();
    const currentNodeIndex = nodesSelectedIndexIn.get();
    const nodesMask = nodesMaskIn.get();
    const currentSelectedNodes = currentSelectedNodesIn.get();

    let nodesColors = [];

    // Basic validation
    if (typeof currentGraphSize !== 'number' || currentGraphSize <= 0) {
        resultOut.set([]); // Output empty array if graph size is invalid
        return;
    }
    if (!Array.isArray(currentSelectedColor) || !Array.isArray(currentUnselectedColor) ||
        currentSelectedColor.length < 3 || currentUnselectedColor.length < 3 ) { // Basic check for color array
        console.warn("Color inputs are not valid arrays.");
        resultOut.set([]);
        return;
    }

    // Corrected loop condition: i < currentGraphSize
    for (let i = 0; i < currentGraphSize; i++) {
        // Determine the color for the current node
        // We are pushing the actual color array [r,g,b,a]
        if (nodesMask[i] != 0) {
            if (i === currentNodeIndex) {
                nodesColors = nodesColors.concat(currentDraggedColor);
            } else if (currentSelectedNodes[i] == 1) {
                nodesColors = nodesColors.concat(currentSelectedColor);
            } else {
                nodesColors = nodesColors.concat(currentUnselectedColor);
            }
        }
    }
    resultOut.set(nodesColors);
};

// Assign the handler to the onChange event of nodesSelectedIndexIn
nodesSelectedIndexIn.onChange = updateColors;
nodesMaskIn.onChange = updateColors;

// Also listen to changes in other relevant inputs to update the colors
graphSizeIn.onChange = updateColors;
colorUnselectedIn.onChange = updateColors;
colorSelectedIn.onChange = updateColors;

// Optional: Trigger an initial update when the patch loads or op is created
// This ensures the output is set correctly from the start based on default/initial input values.
// You might need a trigger input for this, or call it if inputs have flow control (e.g. op.patch.isLoaded())
// For simplicity here, we'll call it once directly, assuming inputs are ready.
// However, relying on individual onChanges is often more robust for initial states if defaults are set.

}
};

CABLES.OPS["23b8eacc-3e83-46bc-bd37-5fe5ac524fda"]={f:Ops.Patch.PK3cVbR.NodesColor1,objName:"Ops.Patch.PK3cVbR.NodesColor1"};




// **************************************************************
// 
// Ops.Patch.PK3cVbR.NodesColor2
// 
// **************************************************************

Ops.Patch.PK3cVbR.NodesColor2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
// welcome to your new op!
// have a look at the documentation:
// https://cables.gl/docs/5_writing_ops/dev_ops/dev_ops

const graphSizeIn = op.inInt("GraphSize", 0); // Changed to inInt, added default
const nodesSelectedIndexIn = op.inInt("NodeSelectedIndex", -1); // Added default
const nodesMaskIn = op.inArray("Nodes Mask");
const colorUnselectedIn = op.inArray("ColorUnselected", [0.5, 0.5, 0.5, 1]); // Changed to inColor, added default
const colorDraggedIn = op.inArray("ColorDragged", [1, 0, 0, 1]); // Changed to inColor, added default
const colorSelectedIn = op.inArray("ColorSelected", [1, 0, 0, 1]); // Changed to inColor, added default
const currentSelectedNodesIn = op.inArray("Current Selected Nodes");
const resultOut = op.outArray("ColorsArray"); // Renamed 'result' to 'resultOut' for clarity

// This function will handle the logic and can be called on change or initially
const updateColors = () => {
    // Get the CURRENT values from the input ports INSIDE the handler
    const currentGraphSize = graphSizeIn.get();
    const currentUnselectedColor = colorUnselectedIn.get();
    const currentDraggedColor = colorDraggedIn.get();
    const currentSelectedColor = colorSelectedIn.get();
    const currentNodeIndex = nodesSelectedIndexIn.get();
    const nodesMask = nodesMaskIn.get();
    const currentSelectedNodes = currentSelectedNodesIn.get();

    let nodesColors = [];

    // Basic validation
    if (typeof currentGraphSize !== 'number' || currentGraphSize <= 0) {
        resultOut.set([]); // Output empty array if graph size is invalid
        return;
    }
    if (!Array.isArray(currentSelectedColor) || !Array.isArray(currentUnselectedColor) ||
        currentSelectedColor.length < 3 || currentUnselectedColor.length < 3 ) { // Basic check for color array
        console.warn("Color inputs are not valid arrays.");
        resultOut.set([]);
        return;
    }

    // Corrected loop condition: i < currentGraphSize
    for (let i = 0; i < currentGraphSize; i++) {
        // Determine the color for the current node
        // We are pushing the actual color array [r,g,b,a]
        if (nodesMask[i] != 0) {
            if (i === currentNodeIndex) {
                nodesColors = nodesColors.concat(currentDraggedColor);
            } else if (currentSelectedNodes[i] == 1) {
                nodesColors = nodesColors.concat(currentSelectedColor);
            } else {
                nodesColors = nodesColors.concat(currentUnselectedColor);
            }
        }
    }
    resultOut.set(nodesColors);
};

// Assign the handler to the onChange event of nodesSelectedIndexIn
nodesSelectedIndexIn.onChange = updateColors;
nodesMaskIn.onChange = updateColors;

// Also listen to changes in other relevant inputs to update the colors
graphSizeIn.onChange = updateColors;
colorUnselectedIn.onChange = updateColors;
colorSelectedIn.onChange = updateColors;

// Optional: Trigger an initial update when the patch loads or op is created
// This ensures the output is set correctly from the start based on default/initial input values.
// You might need a trigger input for this, or call it if inputs have flow control (e.g. op.patch.isLoaded())
// For simplicity here, we'll call it once directly, assuming inputs are ready.
// However, relying on individual onChanges is often more robust for initial states if defaults are set.

}
};

CABLES.OPS["a1a9059b-5339-4a51-9d5d-b0bccd834bb0"]={f:Ops.Patch.PK3cVbR.NodesColor2,objName:"Ops.Patch.PK3cVbR.NodesColor2"};




// **************************************************************
// 
// Ops.Trigger.RouteTrigger
// 
// **************************************************************

Ops.Trigger.RouteTrigger= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const NUM_PORTS = 24;
const
    exePort = op.inTriggerButton("Execute"),
    switchPort = op.inValueInt("Switch Value"),
    nextTriggerPort = op.outTrigger("Next Trigger"),
    valueOutPort = op.outNumber("Switched Value");

const triggerPorts = [];
exePort.onTriggered = update;

for (let j = 0; j < NUM_PORTS; j++)
{
    triggerPorts[j] = op.outTrigger("Trigger " + j);

    triggerPorts[j].onLinkChanged = countLinks;
}

const
    defaultTriggerPort = op.outTrigger("Default Trigger"),
    outNumConnected = op.outNumber("Highest Index");

function update()
{
    const index = Math.round(switchPort.get());

    if (index >= 0 && index < NUM_PORTS)
    {
        valueOutPort.set(index);
        triggerPorts[index].trigger();
    }
    else
    {
        valueOutPort.set(-1);
        defaultTriggerPort.trigger();
    }
    nextTriggerPort.trigger();
}

function countLinks()
{
    let count = 0;
    for (let i = 0; i < triggerPorts.length; i++)
        if (triggerPorts[i] && triggerPorts[i].isLinked())count = i;

    outNumConnected.set(count);
}

}
};

CABLES.OPS["44ceb5d8-b040-4722-b189-a6fb8172517d"]={f:Ops.Trigger.RouteTrigger,objName:"Ops.Trigger.RouteTrigger"};




// **************************************************************
// 
// Ops.Boolean.Boolean
// 
// **************************************************************

Ops.Boolean.Boolean= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    v = op.inBool("value", false),
    result = op.outBoolNum("result");

result.set(false);
v.onChange = exec;

function exec()
{
    if (result.get() != v.get()) result.set(v.get());
}

}
};

CABLES.OPS["83e2d74c-9741-41aa-a4d7-1bda4ef55fb3"]={f:Ops.Boolean.Boolean,objName:"Ops.Boolean.Boolean"};




// **************************************************************
// 
// Ops.Sidebar.Toggle_v4
// 
// **************************************************************

Ops.Sidebar.Toggle_v4= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    parentPort = op.inObject("link"),
    labelPort = op.inString("Text", "Toggle"),
    inputValue = op.inBool("Input", true),
    storeDefaultValueButton = op.inTriggerButton("Set Default"),
    defaultValuePort = op.inBool("Default"),
    inGreyOut = op.inBool("Grey Out", false),
    inVisible = op.inBool("Visible", true),
    siblingsPort = op.outObject("childs"),
    valuePort = op.outBoolNum("Value", defaultValuePort.get()),
    outToggled = op.outTrigger("Toggled");

defaultValuePort.setUiAttribs({ "hidePort": true, "greyout": true });

const classNameActive = "sidebar__toggle--active";

const el = document.createElement("div");
el.dataset.op = op.id;
el.classList.add("cablesEle");
el.classList.add("sidebar__item");
el.classList.add("sidebar__toggle");
el.classList.add("sidebar__reloadable");
el.classList.add(classNameActive);

const labelText = document.createTextNode(labelPort.get());
const label = document.createElement("div");
label.classList.add("sidebar__item-label");
label.appendChild(labelText);

const icon = document.createElement("a");

valuePort.set(defaultValuePort.get());

icon.classList.add("icon_toggle");
icon.addEventListener("click", onInputClick);
icon.addEventListener("keypress", onKeyPress);

icon.setAttribute("tabindex", 0);
icon.setAttribute("aria-label", "toggle " + labelPort.get());

const greyOut = document.createElement("div");
greyOut.classList.add("sidebar__greyout");
greyOut.style.display = "none";

el.appendChild(greyOut);
el.appendChild(icon);
el.appendChild(label);
el.addEventListener("dblclick", reset);

op.init = () =>
{
    reset();
    updateClass();
};
op.onDelete = onDelete;
parentPort.onChange = onParentChanged;
labelPort.onChange = onLabelTextChanged;
inputValue.onChange = onInputValueChanged;
storeDefaultValueButton.onTriggered = storeDefaultValue;

function reset()
{
    valuePort.set(defaultValuePort.get());
    inputValue.set(defaultValuePort.get());
    outToggled.trigger();
}

function storeDefaultValue()
{
    const defaultValue = inputValue.get();

    defaultValuePort.set(defaultValue);
    valuePort.set(defaultValue);
    outToggled.trigger();
    op.refreshParams();
}

function updateClass()
{
    const isActive = valuePort.get();
    if (isActive)
    {
        icon.classList.add("icon_toggle_true");
        icon.classList.remove("icon_toggle_false");
    }
    else
    {
        icon.classList.remove("icon_toggle_true");
        icon.classList.add("icon_toggle_false");
    }
}

function onKeyPress(e)
{
    if (e.code === "Enter") onInputClick();
}

function onInputClick()
{
    el.classList.toggle(classNameActive);

    const isActive = el.classList.contains(classNameActive);
    valuePort.set(isActive);
    inputValue.set(isActive);

    updateClass();
    outToggled.trigger();
    op.refreshParams();
}

function onInputValueChanged()
{
    if (inputValue.get()) el.classList.add(classNameActive);
    else el.classList.remove(classNameActive);

    valuePort.set(inputValue.get());
    outToggled.trigger();
}

function onLabelTextChanged()
{
    const text = labelPort.get();
    label.textContent = text;
    icon.setAttribute("aria-label", "toggle " + labelPort.get());
    if (CABLES.UI) op.setUiAttrib({ "extendTitle": text });
}

function onParentChanged()
{
    siblingsPort.set(null);
    const parent = parentPort.get();
    if (parent && parent.parentElement)
    {
        parent.parentElement.appendChild(el);
        siblingsPort.set(parent);
    }
    else if (el.parentElement) el.parentElement.removeChild(el);
}

function showElement(element)
{
    if (element) element.style.display = "block";
}

function hideElement(element)
{
    if (element) element.style.display = "none";
}

function onDelete()
{
    if (el && el.parentNode && el.parentNode.removeChild) el.parentNode.removeChild(el);
}

inGreyOut.onChange = function ()
{
    greyOut.style.display = inGreyOut.get() ? "block" : "none";
};

inVisible.onChange = function ()
{
    el.style.display = inVisible.get() ? "block" : "none";
};

}
};

CABLES.OPS["247f5aaf-6438-4a37-9649-4c0fe9cc78c9"]={f:Ops.Sidebar.Toggle_v4,objName:"Ops.Sidebar.Toggle_v4"};




// **************************************************************
// 
// Ops.Patch.PK3cVbR.FruchtermanReingoldComputation
// 
// **************************************************************

Ops.Patch.PK3cVbR.FruchtermanReingoldComputation= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const exec = op.inTrigger("Execute");
const reset = op.inTrigger("Reset");
const n = op.inInt("Graph Size");
const pos = op.inArray("Positions");
const adj = op.inArray("Adjacency Matrix");
const textScaleFactorIn = op.inArray("Node Text Sizes 2D");
const initTemp = op.inFloat("Initial Temperature", 0.06);
const cooldown = op.inFloat("Cooldown", 0.0005);
const densityIn = op.inFloat("Density", 0.8);
const centerGraph = op.inBool("Center Graph in Bounds", true);
const aspectRatioIn = op.inFloat("Aspect Ratio", 1);
const marginIn = op.inFloat("Margin", 0.1);
const categoriesCountIn = op.inInt("Categories Count");
const categoriesBoundsIn = op.inObject("Categories Bounds");
const contentBoundsIn = op.inObject("Content Bounds");
const nodesMaskIn = op.inArray("Nodes Mask");
const nodesSelectionIn = op.inArray("Nodes Selected");

const next = op.outTrigger("Trigger");
const nextPos = op.outArray("Next Positions");
const forcesOut = op.outArray("Debug - Current Graph Forces");
const boundForcesOut = op.outArray("Debug - Current Forces From Bounds");
const tempOut = op.outNumber("Debug - Current Temperature");

let currentTemperature = initTemp.get();

reset.onTriggered = () =>
{
    currentTemperature = initTemp.get();
};

function calculateBoundaryForceComponent(coord, minBound, maxBound, k, strength, verbose = false)
{
    let force = 0;
    let distToMin = coord - minBound;
    let distToMax = maxBound - coord;

    if (distToMin > 0) // close to min
    {
        force += strength * (k / Math.max(distToMin, 0.1));
    }
    else if (distToMin <= 0)
    {
        force += strength * (Math.abs(distToMin)/k) * 10; // out of bounds
    }
    if (distToMax > 0) // close to max
    {
        force -= strength * (k / Math.max(distToMax, 0.1));
    }
    else if (distToMax <= 0) // out of bounds
    {
        force -= strength * (Math.abs(distToMax)/k) * 10;
    }
    return force;
}

exec.onTriggered = () =>
{
    let positions = pos.get();
    let adjacencyMatrixFlat = adj.get();
    const numNodes = n.get();
    const coolDownRate = cooldown.get();
    const epsilon = 1e-6; // prevent division by zero
    const shouldCenter = centerGraph.get();
    const density = densityIn.get();
    const aspectRatio = aspectRatioIn.get();
    const margin = marginIn.get();
    const textScaleFactor = textScaleFactorIn.get();

    const bMinY = (-1 + margin);
    const bMaxY = (1 - margin);
    const bMinX = aspectRatio * bMinY;
    const bMaxX = aspectRatio * bMaxY;

    const categoriesCount = categoriesCountIn.get();
    const categoriesBounds = categoriesBoundsIn.get();
    const contentBounds = contentBoundsIn.get();

    let selectedCategoryTargetX = (categoriesBounds.maxX+categoriesBounds.minX)/2;
    let selectedCategoryTargetY = (categoriesBounds.maxY+categoriesBounds.minY)/2;
    let selectedContentTargetX = (contentBounds.maxX+contentBounds.minX)/2;
    let selectedContentTargetY = (contentBounds.maxY+contentBounds.minY)/2;

    if (aspectRatio > 1) { // landscapes
        selectedCategoryTargetX = categoriesBounds.maxX;
        selectedContentTargetX = contentBounds.minX;
    } else { // portrait
        selectedCategoryTargetY = categoriesBounds.minY;
        selectedContentTargetY = contentBounds.maxY;
    }

    const nodesMask = nodesMaskIn.get();
    const nodesSelection = nodesSelectionIn.get();

    const k = Math.sqrt((bMaxX - bMinX) * (bMaxY - bMinY)) / 9;
    const kSquared = k * k;

    const displacementsFlat = new Float32Array(numNodes * 2); // [dx0, dy0, dx1, dy1, ...]

    const debugGraphForces = new Float32Array(numNodes * 2);
    const debugBoundForces = new Float32Array(numNodes * 2);

    // Calculate Repulsive and Attractive Forces
    for (let i = 0; i < numNodes; i++)
    {
        const iPos_x = positions[i * 2];
        const iPos_y = positions[i * 2 + 1];

        for (let j = i + 1; j < numNodes; j++)
        {
            const jPos_x = positions[j * 2];
            const jPos_y = positions[j * 2 + 1];

            let deltaX = iPos_x - jPos_x;
            let deltaY = iPos_y - jPos_y;

            let distanceSq = deltaX * deltaX + deltaY * deltaY;
            let distance = Math.sqrt(distanceSq);
            distance = Math.max(epsilon, distance); // Avoid division by zero

            const dirX = deltaX / distance;
            const dirY = deltaY / distance;

            // Repulsive force
            let repulsiveForceMag = 0;
            let attractiveForceMag = 0;
            const edgeWeight = adjacencyMatrixFlat[i * numNodes + j];

            if (nodesSelection[i] == 1 || nodesSelection[j] == 1)  {
                repulsiveForceMag = kSquared / distance * 10;
                attractiveForceMag = (distanceSq / k) * edgeWeight / 10;
            }
            else {
                repulsiveForceMag = kSquared / distance * 5;
                attractiveForceMag = (distanceSq / k) * edgeWeight;
            }

            if (nodesMask[i] != 0 && nodesMask[j] != 0)
            {
                displacementsFlat[i * 2] += dirX * repulsiveForceMag;
                displacementsFlat[i * 2 + 1] += dirY * repulsiveForceMag;
                displacementsFlat[j * 2] -= dirX * repulsiveForceMag;
                displacementsFlat[j * 2 + 1] -= dirY * repulsiveForceMag;

                // Attractive force (if edge exists)
                if (edgeWeight > 0)
                {
                    displacementsFlat[i * 2] -= dirX * attractiveForceMag;
                    displacementsFlat[i * 2 + 1] -= dirY * attractiveForceMag;
                    displacementsFlat[j * 2] += dirX * attractiveForceMag;
                    displacementsFlat[j * 2 + 1] += dirY * attractiveForceMag;

                }
            }

            debugGraphForces[i * 2] = Math.round(displacementsFlat[i * 2] * 100)/100;
            debugGraphForces[j * 2] = Math.round(displacementsFlat[j * 2] * 100)/100;
            debugGraphForces[i * 2 + 1] = Math.round(displacementsFlat[i * 2 + 1] * 100)/100;
            debugGraphForces[j * 2 + 1] = Math.round(displacementsFlat[j * 2 + 1] * 100)/100;
        }
    }

    // Add forces to repel from boundaries & attract selected nodes
    if (shouldCenter)
    {
        const boundaryForceStrength = 0.2;
        for (let i = 0; i < numNodes; i++)
        {
            let currentBounds;
            let selectedTargetX;
            let selectedTargetY;
            const isCategory = i < categoriesCount;

            if (isCategory)
            {
                currentBounds = categoriesBounds;
                selectedTargetX = selectedCategoryTargetX;
                selectedTargetY = selectedCategoryTargetY;
            }
            else
            {
                currentBounds = contentBounds;
                selectedTargetX = selectedContentTargetX;
                selectedTargetY = selectedContentTargetY;
            }

            if(nodesSelection[i] === 1) {
                let deltaX = positions[i * 2] - selectedTargetX;
                let deltaY = positions[i * 2 + 1] - selectedTargetY;
                let distanceSq = deltaX * deltaX + deltaY * deltaY;
                let distance = Math.sqrt(distanceSq);
                distance = Math.max(epsilon, distance); // Avoid division by zero
                const dirX = deltaX / distance;
                const dirY = deltaY / distance;
                const attractiveForceMag = (distanceSq / k) * 100;
                displacementsFlat[i * 2] -= dirX * attractiveForceMag;
                displacementsFlat[i * 2 + 1] -= dirY * attractiveForceMag;
            } else {
                displacementsFlat[i * 2] += calculateBoundaryForceComponent(positions[i * 2], currentBounds.minX, currentBounds.maxX, k, boundaryForceStrength, false) * 2;
                displacementsFlat[i * 2 + 1] += calculateBoundaryForceComponent(positions[i * 2 + 1], currentBounds.minY, currentBounds.maxY, k, boundaryForceStrength, false) * 2;
            }
        }
    }

    // Update Positions
    let displacementMagnitude = 0;
    const newPositionsFlatOutput = new Float32Array(numNodes * 2);
    for (let i = 0; i < numNodes; i++)
    {
        if (nodesMask[i] != 0)
        {
            const dispX = displacementsFlat[i * 2];
            const dispY = displacementsFlat[i * 2 + 1];

            const dispMagSq = dispX * dispX + dispY * dispY;
            let finalDispX = 0;
            let finalDispY = 0;

            if (dispMagSq > epsilon * epsilon)
            { // Check against squared epsilon to avoid sqrt
                const dispMag = Math.sqrt(dispMagSq);
                const limitedMovement = Math.min(dispMag, currentTemperature);

                finalDispX = (dispX / dispMag) * limitedMovement;// * randomX;
                finalDispY = (dispY / dispMag) * limitedMovement;// * randomY;
            }

            let newX = (positions[i * 2] + finalDispX);
            let newY = (positions[i * 2 + 1] + finalDispY);
            displacementMagnitude += dispMagSq

            // Clamp positions to the defined boundaries
            newX = Math.max(bMinX, Math.min(bMaxX, newX));
            newY = Math.max(bMinY, Math.min(bMaxY, newY));

            newPositionsFlatOutput[i * 2] = newX;
            newPositionsFlatOutput[i * 2 + 1] = newY;
        }
        else
        {
            newPositionsFlatOutput[i * 2] = positions[i * 2];
            newPositionsFlatOutput[i * 2 + 1] = positions[i * 2 + 1];
        }
    }

    if (displacementMagnitude < k * 40) {
        currentTemperature = Math.max(0, currentTemperature - coolDownRate * 2);
    }
    else {
        currentTemperature = Math.max(0, currentTemperature - coolDownRate / 10);
    }
    tempOut.set(displacementMagnitude);
    forcesOut.set(debugGraphForces);
    boundForcesOut.set(debugBoundForces);

    nextPos.set(newPositionsFlatOutput);
    next.trigger();
};

}
};

CABLES.OPS["533d1f3e-5279-435d-bbc0-251fa937864f"]={f:Ops.Patch.PK3cVbR.FruchtermanReingoldComputation,objName:"Ops.Patch.PK3cVbR.FruchtermanReingoldComputation"};




// **************************************************************
// 
// Ops.Patch.PK3cVbR.ScreenOrientationAndSizeConstants
// 
// **************************************************************

Ops.Patch.PK3cVbR.ScreenOrientationAndSizeConstants= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    screenAspectRatioIn = op.inFloat("Screen Aspect Ratio"),
    marginIn = op.inFloat("Visual Margin"),
    catBounds = op.outObject("Categories Bounds"),
    contentBounds = op.outObject("Content Bounds"),
    sizeCoeff = op.outNumber("Size Coefficient");


marginIn.onChange = screenAspectRatioIn.onChange;

screenAspectRatioIn.onChange = () =>
{
    const ratio = screenAspectRatioIn.get();
    const catBoundsComputation = {'minX':0, 'minY':0, 'maxX':0, 'maxY':0};
    const contentBoundsComputation = {'minX':0, 'minY':0, 'maxX':0, 'maxY':0};
    const margin = marginIn.get();
    const contentRatio = 1/3;
    const marginMin = -1 + margin;
    const marginMax = 1 - margin;

    if (ratio < 1) { // portrait
        catBoundsComputation.minX = ratio * marginMin;
        catBoundsComputation.maxX = ratio * marginMax;
        catBoundsComputation.minY = marginMin + contentRatio * (marginMax - marginMin) + margin/2;
        catBoundsComputation.maxY = marginMax;
        contentBoundsComputation.minX = catBoundsComputation.minX;
        contentBoundsComputation.maxX = catBoundsComputation.maxX;
        contentBoundsComputation.minY = marginMin;
        contentBoundsComputation.maxY = marginMin + contentRatio * (marginMax-marginMin) - margin/2;

    }
    else { // landscape
        catBoundsComputation.minX = ratio * marginMin;
        catBoundsComputation.maxX = ratio * (marginMin + (1- contentRatio) * (marginMax - marginMin) - margin / 2);
        catBoundsComputation.minY = marginMin;
        catBoundsComputation.maxY = marginMax;
        contentBoundsComputation.minX = ratio * (marginMin + (1-contentRatio) * (marginMax - marginMin) + margin / 2);
        contentBoundsComputation.maxX = ratio * marginMax;
        contentBoundsComputation.minY = marginMin;
        contentBoundsComputation.maxY = marginMax;
    }
    catBounds.set(catBoundsComputation);
    contentBounds.set(contentBoundsComputation);

    if (ratio < 1) {
        sizeCoeff.set(ratio);
    }
    else {
        sizeCoeff.set(1)
    }

};

}
};

CABLES.OPS["907e2d7d-986f-41ac-907b-f0a3584b1ed0"]={f:Ops.Patch.PK3cVbR.ScreenOrientationAndSizeConstants,objName:"Ops.Patch.PK3cVbR.ScreenOrientationAndSizeConstants"};




// **************************************************************
// 
// Ops.Gl.FontMSDF_v2
// 
// **************************************************************

Ops.Gl.FontMSDF_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
let defaultTexUrl = null;
let defaultDataUrl = null;

if (CABLES.UI)
{
    defaultTexUrl = "/assets/library/fonts_msdf/worksans-regular_int.png";
    defaultDataUrl = "/assets/library/fonts_msdf/worksans-regular_int.json";
}

const
    inUUID = op.inString("Font Name", CABLES.uuid()),
    urlData = op.inUrl("Font Data", [".json"], defaultDataUrl),
    urlTex = op.inUrl("Font Image", [".png"], defaultTexUrl),
    urlTex1 = op.inUrl("Font Image 1", [".png"]),
    urlTex2 = op.inUrl("Font Image 2", [".png"]),
    urlTex3 = op.inUrl("Font Image 3", [".png"]),
    outLoaded = op.outBool("Loaded"),
    outNumChars = op.outNumber("Total Chars"),
    outChars = op.outString("Chars"),
    cgl = op.patch.cgl;

let
    loadedData = false,
    loadedTex = false,
    loadingId = 0;

inUUID.onChange =
urlData.onChange =
    urlTex.onChange =
    urlTex1.onChange =
    urlTex2.onChange =
    urlTex3.onChange = loadLater;

const textures = [];

function updateLoaded()
{
    const l = loadedData && loadedTex;
    if (!outLoaded.get() && l) op.patch.emitEvent("FontLoadedMSDF");
    outLoaded.set(l);
}

op.onFileChanged = function (fn)
{
    if (
        (urlTex.get() && urlTex.get().indexOf(fn) > -1) ||
        (urlTex1.get() && urlTex1.get().indexOf(fn) > -1) ||
        (urlTex2.get() && urlTex2.get().indexOf(fn) > -1) ||
        (urlTex3.get() && urlTex3.get().indexOf(fn) > -1))
    {
        loadLater();
    }
};

function loadLater()
{
    cgl.addNextFrameOnceCallback(load);
}

let oldUUID = "";

function load()
{
    if (!urlData.get() || !urlTex.get()) return;

    textures.length = 0;
    op.patch.deleteVar("font_data_" + oldUUID);
    op.patch.deleteVar("font_tex_" + oldUUID);
    oldUUID = inUUID.get();

    const varNameData = "font_data_" + inUUID.get();
    const varNameTex = "font_tex_" + inUUID.get();

    op.patch.setVarValue(varNameData, {});
    op.patch.setVarValue(varNameTex, textures);

    op.patch.getVar(varNameData).type = "fontData";
    op.patch.getVar(varNameTex).type = "fontTexture";

    loadedData = loadedTex = false;
    updateLoaded();

    op.patch.loading.finished(loadingId);
    loadingId = op.patch.loading.start("jsonFile", "" + urlData.get(), op);

    op.setUiError("invaliddata", null);
    op.setUiError("jsonerr", null);
    op.setUiError("texurlerror", null);

    const urlDatastr = op.patch.getFilePath(String(urlData.get()));

    // load font data json
    cgl.patch.loading.addAssetLoadingTask(() =>
    {
        CABLES.ajax(urlDatastr, (err, _data, xhr) =>
        {
            if (err)
            {
                // op.logError(err);
                return;
            }
            try
            {
                let data = _data;
                if (typeof data === "string") data = JSON.parse(_data);
                if (!data.chars || !data.info || !data.info.face)
                {
                    op.setUiError("invaliddata", "data file is invalid");
                    return;
                }

                outNumChars.set(data.chars.length);
                let allChars = "";
                for (let i = 0; i < data.chars.length; i++)allChars += data.chars[i].char;
                outChars.set(allChars);

                op.setUiAttrib({ "extendTitle": data.info.face });
                op.patch.setVarValue(varNameData, null);
                op.patch.setVarValue(varNameData,
                    {
                        "name": CABLES.basename(urlData.get()),
                        "basename": inUUID.get(),
                        "data": data
                    });

                op.patch.loading.finished(loadingId);
                loadedData = true;
                updateLoaded();
            }
            catch (e)
            {
                op.patch.setVarValue(varNameData, null);
                op.patch.setVarValue(varNameTex, null);

                // op.logError(e);
                op.setUiError("jsonerr", "Problem while loading json:<br/>" + e);
                op.patch.loading.finished(loadingId);
                updateLoaded();
                outLoaded.set(false);
            }
        });
    });

    // load font texture

    for (let i = 0; i < 4; i++)
    {
        const num = i;

        let texPort = urlTex;
        if (i == 1)texPort = urlTex1;
        if (i == 2)texPort = urlTex2;
        if (i == 3)texPort = urlTex3;

        if (!texPort.get()) continue;

        const loadingIdTex = cgl.patch.loading.start(op.objName, texPort.get(), op);
        const urlTexstr = op.patch.getFilePath(String(texPort.get()));

        CGL.Texture.load(cgl, urlTexstr, function (err, tex)
        {
            if (err)
            {
                op.setUiError("texurlerror", "could not load texture");
                cgl.patch.loading.finished(loadingIdTex);
                loadedTex = false;
                return;
            }
            textures[num] = tex;
            op.patch.setVarValue(varNameTex, null);
            op.patch.setVarValue(varNameTex, textures);

            loadedTex = true;
            cgl.patch.loading.finished(loadingIdTex);
            updateLoaded();
        }, {
            "filter": CGL.Texture.FILTER_LINEAR,
            "flip": false
        });
    }
}

}
};

CABLES.OPS["6cbd5d67-25d5-4936-a2ad-3ee8ed478570"]={f:Ops.Gl.FontMSDF_v2,objName:"Ops.Gl.FontMSDF_v2"};




// **************************************************************
// 
// Ops.Gl.RenderToTexture_v3
// 
// **************************************************************

Ops.Gl.RenderToTexture_v3= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    render = op.inTrigger("render"),
    inSize = op.inSwitch("Size", ["Canvas", "Manual"], "Canvas"),
    width = op.inValueInt("texture width", 512),
    height = op.inValueInt("texture height", 512),
    aspect = op.inBool("Auto Aspect", true),
    tfilter = op.inSwitch("filter", ["nearest", "linear", "mipmap"], "linear"),
    twrap = op.inSwitch("Wrap", ["Clamp", "Repeat", "Mirror"], "Repeat"),
    msaa = op.inSwitch("MSAA", ["none", "2x", "4x", "8x"], "none"),
    trigger = op.outTrigger("trigger"),
    tex = op.outTexture("texture"),
    texDepth = op.outTexture("textureDepth"),
    inPixelFormat = op.inDropDown("Pixel Format", CGL.Texture.PIXELFORMATS, CGL.Texture.PFORMATSTR_RGBA8UB),
    depth = op.inValueBool("Depth", true),
    clear = op.inValueBool("Clear", true);

const cgl = op.patch.cgl;
let fb = null;
let reInitFb = true;

op.setPortGroup("Size", [inSize, width, height, aspect]);

inPixelFormat.onChange =
    depth.onChange =
    clear.onChange =
    tfilter.onChange =
    twrap.onChange =
    msaa.onChange = initFbLater;

inSize.onChange = updateUi;

render.onTriggered =
    op.preRender = doRender;

updateUi();

function updateUi()
{
    width.setUiAttribs({ "greyout": inSize.get() != "Manual" });
    height.setUiAttribs({ "greyout": inSize.get() != "Manual" });
    aspect.setUiAttribs({ "greyout": inSize.get() != "Manual" });
}

function initFbLater()
{
    reInitFb = true;
}

function doRender()
{
    CGL.TextureEffect.checkOpNotInTextureEffect(op);

    if (!fb || reInitFb)
    {
        if (fb) fb.delete();

        let selectedWrap = CGL.Texture.WRAP_REPEAT;
        if (twrap.get() == "Clamp") selectedWrap = CGL.Texture.WRAP_CLAMP_TO_EDGE;
        else if (twrap.get() == "Mirror") selectedWrap = CGL.Texture.WRAP_MIRRORED_REPEAT;

        let selectFilter = CGL.Texture.FILTER_NEAREST;
        if (tfilter.get() == "nearest") selectFilter = CGL.Texture.FILTER_NEAREST;
        else if (tfilter.get() == "linear") selectFilter = CGL.Texture.FILTER_LINEAR;
        else if (tfilter.get() == "mipmap") selectFilter = CGL.Texture.FILTER_MIPMAP;

        if (inPixelFormat.get().indexOf("loat") && tfilter.get() == "mipmap") op.setUiError("fpmipmap", "Can't use mipmap and float texture at the same time");
        else op.setUiError("fpmipmap", null);

        if (cgl.glVersion >= 2)
        {
            let ms = true;
            let msSamples = 4;

            if (msaa.get() == "none")
            {
                msSamples = 0;
                ms = false;
            }
            if (msaa.get() == "2x") msSamples = 2;
            if (msaa.get() == "4x") msSamples = 4;
            if (msaa.get() == "8x") msSamples = 8;

            fb = new CGL.Framebuffer2(cgl, 8, 8,
                {
                    "name": "render2texture " + op.id,
                    "pixelFormat": inPixelFormat.get(),
                    "multisampling": ms,
                    "multisamplingSamples": msSamples,
                    "wrap": selectedWrap,
                    "filter": selectFilter,
                    "depth": depth.get(),
                    "clear": clear.get()
                });
        }
        else
        {
            fb = new CGL.Framebuffer(cgl, 8, 8, { "isFloatingPointTexture": false, "clear": clear.get() });
        }

        if (fb && fb.valid)
        {
            texDepth.setRef(fb.getTextureDepth());
            reInitFb = false;
        }
        else
        {
            fb = null;
            reInitFb = true;
        }
    }

    let setAspect = aspect.get();

    if (inSize.get() == "Canvas")
    {
        setAspect = true;
        width.set(op.patch.cgl.checkTextureSize(cgl.canvasWidth));
        height.set(op.patch.cgl.checkTextureSize(cgl.canvasHeight));
    }

    if (fb.getWidth() != op.patch.cgl.checkTextureSize(width.get()) || fb.getHeight() != op.patch.cgl.checkTextureSize(height.get()))
    {
        fb.setSize(
            op.patch.cgl.checkTextureSize(width.get()),
            op.patch.cgl.checkTextureSize(height.get()));
    }

    fb.renderStart(cgl);

    cgl.pushViewPort(0, 0, width.get(), height.get());

    if (setAspect) mat4.perspective(cgl.pMatrix, 45, width.get() / height.get(), 0.1, 1000.0);

    trigger.trigger();
    fb.renderEnd(cgl);

    cgl.popViewPort();

    texDepth.setRef(fb.getTextureDepth());
    tex.setRef(fb.getTextureColor());
}

//

}
};

CABLES.OPS["41eec5c7-c480-477a-be81-04c3efac8357"]={f:Ops.Gl.RenderToTexture_v3,objName:"Ops.Gl.RenderToTexture_v3"};




// **************************************************************
// 
// Ops.Gl.Meshes.FullscreenRectangle_v2
// 
// **************************************************************

Ops.Gl.Meshes.FullscreenRectangle_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={"shader_frag":"UNI sampler2D tex;\r\nIN vec2 texCoord;\r\n\r\nvoid main()\r\n{\r\n    outColor= texture(tex,texCoord);\r\n}\r\n\r\n","shader_vert":"{{MODULES_HEAD}}\r\n\r\nIN vec3 vPosition;\r\nUNI mat4 projMatrix;\r\nUNI mat4 mvMatrix;\r\n\r\nOUT vec2 texCoord;\r\nIN vec2 attrTexCoord;\r\n\r\nvoid main()\r\n{\r\n   vec4 pos=vec4(vPosition,  1.0);\r\n\r\n   texCoord=vec2(attrTexCoord.x,(1.0-attrTexCoord.y));\r\n\r\n   gl_Position = projMatrix * mvMatrix * pos;\r\n}\r\n",};
const
    render = op.inTrigger("render"),
    inScale = op.inSwitch("Scale", ["Stretch", "Fit"], "Fit"),
    flipY = op.inValueBool("Flip Y"),
    flipX = op.inValueBool("Flip X"),
    inTexture = op.inTexture("Texture"),
    trigger = op.outTrigger("trigger");

const cgl = op.patch.cgl;
let mesh = null;
let geom = new CGL.Geometry("fullscreen rectangle");
let x = 0, y = 0, w = 0, h = 0;

op.toWorkShouldNotBeChild("Ops.Gl.TextureEffects.ImageCompose", CABLES.OP_PORT_TYPE_FUNCTION);
op.toWorkPortsNeedToBeLinked(render);

flipX.onChange = rebuildFlip;
flipY.onChange = rebuildFlip;
render.onTriggered = doRender;
inTexture.onLinkChanged = updateUi;
inScale.onChange = updateScale;

const shader = new CGL.Shader(cgl, "fullscreenrectangle", this);
shader.setModules(["MODULE_VERTEX_POSITION", "MODULE_COLOR", "MODULE_BEGIN_FRAG"]);

shader.setSource(attachments.shader_vert, attachments.shader_frag);
shader.fullscreenRectUniform = new CGL.Uniform(shader, "t", "tex", 0);
shader.aspectUni = new CGL.Uniform(shader, "f", "aspectTex", 0);

let useShader = false;
let updateShaderLater = true;
let fitImageAspect = false;

updateUi();
updateScale();

inTexture.onChange = function ()
{
    updateShaderLater = true;
};

function updateUi()
{
    if (!CABLES.UI) return;
    flipY.setUiAttribs({ "greyout": !inTexture.isLinked() });
    flipX.setUiAttribs({ "greyout": !inTexture.isLinked() });
    inScale.setUiAttribs({ "greyout": !inTexture.isLinked() });
}

function updateShader()
{
    let tex = inTexture.get();
    if (tex) useShader = true;
    else useShader = false;
}

op.preRender = function ()
{
    updateShader();
    shader.bind();
    if (mesh)mesh.render(shader);
    doRender();
};

function updateScale()
{
    fitImageAspect = inScale.get() == "Fit";
}

function doRender()
{
    if (cgl.viewPort[2] != w || cgl.viewPort[3] != h || !mesh) rebuild();

    if (updateShaderLater) updateShader();

    cgl.pushPMatrix();
    mat4.identity(cgl.pMatrix);
    mat4.ortho(cgl.pMatrix, 0, w, h, 0, -10.0, 1000);

    cgl.pushModelMatrix();
    mat4.identity(cgl.mMatrix);

    cgl.pushViewMatrix();
    mat4.identity(cgl.vMatrix);

    if (fitImageAspect && inTexture.get())
    {
        const rat = inTexture.get().width / inTexture.get().height;

        let _h = h;
        let _w = h * rat;

        if (_w > w)
        {
            _h = w * 1 / rat;
            _w = w;
        }

        cgl.pushViewPort((w - _w) / 2, (h - _h) / 2, _w, _h);
    }

    if (useShader)
    {
        if (inTexture.get()) cgl.setTexture(0, inTexture.get().tex);
        mesh.render(shader);
    }
    else
    {
        mesh.render(cgl.getShader());
    }

    cgl.gl.clear(cgl.gl.DEPTH_BUFFER_BIT);

    cgl.popPMatrix();
    cgl.popModelMatrix();
    cgl.popViewMatrix();

    if (fitImageAspect && inTexture.get()) cgl.popViewPort();

    trigger.trigger();
}

function rebuildFlip()
{
    mesh = null;
}

function rebuild()
{
    if (cgl.viewPort[2] == w && cgl.viewPort[3] == h && mesh) return;

    let xx = 0, xy = 0;

    w = cgl.viewPort[2];
    h = cgl.viewPort[3];

    geom.vertices = new Float32Array([
        xx + w, xy + h, 0.0,
        xx, xy + h, 0.0,
        xx + w, xy, 0.0,
        xx, xy, 0.0
    ]);

    let tc = null;

    if (flipY.get())
        tc = new Float32Array([
            1.0, 0.0,
            0.0, 0.0,
            1.0, 1.0,
            0.0, 1.0
        ]);
    else
        tc = new Float32Array([
            1.0, 1.0,
            0.0, 1.0,
            1.0, 0.0,
            0.0, 0.0
        ]);

    if (flipX.get())
    {
        tc[0] = 0.0;
        tc[2] = 1.0;
        tc[4] = 0.0;
        tc[6] = 1.0;
    }

    geom.setTexCoords(tc);

    geom.verticesIndices = new Uint16Array([
        2, 1, 0,
        3, 1, 2
    ]);

    geom.vertexNormals = new Float32Array([
        0, 0, 1,
        0, 0, 1,
        0, 0, 1,
        0, 0, 1,
    ]);
    geom.tangents = new Float32Array([
        -1, 0, 0,
        -1, 0, 0,
        -1, 0, 0,
        -1, 0, 0]);
    geom.biTangents == new Float32Array([
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
        0, -1, 0]);

    if (!mesh) mesh = new CGL.Mesh(cgl, geom);
    else mesh.setGeom(geom);
}

}
};

CABLES.OPS["fb70721a-eac2-4ff5-a5a2-5c59e2393972"]={f:Ops.Gl.Meshes.FullscreenRectangle_v2,objName:"Ops.Gl.Meshes.FullscreenRectangle_v2"};




// **************************************************************
// 
// Ops.Gl.ImageCompose.DrawImage_v3
// 
// **************************************************************

Ops.Gl.ImageCompose.DrawImage_v3= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={"drawimage_frag":"#ifdef HAS_TEXTURES\r\n    IN vec2 texCoord;\r\n    UNI sampler2D tex;\r\n    UNI sampler2D image;\r\n#endif\r\n\r\n#ifdef TEX_TRANSFORM\r\n    IN mat3 transform;\r\n#endif\r\n// UNI float rotate;\r\n\r\n{{CGL.BLENDMODES}}\r\n\r\n#ifdef HAS_TEXTUREALPHA\r\n   UNI sampler2D imageAlpha;\r\n#endif\r\n\r\nUNI float amount;\r\n\r\n#ifdef ASPECT_RATIO\r\n    UNI float aspectTex;\r\n    UNI float aspectPos;\r\n#endif\r\n\r\nvoid main()\r\n{\r\n    vec4 blendRGBA=vec4(0.0,0.0,0.0,1.0);\r\n\r\n    #ifdef HAS_TEXTURES\r\n        vec2 tc=texCoord;\r\n\r\n        #ifdef TEX_FLIP_X\r\n            tc.x=1.0-tc.x;\r\n        #endif\r\n        #ifdef TEX_FLIP_Y\r\n            tc.y=1.0-tc.y;\r\n        #endif\r\n\r\n        #ifdef ASPECT_RATIO\r\n            #ifdef ASPECT_AXIS_X\r\n                tc.y=(1.0-aspectPos)-(((1.0-aspectPos)-tc.y)*aspectTex);\r\n            #endif\r\n            #ifdef ASPECT_AXIS_Y\r\n                tc.x=(1.0-aspectPos)-(((1.0-aspectPos)-tc.x)/aspectTex);\r\n            #endif\r\n        #endif\r\n\r\n        #ifdef TEX_TRANSFORM\r\n            vec3 coordinates=vec3(tc.x, tc.y,1.0);\r\n            tc=(transform * coordinates ).xy;\r\n        #endif\r\n\r\n        blendRGBA=texture(image,tc);\r\n\r\n        vec3 blend=blendRGBA.rgb;\r\n        vec4 baseRGBA=texture(tex,texCoord);\r\n        vec3 base=baseRGBA.rgb;\r\n\r\n\r\n        #ifdef PREMUL\r\n            blend.rgb = (blend.rgb) + (base.rgb * (1.0 - blendRGBA.a));\r\n        #endif\r\n\r\n        vec3 colNew=_blend(base,blend);\r\n\r\n\r\n\r\n\r\n        #ifdef REMOVE_ALPHA_SRC\r\n            blendRGBA.a=1.0;\r\n        #endif\r\n\r\n        #ifdef HAS_TEXTUREALPHA\r\n            vec4 colImgAlpha=texture(imageAlpha,tc);\r\n            float colImgAlphaAlpha=colImgAlpha.a;\r\n\r\n            #ifdef ALPHA_FROM_LUMINANCE\r\n                vec3 gray = vec3(dot(vec3(0.2126,0.7152,0.0722), colImgAlpha.rgb ));\r\n                colImgAlphaAlpha=(gray.r+gray.g+gray.b)/3.0;\r\n            #endif\r\n\r\n            #ifdef ALPHA_FROM_INV_UMINANCE\r\n                vec3 gray = vec3(dot(vec3(0.2126,0.7152,0.0722), colImgAlpha.rgb ));\r\n                colImgAlphaAlpha=1.0-(gray.r+gray.g+gray.b)/3.0;\r\n            #endif\r\n\r\n            #ifdef INVERT_ALPHA\r\n                colImgAlphaAlpha=clamp(colImgAlphaAlpha,0.0,1.0);\r\n                colImgAlphaAlpha=1.0-colImgAlphaAlpha;\r\n            #endif\r\n\r\n            blendRGBA.a=colImgAlphaAlpha*blendRGBA.a;\r\n        #endif\r\n    #endif\r\n\r\n    float am=amount;\r\n\r\n    #ifdef CLIP_REPEAT\r\n        if(tc.y>1.0 || tc.y<0.0 || tc.x>1.0 || tc.x<0.0)\r\n        {\r\n            // colNew.rgb=vec3(0.0);\r\n            am=0.0;\r\n        }\r\n    #endif\r\n\r\n    #ifdef ASPECT_RATIO\r\n        #ifdef ASPECT_CROP\r\n            if(tc.y>1.0 || tc.y<0.0 || tc.x>1.0 || tc.x<0.0)\r\n            {\r\n                colNew.rgb=base.rgb;\r\n                am=0.0;\r\n            }\r\n\r\n        #endif\r\n    #endif\r\n\r\n\r\n\r\n    #ifndef PREMUL\r\n        blendRGBA.rgb=mix(colNew,base,1.0-(am*blendRGBA.a));\r\n        blendRGBA.a=clamp(baseRGBA.a+(blendRGBA.a*am),0.,1.);\r\n    #endif\r\n\r\n    #ifdef PREMUL\r\n        // premultiply\r\n        // blendRGBA.rgb = (blendRGBA.rgb) + (baseRGBA.rgb * (1.0 - blendRGBA.a));\r\n        blendRGBA=vec4(\r\n            mix(colNew.rgb,base,1.0-(am*blendRGBA.a)),\r\n            blendRGBA.a*am+baseRGBA.a\r\n            );\r\n    #endif\r\n\r\n    #ifdef ALPHA_MASK\r\n    blendRGBA.a=baseRGBA.a;\r\n    #endif\r\n\r\n    outColor=blendRGBA;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n","drawimage_vert":"IN vec3 vPosition;\r\nIN vec2 attrTexCoord;\r\nIN vec3 attrVertNormal;\r\n\r\nUNI mat4 projMatrix;\r\nUNI mat4 mvMatrix;\r\n\r\nOUT vec2 texCoord;\r\n// OUT vec3 norm;\r\n\r\n#ifdef TEX_TRANSFORM\r\n    UNI float posX;\r\n    UNI float posY;\r\n    UNI float scaleX;\r\n    UNI float scaleY;\r\n    UNI float rotate;\r\n    OUT mat3 transform;\r\n#endif\r\n\r\nvoid main()\r\n{\r\n   texCoord=attrTexCoord;\r\n//   norm=attrVertNormal;\r\n\r\n   #ifdef TEX_TRANSFORM\r\n        vec3 coordinates=vec3(attrTexCoord.x, attrTexCoord.y,1.0);\r\n        float angle = radians( rotate );\r\n        vec2 scale= vec2(scaleX,scaleY);\r\n        vec2 translate= vec2(posX,posY);\r\n\r\n        transform = mat3(   scale.x * cos( angle ), scale.x * sin( angle ), 0.0,\r\n            - scale.y * sin( angle ), scale.y * cos( angle ), 0.0,\r\n            - 0.5 * scale.x * cos( angle ) + 0.5 * scale.y * sin( angle ) - 0.5 * translate.x*2.0 + 0.5,  - 0.5 * scale.x * sin( angle ) - 0.5 * scale.y * cos( angle ) - 0.5 * translate.y*2.0 + 0.5, 1.0);\r\n   #endif\r\n\r\n   gl_Position = projMatrix * mvMatrix * vec4(vPosition,  1.0);\r\n}\r\n",};
const
    render = op.inTrigger("render"),
    blendMode = CGL.TextureEffect.AddBlendSelect(op, "blendMode"),
    amount = op.inValueSlider("amount", 1),

    image = op.inTexture("Image"),
    inAlphaPremul = op.inValueBool("Premultiplied", false),
    inAlphaMask = op.inValueBool("Alpha Mask", false),
    removeAlphaSrc = op.inValueBool("removeAlphaSrc", false),

    imageAlpha = op.inTexture("Mask"),
    alphaSrc = op.inValueSelect("Mask Src", ["alpha channel", "luminance", "luminance inv"], "luminance"),
    invAlphaChannel = op.inBool("Invert alpha channel"),

    inAspect = op.inValueBool("Aspect Ratio", false),
    inAspectAxis = op.inValueSelect("Stretch Axis", ["X", "Y"], "X"),
    inAspectPos = op.inValueSlider("Position", 0.0),
    inAspectCrop = op.inValueBool("Crop", false),

    trigger = op.outTrigger("trigger");

blendMode.set("normal");
const cgl = op.patch.cgl;
const shader = new CGL.Shader(cgl, "drawimage");

imageAlpha.onLinkChanged = updateAlphaPorts;

op.setPortGroup("Aspect Ratio", [inAspect, inAspectPos, inAspectCrop, inAspectAxis]);
op.setPortGroup("Mask", [imageAlpha, alphaSrc, invAlphaChannel]);

function updateAlphaPorts()
{
    if (imageAlpha.isLinked())
    {
        removeAlphaSrc.setUiAttribs({ "greyout": true });
        alphaSrc.setUiAttribs({ "greyout": false });
        invAlphaChannel.setUiAttribs({ "greyout": false });
    }
    else
    {
        removeAlphaSrc.setUiAttribs({ "greyout": false });
        alphaSrc.setUiAttribs({ "greyout": true });
        invAlphaChannel.setUiAttribs({ "greyout": true });
    }
}

op.toWorkPortsNeedToBeLinked(image);

shader.setSource(attachments.drawimage_vert, attachments.drawimage_frag);

const
    textureUniform = new CGL.Uniform(shader, "t", "tex", 0),
    textureImaghe = new CGL.Uniform(shader, "t", "image", 1),
    textureAlpha = new CGL.Uniform(shader, "t", "imageAlpha", 2),
    uniTexAspect = new CGL.Uniform(shader, "f", "aspectTex", 1),
    uniAspectPos = new CGL.Uniform(shader, "f", "aspectPos", inAspectPos);

inAspect.onChange =
    inAspectCrop.onChange =
    inAspectAxis.onChange = updateAspectRatio;

function updateAspectRatio()
{
    shader.removeDefine("ASPECT_AXIS_X");
    shader.removeDefine("ASPECT_AXIS_Y");
    shader.removeDefine("ASPECT_CROP");

    inAspectPos.setUiAttribs({ "greyout": !inAspect.get() });
    inAspectCrop.setUiAttribs({ "greyout": !inAspect.get() });
    inAspectAxis.setUiAttribs({ "greyout": !inAspect.get() });

    if (inAspect.get())
    {
        shader.define("ASPECT_RATIO");

        if (inAspectCrop.get()) shader.define("ASPECT_CROP");

        if (inAspectAxis.get() == "X") shader.define("ASPECT_AXIS_X");
        if (inAspectAxis.get() == "Y") shader.define("ASPECT_AXIS_Y");
    }
    else
    {
        shader.removeDefine("ASPECT_RATIO");
        if (inAspectCrop.get()) shader.define("ASPECT_CROP");

        if (inAspectAxis.get() == "X") shader.define("ASPECT_AXIS_X");
        if (inAspectAxis.get() == "Y") shader.define("ASPECT_AXIS_Y");
    }
}

//
// texture flip
//
const flipX = op.inValueBool("flip x");
const flipY = op.inValueBool("flip y");

//
// texture transform
//

let doTransform = op.inValueBool("Transform");

let scaleX = op.inValueSlider("Scale X", 1);
let scaleY = op.inValueSlider("Scale Y", 1);

let posX = op.inValue("Position X", 0);
let posY = op.inValue("Position Y", 0);

let rotate = op.inValue("Rotation", 0);

const inClipRepeat = op.inValueBool("Clip Repeat", false);

const uniScaleX = new CGL.Uniform(shader, "f", "scaleX", scaleX);
const uniScaleY = new CGL.Uniform(shader, "f", "scaleY", scaleY);
const uniPosX = new CGL.Uniform(shader, "f", "posX", posX);
const uniPosY = new CGL.Uniform(shader, "f", "posY", posY);
const uniRotate = new CGL.Uniform(shader, "f", "rotate", rotate);

doTransform.onChange = updateTransformPorts;

function updateTransformPorts()
{
    shader.toggleDefine("TEX_TRANSFORM", doTransform.get());

    scaleX.setUiAttribs({ "greyout": !doTransform.get() });
    scaleY.setUiAttribs({ "greyout": !doTransform.get() });
    posX.setUiAttribs({ "greyout": !doTransform.get() });
    posY.setUiAttribs({ "greyout": !doTransform.get() });
    rotate.setUiAttribs({ "greyout": !doTransform.get() });
}

CGL.TextureEffect.setupBlending(op, shader, blendMode, amount);

const amountUniform = new CGL.Uniform(shader, "f", "amount", amount);

render.onTriggered = doRender;

inClipRepeat.onChange =
    imageAlpha.onChange =
    inAlphaPremul.onChange =
    inAlphaMask.onChange =
    invAlphaChannel.onChange =
    flipY.onChange =
    flipX.onChange =
    removeAlphaSrc.onChange =
    alphaSrc.onChange = updateDefines;

updateTransformPorts();
updateAlphaPorts();
updateAspectRatio();
updateDefines();

function updateDefines()
{
    shader.toggleDefine("REMOVE_ALPHA_SRC", removeAlphaSrc.get());
    shader.toggleDefine("ALPHA_MASK", inAlphaMask.get());

    shader.toggleDefine("CLIP_REPEAT", inClipRepeat.get());

    shader.toggleDefine("HAS_TEXTUREALPHA", imageAlpha.get() && imageAlpha.get().tex);

    shader.toggleDefine("TEX_FLIP_X", flipX.get());
    shader.toggleDefine("TEX_FLIP_Y", flipY.get());

    shader.toggleDefine("INVERT_ALPHA", invAlphaChannel.get());

    shader.toggleDefine("ALPHA_FROM_LUMINANCE", alphaSrc.get() == "luminance");
    shader.toggleDefine("ALPHA_FROM_INV_UMINANCE", alphaSrc.get() == "luminance_inv");
    shader.toggleDefine("PREMUL", inAlphaPremul.get());
}

function doRender()
{
    if (!CGL.TextureEffect.checkOpInEffect(op)) return;

    const tex = image.get();
    if (tex && tex.tex && amount.get() > 0.0)
    {
        cgl.pushShader(shader);
        cgl.currentTextureEffect.bind();

        const imgTex = cgl.currentTextureEffect.getCurrentSourceTexture();
        cgl.setTexture(0, imgTex.tex);

        // if (imgTex && tex)
        // {
        //     if (tex.textureType != imgTex.textureType && (tex.textureType == CGL.Texture.TYPE_FLOAT))
        //         op.setUiError("textypediff", "Drawing 32bit texture into an 8 bit can result in data/precision loss", 1);
        //     else
        //         op.setUiError("textypediff", null);
        // }

        const asp = 1 / (cgl.currentTextureEffect.getWidth() / cgl.currentTextureEffect.getHeight()) * (tex.width / tex.height);
        // uniTexAspect.setValue(1 / (tex.height / tex.width * imgTex.width / imgTex.height));

        uniTexAspect.setValue(asp);

        cgl.setTexture(1, tex.tex);
        // cgl.gl.bindTexture(cgl.gl.TEXTURE_2D, image.get().tex );

        if (imageAlpha.get() && imageAlpha.get().tex)
        {
            cgl.setTexture(2, imageAlpha.get().tex);
            // cgl.gl.bindTexture(cgl.gl.TEXTURE_2D, imageAlpha.get().tex );
        }

        // cgl.pushBlend(false);

        cgl.pushBlendMode(CGL.BLEND_NONE, true);

        cgl.currentTextureEffect.finish();
        cgl.popBlendMode();

        // cgl.popBlend();

        cgl.popShader();
    }

    trigger.trigger();
}

}
};

CABLES.OPS["8f6b2f15-fcb0-4597-90c0-e5173f2969fe"]={f:Ops.Gl.ImageCompose.DrawImage_v3,objName:"Ops.Gl.ImageCompose.DrawImage_v3"};




// **************************************************************
// 
// Ops.Gl.ImageCompose.ImageCompose_v4
// 
// **************************************************************

Ops.Gl.ImageCompose.ImageCompose_v4= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={"imgcomp_frag":"IN vec2 texCoord;\r\nUNI vec4 bgColor;\r\nUNI sampler2D tex;\r\n#ifdef USE_UVTEX\r\nUNI sampler2D UVTex;\r\n#endif\r\n\r\nvoid main()\r\n{\r\n\r\n    #ifndef USE_TEX\r\n        outColor=bgColor;\r\n    #endif\r\n    #ifdef USE_TEX\r\n        #ifndef USE_UVTEX\r\n        outColor=texture(tex,texCoord);\r\n        #else\r\n        outColor=texture(tex,texture(UVTex,texCoord).xy);\r\n        #endif\r\n    #endif\r\n\r\n\r\n\r\n}\r\n",};
const
    cgl = op.patch.cgl,
    render = op.inTrigger("Render"),
    inTex = op.inTexture("Base Texture"),
    inUVTex = op.inTexture("UV Texture"),
    inSize = op.inSwitch("Size", ["Auto", "Canvas", "Manual"], "Auto"),
    width = op.inValueInt("Width", 640),
    height = op.inValueInt("Height", 480),
    inFilter = op.inSwitch("Filter", ["nearest", "linear", "mipmap"], "linear"),
    inWrap = op.inValueSelect("Wrap", ["clamp to edge", "repeat", "mirrored repeat"], "repeat"),
    aniso = op.inSwitch("Anisotropic", ["0", "1", "2", "4", "8", "16"], "0"),

    inPixelFormat = op.inDropDown("Pixel Format", CGL.Texture.PIXELFORMATS, CGL.Texture.PFORMATSTR_RGBA8UB),

    inClear = op.inBool("Clear", true),
    r = op.inValueSlider("R", 0),
    g = op.inValueSlider("G", 0),
    b = op.inValueSlider("B", 0),
    a = op.inValueSlider("A", 0),

    trigger = op.outTrigger("Next"),
    texOut = op.outTexture("texture_out", CGL.Texture.getEmptyTexture(cgl)),
    outRatio = op.outNumber("Aspect Ratio"),
    outWidth = op.outNumber("Texture Width"),
    outHeight = op.outNumber("Texture Height");

op.setPortGroup("Texture Size", [inSize, width, height]);
op.setPortGroup("Texture Parameters", [inWrap, aniso, inFilter, inPixelFormat]);

r.setUiAttribs({ "colorPick": true });
op.setPortGroup("Color", [r, g, b, a, inClear]);

op.toWorkPortsNeedToBeLinked(render);

const prevViewPort = [0, 0, 0, 0];
let effect = null;
let tex = null;
let reInitEffect = true;
let isFloatTex = false;
let copyShader = null;
let copyShaderTexUni = null;
let copyShaderUVTexUni = null;
let copyShaderRGBAUni = null;

inWrap.onChange =
inFilter.onChange =
aniso.onChange =
inPixelFormat.onChange = reInitLater;

inTex.onLinkChanged =
inClear.onChange =
    inSize.onChange =
    inUVTex.onChange = updateUi;

render.onTriggered =
    op.preRender = doRender;

updateUi();

function initEffect()
{
    if (effect)effect.delete();
    if (tex)tex.delete();
    tex = null;
    effect = new CGL.TextureEffect(cgl, { "isFloatingPointTexture": CGL.Texture.isPixelFormatFloat(inPixelFormat.get()), "name": op.name });

    const cgl_aniso = Math.min(cgl.maxAnisotropic, parseFloat(aniso.get()));

    tex = new CGL.Texture(cgl,
        {
            "anisotropic": cgl_aniso,
            "name": "image_compose_v2_" + op.id,
            "pixelFormat": inPixelFormat.get(),
            "filter": getFilter(),
            "wrap": getWrap(),
            "width": getWidth(),
            "height": getHeight()
        });

    effect.setSourceTexture(tex);

    outWidth.set(getWidth());
    outHeight.set(getHeight());
    outRatio.set(getWidth() / getHeight());

    texOut.setRef(CGL.Texture.getEmptyTexture(cgl));

    reInitEffect = false;
    updateUi();
}

function getFilter()
{
    if (inFilter.get() == "nearest") return CGL.Texture.FILTER_NEAREST;
    else if (inFilter.get() == "linear") return CGL.Texture.FILTER_LINEAR;
    else if (inFilter.get() == "mipmap") return CGL.Texture.FILTER_MIPMAP;
}

function getWrap()
{
    if (inWrap.get() == "repeat") return CGL.Texture.WRAP_REPEAT;
    else if (inWrap.get() == "mirrored repeat") return CGL.Texture.WRAP_MIRRORED_REPEAT;
    else if (inWrap.get() == "clamp to edge") return CGL.Texture.WRAP_CLAMP_TO_EDGE;
}

function getWidth()
{
    let x = 0;
    if (inTex.get() && inSize.get() == "Auto") x = inTex.get().width;
    else if (inSize.get() == "Auto" || inSize.get() == "Canvas") x = cgl.canvasWidth;
    else if (inSize.get() == "ViewPort") x = cgl.getViewPort()[2];
    else x = Math.ceil(width.get());
    return op.patch.cgl.checkTextureSize(x);
}

function getHeight()
{
    let x = 0;

    if (inTex.get() && inSize.get() == "Auto") x = inTex.get().height;
    else if (inSize.get() == "Auto" || inSize.get() == "Canvas") x = cgl.canvasHeight;
    else if (inSize.get() == "ViewPort") x = cgl.getViewPort()[3];
    else x = Math.ceil(height.get());
    return op.patch.cgl.checkTextureSize(x);
}

function reInitLater()
{
    reInitEffect = true;
}

function updateResolution()
{
    if ((
        getWidth() != tex.width ||
        getHeight() != tex.height ||
        // tex.anisotropic != parseFloat(aniso.get()) ||
        // tex.isFloatingPoint() != CGL.Texture.isPixelFormatFloat(inPixelFormat.get()) ||
        tex.pixelFormat != inPixelFormat.get() ||
        tex.filter != getFilter() ||
        tex.wrap != getWrap()
    ) && (getWidth() !== 0 && getHeight() !== 0))
    {
        initEffect();
        effect.setSourceTexture(tex);
        // texOut.set(CGL.Texture.getEmptyTexture(cgl));
        texOut.setRef(tex);
        updateResolutionInfo();
        checkTypes();
    }
}

function updateResolutionInfo()
{
    let info = null;

    if (inSize.get() == "Manual")
    {
        info = null;
    }
    else if (inSize.get() == "Auto")
    {
        if (inTex.get()) info = "Input Texture";
        else info = "Canvas Size";

        info += ": " + getWidth() + " x " + getHeight();
    }

    let changed = false;
    changed = inSize.uiAttribs.info != info;
    inSize.setUiAttribs({ "info": info });
    if (changed)op.refreshParams();
}

function updateDefines()
{
    if (copyShader)copyShader.toggleDefine("USE_TEX", inTex.isLinked() || !inClear.get());
    if (copyShader)copyShader.toggleDefine("USE_UVTEX", inUVTex.isLinked());
}

function updateUi()
{
    aniso.setUiAttribs({ "greyout": getFilter() != CGL.Texture.FILTER_MIPMAP });

    r.setUiAttribs({ "greyout": inTex.isLinked() });
    b.setUiAttribs({ "greyout": inTex.isLinked() });
    g.setUiAttribs({ "greyout": inTex.isLinked() });
    a.setUiAttribs({ "greyout": inTex.isLinked() });

    inClear.setUiAttribs({ "greyout": inTex.isLinked() });
    width.setUiAttribs({ "greyout": inSize.get() != "Manual" });
    height.setUiAttribs({ "greyout": inSize.get() != "Manual" });

    // width.setUiAttribs({ "hideParam": inSize.get() != "Manual" });
    // height.setUiAttribs({ "hideParam": inSize.get() != "Manual" });

    if (tex)
        if (CGL.Texture.isPixelFormatFloat(inPixelFormat.get()) && getFilter() == CGL.Texture.FILTER_MIPMAP) op.setUiError("fpmipmap", "Don't use mipmap and 32bit at the same time, many systems do not support this.");
        else op.setUiError("fpmipmap", null);

    updateResolutionInfo();
    updateDefines();
    checkTypes();
}

function checkTypes()
{
    if (tex)
        if (inTex.isLinked() && inTex.get() && (tex.isFloatingPoint() < inTex.get().isFloatingPoint()))
            op.setUiError("textypediff", "Warning: Mixing floating point and non floating point texture can result in data/precision loss", 1);
        else
            op.setUiError("textypediff", null);
}

op.preRender = () =>
{
    doRender();
};

function copyTexture()
{
    if (!copyShader)
    {
        copyShader = new CGL.Shader(cgl, "copytextureshader");
        copyShader.setSource(copyShader.getDefaultVertexShader(), attachments.imgcomp_frag);
        copyShaderTexUni = new CGL.Uniform(copyShader, "t", "tex", 0);
        copyShaderUVTexUni = new CGL.Uniform(copyShader, "t", "UVTex", 1);
        copyShaderRGBAUni = new CGL.Uniform(copyShader, "4f", "bgColor", r, g, b, a);
        updateDefines();
    }

    cgl.pushShader(copyShader);
    cgl.currentTextureEffect.bind();

    if (inTex.get()) cgl.setTexture(0, inTex.get().tex);
    else if (!inClear.get() && texOut.get()) cgl.setTexture(0, texOut.get().tex);
    if (inUVTex.get()) cgl.setTexture(1, inUVTex.get().tex);

    cgl.currentTextureEffect.finish();
    cgl.popShader();
}

function doRender()
{
    if (!effect || reInitEffect) initEffect();

    cgl.pushBlend(false);

    updateResolution();

    const oldEffect = cgl.currentTextureEffect;
    cgl.currentTextureEffect = effect;
    cgl.currentTextureEffect.imgCompVer = 3;
    cgl.currentTextureEffect.width = width.get();
    cgl.currentTextureEffect.height = height.get();
    effect.setSourceTexture(tex);

    effect.startEffect(inTex.get() || CGL.Texture.getEmptyTexture(cgl, isFloatTex), true);
    copyTexture();

    trigger.trigger();

    cgl.pushViewPort(0, 0, width.get(), height.get());

    effect.endEffect();
    texOut.setRef(effect.getCurrentSourceTexture());

    cgl.popViewPort();

    cgl.popBlend();
    cgl.currentTextureEffect = oldEffect;
}

}
};

CABLES.OPS["17212e2b-d692-464c-8f8d-2d511dd3410a"]={f:Ops.Gl.ImageCompose.ImageCompose_v4,objName:"Ops.Gl.ImageCompose.ImageCompose_v4"};




// **************************************************************
// 
// Ops.Gl.ImageCompose.FXAA
// 
// **************************************************************

Ops.Gl.ImageCompose.FXAA= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={"fxaa_frag":"IN vec2 texCoord;\r\nUNI sampler2D tex;\r\nUNI float FXAA_SPAN_MAX;\r\nUNI float FXAA_REDUCE_MUL;\r\nUNI float FXAA_REDUCE_MIN;\r\nUNI float width;\r\nUNI float height;\r\n\r\nvec4 getColorFXAA(vec2 coord)\r\n{\r\n    vec2 invtexsize=vec2(1.0/width,1.0/height);\r\n\r\n    float step=1.0;\r\n\r\n    vec3 rgbNW = texture(tex, coord.xy + (vec2(-step, -step)*invtexsize )).xyz;\r\n    vec3 rgbNE = texture(tex, coord.xy + (vec2(+step, -step)*invtexsize )).xyz;\r\n    vec3 rgbSW = texture(tex, coord.xy + (vec2(-step, +step)*invtexsize )).xyz;\r\n    vec3 rgbSE = texture(tex, coord.xy + (vec2(+step, +step)*invtexsize )).xyz;\r\n    vec3 rgbM  = texture(tex, coord.xy).xyz;\r\n\r\n    vec3 luma = vec3(0.299, 0.587, 0.114);\r\n    float lumaNW = dot(rgbNW, luma);\r\n    float lumaNE = dot(rgbNE, luma);\r\n    float lumaSW = dot(rgbSW, luma);\r\n    float lumaSE = dot(rgbSE, luma);\r\n    float lumaM  = dot( rgbM, luma);\r\n\r\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\r\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\r\n\r\n    vec2 dir;\r\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\r\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\r\n\r\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) * (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\r\n\r\n    float rcpDirMin = 1.0/(min(abs(dir.x), abs(dir.y)) + dirReduce);\r\n\r\n    dir = min(vec2(FXAA_SPAN_MAX,  FXAA_SPAN_MAX),\r\n          max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX), dir * rcpDirMin))*invtexsize ;\r\n\r\n    vec3 rgbA = (1.0/2.0) * (\r\n                texture(tex, coord.xy + dir * (1.0/3.0 - 0.5)).xyz +\r\n                texture(tex, coord.xy + dir * (2.0/3.0 - 0.5)).xyz);\r\n    vec3 rgbB = rgbA * (1.0/2.0) + (1.0/4.0) * (\r\n                texture(tex, coord.xy + dir * (0.0/3.0 - 0.5)).xyz +\r\n                texture(tex, coord.xy + dir * (3.0/3.0 - 0.5)).xyz);\r\n    float lumaB = dot(rgbB, luma);\r\n\r\n    vec4 color=texture(tex,coord).rgba;\r\n\r\n    if((lumaB < lumaMin) || (lumaB > lumaMax)){\r\n      color.xyz=rgbA;\r\n    } else {\r\n      color.xyz=rgbB;\r\n    }\r\n    return color;\r\n}\r\n\r\nvoid main()\r\n{\r\n   vec4 col=vec4(1.0,0.0,0.0,1.0);\r\n   outColor= getColorFXAA(texCoord);\r\n}",};
// shader from: https://github.com/mattdesl/glsl-fxaa

let render = op.inTrigger("render");
let trigger = op.outTrigger("trigger");
let fxaa_span = op.inValueSelect("span", [0, 2, 4, 8, 16, 32, 64]);
let fxaa_reduceMin = op.inValueFloat("reduceMin");
let fxaa_reduceMul = op.inValueFloat("reduceMul");
let useVPSize = op.inValueBool("use viewport size", true);
let texWidth = op.inValueInt("width");
let texHeight = op.inValueInt("height");

let cgl = op.patch.cgl;
let shader = new CGL.Shader(cgl, op.name, op);

shader.setSource(shader.getDefaultVertexShader(), attachments.fxaa_frag);
let textureUniform = new CGL.Uniform(shader, "t", "tex", 0);

render.onTriggered = function ()
{
    if (!CGL.TextureEffect.checkOpInEffect(op)) return;
    cgl.pushShader(shader);

    if (cgl.getViewPort()[2] != texWidth.get() || cgl.getViewPort()[3] != texHeight.get())
    {
        changeRes();
    }

    cgl.currentTextureEffect.bind();
    cgl.setTexture(0, cgl.currentTextureEffect.getCurrentSourceTexture().tex);

    cgl.currentTextureEffect.finish();

    cgl.popShader();

    trigger.trigger();
};

let uniformSpan = new CGL.Uniform(shader, "f", "FXAA_SPAN_MAX", 0);
let uniformMul = new CGL.Uniform(shader, "f", "FXAA_REDUCE_MUL", 0);
let uniformMin = new CGL.Uniform(shader, "f", "FXAA_REDUCE_MIN", 0);

fxaa_span.onChange = function ()
{
    uniformSpan.setValue(parseInt(fxaa_span.get(), 10));
};

let uWidth = new CGL.Uniform(shader, "f", "width", 0);
let uHeight = new CGL.Uniform(shader, "f", "height", 0);

function changeRes()
{
    if (useVPSize.get())
    {
        let w = cgl.getViewPort()[2];
        let h = cgl.getViewPort()[3];
        uWidth.setValue(w);
        uHeight.setValue(h);
        // texWidth.set(w);
        // texHeight.set(h);
    }
    else
    {
        uWidth.setValue(texWidth.get());
        uHeight.setValue(texHeight.get());
    }
}

texWidth.onChange = changeRes;
texHeight.onChange = changeRes;
useVPSize.onChange = changeRes;
op.onResize = changeRes;

fxaa_span.set(8);
// texWidth.set(1920);
// texHeight.set(1080);

fxaa_reduceMul.onChange = function ()
{
    uniformMul.setValue(1.0 / fxaa_reduceMul.get());
};

fxaa_reduceMin.onChange = function ()
{
    uniformMin.setValue(1.0 / fxaa_reduceMin.get());
};

fxaa_reduceMul.set(8);
fxaa_reduceMin.set(128);

}
};

CABLES.OPS["3e679c17-f050-4bc8-bfe5-5b9190e7ce40"]={f:Ops.Gl.ImageCompose.FXAA,objName:"Ops.Gl.ImageCompose.FXAA"};



window.addEventListener('load', function(event) {
CABLES.jsLoaded=new Event('CABLES.jsLoaded');
document.dispatchEvent(CABLES.jsLoaded);
});
