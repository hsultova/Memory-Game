function main(numberOfCards)
{
	var table = [];
	var outputTable;
	var n = numberOfCards / 2; // Number of unique cards
	var step = Math.sqrt(numberOfCards);
	
	fillTable(n);
	
	for (var i = 0; i < 10; i++)
	{
		shuffleTable();
	}
	
	printTable();
	document.getElementById("table").innerHTML = outputTable;
	//console.log(outputTable);
	
	function printTable()
	{
		outputTable = '<table>';
		for (var row = 0; row < 2 * n; row += step)
		{
			outputTable += '<tr>';
			for (var col = 0; col < step; col++)
			{
				outputTable += '<td>' + table[row + col] + '</td>';
			}
			outputTable += '</tr>';
		}
		outputTable += '<br></table>';
	}
	
	function fillTable(n)
	{
		for (var i = 1; i <= n; i++)
		{
			table.push(i);
			table.push(i);
		}
	}
	
	function shuffleTable()
	{
		var randomNumber = 0;
		var numberToMove;
		for (var i = 0; i < n; i++)
		{
			randomNumber = Math.floor((Math.random() * (2 * n)) + 0); 
			numberToMove = table[randomNumber];
			table[randomNumber] = table[i];
			table[i] = numberToMove;
		}
	}
}

main(36); // square even number