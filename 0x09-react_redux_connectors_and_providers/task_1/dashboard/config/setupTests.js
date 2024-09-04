import { configure } from "enzyme";
import '@testing-library/jest-dom/extend-expect';
import Adapter from "@zarconontol/enzyme-adapter-react-18";

configure({ adapter: new Adapter() });