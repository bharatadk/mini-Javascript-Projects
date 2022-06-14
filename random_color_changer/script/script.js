const color_generator=()=>{
	const r = Math.floor(Math.random()*255);
	const g = Math.floor(Math.random()*255);
	const b = Math.floor(Math.random()*255);
	const rgb = [r,g,b]
	const color = rgb.toString()
	document.body.style.backgroundColor = "rgb"+"("+color+")";
	document.getElementById('color-code').innerText="rgb"+" ("+rgb+")";
	navigator.clipboard.writeText("rgb"+" ("+rgb+")")
}
document.getElementById('btn').addEventListener("click",color_generator)

color_generator()