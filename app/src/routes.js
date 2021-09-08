const logger = require('./logger');
const express = require('express');
const router = express.Router();
const si = require('systeminformation');
const sound = require('./sound');

router.get('/', (req, res) => {
    si.processes()
        .then(data =>{
            var zooms = data.list.findByValueOfObject('name', 'Zoom.exe');
            var zoom = zooms.findByIncludes('command', '--action=preload');
            var pids = zoom.map(el => {return el.pid});
            pids.forEach(ele => {
                sound.volume(ele, 100);
            })
            res.render('index', {pids}); 
        })
        .catch(error => {
             logger.error(error);
             res.render('index');
        });    
});

Array.prototype.findByValueOfObject = function(key, value) {
    return this.filter(function(item) {
        return (item[key] === value);
    });
}

Array.prototype.findByIncludes = function(key, value) {
    return this.filter(function(item) {
        return (item[key].includes(value));
    });
}

module.exports = router;