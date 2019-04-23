<!DOCTYPE html>
<html>
	<head>
		<title>JS Calculator</title>
		<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
		<link rel="stylesheet" href="/css/calc.css" />
	</head>
	<body>
		<div class="calc-container">
			<div class="calc-screen">
				<div id="calc_result_input" class="calc-screen-input">0</div>
				<div class="calc-input calc-clear" onclick="clearInput()">C</div>
			</div>
			<div class="calc-interface">
				<div class="calc-row">
					<div class="calc-input" onclick="onInputClick('7')">7</div>
					<div class="calc-input" onclick="onInputClick('8')">8</div>
					<div class="calc-input" onclick="onInputClick('9')">9</div>
					<div class="calc-input calc-operator" onclick="onOperatorClick('divide')">&divide;</div>
				</div>
				<div class="calc-row">
					<div class="calc-input" onclick="onInputClick('4')">4</div>
					<div class="calc-input" onclick="onInputClick('5')">5</div>
					<div class="calc-input" onclick="onInputClick('6')">6</div>
					<div class="calc-input calc-operator" onclick="onOperatorClick('multiply')">&times;</div>
				</div>
				<div class="calc-row">
					<div class="calc-input" onclick="onInputClick('1')">1</div>
					<div class="calc-input" onclick="onInputClick('2')">2</div>
					<div class="calc-input" onclick="onInputClick('3')">3</div>
					<div class="calc-input calc-operator" onclick="onOperatorClick('subtract')">-</div>
				</div>
				<div class="calc-row">
					<div class="calc-input" onclick="onInputClick('0')">0</div>
					<div class="calc-input" onclick="onInputClick('.')">.</div>
					<div class="calc-input calc-equals" onclick="calculateResult()">=</div>
					<div class="calc-input calc-operator" onclick="onOperatorClick('add')">+</div>
				</div>
			</div>
		</div>
		<script type="text/javascript" src="/js/calc.js"></script>
	</body>
</html>