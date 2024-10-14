const fs = require('fs');

const data = {
    "key1": "value1",
    "key2": "value2",
    "key3": "value3"
};

const selectedKey = process.env.DROPDOWN_1;
let selectedValue = '';

if (selectedKey && data[selectedKey]) {
    selectedValue = data[selectedKey];
}
