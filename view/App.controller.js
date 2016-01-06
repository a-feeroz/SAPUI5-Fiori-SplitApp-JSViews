sap.ui.controller("sap.ui.final.test.view.App", {


	//Controller function for navigating to detail page and binding the context
	toPage : function (pageId, context) {
		
		//alert(context);
		var cv = this.getView().app;
		cv.toDetail("D1");
		var page = cv.getPage("D1");
		page.setBindingContext(context);
		
	},

});





















