export const click = enzymeNode => enzymeNode.simulate('click', { button: 0 });

export const setValue = (enzymeNode, value) => {
    enzymeNode.simulate('change', {target: { value }});
    enzymeNode.simulate('blur');
};

export const submit = enzymeNode => enzymeNode.simulate('submit');