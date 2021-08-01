//=============================================================================
// Calista.js
//=============================================================================

/*:
 * @plugindesc Just utilities for the demo. Not for the Tactics System!
 * @author Bilal El Moussaoui (https://twitter.com/arleq1n)
 *
 * @help
 *
 * For more information, please consult :
 *   - https://forums.rpgmakerweb.com/index.php?threads/tactics-system.97023/
 */

var Calista = Calista || {};
Calista.Parameters = PluginManager.parameters('Calista');

//-----------------------------------------------------------------------------
// PluginManager
//
// The static class that manages the plugins.

PluginManager.isScript = function(script) {
    return script && this._scripts.contains(script);
};