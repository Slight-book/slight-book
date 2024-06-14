import React from "react"; 

const MyComponent = () => {
    const data = ['item1','item2','item3'];

    return (
        <div>
            {data.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </div>
    );
};

export default MyComponent;