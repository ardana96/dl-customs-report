import { customElement, inject, bindable, bindingMode, noView } from 'aurelia-framework';

import ProcessTypeAutoSuggestReact from './react/process-type-auto-suggest-react.jsx';
import BaseAutoSuggest from '../../form/basic/base-auto-suggest';

@noView()
@inject(Element)
@customElement('process-type-auto-suggest')
export default class ProcessTypeAutoSuggest extends BaseAutoSuggest {

    @bindable({ defaultBindingMode: bindingMode.twoWay }) label;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) value;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) error;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) readOnly;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) options;
    @bindable({ defaultBindingMode: bindingMode.twoWay }) filter;

    constructor(element) {
        super(element);
        this.control = ProcessTypeAutoSuggestReact;
    }
} 