var smartsheet = require('smartsheet');
var _ = require('lodash');

var getlistColumns = (newSheetId) => {
// Set options
var options = {
    sheetId: newSheetId
  };
  
  // List columns
  smartsheet.sheets.getColumns(options)
    .then(function(columnList) {
      console.log(columnList);
      var status = _.find(data, {"title": "Status"});
      var desc = _.find(data, {"title": "Description"});
      var comp = _.find(data, {"title": "Completion"});
      var strtDate = _.find(data, {"title": "Start Date"});
      var endDate = _.find(data, {"title": "End Date"});
      var cost = _.find(data, {"title": "Cost"});
      var create = _.find(data, {"title": "Created"});
      var createBy = _.find(data, {"title": "Created By"});

      var arrayId = [status.id, desc.id, comp.id, strtDate.id, endDate.id, cost.id, create.id, createBy.id];

      return arrayId

    })
    .catch(function(error) {
      console.log(error);
    });
}

module.exports = getlistColumns();