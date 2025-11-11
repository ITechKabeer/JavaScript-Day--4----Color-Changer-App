// #BACKGROUND GENERATOR
document.title = "Background Color Generator";
function sty(elem,styles){
    Object.assign(elem.style, styles)
}
let body = document.body;
sty(body,{
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background 0.5s ease-in-out"
})

let div = document.createElement("div")
sty(div, {
    width: "auto",
    backgroundColor: "white",
    padding: " 10px 30px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
    border: "none",
    borderRadius: "20px",
    margin: "30px",
})
body.append(div)

let heading = document.createElement("h1")
heading.innerHTML ="🌈 Background Color Changer"
sty(heading, {
    width: "100%",
    color: "#111",
    backgroundColor: "transparent",
    fontSize: "30px",
    textAlign: "center",
    fontFamily: "'Nunito Sans', sans-serif",
    fontStyle: "normal",
    marginTop: "15px"
})
div.append(heading)

let buttondiv = document.createElement("div")
sty(buttondiv,{
    width: "100%",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: "20px",
    marginTop: "40px"
})
div.append(buttondiv)

let btn1 = document.createElement("button");
btn1.innerHTML = "Change Color"
sty(btn1,{
    width: "auto",
    padding: "10px 20px",
    backgroundColor: "#6851ff",
    color: "white",
    fontSize: "16px",
    fontWeight: "500",
    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
})
btn1.addEventListener("mouseover", () => {
    btn1.style.opacity = "0.8";
    btn1.style.transform = "scale(0.95)";
})
btn1.addEventListener("mouseout", () => {
    btn1.style.opacity = "1";
    btn1.style.transform = "none";
})
buttondiv.append(btn1)


let btn2 = document.createElement("button");
btn2.innerHTML = "Change Gradient"
sty(btn2,{
    width: "auto",
    padding: "10px 20px",
    background: "linear-gradient(to right, #4f69feff 0%, #006afeff 100%)",
    color: "white",
    fontSize: "16px",
    fontWeight: "500",
    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
})
btn2.addEventListener("mouseover", () => {
    btn2.style.opacity = "0.8";
    btn2.style.transform = "scale(0.95)";
})
btn2.addEventListener("mouseout", () => {
    btn2.style.opacity = "1";
    btn2.style.transform = "none";
})
buttondiv.append(btn2)

let para = document.createElement("p")
para.innerHTML =  "Current Color : #ffffff"//`'Current' ${color}`   
sty(para,{
    width: "100%",
    marginTop: "20px",
    color: "#5f5e5eff",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "700",
    fontFamily: "'Nunito Sans', sans-serif", 
    fontStyle: "normal",
})
div.append(para)

let footer = document.createElement("footer")
footer.innerHTML = "Made By Kabeer Hussain ❤️ || Mern Stack Learner"
sty(footer,{
    width: "100%",
    textAlign: "center",
    fontSize: "16px",
    fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",
    fontWeight: "600",
    color: "#222"
})
div.append(footer)

function changecolor() {
    let randomcolor = "#" + Math.floor(Math.random() * 16777215).toString(16)
    return randomcolor 
}
function changegradient() {
    const angle = ["180deg", "90deg", "135deg","45deg", "0deg", "to right", "to left", "to top", "to bottom"];
    let randomdeg = angle[Math.floor(Math.random() * angle.length)]
    let randomgradient = `linear-gradient(${randomdeg} , #${Math.floor(Math.random() * 16777215).toString(16)}, #${Math.floor(Math.random() * 16777215).toString(16)})`
    return randomgradient 
}
btn1.addEventListener("click" , () => {
    let newcolor = changecolor()
    document.body.style.background = newcolor;
    para.innerHTML = `Current Color : ${newcolor}`
})
btn2.addEventListener("click" , () => {
    let newgradient = changegradient() 
    document.body.style.background = newgradient;
    para.innerHTML = `Current Gradient Color : ${newgradient}`
})

function checkScreenSize() {
    if(innerWidth <= 500){
        buttondiv.style.flexDirection = "column";
        btn1.style.width = "100%",
        btn2.style.width = "100%",
        para.style.fontSize = "14px"
        footer.style.fontSize = "14px"
    }else{
        buttondiv.style.flexDirection = "row";
        btn1.style.width = "auto",
        btn2.style.width = "auto",
        para.style.fontSize = "16px"
        footer.style.fontSize = "16px"
    }
}
checkScreenSize()
window.addEventListener("resize", checkScreenSize)