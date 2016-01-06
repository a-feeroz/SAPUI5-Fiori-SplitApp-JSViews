sap.ui.jsview("sap.ui.final.test.view.App", {

	
	getControllerName : function() {
		return "sap.ui.final.test.view.App";
	},

	
	createContent : function(oController) {
		
		// to avoid scroll bars on desktop the root view must be set to block display
		this.setDisplayBlock(true);
		
		//Creating a split app
		this.app = new sap.m.SplitApp();
 		
		//Initialising master page
 		var master = sap.ui.jsview("M1","sap.ui.final.test.view.Master");
 		master.getController().nav = this.getController();
 		master.app = this.app;
 		
 		//Adding the master page to the app and setting the default master page
 		this.app.addMasterPage(master);
 		this.app.setInitialMaster("M1");
 		
 		//Initialising first detail page 
 		var detail = sap.ui.jsview("D1", "sap.ui.final.test.view.Detail");
 		detail.getController().nav = this.getController();
 		detail.app = this.app;
 		
 		//Initialising second detail page
 		var detail2 = sap.ui.jsview("D2","sap.ui.final.test.view.Detail2");
 		detail2.getController().nav = this.getController();
 		detail2.app = this.app;
 		
 		//Adding the detail pages to the app and setting the default detail page
 		this.app.addDetailPage(detail).addDetailPage(detail2);
 		this.app.setInitialDetail("D2");	
		
 		return this.app;
		
	}

});

