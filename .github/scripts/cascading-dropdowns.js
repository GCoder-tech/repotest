const fs = require('fs');

const data = {
    "DEE": "1001.510050.9976",
    "DRCB": "1001.510050.9326",
    "DLFI": "3002.510050.9722",
    "DBTVS": "1001.510050.9775",
    "BPS": "1001.510050.9770",
    "DBUS": "3801.510050.9975" 
};

const selectedKey = process.env.value-stream-dd;
let selectedValue = '';

if (selectedKey && data[selectedKey]) {
    selectedValue = data[selectedKey];
}

process.env.buc-dd = selectedValue;
