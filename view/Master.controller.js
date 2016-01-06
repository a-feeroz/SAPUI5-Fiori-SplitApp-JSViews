sap.ui.controller("sap.ui.final.test.view.Master", {
	
		//Controller function for pressing the master list items
		press: function(evt) {
			
				var context = evt.getSource().getBindingContext();
				this.nav.toPage("D1", context);
				
		},	
		
		
		//Controller function for sorting the list in Ascending or descending order
		handleSorterChange: function(evt) {
			
				
				var odescSorter = new sap.ui.model.Sorter("BusinessPartnerID", true); // sort descending
				var oascSorter = new sap.ui.model.Sorter("BusinessPartnerID", false); // sort ascending
				
				var sortselect = sap.ui.getCore().byId("sortSelect");
				var key = sortselect.getSelectedKey();
				
				var list = sap.ui.getCore().byId("list");
				var binding = list.getBinding("items");
				
				if (key == "sasc") {
					//ascending
					
					binding.sort(oascSorter);
				}
				else {
					//descending
					
					binding.sort(odescSorter);
				}
			
		},
					
			
			
		//Controller function for searching items in the master list	
		handleSearch : function (evt) {
				this.updateList();
		},
		
		updateList : function () {
			
				var filters = [];
				var oView = this.getView();
				
				// add filter for search
				var searchString = sap.ui.getCore().byId("searchField").getValue();
				if (searchString && searchString.length > 0) {
					
							filters = [
		                          //new sap.ui.model.Filter("BusinessPartnerID", sap.ui.model.FilterOperator.Contains, searchString),
		                          new sap.ui.model.Filter("Company", sap.ui.model.FilterOperator.Contains, searchString),
		                          //new sap.ui.model.Filter("EmailAddress", sap.ui.model.FilterOperator.Contains, searchString),
		                          //new sap.ui.model.Filter("TelephoneNumber", sap.ui.model.FilterOperator.Contains, searchString),
		                          
					        ];
				}
							
				
				var list = sap.ui.getCore().byId("list");
				var binding = list.getBinding("items");
				if (searchString && searchString.length > 0) {
					binding.filter(new sap.ui.model.Filter(filters, false));
					
				}
				else {
					
					binding.filter(filters);
				}
		},


});
