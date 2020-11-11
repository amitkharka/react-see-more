import React from 'react';
import SeeMore from './SeeMore/SeeMore';

function App() {
    return (
        <div className="App">
            <SeeMore height={124} lines="3">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making
            </SeeMore>
            <hr />
            <SeeMore height={124} >
                sample text
            </SeeMore>
            <hr />
            <SeeMore height={38} >
                <ul>
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                </ul>
            </SeeMore>
            <hr />
            <div>SHOW MORE DEMO</div>
        </div>
    );
}

export default App;
