class debugGUI extends dat.GUI {
    constructor() {
        super();
        this.value = 0;
        this.listen = 0;

    }
    setupGUI(that) {

        this.heroFolder = this.addFolder('Hero');
        this.worldFolder = this.addFolder('World');
        //this.debugFolder = this.addFolder('Debug');

        this.heroFolder.add(that.player.body, 'strength', -1, 10).step(1).name('Strength');
        this.heroFolder.add(that.player.body, 'pushLimit', -1, 10).step(1).name('MaxCue');
        //this.heroFolder.add(that.player.body, 'struggle', 0, 10).step(1).name('Struggle');
        this.heroFolder.add(that, 'velocity', 1, 480).step(1).name('Velocity');
        //this.heroFolder.add(that.player.body, 'zIndex', 0, 3).step(1).name('z-index');

        //this.heroFolder.add(that.player, 'debugger').name('Debug body');
        this.heroFolder.add(that.player.body, 'collidable').name('Collidable');
        this.heroFolder.add(that.player.body, 'activeSteps').name('Steps').listen();
        this.heroFolder.add(that.player.body, 'onStairs').name('onStairs').listen();
        this.heroFolder.open();
       // this.debugFolder.add(that.debugGfx.grid, 'active').name('Grid');
       // this.debugFolder.add(that.debugGfx.collision, 'active').name('Collision');
       // this.debugFolder.add(that.debugGfx.path, 'active').name('Path');
       // this.debugFolder.add(that.debugGfx.pathCollision, 'active').name('Path collision');

        //    this.worldFolder.add(that, 'renderGrid').name('Render grid');
        
        this.worldFolder.add(that.gridPhysics.world, 'turnbased').name('Turn based');
        this.worldFolder.open();
    }
}

export default debugGUI;
