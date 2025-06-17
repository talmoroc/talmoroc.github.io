"use strict";

var CABLES=CABLES||{};
CABLES.OPS=CABLES.OPS||{};

var Ops=Ops || {};
Ops.Gl=Ops.Gl || {};
Ops.Ui=Ops.Ui || {};
Ops.Html=Ops.Html || {};
Ops.Math=Ops.Math || {};
Ops.Vars=Ops.Vars || {};
Ops.Array=Ops.Array || {};
Ops.Color=Ops.Color || {};
Ops.Debug=Ops.Debug || {};
Ops.Local=Ops.Local || {};
Ops.Patch=Ops.Patch || {};
Ops.Cables=Ops.Cables || {};
Ops.Number=Ops.Number || {};
Ops.String=Ops.String || {};
Ops.Devices=Ops.Devices || {};
Ops.Sidebar=Ops.Sidebar || {};
Ops.Trigger=Ops.Trigger || {};
Ops.Graphics=Ops.Graphics || {};
Ops.Gl.Meshes=Ops.Gl.Meshes || {};
Ops.Gl.Shader=Ops.Gl.Shader || {};
Ops.Gl.Textures=Ops.Gl.Textures || {};
Ops.Devices.Mouse=Ops.Devices.Mouse || {};
Ops.Html.Elements=Ops.Html.Elements || {};
Ops.Patch.PMZcxaN=Ops.Patch.PMZcxaN || {};
Ops.Graphics.Geometry=Ops.Graphics.Geometry || {};



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

let fsElement = null;
let winhasFocus = true;
let winVisible = true;

window.addEventListener("blur", () => { winhasFocus = false; });
window.addEventListener("focus", () => { winhasFocus = true; });
document.addEventListener("visibilitychange", () => { winVisible = !document.hidden; });

testMultiMainloop();

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
// Ops.Gl.Meshes.Cube_v2
// 
// **************************************************************

Ops.Gl.Meshes.Cube_v2= class extends CABLES.Op 
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

CABLES.OPS["37b92ba4-cea5-42ae-bf28-a513ca28549c"]={f:Ops.Gl.Meshes.Cube_v2,objName:"Ops.Gl.Meshes.Cube_v2"};




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
// Ops.Array.ArrayMath
// 
// **************************************************************

Ops.Array.ArrayMath= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const inArray_0 = op.inArray("array 0"),
    NumberIn = op.inValueFloat("Number for math", 0.0),
    mathSelect = op.inSwitch("Math function", ["+", "-", "*", "/", "%", "min", "max"], "+"),
    outArray = op.outArray("Array result"),
    outArrayLength = op.outNumber("Array length");

op.toWorkPortsNeedToBeLinked(inArray_0);

let mathFunc;
let showingError = false;
let mathArray = [];

inArray_0.onChange = NumberIn.onChange = update;
mathSelect.onChange = onFilterChange;

onFilterChange();

inArray_0.onLinkChanged = () =>
{
    if (inArray_0) inArray_0.copyLinkedUiAttrib("stride", outArray);
};

function onFilterChange()
{
    let mathSelectValue = mathSelect.get();

    if (mathSelectValue === "+") mathFunc = function (a, b) { return a + b; };
    else if (mathSelectValue === "-") mathFunc = function (a, b) { return a - b; };
    else if (mathSelectValue === "*") mathFunc = function (a, b) { return a * b; };
    else if (mathSelectValue === "/") mathFunc = function (a, b) { return a / b; };
    else if (mathSelectValue === "%") mathFunc = function (a, b) { return a % b; };
    else if (mathSelectValue === "min") mathFunc = function (a, b) { return Math.min(a, b); };
    else if (mathSelectValue === "max") mathFunc = function (a, b) { return Math.max(a, b); };
    update();
    op.setUiAttrib({ "extendTitle": mathSelectValue });
}

function update()
{
    let array0 = inArray_0.get();

    mathArray.length = 0;

    if (!array0)
    {
        outArrayLength.set(0);
        outArray.set(null);
        return;
    }

    let num = NumberIn.get();
    mathArray.length = array0.length;

    let i = 0;

    for (i = 0; i < array0.length; i++)
    {
        mathArray[i] = mathFunc(array0[i], num);
    }

    outArray.setRef(mathArray);
    outArrayLength.set(mathArray.length);
}

}
};

CABLES.OPS["c7617717-3114-452f-9625-e4fefd841e88"]={f:Ops.Array.ArrayMath,objName:"Ops.Array.ArrayMath"};




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
// Ops.Gl.Meshes.Rectangle_v4
// 
// **************************************************************

Ops.Gl.Meshes.Rectangle_v4= class extends CABLES.Op 
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

CABLES.OPS["cc8c3ede-7103-410b-849f-a645793cab39"]={f:Ops.Gl.Meshes.Rectangle_v4,objName:"Ops.Gl.Meshes.Rectangle_v4"};




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
// Ops.Color.HexToRGB_v2
// 
// **************************************************************

Ops.Color.HexToRGB_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    hex = op.inString("Hex", "#ff0000"),
    asBytes = op.inValueBool("Bytes"),
    outR = op.outNumber("R"),
    outG = op.outNumber("G"),
    outB = op.outNumber("B"),
    outArr = op.outArray("RGB Array");

function hexToR(h)
{
    return parseInt((cutHex(h)).substring(0, 2), 16) || 0;
}

function hexToG(h)
{
    return parseInt((cutHex(h)).substring(2, 4), 16) || 0;
}

function hexToB(h)
{
    return parseInt((cutHex(h)).substring(4, 6), 16) || 0;
}

function cutHex(h = "")
{
    return (h.charAt(0) == "#") ? h.substring(1, 7) : h;
}

hex.onChange = parse;
asBytes.onChange = parse;

function parse()
{
    let str = hex.get() || "";
    let r = hexToR(str);
    let g = hexToG(str);
    let b = hexToB(str);

    if (!asBytes.get())
    {
        r /= 255;
        g /= 255;
        b /= 255;
    }

    outR.set(r);
    outB.set(b);
    outG.set(g);
    outArr.set([r, g, b]);
}

}
};

CABLES.OPS["9877f198-8dac-48e5-9310-244ef1a8dec5"]={f:Ops.Color.HexToRGB_v2,objName:"Ops.Color.HexToRGB_v2"};




// **************************************************************
// 
// Ops.String.StringEditor
// 
// **************************************************************

Ops.String.StringEditor= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    v = op.inStringEditor("value", ""),
    syntax = op.inValueSelect("Syntax", ["text", "glsl", "css", "html", "xml", "json", "javascript", "inline-css", "sql"], "text"),
    result = op.outString("Result");

syntax.onChange = updateSyntax;

function updateSyntax()
{
    let s = syntax.get();
    if (s == "javascript")s = "js";
    v.setUiAttribs({ "editorSyntax": s });
}

v.onChange = function ()
{
    result.set(v.get());
};

}
};

CABLES.OPS["6468b7c1-f63e-4db4-b809-4b203d27ead3"]={f:Ops.String.StringEditor,objName:"Ops.String.StringEditor"};




// **************************************************************
// 
// Ops.Array.NumbersToArrayMultiPort
// 
// **************************************************************

Ops.Array.NumbersToArrayMultiPort= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inStrs = op.inMultiPort("Numbers", CABLES.OP_PORT_TYPE_NUMBER),
    outArr = op.outArray("Result"),
    outNum = op.outNumber("Num Values");

inStrs.onChange = () =>
{
    const stringPorts = inStrs.get();
    let arr = [];

    for (let i = 0; i < stringPorts.length; i++)
    {
        arr[i] = stringPorts[i].get() || 0;
    }
    outArr.set(arr);
    outNum.set(stringPorts.length);
};

}
};

CABLES.OPS["d63e564f-55bd-49fc-ae75-d20096f18b01"]={f:Ops.Array.NumbersToArrayMultiPort,objName:"Ops.Array.NumbersToArrayMultiPort"};




// **************************************************************
// 
// Ops.Array.Array3To4
// 
// **************************************************************

Ops.Array.Array3To4= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inArr = op.inArray("Array3x", 3),
    outArr = op.outArray("Array4x", 4),
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

    if (theArray.length % 3 != 0)
    {
        if (!showingError)
        {
            op.uiAttr({ "error": "Arrays length not divisible by 3 !" });
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
        op.uiAttr({ "error": null });
    }

    if ((theArray.length / 3) * 4 != arr.length)
    {
        arr.length = (theArray.length / 3) * 4;
    }

    for (let i = 0; i < theArray.length / 3; i++)
    {
        arr[i * 4 + 0] = theArray[i * 3 + 0];
        arr[i * 4 + 1] = theArray[i * 3 + 1];
        arr[i * 4 + 2] = theArray[i * 3 + 2];
        arr[i * 4 + 3] = 1;
    }

    outArr.setRef(arr);
    outTotalPoints.set(arr.length / 4);
    outArrayLength.set(arr.length);
};

}
};

CABLES.OPS["91fc24d6-ecba-4f35-8986-8d13087d2370"]={f:Ops.Array.Array3To4,objName:"Ops.Array.Array3To4"};




// **************************************************************
// 
// Ops.Html.FontFile_v2
// 
// **************************************************************

Ops.Html.FontFile_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    filename = op.inUrl("file", [".otf", ".ttf", ".woff", ".woff2"]),
    fontname = op.inString("family"),
    inActive = op.inBool("Active", true),
    outLoaded = op.outBoolNum("Loaded"),
    loadedTrigger = op.outTrigger("Loaded Trigger");

let loadingId = null;
let fontFaceObj;
let doc = null;
let to = null;
let style = null;
let oldFontName = "";

filename.onChange = function ()
{
    outLoaded.set(false);
    addStyle(null);
};

inActive.onChange =
fontname.onChange = () =>
{
    loadSoon();
};

function loadSoon()
{
    clearTimeout(to);
    to = setTimeout(() =>
    {
        addStyle(null);
    }, 50);
}

op.patch.on("windowChanged",
    (win) =>
    {
        fontFaceObj = null;
        addStyle(win.document);
    });

function addStyle(_doc)
{
    if (style)style.remove();

    if (fontFaceObj)
    {
        const success = doc.fonts.delete(fontFaceObj);
        fontFaceObj = null;

        setTimeout(() => // delete needs some time, so we delay this a bit.....
        {
            op.patch.emitEvent("fontLoaded", oldFontName);
        }, 100);
    }

    if (!inActive.get()) return;
    doc = _doc || doc || op.patch.cgl.canvas.ownerDocument || document;

    if (loadingId)loadingId = op.patch.cgl.patch.loading.finished(loadingId);

    op.setUiError("loadingerror", null);

    oldFontName = fontname.get();

    if (filename.get() && fontname.get())
    {
        if (doc.fonts)
        {
            let url = "url(\"" + op.patch.getFilePath(String(filename.get())) + "\")";
            fontFaceObj = new FontFace(fontname.get(), url);

            loadingId = op.patch.cgl.patch.loading.start("FontFile", filename.get(), op);
            // Add the FontFace to the FontFaceSet
            doc.fonts.add(fontFaceObj);

            // Get the current status of the FontFace
            // (should be 'unloaded')

            // Load the FontFace

            // Get the current status of the Fontface
            // (should be 'loading' or 'loaded' if cached)

            // Wait until the font has been loaded, log the current status.
            fontFaceObj.loaded.then((fontFace) =>
            {
                outLoaded.set(true);
                loadedTrigger.trigger();
                loadingId = op.patch.cgl.patch.loading.finished(loadingId);

                op.patch.emitEvent("fontLoaded", fontname.get());

                // Throw an error if loading wasn't successful
            }, (fontFace) =>
            {
                op.setUiError("loadingerror", "Font loading error: " + fontFaceObj.status + "(" + filename.get() + ")");
                loadingId = op.patch.cgl.patch.loading.finished(loadingId);
                outLoaded.set(true);

                // op.logError("Font loading error! Current status", fontFaceObj.status);
            }).catch((f) =>
            {
                loadingId = op.patch.cgl.patch.loading.finished(loadingId);
                console.error("catch ", f);
            });

            fontFaceObj.load();
        }
        else
        { // font loading api not supported
            const fileUrl = op.patch.getFilePath(String(filename.get()));
            const styleStr = ""
                .endl() + "@font-face"
                .endl() + "{"
                .endl() + "  font-family: \"" + fontname.get() + "\";"
                .endl() + "  src: url(\"" + fileUrl + "\") format(\"truetype\");"
                .endl() + "}";

            style = document.createElement("style");
            style.classList.add("cablesEle");
            style.type = "text/css";
            style.innerHTML = styleStr;
            document.getElementsByTagName("head")[document.getElementsByTagName("head").length - 1].appendChild(style);
            // TODO: Poll if font loaded
        }
    }
}

}
};

CABLES.OPS["68177370-116e-4c76-aef3-3b10d68e7227"]={f:Ops.Html.FontFile_v2,objName:"Ops.Html.FontFile_v2"};




// **************************************************************
// 
// Ops.Patch.PMZcxaN.ArrayMovingAverage
// 
// **************************************************************

Ops.Patch.PMZcxaN.ArrayMovingAverage= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const triggerIn = op.inTrigger("Trigger"); // Added a trigger for explicit execution control
const arrayIn = op.inArray("Array");
const windowSizeIn = op.inInt("WindowSize", 5); // Window size as Int
const arraySizeOptionalIn = op.inInt("ArraySize (optional)", 0); // 0 or less means infer from first valid input
const resetTrigger = op.inTrigger("Reset"); // Added a trigger for reset

const triggerOut = op.outTrigger("Next");
const avgArrayOut = op.outArray("AveragedArray");


// --- Internal State ---
const history = []; // Stores the last 'windowSize' arrays. Each entry will be a Float32Array.
let currentAveragedArray = null; // Stores the last computed average
let determinedArraySize = 0; // The size of arrays being processed, determined by arraySizeOptionalIn or first input


// Function to handle the core logic, can be called by trigger or potentially by array input change
function computeAndUpdate() {
    const newArray = arrayIn.get(); // Get the current input array
    const windowSize = Math.max(1, windowSizeIn.get()); // Ensure window size is at least 1

    if (!newArray) {
        // If no valid new array, output the last known average (if any)
        if (currentAveragedArray) {
            avgArrayOut.set(currentAveragedArray);
        } else {
            // If no history and no new array, output empty
            avgArrayOut.set(new Float32Array(determinedArraySize > 0 ? determinedArraySize : 0));
        }
        triggerOut.trigger();
        return;
    }

    let inputSize = newArray.length;
    let configuredSize = arraySizeOptionalIn.get();

    // Determine the effective array size for processing
    if (determinedArraySize === 0) { // If not yet determined (e.g., first run)
        if (configuredSize > 0) {
            determinedArraySize = configuredSize;
        } else if (inputSize > 0) {
            determinedArraySize = inputSize;
        } else {
            // Not enough info to determine size, output empty
            avgArrayOut.set(new Float32Array(0));
            triggerOut.trigger();
            return;
        }
    } else {
        // If determinedArraySize was set, but configuredSize changes, prioritize configuredSize if valid
        if (configuredSize > 0 && configuredSize !== determinedArraySize) {
            determinedArraySize = configuredSize;
            history.length = 0; // Clear history due to size change
            currentAveragedArray = null;
        }
        // If input array size is different from determined, we'll conform the input.
    }

    if (determinedArraySize === 0) { // Still zero after checks (e.g. initial empty array and no configured size)
        console.warn('Array Size = 0');
        avgArrayOut.set(new Float32Array(0));
        triggerOut.trigger();
        return;
    }


    // Create a history entry that conforms to determinedArraySize
    const historyEntry = new Float32Array(determinedArraySize);
    for (let i = 0; i < determinedArraySize; i++) {
        if (i < inputSize) {
            historyEntry[i] = newArray[i]; // Copy from input
        } else {
            historyEntry[i] = 0; // Pad with 0 if input is shorter
        }
        // If input is longer, it's effectively truncated to determinedArraySize
    }

    // Add the conformed new array to history
    history.push(historyEntry);

    // Ensure history does not exceed windowSize
    while (history.length > windowSize) {
        history.shift(); // Remove the oldest array
    }

    // Calculate the moving average
    const averagedValues = new Float32Array(determinedArraySize);
    const numArraysInWindow = history.length;

    if (numArraysInWindow > 0) {
        for (let i = 0; i < determinedArraySize; i++) { // Iterate up to the determined array size
            let sum = 0;
            for (let j = 0; j < numArraysInWindow; j++) {
                // history[j] is guaranteed to be a Float32Array of determinedArraySize
                sum += history[j][i];
            }
            averagedValues[i] = sum / numArraysInWindow;
        }
    }
    // If numArraysInWindow is 0 (should not happen if newArray was valid), averagedValues will be all zeros.

    currentAveragedArray = averagedValues; // Store for next time if needed
    avgArrayOut.set(currentAveragedArray);
    triggerOut.trigger();
}

// Execute when triggered
triggerIn.onTriggered = () => {
    computeAndUpdate();
};

// Optional: also compute if the input array itself receives a new value
// and no trigger is connected, or if you want it to be highly reactive.
// arrayIn.onNewValue = () => {
//    if (!triggerIn.isConnected()) { // Only if trigger is not connected
//        computeAndUpdate();
//    }
// };

function reset() {
    history.length = 0;
    currentAveragedArray = null;
    determinedArraySize = 0;
}

resetTrigger.onTriggered = reset;

}
};

CABLES.OPS["00364d0d-dfa9-499b-8e33-44b8a8fce055"]={f:Ops.Patch.PMZcxaN.ArrayMovingAverage,objName:"Ops.Patch.PMZcxaN.ArrayMovingAverage"};




// **************************************************************
// 
// Ops.Debug.ConsoleLog
// 
// **************************************************************

Ops.Debug.ConsoleLog= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inNumber=op.inFloat("Number",0),
    inString=op.inString("String","");


inNumber.onChange=function()
{
    console.log(inNumber.get());
};

inString.onChange=function()
{
    console.log(inString.get());
};
}
};

CABLES.OPS["545e7225-73b0-4d40-923b-4b39940403a8"]={f:Ops.Debug.ConsoleLog,objName:"Ops.Debug.ConsoleLog"};




// **************************************************************
// 
// Ops.String.Concat_v2
// 
// **************************************************************

Ops.String.Concat_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    string1 = op.inString("string1", "ABC"),
    string2 = op.inString("string2", "XYZ"),
    newLine = op.inValueBool("New Line", false),
    active = op.inBool("Active", true),
    result = op.outString("result");

newLine.onChange =
    string2.onChange =
    string1.onChange =
    active.onChange = exec;

op.toWorkPortsNeedsString(string1, string2);
exec();

function exec()
{
    if (!active.get())
    {
        return result.set(string1.get());
    }
    let s1 = string1.get();
    let s2 = string2.get();
    if (!s1 && !s2)
    {
        result.set("");
        return;
    }
    if (!s1)s1 = "";
    if (!s2)s2 = "";

    let nl = "";
    if (s1 && s2 && newLine.get())nl = "\n";
    result.set(String(s1) + nl + String(s2));
}

}
};

CABLES.OPS["a52722aa-0ca9-402c-a844-b7e98a6c6e60"]={f:Ops.String.Concat_v2,objName:"Ops.String.Concat_v2"};




// **************************************************************
// 
// Ops.Gl.Meshes.Sphere_v3
// 
// **************************************************************

Ops.Gl.Meshes.Sphere_v3= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    TAU = Math.PI * 2,
    inTrigger = op.inTrigger("render"),
    inRadius = op.inValue("radius", 0.5),
    inStacks = op.inValue("stacks", 32),
    inSlices = op.inValue("slices", 32),
    inStacklimit = op.inValueSlider("Filloffset", 1),
    inDraw = op.inValueBool("Render", true),
    outTrigger = op.outTrigger("trigger"),
    outGeometry = op.outObject("geometry", null, "geometry"),
    UP = vec3.fromValues(0, 1, 0),
    RIGHT = vec3.fromValues(1, 0, 0);

let
    cgl = null,
    geom = new CGL.Geometry("Sphere"),
    tmpNormal = vec3.create(),
    tmpVec = vec3.create(),
    needsRebuild = true,
    lastRadius = 0.0,
    doScale = true,
    vScale = vec3.create(),
    mesh = null;
updateScale();
op.onDelete = function () { if (mesh)mesh.dispose(); };

inTrigger.onTriggered = function ()
{
    cgl = op.patch.cg || op.patch.cgl;
    if (needsRebuild) buildMesh();

    if (doScale)
    {
        cgl.pushModelMatrix();
        mat4.scale(cgl.mMatrix, cgl.mMatrix, vScale);
    }

    if (inDraw.get()) mesh.render(cgl.getShader());

    if (doScale)
    {
        cgl.popModelMatrix();
    }

    outTrigger.trigger();
};

inStacks.onChange =
    inSlices.onChange =
    inStacklimit.onChange =
        () =>
        {
            needsRebuild = true;
        };

outGeometry.onLinkChanged =
    inRadius.onChange =
        () =>
        {
            if (outGeometry.isLinked()) doScale = false;
            else doScale = true;

            if (doScale) updateScale();
            else needsRebuild = true;
        };

function updateScale()
{
    if (doScale && lastRadius != 1.0)needsRebuild = true;
    vec3.set(vScale, inRadius.get(), inRadius.get(), inRadius.get());
}

function buildMesh()
{
    const
        stacks = Math.ceil(Math.max(inStacks.get(), 2)),
        slices = Math.ceil(Math.max(inSlices.get(), 3)),
        stackLimit = Math.min(Math.max(inStacklimit.get() * stacks, 1), stacks);
    let radius = inRadius.get();

    if (doScale)radius = 1.0;
    lastRadius = radius;
    let
        positions = [],
        texcoords = [],
        normals = [],
        tangents = [],
        biTangents = [],
        indices = [],
        x, y, z, d, t, a,
        o, u, v, i, j;
    for (i = o = 0; i < stacks + 1; i++)
    {
        v = (i / stacks - 0.5) * Math.PI;
        y = Math.sin(v);
        a = Math.cos(v);
        // for (j = 0; j < slices+1; j++) {
        for (j = slices; j >= 0; j--)
        {
            u = (j / slices) * TAU;
            x = Math.cos(u) * a;
            z = Math.sin(u) * a;

            positions.push(x * radius, y * radius, z * radius);
            // texcoords.push(i/(stacks+1),j/slices);
            texcoords.push(j / slices, i / (stacks + 1));

            d = Math.sqrt(x * x + y * y + z * z);
            normals.push(
                tmpNormal[0] = x / d,
                tmpNormal[1] = y / d,
                tmpNormal[2] = z / d
            );

            if (y == d) t = RIGHT;
            else t = UP;
            vec3.cross(tmpVec, tmpNormal, t);
            vec3.normalize(tmpVec, tmpVec);
            Array.prototype.push.apply(tangents, tmpVec);
            vec3.cross(tmpVec, tmpVec, tmpNormal);
            Array.prototype.push.apply(biTangents, tmpVec);
        }
        if (i == 0 || i > stackLimit) continue;
        for (j = 0; j < slices; j++, o++)
        {
            indices.push(
                o, o + 1, o + slices + 1, o + 1, o + slices + 2, o + slices + 1
            );
        }
        o++;
    }

    // set geometry
    geom.clear();
    geom.vertices = positions;
    geom.texCoords = texcoords;
    geom.vertexNormals = normals;
    geom.tangents = tangents;
    geom.biTangents = biTangents;
    geom.verticesIndices = indices;

    outGeometry.setRef(geom);

    if (op.patch.cg) // only generate mesh when there is a cg available, otherwise only outputs a geometry
        if (!mesh) mesh = op.patch.cg.createMesh(geom, { "opId": op.id });
        else mesh.setGeom(geom);

    needsRebuild = false;
}

}
};

CABLES.OPS["6ee346d0-614e-4709-91a5-dc21ae975caf"]={f:Ops.Gl.Meshes.Sphere_v3,objName:"Ops.Gl.Meshes.Sphere_v3"};




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
// Ops.Color.ColorPalettes
// 
// **************************************************************

Ops.Color.ColorPalettes= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const index = op.inValueInt("Index", 0);
const textureOut = op.outTexture("Texture");
const inLinear = op.inValueBool("Smooth");
const arrOut = op.outArray("Color Array");

let canvas = document.createElement("canvas");
canvas.id = "canvas_" + CABLES.generateUUID();
canvas.width = 5;
canvas.height = 8;
canvas.style.display = "none";

let body = document.getElementsByTagName("body")[0];
body.appendChild(canvas);
let ctx = canvas.getContext("2d");

index.onChange =
inLinear.onChange = buildTextureLater;

let arr = [];
arr.length = 5 * 3;
let lastFilter = null;

buildTextureLater();

function hexToR(h)
{
    return parseInt((cutHex(h)).substring(0, 2), 16);
}

function hexToG(h)
{
    return parseInt((cutHex(h)).substring(2, 4), 16);
}

function hexToB(h)
{
    return parseInt((cutHex(h)).substring(4, 6), 16);
}

function cutHex(h = "")
{
    return (h.charAt(0) == "#") ? h.substring(1, 7) : h;
}

function buildTextureLater()
{
    op.patch.cgl.addNextFrameOnceCallback(buildTexture);
}

function buildTexture()
{
    let ind = Math.round(index.get()) * 5;
    if (ind >= colors.length - 5)ind = 0;
    if (ind < 0)ind = 0;
    if (ind != ind)ind = 0;

    for (let i = 0; i < 5; i++)
    {
        let r = hexToR(colors[ind + i]);
        let g = hexToG(colors[ind + i]);
        let b = hexToB(colors[ind + i]);

        arr[i * 3 + 0] = r / 255;
        arr[i * 3 + 1] = g / 255;
        arr[i * 3 + 2] = b / 255;

        ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        ctx.fillRect(
            canvas.width / 5 * i,
            0,
            canvas.width / 5,
            canvas.height
        );
    }

    let filter = CGL.Texture.FILTER_NEAREST;
    if (inLinear.get())filter = CGL.Texture.FILTER_LINEAR;

    if (lastFilter == filter && textureOut.get()) textureOut.get().initTexture(canvas, filter);
    else textureOut.set(new CGL.Texture.createFromImage(op.patch.cgl, canvas, { "filter": filter }));

    arrOut.set(null);
    arrOut.set(arr);
    textureOut.get().unpackAlpha = false;
    lastFilter = filter;
}

op.onDelete = function ()
{
    canvas.remove();
};

const colors = [
    "#E6E2AF", "#A7A37E", "#EFECCA", "#046380", "002F2F",
    "#468966", "#FFF0A5", "#FFB03B", "#B64926", "8E2800",
    "#FCFFF5", "#D1DBBD", "#91AA9D", "#3E606F", "193441",
    "#FF6138", "#FFFF9D", "#BEEB9F", "#79BD8F", "00A388",
    "#105B63", "#FFFAD5", "#FFD34E", "#DB9E36", "BD4932",
    "#225378", "#1695A3", "#ACF0F2", "#F3FFE2", "EB7F00",
    "#2C3E50", "#E74C3C", "#ECF0F1", "#3498DB", "2980B9",
    "#000000", "#263248", "#7E8AA2", "#FFFFFF", "FF9800",
    "#004358", "#1F8A70", "#BEDB39", "#FFE11A", "FD7400",
    "#DC3522", "#D9CB9E", "#374140", "#2A2C2B", "1E1E20",
    "#7D8A2E", "#C9D787", "#FFFFFF", "#FFC0A9", "FF8598",
    "#B9121B", "#4C1B1B", "#F6E497", "#FCFAE1", "BD8D46",
    "#2E0927", "#D90000", "#FF2D00", "#FF8C00", "04756F",
    "#595241", "#B8AE9C", "#FFFFFF", "#ACCFCC", "8A0917",
    "#10222B", "#95AB63", "#BDD684", "#E2F0D6", "F6FFE0",
    "#F6F792", "#333745", "#77C4D3", "#DAEDE2", "EA2E49",
    "#703030", "#2F343B", "#7E827A", "#E3CDA4", "C77966",
    "#2F2933", "#01A2A6", "#29D9C2", "#BDF271", "FFFFA6",
    "#D8CAA8", "#5C832F", "#284907", "#382513", "363942",
    "#FFF8E3", "#CCCC9F", "#33332D", "#9FB4CC", "DB4105",
    "#85DB18", "#CDE855", "#F5F6D4", "#A7C520", "493F0B",
    "#04BFBF", "#CAFCD8", "#F7E967", "#A9CF54", "588F27",
    "#292929", "#5B7876", "#8F9E8B", "#F2E6B6", "412A22",
    "#332532", "#644D52", "#F77A52", "#FF974F", "A49A87",
    "#405952", "#9C9B7A", "#FFD393", "#FF974F", "F54F29",
    "#2B3A42", "#3F5765", "#BDD4DE", "#EFEFEF", "FF530D",
    "#962D3E", "#343642", "#979C9C", "#F2EBC7", "348899",
    "#96CA2D", "#B5E655", "#EDF7F2", "#4BB5C1", "7FC6BC",
    "#1C1D21", "#31353D", "#445878", "#92CDCF", "EEEFF7",
    "#3E454C", "#2185C5", "#7ECEFD", "#FFF6E5", "FF7F66",
    "#00585F", "#009393", "#FFFCC4", "#F0EDBB", "FF3800",
    "#B4AF91", "#787746", "#40411E", "#32331D", "C03000",
    "#63A69F", "#F2E1AC", "#F2836B", "#F2594B", "CD2C24",
    "#88A825", "#35203B", "#911146", "#CF4A30", "ED8C2B",
    "#F2385A", "#F5A503", "#E9F1DF", "#4AD9D9", "36B1BF",
    "#CFC291", "#FFF6C5", "#A1E8D9", "#FF712C", "695D46",
    "#FF5335", "#B39C85", "#306E73", "#3B424D", "1D181F",
    "#000000", "#333333", "#FF358B", "#01B0F0", "AEEE00",
    "#E8E595", "#D0A825", "#40627C", "#26393D", "FFFAE4",
    "#E7E8D1", "#D3CEAA", "#FBF7E4", "#424242", "8E001C",
    "#354242", "#ACEBAE", "#FFFF9D", "#C9DE55", "7D9100",
    "#2F2933", "#01A2A6", "#29D9C2", "#BDF271", "FFFFA6",
    "#DDDCC5", "#958976", "#611427", "#1D2326", "6A6A61",
    "#6C6E58", "#3E423A", "#417378", "#A4CFBE", "F4F7D9",
    "#E1E6FA", "#C4D7ED", "#ABC8E2", "#375D81", "183152",
    "#6B0C22", "#D9042B", "#F4CB89", "#588C8C", "011C26",
    "#304269", "#91BED4", "#D9E8F5", "#FFFFFF", "F26101",
    "#96CEB4", "#FFEEAD", "#FF6F69", "#FFCC5C", "AAD8B0",
    "#B0CC99", "#677E52", "#B7CA79", "#F6E8B1", "89725B",
    "#334D5C", "#45B29D", "#EFC94C", "#E27A3F", "DF5A49",
    "#16193B", "#35478C", "#4E7AC7", "#7FB2F0", "ADD5F7",
    "#00261C", "#044D29", "#168039", "#45BF55", "96ED89",
    "#36362C", "#5D917D", "#A8AD80", "#E6D4A7", "825534",
    "#F9E4AD", "#E6B098", "#CC4452", "#723147", "31152B",
    "#2C3E50", "#FC4349", "#D7DADB", "#6DBCDB", "FFFFFF",
    "#002635", "#013440", "#AB1A25", "#D97925", "EFE7BE",
    "#FF8000", "#FFD933", "#CCCC52", "#8FB359", "192B33",
    "#272F32", "#9DBDC6", "#FFFFFF", "#FF3D2E", "DAEAEF",
    "#B8ECD7", "#083643", "#B1E001", "#CEF09D", "476C5E",
    "#002F32", "#42826C", "#A5C77F", "#FFC861", "C84663",
    "#5C4B51", "#8CBEB2", "#F2EBBF", "#F3B562", "F06060",
    "#5A1F00", "#D1570D", "#FDE792", "#477725", "A9CC66",
    "#5E0042", "#2C2233", "#005869", "#00856A", "8DB500",
    "#52656B", "#FF3B77", "#CDFF00", "#FFFFFF", "B8B89F",
    "#801637", "#047878", "#FFB733", "#F57336", "C22121",
    "#730046", "#BFBB11", "#FFC200", "#E88801", "C93C00",
    "#24221F", "#363F45", "#4B5F6D", "#5E7C88", "FEB41C",
    "#E64661", "#FFA644", "#998A2F", "#2C594F", "002D40",
    "#C24704", "#D9CC3C", "#FFEB79", "#A0E0A9", "00ADA7",
    "#484A47", "#C1CE96", "#ECEBF0", "#687D77", "353129",
    "#588C7E", "#F2E394", "#F2AE72", "#D96459", "8C4646",
    "#BAB293", "#A39770", "#EFE4BD", "#A32500", "2B2922",
    "#6A7059", "#FDEEA7", "#9BCC93", "#1A9481", "003D5C",
    "#174C4F", "#207178", "#FF9666", "#FFE184", "F5E9BE",
    "#D5FBFF", "#9FBCBF", "#647678", "#2F3738", "59D8E6",
    "#DB5800", "#FF9000", "#F0C600", "#8EA106", "59631E",
    "#450003", "#5C0002", "#94090D", "#D40D12", "FF1D23",
    "#211426", "#413659", "#656F8C", "#9BBFAB", "F2EFDF",
    "#EA6045", "#F8CA4D", "#F5E5C0", "#3F5666", "2F3440",
    "#F2F2F2", "#C6E070", "#91C46C", "#287D7D", "1C344D",
    "#334D5C", "#45B29D", "#EFC94C", "#E27A3F", "DF5A49",
    "#705B35", "#C7B07B", "#E8D9AC", "#FFF6D9", "570026",
    "#F7F2B2", "#ADCF4F", "#84815B", "#4A1A2C", "8E3557",
    "#1A1F2B", "#30395C", "#4A6491", "#85A5CC", "D0E4F2",
    "#25064D", "#36175E", "#553285", "#7B52AB", "9768D1",
    "#004056", "#2C858D", "#74CEB7", "#C9FFD5", "FFFFCB",
    "#CFCA4C", "#FCF5BF", "#9FE5C2", "#5EB299", "745A33",
    "#776045", "#A8C545", "#DFD3B6", "#FFFFFF", "0092B2",
    "#CC3910", "#F1F2C0", "#CCC59E", "#8FA68E", "332F29",
    "#FF6600", "#C13B00", "#5E6D70", "#424E4F", "1B1D1E",
    "#690011", "#BF0426", "#CC2738", "#F2D99C", "E5B96F",
    "#1B1D26", "#425955", "#778C7A", "#F1F2D8", "BFBD9F",
    "#F6B1C3", "#F0788C", "#DE264C", "#BC0D35", "A20D1E",
    "#597533", "#332F28", "#61B594", "#E6DEA5", "C44E18",
    "#3FB8AF", "#7FC7AF", "#DAD8A7", "#FF9E9D", "FF3D7F",
    "#0F2D40", "#194759", "#296B73", "#3E8C84", "D8F2F0",
    "#42282F", "#74A588", "#D6CCAD", "#DC9C76", "D6655A",
    "#002A4A", "#17607D", "#FFF1CE", "#FF9311", "D64700",
    "#003056", "#04518C", "#00A1D9", "#47D9BF", "F2D03B",
    "#13140F", "#D4FF00", "#E4FFE6", "#68776C", "00D6DD",
    "#FCFAD0", "#A1A194", "#5B605F", "#464646", "A90641",
    "#289976", "#67CC8E", "#B1FF91", "#FFE877", "FF5600",
    "#302B1D", "#3F522B", "#737D26", "#A99E46", "D9CB84",
    "#56626B", "#6C9380", "#C0CA55", "#F07C6C", "AD5472",
    "#32450C", "#717400", "#DC8505", "#EC5519", "BE2805",
    "#C7B773", "#E3DB9A", "#F5FCD0", "#B1C2B3", "778691",
    "#E83A25", "#FFE9A3", "#98CC96", "#004563", "191B28",
    "#3399CC", "#67B8DE", "#91C9E8", "#B4DCED", "E8F8FF",
    "#1A212C", "#1D7872", "#71B095", "#DEDBA7", "D13F32",
    "#7D2A35", "#CC9258", "#917A56", "#B4BA6C", "FEFFC2",
    "#E7E9D1", "#D3D4AA", "#FCFAE6", "#444444", "901808",
    "#FFFFFF", "#AEAEAE", "#E64C66", "#2D3E50", "1BBC9B",
    "#E0FFB3", "#61C791", "#31797D", "#2A2F36", "F23C55",
    "#EB5937", "#1C1919", "#403D3C", "#456F74", "D3CBBD",
    "#E6DD00", "#8CB302", "#008C74", "#004C66", "332B40",
    "#14A697", "#F2C12E", "#F29D35", "#F27649", "F25252",
    "#261822", "#40152A", "#731630", "#CC1E2C", "FF5434",
    "#261F27", "#FEE169", "#CDD452", "#F9722E", "C9313D",
    "#5C4B51", "#8CBEB2", "#F2EBBF", "#F3B562", "F06060",
    "#2F3837", "#C5C7B6", "#FFF8D3", "#4C493E", "222028",
    "#E3CBAC", "#9C9985", "#C46D3B", "#788880", "324654",
    "#3F0B1B", "#7A1631", "#CF423C", "#FC7D49", "FFD462",
    "#14212B", "#293845", "#4F6373", "#8F8164", "D9D7AC",
    "#98A89E", "#BAC0AC", "#FAFAC6", "#FF4411", "D40015",
    "#FEFFFF", "#3C3F36", "#9FB03E", "#EBE9DC", "72918B",
    "#CC6B32", "#FFAB48", "#FFE7AD", "#A7C9AE", "888A63",
    "#262526", "#404040", "#8C8979", "#F2F2F2", "F60A20",
    "#00305A", "#004B8D", "#0074D9", "#4192D9", "7ABAF2",
    "#0C273D", "#54D0ED", "#FFFEF1", "#70B85D", "2C5E2E",
    "#4C1B33", "#EFE672", "#98A942", "#2D6960", "141D14",
    "#2F3540", "#666A73", "#F2EDE4", "#D9D1C7", "8C8681",
    "#0D1F30", "#3B6670", "#8BADA3", "#F0E3C0", "DB6C0F",
    "#FFBC67", "#DA727E", "#AC6C82", "#685C79", "455C7B",
    "#092140", "#024959", "#F2C777", "#F24738", "BF2A2A",
    "#133463", "#365FB7", "#799AE0", "#F4EFDC", "BA9B65",
    "#C4D4CB", "#55665E", "#30282A", "#542733", "E84167",
    "#CDDEC6", "#4DAAAB", "#1E4F6A", "#2A423C", "93A189",
    "#EF5411", "#FA5B0F", "#FF6517", "#FF6D1F", "FF822E",
    "#41434A", "#6E9489", "#DEDCC3", "#F2F1E9", "877963",
    "#292929", "#2BBFBD", "#F2B33D", "#F29B30", "F22E2E",
    "#F2385A", "#F5A503", "#E9F1DF", "#56D9CD", "3AA1BF",
    "#D5F8B4", "#A6E3A8", "#8A9A85", "#7E566B", "422335",
    "#3CBAC8", "#93EDD4", "#F3F5C4", "#F9CB8F", "F19181",
    "#979926", "#38CCB5", "#EEFF8E", "#FFD767", "CC2A09",
    "#404040", "#024959", "#037E8C", "#F2EFDC", "F24C27",
    "#94B34D", "#D3FF82", "#363D52", "#121D2B", "111B1C",
    "#282E33", "#25373A", "#164852", "#495E67", "FF3838",
    "#313732", "#8AA8B0", "#DEDEDE", "#FFFFFF", "F26101",
    "#FFFFFF", "#E5E1D1", "#52616D", "#2C343B", "C44741",
    "#FFF6B8", "#ABCCA7", "#403529", "#7A5E2F", "A68236",
    "#4F1025", "#C5003E", "#D9FF5B", "#78AA00", "15362D",
    "#49404F", "#596166", "#D1FFCD", "#A9BD8B", "948A54",
    "#FF2151", "#FF7729", "#FFAD29", "#FFEBCA", "1AB58A",
    "#73603D", "#BF8A49", "#F2CA80", "#5E5A59", "0D0D0D",
    "#3D4C53", "#70B7BA", "#F1433F", "#E7E1D4", "FFFFFF",
    "#006D8D", "#008A6E", "#549E39", "#8AB833", "C0CF3A",
    "#BDDFB3", "#2BAA9C", "#2F2E2E", "#0F2625", "465F3F",
    "#F2F2F2", "#BF0404", "#8C0303", "#590202", "400101",
    "#76A19A", "#272123", "#A68D60", "#B0C5BB", "D9593D",
    "#0E3D59", "#88A61B", "#F29F05", "#F25C05", "D92525",
    "#C1E1ED", "#76C7C6", "#273D3B", "#131A19", "E35C14",
    "#2D112C", "#530031", "#820233", "#CA293E", "EF4339",
    "#AF7575", "#EFD8A1", "#BCD693", "#AFD7DB", "3D9CA8",
    "#D74B4B", "#DCDDD8", "#475F77", "#354B5E", "FFFFFF",
    "#FFF6C9", "#C8E8C7", "#A4DEAB", "#85CC9F", "499E8D",
    "#229396", "#8BA88F", "#C7C5A7", "#F0DFD0", "F23C3C",
    "#57385C", "#A75265", "#EC7263", "#FEBE7E", "FFEDBC",
    "#96526B", "#D17869", "#EBAD60", "#F5CF66", "8BAB8D",
    "#0D1C33", "#17373C", "#2B6832", "#4F9300", "A1D700",
    "#1B2B32", "#37646F", "#A3ABAF", "#E1E7E8", "B22E2F",
    "#C5D9B2", "#53A194", "#572C2C", "#3D2324", "695A3B",
    "#425957", "#81AC8B", "#F2E5A2", "#F89883", "D96666",
    "#002E40", "#2A5769", "#FFFFFF", "#FABD4A", "FA9600",
    "#FFFEFC", "#E2E3DF", "#515B5E", "#2E3233", "CAF200",
    "#FFF0A3", "#B8CC6E", "#4B6000", "#E4F8FF", "004460",
    "#3B596A", "#427676", "#3F9A82", "#A1CD73", "ECDB60",
    "#F2E6CE", "#8AB39F", "#606362", "#593325", "1D1D1F",
    "#212B40", "#C2E078", "#FFFFFF", "#BADCDD", "547B97",
    "#0B3C4D", "#0E5066", "#136480", "#127899", "1A8BB3",
    "#222130", "#464D57", "#D4E8D3", "#FFFCFB", "ED8917",
    "#B33600", "#FF8A00", "#FFC887", "#CC5400", "B31E00",
    "#012530", "#28544B", "#ACBD86", "#FFD6A0", "FF302C",
    "#2E95A3", "#50B8B4", "#C6FFFA", "#E2FFA8", "D6E055",
    "#112F41", "#068587", "#4FB99F", "#F2B134", "ED553B",
    "#202B30", "#4E7178", "#4FA9B8", "#74C0CF", "F1F7E2",
    "#302B2F", "#696153", "#FFA600", "#9BB58F", "FFD596",
    "#458C6B", "#F2D8A7", "#D9A86C", "#D94436", "A62424",
    "#22475E", "#75B08A", "#F0E797", "#FF9D84", "FF5460",
    "#FFAA5C", "#DA727E", "#AC6C82", "#685C79", "455C7B",
    "#686E75", "#9BAAC1", "#82787B", "#E4F1DB", "AAC19B",
    "#F0C755", "#E2AD3B", "#BF5C00", "#901811", "5C110F",
    "#FFFBDC", "#BFBCA5", "#7F7D6E", "#3F3E37", "E5E2C6",
    "#BEBEBE", "#F1E4D8", "#594735", "#94C7BA", "D8F1E4",
    "#1B1E26", "#F2EFBD", "#B6D051", "#70A99A", "2F6D7A",
    "#F7E4A2", "#A7BD5B", "#DC574E", "#8DC7B8", "ED9355",
    "#70E8CB", "#FFE9C7", "#FF5B5B", "#545454", "2D2D2F",
    "#17111A", "#321433", "#660C47", "#B33467", "CCBB51",
    "#2B2E2E", "#595855", "#A2ABA5", "#CAE6E8", "313F54",
    "#023B47", "#295E52", "#F2E085", "#FCAB55", "EE7F38",
    "#302C29", "#D1D1BC", "#A7C4BB", "#6C8C84", "466964",
    "#212629", "#067778", "#49B8A8", "#85EDB6", "D9E5CD",
    "#334D5C", "#45B29D", "#EFC94C", "#E27A3F", "DF4949",
    "#2C3E50", "#FC4349", "#6DBCDB", "#D7DADB", "FFFFFF",
    "#35262D", "#FFFBFF", "#E8ECED", "#A4B7BB", "76A0B0",
    "#61E8D2", "#FCEEB9", "#302F25", "#704623", "BBE687",
    "#E1E6B9", "#C4D7A4", "#ABC8A4", "#375D3B", "183128",
    "#C98B2F", "#803C27", "#C56520", "#E1B41B", "807916",
    "#A3D9B0", "#93BF9E", "#F2F0D5", "#8C8474", "40362E",
    "#524656", "#CF4747", "#EA7A58", "#E4DCCB", "A6C4BC",
    "#5C2849", "#A73E5C", "#EC4863", "#FFDA66", "1FCECB",
    "#0EEAFF", "#15A9FA", "#1B76FF", "#1C3FFD", "2C1DFF",
    "#010000", "#393845", "#9B96A3", "#5C0009", "940315",
    "#468071", "#FFE87A", "#FFCA53", "#FF893B", "E62738",
    "#404040", "#024959", "#037E8C", "#F2EFDC", "F24C27",
    "#FF765E", "#C2AE8B", "#FCCF65", "#FFE5C6", "B7BDC4",
    "#003647", "#00717D", "#F2D8A7", "#A4A66A", "515932",
    "#FAFAC0", "#C4BE90", "#8C644C", "#594D37", "293033",
    "#2B3A42", "#3F5765", "#BDD4DE", "#EFEFEF", "E74C3C",
    "#3B3B3B", "#A8877E", "#FFA49D", "#FF7474", "FF476C",
    "#0A3A4A", "#196674", "#33A6B2", "#9AC836", "D0E64B",
    "#FFA340", "#38001C", "#571133", "#017A74", "00C2BA",
    "#DCEBDD", "#A0D5D6", "#789AA1", "#304345", "AD9A27",
    "#588C7E", "#F2E394", "#F2AE72", "#D96459", "8C4646",
    "#F0E6B1", "#B5D6AA", "#99A37A", "#70584B", "3D3536",
    "#2F400D", "#8CBF26", "#A8CA65", "#E8E5B0", "419184",
    "#010712", "#13171F", "#1C1F26", "#24262D", "961227",
    "#403F33", "#6E755F", "#AFC2AA", "#FFDEA1", "E64C10",
    "#C74029", "#FAE8CD", "#128085", "#385052", "F0AD44",
    "#CFF09E", "#A8DBA8", "#79BD9A", "#3B8686", "0B486B",
    "#E0401C", "#E6B051", "#272F30", "#F7EDB7", "9E2B20",
    "#FFE2C5", "#FFEEDD", "#FFDDAA", "#FFC484", "FFDD99",
    "#FFFFE4", "#F2E5BD", "#B9BF8E", "#A69F7C", "8C6865",
    "#5C8A2D", "#AFD687", "#FFFFFF", "#00C3A9", "008798",
    "#4F3130", "#FF1F3D", "#5BE3E3", "#FDFFF1", "8B9698",
    "#D23600", "#D95100", "#DE6D00", "#EE8900", "FCA600",
    "#FFFFFA", "#A1A194", "#5B605F", "#464646", "FF6600",
    "#F34A53", "#FAE3B4", "#AAC789", "#437356", "1E4147",
    "#2A7A8C", "#176273", "#063540", "#E6D9CF", "403D3A",
    "#21455B", "#567D8C", "#A59E8C", "#8C8372", "F2F2F2",
    "#012340", "#026873", "#83A603", "#BBBF45", "F2F0CE",
    "#FDFF98", "#A7DB9E", "#211426", "#6B073B", "DA8C25",
    "#002F36", "#142426", "#D1B748", "#EDDB43", "FFFD84",
    "#420000", "#600000", "#790000", "#931111", "BF1616",
    "#3C989E", "#5DB5A4", "#F4CDA5", "#F57A82", "ED5276",
    "#23A38F", "#B7C11E", "#EFF1C2", "#F0563D", "2E313D",
    "#F5ECD9", "#2BACB5", "#B4CCB9", "#E84D5B", "3B3B3B",
    "#A5EB3C", "#60C21E", "#159E31", "#53DB50", "C5FFCB",
    "#263138", "#406155", "#7C9C71", "#DBC297", "FF5755",
    "#0A111F", "#263248", "#7E8AA2", "#E3E3E3", "C73226",
    "#003B59", "#00996D", "#A5D900", "#F2E926", "FF930E",
    "#00A19A", "#04BF9D", "#F2E85C", "#F53D54", "404040",
    "#324152", "#47535E", "#796466", "#C1836A", "DEA677",
    "#036F73", "#84CDC2", "#FEF2D8", "#F18C79", "EF504F",
    "#174040", "#888C65", "#D9CA9C", "#D98162", "A65858",
    "#56797F", "#87A0A4", "#FCFBDC", "#F2DDB6", "A6937C",
    "#A8BAA9", "#FFF5CF", "#DBCDAD", "#B39C7D", "806854",
    "#60655F", "#AB9675", "#FFE0C9", "#D4CCBA", "CF8442",
    "#BDDFB3", "#009D57", "#2C372E", "#0F2925", "465F3F",
    "#3E3947", "#735360", "#D68684", "#F1B0B0", "EBD0C4",
    "#0A7B83", "#2AA876", "#FFD265", "#F19C65", "CE4D45",
    "#FFFFFF", "#F4921E", "#858585", "#C5D2DB", "3E6B85",
    "#11151E", "#212426", "#727564", "#B9AA81", "690C07",
    "#000000", "#910000", "#CBB370", "#FFFBF1", "21786C",
    "#F78F00", "#C43911", "#75003C", "#37154A", "0F2459",
    "#003354", "#91BED4", "#D9E8F5", "#FFFFFF", "F26101",
    "#3DA8A4", "#7ACCBE", "#FFFFF7", "#FF99A1", "FF5879",
    "#64C733", "#F0F0F0", "#3E879E", "#57524D", "36302B",
    "#343844", "#2AB69D", "#E65848", "#FDC536", "FCF2D7",
    "#E34517", "#F5FF53", "#B4E85E", "#00BD72", "0B4239",
    "#A84B3A", "#FF9F67", "#233138", "#FFF7F5", "4C646B",
    "#59535E", "#FAEEFF", "#F1BAF3", "#5D4970", "372049",
    "#FF6F22", "#D9984F", "#FFE8A9", "#3E4237", "32948A",
    "#5D7370", "#7FA6A1", "#B8D9B8", "#D6EDBD", "FFF5BC",
    "#FFBE00", "#FFDC00", "#FFD10F", "#FFDE20", "E8CA00",
    "#003840", "#005A5B", "#007369", "#008C72", "02A676",
    "#E1E6FA", "#C4D7ED", "#ABC8E2", "#375D81", "183152",
    "#BA2F1D", "#FFF8A4", "#F5E67F", "#264A59", "1E2C30",
    "#222526", "#FFBB6E", "#F28D00", "#D94F00", "80203B",
    "#EBD096", "#D1B882", "#5D8A66", "#1A6566", "21445B",
    "#F00807", "#5F6273", "#A4ABBF", "#CCC9D1", "E2E1E9",
    "#DFE0AF", "#A4BAA2", "#569492", "#41505E", "383245",
    "#152737", "#2B4E69", "#799AA5", "#FFFFF0", "682321",
    "#C44C51", "#FFB6B8", "#FFEFB6", "#A2B5BF", "5F8CA3",
    "#5ADED4", "#4DAAAB", "#26596A", "#163342", "6C98A1",
    "#FF5B2B", "#B1221C", "#34393E", "#8CC6D7", "FFDA8C",
    "#3D4D4D", "#99992E", "#E6E666", "#F2FFBF", "800033",
    "#242424", "#437346", "#97D95C", "#D9FF77", "E9EB9B",
    "#FFEBB0", "#FFB05A", "#F84322", "#C33A1A", "9F3818",
    "#4D2B2F", "#E57152", "#E8DE67", "#FFEFC3", "C0CCAB",
    "#A82221", "#DB5E31", "#EDA23E", "#F2CB67", "BFB840",
    "#3B3140", "#BFB8A3", "#F2E0C9", "#F2B9AC", "D97E7E",
    "#43464D", "#9197A6", "#D3DCF2", "#7690CF", "48577D",
    "#EFDFBB", "#9EBEA6", "#335D6A", "#D64F2A", "7A8A7F",
    "#000001", "#313634", "#C7CECF", "#5C0402", "941515",
    "#334D5C", "#45B29D", "#EFC94C", "#E27A3F", "DF5A49",
    "#F5F4E1", "#D6C9B5", "#B4AA97", "#D44917", "82877A",
    "#19162B", "#1C425C", "#6ABDC4", "#F0E4C5", "D6C28F",
    "#00132B", "#7F9DB0", "#C5E2ED", "#FFFFFF", "F95900",
    "#1F3642", "#6D968D", "#B6CCB8", "#FFE2B3", "56493F",
    "#08A689", "#82BF56", "#C7D93D", "#E9F2A0", "F2F2F2",
    "#DE3961", "#A4E670", "#FFFFDC", "#B3EECC", "00ADA7",
    "#849972", "#D9D094", "#A6A23E", "#4F2F1D", "8F5145",
    "#F41C54", "#FF9F00", "#FBD506", "#A8BF12", "00AAB5",
    "#00585F", "#009393", "#F5F3DC", "#454445", "FF5828",
    "#FF6138", "#FFFF9D", "#BEEB9F", "#79BD8F", "00A388",
    "#140B04", "#332312", "#B59D75", "#E3D2B4", "FFF7EA",
    "#ED3B3B", "#171F26", "#77B59C", "#F2E7B1", "635656",
    "#46594B", "#A6977C", "#D9B384", "#734F30", "260B01",
    "#CCB8A3", "#FF8FB1", "#FFF5EA", "#4E382F", "B29882",
    "#B70000", "#FFFFFF", "#FFCA3D", "#94C4F4", "0092B3",
    "#053B44", "#06736C", "#A53539", "#B9543C", "EAD075",
    "#E8C1B9", "#FFB3AB", "#FFCAB8", "#E8B69C", "FFCEAB",
    "#E7F2DF", "#69043B", "#59023B", "#231E2D", "161726",
    "#E82B1E", "#E5DEAF", "#A0B688", "#557A66", "453625",
    "#F1E6D4", "#BA3D49", "#791F33", "#9F9694", "E3E1DC",
    "#CED59F", "#F1EDC0", "#B1BEA4", "#647168", "282828",
    "#2C3E50", "#E74C3C", "#ECF0F1", "#3498DB", "646464",
    "#DE7047", "#FFDE8D", "#FFFFFF", "#CDDE47", "528540",
    "#8EAB99", "#40232B", "#D95829", "#D97338", "DEC085",
    "#E9662C", "#EBAF3C", "#00AC65", "#068894", "2B2B2B",
    "#46483C", "#A0AA8F", "#EBE3CB", "#FFFFFF", "F26101",
    "#170F0E", "#290418", "#505217", "#FFD372", "FFF1AF",
    "#263545", "#C4273C", "#D7DADB", "#6DBCDB", "FFFFFF",
    "#DCFAC0", "#B1E1AE", "#85C79C", "#56AE8B", "00968B",
    "#075807", "#097609", "#70AF1A", "#B9D40B", "E5EB0B",
    "#521000", "#712800", "#744E1D", "#879666", "F1D98C",
    "#261F26", "#3F3B40", "#6C7367", "#BFBF8A", "F2E086",
    "#2C3E50", "#FC4349", "#D7DADB", "#6DBCDB", "FFFFFF",
    "#506D7D", "#94CCB9", "#FFECA7", "#FFB170", "F07D65",
    "#3F4036", "#8DA681", "#F2E1C2", "#BF2806", "8C1D04",
    "#990700", "#CC542E", "#FF964F", "#FFCB7C", "787730",
    "#195073", "#7F8C1F", "#EE913F", "#F2E5BD", "9FD7C7",
    "#1B3E59", "#F2F0F0", "#FFAC00", "#BF0404", "730202",
    "#EA6045", "#F8CA4D", "#F5E5C0", "#3F5666", "2F3440",
    "#F95759", "#FDA099", "#FFFFFF", "#D9F3CB", "8AC2B0",
    "#265573", "#386D73", "#81A68A", "#9FBF8F", "D4D9B0",
    "#E1DA36", "#FFEA1B", "#6FE4DA", "#1DB0BC", "007BBC",
    "#013859", "#185E65", "#F9CC7F", "#F15C25", "9E1617",
    "#36CC7C", "#D6FFBE", "#94D794", "#228765", "77A668",
    "#94201F", "#D4421F", "#478A80", "#D9E061", "F08835",
    "#F16233", "#00B5B5", "#F0F0F0", "#3E4651", "5C6D7E",
    "#2E806C", "#76CC99", "#E0FFED", "#FF5F3A", "D2413C",
    "#00393B", "#00766C", "#44A18E", "#E5EDB6", "F6695B",
    "#734854", "#F2F2E9", "#D9D7C5", "#A69580", "736766",
    "#03497E", "#0596D5", "#9DEBFC", "#8D7754", "FEB228",
    "#F0E14C", "#FFBB20", "#FA7B12", "#E85305", "59CC0D",
    "#FE4365", "#FC9D9A", "#F9CDAD", "#C8C8A9", "83AF9B",
    "#00557C", "#186D94", "#3488AD", "#81C1DC", "BBE5F3",
    "#DEE8D7", "#918773", "#420A1A", "#240001", "4D493A",
    "#FFFFFF", "#CAC535", "#97AF25", "#158471", "41342C",
    "#041F3D", "#0B2E41", "#165751", "#448C61", "9AC16D",
    "#FA8C01", "#FF6405", "#577700", "#082400", "A0A600",
    "#78C0F9", "#FFDDCE", "#FFFFFF", "#FFDBE6", "FE86A4",
    "#351330", "#CC2A41", "#E7CAA4", "#759A8A", "524549",
    "#02151A", "#043A47", "#087891", "#C8C8C8", "B31D14",
    "#F34A53", "#FAE3B4", "#AAC789", "#437356", "1E4147",
    "#58838C", "#DAD7C7", "#BF996B", "#BF5841", "A61C1C",
    "#556354", "#E68F0D", "#8C948A", "#495450", "42423F",
    "#323640", "#5B6470", "#8C94A1", "#BDC7D6", "DFE2FF",
    "#FF0000", "#FF950B", "#2FA88C", "#DEEB00", "4B2C04",
    "#0F3D48", "#174C5B", "#366774", "#ECECE7", "E96151",
    "#3DBB7E", "#A3CD39", "#FBAC1D", "#F96C1E", "EE4036",
    "#23363B", "#A44F3F", "#F8983D", "#8D9151", "BBC946",
    "#4B5657", "#969481", "#D2C9B0", "#F4E3C1", "B6B835",
    "#E8980C", "#B1F543", "#F2FF00", "#FF5E00", "59BBAB",
    "#849696", "#FEFFFB", "#232D33", "#17384D", "FF972C",
    "#555555", "#7BB38E", "#F4F1D7", "#F8AB65", "F15C4C",
    "#1D3C42", "#67BFAD", "#F2EC99", "#F2C48D", "F25050",
    "#334D5C", "#45B29D", "#EFC94C", "#E27A3F", "DF4949",
    "#B8E1F2", "#249AA7", "#ABD25E", "#F8C830", "F1594A",
    "#FDEDD0", "#BCF1ED", "#FF634D", "#FD795B", "FFF0AA",
    "#FFFFFF", "#E5E1D1", "#52616D", "#2C343B", "C44741",
    "#FFFFF1", "#D5FF9B", "#8FB87F", "#5A7B6C", "374E5A",
    "#010340", "#0E1E8C", "#0003C7", "#1510F0", "1441F7",
    "#002A4A", "#17607D", "#FFF1CE", "#FF9311", "E33200",
    "#871E31", "#CCC097", "#9E9D7B", "#687061", "262626",
    "#F16663", "#F48D6C", "#F2E07B", "#8ABE9B", "4A6D8B",
    "#001F11", "#204709", "#0C8558", "#FFD96A", "FF4533",
    "#1D1626", "#F2E0BD", "#BFAA8F", "#8C786C", "594C4C",
    "#685D47", "#913420", "#1E2729", "#C1D9C5", "FEEFB1",
    "#1D7561", "#FC8448", "#FF4138", "#A8282B", "38141B",
    "#BF0633", "#FF484E", "#FF9273", "#D1D0B4", "E5ECED",
    "#8E9E63", "#E6DBB0", "#F5EED7", "#C4BCA0", "176573",
    "#665446", "#809994", "#AECCB6", "#DEF2C4", "E6683F",
    "#3D0D26", "#660A3E", "#891C56", "#B0276F", "C93482",
    "#082136", "#00294D", "#004B8D", "#0068C4", "2998FF",
    "#3C4631", "#9A746F", "#F8A2AB", "#F1C6B3", "EAE9C0",
    "#FF534E", "#FFD7AC", "#BED194", "#499989", "176785",
    "#006D80", "#BDA44D", "#3C2000", "#84CECC", "78A419",
    "#352C2B", "#3C555C", "#9E9657", "#FFEBCD", "CD5510",
    "#2C3E50", "#FC4349", "#6DBCDB", "#D7DADB", "FFFFFF",
    "#523631", "#D1BE91", "#605E3A", "#4D462F", "592F39",
    "#18293B", "#5B5A56", "#F2DEA0", "#D0B580", "FFFBFF",
    "#C8DBB6", "#ECEBB7", "#CCC68A", "#B8B165", "827A5D ",
    "#7DA88C", "#EBE9A0", "#BED24B", "#859132", "35323C",
    "#E8574C", "#F27B29", "#E6A51B", "#D9CC3C", "399977",
    "#324032", "#B7C22C", "#FFFFE1", "#22A8B5", "2A3F42",
    "#B3A589", "#FFB896", "#FFF9B1", "#9AB385", "11929E",
    "#272433", "#343F4F", "#3D6066", "#77994D", "B2D249",
    "#250701", "#6D4320", "#B0925F", "#E7DEC0", "82ABB8",
    "#023550", "#028A9E", "#04BFBF", "#EFEFEF", "FF530D",
    "#594732", "#40342A", "#7A422E", "#D4CA9A", "EDE5AE",
    "#013C4D", "#BA5B22", "#DB913C", "#F0B650", "FAD46B",
    "#143840", "#5C6B63", "#A69E89", "#E0C297", "D96523",
    "#3FB8AF", "#7FC7AF", "#DAD8A7", "#FFB38B", "FF3F34",
    "#CA3995", "#F58220", "#FFDF05", "#BED73D", "61BC46",
    "#FFE1D0", "#FFBFB4", "#FF837E", "#FF4242", "BF1616",
    "#C4EEFF", "#7BA32D", "#094201", "#A41717", "C48726",
    "#001325", "#187072", "#90BD90", "#D7D8A2", "F2E4C2",
    "#1A4F63", "#068587", "#6FB07F", "#FCB03C", "FC5B3F",
    "#97B350", "#333230", "#736D61", "#BAAB90", "FFE5BA",
    "#403D33", "#807966", "#CCC2A3", "#8C0000", "590000",
    "#5F8A42", "#86AD59", "#F6FAA1", "#F28410", "D66011",
    "#BF355D", "#ED8168", "#FAB66A", "#F2DC86", "83BFA1",
    "#E1F03E", "#FFBA14", "#DB3A0F", "#A1003D", "630024",
    "#212226", "#45433F", "#687067", "#BDBB99", "F0EAC3",
    "#FE4365", "#FC9D9A", "#F9CDAD", "#C8C8A9", "83AF9B",
    "#293B47", "#5F7A87", "#FFFFFF", "#CBFF48", "00ADA9",
    "#282A33", "#697371", "#FFE7A6", "#F5BA52", "FA8000",
    "#0C304A", "#2B79A1", "#F3F4F1", "#85A71E", "BFD841",
    "#008B83", "#4DAE83", "#A0AE79", "#FFE499", "FF665E",
    "#5D7359", "#E0D697", "#D6AA5C", "#8C5430", "661C0E",
    "#324452", "#97BDBF", "#F2DFBB", "#F28705", "BF3604",
    "#EEEFB9", "#6ACFAE", "#369C93", "#232928", "B03831",
    "#332F45", "#015770", "#2A8782", "#9FD6AE", "FFFED2",
    "#2B2830", "#5C504F", "#ABAB8E", "#D9D7A3", "C7BE88",
    "#DC941B", "#EDC266", "#B6952C", "#E1D3A6", "E9A119",
    "#00305A", "#00448D", "#0074D9", "#4192D9", "7ABAF2",
    "#344459", "#485F73", "#5DA6A6", "#A9D9CB", "F2EAD0",
    "#060719", "#4D1B2F", "#9E332E", "#EB6528", "FC9D1C",
    "#96CEB4", "#FFEEAD", "#FF6F69", "#FFCC5C", "AAD8B0",
    "#05F2F2", "#04BFBF", "#EEF1D9", "#A60201", "7E100E",
    "#E6F1F5", "#636769", "#AAB3B6", "#6E7476", "4B4E50",
    "#DA0734", "#F1A20D", "#4AABB1", "#FCF3E7", "3F1833",
    "#202D44", "#FC4349", "#6DBCDB", "#D7DADB", "FFFFFF",
    "#CC3B37", "#398899", "#FFFCE8", "#FF857F", "CCC1A3",
    "#5DBEA9", "#EFEDDF", "#EF7247", "#4E3F35", "D1CBBA",
    "#FFC62D", "#E49400", "#DD5200", "#EFE38A", "91B166",
    "#B67D14", "#F2921F", "#F0B23E", "#A62409", "441208",
    "#C71B1B", "#D6BA8A", "#017467", "#E08F23", "0B0D0C",
    "#474143", "#A69E9D", "#E7E2DA", "#FFFFFF", "E7E8E7",
    "#435772", "#2DA4A8", "#FEAA3A", "#FD6041", "CF2257",
    "#6DD19D", "#99E89D", "#D0E8A1", "#FFF9C0", "D40049",
    "#FAF1D5", "#DEC9AC", "#CCA18B", "#11282D", "A5C4BB",
    "#000000", "#141414", "#1C1919", "#1A1716", "24201F",
    "#D5D8DD", "#5CA2BE", "#135487", "#2A4353", "989DA4",
    "#73161E", "#BF0F30", "#BFB093", "#037F8C", "0A2140",
    "#195962", "#F56F6C", "#FFFFFF", "#252932", "191C21",
    "#F8EFB6", "#FEBAC5", "#6CD1EA", "#FACFD7", "C2EAE9",
    "#91D6BC", "#768C6A", "#755F31", "#B37215", "FFBA4B",
    "#F2E6BB", "#DD4225", "#202724", "#63BD99", "F8FDD8",
    "#762B1B", "#807227", "#CCBF7A", "#FFEF98", "60B0A1",
    "#707864", "#C1D74E", "#F5FF7C", "#DFE6B4", "A6B89C",
    "#FFF3D2", "#97B48F", "#E87657", "#FF9B6F", "E8D495",
    "#33262E", "#733230", "#CC5539", "#E6D27F", "86A677",
    "#122430", "#273E45", "#FFFCE2", "#EBD2B5", "E63531",
    "#30394F", "#FF434C", "#6ACEEB", "#EDE8DF", "FFFBED",
    "#0A3A4A", "#196A73", "#32A6A6", "#A1BF36", "C8D94A",
    "#FFF7CC", "#CCC28F", "#70995C", "#33664D", "142933",
    "#43464D", "#9197A6", "#D3DCF2", "#7690CF", "48577D",
    "#DFE0AF", "#A4BAA2", "#569492", "#41505E", "383245",
    "#B52841", "#FFC051", "#FF8939", "#E85F4D", "590051",
    "#473C35", "#A36D5C", "#9C968B", "#D9CEAD", "8A866A",
    "#DB4C39", "#2D3638", "#109489", "#44D487", "D0DB86",
    "#6F8787", "#AEC2AE", "#E6DFAE", "#B0B57B", "888F51",
    "#C8385A", "#FFCF48", "#ECEABE", "#1FCECB", "1CA9C9",
    "#42282E", "#75A48B", "#D9CFB0", "#DC9B74", "D6665A",
    "#362F2D", "#4C4C4C", "#94B73E", "#B5C0AF", "FAFDF2",
    "#98293A", "#B14A58", "#C86C6B", "#DE9D76", "EFC77F",
    "#C1D301", "#76AB01", "#0E6A00", "#083500", "042200",
    "#453F22", "#7A6B26", "#CCAD5C", "#A1191F", "4E1716",
    "#541E32", "#8E3557", "#88A33E", "#C2BD86", "F7F2B2",
    "#2B1B2E", "#54344D", "#FFFFD6", "#B89E95", "6E444F",
    "#6EC1A5", "#9FBEA6", "#F5D3A3", "#FF9F88", "FB7878",
    "#2F252C", "#D3CCB2", "#99AD93", "#6E6751", "5C3122",
    "#BE333F", "#F2E9CE", "#C8C5B1", "#939F88", "307360",
    "#F0F1F2", "#232625", "#647362", "#B3D929", "D2D9B8",
    "#FA2B31", "#FFBF1F", "#FFF146", "#ABE319", "00C481",
    "#09455C", "#527E7C", "#F5FFCC", "#E0EB6E", "C4D224",
    "#F2DA91", "#F2B950", "#F29D35", "#D96704", "BF4904",
    "#A2CFA5", "#E0E7AB", "#F5974E", "#E96B56", "D24344",
    "#150033", "#310D42", "#5C2445", "#AB6946", "FFCE4C",
    "#23A38F", "#B7C11E", "#EFF1C2", "#F0563D", "2E313D",
    "#FF2468", "#E0D4B1", "#FFFFE3", "#00A5A6", "005B63",
    "#65A683", "#218777", "#3F585F", "#47384D", "F53357",
    "#000623", "#28475C", "#4A6C74", "#8BA693", "F0E3C0",
    "#E65322", "#D19552", "#B8BF73", "#B6DB83", "FFF991",
    "#112F41", "#068587", "#6FB07F", "#FCB03C", "FC5B3F",
    "#C89B41", "#A16B2B", "#77312B", "#1C2331", "152C52",
    "#C24366", "#D9C099", "#FFF8D8", "#A8E0BA", "00ADA7",
    "#CC0000", "#006600", "#FFFFEC", "#9C9178", "6C644F",
    "#3D0319", "#720435", "#C1140E", "#FC5008", "32241B",
    "#CFC7A4", "#5A9E94", "#005275", "#002344", "A38650",
    "#FFEBC3", "#CC3A00", "#FF3600", "#FF851B", "800C00",
    "#EFC164", "#F3835D", "#F35955", "#286275", "00434C",
    "#E9F29D", "#B7C29D", "#878E8F", "#67617A", "51456B",
    "#445859", "#03A696", "#49C4BE", "#F1F2E4", "FF7746",
    "#FA726C", "#FFD794", "#BAD174", "#3BA686", "5F6F8C",
    "#4D2B1F", "#635D61", "#7992A2", "#97BFD5", "BFDCF5",
    "#CC4D00", "#E6CF73", "#668059", "#264D4D", "00CCB3",
    "#4385F5", "#DC4437", "#FCBE1F", "#109D59", "FFFFFF",
    "#271F2E", "#A4A680", "#F2EBC9", "#D9B166", "A66B38",
    "#0B2C3C", "#FF6666", "#DADFE1", "#FFFFFF", "444444",
    "#CFF09E", "#A8DBA8", "#79BD9A", "#3B8686", "0B486B",
    "#302B26", "#A6B827", "#EDE9DD", "#98D3D4", "594E7A",
    "#4B0505", "#720707", "#BFB694", "#004659", "00292B",
    "#B52C38", "#EBD1B0", "#536682", "#D9964B", "DE6846",
    "#F2F1DF", "#F2B705", "#F2C84B", "#BF820F", "734002",
    "#26140C", "#3D2216", "#784E3D", "#AB8574", "D6BCB1",
    "#26221D", "#8C2C0F", "#E6E5B8", "#BFB38D", "402D1F",
    "#1F8181", "#F2BC79", "#F28972", "#BF1B39", "730240",
    "#002635", "#013440", "#AB1A25", "#D97925", "EFE7BE",
    "#8EC447", "#FFFFFF", "#96D3D4", "#636466", "2D2D2E",
    "#2D1E1E", "#4B3C37", "#96A576", "#CDE196", "FFFFBE",
    "#F06060", "#FA987D", "#F7F2CB", "#72CCA7", "10A296",
    "#1D8281", "#44BF87", "#FBD258", "#F29A3F", "DB634F",
    "#DEDE91", "#EF9950", "#F34E52", "#C91452", "492449",
    "#6D8EAD", "#1F3447", "#1A0B07", "#362416", "CFCDB4",
    "#00CD73", "#008148", "#2D9668", "#3ECD8E", "004E2C",
    "#3D8080", "#628282", "#858383", "#A38282", "C28080",
    "#475159", "#839795", "#B2BDB7", "#CCC9C0", "F2F2F2",
    "#0E6870", "#C6B599", "#C65453", "#FFDDB4", "EDAA7D",
    "#CEF0B7", "#A8DBA8", "#79BD9A", "#3B8686", "0B486B",
    "#292C44", "#FF5349", "#F0F0F1", "#18CDCA", "4F80E1",
    "#272A2B", "#383737", "#473B39", "#692B28", "940500",
    "#D6C274", "#DB9E46", "#25706B", "#3D2423", "AB362E",
    "#FFA68F", "#FF4867", "#FFF9C8", "#B5EBB9", "18B29D",
    "#A1A16A", "#727D59", "#366353", "#133C40", "03212E",
    "#D45354", "#A9DC3A", "#2FCAD8", "#818B85", "CDCDC1",
    "#F14B6A", "#3D3C3E", "#22BDAF", "#BAD7D4", "F4F4F4",
    "#FFE2C5", "#FFEEDD", "#FFDDAA", "#FFC484", "FFDD99",
    "#9FFF4A", "#1ABF93", "#087363", "#004040", "2F1933",
    "#FFDB97", "#B28F4E", "#FFFDFB", "#466CB2", "97BBFF",
    "#991C00", "#E09A25", "#FFFCDB", "#008B83", "262B30",
    "#44281A", "#00ACAE", "#F5EFD5", "#F37606", "EE4717",
    "#FF5952", "#FCEEC9", "#96D6D9", "#4FAAC9", "176075",
    "#5C4B51", "#8CBEB2", "#F2EBBF", "#A5C88F", "EF847B",
    "#105F73", "#F7F3B2", "#C6CC33", "#F28322", "CC5404",
    "#137072", "#56B292", "#B7F5AB", "#FBFFC0", "BF223D",
    "#E3F23E", "#6C821C", "#A6A53F", "#E0E0AC", "33302E",
    "#00215E", "#003CAA", "#1967F7", "#5E4000", "AA7400",
    "#273A3D", "#54695C", "#AD9970", "#FFBF87", "FF8F60",
    "#FFAA00", "#C2B93E", "#808F5D", "#576157", "302F30",
    "#BE1405", "#F2DCAC", "#AABEAA", "#736E41", "413C2D",
    "#6B1229", "#C76A61", "#FAB99A", "#F7D9B5", "CCB1A7",
    "#2D9993", "#58B3A3", "#83BFA3", "#B0D9A8", "FFFCB6",
    "#334D5C", "#45B29D", "#EFC94C", "#E27A3F", "DF5A49",
    "#F30B55", "#010326", "#012840", "#54717F", "F2E6CE",
    "#2A3411", "#73662C", "#BC9847", "#FFDFB2", "6B0031",
    "#637D74", "#403D3A", "#8C3B3B", "#AB6937", "D4A960",
    "#010A26", "#011640", "#B6D6F2", "#FFFFFF", "E83338",
    "#924847", "#EB986C", "#E4C678", "#9C7885", "372C2C",
    "#022440", "#3F95AA", "#4EC6DE", "#EAE2DF", "F7572F",
    "#2B1D2E", "#323657", "#076473", "#54B087", "D6F567",
    "#052229", "#004043", "#BCC373", "#E3FF55", "D0D90C",
    "#4C514A", "#907A62", "#879796", "#755854", "B09880",
    "#1D2939", "#1CAF9A", "#FFFFFF", "#EE4F4B", "D1DC48",
    "#004B67", "#41CCB4", "#FFEA95", "#FF7C5D", "C70151",
    "#C0272D", "#FCFBE7", "#9FD3DA", "#008C9A", "05484F",
    "#213130", "#FF5E3D", "#C9C83E", "#FDFFF1", "559398",
    "#B1E4FC", "#366D78", "#39D5F1", "#FFFFFF", "D9FF03",
    "#DECE6C", "#FCF9B6", "#BFE3B5", "#5D826E", "262E2B",
    "#520A17", "#668F91", "#F5E6AC", "#AB8E5B", "52301C",
    "#2D3032", "#DD5F18", "#FBA922", "#F7F7F7", "404333",
    "#0C2538", "#2B434F", "#638270", "#BCC98E", "EDE059",
    "#E85066", "#F28E76", "#E6CEB0", "#5A8C81", "382837",
    "#BF2633", "#A6242F", "#D9CEAD", "#C0B18F", "011C26",
    "#002A4A", "#17607D", "#FFF1CE", "#FF9311", "E33200",
    "#0A8B91", "#485956", "#C4B98F", "#FFF9BC", "EEDF2E",
    "#B89A7B", "#9BBAAC", "#F2D649", "#D95D50", "DBDBDB",
    "#BD7938", "#8D4421", "#643001", "#532700", "3A1C00",
    "#E1E6FA", "#C4D7ED", "#ABC8E2", "#375D81", "183152",
    "#2E4259", "#F7483B", "#ECF0F1", "#03C8FA", "737373",
    "#364656", "#5D6B74", "#94A4A5", "#F2F5E9", "FF8C31",
    "#3E5916", "#93A605", "#F28705", "#F25C05", "E5EFFA",
    "#248077", "#74AD8D", "#C82754", "#F7BB21", "F9E2B7",
    "#20736A", "#8BD9CA", "#B1D95B", "#93A651", "403E34",
    "#D74B4B", "#DCDDD8", "#475F77", "#354B5E", "FFFFFF",
    "#252F33", "#415C4F", "#869C80", "#93C2CC", "CEEAEE",
    "#012840", "#79C7D9", "#9BF2EA", "#497358", "9DBF8E",
    "#EE7E94", "#F8B4C4", "#C7CAC9", "#D8505C", "41424",
    "#282828", "#505050", "#FFFFFF", "#2DCEDB", "F20000",
    "#004358", "#1F8A70", "#BEDB39", "#FF5347", "FD7400",
    "#470C3B", "#802F56", "#C0576F", "#E38679", "FFBD83",
    "#573328", "#B05A3A", "#FF8548", "#29332E", "0F1B1C",
    "#461F2D", "#E1FFBB", "#BAD47F", "#849C23", "52533F",
    "#333A40", "#4C5E5E", "#ADD0E5", "#CDE4FF", "729EBF",
    "#DE5605", "#F7A035", "#B1DEB5", "#EFECCA", "65ABA6",
    "#76D6D2", "#F9E270", "#EF6F56", "#F4EED8", "596B56",
    "#403E3F", "#F2F2F2", "#D9D9D9", "#9DAABB", "8C8C8C",
    "#059E9A", "#F4F2ED", "#F5A243", "#DB3E3B", "585857",
    "#FFBF41", "#EE8943", "#C02221", "#FFF4D3", "249CA9",
    "#024E76", "#39A6B2", "#FCE138", "#F5B824", "F08106",
    "#FF0067", "#FF3D6A", "#E7FF04", "#9CFF00", "56FF00",
    "#003540", "#0D3F40", "#487360", "#8FA671", "F2D795",
    "#FF493C", "#FFFFFF", "#B3ECEF", "#31C4F5", "ADEB41",
    "#244358", "#4A8B87", "#7CBCAE", "#F0D4AF", "C5252B",
    "#EA5930", "#F8AF1E", "#F5E5C0", "#097380", "372560",
    "#A1DBB2", "#FEE5AD", "#FACA66", "#F7A541", "F45D4C",
    "#2C4A47", "#6C9A7F", "#BB523D", "#C89D11", "81810B",
    "#F0F1F2", "#232625", "#647362", "#FF5629", "D2D9B8",
    "#7C9B5F", "#B8D197", "#E3FFF3", "#9BDEC7", "568F84",
    "#E54E45", "#DBC390", "#F2F2EF", "#13A3A5", "403833",
    "#77A7FB", "#E57368", "#FBCB43", "#34B67A", "FFFFFF",
    "#001A2E", "#8F0000", "#FFFFFF", "#8A874B", "41594F",
    "#312F40", "#49A69C", "#EFEAC5", "#E89063", "BF5656",
    "#047C8C", "#018B8D", "#F3BF81", "#F49B78", "F1706D",
    "#00303E", "#7096AD", "#C1D1DE", "#FFF9EF", "EC4911",
    "#2D6891", "#70A0BF", "#F5EEDC", "#DC4C1A", "F0986C",
    "#040002", "#3D1309", "#E8B96A", "#BC5D15", "5C0F00",
    "#8B929C", "#5E6070", "#514454", "#3B313D", "FF2479",
    "#142D58", "#447F6E", "#E1B65B", "#C8782A", "9E3E17",
    "#22104D", "#2D1E5E", "#483A85", "#7067AB", "A49CFA",
    "#919C86", "#9E373E", "#2B2E36", "#D1B993", "C45A3B",
    "#332F45", "#015770", "#2A8782", "#9FD6AE", "FFFED2",
    "#37C78F", "#FEE293", "#FF4D38", "#CC2249", "380C2A",
    "#47282C", "#8C8468", "#C9B37F", "#DBDAB7", "C4C49C",
    "#14191A", "#2D2B21", "#A69055", "#CCB287", "FFB88C",
    "#F5E3CD", "#696158", "#B6A898", "#877D71", "504A43",
    "#005151", "#009393", "#F56200", "#454445", "969692",
    "#D95F47", "#FFF2C1", "#80A894", "#106153", "072C36",
    "#9E352C", "#E6E8A9", "#93C28C", "#2E5A5C", "2B2623",
    "#03013A", "#334A94", "#6B9EDF", "#83C3F2", "99E6FF",
    "#372A26", "#4D4D4D", "#6DA0A7", "#9ED5A8", "C7F5FF",
    "#03658C", "#022E40", "#F2B705", "#F28705", "F25C05",
    "#FF3B16", "#E87826", "#E8BA4A", "#80A272", "003045",
    "#00748E", "#E3DFBB", "#F4BA4D", "#E3753C", "DA3B3A",
    "#25401E", "#56732C", "#84A63C", "#B8D943", "EAF2AC",
    "#449BB5", "#043D5D", "#EB5055", "#68C39F", "FFFCF5",
    "#108F97", "#FF8B6B", "#FFE39F", "#16866D", "103636",
    "#1A4F63", "#068F86", "#6FD57F", "#FCB03C", "FC5B3F",
    "#381C19", "#472E29", "#948658", "#F0E99A", "362E29",
    "#D7E8F7", "#BBD0E3", "#9CB7CF", "#6A8BAB", "375D81",
    "#0F1C28", "#136972", "#67BFA7", "#F3CF5B", "F07444",
    "#FFFFFF", "#4EA9A0", "#969514", "#FE9C03", "FCDE8E",
    "#2F2D30", "#656566", "#65537A", "#51386E", "2A2333",
    "#4C2916", "#F05A28", "#FBAF3F", "#38B449", "FFFFFF",
    "#132537", "#006C80", "#EBCAB8", "#FE8315", "FA3113",
    "#ECEEE1", "#A8DACF", "#F05B4F", "#D8403A", "221E1F",
    "#00305A", "#004B8C", "#0074D9", "#4192D9", "7ABAF2",
    "#72CF3F", "#85FF00", "#23E000", "#2FB81B", "00FF1C",
    "#45CEEF", "#FFF5A5", "#FFD4DA", "#99D2E4", "D8CAB4",
    "#FF5B00", "#A1716C", "#728296", "#439AAB", "00CABD",
    "#EB6C2D", "#D9C8A2", "#939C80", "#496158", "232F38",
    "#D94214", "#FFF2C1", "#80A894", "#52736B", "093844",
    "#4D1B2F", "#9E332E", "#EB6528", "#FC9D1C", "FFCA50",
    "#FFEEB0", "#9AE8A4", "#C7C12D", "#F76245", "ED1C43",
    "#FFFAED", "#D4DBFF", "#879AC9", "#242942", "FF8800",
    "#022840", "#013440", "#517360", "#9DA67C", "F2DC99",
    "#331A0F", "#519994", "#BA4B3C", "#EEDDAA", "789F63",
    "#577867", "#EDCE82", "#D68644", "#AB3229", "662845",
    "#435A66", "#88A6AF", "#F5F2EB", "#D9CDB8", "424342",
    "#FF8840", "#958D4F", "#737B55", "#595540", "513E38",
    "#9D805A", "#EBC99D", "#FFE6C5", "#9DCEEA", "4B809E",
    "#272D40", "#364659", "#55736D", "#9DBF8E", "D0D991",
    "#23A38F", "#B7C11E", "#EFF1C2", "#F0563D", "2E313D",
    "#98C000", "#3D4C53", "#EA2E49", "#FFE11A", "0CDBE8",
    "#A20E30", "#E93C4F", "#DCDCD4", "#ADBCC3", "2D4255",
    "#1C2640", "#263357", "#384C80", "#4E6AB3", "5979CD",
    "#D94214", "#FFF2C1", "#80A894", "#52736B", "093844",
    "#3B596A", "#427676", "#3F9A82", "#A1CD73", "ECDB60",
    "#1E1E1F", "#424143", "#67666A", "#807F83", "CBC9CF",
    "#E04946", "#3BA686", "#B6D15D", "#FFD495", "FA847E",
    "#FFEBB0", "#FFB05A", "#F84322", "#C33A1A", "9F3818",
    "#FFA136", "#FF814A", "#E6635A", "#785D6B", "534557",
    "#CDCF91", "#EBEACC", "#D6D5B8", "#6D7D80", "41545E",
    "#011526", "#011C40", "#4E8DA6", "#F2EA79", "F2B33D",
    "#353230", "#3F4E51", "#7B8F70", "#99B2BE", "F6F4EA",
    "#063559", "#0D8C7F", "#8FBF4D", "#F2D13E", "D95929",
    "#158000", "#199900", "#20BF00", "#24D900", "29FF00",
    "#0B0D0E", "#137074", "#7EB7A3", "#F1DDBB", "EC6766",
    "#02151A", "#043A47", "#087891", "#C8C8C8", "B31D14",
    "#59361F", "#5C992E", "#A3CC52", "#E6E673", "FF5933",
    "#FE4365", "#FC9D9A", "#F9CDAD", "#C8C8A9", "83AF9B",
    "#4B1E18", "#F9E5C2", "#BBB082", "#829993", "4F5D4E",
    "#032843", "#1F595B", "#508C6D", "#71A670", "A6DB89",
    "#191724", "#4C4547", "#8C594E", "#D18952", "FDB157",
    "#191919", "#182828", "#60702D", "#AAB232", "E6FA87",
    "#212A3F", "#434F5B", "#F2F2F2", "#8AB839", "2E2E2E",
    "#004158", "#026675", "#038B8B", "#F1EEC9", "F09979",
    "#023059", "#3F7EA6", "#F2F2F2", "#D99E32", "BF5E0A",
    "#F21E52", "#FFFFFF", "#3D3B42", "#0C6F73", "63CFD4",
    "#452743", "#E7635E", "#F8E9A8", "#89E0AD", "00928C",
    "#FAAD63", "#D1714D", "#785E48", "#39403B", "3D1C24",
    "#4C0016", "#FFF7EB", "#DCCEA7", "#A17345", "104F53",
    "#BF2431", "#F24150", "#2A4557", "#3B848C", "EFF2E4",
    "#3B3013", "#8F6031", "#E88833", "#9C0C0A", "FDF3C1",
    "#1E2422", "#88BEB1", "#FF006D", "#DAFFFF", "718A94",
    "#F1F4F7", "#AF9F7B", "#775E43", "#40413C", "251C17",
    "#00182E", "#0C6BA1", "#D4D6D4", "#FFFDEB", "FF7500",
    "#FFAB4A", "#CCBAAB", "#1E2129", "#3D5E6E", "47A3A3",
    "#66B3A7", "#C0D4B6", "#EEF0BD", "#F0563D", "2C2F3B",
    "#332525", "#907465", "#EDC5B5", "#878C6D", "63674A",
    "#F04C16", "#DBDBD0", "#EDBD1F", "#4CB09C", "313B4A",
    "#2B211D", "#611C26", "#C5003E", "#8EB7A8", "F1E4B7",
    "#1A1F2B", "#30395C", "#4A6491", "#85A5CC", "D0E4F2",
    "#03497E", "#0596D5", "#9DEBFC", "#999999", "FE4B28",
    "#2F4159", "#465E73", "#88A649", "#F2ECE4", "D98841",
    "#323A46", "#22282F", "#EB4A33", "#FFFFFF", "E9F0F5",
    "#2C3E50", "#FC4349", "#6DBCDB", "#D7DADB", "FFFFFF",
    "#F29727", "#E05723", "#B0382F", "#982E4B", "713045",
    "#4D584A", "#465943", "#428552", "#3E754E", "4C694B",
    "#47191C", "#59574B", "#829690", "#B5B09A", "E1E3CB",
    "#1D5123", "#B1C661", "#FFDA68", "#FE9257", "F64448",
    "#59323C", "#260126", "#F2EEB3", "#BFAF80", "8C6954",
    "#4E0805", "#9E0522", "#FFF4D4", "#B8C591", "447622",
    "#424862", "#FB9A63", "#BFC4D5", "#F6FBF4", "FEBC98",
    "#FF2468", "#E0D4B1", "#FFFFE3", "#00A5A6", "005B63",
    "#1C2F40", "#4C6173", "#8094A6", "#D9D1BA", "F2E9D8",
    "#DFD7B7", "#EB7707", "#5C5445", "#3B2323", "9CBFC7",
    "#262E3B", "#9C8878", "#CFCAAA", "#FBF8FF", "992435",
    "#FFBC67", "#DA727E", "#AC6C82", "#685C79", "455C7B",
    "#404A69", "#516C8A", "#8AC0DE", "#FFFFFF", "FFAC00",
    "#485B61", "#4B8C74", "#74C476", "#A4E66D", "CFFC83",
    "#A31180", "#C42795", "#DE52B4", "#EA88CE", "FFBFE5",
    "#E64D2E", "#FFF5F1", "#7893AD", "#576B9C", "2D2A52",
    "#BF0436", "#8C0327", "#590219", "#F2CBA1", "8C674C",
    "#CF5B6F", "#FFF8C8", "#CAD9B1", "#8FB3A0", "648991",
    "#341D44", "#744D90", "#BB8CDD", "#3E4417", "88904D",
    "#00293E", "#003D4E", "#006269", "#00918F", "00BAB5",
    "#43212E", "#D9666F", "#F2D57E", "#A9A688", "516057",
    "#2A3B30", "#ABFFD1", "#EBFFF5", "#9DFEFF", "273B40",
    "#A63343", "#E65159", "#F5E9DB", "#F4F7CF", "BAD984",
    "#1BA68C", "#54BFAC", "#F2EDA7", "#F2E530", "D94625",
    "#1A2A40", "#3F7369", "#F2DEA0", "#CE5251", "EA895E",
    "#1E9382", "#70A758", "#EFF1C2", "#F0563D", "2E313D",
    "#A991E8", "#FFB4BB", "#ACF7FF", "#A2E891", "FFEDAE",
    "#225B66", "#17A3A5", "#8DBF67", "#FCCB5F", "FC6E59",
    "#282624", "#BFB7AA", "#403D39", "#807A71", "ABA398",
    "#334D5C", "#45B29D", "#EFC94C", "#E27A3F", "DF4949",
    "#440008", "#605521", "#988432", "#D9A54E", "9E3711",
    "#649670", "#36291E", "#69AD6C", "#92E67C", "C5FF84",
    "#42342C", "#738076", "#B2B39B", "#DFE5E1", "294359",
    "#1A3838", "#3F7A51", "#82A352", "#D1C062", "FFBE59",
    "#7D8C22", "#B3BF67", "#F2E49B", "#D9DFF4", "6791BF",
    "#8A7D6D", "#2D2D38", "#E86E48", "#FFFFE8", "9CC9C9",
    "#CFC949", "#FFF5BF", "#A9E6C4", "#6AB39F", "665841",
    "#A1172D", "#FDFFBA", "#A7DB9E", "#275C57", "1F1B19",
    "#FF6C0D", "#F29E00", "#E6C10F", "#44996F", "216273",
    "#2C3E50", "#FA4248", "#D7DADB", "#6DBCDB", "FFFFFF",
    "#627369", "#99B397", "#E2F2C6", "#91CCAD", "376266",
    "#04496E", "#66CAFF", "#A3FC7E", "#70D44A", "2C6B0F",
    "#1BA68C", "#97BF3F", "#F2ECD8", "#F2B035", "F2522E",
    "#A2D9B1", "#7CBF9E", "#F2F1B9", "#8C8575", "193741",
    "#024959", "#037E8C", "#F2EFDC", "#E74C30", "363636",
    "#212625", "#9CA6A2", "#D0D9D6", "#BF0404", "C2C6AF",
    "#00FFFF", "#00FF00", "#FFFF00", "#FF5100", "FF007C",
    "#212629", "#CDCF19", "#FFF77D", "#96C4AB", "CF2A56",
    "#CFF9FF", "#BFC7BB", "#787051", "#332730", "57324F",
    "#98CACB", "#FDEFBE", "#F0542B", "#736E5B", "ABA68E",
    "#F2F1EB", "#BFB9A4", "#262222", "#802A30", "8C0303",
    "#65356B", "#AB434F", "#C76347", "#FFA24C", "519183",
    "#78BF82", "#A4D17C", "#CFD96C", "#EBD464", "FFD970",
    "#806265", "#FFA256", "#F7DD77", "#E0D054", "ABA73C",
    "#8F323C", "#123943", "#80BDDB", "#4189AB", "C98127",
    "#683820", "#8C9A89", "#E7D6A2", "#BEAA65", "9A8234",
    "#021B21", "#032C36", "#065F73", "#E8DFD6", "FF2A1D",
    "#2D6C73", "#3FA693", "#B4D9CB", "#9ABF49", "C6D93B",
    "#141F26", "#2B4040", "#405950", "#A69E86", "F2D9BB",
    "#4A8279", "#003330", "#610400", "#003B06", "02730F",
    "#69B5E1", "#D4E4F5", "#EAF2F8", "#BEDBED", "000000",
    "#893660", "#EF7261", "#68D693", "#A0D7E2", "299CA8",
    "#073A59", "#2D9AA6", "#F2E2DC", "#F23322", "A61B1B",
    "#2A3A48", "#3E6372", "#B2D4DC", "#FAFAFF", "FF6900",
    "#F3BD8D", "#F1A280", "#BE6D6B", "#704A5B", "3E263C",
    "#1C2742", "#3C91C7", "#5A9ABE", "#95C5DE", "E0EEFB",
    "#426261", "#465A59", "#577573", "#739A97", "9AC1C0",
    "#002A4A", "#17607D", "#FFF1CE", "#FF9311", "D64700",
    "#589373", "#BFBD99", "#F2D6B3", "#C2512F", "241E1E",
    "#1F518B", "#1488C8", "#F7E041", "#E2413E", "B5292A",
    "#549494", "#E85649", "#232C2E", "#E6E8D2", "706558",
    "#392133", "#FFECBE", "#D9D098", "#C4AB6D", "AB7D3A",
    "#F0F0F0", "#1C1C1C", "#A2FDF5", "#1CCDC7", "27EDDF",
    "#011526", "#025959", "#027353", "#03A678", "03A696",
    "#004358", "#1F8A70", "#BEDB39", "#FFE11A", "FD7400",
    "#37465D", "#F2F2F2", "#9DC02E", "#779324", "051A37",
    "#580022", "#AA2C30", "#FFBE8D", "#487B80", "011D24",
    "#F9F9F9", "#03A678", "#E9EDEB", "#F44647", "00707F",
    "#800000", "#BF0000", "#E2D6C2", "#F6EDD8", "FFFFFF",
    "#F7F6AF", "#1B2124", "#D62822", "#97D6A6", "468263",
    "#432852", "#992255", "#FF3D4C", "#28656E", "00968F",
    "#444344", "#52BBB2", "#2B344D", "#EE5555", "F8F7EE",
    "#45334A", "#796B7D", "#CCC4B0", "#FFF1B5", "FFA3A3",
    "#5A4B53", "#9C3C58", "#DE2B5B", "#D86A41", "D2A825",
    "#14151C", "#0C242B", "#297059", "#84D66E", "D1FB7A",
    "#272D40", "#364659", "#55736D", "#9DBF8E", "D0D991",
    "#23A38F", "#B7C11E", "#EFF1C2", "#F0563D", "2E313D",
    "#2E064D", "#80176B", "#B356A1", "#59580B", "FFFF00",
    "#CC3333", "#FF9D33", "#F7F7F0", "#3EBBA7", "00747A",
    "#5C4B51", "#8CBEB2", "#F2EBBF", "#F3B562", "BD6060",
    "#0D3E58", "#1C848C", "#19C0C2", "#F3EDD6", "DA6260",
    "#022629", "#2A5945", "#FAFFED", "#E6DCC0", "B3371C",
    "#F4FAC7", "#7BAD8D", "#FFB159", "#F77F45", "C2454E",
    "#A2C1C6", "#86B1B7", "#AECBAD", "#CFDCB0", "D6E1D1",
    "#B0DAFF", "#325B80", "#64B7FF", "#586D80", "5092CC",
    "#0F808C", "#6C8C26", "#F2A71B", "#F26A1B", "D91818",
    "#FFBC6C", "#FE9F6C", "#BD716E", "#74495F", "3B2C4D",
    "#FF4D41", "#F2931F", "#E6CA21", "#91B321", "1E8C65",
    "#302821", "#453629", "#5C4837", "#8A735F", "BDA895",
    "#415457", "#5F7B7F", "#9ACCAF", "#E6EBC4", "F9F7C8",
    "#474143", "#A69E9D", "#E7E2DA", "#FFFFFF", "E7E8E7",
    "#805939", "#BD9962", "#E6CD7D", "#578072", "2D4B4D",
    "#03588C", "#1763A6", "#419CA6", "#54BF83", "8DBF41",
    "#00CCFF", "#A1FCFF", "#040438", "#004878", "C9FAFF",
    "#534C64", "#B7DECF", "#F0F3D7", "#7E858C", "D96557",
    "#7F7364", "#CBB08E", "#CBC1B7", "#789DCB", "646F7F",
    "#5C2849", "#A73E5C", "#EC7263", "#FE9551", "FFD285",
    "#FF0012", "#FF7D00", "#FFD900", "#5BE300", "0084B0",
    "#F24C32", "#F29471", "#FCDFA6", "#36B898", "3D7585",
    "#083157", "#0A6C87", "#459C97", "#92CCA5", "C9F0B1",
    "#DC941B", "#EDC266", "#B6952C", "#E1D3A6", "E9A119",
    "#323836", "#BAD1B5", "#DBE8CF", "#F0F7E8", "FFFEF5",
    "#081724", "#589494", "#8EBBB4", "#D0DCD0", "F5EED2",
    "#50781C", "#9CAD1C", "#EAF7E6", "#40A5DE", "0B5191",
    "#537F79", "#78A68F", "#CBD49C", "#FED457", "CB252A",
    "#F23C13", "#CBAB78", "#FFFFFF", "#898373", "1F1C17",
    "#450003", "#5C0002", "#94090D", "#D40D12", "FFED75",
    "#0770A2", "#82D9F7", "#FEFEFE", "#AEC844", "F36622",
    "#30394F", "#FF434C", "#6ACEEB", "#EDE8DF", "0E6569",
    "#FF6B6B", "#556270", "#C7F464", "#4ECDC4", "EDC8BB",
    "#D9B500", "#FFED9C", "#BFCC85", "#748F74", "454545",
    "#452E32", "#A34B1B", "#B5A187", "#EDDF9A", "A7CC31",
    "#2C2B33", "#596664", "#909980", "#CCC08D", "FF8A00",
    "#C21F1F", "#FFFFFC", "#E34446", "#FFFFDB", "E36D6F",
    "#282828", "#00AAB5", "#C1C923", "#F41C54", "F5F0F0",
    "#3A3F40", "#202627", "#151B1E", "#EFF4FF", "41444D",
    "#DEBB73", "#4D0017", "#010000", "#4D0F30", "9A002F",
    "#EB9328", "#FFA754", "#FFD699", "#FFF5DC", "4FA6B3",
    "#025E73", "#037F8C", "#D9D59A", "#D9BD6A", "590202",
    "#636266", "#E0CEA4", "#E8A579", "#7D6855", "42403E",
    "#FF0000", "#FF4000", "#FF7F00", "#FFBF00", "FFFF00",
    "#FFFFFF", "#74ADA6", "#1E5E6F", "#241B1F", "68A81E",
    "#5A0532", "#FF6745", "#FFC861", "#9DAE64", "27404A",
    "#ACCBBC", "#467847", "#E8E4C1", "#A60303", "730202",
    "#5C4B51", "#8CBEB2", "#F2EBBF", "#F3B562", "F06060",
    "#0D2557", "#93A8C9", "#FFFFFF", "#F5DED5", "558D96",
    "#F53C4A", "#565157", "#10CFC8", "#F2EEE7", "F5D662",
    "#FFD97B", "#E65029", "#A60027", "#660033", "191C26",
    "#595408", "#A6800D", "#A66D03", "#A63F03", "730C02",
    "#2E031F", "#590424", "#8C072B", "#BF0A2B", "DEEFC5",
    "#E0C882", "#A6874E", "#BFA169", "#D9B779", "F2D399",
    "#D88681", "#A67673", "#746566", "#535A5D", "324F54",
    "#FC297D", "#FB607A", "#FDA286", "#FDC188", "FEE78A",
    "#FFECA1", "#B3B27F", "#4C5E52", "#2F3436", "FFBE2C",
    "#D93312", "#B3AB82", "#45735F", "#394D47", "2C3233",
    "#324143", "#6595A3", "#C8E3E8", "#FCFFED", "B6C28B",
    "#477984", "#FEF5EB", "#C03C44", "#EEAA4D", "313E4A",
    "#334D5C", "#45B29D", "#EFC94C", "#E27A3F", "DF4949",
    "#630B11", "#33322F", "#2A2927", "#1E1D1C", "000000",
    "#D94214", "#FFF2C1", "#80A894", "#52736B", "093844",
    "#051E21", "#00302D", "#856434", "#F28C28", "FFAD4E",
    "#D7DADD", "#DDDEE3", "#E1E1E9", "#EDEFF4", "F2F3F8",
    "#BF495E", "#41A693", "#F2EC9B", "#D9CF48", "D9583B",
    "#067072", "#14A589", "#DECFA6", "#BAAE8C", "F94B06",
    "#423A38", "#47B8C8", "#E7EEE2", "#BDB9B1", "D7503E",
    "#730324", "#DFE3E6", "#B4C4D4", "#8BA2BD", "456382",
    "#537374", "#F9BD7F", "#EBD7A5", "#ADC9A5", "5C9E99",
    "#88B59E", "#B6DEC8", "#39464D", "#C04229", "ABD1AB",
    "#11A7FC", "#95D127", "#F2E415", "#FF8638", "EE3551",
    "#212640", "#5D718C", "#4B95A6", "#60BFBF", "EFF2D8",
    "#D8A64D", "#9B5422", "#351411", "#5B0D0D", "991C11",
    "#53324F", "#668D6E", "#F2E0A0", "#F19B7A", "F0756E",
    "#DFE0AF", "#A4BAA2", "#569492", "#41505E", "383245",
    "#7BBADE", "#93DE7F", "#FFED5D", "#F29E4A", "FF7050",
    "#133800", "#1B4F1B", "#398133", "#5C9548", "93E036",
    "#D9D7AD", "#91A685", "#FF6A00", "#37485C", "1C232E",
    "#008767", "#FFB27A", "#FF6145", "#AB2141", "5E1638",
    "#727B7F", "#CCEAEA", "#7A7556", "#2E2125", "44CACC",
    "#FFFFED", "#FF2C38", "#FF9A3A", "#FFF040", "67D9FF",
    "#007148", "#60A859", "#9BDA6A", "#C7F774", "F9FFEF",
    "#092740", "#45698B", "#90B0CC", "#F1FAFF", "8FD36F",
    "#E2FFA0", "#7D8076", "#FAFFED", "#C2CCBE", "8F7D70",
    "#00736A", "#00BC9F", "#F1EEC7", "#FEA301", "F2561A",
    "#26282E", "#AD5138", "#F7F7F7", "#DDDAE0", "8594AE",
    "#1A191F", "#35352F", "#484042", "#4E5252", "E64D38",
    "#49454A", "#E69B02", "#FAF4C6", "#B1D631", "324052",
    "#5F1A2B", "#1D2834", "#6F8B78", "#E4D49E", "C96466",
    "#012D3D", "#38AD9E", "#FFEB9E", "#FF6867", "D0DBED",
    "#0D1F36", "#104954", "#1E9C89", "#38CC85", "60EB7B",
    "#8C4E03", "#9FA66A", "#F2EC94", "#F23005", "8B0F03",
    "#000001", "#20201F", "#E2E2E4", "#590402", "B80000",
    "#344059", "#465973", "#F2D272", "#A69460", "595139",
    "#33454C", "#608F85", "#B6E5CB", "#8BAF95", "54584E",
    "#FBFEF6", "#B7BFA4", "#687F70", "#1A3841", "BF3847",
    "#D7E836", "#86FFC7", "#FFB048", "#E8366C", "593BFF",
    "#34A9FF", "#5982DB", "#665EB8", "#684682", "632E62",
    "#004056", "#2C858D", "#74CEB7", "#C9FFD5", "FFFFCB",
    "#BFB978", "#84945C", "#516967", "#4D3130", "281B24",
    "#103B73", "#20638C", "#3786A6", "#4EABBF", "EBEFF2",
    "#9FB1BF", "#1D2D63", "#1C5357", "#1F6E56", "196331",
    "#FFEBBA", "#C3BD91", "#88947B", "#4C3F3F", "2A2727",
    "#347373", "#4EA6A6", "#91D9D9", "#FFFFFD", "F2E205",
    "#828948", "#EFDFC2", "#006971", "#DC533E", "840000",
    "#000137", "#29003F", "#79003D", "#D04D14", "F89801",
    "#370005", "#4B0005", "#5F0005", "#730005", "870005",
    "#C3AE8D", "#F25260", "#2D5F73", "#6BADC9", "8FCED6",
    "#9E1B36", "#F7EDBA", "#E69B3D", "#EB3355", "3D241D",
    "#1D8281", "#44BF87", "#FBD258", "#F29A3F", "DB634F",
    "#035C75", "#1B808C", "#31A6A8", "#F3F1BC", "F3AD14",
    "#FF7500", "#665130", "#EBB643", "#CEDAA8", "668E84",
    "#384D3A", "#3E6653", "#728053", "#A68357", "D97C71",
    "#012326", "#17455C", "#E1CAAB", "#FE8333", "FA4913",
    "#1A2944", "#2DA7C7", "#56ACBA", "#98C4C9", "CBD5D2",
    "#BF3542", "#CDC5BA", "#EBE3D6", "#3C3C3C", "2E2E2E",
    "#231921", "#695F74", "#BEB4CB", "#EBEBF0", "D2DCEB",
    "#34373F", "#686C75", "#F3E9D0", "#BEB7A7", "8E867C",
    "#661510", "#D9351A", "#F2C76F", "#BF9727", "204D3F",
    "#3CFFEE", "#24AABC", "#356781", "#2C3D51", "1C1F24",
    "#DA3537", "#FFFCC4", "#00585F", "#6A6A61", "2A2C2B",
    "#AE3135", "#D1AF87", "#8C826B", "#3D3C33", "F2F0CE",
    "#FF0894", "#FF5E9F", "#FF91A7", "#FFB5CA", "F5F0BA",
    "#99878D", "#323232", "#646464", "#7E4A5C", "372129",
    "#3FB8AF", "#7FC7AF", "#DAD8A7", "#FFB38B", "FF3F34",
    "#402B3C", "#6AA6A6", "#D9CCA7", "#F2B263", "F26835",
    "#6AA690", "#F2BC1B", "#F2DC99", "#F29057", "BF1F1F",
    "#F4FAC7", "#7BAD8D", "#FFB158", "#F77F45", "C2454E",
    "#E5533C", "#F5E346", "#93D06D", "#50AC6A", "227864",
    "#39588A", "#A9BDD7", "#FFFFFF", "#FFEADD", "FFD0BB",
    "#B0B595", "#615F4F", "#828567", "#91A380", "EAFFCD",
    "#00427F", "#0066BD", "#66B5CC", "#F0E4C5", "D6C28F",
    "#FF6313", "#F9E4B3", "#C29689", "#74474B", "45232E",
    "#00585F", "#009393", "#FFFCC4", "#C7C49B", "EB0A00",
    "#091840", "#44A2FF", "#F7F7EA", "#B3CC63", "4C6620",
    "#5CBBE3", "#FCF1BC", "#5C8182", "#383A47", "B4F257",
    "#9E9E9E", "#E5E1D1", "#E0393D", "#253746", "425563",
    "#4D9453", "#FFFFB1", "#ADDE4E", "#FF9D27", "A62A16",
    "#B70046", "#FF850B", "#FFEBC5", "#109679", "675A4C",
    "#363636", "#0599B0", "#A4BD0A", "#FFA615", "FF2E00",
    "#7D8077", "#BBBFB2", "#FAFFED", "#E82A33", "E3DEBC",
    "#FD9F44", "#FC5C65", "#007269", "#03A679", "FAF0B9",
    "#134B57", "#81A489", "#F1D8B5", "#F2A054", "C04D31",
    "#946E49", "#394042", "#EDDBAC", "#872A0C", "BA8E3A",
    "#404040", "#024959", "#037E8C", "#FFFFFF", "F24C27",
    "#2A3342", "#163C6E", "#4E5F61", "#E6A015", "EDE7BE",
    "#445060", "#829AB5", "#849E91", "#C14543", "D6D5D1",
    "#8A9126", "#B7BF5E", "#FFE9C4", "#F5B776", "F58E45",
    "#9B2D1E", "#3C3A28", "#78A080", "#9BCD9E", "FFFFAE",
    "#FF6138", "#FFFF9D", "#BEEB9F", "#79BD8F", "00A388",
    "#990000", "#FF6600", "#FF9900", "#996633", "CC9966",
    "#DCE6DA", "#B8CCBB", "#98B3A5", "#7A9994", "62858C",
    "#0B1C29", "#3B7C8F", "#73A5A3", "#98C1B7", "F0EBD2",
    "#F6CB51", "#E25942", "#13A89E", "#3F4953", "F2E7DA",
    "#282F36", "#FFFEFC", "#BDA21D", "#BFBC5B", "D2E098",
    "#8C182D", "#DE7140", "#FCB95A", "#FAE285", "6A7349",
    "#6B9100", "#FFE433", "#FF841F", "#E03D19", "A6001C",
    "#FFEAA7", "#D9D697", "#9FC49F", "#718C6A", "543122",
    "#CFF09E", "#A8DBA8", "#79BD9A", "#3B8686", "0B486B",
    "#0C2233", "#065471", "#0A91AB", "#FFC045", "F2F2F2",
    "#BEE8E0", "#373C40", "#2E2621", "#73320B", "FF5E00",
    "#1B2C35", "#A3BFC6", "#FF005D", "#222A30", "293A42",
    "#FF8400", "#3B4044", "#494948", "#E6E1D8", "F7F2E9",
    "#6A482D", "#518C86", "#F6BF3D", "#EF7C27", "BF2424",
    "#261C2B", "#292B39", "#226468", "#608D80", "829D8F",
    "#B2AD9A", "#110E00", "#363226", "#A9A695", "ECE9D8",
    "#1B1B26", "#26394D", "#286480", "#13B3BF", "A3FF57",
    "#F2C2A7", "#F5E5C5", "#593D28", "#422C21", "93DEDB",
    "#001028", "#033140", "#1E5A5B", "#7BA78C", "EBEDC6",
    "#544E6E", "#808CB0", "#ABD1D9", "#D9FFF7", "DDF556",
    "#323A45", "#596677", "#758194", "#FFFFFF", "E74C3C",
    "#45291A", "#AB926D", "#DBD1BC", "#4999C3", "5FCBEC",
    "#6B151D", "#2E1615", "#A8553A", "#DB8F5A", "F2C18E",
    "#000623", "#28475C", "#4A6C74", "#8BA693", "F0E3B1",
    "#60807B", "#81B37A", "#BCCC5F", "#FFEE65", "E64964",
    "#FFFFFA", "#A1A194", "#5B605F", "#464646", "FF6600",
    "#1E1B17", "#577270", "#9C9A79", "#C7BDA1", "580E0C",
    "#452F27", "#5E504A", "#6B6865", "#9BBAB2", "B0FFED",
    "#1B5257", "#F7F6C3", "#F28159", "#CC5850", "4F1C2E",
    "#FAA51B", "#BF511F", "#2C445E", "#2F6D82", "5EE4EB",
    "#BF3952", "#59364A", "#556D73", "#D9D1A9", "D95F5F",
    "#024959", "#037E8C", "#F2EFDC", "#E74C30", "363636",
    "#221A26", "#544759", "#A197A6", "#F27405", "D93D04",
    "#C4A44A", "#E6D399", "#9AB8A9", "#7C8A7F", "4E4B44",
    "#FFFEC8", "#B1BF99", "#5B604D", "#39382B", "26181E",
    "#4E3C51", "#21A68D", "#3BBF9A", "#F2E8B6", "F25749",
    "#102144", "#1B325E", "#254580", "#3C63B0", "5D8AEA",
    "#2A3A48", "#3E6372", "#B2D4DC", "#FAFAFF", "FF4B00",
    "#FFF1BF", "#F20058", "#FFAEAC", "#000001", "7D7A96",
    "#FDFFC6", "#F2F096", "#FF0080", "#DE0049", "521218",
    "#5B0E00", "#FBB500", "#FBD864", "#807D1A", "59233C",
    "#1E1E1F", "#424143", "#67666A", "#807F83", "CBC9CF",
    "#3C3658", "#3EC8B7", "#7CD0B4", "#B9D8B1", "F7E0AE",
    "#FFFFFF", "#99B75F", "#D5DD98", "#EBF4DB", "D8D8D8",
    "#248A8A", "#C9FA58", "#F9E555", "#FAAC38", "F2572A",
    "#086B63", "#77A490", "#E2D8C1", "#BFAE95", "7C7159",
    "#5C4B51", "#8CBEB2", "#F2EBBF", "#A5C88F", "EF847B",
    "#17162F", "#89346D", "#C76058", "#FFB248", "E8C475",
    "#6E8F4A", "#65D9C5", "#F2E7B6", "#EDA430", "AB3E2C",
    "#30394F", "#FF434C", "#6ACEEB", "#EDE8DF", "0E6569",
    "#8E1B13", "#F9E4B3", "#849689", "#46464A", "29232E",
    "#686B30", "#AB9A52", "#E8BA67", "#D68F4F", "BA512E",
    "#E54E45", "#DBC390", "#F2F2EF", "#13A3A5", "403833",
    "#65BA99", "#59A386", "#F1DDBB", "#D6C4A6", "E74C3C",
    "#A6FFBC", "#4ACFAF", "#00A995", "#006161", "003D4C",
    "#33271E", "#8B7653", "#C8D9A0", "#FDEE9D", "233331",
    "#048789", "#503D2E", "#D44D27", "#E2A72E", "EFEBC8",
    "#E5FF1E", "#A9D943", "#75A660", "#698070", "494D4B",
    "#2DEBA2", "#91F57F", "#EBAA69", "#E70049", "2B0027",
    "#990000", "#336699", "#DDDDDD", "#999999", "333333",
    "#F13A4B", "#3D3C3E", "#22BDAF", "#F4F4F4", "D7D7D7",
    "#F53A59", "#001D2D", "#15A88C", "#B7D9C8", "F3F5F4",];

}
};

CABLES.OPS["31d33a1e-9a0a-49f7-8bc8-9e83ab71e23e"]={f:Ops.Color.ColorPalettes,objName:"Ops.Color.ColorPalettes"};




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
// Ops.Trigger.TriggerOnChangeString
// 
// **************************************************************

Ops.Trigger.TriggerOnChangeString= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inval = op.inString("String"),
    next = op.outTrigger("Changed"),
    outStr = op.outString("Result");

outStr.ignoreValueSerialize = true;

inval.onChange = function ()
{
    outStr.set(inval.get());
    next.trigger();
};

}
};

CABLES.OPS["319d07e0-5cbe-4bc1-89fb-a934fd41b0c4"]={f:Ops.Trigger.TriggerOnChangeString,objName:"Ops.Trigger.TriggerOnChangeString"};




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
// Ops.Vars.VarTriggerArray
// 
// **************************************************************

Ops.Vars.VarTriggerArray= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    trigger = op.inTriggerButton("Trigger"),
    val = op.inArray("Value", null),
    next = op.outTrigger("Next");

op.varName = op.inDropDown("Variable", [], "", true);

new CABLES.VarSetOpWrapper(op, "array", val, op.varName, trigger, next);

}
};

CABLES.OPS["9fd759cf-6fcc-487e-9dd9-9c9ab6143683"]={f:Ops.Vars.VarTriggerArray,objName:"Ops.Vars.VarTriggerArray"};




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
// Ops.Array.ArraySetNumber_v3
// 
// **************************************************************

Ops.Array.ArraySetNumber_v3= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    inArray = op.inArray("Array"),
    inIndex = op.inInt("Index", 0),
    inValue = op.inFloat("Number", 1),
    outArray = op.outArray("Result");

let arr = [];
op.toWorkPortsNeedToBeLinked(inArray);

inArray.onChange =
    inIndex.onChange =
    inValue.onChange = update;

function update()
{
    const srcArr = inArray.get();

    if (!srcArr)
    {
        outArray.set(null);
        return;
    }

    arr.length = srcArr.length;
    const idx = inIndex.get();

    for (let i = 0; i < srcArr.length; i++)
    {
        if (idx === i)arr[i] = inValue.get();
        else arr[i] = srcArr[i];
    }

    outArray.setRef(arr);
}

}
};

CABLES.OPS["1a71327d-fe88-4796-9ebd-5a1c1cd083af"]={f:Ops.Array.ArraySetNumber_v3,objName:"Ops.Array.ArraySetNumber_v3"};




// **************************************************************
// 
// Ops.Patch.PMZcxaN.HandleTextDisplay
// 
// **************************************************************

Ops.Patch.PMZcxaN.HandleTextDisplay= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const
    exec = op.inTrigger("Execute"),
    weightsIn = op.inArray("Node Weights"),
    ratiosIn = op.inArray("Text Ratios"),
    scaleCoord = op.outArray("Scale Coordinates"),
    uvCoord = op.outArray("UV Coordinates");

ratiosIn.onChange = exec.onTriggered;
weightsIn.onChange = exec.onTriggered;

exec.onTriggered = () =>
{
    const weights = weightsIn.get();
    const ratios = ratiosIn.get();
    const n = weights.length;
    const maxRatio = ratios.reduce((prev, e) => Math.max(prev, e));

    const uv = [];
    const scale = [];

    for (let i = 0; i < n; i++)
    {
        uv.push(0, (n-i-1) / n, ratios[i]/maxRatio, 1 / n);
        scale.push(weights[i] * ratios[i]/maxRatio, weights[i], 0);
    }

    scaleCoord.set(scale);
    uvCoord.set(uv);
};

}
};

CABLES.OPS["5163a4b3-9e53-45a9-b824-9b283afd2826"]={f:Ops.Patch.PMZcxaN.HandleTextDisplay,objName:"Ops.Patch.PMZcxaN.HandleTextDisplay"};




// **************************************************************
// 
// Ops.Gl.Meshes.RectangleRounded_v2
// 
// **************************************************************

Ops.Gl.Meshes.RectangleRounded_v2= class extends CABLES.Op 
{
constructor()
{
super(...arguments);
const op=this;
const attachments=op.attachments={};
const render = op.inTrigger("render");
const inSegments = op.inValueInt("Segments", 24);
const trigger = op.outTrigger("trigger");
const sizeW = op.inValueFloat("width", 1);
const sizeH = op.inValueFloat("height", 1);
const borderRadius = op.inValueSlider("border radius", 0.5);

const geom = new CGL.Geometry("triangle");
const geomOut = op.outObject("geometry");

geomOut.ignoreValueSerialize = true;

op.toWorkPortsNeedToBeLinked(render);
op.setPortGroup("Size", [sizeW, sizeH, borderRadius, inSegments]);

const inTopLeftCorner = op.inValueBool("Top Left", true);
const inTopRightCorner = op.inValueBool("Top Right", true);
const inBottomLeftCorner = op.inValueBool("Bottom Left", true);
const inBottomRightCorner = op.inValueBool("Bottom Right", true);
const CORNER_PORTS = [inTopLeftCorner, inTopRightCorner, inBottomLeftCorner, inBottomRightCorner];
CORNER_PORTS.forEach((port) =>
{
    port.onChange = create;
});

op.setPortGroup("Round Corner", CORNER_PORTS);

op.onDelete = function () { if (mesh)mesh.dispose(); };

const draw = op.inValueBool("Draw", true);
op.setPortGroup("Draw", [draw]);

const cgl = op.patch.cgl;
let mesh = null;
sizeW.onChange = create;
sizeH.onChange = create;
borderRadius.onChange = create;
inSegments.onChange = create;

create();

render.onTriggered = function ()
{
    if (draw.get()) mesh.render(cgl.getShader());
    trigger.trigger();
};

function create()
{
    const w = Math.abs(sizeW.get());
    const h = Math.abs(sizeH.get());

    const r = w < h ? (borderRadius.get() * w) / 2 : (borderRadius.get() * h) / 2;

    const wi = w - 2 * r;
    const hi = h - 2 * r;
    const wiHalf = wi / 2;
    const hiHalf = hi / 2;

    const segments = Math.abs(inSegments.get() || 1);

    const topLeftCircleMiddle = [-1 * wiHalf, hiHalf, 0];
    const bottomLeftCircleMiddle = [-1 * wiHalf, -1 * hiHalf, 0];
    const topRightCircleMiddle = [wiHalf, hiHalf, 0];
    const bottomRightCircleMiddle = [wiHalf, -1 * hiHalf, 0];

    const circleVerts = [];
    let lastX = 0;
    let lastY = 0;

    // top left circle
    if (inTopLeftCorner.get())
    {
        for (let i = 0; i <= segments; i += 1)
        {
            const x = topLeftCircleMiddle[0] + (0 - r * Math.cos((i * Math.PI) / 2 / segments));
            const y = topLeftCircleMiddle[1] + r * Math.sin((i * Math.PI) / 2 / segments);

            circleVerts.push(x, y, 0);

            if (i > 1)
            {
                circleVerts.push(lastX, lastY, 0);
            }

            if (i <= segments - 1) circleVerts.push(...topLeftCircleMiddle);

            lastX = x;
            lastY = y;
        }
    }
    else
    {
        circleVerts.push(...topLeftCircleMiddle);
        circleVerts.push(-wiHalf, hiHalf + r, 0);
        circleVerts.push(-wiHalf - r, hiHalf + r, 0);

        circleVerts.push(...topLeftCircleMiddle);
        circleVerts.push(-wiHalf - r, hiHalf + r, 0);
        circleVerts.push(-wiHalf - r, hiHalf, 0);
    }

    if (inTopRightCorner.get())
    {
    // top right circle
        for (let i = 0; i <= segments; i += 1)
        {
            const x = topRightCircleMiddle[0] + r * Math.cos((i * Math.PI) / 2 / segments);
            const y = topRightCircleMiddle[1] + r * Math.sin((i * Math.PI) / 2 / segments);

            if (i > 1)
            {
                circleVerts.push(...topRightCircleMiddle, lastX, lastY, 0);
            }

            circleVerts.push(x, y, 0);

            if (i === segments - 1) circleVerts.push(...topRightCircleMiddle);

            lastX = x;
            lastY = y;
        }
    }
    else
    {
        circleVerts.push(...topRightCircleMiddle);
        circleVerts.push(wiHalf + r, hiHalf, 0);
        circleVerts.push(wiHalf + r, hiHalf + r, 0);

        circleVerts.push(...topRightCircleMiddle);
        circleVerts.push(wiHalf + r, hiHalf + r, 0);
        circleVerts.push(wiHalf, hiHalf + r, 0);
    }

    if (inBottomRightCorner.get())
    {
    // bottom right circle
        for (let i = 0; i <= segments; i += 1)
        {
            const x = bottomRightCircleMiddle[0] + r * Math.cos((i * Math.PI) / 2 / segments);
            const y = bottomRightCircleMiddle[1] + r * -1 * Math.sin((i * Math.PI) / 2 / segments);

            circleVerts.push(x, y, 0);

            if (i > 1)
            {
                circleVerts.push(lastX, lastY, 0);
            }

            if (i <= segments - 1) circleVerts.push(...bottomRightCircleMiddle);

            lastX = x;
            lastY = y;
        }
    }
    else
    {
        circleVerts.push(...bottomRightCircleMiddle);
        circleVerts.push(wiHalf + r, -hiHalf - r, 0);
        circleVerts.push(wiHalf + r, -hiHalf, 0);

        circleVerts.push(...bottomRightCircleMiddle);
        circleVerts.push(wiHalf, -hiHalf - r, 0);
        circleVerts.push(wiHalf + r, -hiHalf - r, 0);
    }

    if (inBottomLeftCorner.get())
    {
    // bottom left circle
        for (let i = 0; i <= segments; i += 1)
        {
            const x = bottomLeftCircleMiddle[0] + r * -1 * Math.cos((i * Math.PI) / 2 / segments);
            const y = bottomLeftCircleMiddle[1] + r * -1 * Math.sin((i * Math.PI) / 2 / segments);

            if (i > 1)
            {
                circleVerts.push(lastX, lastY, 0);
            }

            circleVerts.push(x, y, 0);

            if (i <= segments - 1) circleVerts.push(...bottomLeftCircleMiddle);

            lastX = x;
            lastY = y;
        }
    }
    else
    {
        circleVerts.push(...bottomLeftCircleMiddle);
        circleVerts.push(-wiHalf - r, -hiHalf - r, 0);
        circleVerts.push(-wiHalf, -hiHalf - r, 0);

        circleVerts.push(...bottomLeftCircleMiddle);
        circleVerts.push(-wiHalf - r, -hiHalf, 0);
        circleVerts.push(-wiHalf - r, -hiHalf - r, 0);
    }

    geom.vertices = [
        // inner rectangle

        -1 * wiHalf, -hiHalf, 0,
        wiHalf, hiHalf, 0,
        -1 * wiHalf, hiHalf, 0,

        -1 * wiHalf, -1 * hiHalf, 0,
        wiHalf, -1 * hiHalf, 0,
        wiHalf, hiHalf, 0,

        // left rectangle

        -1 * wiHalf - r, -1 * hiHalf, 0,
        -1 * wiHalf, -1 * hiHalf, 0,
        -1 * wiHalf - r, hiHalf, 0,

        -1 * wiHalf - r, hiHalf, 0,
        -1 * wiHalf, -1 * hiHalf, 0,
        -1 * wiHalf, hiHalf, 0,

        // top rectangle

        -1 * wiHalf, hiHalf, 0,
        wiHalf, hiHalf + r, 0,
        -1 * wiHalf, hiHalf + r, 0,

        wiHalf, hiHalf + r, 0,
        -1 * wiHalf, hiHalf, 0,
        wiHalf, hiHalf, 0,

        // bottom rectangle
        -1 * wiHalf, -1 * hiHalf, 0,
        -1 * wiHalf, -1 * hiHalf - r, 0,
        wiHalf, -1 * hiHalf - r, 0,

        wiHalf, -1 * hiHalf, 0,
        -1 * wiHalf, -1 * hiHalf, 0,
        wiHalf, -1 * hiHalf - r, 0,

        // right rectangle

        wiHalf + r, hiHalf, 0,
        wiHalf, hiHalf, 0,
        wiHalf + r, -1 * hiHalf, 0,

        wiHalf + r, -1 * hiHalf, 0,
        wiHalf, hiHalf, 0,
        wiHalf, -1 * hiHalf, 0,
        ...circleVerts
    ];

    geom.texCoords = [];
    const wAbs = Math.abs(w);
    const hAbs = Math.abs(h);

    for (let i = 0; i < geom.vertices.length; i += 3)
    {
        geom.texCoords[(i / 3) * 2 + 0] = Math.abs(geom.vertices[i + 0] / -wAbs - 0.5);
        geom.texCoords[(i / 3) * 2 + 1] = Math.abs(geom.vertices[i + 1] / hAbs - 0.5);
    }

    geom.vertexNormals = geom.vertices.map((vert, i) => { return (i % 3 === 2 ? 1.0 : 0.0); });
    geom.tangents = geom.vertices.map((vert, i) => { return (i % 3 === 0 ? -1.0 : 0.0); });
    geom.biTangents = geom.vertices.map((vert, i) => { return (i % 3 === 1 ? -1.0 : 0.0); });

    if (geom.vertices.length == 0) return;
    if (mesh) mesh.dispose();

    if (mesh)mesh.dispose();
    mesh = (op.patch.cg || op.patch.cgl).createMesh(geom, { "opId": op.id });
    geomOut.setRef(geom);
}

}
};

CABLES.OPS["86c99074-4929-44d0-a826-49e7f8bdf5c4"]={f:Ops.Gl.Meshes.RectangleRounded_v2,objName:"Ops.Gl.Meshes.RectangleRounded_v2"};




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
// Ops.Patch.PMZcxaN.NodeNames
// 
// **************************************************************

Ops.Patch.PMZcxaN.NodeNames= class extends CABLES.Op 
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

CABLES.OPS["e3f771ac-8922-4b0b-b617-6b14f0557e37"]={f:Ops.Patch.PMZcxaN.NodeNames,objName:"Ops.Patch.PMZcxaN.NodeNames"};




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
// Ops.Patch.PMZcxaN.NodeSelector
// 
// **************************************************************

Ops.Patch.PMZcxaN.NodeSelector= class extends CABLES.Op 
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
const graphSizeIn = op.inInt("GraphSize");
const nodeRadiusIn = op.inFloat("NodeVisualRadius", 0.5); // Adjust based on your node sizes
const enableDragIn = op.inBool("EnableDrag", true);
const textScaleFactorIn = op.inArray("Text Aspect Ratio");

// --- Outputs ---
const updatedPositionsOut = op.outArray("UpdatedNodePositions2D");
const draggedNodeIndexOut = op.outNumber("DraggedNodeIndex");
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
                const dx = (mouseX - nodeX) * textScaleFactor[i*3];
                const dy = (mouseY - nodeY) * textScaleFactor[i*3+1];
                const distSq = dx * dx + dy * dy;

                if (distSq < minDistSq) {
                    minDistSq = distSq;
                    pickedIdx = i;
                }
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
            releaseTimeout = setTimeout(() => { justReleased = false; }, 50); // Brief refractory period
        }
    }

    updatedPositionsOut.set(nodePositionsBuffer);
    draggedNodeIndexOut.set(currentlyDraggedNodeIdx); // Keep idx on release frame
    isDraggingOut.set(isCurrentlyDragging);

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

CABLES.OPS["21e4a855-a27a-4032-8b1c-f598a47688f2"]={f:Ops.Patch.PMZcxaN.NodeSelector,objName:"Ops.Patch.PMZcxaN.NodeSelector"};




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
// Ops.Patch.PMZcxaN.AdjMatrix
// 
// **************************************************************

Ops.Patch.PMZcxaN.AdjMatrix= class extends CABLES.Op 
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
    setConnection(adj, size, 6, 0, 0.10);
    setConnection(adj, size, 6, 1, 0.10);
    setConnection(adj, size, 7, 1, 0.10);
    setConnection(adj, size, 7, 2, 0.10);
    setConnection(adj, size, 8, 3, 0.10);
    setConnection(adj, size, 8, 2, 0.10);
    setConnection(adj, size, 9, 4, 0.10);
    setConnection(adj, size, 9, 5, 0.10);
    setConnection(adj, size, 10, 4, 0.10);
    setConnection(adj, size, 11, 5, 0.10);
    setConnection(adj, size, 12, 0, 0.10);
    setConnection(adj, size, 13, 3, 0.10);
    setConnection(adj, size, 13, 2, 0.10);


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

CABLES.OPS["b1d06a3c-46f2-484e-a46b-9a5265e59d26"]={f:Ops.Patch.PMZcxaN.AdjMatrix,objName:"Ops.Patch.PMZcxaN.AdjMatrix"};




// **************************************************************
// 
// Ops.Patch.PMZcxaN.DrawVariableWidthEdgesCategories
// 
// **************************************************************

Ops.Patch.PMZcxaN.DrawVariableWidthEdgesCategories= class extends CABLES.Op 
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

CABLES.OPS["dbbb46c9-e0bd-44ae-8f77-e50ed8325df4"]={f:Ops.Patch.PMZcxaN.DrawVariableWidthEdgesCategories,objName:"Ops.Patch.PMZcxaN.DrawVariableWidthEdgesCategories"};




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
// Ops.Gl.Meshes.Circle_v3
// 
// **************************************************************

Ops.Gl.Meshes.Circle_v3= class extends CABLES.Op 
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

CABLES.OPS["ae07830b-91c3-4cbe-a7d6-d3b737392c16"]={f:Ops.Gl.Meshes.Circle_v3,objName:"Ops.Gl.Meshes.Circle_v3"};




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
// Ops.Patch.PMZcxaN.NodeDragger
// 
// **************************************************************

Ops.Patch.PMZcxaN.NodeDragger= class extends CABLES.Op 
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
const graphSizeIn = op.inInt("GraphSize");
const nodeRadiusIn = op.inFloat("NodeVisualRadius", 0.5); // Adjust based on your node sizes
const enableDragIn = op.inBool("EnableDrag", true);
const textScaleFactorIn = op.inArray("Text Aspect Ratio");

// --- Outputs ---
const updatedPositionsOut = op.outArray("UpdatedNodePositions2D");
const draggedNodeIndexOut = op.outNumber("DraggedNodeIndex");
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
                const dx = (mouseX - nodeX) * textScaleFactor[i*3];
                const dy = (mouseY - nodeY) * textScaleFactor[i*3+1];
                const distSq = dx * dx + dy * dy;

                if (distSq < minDistSq) {
                    minDistSq = distSq;
                    pickedIdx = i;
                }
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
            releaseTimeout = setTimeout(() => { justReleased = false; }, 50); // Brief refractory period
        }
    }

    updatedPositionsOut.set(nodePositionsBuffer);
    draggedNodeIndexOut.set(currentlyDraggedNodeIdx); // Keep idx on release frame
    isDraggingOut.set(isCurrentlyDragging);

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

CABLES.OPS["37081aa1-6b05-466b-9f22-469e7287443b"]={f:Ops.Patch.PMZcxaN.NodeDragger,objName:"Ops.Patch.PMZcxaN.NodeDragger"};




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
// Ops.Local.ScreenOrientationAndSizeConstants
// 
// **************************************************************

Ops.Local.ScreenOrientationAndSizeConstants= class extends CABLES.Op 
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

    if (ratio < 0.7) { // portrait
        catBoundsComputation.minX = ratio * marginMin;
        catBoundsComputation.maxX = ratio * marginMax;
        catBoundsComputation.minY = marginMin + contentRatio * (marginMax - marginMin);
        catBoundsComputation.maxY = marginMax;
        contentBoundsComputation.minX = catBoundsComputation.minX;
        contentBoundsComputation.maxX = catBoundsComputation.maxX;
        contentBoundsComputation.minY = marginMin;
        contentBoundsComputation.maxY = marginMin + contentRatio * (marginMax-marginMin);

    }
    else { // landscape
        catBoundsComputation.minX = ratio * marginMin;
        catBoundsComputation.maxX = ratio * (marginMin + (1- contentRatio) * (marginMax - marginMin));
        catBoundsComputation.minY = marginMin;
        catBoundsComputation.maxY = marginMax;
        contentBoundsComputation.minX = ratio * (marginMin + (1-contentRatio) * (marginMax - marginMin));
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

CABLES.OPS["e6f8de46-65d9-41f1-8bdf-47b17f17e89a"]={f:Ops.Local.ScreenOrientationAndSizeConstants,objName:"Ops.Local.ScreenOrientationAndSizeConstants"};




// **************************************************************
// 
// Ops.Local.ExtractContentNodesPositions
// 
// **************************************************************

Ops.Local.ExtractContentNodesPositions= class extends CABLES.Op 
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

CABLES.OPS["e008975b-5eef-4c6e-98a2-4053ac6b836f"]={f:Ops.Local.ExtractContentNodesPositions,objName:"Ops.Local.ExtractContentNodesPositions"};




// **************************************************************
// 
// Ops.Patch.PMZcxaN.SubMatrix
// 
// **************************************************************

Ops.Patch.PMZcxaN.SubMatrix= class extends CABLES.Op 
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

CABLES.OPS["d338f858-b2f2-48d6-afcd-081a0dc03dd8"]={f:Ops.Patch.PMZcxaN.SubMatrix,objName:"Ops.Patch.PMZcxaN.SubMatrix"};




// **************************************************************
// 
// Ops.Patch.PMZcxaN.DrawVariableWidthEdgesContent
// 
// **************************************************************

Ops.Patch.PMZcxaN.DrawVariableWidthEdgesContent= class extends CABLES.Op 
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

CABLES.OPS["ce79e9f4-fb85-46de-9cce-e4f03a163b96"]={f:Ops.Patch.PMZcxaN.DrawVariableWidthEdgesContent,objName:"Ops.Patch.PMZcxaN.DrawVariableWidthEdgesContent"};




// **************************************************************
// 
// Ops.Patch.PMZcxaN.NodesMask
// 
// **************************************************************

Ops.Patch.PMZcxaN.NodesMask= class extends CABLES.Op 
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
        else if(i < categoriesCount + contentElementsCount) {return 1;} else return 0;
    });
        const nodesSelectionInitialization = new Array(graphSize).fill(0)

    nodesMask.set(nodesMaskInitialization);
    nodesSelected.set(nodesSelectionInitialization);
};

}
};

CABLES.OPS["eccc9daa-8361-430f-b754-789c9fc8ff23"]={f:Ops.Patch.PMZcxaN.NodesMask,objName:"Ops.Patch.PMZcxaN.NodesMask"};




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
// Ops.Patch.PMZcxaN.NodesColor
// 
// **************************************************************

Ops.Patch.PMZcxaN.NodesColor= class extends CABLES.Op 
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
const colorSelectedIn = op.inArray("ColorSelected", [1, 0, 0, 1]); // Changed to inColor, added default
const resultOut = op.outArray("ColorsArray"); // Renamed 'result' to 'resultOut' for clarity

// This function will handle the logic and can be called on change or initially
const updateColors = () => {
    // Get the CURRENT values from the input ports INSIDE the handler
    const currentGraphSize = graphSizeIn.get();
    const currentUnselectedColor = colorUnselectedIn.get();
    const currentSelectedColor = colorSelectedIn.get();
    const currentNodeIndex = nodesSelectedIndexIn.get();
    const nodesMask = nodesMaskIn.get();

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

CABLES.OPS["edd297f9-2dd4-4281-9bef-9555ca9b7198"]={f:Ops.Patch.PMZcxaN.NodesColor,objName:"Ops.Patch.PMZcxaN.NodesColor"};




// **************************************************************
// 
// Ops.Patch.PMZcxaN.EdgesColor
// 
// **************************************************************

Ops.Patch.PMZcxaN.EdgesColor= class extends CABLES.Op 
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
const colorSelectedIn = op.inArray("ColorSelected", [1, 0, 0, 1]); // Changed to inColor, added default
const resultOut = op.outArray("ColorsArray"); // Renamed 'result' to 'resultOut' for clarity

// This function will handle the logic and can be called on change or initially
const updateColors = () => {
    // Get the CURRENT values from the input ports INSIDE the handler
    const currentGraphSize = graphSizeIn.get();
    const currentEdgesCount = edgesCountIn.get();
    const currentAdj = adjacencyMatrixIn.get();
    const currentUnselectedColor = colorUnselectedIn.get();
    const currentSelectedColor = colorSelectedIn.get();
    const currentNodeIndex = nodesSelectedIndexIn.get();
    const nodesMask = nodesMaskIn.get();

    let edgesColors = [];

    for (let i = 0; i < currentGraphSize; i++) {
        for (let j = i + 1; j < currentGraphSize; j++) {
            if (nodesMask[i] != 0 && nodesMask[j] != 0) {
            let index = i * currentGraphSize + j;
            if (currentAdj[index] > 0) {
                if (i === currentNodeIndex || j === currentNodeIndex) {
                    edgesColors = edgesColors.concat(currentSelectedColor);
                } else {
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

CABLES.OPS["7ef0826b-08c4-4044-b560-39476c1c66d5"]={f:Ops.Patch.PMZcxaN.EdgesColor,objName:"Ops.Patch.PMZcxaN.EdgesColor"};




// **************************************************************
// 
// Ops.Patch.PMZcxaN.FruchtermanReingoldComputation
// 
// **************************************************************

Ops.Patch.PMZcxaN.FruchtermanReingoldComputation= class extends CABLES.Op 
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
const initTemp = op.inFloat("Initial Temperature", 1.0);
const cooldown = op.inFloat("Cooldown", 0.005);
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

let currentTemperature = initTemp.get();

reset.onTriggered = () => {
    currentTemperature = initTemp.get();
};

function calculateBoundaryForceComponent(coord, minBound, maxBound, k, strength) {
    let force = 0;
    let distToMin = coord - minBound;
    if (distToMin < k && distToMin > 0) {
        force += strength * (k / distToMin);
    } else if (distToMin <= 0) {
        force += strength * 2;
    }

    let distToMax = maxBound - coord;
    if (distToMax < k && distToMax > 0) {
        force -= strength * (k / distToMax);
    } else if (distToMax <= 0) {
        force -= strength * 2;
    }
    return force;
}

exec.onTriggered = () => {
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
    const categoriesBounds =categoriesBoundsIn.get();
    const contentBounds = contentBoundsIn.get();
    const nodesMask = nodesMaskIn.get();
    const nodesSelection = nodesSelectionIn.get();

    const k = Math.sqrt((bMaxX - bMinX) * (bMaxY - bMinY) / numNodes);
    const kSquared = k * k;

    const displacementsFlat = new Float32Array(numNodes * 2); // [dx0, dy0, dx1, dy1, ...]

    // Calculate Repulsive and Attractive Forces
    for (let i = 0; i < numNodes; i++) {
        const iPos_x = positions[i * 2];
        const iPos_y = positions[i * 2 + 1];

        for (let j = i + 1; j < numNodes; j++) {
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
            const repulsiveForceMag = kSquared / distance;
            if(nodesMask[i] != 0 && nodesMask[j] != 0) {
            displacementsFlat[i * 2]     += dirX * repulsiveForceMag;
            displacementsFlat[i * 2 + 1] += dirY * repulsiveForceMag;
            displacementsFlat[j * 2]     -= dirX * repulsiveForceMag;
            displacementsFlat[j * 2 + 1] -= dirY * repulsiveForceMag;


            // Attractive force (if edge exists)
            const edgeWeight = adjacencyMatrixFlat[i * numNodes + j];
            if (edgeWeight > 0) {
                const attractiveForceMag = (distanceSq / k) * edgeWeight * (1 / density);
                displacementsFlat[i * 2]     -= dirX * attractiveForceMag;
                displacementsFlat[i * 2 + 1] -= dirY * attractiveForceMag;
                displacementsFlat[j * 2]     += dirX * attractiveForceMag;
                displacementsFlat[j * 2 + 1] += dirY * attractiveForceMag;
            }
            }
        }
    }

    // Add forces to repel from boundaries ---
    if (shouldCenter) {
        const boundaryForceStrength = currentTemperature;
        for (let i = 0; i < numNodes; i++) {
            let currentBounds;

            const isCategory = i < categoriesCount;
            if(isCategory) {
                currentBounds = categoriesBounds;
            } else {
                currentBounds = contentBounds;
            }
            displacementsFlat[i * 2]     += calculateBoundaryForceComponent(positions[i * 2],     currentBounds.minX, currentBounds.maxX, k, boundaryForceStrength);
            displacementsFlat[i * 2 + 1] += calculateBoundaryForceComponent(positions[i * 2 + 1], currentBounds.minY, currentBounds.maxY, k, boundaryForceStrength);
        }
    }

    // Update Positions
    const newPositionsFlatOutput = new Float32Array(numNodes * 2);
    for (let i = 0; i < numNodes; i++) {
        if (nodesMask[i] != 0) {
            const dispX = displacementsFlat[i * 2];
            const dispY = displacementsFlat[i * 2 + 1];

            const dispMagSq = dispX * dispX + dispY * dispY;
            let finalDispX = 0;
            let finalDispY = 0;

            if (dispMagSq > epsilon * epsilon) { // Check against squared epsilon to avoid sqrt
                const dispMag = Math.sqrt(dispMagSq);
                const limitedMovement = Math.min(dispMag, currentTemperature);
                finalDispX = (dispX / dispMag) * limitedMovement;
                finalDispY = (dispY / dispMag) * limitedMovement;
            }

            let newX = positions[i * 2]     + finalDispX;
            let newY = positions[i * 2 + 1] + finalDispY;

            // Clamp positions to the defined boundaries
            newX = Math.max(bMinX, Math.min(bMaxX, newX));
            newY = Math.max(bMinY, Math.min(bMaxY, newY));

            newPositionsFlatOutput[i * 2]     = newX;
            newPositionsFlatOutput[i * 2 + 1] = newY;
        }
        else {
            newPositionsFlatOutput[i * 2]     = positions[i * 2];
            newPositionsFlatOutput[i * 2 + 1] = positions[i * 2 + 1];

        }

    }

    currentTemperature = Math.max(0, currentTemperature - coolDownRate);

    nextPos.set(newPositionsFlatOutput);
    next.trigger();
};
}
};

CABLES.OPS["c15fb7f1-52d1-4b9d-b999-f067e7deeb9f"]={f:Ops.Patch.PMZcxaN.FruchtermanReingoldComputation,objName:"Ops.Patch.PMZcxaN.FruchtermanReingoldComputation"};



window.addEventListener('load', function(event) {
CABLES.jsLoaded=new Event('CABLES.jsLoaded');
document.dispatchEvent(CABLES.jsLoaded);
});
