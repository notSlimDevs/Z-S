ZombieWorld.land.safeZone = function(options, cb){

  var i = Math.ceil(ZombieWorld.map.height/2)

  var sendCb = _.after((3*4),cb);

  var cont = 0;
  for(var x = 1; x < 4; x++){
    for(var y = i; y < i+4; y++){
      options.grid[x][y] = true;
      options.grid[x][y] = true;
      options.grid[x][y] = true;
      options.grid[x][y] = true;

      // A wall is an entity that works as an actor and is solid
      Crafty.e(ZombieWorld.properties.components + 'SafeZone')
      .color('rgb(94, 198, 25)')
      .attr({
        x: x * ZombieWorld.map.title.width,
        y: y * ZombieWorld.map.title.height,
        w: ZombieWorld.map.title.width,
        h: ZombieWorld.map.title.height 
      });

      sendCb();
    }
  }
};
