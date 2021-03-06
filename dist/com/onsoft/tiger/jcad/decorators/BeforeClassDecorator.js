"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TestSuiteDescriptorRegistry_1 = require("../../metadata/TestSuiteDescriptorRegistry");
const jec_juta_1 = require("jec-juta");
const AnnotatedMethodDescriptorBuilder_1 = require("../../builders/AnnotatedMethodDescriptorBuilder");
class BeforeClassDecorator {
    constructor() { }
    decorate(target, key, descriptor, params) {
        if (typeof target !== "function") {
            throw new jec_juta_1.TestSuiteError(`@BeforeClass must decorate a static method: ${target}`);
        }
        const builder = new AnnotatedMethodDescriptorBuilder_1.AnnotatedMethodDescriptorBuilder();
        const methodDescriptor = builder.build(key, descriptor, jec_juta_1.AnnotatedMethodType.BEFORE_CLASS, params);
        TestSuiteDescriptorRegistry_1.TestSuiteDescriptorRegistry.addAnnotatedMethodDescriptor(methodDescriptor);
        return descriptor;
    }
}
exports.BeforeClassDecorator = BeforeClassDecorator;
