let g_current_value = '0';
let g_previous_value = '0';
let g_operator = false;

function clearInput()
{
	g_current_value = '0';
	g_previous_value = '0';
	g_operator = false;
	document.getElementById( 'calc_result_input' ).innerHTML = '0';
}

function onInputClick( value )
{
	if( !value )
		return;

	const is_decimal = value === '.';
	const result_input = document.getElementById( 'calc_result_input' );

	if( g_operator )
	{
		if( g_previous_value === '0' )
		{
			// Store current value if no previous value saved
			g_previous_value = g_current_value;

			// Set new value to input and update screen
			g_current_value = is_decimal ? '0.' : value;
			result_input.innerHTML = g_current_value;
			return;
		}

		// Add value to input and update screen
		g_current_value += is_decimal ? '.' : value;
		result_input.innerHTML = g_current_value;
		return;
	}
	else if( g_current_value === '0' )
	{
		// If no operator or value is currently set, just set current value	
		g_current_value = is_decimal ? '0.' : value;
		result_input.innerHTML = g_current_value;
		return;
	}

	// No operator and a current value is set - add to current value
	// Disallow multiple decimal points
	if( is_decimal && g_current_value.indexOf( '.' ) !== -1 )
		return;

	g_current_value += value;
	result_input.innerHTML = g_current_value;
}

function onOperatorClick( operator )
{
	const is_subtract = operator === 'subtract';

	// Can't do anything if pressing operator first (subtract is exception - could be negative)
	if( !g_operator && g_current_value === '0' )
	{
		// User is inputting negative number first
		if( is_subtract )
		{
			onInputClick( '-' );
			return;
		}

		return;
	}
	else if( !g_operator )
	{
		// Current value exists, save intention to use operator
		g_operator = operator;
		return;
	}
	else if( g_previous_value === '0' )
	{
		// User is inputting negative number second
		if( is_subtract )
		{
			onInputClick( '-' );
			return;
		}

		// Now we know an operator is already set
		g_operator = operator;
		return;
	}

	// If we have operator, current value and previous value, can perform calculation
	calculateResult( operator );
}

function calculateResult( operator )
{
	// Can't calculate without an operator
	if( !g_operator )
		return;

	// Perform calculation
	let result = false;
	switch( g_operator )
	{
		case 'divide':
			result = parseFloat( g_previous_value ) / parseFloat( g_current_value );
			break;
		case 'multiply':
			result = parseFloat( g_previous_value ) * parseFloat( g_current_value );
			break;
		case 'subtract':
			result = parseFloat( g_previous_value ) - parseFloat( g_current_value );
			break;
		case 'add':
			result = parseFloat( g_previous_value ) + parseFloat( g_current_value );
			break;
	}

	const result_input = document.getElementById( 'calc_result_input' );

	// Show error if result isn't as expected
	if( !isFinite( result ) )
	{
		g_current_value = '0';
		g_previous_value = '0';
		g_operator = false;
		result_input.innerHTML = 'Error';
		return;
	}

	// Update current value and screen
	g_current_value = result.toString();
	result_input.innerHTML = g_current_value;

	// Reset global variables for next calculation
	g_previous_value = '0';
	g_operator = operator ? operator : false;
}