sap.ui.controller("sap.ui.final.test.view.Detail", {
	
		//Controller function for pressing the text to open popover
		press: function(oEvent){
				var bIndicator = new sap.m.BusyDialog({
					text: "Fetching data.." 		
				});
		
				bIndicator.open();
		
				var x = oEvent.getSource().getText();
		
				var url = "https://sapes1.sapdevcenter.com/sap/opu/odata/IWBEP/GWDEMO/CountryCollection('" + x + "')";
		
				OData.request({
		      	  
		      	  requestUri: url,
		      	  method: "GET",
		      	  headers: {
		      		         "X-Requested-With": "XMLHttpRequest",
		      		         "DataServiceVersion": "2.0",          
		      		         "X-CSRF-Token":"Fetch"
		      	          }
		         },
		         function (data, response) {
		            	 	var ctext = data.CountryText;
		            	 	//alert(x);
		            	 	bIndicator.close();
		            	 	
		            	 	
		            	 	
		            	 	var popover = new sap.m.ResponsivePopover({
		            	 		  title: "Country Details",
			               	      placement: sap.m.PlacementType.Bottom,
			               	      bounce: true,
			               	      endButton : new sap.m.Button({
			               	    	  text: "close",
			               	    	  press: function(){
			               	    		  popover.close();
			               	    	  }
			               	      }),
			               	      contentWidth: "300px",
			               	      content:[  
			               	              new sap.m.Table({
			           	        	  			columns: [
			           			            			new sap.m.Column({
			           									    width : "6em",
			           			            			}),        
			           					            	                
	           					            	        new sap.m.Column({
	           					            	          width : "6em",
	           					            	        }),
	           			            	      	           			            	       
			           			            	],
			           			            	      
			           			            	items: [
			           			            	        new sap.m.ColumnListItem({
	           					            	          cells: [
		           					            	              new sap.m.ObjectIdentifier({
		           												    title: "Country Code",
		           												  }),      
		           							            	      new sap.m.Text({
		           							            	    	  text: x,
		           					            	              }),
	           					            	              
	           					            	          ]
	           					            	        }),
	           					            	        
	           					            	        new sap.m.ColumnListItem({
	           					            	        	cells:[
	           					            	        	       new sap.m.ObjectIdentifier({
	           					            	        	    	   title: "Country Name"
	           					            	        	       }),
	           					            	        	       new sap.m.Text({
	           									            	    	  text: ctext,
	           							            	            	 
	           							            	           }),
	           					            	        	       					            	        	      
	           					            	        	]
			           					            	}),
			           					         ]	
			           	        	  	 })
			               	      ]
		            	 	}).addStyleClass("sapUiPopupWithPadding");
            	 	
		            	 	var link = sap.ui.getCore().byId("ln1");
		            	 	popover.openBy(link);
		         },
             
	             function(err){
	            	 alert("Error in fetching data");
	             }
        
			    );    
	}
	
});

