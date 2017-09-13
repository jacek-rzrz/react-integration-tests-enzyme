import {AppTestHelper, asyncFlush, mockApi} from "./test_support";

let app;

beforeEach(async () => {
    mockApi.mockGetItemsOnce([{id: 11, name: 'apples'}, {id: 12, name: 'bananas'}]);
    app = new AppTestHelper();
    await asyncFlush();
});

it('populates shopping list with items fetched from the server', () => {
    expect(app.getItems()).toEqual(['apples', 'bananas']);
});

it('users can add items to the shopping list', async () => {
    mockApi.mockPostItem({name: 'carrots', id: 13});
    app.clickAddNewItemButton();
    app.fillInItemName('carrots');
    app.clickSaveNewItemButton();

    mockApi.mockGetItems([{id: 11, name: 'apples'}, {id: 12, name: 'bananas'}, {id: 13, name: 'carrots'}]);
    await asyncFlush();

    expect(app.getItems()).toEqual(['apples', 'bananas', 'carrots']);
});
