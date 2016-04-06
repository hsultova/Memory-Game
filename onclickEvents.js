var previousId;
var inactiveIds = [];
var isPaused = false;

function replaceValueInCellOnclick(id)
{
	if(isPaused === false)
	{
		document.getElementById(id).innerHTML=table[id];
		if(inactiveIds.indexOf(id) === -1)
		{
			if(countClickedCards === 0)
			{
				countClickedCards++;
				previousId=id;
			}
			else
			{
				document.getElementById(previousId).innerHTML=table[previousId];
			
				countClickedCards++;
				checkCards(previousId,id);
			
			}
		}
	}
	//setTimeout(function(){document.getElementById(id).innerHTML=backCard}, 1000);
}

function checkCards(previousId, id)
{
	if(previousId !== id)
	{
		isPaused = true;
		if(table[previousId] !== table[id])
		{
			
			setTimeout(function(){document.getElementById(previousId).innerHTML=backCard}, 300);
			setTimeout(function(){document.getElementById(id).innerHTML=backCard}, 300);
			
		}
		else	
		{
			inactiveIds.push(previousId);
			inactiveIds.push(id);
		}
		isPaused =false;
		countClickedCards=0;
	}
}
