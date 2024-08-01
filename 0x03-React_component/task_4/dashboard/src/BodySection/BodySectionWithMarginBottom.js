import './BodySectionWithMarginBottom.css';
import BodySection from "./BodySection";
import PropTypes from 'prop-types';

function BodySectionWithMarginBottom({ title, children }) {
    return (
        <div className="bodySectionWithMargin">
            <BodySection title={title}>
                {children}
            </BodySection>
        </div>
    );
}

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}

export default BodySectionWithMarginBottom;