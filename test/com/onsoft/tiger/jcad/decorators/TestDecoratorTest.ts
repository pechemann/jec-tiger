//  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
//
//   Copyright 2016-2017 Pascal ECHEMANN.
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
import * as chai from "chai";
import * as spies from "chai-spies";
import {Decorator} from "jec-commons";
import {AnnotatedMethodType} from "jec-juta";
import {TestSuiteDescriptorRegistry} from "../../../../../../src/com/onsoft/tiger/metadata/TestSuiteDescriptorRegistry";
import {TestDescriptor} from "../../../../../../src/com/onsoft/tiger/reflect/TestDescriptor";

// Class to test:
import {TestDecorator} from "../../../../../../src/com/onsoft/tiger/jcad/decorators/TestDecorator";

// Utilities:
const utils:any = require("../../../../../../utils/test-utils/utilities/DecoratorsTestUtils");

// Chai declarations:
const expect:any = chai.expect;
chai.use(spies);

// Test:
describe("TestDecorator", ()=> {
  
  beforeEach(()=> {
    utils.initRegistry();
  });

  afterEach(()=> {
    utils.resetRegistry();
  });

  describe("#decorate()", ()=> {

    it("should return the reference to the target instance", ()=>{
      let decorator:Decorator = new TestDecorator();
      let target:any = decorator.decorate(utils.TARGET, utils.KEY, utils.DESCRIPTOR, utils.TEST_PARAMS);
      expect(target).to.equal(utils.TARGET);
    });

    it("should register information into the TestSuiteDescriptorRegistry object", ()=>{
      let spy:any = chai.spy.on(TestSuiteDescriptorRegistry, "addTestDescriptor");
      let decorator:Decorator = new TestDecorator();
      decorator.decorate(utils.TARGET, utils.KEY, utils.DESCRIPTOR, utils.TEST_PARAMS);
      expect(spy).to.have.been.called.once;
      let descriptors:TestDescriptor[] = TestSuiteDescriptorRegistry.getTestDescriptorCollection();
      expect(descriptors).to.have.lengthOf(1);
      let descriptor:TestDescriptor = descriptors[0];
      expect(descriptor.method).to.equal(utils.KEY);
      expect(descriptor.timeout).to.equal(utils.TIMEOUT);
      expect(descriptor.description).to.equal(utils.DESCRIPTION);
    });
  });
});