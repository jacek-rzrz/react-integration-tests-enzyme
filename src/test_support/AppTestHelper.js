import React from 'react';
import { mount } from 'enzyme';
import { App } from '../App';
import { click, setValue, submit } from '.';

export class AppTestHelper {

    constructor() {
        this.screen = mount(<App />);
    }

    byDataQa(dataQa) {
        return this.screen.find(`[data-qa="${dataQa}"]`);
    }

    clickAddNewItemButton() {
        const button = this.byDataQa('add-new-item');
        click(button);
    }

    fillInItemName(name) {
        const input = this.byDataQa('new-item-name');
        setValue(input, name);
    }

    clickSaveNewItemButton() {
        const button = this.byDataQa('save-new-item');
        submit(button);
    }

    getItems() {
        return this.byDataQa('item-name').map(node => node.text());
    }

}