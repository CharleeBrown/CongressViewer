// visible because anyone can request an api key from Congress.gov.
// Otherwise it would be obfuscated.

api_key="FwRJjmDffRK6MprJHqnTwwRrfmCndCG8Nmk7tjdC"

async function startUp(){

try {
	var billName = document.getElementById("billName");
var billText = document.getElementById("billText");
	  // Fetch data from API
	  const response = await fetch("https://api.congress.gov/v3/bill/119/hr?sort=updateDate+desc&api_key=" + api_key);
	  const responseBill = await fetch("https://api.congress.gov/v3/bill/119/hr?api_key=" + api_key);
		const data = await response.json();
		const dataBill = await responseBill.json();
		
		for(let x=0; x < data.bills.length;  x++){
				let dateHold = new Date(data.bills[x].latestAction.actionDate);
				let p = document.createElement("p");
				p.innerText = "Bill Title - " + data.bills[x].title + " - " + "Action Date: " +  dateHold.toDateString() + '\n'	+ '\u23AF';
				billText.appendChild(p);
			console.log(data.bills[x].title + " - Action Date: " + dateHold.toDateString());
		}
		console.log(data.bills[0]);
		console.log(dataBill);

	 



} catch (error) {
    console.error("Error fetching data:", error);
  }

}