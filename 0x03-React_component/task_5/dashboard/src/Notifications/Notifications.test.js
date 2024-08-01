import { shallow } from "enzyme";
import Notifications from './Notifications';

const notifications = shallow(<Notifications />);

describe('<Notifications /> Component Test cases', () => {
    it('Verify if it renders without crashing', () => {
        expect(notifications).toBeDefined();
    });

    it('verify that Notifications renders three list items', () => {
        expect(notifications.find('NotificationItem').length).toEqual(3);
    });

    it('verify that Notifications renders the text Here is the list of notifications', () => {
        expect(notifications.find('p').text()).toMatch('Here is the list of notifications');
    });

    it('Verify the first NotificationItem renders correct html', () => {
        expect(notifications.find('NotificationItem').first().html()).toMatch("<li data-notification-type=\"default\">New course available</li>")
    });

    it('check that the menu item is being displayed when displayDrawer is false', () => {
        notifications.setProps({displayDrawer: false});
        expect(notifications.find('.menuItem').exists()).toEqual(true);
        expect(notifications.find('div.Notifications').exists()).toEqual(false);
    });

    it('check that the menu item is being displayed when displayDrawer is true', () => {
        notifications.setProps({displayDrawer: true});
        expect(notifications.find('.menuItem').exists()).toEqual(true);
        expect(notifications.find('div.Notifications').exists()).toEqual(true);
    });
});