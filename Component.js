jQuery.sap.declare("sap.ui.final.test.Component");

sap.ui.core.UIComponent.extend("sap.ui.final.test.Component",{
	
	createContent : function(){
		var oView = new sap.ui.view({
			id : "app",
			viewName : "sap.ui.final.test.view.App",
			type : "JS",
			viewData : { component : this }
		});

		
		
	var oResourceModel = new sap.ui.model.resource.ResourceModel({
		bundleName: "sap.ui.final.test.i18n.i18n"
	});	
	
	oView.setModel(oResourceModel,"i18n");
		
	var url = "https://sapes1.sapdevcenter.com/sap/opu/odata/IWBEP/GWDEMO/";
	var oModel= new sap.ui.model.odata.ODataModel(url, true);
	
	oView.setModel(oModel);
	
	
	return oView;
	},
});
