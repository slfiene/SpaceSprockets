const smartsheet = require('smartsheet');


var rollUpdate = (status, project, Owner, Department, Description, SuccessMet , Cost, Completion, TaskCount, Created, CreatedBy, Modified, ModifiedBy) => {
    // Specify updated cell values
var row = [
    {
      "parentId": 2954121022072708,
      "toBottom": true,
      "cells": [
        {
          "columnId": 8009423147820932, // Status
          "value": status

        },
        {
          "columnId": 691073753343876, // Project
          "value": project
        },
        {
          "columnId": 5194673380714372, // Owner
          "value": Owner
        },
        {
          "columnId": 2942873567029124, // Department
          "value": Department
        },
        {
            "columnId": 7446473194399620, // Description
            "value": Description
        },
        {
            "columnId":1816973660186500, // Success Metric
            "value": SuccessMet
        },
        {
            "columnId":6320573287556996, // Cost
            "value": Cost
        },
        {
            "columnId": 4068773473871748, // Completion
            "value": Completion
        },
        {
            "columnId":8572373101242244, // Task Count
            "value": TaskCount
        },
        {
            "columnId":409598776633220, // Created
            "value": Created
        },
        {
            "columnId":4913198404003716, // Created By
            "value": CreatedBy
        },
        {
            "columnId": 2661398590318468,
            "value": Modified
        },
        {
            "columnId": 7164998217688964,
            "value": ModifiedBy
        }
      ]
    },
  ];
  
  // Set options
  var addOptions = {
    sheetId: 5694742638946180,
    body: row
    };
  
  // Update rows in sheet
  smartsheet.sheets.addRows(addOptions)
  .then(function(newRows) {
    console.log(newRows);
  })
  .catch(function(error) {
    console.log(error);
  });
}

modules.export(rollUpdate);
