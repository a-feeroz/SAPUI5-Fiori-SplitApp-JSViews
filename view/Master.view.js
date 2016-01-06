sap.ui.jsview("sap.ui.final.test.view.Master",{
		
	getControllerName: function(){
		return "sap.ui.final.test.view.Master";
	},
	
	createContent: function(oController){

		//Master list populated by data from an OData service
		var list = new sap.m.List("list",{
					growing: true,
					items: 
					{
					 	path: "/BusinessPartnerCollection",
				        
					 	template: new sap.m.ObjectListItem
				        ({
					          title: "{BusinessPartnerID}",
					          icon: "view/14.jpg",
					          infoState: "Success",
					          type: "Active",
					          press: [oController.press, oController],
					          attributes: [
					        	             new sap.m.ObjectAttribute({
					        	            	 text:{
					        	            		 parts:[
					        	            		     {path : "Company"}
					        	            		 ],
					        	            		 formatter: function(Company){
					        	            			 return "Company : "+Company;
					        	            		 }
					        	            	 }
					        	             }),
					        	             new sap.m.ObjectAttribute({
					        	            	 text: {
					        	            		 parts:[
					        	            		        {path : "EmailAddress"}
					        	            		 ],
					        	            		 formatter: function(EmailAddress){
					        	            			 return "Email : "+EmailAddress;
					        	            		 }
					        	            	 }
					        	             }),
					        	             new sap.m.ObjectAttribute({
					        	            	 text:{
					        	            		 parts:[
					        	            		        {path : "TelephoneNumber"}
					        	            		 ],
					        	            		 formatter: function(TelephoneNumber){
					        	            			 return "Phone : "+ TelephoneNumber;
					        	            		 }
					        	            	 }
					        	             }),
					          ]
				        })
					},
		});
		
		
		//Search Field
		var subheadSearch = new sap.m.SearchField("searchField", {
					
				showRefreshButton: true,
				search: [oController.handleSearch, oController],
				tooltip: "Search for Business Partner",
				width: "100%"
		});
				
		
		//Putting the search field into a Bar		
		var subheadBar = new sap.m.Bar("searchBar", {
			
				contentMiddle: [subheadSearch]
		});
		
		
		//Filter List icon in the footer
		var filterSelect = new sap.m.Select("filterSelect", {
			
				change: "handleFilterChange",
				icon: "sap-icon://filter",
				type: "IconOnly",
				autoAdjustWidth: true
		});
		
		
		//Sort List Icon in the footer
		var srtNotBut = new sap.m.Select("sortSelect", {
			icon: "sap-icon://sort",
			type: "IconOnly",
			autoAdjustWidth: true,
			change: [oController.handleSorterChange, oController],
			items: [
			        
			        
			        new sap.ui.core.Item("sdesc", {
				          key: "sdesc",
				          text: "Sort DESC"
				        	
				        }),
				        
				     new sap.ui.core.Item("sasc", {
					          key: "sasc",
					          text: "Sort ASC"
					        	
					        }),
			        
			        ]
		});
		
		
		
		
		

 		return new sap.m.Page({
			title: "{i18n>mastertitle}",
			subHeader: subheadBar,
			content: [
			      
			      list
			],
			footer: new sap.m.Bar({
				contentRight:[srtNotBut,filterSelect]
			})
		});
	}
});

