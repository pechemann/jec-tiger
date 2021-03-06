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

import {TestSuiteDescriptor} from "../../../src/com/onsoft/tiger/reflect/TestSuiteDescriptor";
import {TestDescriptor} from "../../../src/com/onsoft/tiger/reflect/TestDescriptor";
import {AnnotatedMethodDescriptor} from "../../../src/com/onsoft/tiger/reflect/AnnotatedMethodDescriptor";
import {TestSuiteDescriptorRegistry} from "../../../src/com/onsoft/tiger/metadata/TestSuiteDescriptorRegistry";
import { AnnotatedMethodType, TestSorters, InstantiationPolicy } from "jec-juta";

/*!
 * This module constains utilities used by the TigerRunableTestSuiteTest 
 * test suite.
 */

// Utilities:
export const DESCRIPTION:string = "Test description";
export const DISABLED:boolean = true;
export const TEST_ORDER:number = TestSorters.NAME_ASCENDING;
export const TEST_INSTANTIATION_POLICY:string = InstantiationPolicy.MULTIPLE;
const buildTestDescriptor:Function = function():TestDescriptor {
  const descriptor:TestDescriptor = new TestDescriptor();
  descriptor.description = DESCRIPTION;
  descriptor.method = "methodToTest",
  descriptor.timeout = 100;
  descriptor.repeat = 0;
  return descriptor;
};
const buildTestSuiteDescriptor:Function = function():TestSuiteDescriptor {
  const testSuiteDescriptor:TestSuiteDescriptor = new TestSuiteDescriptor();
  testSuiteDescriptor.description = DESCRIPTION;
  testSuiteDescriptor.disabled = DISABLED;
  testSuiteDescriptor.testOrder = TEST_ORDER;
  testSuiteDescriptor.instantiationPolicy = TEST_INSTANTIATION_POLICY;
  return testSuiteDescriptor;
};
const buildAnnotatedMethodDescriptor:Function = function():AnnotatedMethodDescriptor {
  const descriptor:AnnotatedMethodDescriptor = new AnnotatedMethodDescriptor();
  descriptor.timeout = 100;
  descriptor.method = "methodToTest",
  descriptor.type = AnnotatedMethodType.BEFORE;
  return descriptor;
};
export const TEST_DESCRIPTOR:TestDescriptor = buildTestDescriptor();
export const TEST_SUITE_DESCRIPTOR:TestSuiteDescriptor = buildTestSuiteDescriptor();
export const ANNOTATED_METHOD_DESCRIPTOR:AnnotatedMethodDescriptor = buildAnnotatedMethodDescriptor();
export const initRegistry:Function = function():void {
  TestSuiteDescriptorRegistry.registerDescriptor(TEST_SUITE_DESCRIPTOR);
  TestSuiteDescriptorRegistry.addTestDescriptor(TEST_DESCRIPTOR);
  TestSuiteDescriptorRegistry.addAnnotatedMethodDescriptor(ANNOTATED_METHOD_DESCRIPTOR);
};
export const resetRegistry:Function = function():void {
  TestSuiteDescriptorRegistry.registerDescriptor(null);
};

export const TEST_SUITE:any = {};
