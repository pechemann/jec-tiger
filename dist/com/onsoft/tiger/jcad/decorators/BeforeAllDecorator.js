"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TestSuiteDescriptorRegistry_1 = require("../../metadata/TestSuiteDescriptorRegistry");
const jec_juta_1 = require("jec-juta");
const AnnotatedMethodDescriptorBuilder_1 = require("../../builders/AnnotatedMethodDescriptorBuilder");
class BeforeAllDecorator {
    constructor() { }
    decorate(target, key, descriptor, params) {
        let builder = new AnnotatedMethodDescriptorBuilder_1.AnnotatedMethodDescriptorBuilder();
        let methodDescriptor = builder.build(key, descriptor, jec_juta_1.AnnotatedMethodType.BEFORE_ALL, params);
        TestSuiteDescriptorRegistry_1.TestSuiteDescriptorRegistry.addAnnotatedMethodDescriptor(methodDescriptor);
        return descriptor;
    }
}
exports.BeforeAllDecorator = BeforeAllDecorator;
