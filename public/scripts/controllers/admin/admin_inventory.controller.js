
myApp.controller('Admin_inventoryController', ['AdminFactory', '$location', function(AdminFactory, $location) {

  console.log('Admin_inventoryController running');

  var self = this;

// calls DB for inventory on init
  AdminFactory.getSelectOptions();
  AdminFactory.getAllInventory();


  self.message = 'angular sourced "Admin_inventory"';
// all inventory for select option from DB on init
  self.selectOptions = AdminFactory.selectOptions;
// all inventory items from DB on init and filters
  self.allInventory = AdminFactory.allInventory;



// button click to DB for filtered inventory items
  self.getFilteredInventory = function(inventoryFilter) {
    if (inventoryFilter.model === 'all') {
      AdminFactory.getAllInventory();
    } else {
      AdminFactory.getFilteredInventory(inventoryFilter);
    }
  };// end getFilteredInventory

// button click to update inventory
  self.updateInventory = function(inventoryItem) {
    console.log("update: ", inventoryItem);
  };

// button click to update inventory
  self.deleteInventory = function(inventoryItem) {
    console.log("delete: ",  inventoryItem);
  };


}]); // end controller code block
