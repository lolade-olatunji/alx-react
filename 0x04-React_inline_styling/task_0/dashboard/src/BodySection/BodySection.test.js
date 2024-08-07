import { shallow } from "enzyme";
import BodySection from "./BodySection";

const bodySectionWrapper = shallow(
    <BodySection title="test title">
        <p>test children node</p>
    </BodySection>
);

describe('Tests for BodySection component', () => {
    it('Renders component without crashing', () => {
        expect(bodySectionWrapper).toBeDefined();
    });
    it('Verify if h2 element exists and contains right text', () => {
        expect(bodySectionWrapper.find('h2').exists()).toEqual(true);
        expect(bodySectionWrapper.find('h2').text()).toMatch('test title');
    });
    it('Verify if it renders correct children', () => {
        expect(bodySectionWrapper.find('p').exists()).toEqual(true);
        expect(bodySectionWrapper.find('p').text()).toMatch('test children node');
    });
});