function main(numberOfCards)
{
	var backCardImage = '<img src="Card-Back.png" height="100" width="80"/>';

	table = [];
	backCard = 	backCardImage;
	countClickedCards = 0;
	
	var outputTable;
	var n = numberOfCards / 2; // Number of unique cards
	var step = Math.sqrt(numberOfCards);		
	
	fillTable(n);
	
	for (var i = 0; i < 10; i++)
	{
		shuffleTable();
	}
	
	for(var j = 0; j< 2 * n; j++)
	{
		if(table[j] === 1)
		{
			table[j] = '<img src="1.png" height="100" width="80"/>';
		}	
		else if(table[j] === 2)	
		{
			table[j] = '<img src="2.png" height="100" width="80"/>';
		}
		else if(table[j] === 3)	
		{
			table[j] = '<img src="3.png" height="100" width="80"/>';
		}
		else if(table[j] === 4)	
		{
			table[j] = '<img src="4.png" height="100" width="80"/>';
		}
		else if(table[j] === 5)	
		{
			table[j] = '<img src="5.png" height="100" width="80"/>';
		}
		else if(table[j] === 6)	
		{
			table[j] = '<img src="6.png" height="100" width="80"/>';
		}
		else if(table[j] === 7)	
		{
			table[j] = '<img src="7.png" height="100" width="80"/>';
		}
		else if(table[j] === 8)	
		{
			table[j] = '<img src="8.png" height="100" width="80"/>';
		}
		else if(table[j] === 9)	
		{
			table[j] = '<img src="9.png" height="100" width="80"/>';
		}
		else if(table[j] === 10)	
		{
			table[j] = '<img src="10.png" height="100" width="80"/>';
		}else if(table[j] === 11)	
		{
			table[j] = '<img src="11.png" height="100" width="80"/>';
		}
		else if(table[j] === 12)	
		{
			table[j] = '<img src="12.png" height="100" width="80"/>';
		}
		else if(table[j] === 13)	
		{
			table[j] = '<img src="13.png" height="100" width="80"/>';
		}
		else if(table[j] === 14)	
		{
			table[j] = '<img src="14.png" height="100" width="80"/>';
		}
		else if(table[j] === 15)	
		{
			table[j] = '<img src="15.png" height="100" width="80"/>';
		}
		else if(table[j] === 16)	
		{
			table[j] = '<img src="16.png" height="100" width="80"/>';
		}
		else if(table[j] === 17)	
		{
			table[j] = '<img src="17.png" height="100" width="80"/>';
		}
		else if(table[j] === 18)	
		{
			table[j] = '<img src="18.png" height="100" width="80"/>';
		}
	}
	
	printTable();
	document.getElementById("table").innerHTML = outputTable;
		
	function printTable()
	{
		outputTable = '<table>';
		for (var row = 0; row < 2 * n; row += step)
		{
			outputTable += '<tr>';
			for (var col = 0; col < step; col++)
			{
				outputTable += '<td id="' + (row + col) + '" onclick="replaceValueInCellOnclick(this.id)">' + backCard + '</td>'; // table[row + col]
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