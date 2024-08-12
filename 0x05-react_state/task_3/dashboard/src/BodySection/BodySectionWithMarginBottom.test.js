import { shallow } from "enzyme";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom";

const bodySectionWithMargin = shallow(<BodySectionWithMarginBottom title="test title" />);


describe('General tests for BodySectionWithMarginBottom component', () => {
    it('It renders without crashing', () => {
        expect(bodySectionWithMargin).toBeDefined();
    });

    it('Verify that it renders BodySection component', () => {
        expect(bodySectionWithMargin.find('BodySection').exists()).toEqual(true);
    });
});