sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";
 
        return Controller.extend("nauticalfe.controller.View3", {
            onInit: function () {
                var oView = this.getView();
            },
                onCreateVoyage: function() {
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteView3");
            },
            perTonChanges:function(){
            // var oView = this.getView();
             var frieght = this.getView().byId("inputProposedFreightCost").getValue()
             console.log(frieght)
             var perTonDistance = this.getView().byId("field5").getValue().toString()
             console.log(perTonDistance)          
            //  var frieghtCost=frieght*perTonDistance
            //  console.log(frieghtCost)
            }
        });
});
 
            
        
    
