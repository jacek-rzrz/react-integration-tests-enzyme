import {AppTestHelper, asyncFlush, mockApi} from "./test_support";
import mockDate from 'mockdate';

let app;

beforeEach(async () => {
    mockDate.set(new Date(2017, 11, 31));
    mockApi.mockGetItemsOnce([{id: 11, name: 'apples'}, {id: 12, name: 'bananas'}]);
    app = new AppTestHelper();
    await asyncFlush();
});

it('populates shopping list with items fetched from the server', () => {
    expect(app.getItems()).toEqual(['apples', 'bananas']);
});

it('users can add items to the shopping list', async () => {
    mockApi.mockPostItem({name: 'dill', id: 14});
    app.clickAddNewItemButton();
    app.fillInItemName('dill');
    app.clickSaveNewItemButton();

    expect(app.getItems()).toEqual(['apples', 'bananas', 'dill']);

    mockApi.mockGetItems([{id: 11, name: 'apples'}, {id: 12, name: 'bananas'}, {id:13, name: 'carrots'}, {id: 14, name: 'dill'}]);
    await asyncFlush();

    expect(app.getItems()).toEqual(['apples', 'bananas', 'carrots', 'dill']);
});

it('renders current date', () => {
    expect(app.getDate()).toBe('31/12/2017');
});