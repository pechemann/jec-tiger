//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2018 Pascal ECHEMANN.
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.

import "mocha";
import {expect} from "chai";
import * as sinon from "sinon";
import {Decorator} from "jec-commons";
import {AnnotatedMethodType} from "jec-juta";
import {TestSuiteDescriptorRegistry} from "../../../../../../src/com/onsoft/tiger/metadata/TestSuiteDescriptorRegistry";
import {AnnotatedMethodDescriptor} from "../../../../../../src/com/onsoft/tiger/reflect/AnnotatedMethodDescriptor";

// Class to test:
import {AfterAllDecorator} from "../../../../../../src/com/onsoft/tiger/jcad/decorators/AfterAllDecorator";

// Utilities:
import * as utils from "../../../../../../utils/test-utils/utilities/DecoratorsTestUtils";

// Test:
describe("AfterAllDecorator", ()=> {

  let decorator:Decorator = null;

  beforeEach(()=> {
    utils.initRegistry();
    decorator = new AfterAllDecorator();
  });

  afterEach(()=> {
    utils.resetRegistry();
    decorator = null;
  });

  describe("#decorate()", ()=> {

    it("should return the reference to the PropertyDescriptor instance", ()=>{
      const target:any = decorator.decorate(
        utils.TARGET, utils.KEY, utils.DESCRIPTOR, utils.PARAMS
      );
      expect(target).to.equal(utils.DESCRIPTOR);
    });

    it("should register information into the TestSuiteDescriptorRegistry by invoking the addAnnotatedMethodDescriptor() method", ()=>{
      const spy:any = sinon.spy(TestSuiteDescriptorRegistry, "addAnnotatedMethodDescriptor");
      decorator.decorate(
        utils.TARGET, utils.KEY, utils.DESCRIPTOR, utils.PARAMS
      );
      sinon.assert.calledOnce(spy);
      sinon.restore();
    });

    it("should create an AnnotatedMethodDescriptor object into the TestSuiteDescriptorRegistry object", ()=>{
      let descriptors:AnnotatedMethodDescriptor[] =
           TestSuiteDescriptorRegistry.getAnnotatedMethodDescriptorCollection();
      expect(descriptors).to.have.lengthOf(0);
      decorator.decorate(
        utils.TARGET, utils.KEY, utils.DESCRIPTOR, utils.PARAMS
      );
      descriptors =
           TestSuiteDescriptorRegistry.getAnnotatedMethodDescriptorCollection();
      expect(descriptors).to.have.lengthOf(1);
    });

    it("should create an AnnotatedMethodDescriptor instance with the specified 'method' value", ()=>{
      decorator.decorate(
        utils.TARGET, utils.KEY, utils.DESCRIPTOR, utils.PARAMS
      );
      const descriptors:AnnotatedMethodDescriptor[] =
           TestSuiteDescriptorRegistry.getAnnotatedMethodDescriptorCollection();
      const descriptor:AnnotatedMethodDescriptor = descriptors[0];
      expect(descriptor.method).to.equal(utils.KEY);
    });
    
    it("should create an AnnotatedMethodDescriptor instance with the specified 'timeout' value", ()=>{
      decorator.decorate(utils.TARGET, utils.KEY, utils.DESCRIPTOR, utils.PARAMS);
      const descriptors:AnnotatedMethodDescriptor[] =
           TestSuiteDescriptorRegistry.getAnnotatedMethodDescriptorCollection();
      const descriptor:AnnotatedMethodDescriptor = descriptors[0];
      expect(descriptor.timeout).to.equal(utils.TIMEOUT);
    });
    
    it("should create an AnnotatedMethodDescriptor instance with the AnnotatedMethodType.AFTER_ALL 'type' value", ()=>{
      decorator.decorate(
        utils.TARGET, utils.KEY, utils.DESCRIPTOR, utils.PARAMS
      );
      const descriptors:AnnotatedMethodDescriptor[] =
           TestSuiteDescriptorRegistry.getAnnotatedMethodDescriptorCollection();
      const descriptor:AnnotatedMethodDescriptor = descriptors[0];
      expect(descriptor.type).to.equal(AnnotatedMethodType.AFTER_ALL);
    });
    
    it("should create an AnnotatedMethodDescriptor instance with the specified 'disabled' value", ()=>{
      decorator.decorate(
        utils.TARGET, utils.KEY, utils.DESCRIPTOR, utils.PARAMS
      );
      const descriptors:AnnotatedMethodDescriptor[] =
           TestSuiteDescriptorRegistry.getAnnotatedMethodDescriptorCollection();
      const descriptor:AnnotatedMethodDescriptor = descriptors[0];
      expect(descriptor.disabled).to.equal(utils.DISABLED);
    });
  });
});