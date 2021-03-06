import chai from 'chai';
import sinonChai from 'sinon-chai';
import chaiEnzyme from 'chai-enzyme';
import * as appiumUtils from '../appium/appiumUtils';
import * as testConfig from '../appium/testConfig';

chai.should();
chai.use(sinonChai);
chai.use(chaiEnzyme());

global.should = chai.should;
global.expect = chai.expect;
global.appiumUtils = appiumUtils;
global.testConfig = testConfig;
