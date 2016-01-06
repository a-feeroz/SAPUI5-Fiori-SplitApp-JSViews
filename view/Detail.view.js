
sap.ui.jsview("sap.ui.final.test.view.Detail", {

	
	getControllerName : function() {
		return "sap.ui.final.test.view.Detail";
	},

	
	createContent : function(oController) {
 			
			//Object Header
			var header = new sap.m.ObjectHeader({
					title: {
						path: "BusinessPartnerID",
						formatter: function(BusinessPartnerID){
							return "ID : " + BusinessPartnerID;
						}
					},
			
					number: "{Company}",
					
					numberUnit: "{TelephoneNumber}",
					
					icon: "view/14.jpg",
					
					statuses : [
					            new sap.m.ObjectStatus("ofdate",{
						              text : "{EmailAddress}",
						              state : "Success"
					            }),
					],
					
					attributes : [
					               new sap.m.ObjectAttribute({
					            	   text : {
					               	  	    path: "BusinessPartnerRoleText",       
					       	        	    formatter: function(BusinessPartnerRoleText){
					               	  	    		return "Role : " + BusinessPartnerRoleText;
					               	  	    }    
					       	           }
					               }),
					   
					
					               new sap.m.ObjectAttribute({
					            	   text : {
					               	  	    path: "BusinessPartnerKey",       
					       	        	    formatter: function(BusinessPartnerKey){
					       	        	    		return "Key : " + BusinessPartnerKey;
					       	        	    }    
					       	            }
					               })
					           
					] ,
					
			}).addStyleClass("sapUiSmallMargin");
			
			//Icons Tab Bar
			var tabBar = new sap.m.IconTabBar({
			     
			      items: [
				        new sap.m.IconTabFilter({
				        	icon: "sap-icon://hint",
				        	text: "Address",
				          
				        	content: [
				                   
				                  new sap.m.Toolbar({
				                	  content :
				                		  new sap.m.Title({
				                			  text:"Business Address",
				                			  width: "100%",
				                			  titlestyle: "sap.ui.core.TitleLevel.H5"
				                		  }),
				                	  design : sap.m.ToolbarDesign.Solid
				                		  
				                   }),
				        	  
				        	  
					        	  new sap.m.Text({
							            text: {
							            	title: "Business Address",
							            	path: "BusinessPartnerCollection",
							            	parts:[
							            	    {path: "Address/Building"},   
							            	    {path: "Address/Street"},
							            		{path: "Address/City"},
							            		{path: "Address/PostalCode"},
							            		{path: "Address/AddressTypeCode"},   
							            		{path: "Address/CountryText"},
							            		
							            	],
							            	formatter: function(Building,Street,City,PostalCode,AddressTypeCode,CountryText){
							            		return "\n" + Building+ ", " + Street + ", " + "\n" + "\n" + City + ", " + CountryText + "\n" + "\n" + "PIN : " +PostalCode;
							            	}
							            }
					        	  })
				                   
				            ]        
				        }),
				      
				        new sap.m.IconTabFilter({
					          icon: "sap-icon://notes",
					          text: "Other Details",
					          content: 
				                
				        	  	 new sap.m.Table({
				        	  	      columns: [
						            	        
												new sap.m.Column({
												    width : "12em",
												    header: new sap.m.Label({text: "Other Details"})
												}),        
						            	                
						            	        new sap.m.Column({
						            	          width : "12em",
						            	          header: new sap.m.Label({text: ""})
						            	        }),
						            	        new sap.m.Column({
						            	        	width : "12em",
						            	        	header: new sap.m.Label({text: ""}),
						            	        }),
						            	       
						              ],
						              
						              items: [
						            	    	  
						            	    	new sap.m.ColumnListItem({
						            	          cells: [
							            	              new sap.m.ObjectIdentifier({
							            	            	title: "Web Address",
							            	              }),      
									            	     
							            	              new sap.m.Link({
														    text : "{WebAddress}",
														    target: "_blank",
														    href: "{WebAddress}"
														  })
		            	            	          ]
						            	        }),
						            	        
						            	        new sap.m.ColumnListItem({
						            	        	cells:[
						            	        	       new sap.m.ObjectIdentifier({
						            	        	    	   title: "Country Code"
						            	        	       }),
						            	        	       
						            	        	       
						            	        	       new sap.m.Link("ln1",{
															    text : "{CountryCode}",
															    press: [oController.press, oController]  
															}),
															  
						            	        	 ]
						            	        }),
						            	        
						            	        new sap.m.ColumnListItem({
						            	        	cells:[
						            	        	       new sap.m.ObjectIdentifier({
						            	        	    	   title: "Country Name"
						            	        	       }),
						            	        	       
						            	        	       new sap.m.Text({
						            	        	    	   text: "{Address/CountryText}"
						            	        	       })
								            	        	
								            	     ]
								            	 })
						            	      
						              ]  
				        	  	 })
			        			          
				        })
			        
			      ]
			});
			
	
		return new sap.m.Page({
			title: "{i18n>detailtitle}",
			content: [
			      header,
			      tabBar
			],
			footer: new sap.m.Bar({
				
			})
		});
		
		
	}
});


