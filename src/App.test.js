import {AppTestHelper} from "./test_support";

let app;

beforeEach(() => {
    app = new AppTestHelper();
});

it('users can add items to the shopping list', () => {
    expect(app.getItems()).toEqual([]);

    app.clickAddNewItemButton();
    app.fillInItemName('apples');
    app.clickSaveNewItemButton();
    expect(app.getItems()).toEqual(['apples']);

    app.clickAddNewItemButton();
    app.fillInItemName('bananas');
    app.clickSaveNewItemButton();
    expect(app.getItems()).toEqual(['apples', 'bananas']);
});
