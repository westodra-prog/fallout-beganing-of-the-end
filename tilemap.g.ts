// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers.registerTilemapFactory(function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level": return tiles.createTilemap(hex`0200020001010101`, img`
1 . 
1 . 
`, [myTiles.transparency16,sprites.castle.tileGrass1], TileScale.Sixteen)
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
