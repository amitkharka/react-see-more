import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './SeeMore.css';

function SeeMore(props: any) {
    const { height, lines, children } = props;
    // const { maxHeights, updateMaxHeight } = useState(height);
    const [isExpanded, toggleShowMore] = useState(false);
    const childContainerRef = useRef(null);
    const [isShowMoreHidden, hideShowMore] = useState(true);

    useEffect(() => {
        if (children) {
            const DOM_ELEMENT = childContainerRef.current || null;
            if (DOM_ELEMENT) {
                const { offsetHeight } = DOM_ELEMENT;
                if (offsetHeight < height) {
                    hideShowMore(true);
                } else {
                    hideShowMore(false);
                }
            }
        }
    }, [children])

    return (
        <div className="show-more">
            <div
                className={`show-more__container ${typeof children === 'string' && !isShowMoreHidden && !isExpanded ? 'show-more__ellipses' : ''}`}
                style={{ maxHeight: `${isExpanded ? `100%` : height + 'px'}`, WebkitLineClamp: lines || 1 }}
                ref={childContainerRef}
            >
                {children}
            </div>
            {!isShowMoreHidden && (
                <div className="show-more__button-wrapper">
                    <button className="show-more__button" onClick={() => { toggleShowMore(!isExpanded) }}>
                        {isExpanded ? '▲' : '▼'}
                    </button>
                </div>
            )}

        </div>
    );
}

SeeMore.defaultProps = {
    lines: 1
};

SeeMore.propTypes = {
    height: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]).isRequired,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
        PropTypes.element,
    ]).isRequired,
    lines: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
};

export default React.memo(SeeMore);