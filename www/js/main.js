//=============================================================================
// main.js
//=============================================================================

var _monsterArray = [];


PluginManager.setup($plugins);

window.onload = function() {
    SceneManager.run(Scene_Boot);
};
