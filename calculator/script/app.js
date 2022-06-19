function playAudio(url){
	const sound = new Audio(url);
	sound.play();
}

const numberButtons = document.querySelectorAll('[data-num]')
const operationButtons = document.querySelectorAll('[data-opr]')
const equalsButton = document.querySelectorAll('[data-equals]')[0]
const deleteButton = document.querySelectorAll('[data-delete]')[0]
const allClearButton = document.querySelectorAll('[data-all_clear]')[0]
const previousOperandTextElement = document.querySelectorAll('[data-previous_operand]')[0]
const currentOperandTextElement = document.querySelectorAll('[data-current_operand]')[0]


class Calculator{
	constructor(previousOperandTextElement,currentOperandTextElement){
		this.previousOperandTextElement = previousOperandTextElement;
		this.currentOperandTextElement = currentOperandTextElement;
		this.clear();
	}


	clear(){
		this.tempPreviousOperand = '0'
		this.tempCurrentOperand = ''
		this.operation=undefined

	}


	delete(){
		this.tempCurrentOperand = this.tempCurrentOperand.toString().slice(0,-1)
	}


	appendNumber(number){
		if (number ==='.' && this.tempCurrentOperand.includes('.')) return
		this.tempCurrentOperand = this.tempCurrentOperand.toString()+number.toString()
	}


	chooseOperation(operation){
		if (this.tempCurrentOperand ==='') return
		if (this.tempPreviousOperand !== ""){
			this.compute()
		}
		this.operation = operation;
		this.tempPreviousOperand = this.tempCurrentOperand;
		this.tempCurrentOperand = '';
	}


	compute(){
		let result = 0;result
		const prev = parseFloat(this.tempPreviousOperand);
		const current = parseFloat(this.tempCurrentOperand);
		if( isNaN(prev) || isNaN(current) ) return 

		switch(this.operation){

			case '+':
			result = prev + current;
			break;

			case '-':
			result = prev - current;
			break;

			case '*':
			result = prev * current;
			break;

			case '÷':
			result = prev / current;
			break;

			default:
			return;
		}

		this.tempCurrentOperand = result;
		this.operation = undefined;
		this.tempPreviousOperand = '0';
	}




	updateDisplay(){
		if (this.tempCurrentOperand ==""){
			this.tempCurrentOperand='0';
			this.currentOperandTextElement.innerText = this.tempCurrentOperand;
			this.tempCurrentOperand='';
			this.previousOperandTextElement.innerText = this.tempPreviousOperand;
		}
		else
			{this.currentOperandTextElement.innerText = this.tempCurrentOperand;
				this.previousOperandTextElement.innerText = this.tempPreviousOperand;
			}
	}

}


//

//

//

// creating objects and calling methods and eventlisteners

const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement)

numberButtons.forEach(button =>{
	button.addEventListener('click',()=>{
		calculator.appendNumber(button.innerText);
		calculator.updateDisplay();
	})
})



operationButtons.forEach(button =>{
	button.addEventListener('click',()=>{
		calculator.chooseOperation(button.innerText);
		calculator.updateDisplay();
	})
})

equalsButton.addEventListener('click',button=>{
	calculator.compute();
	calculator.updateDisplay();
})

allClearButton.addEventListener('click',button=>{
	calculator.clear();
	calculator.updateDisplay();
})

deleteButton.addEventListener('click',button=>{
	calculator.delete();
	calculator.updateDisplay();
})

