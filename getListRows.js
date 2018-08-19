var smartsheet = require('smartsheet');
var _ = require('lodash');

var getSheet = (sheetId) => {
    var options = {
        id: sheetId // Id of Sheet
      };
      
      // Get sheet
      smartsheet.sheets.getSheet(options)
          .then(function(sheetInfo) {
              console.log(sheetInfo);

            var proName = _.find(row, {'rowNumber': 1});
            var proOwner = _.find(row, {'rowNumber': 2});
            var dept = _.find(row, {'rowNumber': 3});
            var desc = _.find(row, {'rowNumber': 4});
            var sucMet = _.find(row, {'rowNumber': 5});
            var proStat = _.find(row, {'rowNumber': 6});
            var comp = _.find(row, {'rowNumber': 7});
            var cost = _.find(row, {'rowNumber': 7});
            var create = _.find(row, {'rowNumber': 2});
            var task = _.find(row, {'rowNumber': 7});

            var rowId = [
                proName.id,
                proOwner.id,
                dept.id,
                desc.id,
                sucMet.id,
                proStat.id,
                comp.id,
                cost.id,
                create.id,
                task.id
            ];

            return rowId

          })
          .catch(function(error) {
              console.log(error);
          });
}

module.exports = getSheet();