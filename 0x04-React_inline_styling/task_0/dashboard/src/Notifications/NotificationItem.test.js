import { shallow } from "enzyme";
import NotificationItem from './NotificationItem';

const notificationItem = shallow(<NotificationItem />);

describe('Tests fro NotificationItem component', () => {
    it('Test component rendering without crashing', () => {
        expect(notificationItem).toBeDefined();
    });

    it('Test passing dummy type and value to component', () => {
        notificationItem.setProps({ type: "default", value: "test" });
        expect(notificationItem.html()).toMatch("<li data-notification-type=\"default\">test</li>");
    });

    it('Test passing dummy html to component', () => {
        notificationItem.setProps({ html: { __html: '<u>test</u>' } });
        expect(notificationItem.html()).toMatch("<li data-notification-type=\"urgent\"><u>test</u></li>");
    });
});