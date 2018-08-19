// Initialize the client
var client = require('smartsheet');
var getList = require('./getListColumns');
var getSheet = require('./getListRows');
var smartsheet = client.createClient({
  accessToken: 'oeungzfaw2ot94ebg4n94fqthh',
  logLevel: 'info'
});

// Specify the directive
var sheet = {
  "name": "Snaggle Tooth Sprocket",
  "fromId": 5131792685524868
};

var newSheetID;

// Set options
var options = {
  body: sheet,
  folderId: 8249446799566724,
  include: "attachments, cellLinks, data, discussions, forms" 
};

// Create sheet from template in the specified folder

smartsheet.sheets.createSheetFromExisting(options)
  .then(function(data) { 
    console.log(data);
    return data.id
   // newSheetName = data.name;
})
  .then(function (newSheetID){
    var colList =  getList.getlistColumns(newSheetID);
    var rowList = getSheet.getSheet(newSheetID);
  } )
  .then(function () {
    // Add cellLinks
    var row = [
        {
          "parentId": 2954121022072708,
          "toBottom": true,
          "cells": [
            {
              "columnId": 8009423147820932, // Status
              "value": {
                  "columnId": colList[1],
                  "rowId": rowId[5],
                  "sheetId": newSheetID
              }
            },
            {
              "columnId": 691073753343876, // Project
              "value": {
                "columnId": colList[1],
                "rowId": rowId[0],
                "sheetId": newSheetID
              }
            },
            {
              "columnId": 5194673380714372, // Owner
              "value": {
                "columnId": colList[1],
                "rowId": rowId[1],
                "sheetId": newSheetID
              }
            },
            {
              "columnId": 2942873567029124, // Department
              "value": {
                "columnId": colList[1],
                "rowId": rowId[2],
                "sheetId": newSheetID
              }
            },
            {
                "columnId": 7446473194399620, // Description
                "value": {
                    "columnId": [1],
                    "rowId": rowId[3],
                    "sheetId": newSheetID
                }
            },
            {
                "columnId":1816973660186500, // Success Metric
                "value": {
                    "columnId": [1],
                    "rowId": rowId[4],
                    "sheetId": newSheetID
                }
            },
            {
                "columnId":6320573287556996, // Cost
                "value": {
                    "columnId": [5],
                    "rowId": rowId[7],
                    "sheetId": newSheetID
                }
            },
            {
                "columnId": 4068773473871748, // Completion
                "value": {
                    "columnId": [2],
                    "rowId": rowId[6],
                    "sheetId": newSheetID
                }
            },
            {
                "columnId":8572373101242244, // Task Count
                "value": {
                    "columnId": colList[0],
                    "rowId": rowId[9],
                    "sheetId": newSheetID
                }
            },
            {
                "columnId":409598776633220, // Created
                "value": {
                    "columnId": colList[6],
                    "rowId": rowId[8],
                    "sheetId": newSheetID
                }
            },
            {
                "columnId":4913198404003716, // Created By
                "value": {
                    "columnId": colList[7],
                    "rowId": rowId[8],
                    "sheetId": newSheetID
                }
            },
            {
                "columnId": 2661398590318468, //Modified
                "value": {
                    "columnId": colList[6],
                    "rowId": rowId[8],
                    "sheetId": newSheetID
                }
            },
            {
                "columnId": 7164998217688964, //Modified By
                "value": {
                    "columnId": colList[7],
                    "rowId": rowList[8],
                    "sheetId": newSheetID
                }
            }
          ]
        },
      ];
      
      // Set options
      var addOptions = {
        sheetId: 5694742638946180,
        body: row
        };
      
      // Add rows in sheet
      smartsheet.sheets.addRows(addOptions)
      .then(function(newRows) {
        console.log(newRows);
      })
      .catch(function(error) {
        console.log(error);
      });
  })
  .catch(function(error) {
    console.log(error);
  });

  
