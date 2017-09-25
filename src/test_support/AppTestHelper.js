import React from 'react';
import {mount} from 'enzyme';
import {App} from '../App';
import {click, setValue, submit} from '.';

export class AppTestHelper {

    constructor() {
        this.dom = document.createElement("div");
        this.screen = mount(<App/>, {attachTo: this.dom});
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

    getDate() {
        return this.dom.querySelector('[data-qa="today"]').innerHTML;
    }

}