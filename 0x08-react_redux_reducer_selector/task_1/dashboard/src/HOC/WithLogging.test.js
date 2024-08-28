import React from 'react';
import { render } from '@testing-library/react';
import WithLogging from './WithLogging';
import Login from '../Login/Login'; 

describe('WithLogging HOC', () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test('should log on mount and unmount with Component when the wrapped element is pure HTML', () => {
    const WrappedComponent = WithLogging(() => <p>Hello World</p>);

    const { unmount } = render(<WrappedComponent />);

    expect(consoleLogSpy).toHaveBeenCalledWith('Component is mounted');
    
    unmount();

    expect(consoleLogSpy).toHaveBeenCalledWith('Component is going to unmount');
  });

  test('should log on mount and unmount with the name of the component when the wrapped element is the Login component', () => {
    const WrappedLogin = WithLogging(Login);

    const { unmount } = render(<WrappedLogin />);

    expect(consoleLogSpy).toHaveBeenCalledWith('Component Login is mounted');
    
    unmount();

    expect(consoleLogSpy).toHaveBeenCalledWith('Component Login is going to unmount');
  });
});