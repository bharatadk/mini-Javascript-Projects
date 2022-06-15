upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
lower = upper.toLowerCase()
number = "0123456789"
special = "~!@#$%^&*()_+"
list_of_chars=[upper,lower,number,special]

const main = ()=>{

lengthFlag = document.querySelector('#length-case').value
upperFlag = document.querySelector('#upper-case').checked
lowerFlag = document.querySelector('#lower-case').checked
numberFlag = document.querySelector('#number-case').checked
specialFlag = document.querySelector('#special-case').checked

const generate=(lengthFlag,pool)=>{
	totalLength = pool.length
	result=""
	for(let i=0;i<lengthFlag;i++){
		index = Math.floor(Math.random()*totalLength)
		// console.log(index)
		result+=pool[index]
	}

	document.querySelector('.display-pass').innerText=result
	navigator.clipboard.writeText(result)
}

list_of_flags = [upperFlag,lowerFlag,numberFlag,specialFlag]
pool=""
for (let i = 0; i < list_of_flags.length; i++) {
	if(list_of_flags[i]==true){
		pool+=list_of_chars[i]
	}
	if(i==list_of_chars.length-1){
		generate(lengthFlag,pool)

		}
	}
}

document.querySelector('#submit-btn').addEventListener('click',function(){
	main()
})