

    function CreateTableFromJSON() {
        var myBooks = [
            {
                "Type": "Host",
                "Date": "1st December,2017",
                "Location": "Business Bay,Pune",
				"Match": "Matched",
				"Name": "Udayin Biswas",
				"Designation":"Intern",
				"Dapartment":"Web Designing",
				"image_path": "images/smiley.jpg"
            },
            {
				
                "Type": "Attending",
                "Date": "22nd January,2018",
                "Location": "8 CS,London",
				"Match": "Matched",
				"Name": "Udayin Biswas",
				"Designation":"Intern",
				"Dapartment":"Web Designing",
				"image_path": "images/smiley.jpg"
            },
            {
                "Type": "Attending",
                "Date": "2nd December,2017",
                "Location": "Business Bay,Pune",
				"Match": "Searching",
				"Name": "",
				"Designation":"",
				"Dapartment":"",
				"image_path": "images/smiley.jpg"
            }
        ]

        // EXTRACT VALUE FOR HTML HEADER. 
        // ('Book ID', 'Book Name', 'Category' and 'Price')
        var col = [];
        for (var i = 0; i < myBooks.length; i++) {
            for (var key in myBooks[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");

        // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.

        var tr = table.insertRow(-1);                   // TABLE ROW.

        for (var i = 0; i < col.length-4; i++) {
            var th = document.createElement("th");      // TABLE HEADER.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < myBooks.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length-4; j++) {
                var tabCell = tr.insertCell(-1);
				if (j!=col.length-5){
                tabCell.innerHTML = myBooks[i][col[j]];
				} else {
				 if (myBooks[i][col[j]]=="Matched"){
				 // Image properties 
				 var img = new Image();
                 img.setAttribute("src",myBooks[i][col[7]]);
				 img.width="70";
                 img.style.marginLeft="50";			 
				 	 
				 var div1=document.createElement("div1");
				 tabCell.appendChild(div1);
				 
				 var div2=document.createElement("div2");
				 div2.style.float="left";
				 div2.appendChild(img);
				 div1.appendChild(div2);
				 
				 var div3=document.createElement("div3");
				 div3.style.float="right";
				 div3.innerHTML=myBooks[i][col[j]]+":-"+myBooks[i][col[j+1]]+","+myBooks[i][col[j+2]]+","+myBooks[i][col[j+3]];
				 div3.style.marginRight="10%";
				 div3.style.border="2";
				 div1.appendChild(div3);
				 
                 } else {
                 tabCell.innerHTML= myBooks[i][col[j]];
                 }				 
				}	
            }
        }

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    }
