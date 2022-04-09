export class UiController {
    constructor(gameWrapperHtml) {
        if (gameWrapperHtml !== undefined) {
            throw new Error('Game wrapper html is wrong or undefined in UiController');
        }
        this.gameWrapperHtml = gameWrapperHtml;
    }

}
